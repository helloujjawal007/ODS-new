"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Code2, 
  Workflow, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  CheckCircle2, 
  Layers, 
  GitBranch, 
  Network,
  Wrench,
  Lock
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";
import {
  SALESFORCE_HERO_PILLARS,
  SALESFORCE_CLOUDS,
  SALESFORCE_INTEGRATION_SYSTEMS,
  SALESFORCE_PLATFORM_DETAILS,
  SALESFORCE_PRICING_TIERS,
  SALESFORCE_FAQS
} from "@/lib/salesforce-data";

export default function SalesforcePage() {
  const [activeCloudId, setActiveCloudId] = useState<string>("sales-cloud");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const selectedCloud = SALESFORCE_CLOUDS.find((c) => c.id === activeCloudId) || SALESFORCE_CLOUDS[0];

  const breadcrumbs = [
    { label: "Salesforce" }
  ];

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Salesforce Consulting & Engineering", url: "/salesforce/" }
  ]);

  const salesforceServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Salesforce Consulting, Custom LWC & Multi-Cloud Architecture",
    "provider": {
      "@type": "ProfessionalService",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url,
      "email": SITE_CONFIG.contact.email,
      "telephone": SITE_CONFIG.contact.phone
    },
    "description": "Certified Salesforce Technical Architects delivering custom Lightning Web Components (LWC), bulkified Apex trigger frameworks, high-speed Flow automation, and MuleSoft enterprise integrations.",
    "serviceType": "Salesforce Consulting, Multi-Cloud Architecture, MuleSoft Integration, and LWC Engineering",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Salesforce Architecture Solutions",
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

  const heroMetrics = [
    { value: "100%", label: "Certified Salesforce Architects" },
    { value: "0", label: "Governor Limit Breaches" },
    { value: "65%", label: "Faster Quote-to-Close Velocity" },
    { value: "< 340ms", label: "P99 API & ERP Sync Latency" }
  ];

  return (
    <div className="py-6 sm:py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-salesforce" data={breadcrumbSchema} />
      <JsonLd id="schema-service-salesforce" data={salesforceServiceSchema} />
      <JsonLd id="schema-faq-salesforce" data={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* ================= 1. HERO BANNER SECTION (MATCHING SCREENSHOT STRUCTURE) ================= */}
        <section className="my-10 lg:my-14 border-b border-[#E2E8F0] pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block">
                  Salesforce Practice · Certified Architecture
                </span>
              </div>

              {/* High SV / Low KD SEO Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
                Salesforce Consulting &amp; Custom LWC Development
              </h1>

              {/* High-Intent Keyword-Rich Description */}
              <p className="text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl">
                Certified technical architects delivering custom Lightning Web Components (LWC), bulkified Apex trigger frameworks, high-speed Flow automation, and enterprise MuleSoft ERP integrations.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>30-Day Zero-Defect Warranty</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Wrench className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Ongoing Maintenance Retainers</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-mono text-[#334155]">
                  <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>100% Code &amp; Asset Ownership</span>
                </span>
              </div>

              {/* Metrics Row (4 distinct boxes) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                {heroMetrics.map((m, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 shadow-2xs">
                    <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">{m.value}</div>
                    <div className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href="/contact/?service=salesforce"
                  className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Inquire about this discipline</span>
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
                    src="/images/service_salesforce_support.jpg"
                    alt="Salesforce Consulting, Lightning Web Components and multi-cloud architecture dashboard"
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
                      $4,500 per sprint
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-[3px] font-medium">
                    30-Day Defect Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. HERO HIGHLIGHT PILLARS ================= */}
        <section className="my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SALESFORCE_HERO_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-5 hover:border-[#2563EB] hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                  <h3 className="font-serif text-base font-semibold text-[#0F172A]">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. MULTI-CLOUD SOLUTIONS SPOTLIGHT (SALES CLOUD & SERVICE CLOUD) ================= */}
        <section id="clouds" className="my-20 scroll-mt-24">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Multi-Cloud Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              Comprehensive Salesforce Cloud Ecosystem Expertise
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              We specialize across the entire Salesforce multi-cloud suite, from revenue acceleration and customer support automation to low-latency integration meshes.
            </p>
          </div>

          {/* Cloud Selection Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
            {SALESFORCE_CLOUDS.map((cloud) => (
              <button
                key={cloud.id}
                type="button"
                onClick={() => setActiveCloudId(cloud.id)}
                className={`px-4 py-2.5 rounded-[6px] text-xs font-medium whitespace-nowrap transition-all border ${
                  activeCloudId === cloud.id
                    ? "bg-[#2563EB] text-white border-[#2563EB] shadow-sm font-semibold"
                    : "bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#CBD5E1] hover:text-[#0F172A]"
                }`}
              >
                {cloud.name}
              </button>
            ))}
          </div>

          {/* Active Cloud Showcase Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
                    {selectedCloud.badge}
                  </span>
                  <span>·</span>
                  <span className="text-xs font-mono text-[#64748B]">Enterprise Implementation</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0F172A]">
                  {selectedCloud.headline}
                </h3>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {selectedCloud.description}
                </p>

                {/* Key Deliverables Checkmarks */}
                <div className="space-y-2.5 pt-3">
                  {selectedCloud.keyUseCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <span className="leading-snug">{useCase}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="pt-4 flex flex-wrap gap-2 items-center">
                  <span className="text-[11px] font-mono text-[#64748B] mr-2">Core Tech:</span>
                  {selectedCloud.coreTech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] text-[11px] font-mono rounded-[4px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Performance Metric & Targeted CTA */}
              <div className="lg:col-span-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 space-y-5 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#2563EB] font-semibold block mb-1">
                    Documented Impact
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-tight">
                    {selectedCloud.metric.value}
                  </div>
                  <div className="text-xs text-[#475569] mt-1 font-medium">
                    {selectedCloud.metric.label}
                  </div>
                </div>

                <div className="border-t border-[#E2E8F0] pt-4 space-y-3">
                  <div className="text-[11px] text-[#64748B]">
                    Ready to modernize {selectedCloud.name}? Our certified architects review your org schema and requirements within 24 hours.
                  </div>
                  <Link
                    href={`/contact/?service=salesforce&cloud=${encodeURIComponent(selectedCloud.name)}`}
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold py-3 px-4 rounded-[6px] flex items-center justify-center space-x-2 transition-colors shadow-2xs"
                  >
                    <span>Consult on {selectedCloud.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. DEEP DIVE: APEX, FLOWS, TRIGGERS & LWC ================= */}
        <section className="my-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Platform Engineering
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              Apex, Triggers, Flows &amp; Lightning Web Components
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              We engineer maintainable, decoupled code following enterprise design patterns (One-Trigger-Per-Object, Selector &amp; Service layers) so your org never breaches governor limits under high transactional surge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SALESFORCE_PLATFORM_DETAILS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-7 shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-semibold">
                      {item.badge}
                    </span>
                    {idx === 0 && <Code2 className="w-5 h-5 text-[#2563EB]" />}
                    {idx === 1 && <Workflow className="w-5 h-5 text-[#2563EB]" />}
                    {idx === 2 && <Layers className="w-5 h-5 text-[#2563EB]" />}
                    {idx === 3 && <GitBranch className="w-5 h-5 text-[#2563EB]" />}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-[#0F172A] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="space-y-2 border-t border-[#F1F5F9] pt-4">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#64748B] text-[11px]">Strict Unit Testing &gt;= 90%</span>
                  <Link
                    href="/contact/?service=salesforce"
                    className="font-semibold text-[#2563EB] hover:underline inline-flex items-center"
                  >
                    Discuss Architecture <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 5. DEEP DIVE: MULESOFT & ENTERPRISE INTEGRATIONS ================= */}
        <section className="my-20 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[12px] p-6 sm:p-10 shadow-2xs">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-mono font-medium text-[#0F172A] mb-3">
              <Network className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>MuleSoft &amp; Enterprise Integration Mesh</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              Bi-Directional, Zero-Data-Loss Integration Architecture
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              We connect Salesforce with your mission-critical ERPs, e-commerce engines, financial ledgers, and data lakes using MuleSoft Anypoint Platform, composite APIs, and event-driven streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SALESFORCE_INTEGRATION_SYSTEMS.map((system, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-2xs hover:border-[#2563EB] hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#64748B] font-semibold">
                      {system.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                      {system.protocol}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-semibold text-[#0F172A] mb-1.5">
                    {system.system}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {system.description}
                  </p>

                  <div className="space-y-1.5 border-t border-[#F1F5F9] pt-3">
                    {system.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-1.5 text-[11px] text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration Guarantee Callout */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-[6px] border border-[#E2E8F0]">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0" />
              <div className="text-xs text-[#334155]">
                <strong className="text-[#0F172A]">Resilient Queue Guarantee:</strong> All integrations are buffered through exponential backoff queues with HMAC verification, ensuring zero dropped leads or sync timeouts during traffic surges.
              </div>
            </div>
            <Link
              href="/contact/?service=salesforce"
              className="text-xs font-semibold text-[#2563EB] hover:underline shrink-0"
            >
              Inquire about your stack &rarr;
            </Link>
          </div>
        </section>

        {/* ================= 6. FEATURED CASE STUDY SHOWCASE ================= */}
        <section className="my-20 bg-white border border-[#E2E8F0] rounded-[12px] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#2563EB]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="uppercase font-semibold tracking-wider">Production Outcome</span>
                <span>·</span>
                <span className="text-[#64748B]">B2B Hardware Distribution</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0F172A] leading-snug">
                Salesforce Quoting Flow, CPQ &amp; MuleSoft ERP Modernization
              </h3>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                InnoTech Global, a high-volume hardware distributor, suffered from 20+ minute quote generation times, SOQL 101 governor limit exceptions during month-end spikes, and manual ERP data re-entry. We re-architected their entire quoting workflow into reactive Lightning Web Components, consolidated 14 redundant Process Builders into subflows, and deployed MuleSoft API pipelines to their SAP backend.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-[6px]">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">65%</div>
                  <div className="text-[11px] text-[#64748B]">Faster Quoting Cycle</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-[6px]">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#0F172A]">240 Hrs</div>
                  <div className="text-[11px] text-[#64748B]">Monthly Ops Saved</div>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-3 rounded-[6px]">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-[#2563EB]">0 Errors</div>
                  <div className="text-[11px] text-[#64748B]">Governor Breaches</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-6 space-y-4 shadow-2xs">
              <span className="text-[11px] font-mono uppercase font-semibold text-[#64748B] block">
                Technical Retrospective
              </span>
              <p className="text-xs text-[#334155] italic leading-relaxed">
                &ldquo;Cloud Consultancy transformed our Salesforce org from a daily operational bottleneck into our most reliable revenue engine. Our reps close quotes in a fraction of the time with zero system crashes.&rdquo;
              </p>
              <div className="text-xs border-t border-[#E2E8F0] pt-3">
                <div className="font-semibold text-[#0F172A]">Devon Reed</div>
                <div className="text-[#64748B] text-[11px]">Director of Commercial Operations</div>
              </div>
              <Link
                href="/portfolio/innotech-salesforce-lwc/"
                className="w-full bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold py-2.5 px-4 rounded-[6px] flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 7. TRANSPARENT ENGAGEMENT & PRICING MODELS ================= */}
        <section className="my-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Transparent Investment
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              Flexible Salesforce Engagement Models
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              No bloated enterprise agency markups or locked retainers. Work directly with certified senior architects across focused technical sprints, hourly advisory, or proactive managed SLAs.
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

                  <p className="text-xs text-[#475569] mb-5 leading-relaxed">
                    {tier.idealFor}
                  </p>

                  <div className="space-y-2 border-t border-[#F1F5F9] pt-4 mb-6">
                    {tier.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start space-x-2 text-xs text-[#334155]">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0]">
                  <div className="text-[11px] font-mono text-[#64748B] mb-3 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{tier.sla}</span>
                  </div>

                  <Link
                    href={`/contact/?service=salesforce&tier=${encodeURIComponent(tier.name)}`}
                    className={`w-full py-2.5 px-4 rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors ${
                      tier.highlighted
                        ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xs"
                        : "bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A]"
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 8. TECHNICAL FREQUENTLY ASKED QUESTIONS ================= */}
        <section className="my-20">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Architecture &amp; Process FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
              Frequently Asked Salesforce Questions
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
              Clear answers on governor limit handling, MuleSoft architecture, code ownership, and migration from legacy Process Builders.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl">
            {SALESFORCE_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden transition-all shadow-2xs hover:border-[#CBD5E1]"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between space-x-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base font-medium text-[#0F172A]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#2563EB]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= 9. CLOSING CTA BANNER ================= */}
        <CtaSection
          badgeText="Salesforce Practice: Dedicated Sprints Available"
          title="Ready to transform your Salesforce org with certified architects?"
          description="Schedule a technical consultation with our lead architects. We’ll review your org health, diagnose governor limit risks, and provide an actionable architectural roadmap across Sales Cloud, Service Cloud, and MuleSoft integrations."
          primaryCtaText="Speak with a Salesforce Architect"
          primaryCtaHref="/contact/?service=salesforce"
        />
      </div>
    </div>
  );
}
