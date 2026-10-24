"use client";

import { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  MessageSquare, 
  ShieldCheck 
} from "lucide-react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "Website Development (Next.js)",
    budget: "$5,000 - $10,000",
    timeline: "Within 1 Month",
    url: "",
    details: "",
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Website Development (Next.js)",
    "Shopify & BigCommerce Store",
    "Technical SEO & Speed Optimization",
    "Android App Development",
    "iOS App Development",
    "Cross-Platform (Flutter / React Native)",
    "CRM & API Integration",
    "Salesforce Development & Support",
    "UI/UX Design Systems",
    "Plugins & Browser Extensions"
  ];

  const budgets = [
    "< $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+"
  ];

  const timelines = [
    "Immediate (1-2 Weeks)",
    "Within 1 Month",
    "1 - 3 Months",
    "Planning / Flexible"
  ];

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-8 sm:p-12 text-center shadow-sm font-sans">
        <div className="w-12 h-12 rounded-full bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mx-auto mb-4 border border-[#BFDBFE]">
          <Check className="w-6 h-6 stroke-[2.5]" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
          Inquiry Successfully Received
        </h3>
        <p className="text-[#475569] text-xs sm:text-sm mt-2 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-[#0F172A]">{formData.name}</strong>. A senior engineer on our team will review your project specifications and reply within one business day.
        </p>

        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-5 mt-6 max-w-md mx-auto text-left text-xs space-y-2 text-[#475569]">
          <div className="flex justify-between">
            <span>Selected Service:</span>
            <span className="text-[#0F172A] font-medium">{formData.service}</span>
          </div>
          <div className="flex justify-between">
            <span>Budget Range:</span>
            <span className="text-[#0F172A] font-medium">{formData.budget}</span>
          </div>
          <div className="flex justify-between">
            <span>Target Timeline:</span>
            <span className="text-[#0F172A] font-medium">{formData.timeline}</span>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="https://wa.me/919142590800?text=Hello%20Cloud%20Consultancy,%20I%20just%20submitted%20a%20project%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp (+91 91425 90800)</span>
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
            className="px-5 py-2.5 rounded-[6px] bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] text-xs font-medium transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-10 shadow-sm relative font-sans">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#64748B] mb-2.5">
          <span>Step {step} of 4</span>
          <span className="text-[#2563EB] font-semibold">
            {step === 1 && "Choose Service"}
            {step === 2 && "Budget & Timeline"}
            {step === 3 && "Project Scope"}
            {step === 4 && "Contact Details"}
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
        {/* Step 1: Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-[#0F172A]">Which service are you looking for?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((item) => {
                const isSelected = formData.service === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: item })}
                    className={`p-3 rounded-[6px] text-left border text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#EFF6FF] border-[#2563EB] text-[#1D4ED8] shadow-xs"
                        : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8] hover:text-[#0F172A]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#2563EB]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Budget & Timeline */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2.5">
                Expected Budget Range
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`p-2.5 rounded-[6px] text-center border text-xs transition-all ${
                      formData.budget === b
                        ? "bg-[#EFF6FF] border-[#2563EB] text-[#1D4ED8] font-semibold shadow-xs"
                        : "bg-white border-[#E2E8F0] text-[#475569] hover:border-[#94A3B8]"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-2.5">
                Target Timeline
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {timelines.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: t })}
                    className={`p-2.5 rounded-[6px] text-left border text-xs transition-all ${
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

        {/* Invisible honeypot field for spam protection */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="contact-hp-field">Leave this empty</label>
          <input
            id="contact-hp-field"
            type="text"
            name="security_verification_code"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Step 3: Scope & Current URL */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="contact-website-url" className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block">
                Current Website or Reference URL (Optional)
              </label>
              <input
                id="contact-website-url"
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://yourcompany.com"
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
              />
            </div>

            <div>
              <label htmlFor="contact-project-details" className="text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-1.5 block">
                Brief Overview of Goals & Requirements
              </label>
              <textarea
                id="contact-project-details"
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe your current tech stack, target goals, or key features needed..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3.5 py-2.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-[#0F172A] mb-2">Where should we send the proposal?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="contact-full-name" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">Your Name *</label>
                <input
                  id="contact-full-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Morgan"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label htmlFor="contact-work-email" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">Work Email *</label>
                <input
                  id="contact-work-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label htmlFor="contact-company-name" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">Company Name</label>
                <input
                  id="contact-company-name"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Inc."
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <div>
                <label htmlFor="contact-phone-number" className="text-xs font-mono uppercase text-[#64748B] mb-1 block">Phone / WhatsApp</label>
                <input
                  id="contact-phone-number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] px-3 py-2 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-[11px] text-[#64748B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
              <span>Your details are kept private and confidential under mutual NDA. Never shared or sold.</span>
            </div>
          </div>
        )}

        {/* Form Nav Buttons */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#E2E8F0]">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2 rounded-[6px] border border-[#CBD5E1] hover:bg-[#F8FAFC] text-[#0F172A] text-xs font-medium flex items-center space-x-1.5 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-5 py-2.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center space-x-1.5 transition-all shadow-sm ml-auto"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-sm ml-auto disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Brief...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
