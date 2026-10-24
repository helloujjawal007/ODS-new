import { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import BlogFilterList from "@/components/blog/BlogFilterList";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG, getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Engineering Notes & Insights",
  description: "Notes on Next.js performance, Shopify Liquid engineering, and Core Web Vitals optimization.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Engineering Notes & Insights",
    description: "Notes on Next.js performance, Shopify Liquid engineering, and Core Web Vitals optimization.",
    url: `${SITE_CONFIG.url}/blog`
  }
};

export default function BlogHomePage() {
  const breadcrumbs = [{ label: "Engineering Notes" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Blog", url: "/blog" }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id="schema-breadcrumb-blog" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <div className="max-w-3xl my-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold block mb-2">
            Engineering Notes
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            Notes on web performance, Shopify and SEO.
          </h1>
          <p className="text-[#475569] text-sm sm:text-base mt-3 leading-relaxed max-w-xl">
            Practical breakdowns of modern Next.js architectures, Core Web Vitals remediation, and real-world Shopify development.
          </p>
        </div>

        {/* Client Interactive Filter & Search Component */}
        <BlogFilterList posts={BLOG_POSTS} />

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
