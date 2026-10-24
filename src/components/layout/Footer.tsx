"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Send 
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { SITE_CONFIG } from "@/lib/seo-config";
import CloudLogo from "@/components/brand/CloudLogo";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] pt-16 pb-12 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Inquiries Section */}
        <div className="border-b border-[#1E293B] pb-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-2 font-medium">
                Engineering Notes
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white tracking-tight">
                Occasional notes on web performance and SEO.
              </h3>
              <p className="text-[#94A3B8] text-sm mt-1 max-w-xl">
                Practical breakdowns of Next.js architecture, Core Web Vitals optimization, and real-world Shopify development.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center space-x-2.5 bg-[#1E293B] border border-[#334155] rounded-[6px] p-4 text-[#94A3B8] text-xs">
                  <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Thank you. You will receive our next engineering note.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <label htmlFor="footer-newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="footer-newsletter-email"
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-[#1E293B] border border-[#334155] rounded-[6px] px-3.5 py-2.5 text-xs text-white placeholder-[#94A3B8]/70 focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs transition-all flex items-center justify-center space-x-1.5 shrink-0 shadow-sm"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 text-xs">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-4">
            <Link href="/" className="flex items-center space-x-2.5 mb-3 group">
              <CloudLogo className="w-8 h-auto" size={32} />
              <span className="font-serif text-base font-medium text-white group-hover:text-[#60A5FA] transition-colors">
                Cloud Consultancy
              </span>
            </Link>
            <p className="text-[#94A3B8] text-xs max-w-sm leading-relaxed mb-4">
              We engineer scalable cloud platforms, full-stack web applications, and Salesforce CRM integrations for growing businesses and global enterprises.
            </p>

            {/* Social links with explicit accessible names */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[6px] bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="GitHub profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[6px] bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="LinkedIn company page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-[6px] bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#2563EB] transition-colors"
                aria-label="X (Twitter) profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Services Column with clear descriptive link text */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-white mb-3 text-[11px] font-semibold">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact/?service=Website%20Maintenance%20%26%20Support"
                  className="text-[#60A5FA] hover:text-white transition-colors flex items-center space-x-1 font-medium"
                >
                  <span>Site Maintenance & SLAs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-white mb-3 text-[11px] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/" className="text-[#94A3B8] hover:text-white transition-colors">
                  Services Directory
                </Link>
              </li>
              <li>
                <Link href="/portfolio/" className="text-[#94A3B8] hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/process/" className="text-[#94A3B8] hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/pricing/" className="text-[#94A3B8] hover:text-white transition-colors">
                  Pricing & Estimator
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-[#94A3B8] hover:text-white transition-colors">
                  Engineering Notes
                </Link>
              </li>
              <li>
                <Link href="/about/" className="text-[#94A3B8] hover:text-white transition-colors">
                  About Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-[#94A3B8] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-white mb-3 text-[11px] font-semibold">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-[#94A3B8]">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.contact.address}, {SITE_CONFIG.contact.city}, West Bengal {SITE_CONFIG.contact.zip}, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="text-xs text-[#2563EB] hover:text-[#60A5FA] font-medium inline-flex items-center space-x-1"
                >
                  <span>Tell us about your project</span>
                  <ArrowRight className="w-3 h-3 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col md:flex-row items-center justify-between text-[11px] text-[#94A3B8] gap-4">
          <div>
            &copy; 2026 {SITE_CONFIG.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy/#cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              XML Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
