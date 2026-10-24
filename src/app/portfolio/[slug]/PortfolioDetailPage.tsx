import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd, SITE_CONFIG } from "@/lib/seo-config";
import CloudLogo from "@/components/brand/CloudLogo";

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
      canonical: `/portfolio/${project.slug}/`
    },
    openGraph: {
      title: `${project.title} — ${project.client}`,
      description: project.summary,
      url: `${SITE_CONFIG.url}/portfolio/${project.slug}/`,
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
    { label: "Portfolio", href: "/portfolio/" },
    { label: project.client }
  ];

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Portfolio", url: "/portfolio/" },
    { name: project.client, url: `/portfolio/${project.slug}/` }
  ]);

  return (
    <div className="py-8 bg-white text-[#0F172A] font-sans selection:bg-[#2563EB] selection:text-white">
      <JsonLd id={`schema-breadcrumb-${project.slug}`} data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Hero Header */}
        <div className="my-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-mono text-[#64748B]">
            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] font-medium">
              {project.category}
            </span>
            <span>·</span>
            <span>Client: {project.client}</span>
            <span>·</span>
            <span>Industry: {project.industry}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#0F172A] tracking-tight leading-[1.15]">
            {project.title}
          </h1>

          <p className="text-[#475569] text-base sm:text-lg mt-3 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[8px] overflow-hidden border border-[#E2E8F0] shadow-sm my-8 bg-[#F1F5F9]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1100px"
            className="object-cover"
          />
          {/* Brand Logo Badge */}
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md border border-[#E2E8F0] px-3 py-1 rounded-[4px] flex items-center space-x-2 shadow-2xs">
            <CloudLogo className="w-3.5 h-auto" size={14} />
            <span className="text-[11px] font-semibold text-[#0F172A] tracking-tight">Cloud Consultancy</span>
          </div>
        </div>

        {/* Impact Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
          {project.impactMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[8px] p-5 text-center shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-serif text-[#0F172A]">
                {metric.value}
              </div>
              <div className="text-xs font-mono text-[#64748B] mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Narrative: Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-12">
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-xl font-medium text-[#0F172A] mb-3">
                The Challenge & Pre-Existing Bottlenecks
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-xl font-medium text-[#0F172A] mb-3">
                The Engineering Architecture & Solution
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-6 shadow-sm">
              <h3 className="font-serif text-base font-medium text-[#0F172A] mb-4 pb-3 border-b border-[#E2E8F0]">
                Project Scope & Stack
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#64748B] block mb-1">
                    Industry
                  </span>
                  <span className="text-[#0F172A] font-medium">{project.industry}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-[#64748B] block mb-1">
                    Category
                  </span>
                  <span className="text-[#0F172A] font-medium">{project.category}</span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase text-[#64748B] block mb-1.5">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-[4px] bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
                <Link
                  href="/contact"
                  className="w-full py-2.5 rounded-[6px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <span>Discuss a similar project</span>
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-1.5 text-xs text-[#64748B] hover:text-[#2563EB] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all case studies</span>
            </Link>
          </div>
        </div>

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
