"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Code2, 
  Database, 
  Workflow, 
  Share2, 
  ShieldCheck, 
  Clock, 
  ChevronDown,
  Activity,
  CheckCircle2
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";
import {
  SALESFORCE_METRICS,
  SALESFORCE_CLOUDS,
  SALESFORCE_CAPABILITIES,
  SALESFORCE_PRICING_TIERS,
  SALESFORCE_FAQS
} from "@/lib/salesforce-data";

const CAPABILITY_ICONS: Record<string, typeof Code2> = {
  Code2,
  Database,
  Workflow,
  Share2,
  ShieldCheck,
  Clock
};

export default function SalesforcePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const breadcrumbs = [
    { label: "Salesforce" }
  ];

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Salesforce Consulting & Engineering", url: "/salesforce/" }
  ]);

  const salesforceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Salesforce Consulting & LWC Engineering",
    "provider": {
      "@type": "ProfessionalService",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url,
      "email": SITE_CONFIG.contact.email,
      "telephone": SITE_CONFIG.contact.phone
    },
    "description": "Certified Salesforce technical architects delivering custom Lightning Web Components, bulkified Apex development, Data Cloud sync, and managed support.",
    "serviceType": "Salesforce Consulting, LWC Engineering, and CRM Integration",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Salesforce Engineering Solutions",
      "itemListElement": SALESFORCE_PRICING_TIERS.map((tier) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": tier.name,
          "description": tier.idealFor
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": tier.rate
        }
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": SALESFORCE_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-salesforce" data={breadcrumbSchema} />
      <JsonLd id="schema-service-salesforce" data={salesforceServiceSchema} />
      <JsonLd id="schema-faq-salesforce" data={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ================= 1. HERO SECTION ================= */}
        <section className="my-10 lg:my-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-mono font-medium text-[#2563EB]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span>Salesforce Certified Technical Practice</span>
              </div>

              <h1 className="hero-slide-heading text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.12]">
                Salesforce Architecture, Custom LWC & Enterprise Integration.
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                Certified Salesforce architects and senior full-stack engineers delivering custom Lightning Web Components (LWC), bulkified Apex backend services, seamless third-party CRM pipelines, and proactive managed support.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/contact/?service=salesforce"
                  className="px-6 py-3.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm inline-flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Get a Custom Salesforce Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="px-6 py-3.5 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-sm border border-[#CBD5E1] hover:border-[#94A3B8] inline-flex items-center justify-center transition-all"
                >
                  Explore Capabilities
                </Link>
              </div>

              {/* Grounded Trust Signals */}
              <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#475569]">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>100% Client Code Ownership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>0 Governor Limit Breaches</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Sub-15m P1 Support SLA</span>
                </div>
              </div>
            </div>

            {/* Right Visual Column (Dedicated High-Res Screenshot Showcase) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-[#E2E8F0] shadow-md bg-[#F1F5F9] group">
                <Image
                  src="/images/service_salesforce_support.jpg"
                  alt="Salesforce CRM custom architecture and Lightning Web Components dashboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Ambient Status Pill */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-3 py-1.5 rounded-[6px] shadow-sm flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                  <span className="text-[11px] font-mono font-semibold text-[#0F172A]">Production Org Health: 100%</span>
                </div>

                {/* Floating Metric Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] p-3 rounded-[6px] shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-[#64748B] block">Apex Unit Test Coverage</span>
                      <span className="font-mono font-bold text-sm text-[#0F172A]">99.9% Passing</span>
                    </div>
                    <div className="h-8 w-px bg-[#E2E8F0]" />
                    <div>
                      <span className="text-[10px] font-mono text-[#64748B] block">API Sync Latency</span>
                      <span className="font-mono font-bold text-sm text-[#2563EB]">&lt; 340ms P99</span>
                    </div>
                    <div className="h-8 w-px bg-[#E2E8F0]" />
                    <div>
                      <span className="text-[10px] font-mono text-[#64748B] block">Architecture</span>
                      <span className="font-mono font-bold text-sm text-[#0F172A]">SFDX / LWC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. VERIFIED TELEMETRY GRID ================= */}
        <section className="my-14 pt-10 border-t border-[#E2E8F0]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {SALESFORCE_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-4 flex flex-col justify-between hover:border-[#2563EB] hover:bg-white transition-all shadow-2xs group"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-medium text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-[#0F172A] mt-1 leading-snug">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. CLOUD SPECIALTIES ================= */}
        <section className="my-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Cloud Practice Areas
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              End-to-End Salesforce Cloud Expertise
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              We specialize across the entire Salesforce ecosystem, delivering clean architectures tailored to your exact industry workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SALESFORCE_CLOUDS.map((cloud, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-7 shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-xl font-medium text-[#0F172A]">
                      {cloud.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-[4px] bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] font-medium">
                      {cloud.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                    {cloud.description}
                  </p>

                  <div className="space-y-2 border-t border-[#F1F5F9] pt-4">
                    {cloud.keyUseCases.map((useCase, uIdx) => (
                      <div key={uIdx} className="flex items-start space-x-2 text-xs text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <Link
                    href={`/contact/?service=salesforce&cloud=${encodeURIComponent(cloud.name)}`}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center space-x-1"
                  >
                    <span>Request consultation for {cloud.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. CORE CAPABILITIES DEEP-DIVE ================= */}
        <section id="capabilities" className="my-20 scroll-mt-24">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Core Technical Capabilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              Enterprise Engineering for High-Growth Orgs
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              Every line of code and flow is handcrafted for speed, security, and maximum maintainability without vendor lock-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SALESFORCE_CAPABILITIES.map((cap) => {
              const Icon = CAPABILITY_ICONS[cap.iconName] || Code2;
              return (
                <div
                  key={cap.id}
                  className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-[8px] bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2563EB] mb-4 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-serif text-lg font-medium text-[#0F172A] mb-1 leading-snug">
                      {cap.title}
                    </h3>
                    <div className="text-[11px] font-mono text-[#2563EB] mb-3">
                      {cap.tagline}
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed mb-4">
                      {cap.description}
                    </p>

                    <div className="space-y-1.5 border-t border-[#F1F5F9] pt-3 mb-4">
                      {cap.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start space-x-2 text-[11px] text-[#334155]">
                          <Check className="w-3 h-3 text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="leading-tight">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#E2E8F0] pt-4">
                    <div className="flex flex-wrap gap-1">
                      {cap.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-[10px] font-mono rounded-[4px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 5. FEATURED CASE STUDY SHOWCASE ================= */}
        <section className="my-20 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[12px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#2563EB]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="uppercase font-semibold tracking-wider">Featured Production Outcome</span>
                <span>·</span>
                <span className="text-[#64748B]">B2B Hardware Distribution</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0F172A] leading-snug">
                Salesforce Quoting Flow & Automation Rebuild
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                A high-volume hardware distributor suffered from 20+ minute quote generation times and frequent SOQL 101 governor limit exceptions during month-end spikes. We re-architected their entire quoting workflow into reactive Lightning Web Components backed by asynchronous Apex and consolidated 14 redundant Process Builders.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white border border-[#E2E8F0] p-3 rounded-[6px]">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">65%</div>
                  <div className="text-[11px] text-[#64748B]">Faster Quoting Cycle</div>
                </div>
                <div className="bg-white border border-[#E2E8F0] p-3 rounded-[6px]">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">240 Hrs</div>
                  <div className="text-[11px] text-[#64748B]">Monthly Ops Saved</div>
                </div>
                <div className="bg-white border border-[#E2E8F0] p-3 rounded-[6px]">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#2563EB]">0 Errors</div>
                  <div className="text-[11px] text-[#64748B]">Governor Breaches</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white border border-[#E2E8F0] rounded-[8px] p-6 space-y-4 shadow-2xs">
              <span className="text-[11px] font-mono uppercase font-semibold text-[#64748B] block">
                Technical Retrospective
              </span>
              <p className="text-xs text-[#334155] italic leading-relaxed">
                &ldquo;Cloud Consultancy transformed our Salesforce org from a daily operational bottleneck into our most reliable sales asset. Our reps close quotes in a fraction of the time with zero system crashes.&rdquo;
              </p>
              <div className="text-xs border-t border-[#F1F5F9] pt-3">
                <div className="font-semibold text-[#0F172A]">Devon Reed</div>
                <div className="text-[#64748B] text-[11px]">Director of Commercial Operations</div>
              </div>
              <Link
                href="/portfolio/innotech-salesforce-lwc/"
                className="w-full bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] text-[#2563EB] text-xs font-semibold py-2.5 px-4 rounded-[6px] flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 6. TRANSPARENT PRICING & RETAINERS ================= */}
        <section className="my-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Transparent Investment
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              Flexible Salesforce Engagement Models
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              No bloated minimum retainers or hidden fees. Hire senior certified architects across targeted sprints, hourly blocks, or managed SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SALESFORCE_PRICING_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-[10px] p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  tier.highlighted
                    ? "bg-white border-2 border-[#2563EB] shadow-md ring-1 ring-[#2563EB]/20 relative"
                    : "bg-white border border-[#E2E8F0] shadow-sm hover:border-[#2563EB]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10px] font-mono uppercase font-bold tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                      {tier.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#0F172A]">
                      {tier.badge}
                    </span>
                  </div>

                  <div className="my-4">
                    <span className="text-3xl font-serif font-medium text-[#0F172A] tracking-tight">
                      {tier.rate}
                    </span>
                    <span className="text-xs font-mono text-[#64748B] ml-1.5">
                      {tier.period}
                    </span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed mb-6">
                    {tier.idealFor}
                  </p>

                  <div className="space-y-2.5 border-t border-[#F1F5F9] pt-4 mb-6">
                    {tier.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#E2E8F0] pt-5">
                  <div className="text-[11px] font-mono text-[#64748B] mb-3 flex items-center space-x-1.5">
                    <Activity className="w-3 h-3 text-[#2563EB]" />
                    <span>SLA: {tier.sla}</span>
                  </div>
                  <Link
                    href={`/contact/?service=salesforce&tier=${encodeURIComponent(tier.name)}`}
                    className={`w-full text-xs font-semibold py-3 px-4 rounded-[6px] flex items-center justify-center space-x-2 transition-all ${
                      tier.highlighted
                        ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-sm"
                        : "bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#0F172A] border border-[#CBD5E1] hover:border-[#2563EB]"
                    }`}
                  >
                    <span>Start with {tier.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 7. TECHNICAL FAQS ACCORDION ================= */}
        <section className="my-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A] tracking-tight">
              Salesforce Consulting & Architecture FAQs
            </h2>
          </div>

          <div className="space-y-3 max-w-4xl">
            {SALESFORCE_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#E2E8F0] rounded-[8px] bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-medium text-[#0F172A] hover:text-[#2563EB] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#2563EB]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 8. CLOSING CTA BANNER ================= */}
        <CtaSection
          badgeText="Salesforce Practice: Q4 Project Sprints Available"
          title="Ready to transform your Salesforce org with certified architects?"
          description="Schedule a technical consultation with our lead architects. We’ll review your org health, diagnose governor limit risks, and provide an actionable architectural roadmap."
          primaryCtaText="Speak with a Salesforce Architect"
          primaryCtaHref="/contact/?service=salesforce"
        />
      </div>
    </div>
  );
}
