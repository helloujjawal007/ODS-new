"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloudLogo from "@/components/brand/CloudLogo";
import {
  Menu,
  X,
  ChevronDown,
  Code2,
  TrendingUp,
  Smartphone,
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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Salesforce", href: "/salesforce/" },
    { label: "Work", href: "/portfolio/" },
    { label: "Process", href: "/process/" },
    { label: "Blog", href: "/blog/" },
    { label: "About", href: "/about/" }
  ];

  const servicesMenu = [
    {
      title: "Website Development",
      desc: "Fast Next.js websites and headless CMS architectures",
      href: "/services/website-development/",
      icon: Code2
    },
    {
      title: "Shopify & BigCommerce",
      desc: "Custom storefronts, OS 2.0 themes and multi-storefronts",
      href: "/services/shopify-bigcommerce-development/",
      icon: ShoppingBag
    },
    {
      title: "Technical SEO & Speed",
      desc: "Topical clusters, Core Web Vitals, and structured data",
      href: "/services/seo/",
      icon: TrendingUp
    },
    {
      title: "iOS App Development",
      desc: "Native Swift 6 & SwiftUI apps",
      href: "/services/ios-app-development/",
      icon: Smartphone
    },
    {
      title: "Android App Development",
      desc: "Native Kotlin & Jetpack Compose apps",
      href: "/services/android-app-development/",
      icon: Smartphone
    },
    {
      title: "Cross-Platform Apps",
      desc: "Flutter & React Native single-codebase builds",
      href: "/services/cross-platform-app-development/",
      icon: Code2
    },
    {
      title: "UI/UX & Design Systems",
      desc: "Figma component tokens and user testing",
      href: "/services/ui-ux-design/",
      icon: Palette
    },
    {
      title: "Plugins & Extensions",
      desc: "Custom Chrome extensions and Shopify apps",
      href: "/services/plugins-extensions-development/",
      icon: Puzzle
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs py-3.5"
          : "bg-white/90 backdrop-blur-sm py-4 border-b border-[#E2E8F0]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with official brand icon */}
          <Link href="/" className="flex items-center space-x-3 group">
            <CloudLogo className="w-9 h-auto" size={36} priority />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-medium text-[#0F172A] leading-tight group-hover:text-[#2563EB] transition-colors">
                Cloud Consultancy
              </span>
              <span className="hidden sm:block text-[11px] text-[#64748B] font-sans tracking-normal">
                Worldwide Engineering & Cloud Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 font-sans text-sm">
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
                href="/services/"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`flex items-center space-x-1 px-3 py-2 rounded-[6px] font-medium transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-[#2563EB] font-semibold"
                    : "text-[#0F172A] hover:text-[#2563EB]"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 ml-0.5 text-[#64748B] transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#2563EB]" : ""
                  }`}
                />
              </Link>

              {/* Services Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute top-full -left-12 w-[620px] pt-2">
                  <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 shadow-xl grid grid-cols-2 gap-2.5">
                    <div className="col-span-2 pb-2 mb-1 border-b border-[#E2E8F0] flex items-center justify-between">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-medium">
                        Services & Disciplines
                      </span>
                      <Link
                        href="/services/"
                        className="text-xs text-[#2563EB] hover:underline flex items-center font-medium"
                      >
                        All services overview <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>

                    {servicesMenu.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-3 p-2 rounded-[6px] hover:bg-[#F8FAFC] transition-colors group"
                        >
                          <div className="p-1.5 rounded-[6px] bg-[#EFF6FF] text-[#2563EB] mt-0.5 border border-[#BFDBFE]/60">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}

                    {/* Dedicated Salesforce Hub Callout */}
                    <div className="col-span-2 mt-2 pt-2.5 border-t border-[#E2E8F0] flex items-center justify-between bg-[#F8FAFC] px-3 py-2 rounded-[6px]">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#00A1E0]" />
                        <span className="text-xs font-medium text-[#0F172A]">Looking for Enterprise Salesforce Architecture?</span>
                      </div>
                      <Link
                        href="/salesforce/"
                        className="text-xs text-[#00A1E0] hover:text-[#0081B4] hover:underline font-semibold flex items-center"
                      >
                        Visit Salesforce Hub <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
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
                  className={`px-3 py-2 rounded-[6px] transition-colors ${
                    isActive
                      ? "text-[#2563EB] font-semibold"
                      : "text-[#0F172A] hover:text-[#2563EB]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTA - Single Clear Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact/"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold px-4 py-2.5 rounded-[6px] transition-all inline-flex items-center space-x-1.5 shadow-sm hover:shadow-md"
            >
              <span>Tell us about your project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#0F172A] hover:text-[#2563EB] rounded-[6px] border border-[#CBD5E1]"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="lg:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto shadow-lg"
        >
          <div className="flex flex-col space-y-2">
            <div className="py-2 border-b border-[#E2E8F0]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#64748B] px-3 mb-2 font-medium">
                Services
              </div>
              <div className="grid grid-cols-1 gap-1">
                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-3 py-2 rounded-[6px] text-xs font-medium text-[#0F172A] hover:bg-[#F8FAFC]"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#64748B]" />
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#0F172A] hover:text-[#2563EB]"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3">
              <Link
                href="/contact/"
                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold py-3 px-4 rounded-[6px] flex items-center justify-center space-x-2 transition-colors shadow-sm"
              >
                <span>Tell us about your project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
