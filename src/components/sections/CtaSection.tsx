import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  badgeText?: string;
}

export default function CtaSection({
  title = "Have a project in mind? Send us the details and we’ll reply within a day.",
  description = "We engineer scalable cloud architecture, custom web platforms, and Salesforce CRM systems for growing companies and global enterprises.",
  primaryCtaText = "Tell us about your project",
  primaryCtaHref = "/contact/",
  badgeText = "Availability: New projects starting this month"
}: CtaSectionProps) {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-sm">
          <div className="inline-block text-xs font-mono uppercase tracking-wider text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-[4px] font-semibold mb-4">
            {badgeText}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#0F172A] tracking-tight max-w-2xl mx-auto leading-snug">
            {title}
          </h2>

          <p className="text-[#475569] text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed font-sans">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href={primaryCtaHref}
              className="w-full sm:w-auto px-6 py-3.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>{primaryCtaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pricing/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-sm border border-[#CBD5E1] hover:border-[#94A3B8] transition-all"
            >
              See pricing & estimator
            </Link>
          </div>

          {/* Genuine trust proof points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-[#E2E8F0] text-xs text-[#475569] max-w-2xl mx-auto font-sans">
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Full source code ownership</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Fixed-cost proposals</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
              <span>Direct engineer communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
