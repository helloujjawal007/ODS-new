import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Bookmark 
} from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog-data";
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
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
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
    { label: "Blog", href: "/blog" },
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
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/images/hero_digital_tech.jpg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`
    }
  };

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
  const matchedService = SERVICES.find((s) => s.slug === post.pillar);

  return (
    <div className="py-8">
      <JsonLd id={`schema-article-${post.slug}`} data={articleJsonLd} />
      <JsonLd id={`schema-breadcrumb-${post.slug}`} data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Article Header */}
        <header className="max-w-4xl mx-auto my-10 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 font-mono mb-4">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 font-bold uppercase">
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-cyan-400" />
              {post.readingTime}
            </span>
            <span>·</span>
            <span>{post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author Card */}
          <div className="flex items-center justify-between border-y border-white/10 py-4">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-cyan-400/40 shadow-lg">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm sm:text-base">
                  {post.author.name}
                </div>
                <div className="text-xs text-slate-400">{post.author.role}</div>
              </div>
            </div>

            <div className="text-xs text-slate-400 hidden sm:flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Peer-reviewed for architectural rigor</span>
            </div>
          </div>
        </header>

        {/* Article Cover Image */}
        <div className="max-w-5xl mx-auto relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-8 bg-slate-950">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        </div>

        {/* Article Layout with Sticky Table of Contents Sidebar */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
                  <Bookmark className="w-4 h-4" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-2 text-xs">
                  {post.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-slate-300 hover:text-cyan-300 transition-colors py-1 hover:translate-x-1 transform duration-150"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Pillar Service Callout */}
              {matchedService && (
                <div className="bg-gradient-to-br from-cyan-950/50 to-slate-900 border border-cyan-500/30 rounded-2xl p-6">
                  <div className="text-[11px] font-mono uppercase text-cyan-400 font-bold mb-2">
                    Core Capability Pillar
                  </div>
                  <h4 className="font-bold text-white text-sm mb-2">
                    {matchedService.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {matchedService.tagline}
                  </p>
                  <Link
                    href={`/services/${matchedService.slug}`}
                    className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>View Service Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              )}
            </div>
          </aside>

          {/* Article Main Markdown Content */}
          <article className="lg:col-span-8 order-1 lg:order-2 space-y-6 text-slate-300 leading-relaxed">
            <div className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:my-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-li:my-1">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  const headingText = paragraph.replace("## ", "").trim();
                  const matchingToc = post.toc.find(
                    (t) => t.title.toLowerCase().includes(headingText.toLowerCase().slice(0, 10))
                  );
                  const id = matchingToc ? matchingToc.id : undefined;

                  return (
                    <h2 key={index} id={id} className="text-2xl font-black text-white mt-10 mb-4 scroll-mt-28">
                      {headingText}
                    </h2>
                  );
                }

                if (paragraph.startsWith("- ")) {
                  const listItems = paragraph.split("\n").map((li) => li.replace("- ", ""));
                  return (
                    <ul key={index} className="space-y-2 my-4 list-disc list-inside text-slate-300 text-sm">
                      {listItems.map((li, lIdx) => (
                        <li key={lIdx}>{li}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={index} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Author Footer Bio */}
            <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 sm:p-8 mt-12 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shrink-0 shadow-lg">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-extrabold text-white text-base">
                  Written by {post.author.name}
                </div>
                <div className="text-xs text-cyan-400 font-mono mb-2">
                  {post.author.role}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Principal architect specializing in enterprise Next.js App Router platforms, programmatic SEO cluster architecture, and high-frequency Core Web Vitals telemetry.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Related Posts */}
        <section className="my-20 border-t border-white/10 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">
              Continue Reading
            </h3>
            <Link
              href="/blog"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.slug}
                href={`/blog/${rPost.slug}`}
                className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
              >
                <div className="text-[11px] font-mono text-cyan-400 uppercase mb-2">
                  {rPost.category} · {rPost.readingTime}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {rPost.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{rPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <CtaSection
          title="Looking to Implement This in Your Stack?"
          description="Schedule a technical scope review with our author. We'll audit your repository and outline an execution plan."
        />
      </div>
    </div>
  );
}
