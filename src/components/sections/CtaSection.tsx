import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  badgeText?: string;
}

export default function CtaSection({
  title = "Ready to Build Your Unfair Digital Advantage?",
  description = "Partner with senior engineers and SEO architects. We deliver production-ready code with guaranteed Core Web Vitals, transparent roadmaps, and full IP ownership.",
  primaryCtaText = "Get a Tailored Quote",
  primaryCtaHref = "/contact",
  badgeText = "Next Availability: Immediate Kickoff"
}: CtaSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-white/15 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Glowing accent border */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{badgeText}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            {title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href={primaryCtaHref}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pricing"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 font-semibold text-base border border-white/10 hover:border-white/20 transition-all"
            >
              Instant Cost Calculator
            </Link>
          </div>

          {/* Trust proof points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 mt-10 border-t border-white/10 text-xs text-slate-300 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Code & IP Ownership</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Lighthouse 95+ Guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>NDA Signed Before Kickoff</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
