import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  BookOpen, 
  Terminal
} from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import BlogFilterList from "@/components/blog/BlogFilterList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Cloud Architecture & Web Performance Engineering Notes",
  description: "Practical breakdowns of modern Next.js architectures, Core Web Vitals remediation, headless Shopify, and technical SEO engineering.",
  alternates: {
    canonical: "/blog/"
  },
  openGraph: {
    title: "Cloud Architecture & Web Performance Engineering Notes",
    description: "Practical breakdowns of modern Next.js architectures, Core Web Vitals remediation, headless Shopify, and technical SEO engineering.",
    url: `${SITE_CONFIG.url}/blog/`
  }
};

export default function BlogHomePage() {
  const breadcrumbs = [{ label: "Engineering Notes" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Blog", url: "/blog/" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-blog" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* 1. HERO SECTION (Screenshot Blueprint Standard) */}
        <section className="my-10 lg:my-14 border-b border-[#E2E8F0] pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                  Engineering Blog · Architectural Field Notes
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                Cloud Architecture & Web Performance Engineering Notes
              </h1>

              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
                Practical breakdowns of modern Next.js 16 App Router architectures, Core Web Vitals performance benchmarks, headless e-commerce engineering, and enterprise Salesforce CRM integrations.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Production-Tested Benchmarks</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <BookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Zero Sponsored Content</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Real Code Patterns</span>
                </span>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">9</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">In-Depth Technical Field Guides</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">100/100</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">Target Core Web Vitals Goal</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">&lt; 1.2s</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">Target Largest Contentful Paint</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">Free</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">Architectural Insights &amp; Source Code</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href="#articles"
                  className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Explore engineering guides</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </a>

                <Link
                  href="/contact/"
                  className="w-full sm:w-auto px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-xs border border-[#CBD5E1] hover:border-[#94A3B8] transition-colors text-center"
                >
                  Inquire about engineering
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
                <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src="/images/hero_digital_tech.jpg"
                    alt="Cloud Consultancy software engineering notes and tech insights"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0F172A]/80 backdrop-blur-xs px-2 py-0.5 rounded-[3px] text-[10px] font-mono text-white tracking-wide border border-white/20">
                    Tech Insights Lab
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B] px-1">
                  <span>EDITORIAL FOCUS</span>
                  <span className="text-[#2563EB] font-semibold bg-[#EFF6FF] px-2 py-0.5 rounded-[4px] border border-[#BFDBFE]">
                    Engineering Field Notes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Interactive Filter & Search Component */}
        <div id="articles">
          <BlogFilterList posts={BLOG_POSTS} />
        </div>

        {/* Closing CTA */}
        <CtaSection
          title="Have a project in mind? Send us the details and we’ll reply within a day."
          description="We engineer scalable cloud architecture, custom web platforms, and Salesforce CRM systems for growing companies and global enterprises."
          primaryCtaText="Tell us about your project"
          primaryCtaHref="/contact/"
        />
      </div>
    </div>
  );
}
