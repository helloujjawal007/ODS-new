import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Compass, 
  Code2,
  ArrowRight,
  Lock
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Boutique Software Engineering & Cloud Consulting Firm",
  description: "Partner directly with senior software engineers. Cloud architecture, Next.js web platforms, and custom software consulting with 100% code ownership.",
  alternates: {
    canonical: "/about/"
  }
};

export default function AboutPage() {
  const values = [
    {
      title: "Direct Engineer Access",
      desc: "No non-technical account managers or communication silos. You collaborate directly with the engineers writing and shipping your code.",
      icon: ShieldCheck
    },
    {
      title: "Core Web Vitals Discipline",
      desc: "Speed is an architectural standard, not an afterthought. We test every build against Google's real-world LCP, CLS, and INP thresholds.",
      icon: Zap
    },
    {
      title: "100% Code Ownership",
      desc: "You retain full intellectual property ownership of your GitHub repositories, Figma master files, and deployment accounts from day one.",
      icon: Target
    },
    {
      title: "Fixed Scope & Milestones",
      desc: "We define concrete deliverables and milestone payments before starting work so you never experience surprise invoices.",
      icon: Compass
    }
  ];

  const disciplines = [
    {
      role: "Solutions & Web Architecture",
      focus: "Next.js 16, App Router, React 19, Headless CMS & Cloudflare Edge",
      desc: "Responsible for core structural performance, server-side caching, and robust API endpoints."
    },
    {
      role: "Shopify & E-Commerce Engineering",
      focus: "Shopify Plus, Liquid OS 2.0, BigCommerce MSF, Klaviyo & Checkout Extensions",
      desc: "Building custom themes, seamless cart drawers, and reliable ERP inventory synchronizations."
    },
    {
      role: "Mobile Applications",
      focus: "Swift 6 / SwiftUI for iOS, Kotlin for Android, and Flutter Cross-Platform",
      desc: "Engineering responsive mobile interfaces with offline sync and native device hardware integrations."
    },
    {
      role: "Technical SEO & Schema Architecture",
      focus: "Topic cluster modeling, JSON-LD structured data, Core Web Vitals remediation",
      desc: "Ensuring every deployed page is crawlable, fast, and primed for organic search rankings."
    }
  ];

  const milestones = [
    { year: "2021", title: "Engineering Studio Founded", desc: "Started as a dedicated web and technical SEO engineering team." },
    { year: "2023", title: "Shopify & Mobile Expansion", desc: "Added custom Shopify OS 2.0 and cross-platform mobile app practices." },
    { year: "2024", title: "Global Client Base", desc: "Partnered with founders across the US, UK, Europe, and Asia-Pacific." },
    { year: "2026", title: "Next.js Edge & App Standards", desc: "Pioneering Next.js 16 App Router edge-native deployments and schema automation." }
  ];

  const breadcrumbs = [{ label: "About" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "About", url: "/about/" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-about" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* 1. HERO SECTION (Screenshot Blueprint Standard) */}
        <section className="my-10 lg:my-14 border-b border-[#E2E8F0] pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                  Engineering Studio · Senior Craftsmanship
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                Boutique Software Engineering & Cloud Consulting Firm
              </h1>

              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
                Founded by senior software engineers, <strong>Cloud Consultancy</strong> connects growing companies and enterprises directly with senior technical architects. Zero agency bloat, zero middleman account executives, and 100% intellectual property ownership from sprint one.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Direct Senior Engineer Access</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Target className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Fixed Scope & Milestones</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>100% Code & Asset Ownership</span>
                </span>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">100%</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">Senior Craftsmanship (Zero Junior Silos)</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">&lt; 15m</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">Direct Slack & Phone Response SLA</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">20+</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">Production Deployments Shipped</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">0</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">Middleman Account Exec Markup</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="/contact/"
                  className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Meet our senior engineers</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <Link
                  href="/process/"
                  className="w-full sm:w-auto px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-xs border border-[#CBD5E1] hover:border-[#94A3B8] transition-colors text-center"
                >
                  Explore engineering process
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
                <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src="/images/about_team_studio.jpg"
                    alt="Cloud Consultancy engineering studio team collaborating"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0F172A]/80 backdrop-blur-xs px-2 py-0.5 rounded-[3px] text-[10px] font-mono text-white tracking-wide border border-white/20">
                    Studio Engineering Lab
                  </div>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px] font-mono text-[#64748B] px-1">
                  <span>HEADQUARTERS &amp; LAB</span>
                  <span className="text-[#2563EB] font-semibold bg-[#EFF6FF] px-2 py-0.5 rounded-[4px] border border-[#BFDBFE]">
                    Kolkata HQ · Global Delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Principles That Guide Our Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3 border border-[#BFDBFE]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-medium text-[#0F172A] mb-1.5">{v.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Disciplines */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Engineering Disciplines
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Specialized Roles Across Every Sprint
            </h2>
            <p className="text-xs text-[#475569] mt-2">
              Every project is led by proven hands-on developers who write clean, tested code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-xs"
              >
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#2563EB] font-semibold mb-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{item.role}</span>
                </div>
                <div className="text-xs font-mono text-[#0F172A] font-semibold mb-2">
                  {item.focus}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Leadership & Partners */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Engineering Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Led by Proven Hands-On Architects
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
              Every client engagement is directly architected, reviewed, and overseen by proven senior engineering partners with zero junior silos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
              <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-[#BFDBFE] bg-[#F1F5F9] shadow-xs">
                <Image
                  src="/images/founder_portrait.jpg"
                  alt="Vikash Kumar - Founder and Principal Architect"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                  Founder &amp; Principal Architect
                </span>
                <h3 className="font-serif text-lg font-medium text-[#0F172A] mt-0.5">Vikash Kumar</h3>
                <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                  12+ years specializing in scalable cloud platforms, Next.js App Router architectures, and enterprise Salesforce CRM integrations.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-xs flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
              <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-[#BFDBFE] bg-[#F1F5F9] shadow-xs">
                <Image
                  src="/images/cto_portrait.jpg"
                  alt="Priya Sharma - VP of Cloud Engineering"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                  VP of Cloud Engineering
                </span>
                <h3 className="font-serif text-lg font-medium text-[#0F172A] mt-0.5">Priya Sharma</h3>
                <p className="text-xs text-[#475569] mt-2 leading-relaxed">
                  Former principal architect overseeing zero-downtime microservices migrations, Google Core Web Vitals SLAs, and multi-region edge caching.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="my-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Milestones & Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[6px] p-5 shadow-xs"
              >
                <div className="text-2xl font-serif font-medium text-[#2563EB] mb-1">
                  {m.year}
                </div>
                <h3 className="font-serif text-sm font-medium text-[#0F172A] mb-1">{m.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

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
