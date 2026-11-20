import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/seo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/static/immutable/media/",
          "/*.woff2$",
          "/*.woff$",
          "/*?*"
        ]
      }
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`
  };
}
