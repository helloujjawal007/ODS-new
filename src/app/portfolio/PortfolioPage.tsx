import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench, Lock } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import PortfolioFilterList from "@/components/portfolio/PortfolioFilterList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Web Application Case Studies & Production Portfolio",
  description: "Explore representative client work and measurable business outcomes across Next.js platforms, custom Shopify stores, and native mobile apps.",
  alternates: {
    canonical: "/portfolio/"
  },
  openGraph: {
    title: "Web Application Case Studies & Production Portfolio",
    description: "Explore representative client work and measurable business outcomes across Next.js platforms, custom Shopify stores, and native mobile apps.",
    url: `${SITE_CONFIG.url}/portfolio/`
  }
};

export default function PortfolioPage() {
  const breadcrumbs = [{ label: "Selected Work" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Work", url: "/portfolio/" }
  ]);

  const portfolioMetrics = [
    { value: "20+", label: "Shipped Production Builds" },
    { value: "$1M+", label: "Client Revenue Supported" },
    { value: "99.9%", label: "Uptime Track Record" },
    { value: "4.9★", label: "Average Client Review Rating" }
  ];

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-portfolio" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ================= HERO BANNER SECTION (MATCHING EXACT SCREENSHOT STRUCTURE) ================= */}
        <section className="my-10 lg:my-14 border-b border-[#E2E8F0] pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                  Production Case Studies · Real-World Impact
                </span>
              </div>

              {/* High SV / Low KD SEO Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                Web Application Case Studies &amp; Production Portfolio
              </h1>

              {/* High-Intent Keyword-Rich Description */}
              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
                Representative client applications, custom Shopify stores, and high-concurrency systems engineered by our team. Real production telemetry, speed benchmarks, and verified outcomes.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Verified Client Metrics</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Wrench className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Production Architecture Audits</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>100% Real-World Deployments</span>
                </span>
              </div>

              {/* Metrics Row (4 distinct boxes) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                {portfolioMetrics.map((m, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                    <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">{m.value}</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="/contact/"
                  className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Discuss your project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <Link
                  href="/pricing/"
                  className="w-full sm:w-auto px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-xs border border-[#CBD5E1] hover:border-[#94A3B8] transition-colors text-center"
                >
                  View project pricing
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card (Exact Structure from Screenshot) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
                <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src="/images/portfolio_projects.jpg"
                    alt="Cloud Consultancy portfolio of custom web platforms and mobile apps"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex items-center justify-between text-xs text-[#64748B]">
                  <div>
                    <span className="text-[10px] uppercase font-mono block">Featured Portfolio</span>
                    <span className="font-mono font-semibold text-[#0F172A]">
                      7 Production Case Studies
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-[3px] font-medium">
                    Production Proven
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Filter Component */}
        <PortfolioFilterList projects={PORTFOLIO_PROJECTS} />

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
