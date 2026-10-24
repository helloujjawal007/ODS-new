import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Code } from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Terms of Service & Engagement",
  description: `Read the Terms of Service for ${SITE_CONFIG.name}. Full IP ownership, transparent sprint deliverables, and mutual non-disclosure.`,
  alternates: {
    canonical: "/terms/"
  }
};

export default function TermsPage() {
  const breadcrumbs = [{ label: "Terms of Service" }];

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="my-8 border-b border-[#E2E8F0] pb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Engagement Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-[#64748B] text-xs font-mono mt-2">
            Last Updated: January 1, 2026 · Governing all engineering statements of work
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-10 text-[#0F172A] text-xs sm:text-sm leading-relaxed">
          {/* 1. Acceptance */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0F172A]">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#475569]">
              By accessing the website at <strong>{SITE_CONFIG.url}</strong>, submitting inquiries through our interactive tools, or entering into a Statement of Work (&ldquo;SOW&rdquo;) with <strong>{SITE_CONFIG.legalName}</strong>, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you possess the authority to bind such entity.
            </p>
          </section>

          {/* 2. Client IP Ownership */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0F172A]">
              2. 100% Intellectual Property Ownership
            </h2>
            <div className="p-5 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs">
              <div className="flex items-center space-x-2 text-[#0F172A] font-semibold mb-2">
                <Code className="w-4 h-4 text-[#2563EB]" />
                <h3>Zero Vendor Lock-In</h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                Upon final invoice settlement for deliverables defined in any executed Statement of Work, <strong>the Client retains 100% exclusive ownership of all bespoke source code, Figma UI design assets, database schemas, and documentation created specifically for the project.</strong> {SITE_CONFIG.name} retains no proprietary claim or runtime licensing restrictions over your custom deliverables.
              </p>
            </div>
          </section>

          {/* 3. Statements of Work */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0F172A]">
              3. Scope of Work & Milestone Delivery
            </h2>
            <p className="text-[#475569]">
              All engineering services are executed under mutually agreed Statements of Work detailing:
            </p>
            <ul className="space-y-1.5 text-[#475569] text-xs pl-2">
              <li className="flex items-start space-x-2">
                <span className="text-[#2563EB] mt-0.5 font-bold">•</span>
                <span>Architecture specifications, repository access, and technology stack versions.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#2563EB] mt-0.5 font-bold">•</span>
                <span>Sprint milestone deliverables and formal acceptance criteria.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#2563EB] mt-0.5 font-bold">•</span>
                <span>Timeline schedules, review cycles, and target deployment dates.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#2563EB] mt-0.5 font-bold">•</span>
                <span>Quality standards and Core Web Vitals performance benchmarks.</span>
              </li>
            </ul>
          </section>

          {/* 4. Performance Standards */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0F172A]">
              4. Quality Standards & Warranty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="p-4 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center space-x-2 text-[#0F172A] font-semibold mb-1 text-xs">
                  <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                  <h4>Core Web Vitals Compliance</h4>
                </div>
                <p className="text-xs text-[#475569]">
                  All bespoke web development projects must meet Google Core Web Vitals thresholds on standard baseline environments before final sign-off.
                </p>
              </div>

              <div className="p-4 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center space-x-2 text-[#0F172A] font-semibold mb-1 text-xs">
                  <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                  <h4>Post-Launch Warranty</h4>
                </div>
                <p className="text-xs text-[#475569]">
                  Every custom deployment includes 30 to 60 days of complimentary bug-fixing warranty covering any functional regressions from the approved specification.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Contact */}
          <section className="p-6 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="font-serif text-lg font-medium text-[#0F172A]">
              Contractual Questions
            </h3>
            <p className="text-[#475569] text-xs">
              For questions regarding active statements of work or customized MSAs, contact:
            </p>
            <div className="text-xs text-[#0F172A] font-mono">
              Email: {SITE_CONFIG.contact.email} <br />
              Location: {SITE_CONFIG.contact.address}, {SITE_CONFIG.contact.city}, India
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="text-xs text-[#2563EB] hover:underline inline-flex items-center space-x-1 font-semibold"
              >
                <span>Contact Engineering Team</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
