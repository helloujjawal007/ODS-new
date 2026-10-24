"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudy } from "@/lib/portfolio-data";

interface PortfolioFilterListProps {
  projects: CaseStudy[];
}

export default function PortfolioFilterList({ projects }: PortfolioFilterListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "E-Commerce",
    "Web & SaaS",
    "Mobile Apps",
    "SEO & Growth",
    "CRM & Enterprise"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 font-sans">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-[6px] text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-[#2563EB] text-white shadow-sm"
                : "bg-white text-[#475569] hover:text-[#0F172A] border border-[#CBD5E1] hover:border-[#94A3B8]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 font-sans">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all"
          >
            <div className="relative aspect-[16/10] bg-[#F1F5F9]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono uppercase font-medium text-[#0F172A] shadow-2xs">
                {project.industry}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#64748B] mb-1">
                  {project.client} · {project.category}
                </div>
                <h2 className="font-serif text-lg font-medium text-[#0F172A] mb-2 leading-snug">
                  {project.title}
                </h2>
                <p className="text-xs text-[#475569] leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.impactMetrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-2.5">
                      <div className="text-sm font-mono font-bold text-[#0F172A]">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-[#64748B] line-clamp-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/portfolio/${project.slug}/`}
                className="w-full py-2.5 rounded-[6px] bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#0F172A] hover:text-[#2563EB] text-xs font-semibold border border-[#CBD5E1] hover:border-[#BFDBFE] flex items-center justify-center space-x-1.5 transition-all text-center"
              >
                <span>Read case study</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
