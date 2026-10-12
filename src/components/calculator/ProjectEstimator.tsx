"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
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
    { id: "plugins", name: "Plugins & Browser Extensions", basePrice: 2000, weeks: 3 },
    { id: "mobile", name: "Mobile App (iOS/Android)", basePrice: 5000, weeks: 6 },
    { id: "cross", name: "Cross-Platform (Flutter)", basePrice: 4500, weeks: 5 },
    { id: "seo", name: "Technical SEO & Growth", basePrice: 2000, weeks: 3 },
    { id: "crm", name: "CRM / Salesforce Sync", basePrice: 2500, weeks: 4 },
    { id: "uiux", name: "Product UI/UX & Design", basePrice: 3000, weeks: 3 }
  ];

  const tierMultipliers: Record<string, { multiplier: number; label: string; desc: string }> = {
    mvp: { multiplier: 0.85, label: "MVP / Startup", desc: "Core essentials for rapid go-to-market testing" },
    growth: { multiplier: 1.25, label: "Growth / Scaling", desc: "Robust custom architecture with high-conversion workflows" },
    enterprise: { multiplier: 2.1, label: "Enterprise Custom", desc: "Multi-tenant, high-security, custom middleware & dedicated SLA" }
  };

  const addonOptions = [
    { id: "cms", name: "Headless CMS (Sanity / Contentful)", cost: 1000 },
    { id: "seo", name: "Comprehensive Schema & SEO Audit", cost: 500 },
    { id: "payments", name: "Stripe In-App / Billing Engine", cost: 1000 },
    { id: "sla", name: "24/7 Dedicated Support SLA (Year 1)", cost: 1500 }
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
    <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column: Selectors */}
        <div className="flex-1 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Real-Time Estimation Engine</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Interactive Project Cost Estimator
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Select your specifications to calculate instant budget brackets and delivery milestones.
            </p>
          </div>

          {/* 1. Service Selection */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 block">
              1. Primary Service Scope
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {serviceOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setService(opt.id)}
                  type="button"
                  aria-pressed={service === opt.id}
                  className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                    service === opt.id
                      ? "bg-cyan-950/70 border-cyan-400 text-white shadow-lg shadow-cyan-950/50"
                      : "bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="font-semibold truncate">{opt.name}</div>
                  <div className="text-[11px] text-slate-400 mt-1">From ${opt.basePrice.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Project Tier */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 block">
              2. Scale & Complexity
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.entries(tierMultipliers).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setTier(key)}
                  type="button"
                  aria-pressed={tier === key}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    tier === key
                      ? "bg-indigo-950/70 border-indigo-400 text-white shadow-lg shadow-indigo-950/50"
                      : "bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="font-bold text-sm">{item.label}</div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Add-Ons */}
          <div>
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 block">
              3. Architectural Upgrades & Add-ons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {addonOptions.map((add) => {
                const isSelected = addons.includes(add.id);
                return (
                  <button
                    key={add.id}
                    onClick={() => toggleAddon(add.id)}
                    type="button"
                    aria-pressed={isSelected}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-slate-800/90 border-cyan-400/50 text-white"
                        : "bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 text-left">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? "bg-cyan-500 border-cyan-400 text-slate-950" : "border-slate-600"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{add.name}</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">+${add.cost}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Estimate Card */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-white/15 rounded-2xl p-6 shadow-2xl sticky top-28 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold pb-3 border-b border-white/10">
                <span>Calculated Range</span>
                <span className="text-cyan-400">Live Estimate</span>
              </div>

              <div className="my-6">
                <div className="text-xs text-slate-400 mb-1">Estimated Investment</div>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 tracking-tight">
                  ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
                </div>
                <div className="text-xs text-slate-400 mt-2 flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Target Timeline: <strong>{estimatedWeeks}–{estimatedWeeks + 2} Weeks</strong></span>
                </div>
              </div>

              <div className="space-y-3 py-4 border-t border-b border-white/10 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full source code ownership</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Lighthouse 95+ Core Web Vitals guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full structured SEO JSON-LD schema</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>30–60 days post-launch warranty support</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <Link
                href={`/contact?service=${service}&tier=${tier}&budget=${minEstimate}`}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm text-center shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all"
              >
                <span>Lock in Estimate & Book Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-[11px] text-center text-slate-400">
                Non-binding proposal · Final quote confirmed within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
