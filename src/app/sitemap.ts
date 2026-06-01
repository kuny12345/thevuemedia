import type { MetadataRoute } from "next";
import { posts, postUrl } from "@/lib/posts";

const siteUrl = "https://thevuemedia.com";

// Static (non-blog) routes. Keep in sync with app/ landing pages.
const staticRoutes: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-06-01T00:00:00+09:00", priority: 1 },
  { path: "/aio", lastModified: "2026-06-01T00:00:00+09:00", priority: 0.9 },
  { path: "/hospital-marketing", lastModified: "2026-06-01T00:00:00+09:00", priority: 0.9 },
  { path: "/blog", lastModified: "2026-06-01T00:00:00+09:00", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: "weekly",
    priority: r.priority,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${siteUrl}${postUrl(p.slug)}`,
    lastModified: new Date(p.iso),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
