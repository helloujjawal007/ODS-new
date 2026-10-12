import { Metadata } from "next";
import { 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  Clock 
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Our Engineering Process",
  description: "Learn how Online Digital Solution executes projects with predictable sprint cycles: Discovery & Architecture, UI/UX Design Systems, Next.js Engineering, QA Core Web Vitals Tuning, and Post-Launch Scale.",
  alternates: {
    canonical: "/process"
  }
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery, Keyword Intelligence & Technical Architecture",
      duration: "Week 1",
      icon: Search,
      desc: "We don't write a single line of code until business requirements, user journeys, and technical feasibility are strictly locked.",
      deliverables: [
        "Product Requirement Document (PRD)",
        "Commercial keyword & competitor gap mapping",
        "System architecture & schema data models",
        "Security, authentication & API integrations roadmap"
      ]
    },
    {
      number: "02",
      title: "High-Fidelity UI/UX & Interactive Design System",
      duration: "Weeks 1 – 2",
      icon: Layers,
      desc: "Creating pixel-perfect, accessible design systems in Figma with scalable auto-layout components, tokens, and dark/light modes.",
      deliverables: [
        "Complete responsive screens (Desktop, Tablet & Mobile)",
        "Clickable interactive prototypes for stakeholder testing",
        "Design token library synchronized with Tailwind CSS",
        "WCAG 2.2 AA accessibility contrast verification"
      ]
    },
    {
      number: "03",
      title: "Sprint-Based Next.js & Full-Stack Engineering",
      duration: "Weeks 2 – 4",
      icon: Code2,
      desc: "Component-driven development following clean architecture principles, strict TypeScript typing, and edge runtime optimization.",
      deliverables: [
        "Modular Next.js 16 App Router frontend",
        "Headless CMS (Sanity / Contentful) integration",
        "Microservice middleware & webhook pipelines",
        "Automated CI/CD with preview deployments"
      ]
    },
    {
      number: "04",
      title: "Core Web Vitals & Security Hardening",
      duration: "Week 5",
      icon: ShieldCheck,
      desc: "Ruthless performance tuning and technical SEO validation to guarantee green vitals and zero crawl friction.",
      deliverables: [
        "Lighthouse 95+ score validation across all devices",
        "Sub-1-second LCP & zero CLS layout shifts",
        "Comprehensive JSON-LD structured data injection",
        "Security headers (CSP, HSTS) & rate limiting"
      ]
    },
    {
      number: "05",
      title: "Zero-Downtime Launch & Continuous Organic Scale",
      duration: "Ongoing",
      icon: Rocket,
      desc: "Production cutover, automated DNS validation, Google Search Console indexing, and real-time telemetry monitoring.",
      deliverables: [
        "Zero-downtime DNS deployment & SSL provisioning",
        "Google Search Console & Bing Webmaster submission",
        "Real-user monitoring (CrUX) and error telemetry",
        "30–60 days dedicated warranty and post-launch tuning"
      ]
    }
  ];

  const breadcrumbs = [{ label: "Process & Methodology" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Process", url: "/process" }
  ]);

  return (
    <div className="py-8">
      <JsonLd id="schema-breadcrumb-process" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Methodology</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            How We Build: From <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Concept to Market Dominance.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Predictable sprints, transparent communication, and zero technical surprises. Here is the exact 5-stage blueprint powering our enterprise engagements.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto my-20 space-y-12 relative">
          {/* Vertical line connector */}
          <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500 opacity-30" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col sm:flex-row items-start sm:space-x-8 group"
              >
                {/* Step badge icon */}
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-black text-xl shadow-xl shadow-cyan-500/10 group-hover:border-cyan-400 group-hover:scale-105 transition-all shrink-0 z-10 mb-4 sm:mb-0">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content Box */}
                <div className="flex-1 bg-slate-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md group-hover:border-cyan-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 mb-4 gap-2">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                        Stage {step.number}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        {step.title}
                      </h2>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-950 border border-white/10 text-xs font-semibold text-slate-300 shrink-0 self-start sm:self-center">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {step.desc}
                  </p>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Tangible Deliverables:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                      {step.deliverables.map((del, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <CtaSection
          title="Ready to Put This Process to Work?"
          description="Let's kick off Stage 1 with a free technical discovery call. We'll map your system architecture and establish sprint milestones."
        />
      </div>
    </div>
  );
}
