"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { LOCATIONS, LocationData } from "@/lib/locations-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";
import {
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Search,
  Globe2,
  Sparkles,
  Layers,
  Code2
} from "lucide-react";

export default function LocationsHubPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const breadcrumbItems = [{ label: "Locations" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Locations", url: "/locations/" }
  ]);

  const regions = useMemo(() => {
    const list = ["All", ...new Set(LOCATIONS.map((loc) => loc.region))];
    return list;
  }, []);

  const filteredLocations = useMemo(() => {
    return LOCATIONS.filter((loc) => {
      const matchesRegion =
        selectedRegion === "All" || loc.region === selectedRegion;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        loc.name.toLowerCase().includes(query) ||
        loc.stateCode.toLowerCase().includes(query) ||
        loc.majorCities.some((c) => c.toLowerCase().includes(query)) ||
        loc.targetKeywords.some((k) => k.toLowerCase().includes(query));
      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white min-h-screen">
      <JsonLd id="schema-breadcrumb-locations" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* HERO SECTION */}
        <section className="my-10 lg:my-14 border-b border-[#E2E8F0] pb-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold">
                USA Engineering &amp; Delivery Footprint
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight">
              Software Engineering &amp; Cloud Consultancy Across the United States
            </h1>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We engineer mission-critical Next.js web applications, scalable cloud platforms, and Salesforce CRM architectures for businesses across all major US technology corridors. With guaranteed US timezone overlap, zero vendor lock-in, and milestone-based sprint delivery.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#334155]">
              <div className="flex items-center space-x-1.5 bg-[#F1F5F9] px-3 py-1.5 rounded-[6px] border border-[#E2E8F0]">
                <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>PST, MST, CST &amp; EST Squads</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-[#F1F5F9] px-3 py-1.5 rounded-[6px] border border-[#E2E8F0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>100% Client Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-[#F1F5F9] px-3 py-1.5 rounded-[6px] border border-[#E2E8F0]">
                <Globe2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>25 Key USA State Hubs</span>
              </div>
            </div>
          </div>
        </section>

        {/* CONTROLS: SEARCH & REGIONAL FILTERS */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search state, city, or tech focus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] text-xs text-[#0F172A] placeholder-[#94A3B8] focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                aria-label="Search US locations"
              />
            </div>

            {/* Hub Count */}
            <div className="text-xs text-[#64748B] font-mono self-center">
              Displaying <strong className="text-[#0F172A]">{filteredLocations.length}</strong> of {LOCATIONS.length} USA Locations
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedRegion === region
                    ? "bg-[#0F172A] text-white shadow-2xs"
                    : "bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A]"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* LOCATIONS GRID */}
        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredLocations.map((loc: LocationData) => (
              <article
                key={loc.slug}
                className="bg-white border border-[#E2E8F0] rounded-[10px] p-6 shadow-2xs hover:shadow-md hover:border-[#2563EB] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: State Code & Region */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] font-mono text-[11px] font-semibold border border-[#BFDBFE]">
                      <MapPin className="w-3 h-3 text-[#2563EB]" />
                      <span>{loc.stateCode} · {loc.name}</span>
                    </span>

                    <span className="text-[11px] font-mono text-[#64748B]">
                      {loc.region}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-lg font-serif font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2">
                    <Link href={`/locations/${loc.slug}/`}>
                      Software Engineering in {loc.name}
                    </Link>
                  </h2>

                  {/* Subtitle / Focus */}
                  <p className="text-xs text-[#475569] line-clamp-3 leading-relaxed mb-4">
                    {loc.heroTagline}
                  </p>

                  {/* Key Cities */}
                  <div className="mb-4">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold mb-1.5">
                      Major Metros Served
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.majorCities.slice(0, 4).map((city) => (
                        <span
                          key={city}
                          className="px-2 py-0.5 rounded-[4px] bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] text-[#334155]"
                        >
                          {city}
                        </span>
                      ))}
                      {loc.majorCities.length > 4 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-[#64748B] font-mono">
                          +{loc.majorCities.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timezone Overlap */}
                  <div className="flex items-center space-x-1.5 text-[11px] text-[#64748B] bg-[#F8FAFC] p-2 rounded-[6px] border border-[#F1F5F9] mb-4">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span className="truncate">{loc.timezone}</span>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <Link
                    href={`/locations/${loc.slug}/`}
                    className="w-full py-2 px-3 rounded-[6px] bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#CBD5E1] hover:border-[#BFDBFE] text-[#0F172A] hover:text-[#2563EB] text-xs font-semibold flex items-center justify-between transition-colors group-hover:bg-[#EFF6FF] group-hover:border-[#BFDBFE] group-hover:text-[#2563EB]"
                  >
                    <span>Explore {loc.name} Capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="my-16 text-center py-12 bg-[#F8FAFC] rounded-[10px] border border-[#E2E8F0]">
            <Layers className="w-8 h-8 text-[#94A3B8] mx-auto mb-3" />
            <p className="text-sm text-[#475569] font-medium">
              No matching locations found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedRegion("All");
              }}
              className="mt-3 text-xs text-[#2563EB] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* BOTTOM VALUE BANNER */}
        <section className="my-16 bg-[#0F172A] rounded-[12px] p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1E293B] border border-[#334155] text-xs font-mono text-[#60A5FA]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nationwide Remote Engineering Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal">
              Need a Custom Engineering Pod for Your US State?
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Whether you are headquartered in Silicon Valley, Manhattan, Austin, or Chicago, we provide specialized engineering squads with dedicated US business hours overlap. Discuss your architecture, timeline, and budget with our lead specialists.
            </p>
            <div className="pt-2">
              <Link
                href="/contact/"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Request Project Scoping Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
