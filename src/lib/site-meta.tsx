import type { Metadata } from "next";
import { organizationSchema, websiteSchema } from "@/lib/schema";

// 사이트 공통 메타데이터 · head 태그 — 홈(리뉴얼)과 기존 페이지가 같은 값을 쓴다.
export const siteUrl = "https://thevuemedia.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "AI 검색 최적화 GEO·AIO 전문 | 더뷰미디어 — AIO 마케팅 에이전시",
    template: "%s | 더뷰미디어",
  },
  description:
    "더뷰미디어는 ChatGPT·Gemini·Perplexity·구글 AI 개요가 브랜드를 먼저 추천하도록 설계하는 AI 검색 최적화(GEO·AIO) 전문 에이전시입니다. 자체 도구 AIRank·SchemaWorks·AutoPost로 진단·추적·발행을 직접 실행합니다.",
  keywords: [
    "AI 검색 최적화",
    "GEO",
    "AIO",
    "생성형 엔진 최적화",
    "ChatGPT 브랜드 추천",
    "AIO 마케팅",
    "병원 마케팅",
    "더뷰미디어",
  ],
  authors: [{ name: "더뷰미디어" }],
  creator: "더뷰미디어",
  publisher: "더뷰미디어",
  openGraph: {
    title: "AI 검색 최적화 GEO·AIO 전문 | 더뷰미디어 — AIO 마케팅 에이전시",
    description:
      "ChatGPT·Gemini·Perplexity가 브랜드를 먼저 추천하도록 설계합니다. 자체 도구로 진단·추적·발행을 직접 실행하는 AI 검색 최적화(GEO·AIO) 전문 에이전시.",
    url: "/",
    siteName: "더뷰미디어",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 검색 최적화 GEO·AIO 전문 | 더뷰미디어",
    description:
      "ChatGPT·Gemini·Perplexity가 브랜드를 먼저 추천하도록 설계하는 AIO 전문 에이전시.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

/** 네이버·구글 소유 확인 + Organization/WebSite JSON-LD (모든 페이지 공통) */
export function SiteHeadCommon() {
  return (
    <>
      <meta
        name="naver-site-verification"
        content="743548e26dd08285207940ef5bab6a424967bf23"
      />
      <meta
        name="google-site-verification"
        content="1xTUpkBJesKd1AbKgBsWrAXkYWcmqRQT9Sy9hBpzjk8"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema()),
        }}
      />
    </>
  );
}
