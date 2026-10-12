import { Metadata } from "next";
import Link from "next/link";
import { Scale, CheckCircle2, ShieldCheck, ArrowRight, Code, FileCheck } from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Terms of Service & MSA",
  description: `Read the Terms of Service and Master Services Agreement for ${SITE_CONFIG.name}. Full IP ownership, guaranteed SLAs, transparent sprint deliverables.`,
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  const breadcrumbs = [{ label: "Terms of Service" }];

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="my-10 border-b border-white/10 pb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            <span>Master Services Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Last Updated: January 1, 2026 · Governing all engineering statements of work & contracts
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* 1. Acceptance */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">01.</span>
              <span>Acceptance of Terms</span>
            </h2>
            <p>
              By accessing the website at <strong>{SITE_CONFIG.url}</strong>, submitting inquiries through our interactive tools, or entering into a Statement of Work (&ldquo;SOW&rdquo;) with <strong>{SITE_CONFIG.legalName}</strong>, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you possess the authority to bind such entity.
            </p>
          </section>

          {/* 2. 100% Client IP Ownership */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">02.</span>
              <span>100% Intellectual Property Ownership</span>
            </h2>
            <div className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold mb-2">
                <Code className="w-5 h-5" />
                <h3>Zero Vendor Lock-In Guarantee</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Upon final invoice settlement for deliverables defined in any executed Statement of Work, <strong>the Client retains 100% exclusive ownership of all bespoke source code, Figma UI design assets, database schemas, and documentation created specifically for the project.</strong> {SITE_CONFIG.name} retains no proprietary claim or runtime licensing restrictions over your custom deliverables.
              </p>
            </div>
          </section>

          {/* 3. Engineering Sprints & Statements of Work */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">03.</span>
              <span>Scope of Work & Milestone Delivery</span>
            </h2>
            <p>
              All engineering and growth services are executed under mutually agreed Statements of Work detailing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400 text-sm">
              <li>Architecture specifications, technology stack versions (e.g. Next.js 16, Swift 6, Kotlin), and repository access.</li>
              <li>Defined sprint milestone deliverables and sprint acceptance criteria.</li>
              <li>Estimated timelines, review cycles, and target production deployment dates.</li>
              <li>Performance benchmarks, including Lighthouse Core Web Vitals targets.</li>
            </ul>
          </section>

          {/* 4. Core Web Vitals & Quality Guarantee */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">04.</span>
              <span>Performance Benchmark Guarantees</span>
            </h2>
            <p>
              We stand firmly behind our code quality:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold mb-2 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <h4>Lighthouse 95+ Guarantee</h4>
                </div>
                <p className="text-xs text-slate-400">
                  All bespoke web development projects must pass Google Core Web Vitals thresholds (LCP &lt; 2.5s, CLS &lt; 0.1, INP &lt; 200ms) on standard baseline environments before final sign-off.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-white/10">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold mb-2 text-sm">
                  <FileCheck className="w-4 h-4" />
                  <h4>30-Day Post-Launch Warranty</h4>
                </div>
                <p className="text-xs text-slate-400">
                  Every fixed-scope delivery includes 30 days of warranty coverage during which any reproducible bugs or regressions attributable to our code are resolved at zero extra cost.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Payment Terms & Invoicing */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">05.</span>
              <span>Payment Terms & Retainers</span>
            </h2>
            <p>
              Fixed-price sprint projects are typically invoiced on a structured milestone basis (e.g., 40% initial deposit, 30% milestone review, 30% production launch). Dedicated engineering squad retainers are billed monthly in advance with a standard 14-day cancellation notice. Payments are accepted via wire transfer, ACH, or credit card.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center space-x-2">
              <span className="text-cyan-400 font-mono text-base">06.</span>
              <span>Limitation of Liability & Indemnity</span>
            </h2>
            <p className="text-slate-400 text-sm">
              To the maximum extent permitted by applicable law, in no event shall {SITE_CONFIG.legalName} be liable for any indirect, incidental, special, consequential, or punitive damages (including loss of profits, data, or business interruption) arising out of or in connection with our services, even if advised of the possibility of such damages. Our total liability for any claim shall not exceed the aggregate fees paid by the client under the specific Statement of Work giving rise to the claim.
            </p>
          </section>

          {/* 7. Governing Law */}
          <section className="p-8 rounded-3xl bg-slate-900/90 border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Governing Law & Legal Inquiries</span>
            </h3>
            <p className="text-sm text-slate-400">
              These Terms and any non-contractual obligations arising out of them shall be governed by standard international commercial law principles. All client intellectual property rights remain fully enforceable globally.
            </p>
            <div className="text-xs text-slate-400">
              Online Digital Solution · Salt Lake Sector V, Kolkata, West Bengal, India
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Have Questions? Contact Legal & Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
