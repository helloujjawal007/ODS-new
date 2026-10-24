import { Metadata } from "next";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Contact Us & Project Inquiry",
  description: "Send us the details of your project. We review every inquiry and reply within one business day.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Contact", url: "/contact" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-contact" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="max-w-3xl my-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Get In Touch
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            Tell us about your project.
          </h1>

          <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
            Fill out the brief questionnaire below or reach out directly via WhatsApp or email. A senior engineer on our team will review and reply within one business day.
          </p>
        </div>

        {/* Split Grid: Left Form, Right Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10 items-start">
          {/* Left Column: Interactive Multi-Step Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Channels & Guarantee */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Channels Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#2563EB] font-semibold mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Response Time</span>
              </div>
              <h3 className="text-lg font-serif font-medium text-[#0F172A] mb-1">
                Direct Reply Within One Business Day
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed mb-5">
                Every brief is reviewed directly by an engineer. We come prepared with concrete architectural and scoping recommendations.
              </p>

              {/* Direct Channels */}
              <div className="space-y-2.5 text-xs">
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center space-x-2.5 text-[#0F172A] hover:text-[#2563EB] transition-colors p-3 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1]"
                >
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="truncate">{SITE_CONFIG.contact.email}</span>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center space-x-2.5 text-[#0F172A] hover:text-[#2563EB] transition-colors p-3 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1]"
                >
                  <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20Cloud%20Consultancy,%20I'd%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 text-[#0F172A] hover:text-[#2563EB] transition-colors p-3 rounded-[6px] bg-[#EFF6FF] border border-[#BFDBFE]"
                >
                  <MessageSquare className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="font-medium text-[#1D4ED8]">WhatsApp: +91 91425 90800</span>
                </a>
              </div>
            </div>

            {/* Office Coordinates */}
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#64748B] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Office Location</span>
              </div>
              <h4 className="font-serif text-base font-medium text-[#0F172A] mb-1">
                Kolkata Engineering Studio
              </h4>
              <p className="text-xs text-[#475569] leading-relaxed mb-3">
                {SITE_CONFIG.contact.address} <br />
                {SITE_CONFIG.contact.city}, West Bengal {SITE_CONFIG.contact.zip}, India <br />
                <span className="text-[#0F172A] font-medium">Working with clients across US, UK, and worldwide.</span>
              </p>
              <div className="text-[11px] text-[#475569] bg-[#F8FAFC] p-3 rounded-[6px] border border-[#E2E8F0]">
                Flexible timezone overlap scheduled around your business hours.
              </div>
            </div>

            {/* Privacy & NDA Note */}
            <div className="p-4 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-start space-x-2.5 text-xs text-[#475569]">
              <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
              <span>
                All inquiries and project details are held strictly confidential under mutual NDA by default.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
