"use client";

import Link from "next/link";
import { 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Lock, 
  Cpu
} from "lucide-react";

export default function AboutMaintenanceSummary() {
  const maintenanceFeatures = [
    {
      title: "24/7 Production Health & Uptime Monitoring",
      desc: "Continuous synthetic monitoring, endpoint heartbeat pings every 60 seconds, and automated alerts before your users notice an issue."
    },
    {
      title: "Proactive Security Patching & Dependency Updates",
      desc: "Zero-day vulnerability triage, Next.js, Node.js, and package updates tested in isolated staging environments before zero-downtime deployment."
    },
    {
      title: "Google Core Web Vitals & Speed Guardrails",
      desc: "Lighthouse CI automated regression testing on every pull request to ensure sub-second LCP and 95+ performance scores stay intact over time."
    },
    {
      title: "Database Optimization & Cache Invalidation",
      desc: "PostgreSQL index maintenance, Redis cache tuning, edge CDN purging, and storage pruning to prevent sluggish page loads under traffic surges."
    }
  ];

  const pillars = [
    {
      icon: Wrench,
      badge: "Ongoing Reliability",
      title: "Continuous Website & App Maintenance",
      description: "We don't ship and vanish. We provide ongoing maintenance contracts and SLA-backed retainers to ensure your web platforms, mobile apps, and Salesforce CRMs run smoothly 24 hours a day, 365 days a year.",
      points: [
        "Sub-15 minute P1 emergency response SLA",
        "Monthly security audits & framework upgrades",
        "Zero-downtime rolling deployments",
        "Dedicated monthly engineering hours for enhancements"
      ],
      linkText: "Explore Maintenance & SLAs",
      linkHref: "/pricing/#custom-estimator"
    },
    {
      icon: Lock,
      badge: "Zero Vendor Lock-In",
      title: "100% Code & Infrastructure Ownership",
      description: "You retain full legal, technical, and intellectual ownership of everything we engineer. Every repository, cloud environment, design token, and database belongs strictly to you from Day 1.",
      points: [
        "Full source code access on GitHub/GitLab",
        "Deployed directly into your AWS, GCP, or Vercel accounts",
        "Comprehensive TypeScript docs & architecture blueprints",
        "Zero proprietary software licenses or hostage fees"
      ],
      linkText: "Learn About Our Ownership Guarantee",
      linkHref: "/about/"
    },
    {
      icon: Cpu,
      badge: "Direct Collaboration",
      title: "Senior Engineers & Direct Slack Access",
      description: "You work directly with senior software architects and certified Salesforce consultants. No project manager telephone games, no unvetted outsourced juniors—just clean, reliable engineering.",
      points: [
        "Direct Slack or WhatsApp channel with your lead engineers",
        "Weekly sprint demos on live staging preview URLs",
        "Flexible hourly, milestone, or dedicated retainer terms",
        "Transparent git pull requests with full test coverage"
      ],
      linkText: "Meet Our Senior Team",
      linkHref: "/about/"
    }
  ];

  const telemetryStats = [
    { value: "99.98%", label: "Monitored Production Uptime" },
    { value: "< 15 Min", label: "Critical Incident Response SLA" },
    { value: "100%", label: "Code & Asset Ownership" },
    { value: "40+", label: "Maintained Live Deployments" }
  ];

  return (
    <section className="py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Who We Are & How We Support You
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.2]">
            Senior Craftsmanship, Complete Ownership & Proactive Maintenance
          </h2>
          <p className="text-[#475569] text-base mt-3 leading-relaxed">
            Founded by veteran software architects, <strong>Cloud Consultancy</strong> builds scalable digital platforms, custom e-commerce stores, native apps, and Salesforce CRM ecosystems. More importantly, we maintain and monitor your systems long after launch so your revenue infrastructure never falters.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[6px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1D4ED8] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-[4px] font-medium">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#0F172A] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-[#F1F5F9] pt-4">
                    {pillar.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] mt-0.5 shrink-0" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={pillar.linkHref}
                  className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
                >
                  <span>{pillar.linkText}</span>
                  <ArrowRight className="w-3 h-3 ml-0.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Dedicated Maintenance Banner Card */}
        <div className="bg-white border border-[#CBD5E1] rounded-[8px] p-6 sm:p-8 shadow-xs mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#EFF6FF] to-transparent rounded-bl-full pointer-events-none -mr-16 -mt-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>Active Website Maintenance Services</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#0F172A] tracking-tight">
                Already Have an Existing Website or App That Needs Maintenance?
              </h3>
              <p className="text-xs text-[#475569] leading-relaxed">
                You don&apos;t need to build from scratch to partner with us. We inherit, audit, stabilize, and maintain legacy codebases, WordPress platforms, custom Next.js apps, Shopify storefronts, and Salesforce setups.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/contact/?service=Website%20Maintenance%20%26%20Support"
                  className="px-4 py-2 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center space-x-1.5 shadow-2xs transition-all"
                >
                  <span>Request a Site Audit & Maintenance Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/process/"
                  className="px-4 py-2 rounded-[6px] bg-white hover:bg-[#F8FAFC] text-[#0F172A] border border-[#CBD5E1] font-medium text-xs transition-colors"
                >
                  Our Handover & Onboarding Process
                </Link>
              </div>
            </div>

            {/* Maintenance Feature Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {maintenanceFeatures.map((item, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[6px] p-3.5"
                >
                  <div className="flex items-center space-x-2 text-xs font-semibold text-[#0F172A] mb-1">
                    <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real Production Telemetry Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {telemetryStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E2E8F0] rounded-[6px] p-4 text-center shadow-2xs"
            >
              <div className="text-2xl sm:text-3xl font-mono font-bold text-[#0F172A]">
                {stat.value}
              </div>
              <div className="text-xs text-[#64748B] font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
