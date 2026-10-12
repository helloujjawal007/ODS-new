import { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import BlogFilterList from "@/components/blog/BlogFilterList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights",
  description: "Architectural breakdowns, Core Web Vitals telemetry benchmarks, and technical SEO playbooks written by senior solutions engineers.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights",
    description: "Architectural breakdowns, Core Web Vitals telemetry benchmarks, and technical SEO playbooks written by senior solutions engineers.",
    url: `${SITE_CONFIG.url}/blog`
  }
};

export default function BlogHomePage() {
  const breadcrumbs = [{ label: "Engineering Blog & Insights" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Blog", url: "/blog" }
  ]);

  return (
    <div className="py-8">
      <JsonLd id="schema-breadcrumb-blog" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto my-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture & Organic Strategy</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            The Digital Engineering & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Growth Intelligence Hub.
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            In-depth technical guides, Core Web Vitals telemetry benchmarks, and programmatic SEO playbooks written by senior architects.
          </p>
        </div>

        {/* Client Interactive Filter & Search Component */}
        <BlogFilterList posts={BLOG_POSTS} />

        {/* Closing CTA */}
        <CtaSection
          title="Looking to Implement These Architectures?"
          description="Speak with the authors of these guides. We build high-performance systems for growth-oriented companies."
        />
      </div>
    </div>
  );
}
