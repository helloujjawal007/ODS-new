"use client";

import { useState, useMemo, Suspense } from "react";
import { useRouter } from "next/navigation";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Send,
  Clock,
  Loader2,
  AlertCircle,
  Cpu,
  Wallet
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  desc: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "web", name: "High-Performance Website (Next.js)", desc: "Custom App Router architecture, headless CMS & sub-second page loads" },
  { id: "salesforce", name: "Salesforce CRM Engineering & Sync", desc: "Apex, LWC, CDC streaming, and governor-limit-proof API integrations" },
  { id: "ecommerce", name: "Shopify & BigCommerce Storefront", desc: "Modern OS 2.0 Liquid themes, custom Hydrogen & Checkout Extensibility" },
  { id: "mobile", name: "Mobile App Development (iOS & Android)", desc: "Native Swift/Kotlin and cross-platform apps with robust offline sync" },
  { id: "cross", name: "Cross-Platform App (Flutter / React Native)", desc: "Shared single-codebase engineering with native 60fps performance" },
  { id: "seo", name: "Technical SEO & Speed Optimization", desc: "Structured data, Core Web Vitals remediation, and crawl budget engineering" },
  { id: "uiux", name: "UI/UX Design System & Tokens", desc: "Production-ready Figma component systems, interactive prototypes & design tokens" },
  { id: "plugins", name: "Custom Plugins & Browser Extensions", desc: "Manifest V3 extensions, custom webhooks, and third-party SaaS integrations" }
];

const BUDGET_RANGES = [
  { id: "under_5k", label: "< $5,000", desc: "For focused MVPs, landing platforms, performance audits, or discrete sprints" },
  { id: "5k_10k", label: "$5,000 – $10,000", desc: "For modern Next.js websites, Shopify store builds, and core mobile apps" },
  { id: "10k_25k", label: "$10,000 – $25,000", desc: "For scalable web platforms, cross-platform apps, and enterprise CRM sync" },
  { id: "25k_50k", label: "$25,000 – $50,000", desc: "For complex multi-system architectures, custom SaaS, and scaled migrations" },
  { id: "50k_plus", label: "$50,000+", desc: "For enterprise-grade transformations, continuous delivery & dedicated squads" },
  { id: "flexible", label: "Flexible / Open to Scoping", desc: "Open to scoping based on your technical architecture recommendations" }
];

const TECH_STACK_OPTIONS = [
  "Next.js / React",
  "Node.js / TypeScript",
  "Python / FastAPI",
  "Salesforce (Apex / LWC)",
  "Shopify / OS 2.0 / Hydrogen",
  "React Native",
  "Flutter",
  "iOS (Swift / SwiftUI)",
  "Android (Kotlin)",
  "Tailwind CSS",
  "PostgreSQL / Supabase",
  "AWS / Cloudflare",
  "GraphQL / REST APIs",
  "Docker / Kubernetes"
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
  { id: "squad", title: "Dedicated Engineering Squad", subtitle: "Continuous weekly sprint velocity" },
  { id: "retainer", title: "Maintenance & Support SLA", subtitle: "Dedicated architecture, security & uptime" },
  { id: "advisory", title: "Architecture & Code Audit", subtitle: "Deep-dive technical review & roadmap" }
];

