"use client";

import { useState } from "react";
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "Website Development",
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
    "Technical SEO & Growth",
    "Android App Development",
    "iOS App Development",
    "Cross-Platform (Flutter / RN)",
    "CRM & Multi-System Integration",
    "Salesforce Development & Support",
    "Product UI/UX Design System"
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
    "Exploring / Planning"
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
      // Spam detected via honeypot trap
      return;
    }
    setIsSubmitting(true);
    // Simulate API lead ingestion to CRM
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-900/90 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Inquiry Successfully Received
        </h3>
        <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. A dedicated solutions architect has received your brief and will review your specifications within 4 business hours.
        </p>

        <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-6 mt-8 max-w-md mx-auto text-left text-xs space-y-2 text-slate-400">
          <div className="flex justify-between">
            <span>Selected Service:</span>
            <span className="text-white font-medium">{formData.service}</span>
          </div>
          <div className="flex justify-between">
            <span>Budget Bracket:</span>
            <span className="text-white font-medium">{formData.budget}</span>
          </div>
          <div className="flex justify-between">
            <span>Target Timeline:</span>
            <span className="text-white font-medium">{formData.timeline}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/919142590800?text=Hello%20Online%20Digital%20Solution,%20I%20just%20submitted%20a%20project%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-emerald-600/25"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 91425 90800)</span>
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setStep(1);
            }}
            className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-sm font-medium transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative">
      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          <span>Step {step} of 4</span>
          <span className="text-cyan-400">
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
                s <= step ? "bg-cyan-400" : "bg-slate-800"
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Which service are you looking for?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((item) => {
                const isSelected = formData.service === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData({ ...formData, service: item })}
                    className={`p-4 rounded-xl text-left border text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-cyan-950/70 border-cyan-400 text-white shadow-lg shadow-cyan-950/50"
                        : "bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      {isSelected && <Check className="w-4 h-4 text-cyan-400" />}
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
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
                Expected Budget Allocation
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`p-3 rounded-xl text-center border text-xs sm:text-sm font-medium transition-all ${
                      formData.budget === b
                        ? "bg-indigo-950/70 border-indigo-400 text-white"
                        : "bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">
                Target Launch Horizon
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {timelines.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: t })}
                    className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-medium transition-all ${
                      formData.timeline === t
                        ? "bg-cyan-950/70 border-cyan-400 text-white"
                        : "bg-slate-950/60 border-white/5 text-slate-300 hover:border-white/20"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Invisible honeypot field for spam bot protection */}
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
              <label htmlFor="contact-website-url" className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">
                Current Website or Reference URL (Optional)
              </label>
              <input
                id="contact-website-url"
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://yourcompany.com"
                className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-project-details" className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 block">
                Brief Overview of Goals & Requirements
              </label>
              <textarea
                id="contact-project-details"
                rows={4}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Describe your current bottleneck, target metrics, or desired deliverables..."
                className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white mb-2">Where should we deliver the technical proposal?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-full-name" className="text-xs font-medium text-slate-400 mb-1 block">Full Name *</label>
                <input
                  id="contact-full-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Sarah Jenkins"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="contact-work-email" className="text-xs font-medium text-slate-400 mb-1 block">Work Email *</label>
                <input
                  id="contact-work-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@enterprise.com"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="contact-company-name" className="text-xs font-medium text-slate-400 mb-1 block">Company Name</label>
                <input
                  id="contact-company-name"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Global Inc."
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="contact-phone-number" className="text-xs font-medium text-slate-400 mb-1 block">Phone / WhatsApp</label>
                <input
                  id="contact-phone-number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>We respect your privacy. Under NDA by default. Never shared or sold.</span>
            </div>
          </div>
        )}

        {/* Form Nav Buttons */}
        <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/10">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-sm font-medium flex items-center space-x-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center space-x-2 transition-all shadow-lg shadow-cyan-500/25 ml-auto"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-950 font-black text-sm flex items-center space-x-2 transition-all shadow-lg shadow-cyan-400/25 ml-auto disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Generating Proposal...</span>
              ) : (
                <>
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
