import Link from "next/link";
import { ArrowRight, Home, Compass, Layers, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-xl mx-auto text-center bg-slate-900/60 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
        <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-widest block mb-2">
          HTTP 404 · Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
          Lost in Digital Space
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed mb-8">
          The requested URL does not exist or may have been relocated during our system migration. Explore our core destinations below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs font-semibold">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-950 border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-950 border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>Browse Services Hub</span>
          </Link>

          <Link
            href="/pricing"
            className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-950 border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Project Cost Estimator</span>
          </Link>

          <Link
            href="/blog"
            className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-slate-950 border border-white/10 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
          >
            <ArrowRight className="w-4 h-4" />
            <span>Engineering Insights</span>
          </Link>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center space-x-2 text-xs text-cyan-400 hover:text-cyan-300 font-bold"
        >
          <span>Need help finding something? Contact our support team</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
