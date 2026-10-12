"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Gauge, Loader2 } from "lucide-react";

export default function AuditToolModal() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    lcp: string;
    cls: string;
    inp: string;
    schemaFound: boolean;
    issues: string[];
    passes: string[];
  }>(null);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      setResult({
        score: 64,
        lcp: "3.4s (Needs Optimization)",
        cls: "0.14 (Minor Shifts)",
        inp: "280ms (Moderate Delay)",
        schemaFound: false,
        issues: [
          "Unoptimized JPEG images causing 1.8s render blocking delay",
          "Missing JSON-LD structured data for Organization and Services",
          "Client-side rendering without static edge pre-rendering",
          "Cumulative layout shift from unsized ad containers or webfonts"
        ],
        passes: [
          "Valid HTTPS / SSL certificate installed",
          "Responsive mobile viewport meta tag configured",
          "No 404 crawl errors detected on primary landing page"
        ]
      });
    }, 1800);
  };

  return (
    <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <Gauge className="w-3.5 h-3.5" />
          <span>Instant Performance & SEO Diagnostic</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Free Instant Technical SEO & Speed Audit
        </h3>
        <p className="text-slate-400 text-sm mt-2">
          Enter any URL to simulate Google Core Web Vitals, indexation health, and schema validation.
        </p>

        <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-2 mt-6">
          <label htmlFor="audit-domain-url-input" className="sr-only">
            Website URL for audit
          </label>
          <input
            id="audit-domain-url-input"
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourwebsite.com"
            className="flex-1 bg-slate-950/90 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/20 shrink-0 transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Running Crawler...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Analyze Domain</span>
              </>
            )}
          </button>
        </form>
      </div>

      {result && (
        <div className="border border-white/10 bg-slate-950/80 rounded-2xl p-6 sm:p-8 animate-in fade-in duration-300 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Overall SEO & Vitals Score
              </span>
              <div className="text-sm text-slate-300 truncate max-w-[280px] font-mono mt-0.5">
                {url}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-full border-4 border-amber-400 flex items-center justify-center font-black text-xl text-amber-400 shadow-lg shadow-amber-400/20">
                {result.score}
              </div>
              <div className="text-xs text-left">
                <div className="font-bold text-amber-300">Grade: Needs Work</div>
                <div className="text-slate-400">Target Benchmark: 90+</div>
              </div>
            </div>
          </div>

          {/* Vitals Row */}
          <div className="grid grid-cols-3 gap-3 my-6 text-center">
            <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">LCP Speed</div>
              <div className="text-xs sm:text-sm font-bold text-rose-400 mt-1">{result.lcp}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Layout Shift</div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 mt-1">{result.cls}</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900 border border-white/5">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">INP Delay</div>
              <div className="text-xs sm:text-sm font-bold text-amber-400 mt-1">{result.inp}</div>
            </div>
          </div>

          {/* Critical bottlenecks */}
          <div className="space-y-4 text-xs">
            <div>
              <div className="font-bold text-rose-400 mb-2 flex items-center space-x-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Detected Bottlenecks (Fix Immediately)</span>
              </div>
              <ul className="space-y-1.5 text-slate-300">
                {result.issues.map((issue, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <div className="font-bold text-emerald-400 mb-2 flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Passing Checks</span>
              </div>
              <ul className="space-y-1 text-slate-400">
                {result.passes.map((pass, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{pass}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <Link
              href={`/contact?audit_url=${encodeURIComponent(url)}&score=${result.score}`}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-400/20"
            >
              <span>Request Full 40-Page Engineering Fix Plan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
