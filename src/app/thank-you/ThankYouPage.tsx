import Link from "next/link";
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Code2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  FileCheck,
  Zap
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqAccordion from "@/components/sections/FaqAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, getOrganizationJsonLd, SITE_CONFIG } from "@/lib/seo-config";

const THANK_YOU_FAQS = [
  {
    question: "What happens after I submit my project details?",
    answer: "A senior software architect at Cloud Consultancy personally reviews your inquiry, analyzes your requirements and tech stack, and prepares an architectural breakdown with milestone-based timelines."
  },
  {
    question: "How quickly will a Cloud Consultancy engineer respond?",
    answer: "We guarantee a direct response within 24 hours (one business day). You will communicate directly with a lead technical specialist who can answer architecture, pricing, and timeline questions immediately."
  },
  {
    question: "What should I prepare for our upcoming scoping discussion?",
    answer: "Any existing product specifications, Figma prototypes, GitHub repositories, API documentation, or target launch deadlines help us provide a precise sprint breakdown during our call."
  },
  {
    question: "Can we execute a mutual Non-Disclosure Agreement (NDA) first?",
    answer: "Yes, absolutely. All project submissions are kept strictly confidential under mutual NDA by default. If your team requires your own company's standard NDA signed prior to sharing credentials or proprietary designs, our team will execute it promptly."
  },
  {
    question: "What if our project is urgent or experiencing an active production outage?",
    answer: "For urgent launch deadlines, critical software defects, or immediate cloud architecture emergencies, reach out directly to our engineering leadership via WhatsApp at +91 91425 90800 or email sales@cloudconsultancy.in for expedited same-day dispatch."
  }
];

export default function ThankYouPage() {
  const breadcrumbs = [
    { label: "Contact", href: "/contact/" },
    { label: "Thank You" }
  ];

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Contact", url: "/contact/" },
    { name: "Thank You", url: "/thank-you/" }
  ]);

  const organizationSchema = getOrganizationJsonLd();

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Dynamic Structured Data Schemas */}
      <JsonLd id="schema-breadcrumb-thank-you" data={breadcrumbSchema} />
      <JsonLd id="schema-org-thank-you" data={organizationSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Confirmation Banner */}
        <section className="my-10 lg:my-14 text-center max-w-3xl mx-auto">
          {/* SLA Status Pill */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#1D4ED8] font-semibold">
              Inquiry Confirmed · 24-Hour SLA Active
            </span>
          </div>

          {/* Success Check Icon */}
          <div className="w-16 h-16 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto mb-6 border border-[#BFDBFE] shadow-xs">
            <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            Thank you, we will get back to you in 24 hours.
          </h1>

          <p className="text-[#475569] text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Your project brief has been securely delivered to our senior engineering team. A lead software architect is reviewing your technical scope, architecture requirements, and timeline to formulate a detailed milestone proposal.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-mono text-[#334155]">
              <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>&lt; 24h Response Guaranteed</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-mono text-[#334155]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Strict Mutual NDA Protection</span>
            </span>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-xs font-mono text-[#334155]">
              <FileCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>100% Code &amp; Asset Ownership</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-2 transition-all shadow-sm"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
            </Link>

            <Link
              href="/portfolio/"
              className="w-full sm:w-auto px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-xs border border-[#CBD5E1] hover:border-[#94A3B8] transition-colors text-center"
            >
              Explore Production Case Studies
            </Link>
          </div>
        </section>

        {/* 3 Steps: What Happens Next */}
        <section className="my-14 border-t border-[#E2E8F0] pt-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Next Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              What Happens During the Next 24 Hours
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2">
              Our direct engineer engagement model ensures you speak with the technical specialists who actually build your systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4 border border-[#BFDBFE]">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-[#2563EB] uppercase font-semibold mb-1">
                Step 01
              </div>
              <h3 className="font-serif text-base font-medium text-[#0F172A] mb-2">
                Architectural Scoping
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                A senior software architect reviews your specifications, evaluates API integrations, and structures the technical approach.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4 border border-[#BFDBFE]">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-[#2563EB] uppercase font-semibold mb-1">
                Step 02
              </div>
              <h3 className="font-serif text-base font-medium text-[#0F172A] mb-2">
                Transparent Proposal
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                We formulate fixed sprint milestones, recommended libraries, delivery timelines, and transparent investment brackets.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 shadow-2xs">
              <div className="w-10 h-10 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-4 border border-[#BFDBFE]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-[11px] font-mono text-[#2563EB] uppercase font-semibold mb-1">
                Step 03
              </div>
              <h3 className="font-serif text-base font-medium text-[#0F172A] mb-2">
                Technical Discovery Call
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                We schedule a 30-minute introductory call directly with the lead engineer to answer your questions and confirm kickoff dates.
              </p>
            </div>
          </div>
        </section>

        {/* Direct Expedited Contact Strip */}
        <div className="max-w-4xl mx-auto my-12 bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
              Need Immediate Attention?
            </div>
            <p className="text-xs text-[#475569]">
              If you have an urgent production deadline or active outage, reach our engineering desk directly.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20Cloud%20Consultancy,%20I%20have%20an%20urgent%20project%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-[6px] bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#BFDBFE] text-xs font-medium text-[#1D4ED8] flex items-center space-x-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp: +91 91425 90800</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="px-4 py-2.5 rounded-[6px] bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-medium text-[#0F172A] flex items-center space-x-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
          </div>
        </div>

        {/* 5 FAQs with Dynamic Schema Integration */}
        <div className="my-16 border-t border-[#E2E8F0] pt-12">
          <FaqAccordion
            faqs={THANK_YOU_FAQS}
            title="Frequently Asked Questions After Submission"
            subtitle="Everything you need to know about our communication SLAs, NDA protection, and discovery process."
          />
        </div>
      </div>
    </div>
  );
}
