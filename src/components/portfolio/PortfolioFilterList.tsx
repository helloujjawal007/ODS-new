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
      {/* Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between group shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-cyan-300">
                {project.industry}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  {project.client} · {project.category}
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Primary Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.impactMetrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="bg-slate-950/70 border border-white/5 rounded-xl p-2.5">
                      <div className="text-base sm:text-lg font-black text-cyan-400">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/portfolio/${project.slug}`}
                className="w-full py-2.5 rounded-xl bg-slate-950/80 hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 text-xs font-semibold border border-white/10 hover:border-cyan-500/30 flex items-center justify-center space-x-1.5 transition-all text-center"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
