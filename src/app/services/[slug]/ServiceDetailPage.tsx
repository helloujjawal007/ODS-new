import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowRight, 
  Check, 
  AlertCircle, 
  Quote, 
  Activity, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Lock 
} from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceJsonLd, getBreadcrumbJsonLd, getFaqJsonLd, SITE_CONFIG } from "@/lib/seo-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}/`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_CONFIG.url}/services/${service.slug}/`,
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: service.title
        }
      ]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Services", href: "/services/" },
    { label: service.shortTitle }
  ];

  const serviceJsonLd = getServiceJsonLd({
    title: service.title,
    tagline: service.tagline,
    slug: service.slug,
    heroImage: service.heroImage
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Services", url: "/services/" },
    { name: service.shortTitle, url: `/services/${service.slug}/` }
  ]);

  const faqJsonLd = getFaqJsonLd(service.faqs);

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.pillar === service.slug || p.category.toLowerCase().includes(service.category.toLowerCase())
  ).slice(0, 2);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* 3 Dynamic Structured Data Schemas */}
      <JsonLd id={`schema-service-${service.slug}`} data={serviceJsonLd} />
      <JsonLd id={`schema-breadcrumb-${service.slug}`} data={breadcrumbJsonLd} />
      <JsonLd id={`schema-faq-${service.slug}`} data={faqJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* 1. HERO SECTION */}
        <section className="my-10 lg:my-14 border-b border-[#E2E8F0] pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                  {service.category} Discipline · Senior Craftsmanship
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>30-Day Zero-Defect Warranty</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Wrench className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Ongoing Maintenance Retainers</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>100% Code & Asset Ownership</span>
                </span>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                {service.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                    <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">{m.value}</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href={`/contact/?service=${encodeURIComponent(service.title)}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Inquire about this discipline</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <Link
                  href="/pricing/"
                  className="w-full sm:w-auto px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-xs border border-[#CBD5E1] hover:border-[#94A3B8] transition-colors text-center"
                >
                  View pricing & estimator
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card with Brand Logo Overlay */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
                <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex items-center justify-between text-xs text-[#64748B]">
                  <div>
                    <span className="text-[10px] uppercase font-mono block">Starting Investment</span>
                    <span className="font-mono font-semibold text-[#0F172A]">
                      {service.pricingModel.startingAt} {service.pricingModel.period}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-[3px] font-medium">
                    30-Day Defect Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BATTLE-TESTED PRODUCTION CASE & RETROSPECTIVE (Show, Don't Tell - Real Client Relief) */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#059669] font-semibold block">
                Battle-Tested in Live Production · Client Retrospective
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Live Implementation Case: {service.caseStudy.client}
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              Real-world telemetry, architectural outcomes, and client engineering feedback after shipping to production.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-[11px] font-mono uppercase text-[#64748B] bg-white border border-[#CBD5E1] px-2.5 py-0.5 rounded-[4px] font-medium">
                    Industry: {service.caseStudy.industry}
                  </span>
                  <span className="text-[11px] font-mono text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded-[4px] font-medium">
                    {service.caseStudy.clientFeedback.timeInProduction}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wide text-[#64748B] mb-1">The Operational Challenge</h3>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {service.caseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wide text-[#2563EB] mb-1">Our Architectural Solution</h3>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {service.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Big Outcome Metric */}
              <div className="lg:col-span-4 bg-white border border-[#BFDBFE] rounded-[8px] p-6 text-center shadow-2xs">
                <span className="text-[11px] font-mono uppercase text-[#2563EB] font-semibold block mb-1">
                  Primary Outcome
                </span>
                <div className="text-3xl sm:text-4xl font-mono font-bold text-[#0F172A] tracking-tight">
                  {service.caseStudy.metric}
                </div>
                <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                  {service.caseStudy.metricLabel}
                </p>
              </div>
            </div>

            {/* Client Engineering Retrospective Card */}
            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 relative shadow-2xs">
              <Quote className="w-5 h-5 text-[#2563EB]/30 mb-2" />
              <p className="text-xs sm:text-sm text-[#1E293B] italic leading-relaxed mb-4">
                &ldquo;{service.caseStudy.clientFeedback.quote}&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-[#F1F5F9] pt-3 text-xs">
                <div>
                  <span className="font-semibold text-[#0F172A] block">{service.caseStudy.clientFeedback.author}</span>
                  <span className="text-[11px] text-[#64748B] font-mono">
                    {service.caseStudy.clientFeedback.role} · {service.caseStudy.client}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-[#059669]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Production Deployment</span>
                </div>
              </div>
            </div>

            {/* Production Telemetry Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              {service.caseStudy.productionStats.map((stat, idx) => (
                <div key={idx} className="bg-white border border-[#E2E8F0] rounded-[6px] p-3 text-center">
                  <div className="font-mono font-bold text-base text-[#0F172A]">{stat.value}</div>
                  <div className="text-[10px] text-[#64748B] font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CONTINUOUS MAINTENANCE, MONITORING & SLAs */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Ongoing Reliability
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Continuous Maintenance & 24/7 Production Care
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-1 leading-relaxed">
              We don&apos;t hand over code and walk away. Every {service.shortTitle} project is protected by our zero-defect warranty, with optional monthly retainers for ongoing optimization and 24/7 emergency care.
            </p>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[8px] p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 border-b border-[#F1F5F9] pb-8">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-[6px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-medium text-[#0F172A]">Included Warranty</h3>
                  <div className="font-mono font-bold text-sm text-[#2563EB] mt-0.5">
                    {service.maintenanceScope.warrantyDays}
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Full post-launch coverage for any bug, defect, or platform inconsistency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-[6px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-medium text-[#0F172A]">Incident SLA</h3>
                  <div className="font-mono font-bold text-sm text-[#2563EB] mt-0.5">
                    {service.maintenanceScope.slaResponseTime}
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Direct PagerDuty escalation and fast triage for critical production anomalies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-[6px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-medium text-[#0F172A]">Health Telemetry</h3>
                  <div className="font-mono font-bold text-sm text-[#2563EB] mt-0.5">
                    {service.maintenanceScope.monitoringFrequency}
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-1">
                    Continuous synthetic pings detecting latency spikes before end-users notice.
                  </p>
                </div>
              </div>
            </div>

            {/* Maintenance Deliverables Checklist */}
            <div className="space-y-3 mb-8">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold">
                What Our Continuous {service.shortTitle} Maintenance Covers:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.maintenanceScope.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start space-x-2 text-xs text-[#334155]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] mt-0.5 shrink-0" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-4">
              <div className="text-xs text-[#475569]">
                <span className="font-semibold text-[#0F172A] block">Need an ongoing support retainer or site maintenance?</span>
                <span>We provide predictable monthly engineering blocks with zero vendor lock-in.</span>
              </div>
              <Link
                href={`/contact/?service=${encodeURIComponent(service.title + " Maintenance")}`}
                className="w-full sm:w-auto px-4 py-2 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 shrink-0 shadow-2xs"
              >
                <span>Request Maintenance Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. COMMON CHALLENGES */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Common Challenges
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Why projects in this category encounter delays
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.problemPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-xs"
              >
                <div className="w-8 h-8 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3 border border-[#BFDBFE]">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base font-medium text-[#0F172A] mb-1.5">{point.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. DELIVERABLES */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              What We Build & Ship
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-xs"
              >
                <div className="w-8 h-8 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3 border border-[#BFDBFE]">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#0F172A] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. TECH STACK */}
        <section className="my-16 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Stack & Frameworks
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Modern Technologies We Rely On
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {service.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[6px] p-3 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <span className="text-[10px] text-[#64748B] uppercase font-mono block">
                    {tech.category}
                  </span>
                  <div className="font-medium text-xs text-[#0F172A] mt-0.5">{tech.name}</div>
                </div>
                <span className="text-[10px] font-mono text-[#2563EB] mt-2 inline-block font-medium">
                  {tech.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. PROCESS ROADMAP */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Our Step-by-Step Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[6px] p-4 shadow-2xs"
              >
                <div className="text-xl font-bold text-[#2563EB]/40 font-mono mb-1">
                  {step.step}
                </div>
                <h3 className="font-serif text-sm font-medium text-[#0F172A] mb-1">{step.title}</h3>
                <p className="text-[11px] text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. COMPREHENSIVE FAQ ACCORDION (7 Questions + Dynamic Schema) */}
        <FaqAccordion
          faqs={service.faqs}
          title={`${service.shortTitle} — Frequently Asked Questions`}
          subtitle={`Transparent answers regarding ${service.shortTitle} deliverables, code quality, site maintenance, SLAs, and ownership.`}
        />

        {/* 9. RELATED BLOG ARTICLES */}
        {relatedPosts.length > 0 && (
          <section className="my-16 border-t border-[#E2E8F0] pt-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
                  Engineering Notes
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#0F172A]">
                  Related Guides & Performance Notes
                </h2>
              </div>
              <Link
                href="/blog/"
                className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center"
              >
                <span>All Articles</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 hover:border-[#2563EB] hover:shadow-md transition-all"
                >
                  <div className="text-[11px] font-mono text-[#64748B] uppercase mb-1">
                    {post.category} · {post.readingTime}
                  </div>
                  <h3 className="font-serif text-base font-medium text-[#0F172A] mb-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-[#475569] line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 10. CLOSING CTA BANNER */}
        <CtaSection
          title={`Have a ${service.shortTitle} project or need maintenance?`}
          description="Send us the details and we'll reply within a day with an architectural review, fixed-cost proposal, or maintenance retainer plan."
          primaryCtaHref={`/contact/?service=${encodeURIComponent(service.title)}`}
        />
      </div>
    </div>
  );
}
