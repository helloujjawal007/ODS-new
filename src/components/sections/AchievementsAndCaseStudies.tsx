import Link from "next/link";
import { 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  TrendingUp,
  Clock,
  Sparkles,
  Zap,
  Server
} from "lucide-react";
import { PORTFOLIO_PROJECTS, CaseStudy } from "@/lib/portfolio-data";

interface AchievementsAndCaseStudiesProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  pageContext?: "contact" | "pricing";
  maxCaseStudies?: number;
}

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    stat: "20+",
    label: "Production Deployments",
    desc: "Shipped custom web portals, mobile apps, and Salesforce systems for growing businesses and startup teams."
  },
  {
    icon: Zap,
    stat: "99.98%",
    label: "Production Uptime SLA",
    desc: "Rigorous automated testing, sub-second Core Web Vitals, and continuous telemetry monitoring."
  },
  {
    icon: TrendingUp,
    stat: "$1M+",
    label: "Client Revenue Supported",
    desc: "Transactional e-commerce storefronts, SaaS subscriptions, and digital workflow processing."
  },
  {
    icon: ShieldCheck,
    stat: "100%",
    label: "Client IP & Code Ownership",
    desc: "Zero proprietary lock-in. Full GitHub repos, Figma files, and cloud credentials transferred upon launch."
  },
  {
    icon: Clock,
    stat: "100%",
    label: "On-Time Milestone Delivery",
    desc: "Transparent milestone-based contracts with guaranteed deliverables and zero hidden fee surprises."
  },
  {
    icon: Sparkles,
    stat: "4.9 / 5.0",
    label: "Client Retrospective Score",
    desc: "Long-term engineering partnerships supported by standard 30-day post-launch warranty and SLAs."
  }
];

export default function AchievementsAndCaseStudies({
  title = "Proven Achievements & Production Case Studies",
  subtitle = "Inspect verified telemetry, architecture decisions, and business impact from recent production systems.",
  badge = "Client Success & Track Record",
  pageContext = "contact",
  maxCaseStudies = 3
}: AchievementsAndCaseStudiesProps) {
  const caseStudies: CaseStudy[] = PORTFOLIO_PROJECTS.slice(0, maxCaseStudies);

  return (
    <section className="my-16 pt-12 border-t border-[#E2E8F0]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            {badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight">
            {title}
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="mt-4 md:mt-0 shrink-0">
          <Link
            href="/portfolio/"
            className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center space-x-1.5 transition-colors"
          >
            <span>Explore all case studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Part 1: Engineering Achievements & Track Record Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
        {ACHIEVEMENTS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-4 flex flex-col justify-between hover:border-[#2563EB] hover:bg-white transition-all shadow-2xs group"
            >
              <div>
                <div className="w-8 h-8 rounded-[6px] bg-white border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] mb-2.5 group-hover:bg-[#EFF6FF] group-hover:border-[#BFDBFE] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-xl sm:text-2xl font-serif font-medium text-[#0F172A] tracking-tight">
                  {item.stat}
                </div>
                <div className="text-xs font-semibold text-[#0F172A] mt-0.5 leading-snug">
                  {item.label}
                </div>
              </div>
              <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed hidden sm:block">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Part 2: Featured Production Case Studies Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="bg-white border border-[#E2E8F0] rounded-[10px] overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all group"
          >
            {/* Card Header Telemetry Banner */}
            <div className="bg-gradient-to-r from-[#F8FAFC] to-[#EFF6FF] border-b border-[#E2E8F0] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span className="text-[11px] font-mono uppercase font-semibold text-[#0F172A]">
                  {study.industry}
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-white border border-[#BFDBFE] text-[#2563EB] font-medium">
                {study.client}
              </span>
            </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#64748B] mb-1.5">
                  <span>{study.client}</span>
                  <span className="text-[#2563EB] font-medium">{study.category}</span>
                </div>

                <h3 className="font-serif text-lg font-medium text-[#0F172A] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors">
                  <Link href={`/portfolio/${study.slug}/`}>
                    {study.title}
                  </Link>
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 mb-4">
                  {study.summary}
                </p>

                {/* Telemetry Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3 mb-4 text-center">
                  {study.impactMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="overflow-hidden">
                      <div className="font-mono font-bold text-xs sm:text-sm text-[#0F172A] truncate">
                        {metric.value}
                      </div>
                      <div className="text-[10px] text-[#64748B] truncate mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {study.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#F1F5F9] text-[#475569] text-[10px] font-mono rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            {/* Card Action Links */}
            <div className="px-5 sm:px-6 pb-5 pt-0 border-t border-[#F1F5F9] mt-2 flex items-center justify-between">
              <Link
                href={`/portfolio/${study.slug}/`}
                className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center space-x-1"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-3 h-3 ml-0.5" />
              </Link>

              {pageContext === "pricing" ? (
                <Link
                  href="#custom-estimator"
                  className="text-[11px] font-mono text-[#64748B] hover:text-[#0F172A] underline"
                >
                  Estimate Similar
                </Link>
              ) : (
                <span className="text-[11px] text-[#16A34A] font-medium flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3 text-[#16A34A]" />
                  <span>Production Live</span>
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Trust & Guarantee Callout Footer */}
      <div className="mt-8 p-4 rounded-[8px] bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#1E3A8A]">
        <div className="flex items-center space-x-2.5">
          <Server className="w-4 h-4 text-[#2563EB] shrink-0" />
          <span>
            Every client build comes with <strong>30-day post-launch warranty</strong>, 100% intellectual property transfer, and dedicated architecture reviews.
          </span>
        </div>
        <Link
          href="/process/"
          className="font-medium text-[#2563EB] hover:text-[#1D4ED8] hover:underline shrink-0 text-xs inline-flex items-center space-x-1"
        >
          <span>See our 5-phase delivery process</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
