import type { MetadataRoute } from "next";
import { posts, postUrl } from "@/lib/posts";
import { services } from "@/lib/services";
import { getColumns, hasBlog2AiConnection } from "@/lib/blog2ai";

const siteUrl = "https://thevuemedia.com";

// Static (non-blog) routes. Keep in sync with app/ landing pages.
const staticRoutes: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-06-01T00:00:00+09:00", priority: 1 },
  { path: "/aio", lastModified: "2026-06-01T00:00:00+09:00", priority: 0.9 },
  { path: "/hospital-marketing", lastModified: "2026-06-01T00:00:00+09:00", priority: 0.9 },
  { path: "/products", lastModified: "2026-06-01T00:00:00+09:00", priority: 0.9 },
  { path: "/blog", lastModified: "2026-06-01T00:00:00+09:00", priority: 0.8 },
  { path: "/column", lastModified: "2026-10-06T00:00:00+09:00", priority: 0.8 },
];

// New service landing pages (/seo /schema /web-rebuild /content /video) — derived
// from the services registry (isNew) so they never drift from the actual routes.
const newServiceRoutes: { path: string; lastModified: string; priority: number }[] =
  services
    .filter((s) => s.isNew)
    .map((s) => ({
      path: s.href,
      lastModified: "2026-06-27T00:00:00+09:00",
      priority: 0.8,
    }));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = [
    ...staticRoutes,
    ...newServiceRoutes,
  ].map((r) => ({
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

  // Blog2AI API가 연결된 환경에서만 중앙 발행본을 사이트맵에 포함한다.
  // 연결 장애가 사이트맵 전체를 실패시키지 않도록 기존 정적 URL은 항상 유지한다.
  let columnEntries: MetadataRoute.Sitemap = [];
  if (hasBlog2AiConnection()) {
    try {
      const first = await getColumns(1);
      const pages = await Promise.all(Array.from({ length: first.totalPages }, (_, index) => index === 0 ? first : getColumns(index + 1)));
      columnEntries = pages.flatMap((data) => data.articles.map((article) => ({
        url: `${siteUrl}/column/${encodeURIComponent(article.slug)}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })));
    } catch {
      // 중앙 API의 일시적 장애는 다음 sitemap 요청에서 다시 시도한다.
    }
  }

  return [...staticEntries, ...postEntries, ...columnEntries];
}
