import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Layers, 
  CheckCircle2 
} from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Services & Capabilities Hub",
  description: "Explore our full suite of digital engineering capabilities: custom Next.js web applications, Shopify & BigCommerce stores, technical SEO audits, native Android/iOS mobile apps, and enterprise CRM solutions.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesHubPage() {
  const breadcrumbItems = [{ label: "Services Hub" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Services", url: "/services" }
  ]);

  return (
    <div className="py-8">
      <JsonLd id="schema-breadcrumb-services" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Enterprise Digital Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Everything Your Business Needs to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Scale Digitally.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            From ground-up web platforms with guaranteed sub-second load times to aggressive organic search rankings and mission-critical CRM automation pipelines.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="bg-slate-900/60 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Service Visual Preview */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-cyan-300">
                  {service.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-6">
                    {service.tagline}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6 text-xs text-slate-300">
                    {service.deliverables.slice(0, 2).map((del, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Pricing</span>
                    <span className="text-xs font-bold text-slate-200">
                      From {service.pricingModel.startingAt}
                    </span>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 text-xs font-bold transition-all flex items-center space-x-1"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Process Teaser */}
        <div className="my-20 bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a Custom Hybrid Engagement?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Most of our clients pair Web Development with Technical SEO, or Cross-Platform Mobile Apps with CRM integration. We craft unified multi-service scopes with dedicated cross-functional squads.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm"
            >
              Configure Scope in Estimator
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-white/10"
            >
              Talk to a Solutions Architect
            </Link>
          </div>
        </div>

        {/* Closing CTA */}
        <CtaSection />
      </div>
    </div>
  );
}
