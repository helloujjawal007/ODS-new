import { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { LOCATIONS } from "@/lib/locations-data";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const currentDate = new Date().toISOString();

  // Core static pages with trailing slash
  const staticRoutes = [
    "",
    "/services/",
    "/salesforce/",
    "/locations/",
    "/portfolio/",
    "/process/",
    "/blog/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/terms/"
  ].map((route) => ({
    url: route === "" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/privacy/" || route === "/terms/" ? 0.5 : 0.85
  }));

  // Service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  // Portfolio case study routes
  const portfolioRoutes = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}/`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85
  }));

  // Location routes with staggered creation dates (26 Oct 2026 to 21 Nov 2026)
  const locationRoutes = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}/`,
    lastModified: loc.createdDate,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  // Helper to parse blog post publishedAt to ISO string
  const parseBlogDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return isNaN(d.getTime()) ? currentDate : d.toISOString();
    } catch {
      return currentDate;
    }
  };

  // Blog routes
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: parseBlogDate(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...locationRoutes,
    ...blogRoutes
  ];
}
