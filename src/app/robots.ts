import type { MetadataRoute } from "next";

const siteUrl = "https://thevuemedia.com";

// GEO note: we explicitly welcome AI answer-engine crawlers (ai-input / RAG / grounding)
// and major search + Korean (Naver/Daum) crawlers, while keeping app internals private.
// NOTE: the live domain is currently served Cloudflare's "Managed robots.txt"
// (Content-Signal: ai-train=no). To make THIS robots.txt authoritative, disable
// Cloudflare's Managed robots / AI-bot block in the Cloudflare dashboard.
const aiAndSearchBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Yeti", // Naver
  "Daumoa", // Daum/Kakao
];

const disallow = ["/api/", "/_next/", "/static/", "/private/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiAndSearchBots.map((ua) => ({ userAgent: ua, allow: "/", disallow })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: "thevuemedia.com",
  };
}
