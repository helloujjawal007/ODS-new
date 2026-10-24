"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getFaqJsonLd } from "@/lib/seo-config";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Common questions regarding project scoping, technical delivery, and communication."
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <JsonLd id="schema-faq" data={getFaqJsonLd(faqs)} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Questions & Details
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[#475569] text-sm mt-2 max-w-xl mx-auto font-sans leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3 font-sans">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E2E8F0] rounded-[8px] bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#0F172A] font-medium">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-[6px] flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen ? "rotate-180 bg-[#EFF6FF] text-[#2563EB]" : "bg-[#F8FAFC] text-[#64748B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#475569] text-xs sm:text-sm leading-relaxed border-t border-[#E2E8F0]">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
