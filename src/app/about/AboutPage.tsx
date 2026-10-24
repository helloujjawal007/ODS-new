import { Metadata } from "next";
import Image from "next/image";
import { 
  ShieldCheck, 
  Target, 
  Zap, 
  Compass, 
  Code2 
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";
import CloudLogo from "@/components/brand/CloudLogo";

export const metadata: Metadata = {
  title: "About Our Team & Engineering Philosophy",
  description: "Meet the engineers behind Cloud Consultancy. Building cloud architecture, websites, Shopify stores and apps for clients worldwide.",
  alternates: {
    canonical: "/about/"
  }
};

export default function AboutPage() {
  const values = [
    {
      title: "Direct Engineer Access",
      desc: "No non-technical account managers or communication silos. You collaborate directly with the engineers writing and shipping your code.",
      icon: ShieldCheck
    },
    {
      title: "Core Web Vitals Discipline",
      desc: "Speed is an architectural standard, not an afterthought. We test every build against Google's real-world LCP, CLS, and INP thresholds.",
      icon: Zap
    },
    {
      title: "100% Code Ownership",
      desc: "You retain full intellectual property ownership of your GitHub repositories, Figma master files, and deployment accounts from day one.",
      icon: Target
    },
    {
      title: "Fixed Scope & Milestones",
      desc: "We define concrete deliverables and milestone payments before starting work so you never experience surprise invoices.",
      icon: Compass
    }
  ];

  const disciplines = [
    {
      role: "Solutions & Web Architecture",
      focus: "Next.js 16, App Router, React 19, Headless CMS & Cloudflare Edge",
      desc: "Responsible for core structural performance, server-side caching, and robust API endpoints."
    },
    {
      role: "Shopify & E-Commerce Engineering",
      focus: "Shopify Plus, Liquid OS 2.0, BigCommerce MSF, Klaviyo & Checkout Extensions",
      desc: "Building custom themes, seamless cart drawers, and reliable ERP inventory synchronizations."
    },
    {
      role: "Mobile Applications",
      focus: "Swift 6 / SwiftUI for iOS, Kotlin for Android, and Flutter Cross-Platform",
      desc: "Engineering responsive mobile interfaces with offline sync and native device hardware integrations."
    },
    {
      role: "Technical SEO & Schema Architecture",
      focus: "Topic cluster modeling, JSON-LD structured data, Core Web Vitals remediation",
      desc: "Ensuring every deployed page is crawlable, fast, and primed for organic search rankings."
    }
  ];

  const milestones = [
    { year: "2021", title: "Engineering Studio Founded", desc: "Started as a dedicated web and technical SEO engineering team." },
    { year: "2023", title: "Shopify & Mobile Expansion", desc: "Added custom Shopify OS 2.0 and cross-platform mobile app practices." },
    { year: "2024", title: "Global Client Base", desc: "Partnered with founders across the US, UK, Europe, and Asia-Pacific." },
    { year: "2026", title: "Next.js Edge & App Standards", desc: "Pioneering Next.js 16 App Router edge-native deployments and schema automation." }
  ];

  const breadcrumbs = [{ label: "About" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "About", url: "/about/" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-about" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <section className="my-10 max-w-4xl">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            About Cloud Consultancy
          </span>

          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            Engineering cloud architecture, web systems and apps with care and transparency.
          </h1>

          <p className="text-[#475569] text-base sm:text-lg mt-4 leading-relaxed max-w-2xl">
            Founded by senior software engineers, <strong>Cloud Consultancy</strong> was created to give growing businesses direct access to senior technical craft without excessive agency overhead. We work remotely with founders and teams around the globe.
          </p>
        </section>

        {/* Studio Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[8px] overflow-hidden border border-[#E2E8F0] shadow-sm my-10 bg-[#F1F5F9]">
          <Image
            src="/images/about_team_studio.jpg"
            alt="Cloud Consultancy engineering team collaborating"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-xs border border-[#E2E8F0] p-3 rounded-[6px] text-xs text-[#475569] shadow-sm flex items-start space-x-2.5">
            <CloudLogo className="w-5 h-auto mt-0.5 shrink-0" size={18} />
            <div>
              <span className="font-semibold text-[#0F172A] block">Cloud Consultancy Studio</span>
              <span>Registered Office: Kolkata, India · Remote collaboration worldwide</span>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Principles That Guide Our Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center mb-3 border border-[#BFDBFE]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-medium text-[#0F172A] mb-1.5">{v.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Disciplines */}
        <section className="my-16 border-b border-[#E2E8F0] pb-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Engineering Disciplines
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Specialized Roles Across Every Sprint
            </h2>
            <p className="text-xs text-[#475569] mt-2">
              Every project is led by proven hands-on developers who write clean, tested code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-xs"
              >
                <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#2563EB] font-semibold mb-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{item.role}</span>
                </div>
                <div className="text-xs font-mono text-[#0F172A] font-semibold mb-2">
                  {item.focus}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section className="my-16">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-1">
              Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Milestones & Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[6px] p-5 shadow-xs"
              >
                <div className="text-2xl font-serif font-medium text-[#2563EB] mb-1">
                  {m.year}
                </div>
                <h3 className="font-serif text-sm font-medium text-[#0F172A] mb-1">{m.title}</h3>
                <p className="text-xs text-[#475569] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <CtaSection
          title="Have a project in mind? Send us the details and we’ll reply within a day."
          description="We engineer scalable cloud architecture, custom web platforms, and Salesforce CRM systems for growing companies and global enterprises."
          primaryCtaText="Tell us about your project"
          primaryCtaHref="/contact/"
        />
      </div>
    </div>
  );
}
