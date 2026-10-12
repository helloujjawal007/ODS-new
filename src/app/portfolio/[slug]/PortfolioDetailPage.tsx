import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Award 
} from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`
    },
    openGraph: {
      title: `${project.title} — ${project.client}`,
      description: project.summary,
      images: [{ url: project.image }]
    }
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Portfolio", href: "/portfolio" },
    { label: project.client }
  ];

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Portfolio", url: "/portfolio" },
    { name: project.client, url: `/portfolio/${project.slug}` }
  ]);

  return (
    <div className="py-8">
      <JsonLd id={`schema-breadcrumb-${project.slug}`} data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Header */}
        <div className="my-10 max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300">
              {project.category}
            </span>
            <span className="text-xs text-slate-400">
              Client: <strong>{project.client}</strong>
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-400">Industry: {project.industry}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-slate-300 text-base sm:text-xl mt-4 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>

        {/* Impact Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-14">
          {project.impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 text-center shadow-xl"
            >
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Narrative: Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-16">
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span className="text-rose-400">01.</span>
                <span>The Challenge & Pre-Existing Bottlenecks</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                <span className="text-cyan-400">02.</span>
                <span>The Engineering Architecture & Solution</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Technologies & Tools Deployed
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-cyan-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase mb-2">
                <Award className="w-4 h-4" />
                <span>Executive Feedback</span>
              </div>
              <blockquote className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Online Digital Solution delivered beyond our expectations. The new platform drove immediate measurable pipeline and established us as an engineering authority in our space.&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400">
                — VP of Product Engineering, <strong>{project.client}</strong>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all case studies</span>
            </Link>
          </div>
        </div>

        <CtaSection
          title="Looking for Similar Results for Your Business?"
          description="Speak directly with our principal engineers. We'll map out a clear technical architecture and guaranteed timeline."
        />
      </div>
    </div>
  );
}
