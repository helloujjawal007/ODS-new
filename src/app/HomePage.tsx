import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Gauge, 
  Layers,
  Globe,
  ShieldCheck,
  Clock,
  Code2,
  ShoppingBag
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import ProjectEstimator from "@/components/calculator/ProjectEstimator";
import AuditToolModal from "@/components/seo/AuditToolModal";
import CtaSection from "@/components/sections/CtaSection";
import { SITE_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: {
    absolute: "Online Digital Solution | Web, Mobile, Shopify & BigCommerce Agency"
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const trustLogos = [
    { name: "FinVantage Global", badge: "Fintech Leader" },
    { name: "CloudSphere Security", badge: "Cloud SaaS" },
    { name: "AuraMed Health", badge: "Telehealth" },
    { name: "UrbanRider", badge: "Smart Mobility" },
    { name: "InnoTech Corp", badge: "Enterprise B2B" },
    { name: "Zenith Suite", badge: "Productivity AI" }
  ];

  const stats = [
    { value: "99+", label: "Lighthouse Performance Score", desc: "Core Web Vitals guaranteed" },
    { value: "+380%", label: "Average Organic Traffic Growth", desc: "Across client campaigns" },
    { value: "4.9★", label: "Average Mobile App Rating", desc: "App Store & Google Play" },
    { value: "100%", label: "On-Time Sprint Delivery", desc: "Zero surprise invoices" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center pt-8 pb-20 overflow-hidden">
        {/* Glow ambient meshes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -top-24 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-lg shadow-cyan-500/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>100% Online Global Agency · Web, Shopify, Apps & Custom Plugins</span>
              </div>

              {/* Main H1 */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                We Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                  High-Converting
                </span>{" "}
                Websites, Stores & Plugins.
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                We partner with high-growth businesses and founders worldwide. Delivering custom Next.js web applications, high-converting Shopify & BigCommerce stores, native mobile apps, and custom plugins & browser extensions 100% online with transparent remote engineering.
              </p>

              {/* Hero CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Start Your Online Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20Online%20Digital%20Solution,%20I'd%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/90 text-emerald-300 hover:text-emerald-200 font-semibold text-base border border-emerald-500/30 transition-all flex items-center justify-center space-x-2 backdrop-blur-md"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">Shopify & BigCommerce Certified</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-300">100% Online Global Delivery</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-slate-300">Lighthouse 95+ Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Glowing border wrapper */}
                <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-cyan-500/40 via-indigo-500/30 to-purple-500/40 shadow-2xl shadow-cyan-500/20">
                  <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[16/10]">
                    <Image
                      src="/images/ods_flagship_hero_banner.jpg"
                      alt="Online Digital Solution - Flagship Digital Engineering Command Center & Global Web Operations"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating metric badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <Gauge className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Production Vitals</div>
                          <div className="text-[11px] text-slate-400">LCP 0.68s · CLS 0.00</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          100 / 100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT LOGO MARQUEE */}
      <section className="py-8 border-y border-white/10 bg-slate-950/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            Trusted by Enterprise Engineering Leaders & High-Growth Scale-Ups
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee flex items-center space-x-12 shrink-0 py-2">
            {[...trustLogos, ...trustLogos].map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-3 px-6 py-2.5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors shrink-0"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="font-bold text-slate-200 text-sm tracking-wide">
                  {logo.name}
                </span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                  {logo.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.2 REAL CRAFTSMANSHIP & CLIENT SHOWCASE */}
      <section className="py-20 relative bg-slate-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Craftsmanship In Action · Online Digital Solution</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Real Stores. Real Systems. Real Velocity.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                Explore actual digital platforms, custom Shopify & BigCommerce storefronts, and cloud systems engineered by our Kolkata engineering lab for high-growth clients.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-cyan-400 hover:text-cyan-300 text-xs font-bold flex items-center space-x-2 transition-all shrink-0"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Featured Card 1: Shopify & BigCommerce Luxury Storefront */}
            <div className="lg:col-span-7 bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <Image
                  src="/images/service_shopify_bigcommerce.jpg"
                  alt="Shopify Plus and BigCommerce custom store development by Online Digital Solution"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-emerald-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center space-x-1.5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Shopify Plus & BigCommerce</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
                  <div>
                    <span className="font-bold text-white block">Custom E-Commerce Storefronts</span>
                    <span className="text-[11px] text-slate-400">Sub-Second Checkouts · Liquid OS 2.0 · Stencil MSF</span>
                  </div>
                  <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/20 text-xs">
                    +310% Conversion
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  Headless Commerce & Custom Theme Architecture
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                  We architect high-performance Shopify and BigCommerce stores with custom sections, automated inventory syncing, frictionless cart drawers, and instant checkouts that convert window-shoppers into high-LTV customers.
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono text-[11px]">Shopify Plus</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono text-[11px]">BigCommerce MSF</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono text-[11px]">Next.js Commerce</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-mono text-[11px]">Klaviyo Automation</span>
                </div>
              </div>
            </div>

            {/* Right Column Stack: Multi-Device & Kolkata Hub */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Card 2: Multi-Device Telemetry & Analytics */}
              <div className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col group flex-1">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  <Image
                    src="/images/ods_portfolio_showcase.jpg"
                    alt="Multi-device analytics and store performance by Online Digital Solution"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-cyan-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-cyan-500/30 text-[11px] font-semibold text-cyan-300">
                    Live Telemetry & UI
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      Omnichannel Multi-Screen Systems
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Responsive consistency engineered across desktop, tablet, and mobile with live revenue and telemetry dashboards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Kolkata Engineering Studio */}
              <div className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col group flex-1">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                  <Image
                    src="/images/ods_team_office.jpg"
                    alt="Online Digital Solution engineering team at Kolkata hub"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 bg-purple-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-purple-500/30 text-[11px] font-semibold text-purple-300">
                    Senior Engineering Team
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      Online Digital Solution · Kolkata Hub
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Senior software engineers, Shopify architects, and designers delivering 100% online directly to clients worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 100% ONLINE GLOBAL DELIVERY MODEL */}
      <section className="py-20 relative bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>100% Online Global Operations · Kolkata to the World</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engineered for Ambitious Businesses Worldwide.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              We operate completely online, delivering senior engineering velocity to ambitious brands, startups, and enterprises globally without excessive agency overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Global Timezone Alignment */}
            <div className="bg-slate-900/70 border border-white/10 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-400 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800/40 text-cyan-400 font-mono text-[11px] mb-2">
                Flexible Timezone Sync
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                Worldwide Live & Async Overlap
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Flexible work shifts customized to your international business hours. Daily asynchronous video walkthroughs, dedicated Slack channels, and live sprint planning.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Real-time overlap scheduled around your calendar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Standard mutual NDAs & full IP ownership transfer</span>
                </li>
              </ul>
            </div>

            {/* Modern Full-Stack Architecture */}
            <div className="bg-slate-900/70 border border-white/10 hover:border-emerald-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800/40 text-emerald-400 font-mono text-[11px] mb-2">
                Tier-1 Engineering Stack
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                Next.js, Cloud & Mobile Apps
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Sub-second page speeds with Next.js 16 App Router, cross-platform mobile apps in React Native and Flutter, and scalable API systems built for worldwide scale.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Edge-native deployments & Headless CMS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>High-converting UI/UX systems & 95+ Core Web Vitals</span>
                </li>
              </ul>
            </div>

            {/* Direct Architect Collaboration */}
            <div className="bg-slate-900/70 border border-white/10 hover:border-purple-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/40 flex items-center justify-center text-purple-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-800/40 text-purple-400 font-mono text-[11px] mb-2">
                100% Online Transparency
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                Direct Senior Engineering Access
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Zero account managers or middlemen. Collaborate directly with hands-on senior software architects with instant WhatsApp updates, GitHub PR visibility, and fast delivery.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 border-t border-white/5 pt-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Instant WhatsApp & Slack direct communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Transparent milestone payments & global invoicing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Kolkata Remote Hub Proof Badge */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/20 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  Headquartered in Kolkata · 100% Online Global Delivery
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Top-tier software engineering without broker fees. Direct WhatsApp & Zoom access to senior solutions architects.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Hello%20Online%20Digital%20Solution,%20I'd%20like%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <span>💬 WhatsApp: +91 91425 90800</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID SERVICES OVERVIEW */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Spectrum Digital Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Modular Capabilities. One Unified Standard.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Every digital capability is engineered to operate independently or interlock into an all-encompassing growth flywheel.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const isLarge = index === 0 || index === 1;
              return (
                <div
                  key={service.slug}
                  className={`group relative bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md hover:bg-slate-900/90 hover:border-cyan-500/30 transition-all flex flex-col justify-between overflow-hidden ${
                    isLarge ? "md:col-span-2 lg:col-span-1.5" : ""
                  }`}
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                        {service.category}
                      </span>
                      <span className="text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center">
                        Explore <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                      {service.tagline}
                    </p>

                    {/* Metric pill */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-slate-950/60 border border-white/5 rounded-xl p-2.5">
                          <div className="text-base font-extrabold text-cyan-400">{m.value}</div>
                          <div className="text-[10px] text-slate-400 line-clamp-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full py-2.5 rounded-xl bg-slate-950/80 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 text-xs font-semibold border border-white/10 hover:border-cyan-500/30 flex items-center justify-center space-x-1.5 transition-all text-center"
                  >
                    <span>View Architecture & Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Explore all services, deliverables & process breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. KEY STATS COUNTER */}
      <section className="py-20 bg-slate-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, idx) => (
              <div key={idx} className="text-center sm:text-left border-l-2 border-cyan-500/40 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                  {s.value}
                </div>
                <div className="text-sm font-bold text-white mt-1">{s.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CALCULATOR PREVIEW */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectEstimator />
        </div>
      </section>

      {/* 6. FEATURED CASE STUDIES */}
      <section className="py-20 relative bg-slate-950/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Engineering Proven Outcomes
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="mt-4 md:mt-0 text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-cyan-300">
                    {item.industry}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div>
                    {/* Primary metric */}
                    <div className="bg-slate-950/70 border border-white/5 rounded-xl p-3 mb-4">
                      <div className="text-xl font-black text-cyan-400">{item.impactMetrics[0].value}</div>
                      <div className="text-[11px] text-slate-400">{item.impactMetrics[0].label}</div>
                    </div>

                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="text-xs font-semibold text-slate-300 hover:text-cyan-300 flex items-center"
                    >
                      <span>Read Full Architecture Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREE AUDIT TOOL EMBED */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuditToolModal />
        </div>
      </section>

      {/* 8. CLOSING CTA BANNER */}
      <CtaSection
        title="Ready to Build Your Unfair Digital Advantage?"
        description="Partner with our senior engineering and technical SEO architects. We deliver production-ready code with guaranteed Core Web Vitals, transparent roadmaps, and full IP ownership."
      />
    </div>
  );
}
