import Link from "next/link";
import { ArrowRight, Home, Compass, Layers, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <div className="max-w-xl mx-auto text-center bg-white border border-[#E2E8F0] rounded-[8px] p-8 sm:p-12 shadow-sm">
        <div className="w-12 h-12 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto mb-4 border border-[#BFDBFE]">
          <FileQuestion className="w-6 h-6" />
        </div>

        <span className="text-xs font-mono uppercase text-[#2563EB] font-semibold tracking-wider block mb-2">
          HTTP 404 · Page Not Found
        </span>

        <h1 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A] mb-3">
          Page Not Found
        </h1>

        <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
          The requested URL does not exist or may have moved. You can navigate back to one of our core pages below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6 text-xs">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 p-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:text-[#2563EB] hover:border-[#BFDBFE] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-center space-x-2 p-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:text-[#2563EB] hover:border-[#BFDBFE] transition-colors"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Browse Services</span>
          </Link>

          <Link
            href="/pricing"
            className="flex items-center justify-center space-x-2 p-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:text-[#2563EB] hover:border-[#BFDBFE] transition-colors"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Cost Estimator</span>
          </Link>

          <Link
            href="/blog"
            className="flex items-center justify-center space-x-2 p-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] hover:text-[#2563EB] hover:border-[#BFDBFE] transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5" />
            <span>Engineering Notes</span>
          </Link>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center space-x-1.5 text-xs text-[#2563EB] hover:underline font-semibold"
        >
          <span>Need help finding something? Send us a message</span>
          <ArrowRight className="w-3 h-3 ml-0.5" />
        </Link>
      </div>
    </div>
  );
}
