import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowRight, 
  Check, 
  AlertCircle 
} from "lucide-react";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getServiceJsonLd, getBreadcrumbJsonLd, SITE_CONFIG } from "@/lib/seo-config";

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
      canonical: `/services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_CONFIG.url}/services/${service.slug}`,
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
    { label: "Services", href: "/services" },
    { label: service.shortTitle }
  ];

  const serviceJsonLd = getServiceJsonLd({
    title: service.title,
    tagline: service.tagline,
    slug: service.slug,
    heroImage: service.heroImage
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Services", url: "/services" },
    { name: service.shortTitle, url: `/services/${service.slug}` }
  ]);

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.pillar === service.slug || p.category.toLowerCase().includes(service.category.toLowerCase())
  ).slice(0, 2);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id={`schema-service-${service.slug}`} data={serviceJsonLd} />
      <JsonLd id={`schema-breadcrumb-${service.slug}`} data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* 1. HERO SECTION */}
        <section className="my-10 lg:my-14 border-b border-[#E2E8F0] pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                {service.category} Service
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                {service.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3">
                    <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">{m.value}</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Tell us about your project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-xs border border-[#CBD5E1] hover:border-[#94A3B8] transition-colors text-center"
                >
                  Pricing & estimator
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
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
                    30-Day Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM & PAIN POINTS SECTION */}
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

        {/* 3. DELIVERABLES */}
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

        {/* 4. TECH STACK */}
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

        {/* 5. PROCESS ROADMAP */}
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

        {/* 6. FAQ ACCORDION */}
        <FaqAccordion
          faqs={service.faqs}
          title={`${service.shortTitle} — Questions & Details`}
          subtitle={`Direct answers regarding ${service.shortTitle} deliverables, code quality, and warranties.`}
        />

        {/* 7. RELATED BLOG ARTICLES */}
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
                href="/blog"
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
                  href={`/blog/${post.slug}`}
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

        {/* 8. CLOSING CTA BANNER */}
        <CtaSection
          title={`Have a ${service.shortTitle} project in mind?`}
          description="Send us the details and we'll reply within a day with an architectural review and fixed-cost proposal."
          primaryCtaHref={`/contact?service=${encodeURIComponent(service.title)}`}
        />
      </div>
    </div>
  );
}
