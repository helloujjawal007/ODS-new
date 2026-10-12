import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
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

  // Find related blog posts by matching pillar or category
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.pillar === service.slug || p.category.toLowerCase().includes(service.category.toLowerCase())
  ).slice(0, 2);

  return (
    <div className="py-8">
      <JsonLd id={`schema-service-${service.slug}`} data={serviceJsonLd} />
      <JsonLd id={`schema-breadcrumb-${service.slug}`} data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* 1. HERO SECTION */}
        <section className="my-10 lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{service.category} Excellence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                {service.title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3">
                {service.metrics.map((m, idx) => (
                  <div key={idx} className="bg-slate-900/80 border border-white/10 rounded-2xl p-3">
                    <div className="text-xl sm:text-2xl font-black text-cyan-400">{m.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all"
                >
                  <span>Book Technical Scope Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-white/10 transition-all text-center"
                >
                  View Cost Calculator
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 shadow-2xl">
                <div className="relative aspect-[16/10] rounded-[22px] overflow-hidden bg-slate-950">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Pricing signal badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">Starting Investment</div>
                      <div className="text-sm font-bold text-white">{service.pricingModel.startingAt} {service.pricingModel.period}</div>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-300 font-medium">
                      Warranty Included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROBLEM & PAIN POINTS SECTION */}
        <section className="my-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-wider text-rose-400 font-bold block mb-2">
              The Critical Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Most Companies Struggle With {service.shortTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.problemPoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-rose-500/20 rounded-2xl p-6 hover:border-rose-500/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center mb-4">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHAT WE DELIVER (FEATURES & DELIVERABLES) */}
        <section className="my-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-2">
              Engineered Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Production Architecture Built for Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-cyan-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TECH STACK AND TOOLS */}
        <section className="my-20 bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Curated Enterprise Technology Stack
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              We exclusively utilize battle-tested, maintainable frameworks with vibrant enterprise ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {service.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-white/5 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/20 transition-colors"
              >
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-mono block">
                    {tech.category}
                  </span>
                  <div className="font-bold text-white text-sm mt-1">{tech.name}</div>
                </div>
                <span className="text-[10px] font-semibold text-cyan-300 mt-3 inline-block">
                  {tech.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROCESS ROADMAP */}
        <section className="my-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-2">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              From Discovery to Flawless Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 relative overflow-hidden"
              >
                <div className="text-3xl font-black text-cyan-500/20 font-mono mb-2">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CASE STUDY & PROVEN IMPACT */}
        <section className="my-20 bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <span>Featured Client Result</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Transformed {service.caseStudy.client}
              </h3>
              <p className="text-xs uppercase font-mono text-slate-400">
                Industry: {service.caseStudy.industry}
              </p>
              <div className="space-y-2 text-sm text-slate-300 pt-2">
                <p><strong>The Challenge:</strong> {service.caseStudy.challenge}</p>
                <p><strong>The Engineering Solution:</strong> {service.caseStudy.solution}</p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-950/80 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {service.caseStudy.metric}
              </div>
              <div className="text-xs text-slate-300 mt-2 font-medium">
                {service.caseStudy.metricLabel}
              </div>
            </div>
          </div>
        </section>

        {/* 7. PRICING SIGNALS & INCLUSIONS */}
        <section className="my-20">
          <div className="max-w-xl mx-auto bg-slate-900/90 border border-white/10 rounded-3xl p-8 text-center shadow-xl">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-2">
              Transparent Engagement Model
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-white">
              Starting from {service.pricingModel.startingAt}
            </div>
            <p className="text-xs text-slate-400 mt-1">{service.pricingModel.period}</p>

            <div className="space-y-2.5 my-6 text-left text-xs sm:text-sm text-slate-300 border-t border-b border-white/10 py-6">
              {service.pricingModel.includes.map((inc, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Request Statement of Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 8. FAQ ACCORDION (WITH FAQ SCHEMA) */}
        <FaqAccordion
          faqs={service.faqs}
          title={`${service.shortTitle} — Common Questions`}
          subtitle={`Transparent answers regarding ${service.shortTitle} deliverables, code quality, and warranties.`}
        />

        {/* 9. RELATED BLOG ARTICLES */}
        {relatedPosts.length > 0 && (
          <section className="my-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                  Knowledge Hub
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Related Insights & Architectural Guides
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-semibold text-cyan-400 hover:underline flex items-center"
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
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="text-[11px] font-mono text-cyan-400 uppercase mb-2">
                    {post.category} · {post.readingTime}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 10. CLOSING CTA BANNER */}
        <CtaSection
          title={`Ready to Build Your ${service.shortTitle} Advantage?`}
          description={`Get in touch with our engineering directors. We provide a complimentary architectural review and fixed-cost proposal within 24 hours.`}
          primaryCtaHref={`/contact?service=${encodeURIComponent(service.title)}`}
        />
      </div>
    </div>
  );
}