function InnerContactForm({
  title = "Project Inquiry & Architecture Scoper",
  subtitle = "Tell us what you want to build. Specify your budget and tech stack, and our senior engineering leadership will review and get back to you within 24 hours."
}: {
  title?: string;
  subtitle?: string;
}) {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service
    service: SERVICE_OPTIONS[0].name,
    customServiceNotes: "",

    // Step 2: Budget & Timeline
    budget: "$10,000 – $25,000",
    customBudgetNotes: "",
    timeline: "Within 1 Month",

    // Step 3: Tech Stack & Architecture
    techStack: ["Next.js / React", "Tailwind CSS"],
    customTechStack: "",
    url: "",
    platform: "Brand New / Greenfield Build",
    details: "",
    customComplianceNotes: "",

    // Step 4: Contact Details & Model
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
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleTechStack = (tech: string) => {
    if (formData.techStack.includes(tech)) {
      setFormData({
        ...formData,
        techStack: formData.techStack.filter((t) => t !== tech)
      });
    } else {
      setFormData({
        ...formData,
        techStack: [...formData.techStack, tech]
      });
    }
  };

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          honeypot
        })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Unable to send inquiry. Please reach out to cloudconsultancy.ad@gmail.com directly.");
      }

      setIsSubmitted(true);
      router.push("/thank-you/");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unable to transmit brief. You can still email us directly.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const emailBriefHref = useMemo(() => {
    const subject = `Project Inquiry: ${formData.service} — ${formData.name || "Client"}`;
    const body = `Hi Cloud Consultancy Engineering Team,\n\nI would like to discuss a project:\n- Primary Service: ${formData.service}\n- Budget Range: ${formData.budget}\n- Tech Stack: ${formData.techStack.join(", ")}${formData.customTechStack ? ` (${formData.customTechStack})` : ""}\n- Timeline: ${formData.timeline}\n- Existing URL: ${formData.url || "N/A"}\n\nProject Overview:\n${formData.details || "Details to be discussed."}\n\nMy Contact Info:\n- Name: ${formData.name}\n- Company: ${formData.company}\n- Phone: ${formData.phone}\n`;
    return `mailto:cloudconsultancy.ad@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formData]);

  if (isSubmitted) {
    return (
      <div className="bg-[#F0FDF4] border border-[#86EFAC] rounded-[10px] p-8 text-center my-6">
        <div className="w-12 h-12 bg-[#16A34A] text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 stroke-[3]" />
        </div>
        <h3 className="text-xl font-serif font-normal text-[#14532D]">
          Project Brief Received Successfully
        </h3>
        <p className="text-[#166534] text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
          Our senior engineering leadership will review your budget and tech stack requirements. We will get back to you within 24 hours with an architectural breakdown and next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 sm:p-10 shadow-sm relative font-sans">
      {/* Top Header */}
      <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
        <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
          Technical Scoping &amp; Proposal Request
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0F172A]">{title}</h3>
        <p className="text-xs sm:text-sm text-[#475569] mt-1">{subtitle}</p>
      </div>

      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2.5">
          <span>Step {step} of 4</span>
          <span className="text-[#2563EB] font-semibold">
            {step === 1 && "1. Service Scope"}
            {step === 2 && "2. Budget & Launch Horizon"}
            {step === 3 && "3. Tech Stack & Architecture"}
            {step === 4 && "4. Contact Details & Next Steps"}
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
        {/* ================= STEP 1: SERVICE SELECTION ================= */}
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
                      className={`p-3.5 rounded-[6px] text-left border text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-[#EFF6FF] border-[#2563EB] text-[#1D4ED8] shadow-xs ring-1 ring-[#2563EB]/20"
                          : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8] hover:text-[#0F172A]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-[#0F172A]">{item.name}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#2563EB]" />}
                      </div>
                      <span className="text-[11px] text-[#64748B] block mt-1.5 leading-snug">
                        {item.desc}
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
                Specific Scope Requirements or High-Level Goal (Optional)
              </label>
              <input
                id="customServiceNotes"
                type="text"
                value={formData.customServiceNotes}
                onChange={(e) => setFormData({ ...formData, customServiceNotes: e.target.value })}
                placeholder="e.g. Build customer dashboard, integrate Salesforce with Shopify, migrate from WordPress to Next.js..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>
          </div>
        )}

        {/* ================= STEP 2: BUDGET & TIMELINE ================= */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Wallet className="w-4 h-4 text-[#2563EB]" />
                <h4 className="font-serif text-lg font-medium text-[#0F172A]">
                  What is your estimated project budget range?
                </h4>
              </div>
              <p className="text-xs text-[#64748B] mb-3">
                Select the range that matches your milestone plan so we can propose the most cost-effective architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BUDGET_RANGES.map((b) => {
                  const isSelected = formData.budget === b.label;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b.label })}
                      className={`p-3.5 rounded-[6px] text-left border transition-all ${
                        isSelected
                          ? "bg-[#EFF6FF] border-[#2563EB] text-[#0F172A] ring-1 ring-[#2563EB]/25"
                          : "bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-[#0F172A]">{b.label}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#2563EB]" />}
                      </div>
                      <div className="text-[11px] text-[#64748B] mt-1 leading-snug">{b.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Budget Notes */}
            <div className="pt-2">
              <label
                htmlFor="customBudgetNotes"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Specific Budget Ceiling or Milestone Allocation (Optional)
              </label>
              <input
                id="customBudgetNotes"
                type="text"
                value={formData.customBudgetNotes}
                onChange={(e) => setFormData({ ...formData, customBudgetNotes: e.target.value })}
                placeholder="e.g. Firm budget cap of $12,000; or Phase 1 allocation of $8,000..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            {/* Timeline Selection */}
            <div className="pt-4 border-t border-[#E2E8F0]">
              <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2 block">
                Target Launch Horizon / Timeline
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
          </div>
        )}

        {/* ================= STEP 3: TECH STACK & ARCHITECTURE ================= */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Cpu className="w-4 h-4 text-[#2563EB]" />
                <h4 className="font-serif text-lg font-medium text-[#0F172A]">
                  What tech stack are you considering or currently using?
                </h4>
              </div>
              <p className="text-xs text-[#64748B] mb-3">
                Select all technologies relevant to your current application or desired build:
              </p>

              <div className="flex flex-wrap gap-2">
                {TECH_STACK_OPTIONS.map((tech) => {
                  const isSelected = formData.techStack.includes(tech);
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => toggleTechStack(tech)}
                      className={`px-3 py-1.5 rounded-[6px] text-xs font-medium border transition-all flex items-center space-x-1.5 ${
                        isSelected
                          ? "bg-[#2563EB] text-white border-[#2563EB] shadow-xs"
                          : "bg-[#F8FAFC] text-[#334155] border-[#CBD5E1] hover:border-[#94A3B8]"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      <span>{tech}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Tech Stack Input */}
            <div>
              <label
                htmlFor="customTechStack"
                className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
              >
                Other Tools, CMS, or Custom Tech Stack (Optional)
              </label>
              <input
                id="customTechStack"
                type="text"
                value={formData.customTechStack}
                onChange={(e) => setFormData({ ...formData, customTechStack: e.target.value })}
                placeholder="e.g. Supabase, Sanity CMS, Stripe, MuleSoft, GraphQL, Python FastAPI, Redis..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] space-y-4">
              <div>
                <label
                  htmlFor="contactUrl"
                  className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block"
                >
                  Current Website or Benchmark Reference URL (Optional)
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
                  Current Infrastructure State
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
                  Project Summary &amp; Key Deliverables (Optional)
                </label>
                <textarea
                  id="contactDetails"
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell us about the key features, users, integrations, or specific problem you need solved..."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-3 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-y"
                />
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 4: CONTACT & WHAT HAPPENS NEXT ================= */}
        {step === 4 && (
          <div className="space-y-6">
            {/* Preferred Engagement Model */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2 block">
                Preferred Partnership Framework
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
                Where should we send your architectural breakdown and proposal?
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
                    Company / Organization (Optional)
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
                    Phone / WhatsApp (Optional)
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

            {/* Prominent Follow-up Reassurance Box */}
            <div className="p-4 rounded-[8px] bg-[#EFF6FF] border border-[#BFDBFE] flex items-start space-x-3 text-xs text-[#1E3A8A]">
              <Clock className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold text-[#0F172A] mb-0.5">
                  Lastly, We Will Review Your Scope &amp; Get Back to You
                </strong>
                <span className="text-[#334155] leading-relaxed">
                  Our senior engineering leadership personally analyzes your requested tech stack, budget bracket, and project scope. We will get back to you within <strong>24 business hours</strong> with a clear architectural roadmap, milestone timeline, and dedicated squad availability.
                </span>
              </div>
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

        {/* Error Notification */}
        {submitError && (
          <div className="mt-4 p-3.5 bg-[#FEF2F2] border border-[#FECACA] rounded-[6px] text-xs text-[#991B1B] flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium">{submitError}</p>
              <p className="mt-1 text-[11px] text-[#B91C1C]">
                You can also email your brief directly to{" "}
                <a href={emailBriefHref} className="underline font-semibold hover:text-[#7F1D1D]">
                  cloudconsultancy.ad@gmail.com
                </a>{" "}
                or reach us on WhatsApp.
              </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              disabled={isSubmitting}
              className="px-4 py-2 text-xs font-semibold text-[#475569] hover:text-[#0F172A] border border-[#CBD5E1] rounded-[6px] flex items-center space-x-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Step</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-5 py-2.5 text-xs font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-[6px] flex items-center space-x-1.5 shadow-xs transition-colors"
            >
              <span>Continue to {step === 1 ? "Budget" : step === 2 ? "Tech Stack" : "Contact Details"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-[#93C5FD] text-white rounded-[6px] flex items-center space-x-2 shadow-xs transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Project Scope...</span>
                </>
              ) : (
                <>
                  <span>Submit Scope &amp; Request Proposal</span>
                  <Send className="w-3.5 h-3.5 ml-1" />
                </>
              )}
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
          Loading scoping framework...
        </div>
      }
    >
      <InnerContactForm title={title} subtitle={subtitle} />
    </Suspense>
  );
}
