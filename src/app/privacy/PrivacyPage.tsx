import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy",
  description: `Learn how ${SITE_CONFIG.name} collects, protects, and handles your data in accordance with GDPR, CCPA, and global security standards.`,
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  const breadcrumbs = [{ label: "Privacy & Cookie Policy" }];

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="my-10 border-b border-white/10 pb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Compliance & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Privacy & Cookie Policy
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Last Updated: January 1, 2026 · Effective Immediately
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* 1. Introduction */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">01.</span>
              <span>Our Commitment to Privacy</span>
            </h2>
            <p>
              At <strong>{SITE_CONFIG.legalName}</strong> (&ldquo;Online Digital Solution&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take data privacy and intellectual confidentiality seriously. This Privacy and Cookie Policy describes how we collect, store, process, and safeguard information when you visit our website (<strong>{SITE_CONFIG.url}</strong>), engage our engineering services, or submit inquiries via our project estimator and contact forms.
            </p>
            <p>
              We operate under the core principle of minimal data collection: we collect only what is strictly required to provide technical feasibility consultations, execute engineering statements of work, and maintain optimal system performance.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">02.</span>
              <span>Information We Collect</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold mb-2">
                  <FileText className="w-4 h-4" />
                  <h4>Information You Provide Voluntarily</h4>
                </div>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• Name, corporate work email address, and phone number</li>
                  <li>• Company name, existing website URL, and project specifications</li>
                  <li>• Estimated project budget brackets and target launch milestones</li>
                  <li>• Communication records when you email or chat with our architects</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/70 border border-white/10">
                <div className="flex items-center space-x-2 text-indigo-400 font-bold mb-2">
                  <Eye className="w-4 h-4" />
                  <h4>Technical & Diagnostic Data</h4>
                </div>
                <ul className="text-xs space-y-2 text-slate-400">
                  <li>• IP address, browser type, device category, and operating system</li>
                  <li>• Anonymized Core Web Vitals telemetry (LCP, CLS, INP)</li>
                  <li>• Page interaction paths and referral sources</li>
                  <li>• URLs submitted to our free technical SEO and speed auditor tool</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Cookie Policy */}
          <section id="cookies" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">03.</span>
              <span>Cookie Policy & Tracking Technologies</span>
            </h2>
            <p>
              Cookies are small data files placed on your device. We prioritize privacy-first tracking and do not sell your behavioral information to ad networks.
            </p>
            <div className="space-y-3 mt-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                <span className="font-bold text-white block mb-1">Strictly Necessary Cookies:</span>
                <p className="text-slate-400">
                  Required for core functionality, such as remembering your cookie consent preferences, CSRF mitigation, and edge session routing. These cannot be disabled.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5">
                <span className="font-bold text-white block mb-1">Performance & Telemetry Cookies:</span>
                <p className="text-slate-400">
                  Used solely to collect aggregate, anonymized metrics on page load times and network latency to guarantee our 99+ Lighthouse performance threshold.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Mutual NDA & Data Security */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">04.</span>
              <span>Default NDA & Security Standards</span>
            </h2>
            <p>
              All technical specifications, codebase access tokens, architecture diagrams, and commercial models shared with {SITE_CONFIG.name} are treated as strictly confidential under default mutual non-disclosure terms.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                <Lock className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
                <span className="font-bold text-white text-xs block">End-to-End Encryption</span>
                <span className="text-[11px] text-slate-400">TLS 1.3 in transit & AES-256 at rest</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <span className="font-bold text-white text-xs block">Zero Data Selling</span>
                <span className="text-[11px] text-slate-400">We never monetize user data</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-white/5 text-center">
                <ShieldCheck className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                <span className="font-bold text-white text-xs block">SOC 2 Alignment</span>
                <span className="text-[11px] text-slate-400">Enterprise security controls</span>
              </div>
            </div>
          </section>

          {/* 5. User Rights (GDPR & CCPA) */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">05.</span>
              <span>Your Rights Under GDPR & CCPA</span>
            </h2>
            <p>
              Depending on your jurisdiction (such as the European Economic Area, United Kingdom, or California), you retain statutory rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 text-sm">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> Request deletion of your personal data when no longer needed for contractual fulfillment.</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format.</li>
              <li><strong>Right to Non-Discrimination:</strong> We do not discriminate against users exercising CCPA rights.</li>
            </ul>
          </section>

          {/* 6. Contact DPO */}
          <section className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>Contact Our Data Protection Officer</span>
            </h3>
            <p className="text-sm text-slate-400">
              To exercise any of your data rights or request immediate removal of submitted project data, reach out directly to our privacy desk:
            </p>
            <div className="text-sm font-mono text-cyan-300">
              Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="underline hover:text-white">{SITE_CONFIG.contact.email}</a>
            </div>
            <div className="text-xs text-slate-400">
              Address: {SITE_CONFIG.contact.address}, {SITE_CONFIG.contact.city}, {SITE_CONFIG.contact.state} {SITE_CONFIG.contact.zip}, {SITE_CONFIG.contact.country}
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Submit Formal Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
