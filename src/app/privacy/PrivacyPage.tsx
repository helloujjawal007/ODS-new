import { Metadata } from "next";
import Link from "next/link";
import { FileText, Eye, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description: `How ${SITE_CONFIG.name} collects, protects, and handles your data in accordance with global privacy principles.`,
  alternates: {
    canonical: "/privacy/"
  }
};

export default function PrivacyPage() {
  const breadcrumbs = [{ label: "Privacy Policy" }];

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="my-8 border-b border-[#E2E8F0] pb-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Compliance & Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
            Privacy & Cookie Policy
          </h1>
          <p className="text-[#64748B] text-xs font-mono mt-2">
            Last Updated: January 1, 2026 · Effective Immediately
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-10 text-[#0F172A] text-xs sm:text-sm leading-relaxed">
          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0F172A]">
              1. Our Commitment to Privacy
            </h2>
            <p className="text-[#475569]">
              At <strong>{SITE_CONFIG.legalName}</strong> (&ldquo;Cloud Consultancy&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take data privacy and client confidentiality seriously. This Privacy and Cookie Policy describes how we collect, store, process, and safeguard information when you visit our website, engage our engineering services, or submit inquiries via our project estimator and contact forms.
            </p>
            <p className="text-[#475569]">
              We operate under the core principle of minimal data collection: we collect only what is strictly required to provide technical feasibility consultations, execute engineering statements of work, and maintain optimal system performance.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0F172A]">
              2. Information We Collect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
              <div className="p-5 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center space-x-2 text-[#0F172A] font-semibold mb-2">
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  <h4>Information You Provide</h4>
                </div>
                <ul className="text-xs space-y-1.5 text-[#475569]">
                  <li>• Name, email address, and phone / WhatsApp number</li>
                  <li>• Company name, existing website URL, and project specifications</li>
                  <li>• Estimated project budget brackets and target launch milestones</li>
                  <li>• Project brief notes and architectural requirements</li>
                </ul>
              </div>

              <div className="p-5 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs">
                <div className="flex items-center space-x-2 text-[#0F172A] font-semibold mb-2">
                  <Eye className="w-4 h-4 text-[#2563EB]" />
                  <h4>Technical & Diagnostic Data</h4>
                </div>
                <ul className="text-xs space-y-1.5 text-[#475569]">
                  <li>• Anonymized Core Web Vitals telemetry (LCP, CLS, INP)</li>
                  <li>• Browser type, device category, and referral source</li>
                  <li>• URLs submitted to our live speed diagnostic tool</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Cookie Policy */}
          <section id="cookies" className="space-y-3 scroll-mt-24">
            <h2 className="font-serif text-xl text-[#0F172A]">
              3. Cookie Policy & Tracking
            </h2>
            <p className="text-[#475569]">
              Cookies are small data files placed on your device. We prioritize privacy-first tracking and do not sell your personal information to ad networks.
            </p>
            <div className="space-y-2 mt-3 text-xs">
              <div className="p-3.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="font-semibold text-[#0F172A] block mb-1">Strictly Necessary Cookies:</span>
                <p className="text-[#475569]">
                  Essential for security and basic functionality (e.g. saving cookie preferences). These cannot be switched off.
                </p>
              </div>
              <div className="p-3.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0]">
                <span className="font-semibold text-[#0F172A] block mb-1">Performance & Analytics:</span>
                <p className="text-[#475569]">
                  Used to benchmark page speed, server response times, and diagnostic errors. All data is aggregated and anonymized.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Client IP & NDA */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-[#0F172A]">
              4. Client Intellectual Property & Mutual Non-Disclosure
            </h2>
            <p className="text-[#475569]">
              All client repositories, database credentials, Figma files, and proprietary algorithm details shared during an active engagement are protected by mutual non-disclosure by default. We never reuse custom proprietary codebases across clients.
            </p>
          </section>

          {/* 5. Contact */}
          <section className="p-6 rounded-[8px] bg-white border border-[#E2E8F0] shadow-xs space-y-3">
            <h3 className="font-serif text-lg font-medium text-[#0F172A]">
              Questions Regarding This Privacy Policy
            </h3>
            <p className="text-[#475569] text-xs">
              If you have any questions or wish to exercise your data rights, please contact our team directly:
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
                <span>Contact Us</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
