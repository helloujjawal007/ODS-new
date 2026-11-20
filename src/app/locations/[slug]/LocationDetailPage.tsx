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
  Code2
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
  const faqSchema = getFaqJsonLd(location.faqs);

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
                {location.stateCode} · {location.name} Regional Practice
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
            <div className="flex flex-wrap items-center gap-3 pt-3 text-xs text-[#334155]">
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

            {/* Quick Action Link */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#scope-project"
                className="px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm"
              >
                <span>Scope Your {location.name} Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/portfolio/"
                className="px-6 py-3 rounded-[6px] bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] text-xs font-semibold transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 2. STATE OVERVIEW & TIMEZONE OVERLAP ================= */}
        <section className="my-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
              Localized Delivery Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Engineered for {location.name} Tech Ecosystems
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              We understand the high velocity and demanding standards of enterprises and startups across {location.name}. Our engineering pods are structured specifically to eliminate the friction commonly associated with remote software agencies.
            </p>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Serving key business centers including {location.majorCities.join(", ")}, we combine big-tech software engineering rigor with transparent sprint deliverables, daily async Loom updates, and guaranteed business-hours overlap.
            </p>

            {/* Major Cities Tag Mesh */}
            <div className="pt-3">
              <div className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider mb-2 font-semibold">
                Major Metros Served Across {location.name}:
              </div>
              <div className="flex flex-wrap gap-2">
                {location.majorCities.map((city) => (
                  <span
                    key={city}
                    className="px-2.5 py-1 rounded-[4px] bg-[#F1F5F9] border border-[#CBD5E1] text-xs text-[#0F172A] font-medium"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[10px] p-6 space-y-4 shadow-2xs">
            <h3 className="font-serif text-lg font-semibold text-[#0F172A] flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#2563EB]" />
              <span>Timezone &amp; Collaboration SLA</span>
            </h3>

            <div className="space-y-3 text-xs text-[#334155]">
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  <strong>Operating Timezone:</strong> {location.timezone}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  <strong>Daily Overlap:</strong> {location.timezoneOverlap}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  <strong>Communication Channels:</strong> Dedicated private Slack/Teams channel, weekly Zoom sprint demos, and GitHub Enterprise pull requests.
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>
                  <strong>Emergency Support:</strong> Sub-15 minute P1 response SLA for production-critical incidents.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. LOCAL INDUSTRIES WE ACCELERATE ================= */}
        <section className="my-16 border-t border-[#E2E8F0] pt-12">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
              Sector Specialization
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Industry Solutions for {location.name} Enterprises
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
              Our engineering squads bring battle-tested domain knowledge tailored to the key economic engines of {location.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.localIndustries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-2xs hover:border-[#2563EB] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-mono font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#0F172A] mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9] text-[11px] font-mono text-[#2563EB] font-semibold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{ind.impactMetric}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 4. CORE SERVICES DELIVERED ================= */}
        <section className="my-16 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[12px] p-6 sm:p-10 shadow-2xs">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
              Core Technical Disciplines
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Services We Deliver to {location.name} Clients
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
              Every deliverable is written in modern TypeScript, rigorously unit tested (&gt;=85% coverage), and deployed directly to your infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.keyServices.map((svc) => (
              <div
                key={svc.slug}
                className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-2xs hover:border-[#2563EB] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
                      {svc.focus}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#0F172A] mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-4">
                    {svc.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#F1F5F9]">
                  <Link
                    href={svc.slug === "salesforce" ? "/salesforce/" : `/services/${svc.slug}/`}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center space-x-1"
                  >
                    <span>View Engineering Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 5. FREQUENTLY ASKED QUESTIONS ================= */}
        <section className="my-16 border-t border-[#E2E8F0] pt-12">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
              Clear &amp; Transparent Answers
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0F172A]">
              Frequently Asked Questions for {location.name} Clients
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {location.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-5 transition-all open:bg-white open:border-[#2563EB]"
              >
                <summary className="font-serif text-sm sm:text-base font-semibold text-[#0F172A] cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-[#2563EB] font-mono text-sm group-open:rotate-90 transition-transform">
                    &rarr;
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-3 pt-3 border-t border-[#E2E8F0]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ================= 6. EMBEDDED PROJECT SCOPING FORM ================= */}
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
              Share your project scope, preferred tech stack, and budget bracket. A lead software architect reviews every inquiry and replies within one business day with transparent milestone scoping.
            </p>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[12px] p-6 sm:p-10 shadow-2xs">
            <ContactForm />
          </div>
        </section>

        {/* ================= 7. CROSS-LINKING TO OTHER US LOCATIONS ================= */}
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
