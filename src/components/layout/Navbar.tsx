"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Code2,
  TrendingUp,
  Smartphone,
  Workflow,
  Database,
  Palette,
  ShoppingBag,
  Puzzle,
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close menus on path change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  const servicesMenu = [
    {
      title: "Website Development",
      desc: "Next.js 16, SSR, Headless CMS, Lighthouse 99+",
      href: "/services/website-development",
      icon: Code2,
      color: "text-cyan-400 bg-cyan-950/50"
    },
    {
      title: "Shopify & BigCommerce Stores",
      desc: "Shopify Plus, Liquid OS 2.0, BigCommerce MSF",
      href: "/services/shopify-bigcommerce-development",
      icon: ShoppingBag,
      color: "text-emerald-400 bg-emerald-950/50"
    },
    {
      title: "Technical SEO & Growth",
      desc: "Topical clusters, schema.org, Core Web Vitals",
      href: "/services/seo",
      icon: TrendingUp,
      color: "text-emerald-400 bg-emerald-950/50"
    },
    {
      title: "Android App Development",
      desc: "Native Kotlin, Jetpack Compose, Play Store",
      href: "/services/android-app-development",
      icon: Smartphone,
      color: "text-emerald-400 bg-emerald-950/50"
    },
    {
      title: "iOS App Development",
      desc: "Native Swift 6, SwiftUI, Dynamic Island",
      href: "/services/ios-app-development",
      icon: Smartphone,
      color: "text-purple-400 bg-purple-950/50"
    },
    {
      title: "Cross-Platform Apps",
      desc: "Flutter & React Native single-codebase",
      href: "/services/cross-platform-app-development",
      icon: Sparkles,
      color: "text-cyan-400 bg-cyan-950/50"
    },
    {
      title: "CRM Integration",
      desc: "HubSpot, Zoho, multi-system resilient sync",
      href: "/services/crm-integration",
      icon: Database,
      color: "text-blue-400 bg-blue-950/50"
    },
    {
      title: "Salesforce Support",
      desc: "Certified LWC, Apex triggers, Flow automation",
      href: "/services/salesforce-support",
      icon: Workflow,
      color: "text-blue-400 bg-blue-950/50"
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Figma tokens, high-fidelity prototypes, user testing",
      href: "/services/ui-ux-design",
      icon: Palette,
      color: "text-amber-400 bg-amber-950/50"
    },
    {
      title: "Plugins & Extensions",
      desc: "Chrome extensions, Shopify apps, custom add-ons",
      href: "/services/plugins-extensions-development",
      icon: Puzzle,
      color: "text-purple-400 bg-purple-950/50"
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 flex items-center justify-center p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                  ODS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                Online Digital Solution
              </span>
              <span className="hidden sm:block text-[10px] text-cyan-400/90 font-mono tracking-wider">
                100% Online Global Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onFocus={() => setServicesOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setServicesOpen(false);
                }
              }}
            >
              <Link
                href="/services"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${pathname.startsWith("/services")
                  ? "text-cyan-400 bg-white/5"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                />
              </Link>

              {/* Mega Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full -left-20 w-[640px] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl grid grid-cols-2 gap-3">
                    <div className="col-span-2 pb-2 mb-1 border-b border-white/10 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Specialized Digital Capabilities
                      </span>
                      <Link
                        href="/services"
                        className="text-xs text-cyan-400 hover:underline flex items-center font-medium"
                      >
                        All Services Hub <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>

                    {servicesMenu.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group"
                        >
                          <div className={`p-2 rounded-lg ${item.color} mt-0.5`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                    ? "text-cyan-400 bg-white/5"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/pricing"
              className="text-xs text-slate-300 hover:text-cyan-400 font-medium px-3 py-1.5 rounded-full border border-slate-800 hover:border-cyan-500/30 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Project Estimator</span>
            </Link>

            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-indigo-600 group-hover:from-cyan-500 group-hover:to-indigo-500 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-[10px] group-hover:bg-opacity-0 font-semibold text-white flex items-center space-x-1.5">
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden space-x-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-navigation-menu" className="lg:hidden bg-slate-950/95 border-b border-white/10 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <div className="py-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 mb-2">
                Services
              </div>
              <div className="grid grid-cols-1 gap-1">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-white/5 hover:text-cyan-300"
                  >
                    <span className="text-cyan-400 font-mono text-xs">/</span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 mb-2">
                Company & Resources
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col space-y-2">
              <Link
                href="/contact"
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/pricing"
                className="w-full text-center py-2 rounded-xl bg-slate-900 text-slate-300 font-medium text-sm border border-white/10"
              >
                Instant Project Cost Estimator
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
