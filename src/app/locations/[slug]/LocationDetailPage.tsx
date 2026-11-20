import Image from "next/image";
import Link from "next/link";
import { LocationData, LOCATIONS } from "@/lib/locations-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import ContactForm from "@/components/forms/ContactForm";
import {
  getBreadcrumbJsonLd,
  getFaqJsonLd,
  getLocationJsonLd
} from "@/lib/seo-config";
import {
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Globe2,
  Check,
  Building2,
  Users2,
  Lock,
  Code2,
  Sparkles,
  Server,
  FileText,
  Activity,
  Flame,
  Briefcase
} from "lucide-react";

interface LocationDetailPageProps {
  location: LocationData;
}

export default function LocationDetailPage({ location }: LocationDetailPageProps) {
  const breadcrumbItems = [
    { label: "Locations", href: "/locations/" },
    { label: location.name }
  ];

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Locations", url: "/locations/" },
    { name: location.name, url: `/locations/${location.slug}/` }
  ]);

  const locationSchema = getLocationJsonLd(location);
  const faqSchema = getFaqJsonLd(
    location.faqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  // Other nearby or popular locations for cross-linking
  const otherLocations = LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 6);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Structured Data */}
      <JsonLd id={`schema-breadcrumb-${location.slug}`} data={breadcrumbSchema} />
      <JsonLd id={`schema-service-${location.slug}`} data={locationSchema} />
      <JsonLd id={`schema-faq-${location.slug}`} data={faqSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* ================= 1. HERO BANNER ================= */}
        <section className="my-8 lg:my-12 border-b border-[#E2E8F0] pb-12">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-mono font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>
                {location.stateCode} · {location.name} Regional Software Practice
              </span>
            </div>

            {/* Strict Single H1 Tag */}
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-tight">
              {location.h1}
            </h1>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              {location.heroTagline}
            </p>

            {/* Value Highlights Pill Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-[#334155]">
              <div className="flex items-center space-x-1.5 bg-[#F8FAFC] px-3 py-1.5 rounded-[6px] border border-[#E2E8F0]">
                <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{location.timezone}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-[#F8FAFC] px-3 py-1.5 rounded-[6px] border border-[#E2E8F0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>100% Client Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-[#F8FAFC] px-3 py-1.5 rounded-[6px] border border-[#E2E8F0]">
                <Users2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Senior Staff (No Junior Offshoring)</span>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#scope-project"
                className="px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm"
              >
                <span>Scope Your {location.name} Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact/"
                className="px-6 py-3 rounded-[6px] bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-semibold flex items-center space-x-2 transition-colors shadow-sm"
              >
                <span>Contact Lead Architect</span>
                <ArrowRight className="w-4 h-4 text-[#60A5FA]" />
              </Link>
            </div>
          </div>

          {/* HERO VISUAL IMAGE (1 of 3) */}
          <div className="mt-8 rounded-[12px] overflow-hidden border border-[#CBD5E1] shadow-sm bg-[#0A101D]">
            <Image
              src={location.images.hero}
              alt={`Custom Software Engineering & Cloud Platform Command Center in ${location.name}`}
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* ================= 2. EXECUTIVE ARCHITECTURE ANALYSIS & METROS ================= */}
        <section className="my-14 space-y-8">
          <div className="max-w-4xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
              Regional Ecosystem Analysis
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Engineering Excellence Across {location.name}&apos;s Major Technology Corridors
            </h2>
            <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-3">
              {location.executiveSummary.split("\\n\\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Metros Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.metros.map((metro, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[10px] p-6 shadow-2xs hover:border-[#2563EB] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
                      Metro Focus 0{idx + 1}
                    </span>
                    <Building2 className="w-4 h-4 text-[#64748B]" />
                  </div>

                  <h3 className="font-serif text-base font-semibold text-[#0F172A] mb-1">
                    {metro.name}
                  </h3>

                  <div className="text-xs text-[#2563EB] font-medium mb-3">
                    {metro.role}
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {metro.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-1.5">
                    Primary Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {metro.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-[4px] bg-white border border-[#CBD5E1] text-[10px] text-[#334155] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. SYSTEM ARCHITECTURE BLUEPRINT (2 of 3) ================= */}
        <section className="my-16 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[12px] p-6 sm:p-10 shadow-2xs">
          <div className="max-w-4xl space-y-3 mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-mono font-medium text-[#2563EB]">
              <Server className="w-3.5 h-3.5" />
              <span>Decoupled Cloud Topology</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Enterprise System Blueprint Optimized for {location.name} Organizations
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Our engineering architecture eliminates single points of failure, decouples frontend presentation from core backends, and integrates modern event streaming for resilient multi-system enterprise scale.
            </p>
          </div>

          {/* Architecture Blueprint Image */}
          <div className="mb-8 rounded-[10px] overflow-hidden border border-[#CBD5E1] shadow-2xs bg-[#080F1E]">
            <Image
              src={location.images.architecture}
              alt={`Enterprise Cloud & Salesforce Architecture Blueprint for ${location.name}`}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 4 Architecture Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono font-bold text-[#2563EB] mb-1">
                1. Edge &amp; Presentation
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {location.architectureBlueprint.presentation}
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono font-bold text-[#A855F7] mb-1">
                2. Gateway &amp; Middleware
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {location.architectureBlueprint.gateway}
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono font-bold text-[#3B82F6] mb-1">
                3. Salesforce CRM &amp; APIs
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {location.architectureBlueprint.crmSync}
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono font-bold text-[#10B981] mb-1">
                4. Data Tier &amp; Storage
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {location.architectureBlueprint.database}
              </p>
            </div>
          </div>
        </section>

        {/* ================= 4. REGULATORY COMPLIANCE & DATA PRIVACY ================= */}
        <section className="my-16 border-t border-[#E2E8F0] pt-12">
          <div className="bg-white border border-[#CBD5E1] rounded-[12px] p-6 sm:p-10 shadow-2xs">
            <div className="max-w-3xl space-y-3 mb-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-mono text-[#1D4ED8]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Regional Data Privacy &amp; Governance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
                Engineering for {location.name} Compliance: {location.statuteName}
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {location.statuteSummary}
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-5 space-y-3">
              <div className="text-xs font-semibold text-[#0F172A] flex items-center space-x-2">
                <Lock className="w-4 h-4 text-[#2563EB]" />
                <span>Our Architectural Implementation:</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">
                {location.statuteImpl}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-[11px] text-[#334155] font-mono">
                <span className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-[4px] border border-[#CBD5E1]">
                  <Check className="w-3 h-3 text-[#10B981]" />
                  <span>AES-256 Storage Encryption</span>
                </span>
                <span className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-[4px] border border-[#CBD5E1]">
                  <Check className="w-3 h-3 text-[#10B981]" />
                  <span>Zero-Trust API RBAC</span>
                </span>
                <span className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-[4px] border border-[#CBD5E1]">
                  <Check className="w-3 h-3 text-[#10B981]" />
                  <span>Immutable Audit Logging</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. CORE TECHNICAL DISCIPLINES ================= */}
        <section className="my-16 border-t border-[#E2E8F0] pt-12">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
              Core Technical Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Disciplines We Deliver to {location.name} Clients
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
              Every deliverable is written in modern TypeScript, rigorously unit tested (&gt;=90% coverage), and deployed directly into your cloud infrastructure with 100% intellectual property ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.disciplines.map((disc, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 shadow-2xs hover:border-[#2563EB] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
                      {disc.focus}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#0F172A] mb-2">
                    {disc.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {disc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F1F5F9] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#10B981] font-semibold">
                    ✓ {disc.metrics}
                  </span>
                  <Link
                    href={
                      disc.title.toLowerCase().includes("salesforce")
                        ? "/salesforce/"
                        : disc.title.toLowerCase().includes("mobile")
                        ? "/services/mobile-app-development/"
                        : disc.title.toLowerCase().includes("commerce")
                        ? "/services/shopify-bigcommerce-development/"
                        : "/services/website-development/"
                    }
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center space-x-1"
                  >
                    <span>Architecture Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. CASE STUDY HIGHLIGHT ================= */}
        <section className="my-16 bg-[#0F172A] text-white rounded-[12px] p-6 sm:p-10 shadow-md">
          <div className="max-w-3xl space-y-3 mb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-mono text-[#60A5FA]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Proven Production Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal">
              Featured Case Study: {location.caseStudy.client}
            </h2>
            <div className="text-xs text-[#94A3B8] font-mono">
              Sector: {location.caseStudy.industry}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#334155]">
            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#EF4444] font-semibold">
                The Architectural Challenge
              </div>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                {location.caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#60A5FA] font-semibold">
                Engineering Solution
              </div>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                {location.caseStudy.solution}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-semibold">
                Measurable Business Outcome
              </div>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                {location.caseStudy.outcome}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#334155] flex items-center justify-between">
            <span className="text-xs text-[#94A3B8]">
              Ready for a comparable transformation in your organization?
            </span>
            <Link
              href="/portfolio/"
              className="text-xs font-semibold text-[#60A5FA] hover:text-white inline-flex items-center"
            >
              Explore all case studies &rarr;
            </Link>
          </div>
        </section>

        {/* ================= 7. TIMEZONE TELEMETRY & AGILE SPRINT FRAMEWORK (3 of 3) ================= */}
        <section className="my-16 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[12px] p-6 sm:p-10 shadow-2xs">
          <div className="max-w-4xl space-y-3 mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] text-xs font-mono font-medium text-[#10B981]">
              <Activity className="w-3.5 h-3.5" />
              <span>Agile Sprint Delivery Telemetry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Guaranteed {location.name} Timezone Collaboration &amp; Service Level Agreements
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We operate with dedicated {location.timezone} squads. You communicate directly with lead architects, review code continuously in your private GitHub repositories, and receive live demo walkthroughs every sprint.
            </p>
          </div>

          {/* Delivery Telemetry Image */}
          <div className="mb-8 rounded-[10px] overflow-hidden border border-[#CBD5E1] shadow-2xs bg-[#080F1E]">
            <Image
              src={location.images.delivery}
              alt={`Agile Sprint Telemetry and Delivery Dashboard for ${location.name}`}
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* 4 Delivery Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 font-semibold">
                Sprint Cadence
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                {location.deliveryFramework.sprintCadence}
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 font-semibold">
                Test Coverage Guarantee
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                {location.deliveryFramework.testCoverage}
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 font-semibold">
                100% Code Ownership
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                {location.deliveryFramework.codeOwnership}
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-4 shadow-2xs">
              <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-1 font-semibold">
                Incident Response SLA
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                {location.deliveryFramework.incidentSla}
              </p>
            </div>
          </div>
        </section>

        {/* ================= 8. STATE-SPECIFIC FAQS ================= */}
        <section className="my-16 border-t border-[#E2E8F0] pt-12">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
              Comprehensive Technical &amp; Operational Inquiries
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Frequently Asked Questions: Software Development in {location.name}
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {location.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-5 transition-all open:bg-white open:border-[#2563EB]"
              >
                <summary className="font-serif text-sm sm:text-base font-semibold text-[#0F172A] cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="text-[#2563EB] font-mono text-sm group-open:rotate-90 transition-transform">
                    &rarr;
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-3 pt-3 border-t border-[#E2E8F0]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ================= 9. DEDICATED CLOSING CTA SECTION TO CONTACT PAGE ================= */}
        <section className="my-16 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-[16px] p-8 sm:p-14 text-white shadow-xl relative overflow-hidden border border-[#334155]">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#2563EB]/20 border border-[#3B82F6] text-xs font-mono text-[#93C5FD]">
              <Flame className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>{location.name} Direct Engineering Engagement</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-normal tracking-tight">
              Ready to Modernize Your {location.name} Software Infrastructure?
            </h2>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Whether you are architecting a new Next.js 16 platform from scratch, modernizing a legacy Salesforce instance, or seeking a dedicated engineering squad with guaranteed {location.timezone} overlap, we review every inquiry within 24 hours with transparent milestone scoping.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="px-8 py-3.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center space-x-2 transition-all shadow-md group"
              >
                <span>Go to Contact Page &amp; Request SOW</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#scope-project"
                className="px-6 py-3.5 rounded-[6px] bg-[#334155] hover:bg-[#475569] text-white text-xs font-semibold transition-colors"
              >
                Fill Form Below
              </a>
            </div>
          </div>
        </section>

        {/* ================= 10. EMBEDDED PROJECT SCOPING FORM ================= */}
        <section id="scope-project" className="my-16 border-t border-[#E2E8F0] pt-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-mono text-[#1D4ED8] mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Project Scoping &amp; SOW Inquiry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Start Your {location.name} Engineering Initiative
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
              Share your project scope, preferred tech stack, and budget bracket below. Our lead software architect will assess your requirements and reply within one business day.
            </p>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[12px] p-6 sm:p-10 shadow-2xs">
            <ContactForm />
          </div>
        </section>

        {/* ================= 11. CROSS-LINKING TO OTHER US LOCATIONS ================= */}
        <section className="my-16 border-t border-[#E2E8F0] pt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#0F172A]">
                Explore Other USA Engineering Hubs
              </h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                We provide dedicated technical squads across all primary US metropolitan hubs.
              </p>
            </div>
            <Link
              href="/locations/"
              className="text-xs font-semibold text-[#2563EB] hover:underline shrink-0"
            >
              View all 25 USA locations &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {otherLocations.map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}/`}
                className="p-3 rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#EFF6FF] transition-all text-center block group"
              >
                <div className="font-mono text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB]">
                  {other.stateCode}
                </div>
                <div className="text-[11px] text-[#64748B] truncate mt-0.5">
                  {other.name}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
