"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Code2, 
  ShoppingBag, 
  TrendingUp, 
  Smartphone, 
  Database, 
  Workflow, 
  Palette, 
  Puzzle,
  LucideIcon
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "website-development": Code2,
  "shopify-bigcommerce-development": ShoppingBag,
  "seo": TrendingUp,
  "ios-app-development": Smartphone,
  "android-app-development": Smartphone,
  "cross-platform-app-development": Smartphone,
  "crm-integration": Database,
  "salesforce-support": Workflow,
  "ui-ux-design": Palette,
  "plugins-extensions-development": Puzzle
};

function ServicePricingExplorerInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  // Derive matched service from searchParams if present
  const matchedServiceFromParam = serviceParam
    ? SERVICES.find(
        (s) =>
          s.slug === serviceParam ||
          s.id === serviceParam ||
          s.title.toLowerCase().includes(serviceParam.toLowerCase())
      )?.slug
    : null;

  // Allow user to manually switch tabs, falling back to matched param or default
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const activeSlug = selectedSlug ?? matchedServiceFromParam ?? "website-development";
  const activeService = SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];
  const Icon = SERVICE_ICONS[activeService.slug] || Code2;

  return (
    <div className="space-y-8 font-sans">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
          Service-Specific Pricing & Scope
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A] tracking-tight">
          Explore Scope & Investment by Discipline
        </h2>
        <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
          Select any service below to review exact deliverables, starting pricing, and milestone inclusions. Fixed-cost statements of work with zero surprise bills.
        </p>
      </div>

      {/* Service Selector Tabs / Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
        {SERVICES.map((s) => {
          const isSelected = s.slug === activeService.slug;
          return (
            <button
              key={s.slug}
              type="button"
              onClick={() => setSelectedSlug(s.slug)}
              className={`px-3.5 py-2 rounded-[6px] text-xs font-medium whitespace-nowrap transition-all shrink-0 flex items-center space-x-1.5 ${
                isSelected
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "bg-white text-[#475569] hover:text-[#0F172A] border border-[#CBD5E1] hover:border-[#94A3B8]"
              }`}
            >
              <span>{s.shortTitle}</span>
            </button>
          );
        })}
      </div>

      {/* Explicit Selected Service Pricing Card */}
      <div
        id="service-pricing-card"
        className="bg-white border-2 border-[#2563EB] rounded-[10px] overflow-hidden shadow-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
          {/* Left Column: Technical Scope & Deliverables */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
                  {activeService.category} Discipline
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0F172A]">
                  {activeService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {activeService.tagline}
            </p>

            {/* In-Depth Deliverables Checklist */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold">
                What We Build & Deliver
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.deliverables.map((del, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] text-xs"
                  >
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#0F172A] block">{del.title}</span>
                        <span className="text-[11px] text-[#475569] leading-relaxed line-clamp-2 mt-0.5">
                          {del.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Tech Stack */}
            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase text-[#64748B] block mb-2">
                Supported Technologies & Frameworks
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeService.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-[4px] bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] text-[11px] font-mono"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Investment Breakdown & CTA */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F8FAFC] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                  Transparent Fixed Investment
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
                  Milestone-Based
                </span>
              </div>

              {/* Explicit Pricing Point */}
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl sm:text-4xl font-serif text-[#0F172A] font-normal">
                  {activeService.pricingModel.startingAt}
                </span>
                <span className="text-xs font-mono text-[#64748B]">
                  {activeService.pricingModel.period || "starting base"}
                </span>
              </div>

              <div className="flex items-center space-x-2 mt-2 text-xs text-[#475569]">
                <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Typical Delivery: <strong>2 – 5 Weeks</strong> based on scope</span>
              </div>

              {/* Inclusions List */}
              <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold block mb-2.5">
                  Package Inclusions
                </span>
                <ul className="space-y-2 text-xs text-[#475569]">
                  {activeService.pricingModel.includes.map((inc, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                  <li className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Complimentary 30-day post-launch warranty & bug fixes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>100% intellectual property & code ownership transferred to you</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-[#E2E8F0]">
              <Link
                href={`/contact?service=${encodeURIComponent(activeService.title)}`}
                className="w-full py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs flex items-center justify-center space-x-2 transition-all shadow-sm"
              >
                <span>Request Free Quote for {activeService.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#custom-estimator"
                className="w-full py-2.5 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1] text-xs font-medium flex items-center justify-center transition-colors"
              >
                Configure Custom Multi-Service Scope Below ↓
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicePricingExplorer() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center bg-white border border-[#E2E8F0] rounded-[8px] text-xs text-[#64748B]">
          Loading service pricing breakdown...
        </div>
      }
    >
      <ServicePricingExplorerInner />
    </Suspense>
  );
}
