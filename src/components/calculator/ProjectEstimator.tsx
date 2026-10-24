"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Check, 
  ArrowRight, 
  Clock 
} from "lucide-react";

export default function ProjectEstimator() {
  const [service, setService] = useState<string>("web");
  const [tier, setTier] = useState<string>("growth");
  const [addons, setAddons] = useState<string[]>(["cms", "seo"]);

  const serviceOptions = [
    { id: "web", name: "Website Development", basePrice: 3500, weeks: 4 },
    { id: "ecommerce", name: "Shopify / BigCommerce Store", basePrice: 4000, weeks: 4 },
    { id: "plugins", name: "Plugins & Extensions", basePrice: 2000, weeks: 3 },
    { id: "mobile", name: "Mobile App (iOS/Android)", basePrice: 5000, weeks: 6 },
    { id: "cross", name: "Cross-Platform (Flutter)", basePrice: 4500, weeks: 5 },
    { id: "seo", name: "Technical SEO & Speed", basePrice: 2000, weeks: 3 },
    { id: "crm", name: "CRM / Salesforce Sync", basePrice: 2500, weeks: 4 },
    { id: "uiux", name: "Product UI/UX & Design", basePrice: 3000, weeks: 3 }
  ];

  const tierMultipliers: Record<string, { multiplier: number; label: string; desc: string }> = {
    mvp: { multiplier: 0.85, label: "MVP / Core", desc: "Core essentials for rapid launch" },
    growth: { multiplier: 1.25, label: "Growth / Scaling", desc: "Custom architecture with complete workflows" },
    enterprise: { multiplier: 2.1, label: "Enterprise / Bespoke", desc: "Complex integrations, high security & custom SLA" }
  };

  const addonOptions = [
    { id: "cms", name: "Headless CMS (Sanity / Contentful)", cost: 1000 },
    { id: "seo", name: "Schema & Search Engine Setup", cost: 500 },
    { id: "payments", name: "Stripe Checkout / Billing Engine", cost: 1000 },
    { id: "sla", name: "Dedicated 12-Month Support SLA", cost: 1500 }
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((a) => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const selectedService = serviceOptions.find((s) => s.id === service) || serviceOptions[0];
  const selectedTier = tierMultipliers[tier] || tierMultipliers.growth;
  
  const addonTotal = addons.reduce((sum, id) => {
    const opt = addonOptions.find((a) => a.id === id);
    return sum + (opt ? opt.cost : 0);
  }, 0);

  const rawBase = selectedService.basePrice * selectedTier.multiplier;
  const rawTotal = rawBase + addonTotal;
  // Strictly round to nearest multiple of 500
  const minEstimate = Math.max(500, Math.round((rawTotal * 0.95) / 500) * 500);
  const maxEstimate = Math.max(minEstimate + 500, Math.round((rawTotal * 1.15) / 500) * 500);
  const estimatedWeeks = Math.max(3, Math.round(selectedService.weeks * (tier === "mvp" ? 0.8 : tier === "enterprise" ? 1.6 : 1.1)));

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[12px] p-6 sm:p-10 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Selectors */}
        <div className="flex-1 space-y-8 font-sans">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Budget & Timeline Calculator
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Project Cost Estimator
            </h3>
            <p className="text-[#475569] text-xs sm:text-sm mt-1">
              Select your requirements below to see realistic budget ranges and delivery milestones.
            </p>
          </div>

          {/* 1. Service Selection */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-3 block">
              1. Service Scope
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {serviceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setService(opt.id)}
                  type="button"
                  aria-pressed={service === opt.id}
                  className={`p-3 rounded-[6px] text-left border text-xs transition-all ${
                    service === opt.id
                      ? "bg-[#EFF6FF] border-[#2563EB] text-[#0F172A] ring-1 ring-[#2563EB]/25"
                      : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8] hover:text-[#0F172A]"
                  }`}
                >
                  <div className="font-semibold truncate">{opt.name}</div>
                  <div className="text-[11px] text-[#64748B] mt-1 font-mono">From ${opt.basePrice.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Project Tier */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-3 block">
              2. Scale & Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {Object.entries(tierMultipliers).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setTier(key)}
                  type="button"
                  aria-pressed={tier === key}
                  className={`p-3.5 rounded-[6px] text-left border transition-all ${
                    tier === key
                      ? "bg-[#EFF6FF] border-[#2563EB] text-[#0F172A] ring-1 ring-[#2563EB]/25"
                      : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8] hover:text-[#0F172A]"
                  }`}
                >
                  <div className="font-semibold text-xs text-[#0F172A]">{item.label}</div>
                  <div className="text-[11px] text-[#64748B] mt-1 leading-snug">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Add-Ons */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-3 block">
              3. Architectural Options & Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addonOptions.map((add) => {
                const isSelected = addons.includes(add.id);
                return (
                  <button
                    key={add.id}
                    onClick={() => toggleAddon(add.id)}
                    type="button"
                    aria-pressed={isSelected}
                    className={`flex items-center justify-between p-3 rounded-[6px] border text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#EFF6FF] border-[#2563EB] text-[#0F172A] ring-1 ring-[#2563EB]/25"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8] hover:text-[#0F172A]"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 text-left">
                      <div
                        className={`w-3.5 h-3.5 rounded-[3px] flex items-center justify-center border ${
                          isSelected ? "bg-[#2563EB] border-[#2563EB] text-white" : "border-[#CBD5E1] bg-white"
                        }`}
                      >
                        {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <span>{add.name}</span>
                    </div>
                    <span className="text-[#64748B] font-mono text-[11px]">+${add.cost}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Estimate Card */}
        <div className="lg:w-80 shrink-0 font-sans">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 flex flex-col justify-between h-full shadow-2xs">
            <div>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#64748B] pb-3 border-b border-[#E2E8F0]">
                <span>Estimate Range</span>
                <span className="text-[#2563EB] font-semibold">Calculated</span>
              </div>

              <div className="my-6">
                <div className="text-xs text-[#64748B] mb-1 font-mono uppercase">Estimated Investment</div>
                <div className="text-2xl sm:text-3xl font-serif text-[#0F172A] tracking-tight">
                  ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
                </div>
                <div className="text-xs text-[#475569] mt-2 flex items-center space-x-1.5 font-sans">
                  <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>
                    Target Timeline: <strong className="font-semibold text-[#0F172A]">{estimatedWeeks}–{estimatedWeeks + 2} Weeks</strong>
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 py-4 border-t border-b border-[#E2E8F0] text-xs text-[#475569]">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>100% source code ownership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>Fixed deliverables & milestone billing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>Full structured SEO markup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>30 days post-launch warranty support</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <Link
                href={`/contact?service=${service}&tier=${tier}&budget=${minEstimate}`}
                className="w-full py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs text-center flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Discuss this estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <p className="text-[11px] text-center text-[#64748B]">
                Non-binding estimate. We confirm final statements of work within one business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
