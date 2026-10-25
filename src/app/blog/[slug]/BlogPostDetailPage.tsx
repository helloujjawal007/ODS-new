import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  ArrowRight, 
  Bookmark 
} from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { SERVICES } from "@/lib/services-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, SITE_CONFIG } from "@/lib/seo-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author?.name || "Anjali" }],
    alternates: {
      canonical: `/blog/${post.slug}/`
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "Anjali"],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Blog", href: "/blog/" },
    { label: post.title }
  ];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `${SITE_CONFIG.url}${post.coverImage}`,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Anjali",
      "jobTitle": post.author?.role || "Lead Software & Cloud Solutions Architect",
      "worksFor": {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.url
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/brand/cloud-consultancy-icon.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}/`
    }
  };

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Blog", url: "/blog/" },
    { name: post.title, url: `/blog/${post.slug}/` }
  ]);

  const relatedPosts = getRelatedPosts(post, 3);
  const matchedService = SERVICES.find((s) => s.slug === post.pillar);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id={`schema-article-${post.slug}`} data={articleJsonLd} />
      <JsonLd id={`schema-breadcrumb-${post.slug}`} data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Article Header */}
        <header className="max-w-3xl mx-auto my-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] font-mono mb-3">
            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
              {post.category}
            </span>
            <span>·</span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-[#64748B]" />
              {post.readingTime}
            </span>
            <span>·</span>
            <span>{post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.18] mb-4">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-6">
            {post.excerpt}
          </p>

          {/* Editorial Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-b border-[#E2E8F0] py-3.5 text-xs">
            <div className="flex items-center space-x-2.5 text-[#475569]">
              <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                A
              </div>
              <div>
                <span className="font-semibold text-[#0F172A]">By {post.author?.name || "Anjali"}</span>
                <span className="text-[#64748B] text-[11px] ml-1.5 hidden sm:inline">· {post.author?.role || "Lead Solutions Architect"}</span>
              </div>
              <span className="text-[#94A3B8]">·</span>
              <span className="font-mono text-[#64748B]">{post.publishedAt}</span>
              <span className="text-[#94A3B8]">·</span>
              <span className="font-mono text-[#64748B]">{post.readingTime}</span>
            </div>

            <div className="text-[11px] text-[#2563EB] font-mono font-medium bg-[#EFF6FF] px-2 py-0.5 rounded-[4px] border border-[#BFDBFE]">
              Architecture Note
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="max-w-4xl mx-auto relative aspect-[16/9] rounded-[8px] overflow-hidden border border-[#E2E8F0] shadow-sm my-8 bg-[#F1F5F9]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover"
          />
        </div>

        {/* Article Layout with Sidebar */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          {/* Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 space-y-5">
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-sm">
                <div className="flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-[#0F172A] font-semibold mb-3">
                  <Bookmark className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Sections</span>
                </div>
                <nav className="space-y-1.5 text-xs">
                  {post.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-[#64748B] hover:text-[#2563EB] transition-colors py-0.5"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {post.pillar === "salesforce" ? (
                <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">
                    Specialized Practice
                  </span>
                  <h4 className="font-serif text-sm font-medium text-[#0F172A] mb-1">
                    Salesforce Engineering & Architecture
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3">
                    Certified Apex, LWC, multi-cloud API sync, and zero-governor-limit enterprise CRM infrastructure.
                  </p>
                  <Link
                    href="/salesforce/"
                    className="inline-flex items-center text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline"
                  >
                    <span>Salesforce Practice details</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              ) : matchedService ? (
                <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-sm">
                  <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-1">
                    Related Service
                  </span>
                  <h4 className="font-serif text-sm font-medium text-[#0F172A] mb-1">
                    {matchedService.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3">
                    {matchedService.tagline}
                  </p>
                  <Link
                    href={`/services/${matchedService.slug}/`}
                    className="inline-flex items-center text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline"
                  >
                    <span>{matchedService.shortTitle} details</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              ) : null}
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-5 text-[#334155] leading-relaxed text-sm sm:text-base font-sans">
            {post.content.split("\n\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();

              if (trimmed.startsWith("![")) {
                const match = trimmed.match(/!\[([^\]]*)\]\(([^)"\s]+)(?:\s+"([^"]*)")?\)/);
                if (match) {
                  const [, alt, src, caption] = match;
                  return (
                    <figure
                      key={index}
                      className="my-8 rounded-[8px] overflow-hidden border border-[#E2E8F0] shadow-sm bg-[#F8FAFC]"
                    >
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={src.trim()}
                          alt={alt || post.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 800px"
                          className="object-cover"
                        />
                      </div>
                      {caption && (
                        <figcaption className="px-4 py-2.5 text-xs text-[#475569] bg-white border-t border-[#E2E8F0] flex items-center justify-between">
                          <span className="font-medium">{caption}</span>
                          <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider">
                            Cloud Consultancy Engineering Note
                          </span>
                        </figcaption>
                      )}
                    </figure>
                  );
                }
              }

              if (paragraph.startsWith("## ")) {
                const headingText = paragraph.replace("## ", "").trim();
                const matchingToc = post.toc.find(
                  (t) => t.title.toLowerCase().includes(headingText.toLowerCase().slice(0, 10))
                );
                const id = matchingToc ? matchingToc.id : undefined;

                return (
                  <h2
                    key={index}
                    id={id}
                    className="font-serif text-2xl font-normal text-[#0F172A] pt-6 pb-1 border-b border-[#E2E8F0] scroll-mt-28"
                  >
                    {headingText}
                  </h2>
                );
              }

              if (paragraph.startsWith("```")) {
                const lines = paragraph.split("\n");
                const codeBody = lines.slice(1, -1).join("\n");
                return (
                  <pre
                    key={index}
                    className="bg-[#0F172A] text-[#F8FAFC] p-4 rounded-[6px] font-mono text-xs overflow-x-auto border border-[#1E293B] my-4"
                  >
                    <code>{codeBody}</code>
                  </pre>
                );
              }

              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n- ").map((item) => item.replace(/^- /, ""));
                return (
                  <ul key={index} className="space-y-1.5 my-3 pl-2 text-xs sm:text-sm text-[#475569]">
                    {items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start space-x-2">
                        <span className="text-[#2563EB] mt-1 font-bold">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ")) {
                const items = paragraph.split("\n").filter((l) => l.trim().length > 0);
                return (
                  <ol key={index} className="space-y-1.5 my-3 pl-2 text-xs sm:text-sm text-[#475569]">
                    {items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start space-x-2">
                        <span className="font-mono text-[#2563EB] font-bold text-xs">{iIdx + 1}.</span>
                        <span>{it.replace(/^\d+\.\s*/, "")}</span>
                      </li>
                    ))}
                  </ol>
                );
              }

              return (
                <p key={index} className="text-[#334155] text-xs sm:text-sm leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </article>
        </div>

        {/* Author Bio Box - E-E-A-T Excellence */}
        <div className="max-w-3xl mx-auto my-12 p-5 sm:p-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
            A
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-sm text-[#0F172A]">Written by {post.author?.name || "Anjali"}</h4>
              <span className="text-[10px] font-mono bg-[#EFF6FF] text-[#2563EB] px-2 py-0.5 rounded-[4px] border border-[#BFDBFE]">
                {post.author?.role || "Lead Solutions Architect"}
              </span>
            </div>
            <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
              Anjali is a Lead Solutions Architect at Cloud Consultancy specializing in modern Next.js 16 App Router architectures, Core Web Vitals optimization, and enterprise Salesforce CRM integrations.
            </p>
          </div>
        </div>

        {/* Related Articles - Card Style with Distinct Images */}
        {relatedPosts.length > 0 && (
          <section className="my-16 border-t border-[#E2E8F0] pt-14 max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#2563EB] font-semibold mb-1">
                  Contextual Field Notes
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#0F172A]">
                  Related {post.category} &amp; Architecture Notes
                </h3>
              </div>
              <Link
                href="/blog/"
                className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
              >
                <span>View all engineering notes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}/`}
                  className="group bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#2563EB] hover:shadow-md transition-all"
                >
                  <div>
                    <div className="relative aspect-[16/10] bg-[#F1F5F9] overflow-hidden">
                      <Image
                        src={rPost.coverImage}
                        alt={rPost.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 360px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2 py-0.5 rounded-[4px] text-[10px] font-mono uppercase font-semibold text-[#0F172A] shadow-2xs">
                        {rPost.category}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-center space-x-2 text-[11px] font-mono text-[#64748B] mb-2">
                        <span className="text-[#0F172A] font-medium">By {rPost.author?.name || "Anjali"}</span>
                        <span>·</span>
                        <span>{rPost.readingTime}</span>
                      </div>

                      <h4 className="font-serif text-base font-medium text-[#0F172A] mb-2 leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-2">
                        {rPost.title}
                      </h4>

                      <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                        {rPost.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-[11px]">
                    <span className="font-mono text-[#64748B]">{rPost.publishedAt}</span>
                    <span className="font-semibold text-[#2563EB] group-hover:underline inline-flex items-center">
                      <span>Read note</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <CtaSection
          title="Have a project in mind? Send us the details and we’ll reply within a day."
          description="We engineer scalable cloud architecture, custom web platforms, and Salesforce CRM systems for growing companies and global enterprises."
          primaryCtaText="Tell us about your project"
          primaryCtaHref="/contact/"
        />
      </div>
    </div>
  );
}
