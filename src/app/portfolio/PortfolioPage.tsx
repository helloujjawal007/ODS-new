import { Metadata } from "next";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import PortfolioFilterList from "@/components/portfolio/PortfolioFilterList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description: "Explore representative client work and measurable outcomes across Next.js platforms, custom Shopify stores, and native mobile apps.",
  alternates: {
    canonical: "/portfolio"
  },
  openGraph: {
    title: "Selected Work & Case Studies",
    description: "Explore representative client work and measurable outcomes across Next.js platforms, custom Shopify stores, and native mobile apps.",
    url: `${SITE_CONFIG.url}/portfolio`
  }
};

export default function PortfolioPage() {
  const breadcrumbs = [{ label: "Selected Work" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Work", url: "/portfolio" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-portfolio" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="max-w-3xl my-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Selected Work
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            Recent Projects and Case Studies
          </h1>
          <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
            A selection of web platforms, custom e-commerce storefronts, and mobile applications engineered by our team.
          </p>
        </div>

        {/* Interactive Filter Component */}
        <PortfolioFilterList projects={PORTFOLIO_PROJECTS} />

        {/* Closing CTA */}
        <CtaSection
          title="Have a project in mind? Send us the details and we’ll reply within a day."
          description="We build websites, Shopify stores and apps for small and mid-size businesses. Based in Kolkata, working with clients worldwide."
          primaryCtaText="Tell us about your project"
          primaryCtaHref="/contact"
        />
      </div>
    </div>
  );
}
