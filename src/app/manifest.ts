import type { MetadataRoute } from "next";
import { NAP } from "@/lib/nap";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${NAP.name} — AI 검색 최적화 (GEO·AIO)`,
    short_name: NAP.name,
    description:
      "ChatGPT·Gemini·Perplexity가 브랜드를 먼저 추천하도록 설계하는 AI 검색 최적화 전문 대행사",
    start_url: "/",
    display: "standalone",
    background_color: "#081120",
    theme_color: "#081120",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
