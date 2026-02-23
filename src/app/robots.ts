import type { MetadataRoute } from "next";

const siteUrl = "https://thevuemedia.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/static/", "/private/"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: "thevuemedia.com",
  };
}

