"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Send,
  MessageSquare,
  ShieldCheck,
  Clock
} from "lucide-react";
import CloudLogo from "@/components/brand/CloudLogo";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  weeks: number;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "web", name: "High-Performance Website (Next.js)", basePrice: 3500, weeks: 4 },
  { id: "salesforce", name: "Salesforce CRM Engineering & Sync", basePrice: 4000, weeks: 4 },
  { id: "ecommerce", name: "Shopify & BigCommerce Storefront", basePrice: 4000, weeks: 4 },
  { id: "mobile", name: "Mobile App Development (iOS & Android)", basePrice: 5000, weeks: 6 },
  { id: "cross", name: "Cross-Platform App (Flutter / React Native)", basePrice: 4500, weeks: 5 },
  { id: "seo", name: "Technical SEO & Speed Optimization", basePrice: 2000, weeks: 3 },
  { id: "uiux", name: "UI/UX Design System & Tokens", basePrice: 3000, weeks: 3 },
  { id: "plugins", name: "Custom Plugins & Browser Extensions", basePrice: 2000, weeks: 3 }
];

const TIER_MULTIPLIERS: Record<string, { multiplier: number; label: string; desc: string }> = {
  mvp: { multiplier: 0.85, label: "MVP / Core", desc: "Core essentials for rapid launch" },
  growth: { multiplier: 1.25, label: "Growth / Scaled", desc: "Custom architecture with complete workflows" },
  enterprise: { multiplier: 2.1, label: "Enterprise / Bespoke", desc: "Complex integrations, high security & custom SLA" }
};

const ADDON_OPTIONS = [
  { id: "cms", name: "Headless CMS (Sanity / Contentful)", cost: 1000 },
  { id: "seo", name: "Schema & Search Engine Setup", cost: 500 },
  { id: "payments", name: "Stripe Checkout / Billing Engine", cost: 1000 },
  { id: "sla", name: "Dedicated 12-Month Support SLA", cost: 1500 }
];

const TIMELINES = [
  "Immediate (1-2 Weeks)",
  "Within 1 Month",
  "1 - 3 Months",
  "Planning / Flexible"
];

const PLATFORMS = [
  "Brand New / Greenfield Build",
  "Next.js / React Web App",
  "Salesforce Org (Existing / Migration)",
  "Shopify / Shopify Plus",
  "WordPress / Legacy PHP",
  "Other / Custom Infrastructure"
];

const ENGAGEMENT_MODELS = [
  { id: "sprint", title: "Fixed Project Sprint", subtitle: "Clear deliverables & milestone payments" },
  { id: "squad", title: "Dedicated Engineering Squad ($45/hr)", subtitle: "Continuous sprint velocity" },
  { id: "retainer", title: "Monthly Retainer (from $2,500/mo)", subtitle: "Dedicated architecture & maintenance" },
  { id: "advisory", title: "Hourly Technical Advisory", subtitle: "Architecture reviews & code audits" }
];

