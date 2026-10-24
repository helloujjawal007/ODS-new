import { Metadata } from "next";
import { 
  Check, 
  Search, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Rocket 
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Our Engineering Process",
  description: "How we build and ship software: Discovery & Scoping, UI/UX Design, Development Sprints, QA & Speed Optimization, and Launch Support.",
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
      title: "Zero-Downtime Launch & Support",
      duration: "Ongoing",
      icon: Rocket,
      desc: "Production cutover, automated DNS validation, search console verification, and complimentary 30-day post-launch warranty support.",
      deliverables: [
        "DNS migration and SSL certificate provisioning",
        "Google Search Console sitemap submission",
        "Full source code and credential transfer",
        "30 days complimentary warranty bug support"
      ]
    }
  ];

  const breadcrumbs = [{ label: "Process" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Process", url: "/process" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-process" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="max-w-3xl my-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Engineering Process
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            How we work: from scoping to deployment.
          </h1>
          <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
            Predictable sprints, direct engineer communication, and zero technical surprises. Here is how we take projects from concept to production.
          </p>
        </div>

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
                      <span className="text-xs font-mono uppercase tracking-wider text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-0.5 rounded-[4px] font-medium">
                        {step.duration}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#0F172A] mb-2 leading-snug">
                      {step.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="md:w-6/12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-5">
                    <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#0F172A] font-semibold mb-3">
                      <Icon className="w-4 h-4 text-[#2563EB]" />
                      <span>Key Deliverables</span>
                    </div>

                    <ul className="space-y-2 text-xs text-[#475569]">
                      {step.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{item}</span>
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
