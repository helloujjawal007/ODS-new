import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Web development, Shopify & BigCommerce stores, technical SEO, mobile apps, and Salesforce integration. Clear scopes and fixed milestones.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesHubPage() {
  const breadcrumbItems = [{ label: "Services" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Services", url: "/services" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-services" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="max-w-3xl my-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Services & Capabilities
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            Engineering capabilities for growing businesses.
          </h1>
          <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
            From modern Next.js websites and custom Shopify stores to mobile apps and enterprise Salesforce integrations. Handled directly by senior engineers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all"
            >
              {/* Visual Preview */}
              <div className="relative aspect-[16/9] bg-[#F1F5F9]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono uppercase font-medium text-[#0F172A] shadow-2xs">
                  {service.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-xl font-medium text-[#0F172A] mb-2 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed mb-4">
                    {service.tagline}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-6 text-xs text-[#475569]">
                    {service.deliverables.slice(0, 2).map((del, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#64748B] font-mono uppercase block">Pricing</span>
                    <span className="text-xs font-mono font-semibold text-[#0F172A]">
                      From {service.pricingModel.startingAt}
                    </span>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center space-x-1"
                    aria-label={`${service.shortTitle} pricing & details`}
                  >
                    <span>{service.shortTitle} details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

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
