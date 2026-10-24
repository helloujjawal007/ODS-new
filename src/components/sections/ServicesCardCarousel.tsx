"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowLeft,
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Code2, 
  ShoppingBag, 
  TrendingUp, 
  Smartphone, 
  Database, 
  Workflow, 
  Palette, 
  Puzzle,
  LucideIcon
} from "lucide-react";
import { ServiceItem } from "@/lib/services-data";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "website-development": Code2,
  "shopify-bigcommerce-development": ShoppingBag,
  "seo": TrendingUp,
  "ios-app-development": Smartphone,
  "android-app-development": Smartphone,
  "cross-platform-app-development": Smartphone,
  "crm-integration": Database,
  "salesforce-support": Workflow,
  "ui-ux-design": Palette,
  "plugins-extensions-development": Puzzle
};

interface ServicesCardCarouselProps {
  services: ServiceItem[];
}

export default function ServicesCardCarousel({ services }: ServicesCardCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "All",
    "Engineering",
    "E-Commerce",
    "Enterprise CRM",
    "Mobile",
    "SEO & Growth"
  ];

  const filteredServices = services.filter((s) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Engineering") return s.category === "Engineering" && !s.slug.includes("app");
    if (selectedCategory === "E-Commerce") return s.category === "E-Commerce";
    if (selectedCategory === "Enterprise CRM") return s.category === "CRM & Enterprise";
    if (selectedCategory === "Mobile") return s.slug.includes("app");
    if (selectedCategory === "SEO & Growth") return s.category === "SEO & Performance" || s.slug === "seo";
    return true;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
              Capabilities & Disciplines
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
                Services & Technical Solutions
              </h2>
              {/* Prominent Left-Right Scroll Indicator */}
              <div
                onClick={() => scroll("right")}
                role="button"
                tabIndex={0}
                className="cursor-pointer inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-mono font-medium shadow-2xs hover:bg-[#DBEAFE] hover:border-[#93C5FD] transition-all"
                title="Click or swipe to scroll services"
              >
                <ArrowLeft className="w-3.5 h-3.5 animate-pulse text-[#2563EB]" />
                <span className="font-semibold">Scroll Left & Right ↔</span>
                <ArrowRight className="w-3.5 h-3.5 animate-pulse text-[#2563EB]" />
              </div>
            </div>
            <p className="text-[#475569] text-sm mt-2 max-w-xl leading-relaxed">
              Every project is architected and shipped by senior software engineers. Fixed scopes, measurable milestones, and transparent pricing.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/pricing/"
              className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1 mr-2"
            >
              <span>Explore all pricing models</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Scroll navigation arrows */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="p-2 rounded-[6px] border border-[#CBD5E1] hover:border-[#2563EB] hover:bg-[#EFF6FF] text-[#0F172A] hover:text-[#2563EB] transition-colors focus:outline-none"
                aria-label="Scroll services left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="p-2 rounded-[6px] border border-[#CBD5E1] hover:border-[#2563EB] hover:bg-[#EFF6FF] text-[#0F172A] hover:text-[#2563EB] transition-colors focus:outline-none"
                aria-label="Scroll services right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#2563EB] text-white shadow-xs"
                  : "bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] border border-[#CBD5E1] hover:border-[#94A3B8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrollable Carousel with Floating Side Arrows */}
        <div className="relative group/carousel">
          {/* Floating Left Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs border border-[#CBD5E1] hover:border-[#2563EB] shadow-md items-center justify-center text-[#0F172A] hover:text-[#2563EB] transition-all hover:scale-110 focus:outline-none"
            aria-label="Scroll services left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 -mx-4 sm:mx-0 px-4 sm:px-0"
            style={{ scrollbarWidth: "thin" }}
          >
            {filteredServices.map((s) => {
              const Icon = SERVICE_ICONS[s.slug] || Code2;
              return (
                <div
                  key={s.slug}
                  className="service-carousel-card w-[310px] sm:w-[350px] md:w-[370px] shrink-0 snap-start bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all group"
                >
                  {/* Visual Top Preview */}
                  <div>
                    <div className="relative aspect-[16/10] bg-[#F1F5F9] overflow-hidden">
                      <Image
                        src={s.heroImage}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 310px, 370px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute top-2.5 right-2.5 z-10 bg-[#0F172A]/85 backdrop-blur-xs text-white px-2 py-0.5 rounded-[4px] text-[10px] font-mono uppercase font-medium">
                        {s.category}
                      </div>

                      <div className="absolute bottom-3 right-3 p-2 rounded-[6px] bg-white/95 backdrop-blur-xs border border-[#E2E8F0] text-[#2563EB] shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-medium text-[#0F172A] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 mb-4">
                      {s.tagline}
                    </p>

                    {/* Key Technical Deliverables */}
                    <div className="space-y-1.5 mb-4 text-xs text-[#475569]">
                      {s.deliverables.slice(0, 2).map((del, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{del.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {s.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] text-[10px] font-mono"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer (NO PRICING - Navigates directly to /pricing/?service=slug) */}
                <div className="p-5 pt-0">
                  <Link
                    href={`/pricing/?service=${s.slug}`}
                    className="w-full py-2.5 px-4 rounded-[6px] bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#CBD5E1] hover:border-[#BFDBFE] text-[#0F172A] hover:text-[#2563EB] text-xs font-semibold flex items-center justify-between transition-all group-hover:bg-[#EFF6FF] group-hover:border-[#BFDBFE] group-hover:text-[#2563EB]"
                    aria-label={`View pricing and architecture for ${s.title}`}
                  >
                    <span>View Pricing & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Right Arrow */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs border border-[#CBD5E1] hover:border-[#2563EB] shadow-md items-center justify-center text-[#0F172A] hover:text-[#2563EB] transition-all hover:scale-110 focus:outline-none"
          aria-label="Scroll services right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Scroll Helper Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-3 border-t border-[#F1F5F9] text-xs text-[#64748B]">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
          <span className="font-mono text-[11px]">
            Showing {filteredServices.length} {filteredServices.length === 1 ? "discipline" : "disciplines"} · Scroll or drag horizontally to view all capabilities
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="px-2.5 py-1 rounded-[4px] border border-[#CBD5E1] hover:bg-[#F8FAFC] hover:border-[#2563EB] text-[#0F172A] text-xs flex items-center space-x-1 transition-colors"
            aria-label="Scroll carousel left"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px]">Previous</span>
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="px-2.5 py-1 rounded-[4px] border border-[#CBD5E1] hover:bg-[#F8FAFC] hover:border-[#2563EB] text-[#0F172A] text-xs flex items-center space-x-1 transition-colors"
            aria-label="Scroll carousel right"
          >
            <span className="font-mono text-[11px]">Next</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);
}
