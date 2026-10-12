import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import PortfolioFilterList from "@/components/portfolio/PortfolioFilterList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Client Case Studies & Portfolio",
  description: "Explore proven engineering case studies and ROI metrics across Next.js platforms, Shopify Plus stores, native iOS/Android apps, and enterprise systems.",
  alternates: {
    canonical: "/portfolio"
  },
  openGraph: {
    title: "Client Case Studies & Portfolio",
    description: "Explore proven engineering case studies and ROI metrics across Next.js platforms, Shopify Plus stores, native iOS/Android apps, and enterprise systems.",
    url: `${SITE_CONFIG.url}/portfolio`
  }
};

export default function PortfolioPage() {
  const breadcrumbs = [{ label: "Portfolio & Case Studies" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Portfolio", url: "/portfolio" }
  ]);

  return (
    <div className="py-8">
      <JsonLd id="schema-breadcrumb-portfolio" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Proven Engineering Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Client Success & Real-World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Measurable Impact.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            Every product we engineer is built with one metric in mind: business ROI. Explore our recent work across Next.js platforms, native mobile applications, SEO dominance, and CRM integrations.
          </p>
        </div>

        {/* Client Interactive Filter Component */}
        <PortfolioFilterList projects={PORTFOLIO_PROJECTS} />

        {/* Closing CTA */}
        <CtaSection
          title="Have a Project in Mind?"
          description="Let's engineer an outstanding solution tailored to your operational KPIs. Speak with our lead solutions architect today."
        />
      </div>
    </div>
  );
}
