import type { MetadataRoute } from "next";

const siteUrl = "https://thevuemedia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      lastModified: new Date("2026-02-23T00:00:00+09:00"),
    },
    {
      path: "/blog",
      lastModified: new Date("2026-02-23T00:00:00+09:00"),
    },
    {
      path: "/blog/chatgpt-brand-recommendation",
      lastModified: new Date("2026-02-05T09:00:00+09:00"),
    },
    {
      path: "/blog/youtube-shorts-aio-correlation",
      lastModified: new Date("2026-01-28T09:00:00+09:00"),
    },
    {
      path: "/blog/google-sge-strategy-2026",
      lastModified: new Date("2026-02-10T09:00:00+09:00"),
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: "weekly",
    priority: route.path === "" ? 1 : 0.8,
  }));
}

