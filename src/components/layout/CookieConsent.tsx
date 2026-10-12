"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Check, X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("ods_cookie_consent");
      if (!consent) {
        // Small delay to prevent layout pop on immediate load
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // If localStorage is unavailable, fail silently
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem("ods_cookie_consent", "all");
    } catch {}
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    try {
      localStorage.setItem("ods_cookie_consent", "necessary");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-slate-950/95 border border-cyan-500/30 rounded-2xl p-5 shadow-2xl backdrop-blur-xl text-slate-300">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                <span>Privacy & Cookies</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                  GDPR / CCPA
                </span>
              </h4>
              <button
                onClick={handleAcceptNecessary}
                className="text-slate-500 hover:text-slate-300 p-1"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              We use strictly necessary cookies to ensure optimal site performance, Core Web Vitals diagnostics, and security. We do not sell your personal data. Read our{" "}
              <Link href="/privacy" className="text-cyan-400 hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-white/10">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-cyan-500/20"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>
          <button
            onClick={handleAcceptNecessary}
            className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 text-xs font-semibold transition-all"
          >
            Necessary Only
          </button>
        </div>
      </div>
    </aside>
  );
}
