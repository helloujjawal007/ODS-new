"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export interface HeroSlide {
  id: number;
  question: string;
  statement: string;
  description: string;
  image: string;
  imageAlt: string;
  captionTitle: string;
  captionSubtitle: string;
  badge: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    question: "Need a Web Platform?",
    statement: "Full-Stack Development That Scales",
    description:
      "We architect and engineer high-performance web platforms and cloud-native applications built to scale effortlessly. Pay only for what your project requires with 100% ownership of code, designs, and cloud infrastructure from day one.",
    image: "/images/hero_web_engineering.jpg",
    imageAlt: "Cloud Consultancy senior software engineers reviewing web architecture",
    captionTitle: "Cloud architecture & web platforms",
    captionSubtitle: "Next.js 16, React 19, TypeScript & Node.js",
    badge: "Full-Stack Web"
  },
  {
    id: 1,
    question: "Need a Better CRM?",
    statement: "Salesforce Engineering That Works",
    description:
      "Custom Salesforce implementations, CRM architecture, seamless third-party API integrations, and workflow automation. Designed to streamline your sales operations with zero vendor lock-in and transparent milestone delivery.",
    image: "/images/hero_crm_salesforce.jpg",
    imageAlt: "Cloud Consultancy Salesforce CRM integration and automation dashboard",
    captionTitle: "Salesforce CRM engineering & integration",
    captionSubtitle: "Apex, Lightning Web Components & Data Cloud",
    badge: "Salesforce Certified"
  },
  {
    id: 2,
    question: "Startup or Established Business?",
    statement: "Custom Software and CRM for Both",
    description:
      "Flexible technical partnership for venture-backed startups and established enterprises alike. Hire senior engineers across hourly, contract, or dedicated monthly retainers tailored to your exact roadmap.",
    image: "/images/hero_agile_partnership.jpg",
    imageAlt: "Cloud Consultancy engineering team collaborating with startup founders",
    captionTitle: "Agile engineering for scale-ups & enterprise",
    captionSubtitle: "Hourly, Sprints & Dedicated Engineering Squads",
    badge: "Flexible Engagement"
  }
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
  }, []);

  const goToNextSlide = useCallback(() => {
    setIsFading(true);
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      setIsFading(false);
    }, 280);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex || isFading) return;
    setIsFading(true);
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrentIndex(index);
      setIsFading(false);
    }, 280);
  }, [currentIndex, isFading]);

  useEffect(() => {
    if (isPaused) {
      clearTimers();
      return;
    }

    intervalRef.current = setInterval(goToNextSlide, 4000);

    return () => {
      clearTimers();
    };
  }, [isPaused, goToNextSlide, clearTimers]);

  const current = HERO_SLIDES[currentIndex];

  return (
    <section
      className="pt-12 pb-20 border-b border-[#E2E8F0] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.08),transparent)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Dynamic Animated Heading */}
            <div
              className={`transition-all duration-300 ease-out transform min-h-[145px] sm:min-h-[120px] lg:min-h-[140px] flex flex-col justify-center ${
                isFading ? "opacity-0 -translate-y-1.5" : "opacity-100 translate-y-0"
              }`}
              aria-live="polite"
              aria-atomic="true"
            >
              <h1 className="hero-slide-heading text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.14]">
                <span className="text-[#0F172A]">{current.question} </span>
                <span className="text-[#2563EB] font-medium">{current.statement}</span>
              </h1>
            </div>

            {/* Dynamic Animated Paragraph */}
            <div
              className={`transition-all duration-300 ease-out transform min-h-[72px] sm:min-h-[60px] ${
                isFading ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-base sm:text-lg text-[#475569] max-w-xl font-normal leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Action Buttons: "Get a Free Quote" navigates to /pricing/, "Talk to Us" to /contact/ */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/pricing/"
                className="px-6 py-3.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm inline-flex items-center justify-center space-x-2 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact/"
                className="px-6 py-3.5 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] font-medium text-sm border border-[#CBD5E1] hover:border-[#94A3B8] inline-flex items-center justify-center transition-all"
              >
                Talk to Us
              </Link>
            </div>

            {/* Carousel Navigation Indicators */}
            <div
              className="flex items-center space-x-2 pt-2"
              aria-label="Hero slide indicators"
            >
              {HERO_SLIDES.map((slide, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${
                      isActive ? "w-8 bg-[#2563EB]" : "w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                    }`}
                    aria-label={`Jump to slide ${idx + 1}: ${slide.question} ${slide.statement}`}
                    aria-current={isActive ? "true" : undefined}
                  />
                );
              })}
            </div>

            {/* Grounded Trust Signals */}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#475569]">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>100% Client Ownership</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Flexible Scope-Based Pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Full-Stack + Salesforce Certified</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image (Synchronized with active slide) */}
          <div className="lg:col-span-5">
            <div className="bg-white p-2.5 rounded-[8px] border border-[#E2E8F0] shadow-sm">
              <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden bg-[#F1F5F9]">
                <div
                  className={`relative w-full h-full transition-opacity duration-300 ease-out ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Image
                    src={current.image}
                    alt={current.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className={`p-3 pt-3 flex items-center justify-between text-xs text-[#475569] transition-opacity duration-300 ease-out ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
                  <div>
                    <span className="font-semibold text-[#0F172A] block">{current.captionTitle}</span>
                    <span className="text-[11px] text-[#64748B]">{current.captionSubtitle}</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-[3px] font-medium">
                  {current.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