function InnerContactForm({
  title = "Project Inquiry & Cost Estimator",
  subtitle = "Configure your requirements step-by-step to calculate realistic budget ranges and submit your project brief."
}: {
  title?: string;
  subtitle?: string;
}) {
  const searchParams = useSearchParams();
  const paramService = searchParams.get("service") || "";
  const paramTier = searchParams.get("tier") || "";

  // Match initial service from query param
  const initialMatchedService = useMemo(() => {
    if (!paramService) return SERVICE_OPTIONS[0].name;
    const lower = paramService.toLowerCase();
    const found = SERVICE_OPTIONS.find(
      (s) =>
        s.name.toLowerCase().includes(lower) ||
        s.id.toLowerCase() === lower ||
        lower.includes(s.id)
    );
    return found ? found.name : SERVICE_OPTIONS[0].name;
  }, [paramService]);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service + Custom Input
    service: initialMatchedService,
    customServiceNotes: "",

    // Step 2: Scale, Addons, Pricing + Custom Input
    tier: paramTier && TIER_MULTIPLIERS[paramTier] ? paramTier : "growth",
    addons: ["cms", "seo"],
    timeline: "Within 1 Month",
    customBudgetNotes: "",

    // Step 3: Infrastructure + Custom Input
    url: "",
    platform: "Brand New / Greenfield Build",
    details: "",
    customComplianceNotes: "",

    // Step 4: Contact Details + Engagement Model + Custom Input
    name: "",
    email: "",
    company: "",
    phone: "",
    engagementModel: "Fixed Project Sprint",
    customCommunicationNotes: ""
  });

  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Live Price Calculations
  const selectedServiceObj = useMemo(() => {
    return SERVICE_OPTIONS.find((s) => s.name === formData.service) || SERVICE_OPTIONS[0];
  }, [formData.service]);

  const selectedTierObj = useMemo(() => {
    return TIER_MULTIPLIERS[formData.tier] || TIER_MULTIPLIERS.growth;
  }, [formData.tier]);

  const addonTotal = useMemo(() => {
    return formData.addons.reduce((sum, id) => {
      const opt = ADDON_OPTIONS.find((a) => a.id === id);
      return sum + (opt ? opt.cost : 0);
    }, 0);
  }, [formData.addons]);

  const { minEstimate, maxEstimate, estimatedWeeks } = useMemo(() => {
    const rawBase = selectedServiceObj.basePrice * selectedTierObj.multiplier;
    const rawTotal = rawBase + addonTotal;
    const min = Math.max(500, Math.round((rawTotal * 0.95) / 500) * 500);
    const max = Math.max(min + 500, Math.round((rawTotal * 1.15) / 500) * 500);
    const weeks = Math.max(
      2,
      Math.round(
        selectedServiceObj.weeks *
          (formData.tier === "mvp" ? 0.8 : formData.tier === "enterprise" ? 1.6 : 1.1)
      )
    );
    return { minEstimate: min, maxEstimate: max, estimatedWeeks: weeks };
  }, [selectedServiceObj, selectedTierObj, addonTotal, formData.tier]);

  const toggleAddon = (id: string) => {
    if (formData.addons.includes(id)) {
      setFormData({ ...formData, addons: formData.addons.filter((a) => a !== id) });
    } else {
      setFormData({ ...formData, addons: [...formData.addons, id] });
    }
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  // Pre-formatted WhatsApp text
  const whatsappHref = useMemo(() => {
    const text = `Hello Cloud Consultancy, I submitted a project inquiry:
• Service: ${formData.service}
• Scale: ${selectedTierObj.label}
• Estimate: $${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}
• Timeline: ${formData.timeline}
• Name: ${formData.name || "Client"} (${formData.company || "Company"})`;
    return `https://wa.me/919142590800?text=${encodeURIComponent(text)}`;
  }, [formData, selectedTierObj, minEstimate, maxEstimate]);

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-8 sm:p-12 text-center shadow-sm font-sans">
        <div className="w-14 h-14 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto mb-4 border border-[#BFDBFE]">
          <Check className="w-7 h-7 stroke-[2.5]" />
        </div>
        <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#2563EB] mb-2 font-semibold">
          <CloudLogo className="w-4 h-auto" size={16} />
          <span>Cloud Consultancy Engineering</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
          Inquiry & Scope Successfully Received
        </h3>
        <p className="text-[#475569] text-xs sm:text-sm mt-2 max-w-lg mx-auto leading-relaxed">
          Thank you, <strong className="text-[#0F172A]">{formData.name}</strong>. A senior software engineer will review your project requirements and estimated specifications and respond within one business day.
        </p>

        {/* Project Scope & Pricing Summary Card */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-6 mt-6 max-w-lg mx-auto text-left text-xs space-y-3 text-[#475569]">
          <div className="flex justify-between items-center pb-2 border-b border-[#E2E8F0]">
            <span className="font-mono text-[#64748B] uppercase">Calculated Estimate:</span>
            <span className="text-[#0F172A] font-bold font-serif text-sm">
              ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Primary Service:</span>
            <span className="text-[#0F172A] font-medium">{formData.service}</span>
          </div>
          {formData.customServiceNotes && (
            <div className="flex justify-between">
              <span>Custom Tech Specs:</span>
              <span className="text-[#0F172A] font-medium">{formData.customServiceNotes}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Complexity Tier:</span>
            <span className="text-[#0F172A] font-medium">{selectedTierObj.label}</span>
          </div>
          <div className="flex justify-between">
            <span>Target Timeline:</span>
            <span className="text-[#0F172A] font-medium">
              {formData.timeline} ({estimatedWeeks}–{estimatedWeeks + 2} Weeks)
            </span>
          </div>
          {formData.customBudgetNotes && (
            <div className="flex justify-between">
              <span>Budget / Launch Deadline:</span>
              <span className="text-[#0F172A] font-medium">{formData.customBudgetNotes}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Engagement Model:</span>
            <span className="text-[#0F172A] font-medium">{formData.engagementModel}</span>
          </div>
          <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between text-[11px] text-[#64748B]">
            <span>100% Client Code Ownership</span>
            <span>30-Day Post-Launch Warranty</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp (+91 91425 90800)</span>
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
            className="px-5 py-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] text-xs font-medium transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-10 shadow-sm relative font-sans">
      {/* Top Header */}
      <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
          <CloudLogo className="w-4 h-auto" size={16} />
          <span>Interactive Proposal Framework</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0F172A]">{title}</h3>
        <p className="text-xs sm:text-sm text-[#475569] mt-1">{subtitle}</p>
      </div>

      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2.5">
          <span>Step {step} of 4</span>
          <span className="text-[#2563EB] font-semibold">
            {step === 1 && "1. Service & Stack Selection"}
            {step === 2 && "2. Complexity Tier & Live Estimator"}
            {step === 3 && "3. Existing Platform & Specifications"}
            {step === 4 && "4. Engagement Model & Contact"}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                s <= step ? "bg-[#2563EB]" : "bg-[#E2E8F0]"
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* ================= STEP 1: SERVICE SELECTION + CUSTOM INPUT ================= */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-lg font-medium text-[#0F172A] mb-1">
                Select Your Primary Service Scope
              </h4>
              <p className="text-xs text-[#64748B] mb-3">
                Choose the discipline that best reflects your project’s primary focus.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SERVICE_OPTIONS.map((item) => {
                  const isSelected = formData.service === item.name;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, service: item.name })}
                      className={`p-3 rounded-[6px] text-left border text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-[#EFF6FF] border-[#2563EB] text-[#1D4ED8] shadow-xs ring-1 ring-[#2563EB]/20"
                          : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8] hover:text-[#0F172A]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{item.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#2563EB]" />}
                      </div>
                      <span className="text-[11px] text-[#64748B] block mt-1 font-mono">
                        Base starting from ${item.basePrice.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Additional Custom Field: Step 1 */}
            <div className="pt-4 border-t border-[#E2E8F0]">
              <label
                htmlFor="customServiceNotes"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Additional Field: Custom Technology / Specific Framework (Optional)
              </label>
              <input
                id="customServiceNotes"
                type="text"
                value={formData.customServiceNotes}
                onChange={(e) => setFormData({ ...formData, customServiceNotes: e.target.value })}
                placeholder="e.g. Next.js 16, Python FastAPI backend, GraphQL, Supabase, Custom Salesforce Flow..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
              <span className="text-[11px] text-[#64748B] mt-1 block">
                Need a specific architecture or proprietary tech stack? Specify your preference here.
              </span>
            </div>
          </div>
        )}

        {/* ================= STEP 2: SCALE, ADDONS & PRICING ESTIMATOR + CUSTOM INPUT ================= */}
        {step === 2 && (
          <div className="space-y-6">
            {/* Live Pricing Estimation Bar */}
            <div className="p-4 rounded-[8px] bg-[#F0FDF4] border border-[#86EFAC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#166534] font-semibold block">
                  Live Calculated Investment Range
                </span>
                <div className="text-2xl font-serif font-normal text-[#14532D]">
                  ${minEstimate.toLocaleString()} – ${maxEstimate.toLocaleString()}
                </div>
              </div>
              <div className="text-xs text-[#166534] flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-[#16a34a]" />
                <span>
                  Delivery Window: <strong>{estimatedWeeks}–{estimatedWeeks + 2} Weeks</strong>
                </span>
              </div>
            </div>

            {/* Scale & Complexity Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2.5 block">
                Project Scale & Complexity Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(TIER_MULTIPLIERS).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setFormData({ ...formData, tier: key })}
                    className={`p-3 rounded-[6px] text-left border transition-all ${
                      formData.tier === key
                        ? "bg-[#EFF6FF] border-[#2563EB] text-[#0F172A] ring-1 ring-[#2563EB]/25"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8]"
                    }`}
                  >
                    <div className="font-semibold text-xs text-[#0F172A]">{item.label}</div>
                    <div className="text-[11px] text-[#64748B] mt-1 leading-snug">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Architectural Add-ons */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2.5 block">
                Architectural Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADDON_OPTIONS.map((add) => {
                  const isSelected = formData.addons.includes(add.id);
                  return (
                    <button
                      key={add.id}
                      type="button"
                      onClick={() => toggleAddon(add.id)}
                      className={`flex items-center justify-between p-3 rounded-[6px] border text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-[#EFF6FF] border-[#2563EB] text-[#0F172A] ring-1 ring-[#2563EB]/25"
                          : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8]"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-3.5 h-3.5 rounded-[3px] flex items-center justify-center border ${
                            isSelected
                              ? "bg-[#2563EB] border-[#2563EB] text-white"
                              : "border-[#CBD5E1] bg-white"
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

            {/* Timeline Selection */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2 block">
                Target Launch Horizon
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: t })}
                    className={`p-2.5 rounded-[6px] text-center border text-xs transition-all ${
                      formData.timeline === t
                        ? "bg-[#EFF6FF] border-[#2563EB] text-[#1D4ED8] font-semibold shadow-xs"
                        : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Custom Field: Step 2 */}
            <div className="pt-4 border-t border-[#E2E8F0]">
              <label
                htmlFor="customBudgetNotes"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Additional Field: Budget Ceiling or Hard Deadline (Optional)
              </label>
              <input
                id="customBudgetNotes"
                type="text"
                value={formData.customBudgetNotes}
                onChange={(e) => setFormData({ ...formData, customBudgetNotes: e.target.value })}
                placeholder="e.g. Firm budget cap of $10,000; strict launch before product keynote on Oct 15..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
              <span className="text-[11px] text-[#64748B] mt-1 block">
                Have concrete internal budget ceilings or milestone deadlines? We customize deliverables accordingly.
              </span>
            </div>
          </div>
        )}

        {/* ================= STEP 3: INFRASTRUCTURE & REQUIREMENTS + CUSTOM INPUT ================= */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <label
                htmlFor="contactUrl"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Current Website or Reference URL (Optional)
              </label>
              <input
                id="contactUrl"
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://yourcompany.com or competitor benchmark"
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            <div>
              <label
                htmlFor="contactPlatform"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Existing Platform / Stack
              </label>
              <select
                id="contactPlatform"
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              >
                {PLATFORMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contactDetails"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Overview of Requirements & Deliverables *
              </label>
              <textarea
                id="contactDetails"
                required
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe key features, current bottlenecks, desired third-party integrations, or user journeys needed..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
              />
            </div>

            {/* Additional Custom Field: Step 3 */}
            <div className="pt-3 border-t border-[#E2E8F0]">
              <label
                htmlFor="customComplianceNotes"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Additional Field: Compliance, Security, or Integration Specs (Optional)
              </label>
              <input
                id="customComplianceNotes"
                type="text"
                value={formData.customComplianceNotes}
                onChange={(e) => setFormData({ ...formData, customComplianceNotes: e.target.value })}
                placeholder="e.g. SOC2, HIPAA, custom Salesforce REST webhooks, SAP/ERP inventory sync..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
              <span className="text-[11px] text-[#64748B] mt-1 block">
                Any specific enterprise compliance protocols, OAuth flows, or ERP APIs to integrate?
              </span>
            </div>
          </div>
        )}

        {/* ================= STEP 4: ENGAGEMENT MODEL & CONTACT DETAILS + CUSTOM INPUT ================= */}
        {step === 4 && (
          <div className="space-y-6">
            {/* Preferred Engagement Model */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2 block">
                Preferred Engagement Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ENGAGEMENT_MODELS.map((m) => {
                  const isSelected = formData.engagementModel === m.title;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, engagementModel: m.title })}
                      className={`p-3 rounded-[6px] text-left border text-xs transition-all ${
                        isSelected
                          ? "bg-[#EFF6FF] border-[#2563EB] text-[#0F172A] ring-1 ring-[#2563EB]/25"
                          : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8]"
                      }`}
                    >
                      <div className="font-semibold text-[#0F172A]">{m.title}</div>
                      <div className="text-[11px] text-[#64748B] mt-0.5">{m.subtitle}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Inputs */}
            <div>
              <h4 className="font-serif text-base font-medium text-[#0F172A] mb-3">
                Where should we send your architectural assessment and proposal?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contactName" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">
                    Your Name *
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">
                    Work Email *
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label htmlFor="contactCompany" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">
                    Company / Organization
                  </label>
                  <input
                    id="contactCompany"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Labs Inc."
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>

                <div>
                  <label htmlFor="contactPhone" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    id="contactPhone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                </div>
              </div>
            </div>

            {/* Additional Custom Field: Step 4 */}
            <div className="pt-3 border-t border-[#E2E8F0]">
              <label
                htmlFor="customCommunicationNotes"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Additional Field: Preferred Channel & Time Zone (Optional)
              </label>
              <input
                id="customCommunicationNotes"
                type="text"
                value={formData.customCommunicationNotes}
                onChange={(e) =>
                  setFormData({ ...formData, customCommunicationNotes: e.target.value })
                }
                placeholder="e.g. Slack Connect channel, Google Meet, WhatsApp; US Eastern (EST) timezone..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
              <span className="text-[11px] text-[#64748B] mt-1 block">
                We coordinate working hours to ensure daily synchronized standups with your team.
              </span>
            </div>
          </div>
        )}

        {/* Spam Honeypot */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="formHoneypot">Leave empty</label>
          <input
            id="formHoneypot"
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2.5 rounded-[6px] border border-[#CBD5E1] text-xs font-medium text-[#475569] hover:text-[#0F172A] hover:bg-[#F8FAFC] flex items-center space-x-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div className="text-[11px] text-[#64748B] flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Confidential under NDA</span>
            </div>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm hover:shadow-md"
            >
              <span>Continue to Step {step + 1}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 text-white text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{isSubmitting ? "Submitting Brief..." : "Submit Project Brief & Request Proposal"}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default function ContactForm({
  title,
  subtitle
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-8 text-center text-xs text-[#64748B]">
          Loading interactive project cost estimator...
        </div>
      }
    >
      <InnerContactForm title={title} subtitle={subtitle} />
    </Suspense>
  );
}
