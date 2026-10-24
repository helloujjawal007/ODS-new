"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface HeadingItem {
  id: number;
  tag: "h1" | "h2";
  question: string;
  statement: string;
}

const HEADINGS: HeadingItem[] = [
  {
    id: 0,
    tag: "h1",
    question: "Need a Web Platform?",
    statement: "Full-Stack Development That Scales"
  },
  {
    id: 1,
    tag: "h2",
    question: "Need a Better CRM?",
    statement: "Salesforce Engineering That Works"
  },
  {
    id: 2,
    tag: "h2",
    question: "Startup or Established Business?",
    statement: "Custom Software and CRM for Both"
  }
];

export default function HeroHeadingRotator() {
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
      setCurrentIndex((prev) => (prev + 1) % HEADINGS.length);
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

  // Manage 4-second auto-scroll interval, pausing on hover/focus
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

  const current = HEADINGS[currentIndex];
  const HeadingTag = current.tag;

  return (
    <div
      className="relative min-h-[175px] sm:min-h-[145px] lg:min-h-[165px] flex flex-col justify-between select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Dynamic Animated Heading */}
      <div
        className={`transition-all duration-300 ease-out transform ${isFading
          ? "opacity-0 -translate-y-1.5"
          : "opacity-100 translate-y-0"
          }`}
        aria-live="polite"
        aria-atomic="true"
      >
        <HeadingTag className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.14]">
          <span className="text-[#0F172A]">{current.question} </span>
          <span className="text-[#2563EB] font-medium">{current.statement}</span>
        </HeadingTag>
      </div>

      {/* Progress Indicators and Controls */}
      <div
        className="flex items-center space-x-2 pt-3"
        aria-label="Headline carousel controls"
      >
        {HEADINGS.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] ${isActive
                ? "w-8 bg-[#2563EB]"
                : "w-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
              aria-label={`Jump to headline ${idx + 1}: ${item.question} ${item.statement}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}

      </div>
    </div>
  );
}
