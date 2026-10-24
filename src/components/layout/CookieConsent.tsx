"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Check, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("cc_cookie_consent");
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore if localStorage unavailable
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("cc_cookie_consent", "all");
    } catch {}
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    try {
      localStorage.setItem("cc_cookie_consent", "necessary");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 font-sans"
    >
      <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-xl text-[#0F172A]">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 border border-[#BFDBFE]">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold text-[#0F172A] flex items-center space-x-1.5">
                <span>Privacy & Cookies</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[3px] bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                  GDPR / CCPA
                </span>
              </h4>
              <button
                onClick={handleAcceptNecessary}
                className="text-[#64748B] hover:text-[#0F172A] p-1 transition-colors"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
              We use strictly necessary cookies to ensure security and optimal site speed. We do not sell your personal data. Read our{" "}
              <Link href="/privacy" className="text-[#2563EB] hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-[#E2E8F0]">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>
          <button
            onClick={handleAcceptNecessary}
            className="py-2 px-3 rounded-[6px] bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] text-xs font-medium transition-colors"
          >
            Necessary Only
          </button>
        </div>
      </div>
    </aside>
  );
}
