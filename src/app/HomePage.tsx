import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  ShoppingBag,
  TrendingUp,
  Smartphone,
  Workflow,
  Database,
  Palette,
  Puzzle
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import ProjectEstimator from "@/components/calculator/ProjectEstimator";
import AuditToolModal from "@/components/seo/AuditToolModal";
import CtaSection from "@/components/sections/CtaSection";
import HeroHeadingRotator from "@/components/sections/HeroHeadingRotator";
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
  const techStack = [
    { name: "Next.js 16", desc: "App Router & SSR" },
    { name: "Shopify Plus", desc: "Liquid & Theme Extensions" },
    { name: "BigCommerce", desc: "Multi-Storefronts" },
    { name: "React Native", desc: "Mobile Cross-Platform" },
    { name: "Flutter", desc: "Cross-Platform" },
    { name: "Swift 6", desc: "Native iOS" },
    { name: "Kotlin", desc: "Native Android" },
    { name: "TypeScript", desc: "Type-Safe Full-Stack" },
    { name: "PostgreSQL", desc: "Relational Data" },
    { name: "Salesforce LWC", desc: "Enterprise Integrations" }
  ];

  const serviceIcons: Record<string, typeof Code2> = {
    "website-development": Code2,
    "shopify-bigcommerce-development": ShoppingBag,
    "seo": TrendingUp,
    "ios-app-development": Smartphone,
    "android-app-development": Smartphone,
    "cross-platform-app-development": Code2,
    "crm-integration": Database,
    "salesforce-support": Workflow,
    "ui-ux-design": Palette,
    "plugins-extensions-development": Puzzle
  };

  return (
    <div className="bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* 1. HERO SECTION (Modern Clean Banner with High-Contrast Blue Accent) */}
      <section className="pt-12 pb-20 border-b border-[#E2E8F0] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.08),transparent)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Engagement Model Chips */}
              <div className="flex flex-wrap gap-2 pt-1" aria-label="Available engagement models">
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
                  Hourly
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
                  Contract
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
                  Project-Based
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
                  Monthly Retainership
                </span>
              </div>

              <HeroHeadingRotator />

              <p className="text-base sm:text-lg text-[#475569] max-w-xl font-normal leading-relaxed">
                Pay only for what your project requires across hourly, contract, or retainership models, with zero vendor lock-in. Full ownership of code, designs, data, and accounts from day one.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm inline-flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-sm border border-[#CBD5E1] hover:border-[#94A3B8] inline-flex items-center justify-center transition-all"
                >
                  Talk to Us
                </Link>
              </div>

              {/* Grounded Trust Signals */}
              <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#475569]">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>100% Client Ownership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Flexible Scope-Based Pricing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Full-Stack + Salesforce Certified</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image (Clean, framed in crisp border, subtle elevation) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
                <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src="/images/hero_digital_tech.jpg"
                    alt="Cloud Consultancy engineering team discussing system architecture in Kolkata"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 pt-3 flex items-center justify-between text-xs text-[#475569]">
                  <div>
                    <span className="font-semibold text-[#0F172A] block">Cloud architecture & systems</span>
                    <span className="text-[11px] text-[#64748B]">AWS, GCP, Next.js & Kubernetes</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-[3px] font-medium">
                    Kolkata Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TECHNOLOGIES WE MASTER (Authentic stack marquee with aria-hidden duplicate) */}
      <section className="py-6 border-b border-[#E2E8F0] bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 text-center sm:text-left">
          <p className="text-[11px] uppercase tracking-wider font-mono text-[#64748B] font-semibold">
            Core Technologies & Platforms
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          {/* Primary list */}
          <div className="animate-marquee flex items-center space-x-6 shrink-0 py-1">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 px-3.5 py-1.5 rounded-[6px] bg-white border border-[#E2E8F0] text-xs shrink-0 shadow-2xs"
              >
                <span className="font-semibold text-[#0F172A]">{tech.name}</span>
                <span className="text-[#64748B] font-mono text-[11px]">/ {tech.desc}</span>
              </div>
            ))}
          </div>

          {/* Accessible duplicate copy */}
          <div
            aria-hidden="true"
            className="animate-marquee flex items-center space-x-6 shrink-0 py-1"
          >
            {techStack.map((tech, idx) => (
              <div
                key={`dup-${idx}`}
                className="flex items-center space-x-2 px-3.5 py-1.5 rounded-[6px] bg-white border border-[#E2E8F0] text-xs shrink-0 shadow-2xs"
              >
                <span className="font-semibold text-[#0F172A]">{tech.name}</span>
                <span className="text-[#64748B] font-mono text-[11px]">/ {tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES INDEX (Organized as an Editorial Table/List, with distinct link text) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
                Services & Disciplines
              </h2>
              <p className="text-[#475569] text-sm mt-2 max-w-xl">
                Every project is handled by senior software engineers. Fixed scopes, clear acceptance criteria, and transparent pricing.
              </p>
            </div>
            <Link
              href="/services"
              className="mt-4 md:mt-0 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
            >
              <span>View complete service breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Editorial Service Table */}
          <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm divide-y divide-[#E2E8F0]">
            {SERVICES.map((s) => {
              const Icon = serviceIcons[s.slug] || Code2;
              return (
                <div
                  key={s.slug}
                  className="p-5 sm:p-6 hover:bg-[#F8FAFC] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start space-x-4 md:w-5/12">
                    <div className="p-2.5 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] mt-0.5 shrink-0 border border-[#BFDBFE]/60">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#0F172A]">
                        {s.title}
                      </h3>
                      <p className="text-xs text-[#475569] mt-1 line-clamp-2 leading-relaxed">
                        {s.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Typical Deliverables / Tech */}
                  <div className="md:w-3/12 flex flex-wrap gap-1.5 text-[11px] font-mono">
                    {s.techStack.slice(0, 3).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0]"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>

                  {/* Pricing Starting Point */}
                  <div className="md:w-2/12 text-left md:text-right">
                    <span className="text-[11px] text-[#64748B] block font-mono uppercase">
                      Starting At
                    </span>
                    <span className="font-mono font-semibold text-sm text-[#0F172A]">
                      {s.pricingModel.startingAt}
                    </span>
                  </div>

                  {/* Unique, Accessible Link Text */}
                  <div className="md:w-2/12 text-left md:text-right shrink-0">
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                      aria-label={`${s.shortTitle} pricing & details`}
                    >
                      <span>{s.shortTitle} pricing</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SELECTED RECENT WORK (Honest case studies with real outcomes) */}
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
              href="/portfolio"
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
                      href={`/portfolio/${item.slug}`}
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

      {/* 5. INTERACTIVE ESTIMATOR */}
      <section className="py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectEstimator />
        </div>
      </section>

      {/* 6. LIVE CORE WEB VITALS CHECKER (Real Google PageSpeed API) */}
      <section className="py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuditToolModal />
        </div>
      </section>

      {/* 7. CLOSING CTA BANNER */}
      <CtaSection
        title="Have a project in mind? Send us the details and we’ll reply within a day."
        description="We build websites, Shopify stores and apps for small and mid-size businesses. Based in Kolkata, working with clients worldwide."
        primaryCtaText="Tell us about your project"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
