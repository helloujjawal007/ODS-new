import { Metadata } from "next";
import Image from "next/image";
import { 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Zap, 
  Compass 
} from "lucide-react";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import CtaSection from "@/components/sections/CtaSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Online Digital Solution. Headquartered in Kolkata, India, we engineer high-performance web applications, custom Shopify stores, and growth platforms 100% online for clients worldwide.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Evelyn Reed",
      role: "Founder & Chief Executive Officer",
      bio: "Ex-Staff Architect with 14+ years scaling high-traffic cloud platforms and organic search growth flywheels for Fortune 500 brands.",
      image: "/images/founder_portrait.jpg",
      credentials: "MS Computer Science · Certified Enterprise Architect"
    },
    {
      name: "Marcus Vance",
      role: "VP of Engineering & Lead Solutions Architect",
      bio: "Full-stack pioneer specializing in Next.js App Router performance, distributed microservices, and mobile system design.",
      image: "/images/cto_portrait.jpg",
      credentials: "BS Software Engineering · Salesforce Application Architect"
    }
  ];

  const values = [
    {
      title: "Radical Transparency",
      desc: "No vanity metrics or inflated hours. We provide fixed-price roadmaps, direct codebase access, and honest feasibility analysis.",
      icon: ShieldCheck
    },
    {
      title: "Core Web Vitals Obsession",
      desc: "Speed is a core brand attribute. We never ship code that fails Google's LCP, CLS, or INP thresholds.",
      icon: Zap
    },
    {
      title: "Zero Vendor Lock-In",
      desc: "You retain 100% intellectual property ownership of your repositories, Figma designs, and deployment configs from day one.",
      icon: Target
    },
    {
      title: "Engineered for Long-Term Growth",
      desc: "We don't build disposable templates. Every system is structured to compound organic search visibility and handle high transaction volumes.",
      icon: Compass
    }
  ];

  const milestones = [
    { year: "2020", title: "Agency Inception", desc: "Founded with a mission to bridge high-end engineering with technical SEO growth." },
    { year: "2022", title: "Mobile & CRM Expansion", desc: "Launched dedicated native mobile and Salesforce enterprise integration practices." },
    { year: "2024", title: "Global Footprint", desc: "Delivered 120+ platforms with an average client organic traffic surge of +380%." },
    { year: "2026", title: "Next-Gen Edge Standards", desc: "Pioneering Next.js 16 App Router edge-native deployments and AI search integration." }
  ];

  const breadcrumbs = [{ label: "About Our Team" }];
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "About", url: "/about" }
  ]);

  return (
    <div className="py-8">
      <JsonLd id="schema-breadcrumb-about" data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Editorial */}
        <section className="my-12 max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Team Behind The Code</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            We Believe Engineering Excellence Is The Ultimate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
              Competitive Moat.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl mt-6 leading-relaxed">
            Founded in Kolkata by senior software architects, <strong>Online Digital Solution</strong> was created to deliver Tier-1 digital craftsmanship 100% online. We bridge the gap between world-class engineering standards and transparent cost structures, partnering directly with founders and enterprises globally with seamless time-zone collaboration.
          </p>
        </section>

        {/* Studio Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-12 bg-slate-950">
          <Image
            src="/images/about_team_studio.jpg"
            alt="Online Digital Solution Engineering Hub & Remote Delivery Team"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-md">
            <div>
              <span className="font-bold text-white block">Online Digital Solution Hub</span>
              <span className="text-slate-400">Kolkata, India · 100% Online Global Operations</span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 font-mono text-[11px]">
              Global Remote Operations
            </span>
          </div>
        </div>

        {/* Core Principles / Values Grid */}
        <section className="my-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Principles That Guide Our Engineering
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              How we approach every pull request, sprint backlog, and client deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leadership Team Profiles */}
        <section className="my-24 bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-14">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider text-cyan-400 font-bold block mb-2">
              Senior Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Directly Led By Senior Practitioners
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              You won&apos;t be passed down to inexperienced junior developers. Every engagement is steered by proven technical leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((person, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 hover:border-cyan-500/30 transition-all"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shrink-0 shadow-xl">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{person.name}</h3>
                  <div className="text-xs text-cyan-400 font-mono mb-2">{person.role}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{person.bio}</p>
                  <span className="text-[11px] text-slate-400 font-mono block">
                    {person.credentials}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="my-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Journey & Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="text-4xl font-black text-cyan-500/20 font-mono mb-3">
                  {m.year}
                </div>
                <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <CtaSection
          title="Ready to Partner with Our Leadership?"
          description="Schedule a technical consultation to discuss your product architecture and organic growth goals."
        />
      </div>
    </div>
  );
}
