import { Metadata } from "next";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Contact Us & Project Inquiry",
  description: "Schedule a technical discovery session or request a fixed-price proposal. Our solutions architects reply within 4 business hours.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact & Discovery" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Contact", url: "/contact" }
  ]);

  return (
    <div className="py-8">
      <JsonLd id="schema-breadcrumb-contact" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="max-w-3xl my-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fast-Track Discovery</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Let&apos;s Engineer Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Breakthrough.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Fill out our guided technical questionnaire below or connect directly with our on-call architecture team via WhatsApp or calendar booking.
          </p>
        </div>

        {/* Split Grid: Left Form, Right Contact Cards & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Left Column: Interactive Multi-Step Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick response badge card */}
            <div className="bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-cyan-400 font-bold mb-3">
                <Clock className="w-4 h-4" />
                <span>Response SLA</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Guaranteed Reply Within 4 Business Hours
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Your brief is routed directly to a Lead Solutions Architect—not a non-technical sales rep. We come prepared with concrete architectural recommendations.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors p-3 rounded-xl bg-slate-950/60 border border-white/5"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{SITE_CONFIG.contact.email}</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors p-3 rounded-xl bg-slate-950/60 border border-white/5"
                >
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{SITE_CONFIG.contact.phoneDisplay || SITE_CONFIG.contact.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20Online%20Digital%20Solution,%20I'd%20like%20to%20discuss%20a%20new%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-emerald-300 hover:text-emerald-200 transition-colors p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">Direct WhatsApp Chat: +91 91425 90800</span>
                </a>
              </div>
            </div>

            {/* Office Coordinates */}
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-slate-400 font-bold mb-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Headquarters & Online Delivery Lab</span>
              </div>
              <h4 className="font-bold text-white text-base mb-1">
                {SITE_CONFIG.name} — Kolkata Hub
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {SITE_CONFIG.contact.address} <br />
                {SITE_CONFIG.contact.city}, {SITE_CONFIG.contact.state} {SITE_CONFIG.contact.zip}, {SITE_CONFIG.contact.country} <br />
                <span className="text-cyan-400 font-medium">100% Online Global Digital Delivery (Serving Clients Worldwide)</span>
              </p>
              <div className="inline-flex items-center space-x-2 text-xs text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-white/5 w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Flexible Timezone Alignment · Asynchronous & Real-Time Delivery</span>
              </div>
            </div>

            {/* Privacy & NDA Note */}
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 flex items-start space-x-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                All inquiries and uploaded project assets are protected under standard mutual non-disclosure agreements (NDA).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
