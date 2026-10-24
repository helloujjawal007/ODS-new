"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blog-data";
import CloudLogo from "@/components/brand/CloudLogo";

interface BlogFilterListProps {
  posts: BlogPost[];
}

export default function BlogFilterList({ posts }: BlogFilterListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Web Development",
    "E-Commerce",
    "Plugins & Extensions",
    "Technical SEO",
    "Mobile Engineering",
    "Enterprise CRM"
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find((p) => p.featured) || posts[0];

  return (
    <div className="font-sans">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-8 bg-white border border-[#E2E8F0] rounded-[8px] p-3.5 shadow-sm">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-[6px] text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#2563EB] text-white shadow-sm"
                  : "bg-[#F8FAFC] text-[#475569] hover:text-[#0F172A] border border-[#CBD5E1] hover:border-[#94A3B8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <label htmlFor="blog-search-input" className="sr-only">
            Search articles
          </label>
          <Search className="w-3.5 h-3.5 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="blog-search-input"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] pl-8 pr-3 py-1.5 text-xs text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
          />
        </div>
      </div>

      {/* Featured Post Banner */}
      {selectedCategory === "All" && !searchTerm && featuredPost && (
        <div className="my-10">
          <div className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 hover:border-[#2563EB] transition-all">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[280px] bg-[#F1F5F9]">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2.5 py-1 rounded-[4px] flex items-center space-x-1.5 shadow-2xs">
                <CloudLogo className="w-3.5 h-auto" size={14} />
                <span className="text-[10px] font-semibold text-[#0F172A]">Cloud Consultancy Research</span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs text-[#64748B] font-mono mb-2">
                  <span className="text-[#2563EB] font-semibold">{featuredPost.category}</span>
                  <span>·</span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-medium text-[#0F172A] mb-3 leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#64748B]">{featuredPost.publishedAt}</span>
                <Link
                  href={`/blog/${featuredPost.slug}/`}
                  className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredPosts.map((post) => (
          <div
            key={post.slug}
            className="bg-white border border-[#E2E8F0] rounded-[8px] overflow-hidden flex flex-col justify-between shadow-sm hover:border-[#2563EB] hover:shadow-md transition-all"
          >
            <div className="relative aspect-[16/10] bg-[#F1F5F9]">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2.5 py-0.5 rounded-[4px] text-[10px] font-mono uppercase font-medium text-[#0F172A] shadow-2xs">
                {post.category}
              </div>
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs border border-[#E2E8F0] px-2 py-0.5 rounded-[4px] flex items-center space-x-1.5 shadow-2xs">
                <CloudLogo className="w-3 h-auto" size={12} />
                <span className="text-[9px] font-semibold text-[#0F172A]">Cloud Consultancy</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-[11px] font-mono text-[#64748B] mb-2">
                  <span>{post.publishedAt}</span>
                  <span>·</span>
                  <span>{post.readingTime}</span>
                </div>

                <h3 className="font-serif text-lg font-medium text-[#0F172A] mb-2 leading-snug">
                  {post.title}
                </h3>

                <p className="text-[#475569] text-xs leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Read full breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
