import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import HeroBanner from "@/components/sections/HeroBanner";
import ServicesCardCarousel from "@/components/sections/ServicesCardCarousel";
import AboutMaintenanceSummary from "@/components/sections/AboutMaintenanceSummary";
import CtaSection from "@/components/sections/CtaSection";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: {
    absolute: "Cloud Consultancy | Cloud Architecture, Web & App Engineering"
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const latestPosts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  const techStack = [
    { name: "Next.js 16", desc: "App Router & SSR" },
    { name: "Shopify Plus", desc: "Liquid & Headless" },
    { name: "Salesforce LWC", desc: "Enterprise CRM" },
    { name: "React Native", desc: "Mobile Cross-Platform" },
    { name: "Flutter", desc: "Cross-Platform" },
    { name: "Swift 6", desc: "Native iOS" },
    { name: "Kotlin", desc: "Native Android" },
    { name: "TypeScript", desc: "Type-Safe Full-Stack" },
    { name: "PostgreSQL", desc: "Relational Data" },
    { name: "AWS & GCP", desc: "Cloud Infrastructure" }
  ];

  return (
    <div className="bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* 1. HERO SECTION (Synchronized Heading, Dynamic Paragraph & Transitioning Architecture Image) */}
      <HeroBanner />

      {/* 2. CORE TECHNOLOGIES & PLATFORMS (Framed 90% Width Container with Compact Spacing) */}
      <section className="py-2">
        <div className="w-[90%] max-w-7xl mx-auto rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC] py-3.5 px-4 shadow-2xs overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5 px-1">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <p className="text-[11px] uppercase tracking-wider font-mono text-[#0F172A] font-semibold">
                Core Technologies & Platforms
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#64748B] hidden sm:inline-block">
              Modern Full-Stack · Cloud Architecture · Salesforce CRM
            </span>
          </div>

          {/* Marquee with Left & Right Gradient Fade Masks */}
          <div className="relative flex overflow-x-hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

            {/* Primary Track */}
            <div className="animate-marquee flex items-center space-x-4 shrink-0 py-0.5">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-[6px] bg-white border border-[#E2E8F0] text-xs shrink-0 shadow-2xs"
                >
                  <span className="font-semibold text-[#0F172A]">{tech.name}</span>
                  <span className="text-[#64748B] font-mono text-[11px]">/ {tech.desc}</span>
                </div>
              ))}
            </div>

            {/* Accessible Duplicate Track */}
            <div
              aria-hidden="true"
              className="animate-marquee flex items-center space-x-4 shrink-0 py-0.5"
            >
              {techStack.map((tech, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-[6px] bg-white border border-[#E2E8F0] text-xs shrink-0 shadow-2xs"
                >
                  <span className="font-semibold text-[#0F172A]">{tech.name}</span>
                  <span className="text-[#64748B] font-mono text-[11px]">/ {tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES & DISCIPLINES (Interactive Scrollable Cards with Images, No Pricing - Links to Pricing) */}
      <ServicesCardCarousel services={SERVICES} />

      {/* 4. ABOUT & SITE MAINTENANCE SUMMARY (Senior craft, site maintenance, 100% ownership) */}
      <AboutMaintenanceSummary />

      {/* 5. SELECTED RECENT WORK (Honest case studies with real outcomes) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
                Selected Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
                Recent Projects and Case Studies
              </h2>
              <p className="text-[#475569] text-sm mt-2 max-w-xl">
                Representative client applications, custom stores, and engineering engagements shipped by our team.
              </p>
            </div>
            <Link
              href="/portfolio/"
              className="mt-4 md:mt-0 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
            >
              <span>View all projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all"
              >
                <div className="relative aspect-[16/10] bg-[#F1F5F9]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono uppercase font-medium text-[#0F172A] shadow-2xs">
                    {item.industry}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#64748B] block mb-1">
                      {item.client}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-[#0F172A] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div>
                    {/* Key Outcome Metric */}
                    <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 mb-4 flex items-center justify-between">
                      <span className="text-xs text-[#64748B]">{item.impactMetrics[0].label}</span>
                      <span className="font-mono font-bold text-sm text-[#0F172A]">
                        {item.impactMetrics[0].value}
                      </span>
                    </div>

                    <Link
                      href={`/portfolio/${item.slug}/`}
                      className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
                    >
                      <span>Read project details</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LATEST ARCHITECTURE FIELD NOTES (Direct Internal Linking to Blog Posts) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
                Engineering Notes
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
                Architectural Insights &amp; Performance Field Notes
              </h2>
              <p className="text-[#475569] text-sm mt-2 max-w-xl">
                Real-world postmortems, Next.js 16 benchmarks, Shopify headless architectures, and enterprise Salesforce integration guides.
              </p>
            </div>
            <Link
              href="/blog/"
              className="mt-4 md:mt-0 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
            >
              <span>View all engineering notes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#2563EB] hover:shadow-md transition-all"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-[#F1F5F9] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2 py-0.5 rounded-[4px] text-[10px] font-mono uppercase font-semibold text-[#0F172A] shadow-2xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center space-x-2 text-[11px] font-mono text-[#64748B] mb-2">
                      <span className="text-[#0F172A] font-medium">By {post.author?.name || "Anjali"}</span>
                      <span>·</span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1 text-[#64748B]" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-medium text-[#0F172A] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-4 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[#64748B]">{post.publishedAt}</span>
                  <span className="font-semibold text-[#2563EB] group-hover:underline inline-flex items-center">
                    <span>Read guide</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER */}
      <CtaSection
        title="Have a project in mind? Send us the details and we’ll reply within a day."
        description="We engineer scalable cloud architecture, custom web platforms, and Salesforce CRM systems for growing companies and global enterprises."
        primaryCtaText="Tell us about your project"
        primaryCtaHref="/contact/"
      />
    </div>
  );
}
