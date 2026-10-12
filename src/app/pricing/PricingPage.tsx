import { Metadata } from "next";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Calculator 
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ProjectEstimator from "@/components/calculator/ProjectEstimator";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Pricing & Project Cost Estimator",
  description: "Explore transparent pricing for web development, Shopify stores, technical SEO, mobile apps, and Salesforce integration. Use our interactive estimator to calculate your project budget.",
  alternates: {
    canonical: "/pricing"
  }
};

export default function PricingPage() {
  const packages = [
    {
      name: "Fixed-Price Sprint",
      tagline: "Ideal for new websites, product launches & targeted redesigns",
      price: "$3,500",
      period: "starting base",
      badge: "Most Popular for Launches",
      featured: true,
      features: [
        "100% fixed-cost statement of work (no surprise bills)",
        "Bespoke Next.js 16 App Router architecture",
        "Sub-1-second Core Web Vitals guarantee",
        "Headless CMS integration (Sanity / Contentful)",
        "Technical SEO structured data & schema markup",
        "30 days post-launch warranty & staff training"
      ],
      ctaText: "Start Fixed Sprint",
      ctaHref: "/contact?tier=fixed_sprint"
    },
    {
      name: "Dedicated Engineering Squad",
      tagline: "For scaling venture-backed startups & ongoing mobile app engineering",
      price: "$6,000",
      period: "per month / squad",
      badge: "High Velocity",
      featured: false,
      features: [
        "Senior cross-functional squad (Lead Architect + Full-Stack Dev + QA)",
        "Bi-weekly sprint planning & continuous deployment",
        "Direct Slack channel access with 2-hour SLA",
        "iOS, Android, and Web feature velocity",
        "Automated CI/CD pipelines & test suites",
        "Cancel or scale up anytime with 14-day notice"
      ],
      ctaText: "Retain Engineering Squad",
      ctaHref: "/contact?tier=dedicated_squad"
    },
    {
      name: "Managed SEO & Support Retainer",
      tagline: "Dominating organic search queries & maintaining Salesforce orgs",
      price: "$2,000",
      period: "per month",
      badge: "Continuous Growth",
      featured: false,
      features: [
        "Ongoing technical crawler audits & speed optimization",
        "4 authoritative topic cluster pillar articles / month",
        "Bi-directional CRM & Salesforce maintenance hours",
        "Google Search Console & Core Web Vitals monitoring",
        "Competitor ranking gap analysis & schema expansion",
        "Monthly executive strategy review call"
      ],
      ctaText: "Secure Growth Retainer",
      ctaHref: "/contact?tier=growth_retainer"
    }
  ];

  const pricingFaqs = [
    {
      question: "Are your project quotes fixed or billed by the hour?",
      answer: "We primarily work on guaranteed fixed-price statements of work. We define explicit deliverables, timelines, and acceptance criteria upfront so you never experience budget creep."
    },
    {
      question: "What is your payment structure?",
      answer: "For fixed sprints, payments are structured in predictable milestones: 40% kickoff deposit, 30% upon design & architecture approval, and 30% upon final production deployment."
    },
    {
      question: "Do you offer post-launch maintenance and warranties?",
      answer: "Yes, every custom project includes 30 to 60 days of complimentary post-launch bug warranty and telemetry monitoring. Afterward, you can transition into a flexible monthly retainer or take full code ownership."
    },
    {
      question: "Do we own 100% of the code and design intellectual property?",
      answer: "Yes, 100%. Upon final milestone completion, all GitHub repositories, Figma master assets, API keys, and deployment credentials are fully transferred to your ownership."
    }
  ];

  const breadcrumbs = [{ label: "Pricing & Estimator" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Pricing", url: "/pricing" }
  ]);

  return (
    <div className="py-8">
      <JsonLd id="schema-breadcrumb-pricing" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Value-Driven Engagements</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Transparent Investment. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Guaranteed Outcomes.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            No ambiguous hourly billings or hidden surcharges. Choose a structured sprint model or calculate your exact scope in our real-time estimator below.
          </p>
        </div>

        {/* 1. Interactive Estimator Tool */}
        <div className="my-16">
          <ProjectEstimator />
        </div>

        {/* 2. Three Standard Package Cards */}
        <div className="my-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Standard Engagement Frameworks
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Select the structure that aligns with your product roadmap and engineering velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  pkg.featured
                    ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan-400/80 shadow-2xl shadow-cyan-500/20 relative scale-105 z-10"
                    : "bg-slate-900/60 border border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/5">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{pkg.tagline}</p>

                  <div className="mb-8 pb-6 border-b border-white/10">
                    <div className="text-4xl sm:text-5xl font-black text-white">{pkg.price}</div>
                    <div className="text-xs text-slate-400 mt-1">{pkg.period}</div>
                  </div>

                  <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-300">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={pkg.ctaHref}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center space-x-2 transition-all ${
                    pkg.featured
                      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25"
                      : "bg-slate-950 hover:bg-slate-800 text-slate-200 border border-white/10"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing FAQs */}
        <FaqAccordion
          faqs={pricingFaqs}
          title="Pricing & Billing Clarifications"
          subtitle="Everything you need to know about deposits, contracts, warranties, and code ownership."
        />

        {/* Closing CTA */}
        <CtaSection
          title="Need a Custom Enterprise Proposal?"
          description="Speak directly with our solutions architects. We'll examine your specs and build a custom phased deployment roadmap."
        />
      </div>
    </div>
  );
}
