import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight,
  ShieldCheck, 
  Wrench, 
  Lock,
  Search, 
  Layers, 
  Code2, 
  Rocket 
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Agile Software Development Process & Sprints",
  description: "A transparent, milestone-driven development lifecycle from technical scoping and Figma component systems to sprint engineering, Core Web Vitals optimization, and launch support.",
  alternates: {
    canonical: "/process/"
  }
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery, Requirements & Architecture",
      duration: "Week 1",
      icon: Search,
      desc: "We align on scope, deliverables, and technical architecture before writing code. This eliminates scope creep and ensures realistic timelines.",
      deliverables: [
        "Statement of work & technical specification",
        "System architecture & schema data models",
        "Third-party API and integration requirements",
        "Fixed project timeline and delivery milestones"
      ]
    },
    {
      number: "02",
      title: "UI/UX & Component Design",
      duration: "Weeks 1 – 2",
      icon: Layers,
      desc: "Designing responsive, accessible interfaces in Figma with modular component tokens for desktop, tablet, and mobile viewports.",
      deliverables: [
        "Responsive wireframes and high-fidelity screens",
        "Interactive prototypes for review and feedback",
        "Design tokens for typography, spacing, and colors",
        "WCAG contrast and accessibility validation"
      ]
    },
    {
      number: "03",
      title: "Sprint-Based Engineering",
      duration: "Weeks 2 – 5",
      icon: Code2,
      desc: "Component-driven development following clean architecture principles, strict TypeScript typing, and edge runtime optimization.",
      deliverables: [
        "Modular Next.js App Router or Shopify OS 2.0 codebase",
        "Headless CMS (Sanity / Contentful) integration",
        "API routes, database queries, and webhook handlers",
        "Continuous deployment previews on GitHub"
      ]
    },
    {
      number: "04",
      title: "Core Web Vitals Tuning & QA",
      duration: "Week 5",
      icon: ShieldCheck,
      desc: "Rigorous performance auditing and technical validation across mobile devices to ensure fast load times and clean indexation.",
      deliverables: [
        "Core Web Vitals optimization (LCP, CLS, INP)",
        "Structured data (JSON-LD) schema validation",
        "Cross-browser and mobile device verification",
        "Security headers (HSTS, CSP, X-Frame-Options)"
      ]
    },
    {
      number: "05",
      title: "Zero-Downtime Launch & Continuous Maintenance",
      duration: "Ongoing",
      icon: Rocket,
      desc: "Production cutover, automated DNS validation, Google Search Console indexing, 30-day zero-defect warranty, and transition to ongoing maintenance retainers.",
      deliverables: [
        "Zero-downtime DNS migration and SSL certificate provisioning",
        "Google Search Console sitemap indexing & verification",
        "Full source code, Figma files, and cloud credential handover",
        "30 days complimentary zero-defect warranty",
        "Ongoing monthly site maintenance, 24/7 uptime monitoring & SLAs"
      ]
    }
  ];

  const processMetrics = [
    { value: "2 Weeks", label: "Focused Sprint Cadence" },
    { value: "100%", label: "On-Time Milestones" },
    { value: "0", label: "Scope Creep Surprises" },
    { value: "30 Days", label: "Zero-Defect Warranty" }
  ];

  const breadcrumbs = [{ label: "Process" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Process", url: "/process/" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-process" data={breadcrumbSchema} />

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
                  Delivery Methodology · Zero Technical Surprises
                </span>
              </div>

              {/* High SV / Low KD SEO Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                Agile Software Development Process &amp; Sprints
              </h1>

              {/* High-Intent Keyword-Rich Description */}
              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
                A transparent, milestone-driven development lifecycle from technical scoping and Figma component systems to sprint engineering, Core Web Vitals optimization, and 30-day post-launch warranty.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Bi-Weekly Sprint Demos</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Wrench className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Strict TypeScript Typing</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Zero Scope Creep Guarantee</span>
                </span>
              </div>

              {/* Metrics Row (4 distinct boxes) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                {processMetrics.map((m, idx) => (
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
                  <span>Start discovery sprint</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <Link
                  href="/pricing/"
                  className="w-full sm:w-auto px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-xs border border-[#CBD5E1] hover:border-[#94A3B8] transition-colors text-center"
                >
                  View pricing &amp; estimator
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card (Exact Structure from Screenshot) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-2.5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
                <div className="relative aspect-[16/10] rounded-[6px] overflow-hidden bg-[#F1F5F9]">
                  <Image
                    src="/images/ods_team_office.jpg"
                    alt="Cloud Consultancy agile software engineering sprint and delivery review"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 flex items-center justify-between text-xs text-[#64748B]">
                  <div>
                    <span className="text-[10px] uppercase font-mono block">Sprint Framework</span>
                    <span className="font-mono font-semibold text-[#0F172A]">
                      Discovery to Production
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-[3px] font-medium">
                    Zero-Downtime Guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Stack */}
        <div className="space-y-6 my-14">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-8 shadow-sm hover:border-[#2563EB] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="md:w-5/12">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="font-mono text-xl font-bold text-[#2563EB]">
                        {step.number}
                      </span>
                      <span className="text-xs font-mono uppercase bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] px-2 py-0.5 rounded-[4px] font-medium">
                        {step.duration}
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl font-medium text-[#0F172A] mb-2">
                      {step.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="md:w-6/12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold mb-3 flex items-center space-x-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Key Milestone Deliverables</span>
                    </div>

                    <ul className="space-y-2 text-xs text-[#334155]">
                      {step.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2">
                          <span className="text-[#2563EB] mt-0.5 font-bold">✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
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
