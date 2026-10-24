import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ServicePricingExplorer from "@/components/pricing/ServicePricingExplorer";
import ContactForm from "@/components/forms/ContactForm";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Pricing & Project Cost Estimator",
  description: "Transparent pricing frameworks for websites, Shopify stores, and mobile apps. Fixed sprints or dedicated engineering squads.",
  alternates: {
    canonical: "/pricing/"
  }
};

export default function PricingPage() {
  const packages = [
    {
      name: "Fixed-Price Sprint",
      tagline: "For new websites, Shopify stores, and product redesigns",
      price: "$3,500",
      period: "starting base",
      badge: "Most Common",
      featured: true,
      features: [
        "Fixed-cost statement of work with zero surprise bills",
        "Next.js App Router or Shopify OS 2.0 theme architecture",
        "Sub-1-second mobile page load speed target",
        "Structured SEO metadata & schema markup",
        "Headless CMS integration (Sanity or Contentful)",
        "30 days post-launch warranty and bug fixes"
      ],
      ctaText: "Start a fixed sprint",
      ctaHref: "/contact/?tier=fixed_sprint"
    },
    {
      name: "Dedicated Engineering Squad",
      tagline: "For ongoing feature development and mobile app builds",
      price: "$6,000",
      period: "per month",
      badge: "Continuous Velocity",
      featured: false,
      features: [
        "Senior cross-functional squad (Lead Architect + Full-Stack Engineer + QA)",
        "Bi-weekly sprint planning and continuous delivery",
        "Direct Slack or WhatsApp channel with guaranteed same-day response",
        "iOS, Android, and web feature velocity",
        "Automated CI/CD pipelines & test suites",
        "Scale up or cancel anytime with two weeks notice"
      ],
      ctaText: "Retain engineering squad",
      ctaHref: "/contact/?tier=dedicated_squad"
    },
    {
      name: "Technical SEO & Maintenance Retainer",
      tagline: "For ongoing Core Web Vitals, schema, and API maintenance",
      price: "$2,000",
      period: "per month",
      badge: "Ongoing Support",
      featured: false,
      features: [
        "Ongoing crawl health monitoring & speed optimization",
        "Bi-directional CRM & API integration maintenance",
        "Google Search Console & Core Web Vitals tracking",
        "Schema.org rich snippet expansions",
        "Priority bug fixing SLA",
        "Monthly strategy and review call"
      ],
      ctaText: "Secure maintenance retainer",
      ctaHref: "/contact/?tier=growth_retainer"
    }
  ];

  const pricingFaqs = [
    {
      question: "Are your project quotes fixed or billed by the hour?",
      answer: "We primarily work on guaranteed fixed-price statements of work. Deliverables, timelines, and acceptance criteria are explicitly documented upfront so you never experience budget creep."
    },
    {
      question: "What is your standard payment structure?",
      answer: "For fixed sprints, payments are structured in transparent milestones: 40% kickoff deposit, 30% upon architecture approval, and 30% upon final production deployment."
    },
    {
      question: "Do you offer post-launch warranty and maintenance?",
      answer: "Yes, every custom project includes 30 to 60 days of complimentary post-launch bug warranty. Afterward, you can transition into a flexible monthly retainer or take full code ownership."
    },
    {
      question: "Do we own 100% of the code and intellectual property?",
      answer: "Yes, completely. All GitHub repositories, Figma master assets, API keys, and deployment credentials are fully transferred to your company upon final milestone payment."
    }
  ];

  const breadcrumbs = [{ label: "Pricing & Estimator" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Pricing", url: "/pricing/" }
  ]);
  const faqSchema = getFaqJsonLd(pricingFaqs);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-pricing" data={breadcrumbSchema} />
      <JsonLd id="schema-faq-pricing" data={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="max-w-3xl my-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Pricing & Architecture Estimator
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            Transparent pricing. Predictable delivery.
          </h1>
          <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
            No ambiguous hourly billings or surprise invoices. Explore service-specific pricing below, select an engagement framework, or calculate your custom project scope.
          </p>
        </div>

        {/* 1. Service-Specific Pricing Explorer (Pre-selected from homepage clicks) */}
        <div className="my-14">
          <ServicePricingExplorer />
        </div>

        {/* 2. Standard Packages */}
        <div className="my-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Engagement Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Standard Engagement Frameworks
            </h2>
            <p className="text-[#475569] text-xs sm:text-sm mt-2">
              Structured partnership tiers designed for clarity, agility, and continuous velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-[8px] p-6 sm:p-7 flex flex-col justify-between transition-all ${
                  pkg.featured
                    ? "bg-white border-2 border-[#2563EB] shadow-md relative"
                    : "bg-white border border-[#E2E8F0] shadow-sm hover:border-[#CBD5E1]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-[#0F172A] mb-1">{pkg.name}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-5">{pkg.tagline}</p>

                  <div className="mb-6 pb-5 border-b border-[#E2E8F0]">
                    <div className="text-3xl sm:text-4xl font-serif text-[#0F172A]">{pkg.price}</div>
                    <div className="text-xs font-mono text-[#64748B] mt-1">{pkg.period}</div>
                  </div>

                  <div className="space-y-2.5 mb-8 text-xs text-[#475569]">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={pkg.ctaHref}
                  className={`w-full py-2.5 rounded-[6px] font-medium text-xs text-center flex items-center justify-center space-x-1.5 transition-all ${
                    pkg.featured
                      ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-sm"
                      : "bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1]"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Interactive Estimator Tool (Custom Multi-Service Scope) */}
        <div id="custom-estimator" className="my-20 scroll-mt-24">
          <ContactForm
            title="Project Cost Estimator & Inquiry Configuration"
            subtitle="Calculate realistic investment benchmarks, specify your architecture in each step, and submit your project brief directly to our engineering team."
          />
        </div>

        {/* Pricing FAQs */}
        <FaqAccordion
          faqs={pricingFaqs}
          title="Pricing & Billing Clarifications"
          subtitle="Everything you need to know about milestones, contracts, warranties, and code ownership."
        />

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
