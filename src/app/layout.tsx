import type { Metadata } from "next";
import "./globals.css";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const siteUrl = "https://thevuemedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "AI 검색 최적화 GEO·AIO 전문 | 더뷰미디어 — 대구 AIO 마케팅",
    template: "%s | 더뷰미디어",
  },
  description:
    "대구 더뷰미디어는 ChatGPT·Gemini·Perplexity·구글 AI 개요가 브랜드를 먼저 추천하도록 설계하는 AI 검색 최적화(GEO·AIO) 전문 회사입니다. 자체 도구 AIRank·SchemaWorks·AutoPost로 진단·추적·발행을 직접 실행합니다.",
  keywords: [
    "AI 검색 최적화",
    "GEO",
    "AIO",
    "생성형 엔진 최적화",
    "ChatGPT 브랜드 추천",
    "대구 마케팅",
    "병원 마케팅",
    "더뷰미디어",
  ],
  authors: [{ name: "더뷰미디어" }],
  creator: "더뷰미디어",
  publisher: "더뷰미디어",
  openGraph: {
    title: "AI 검색 최적화 GEO·AIO 전문 | 더뷰미디어 — 대구 AIO 마케팅",
    description:
      "ChatGPT·Gemini·Perplexity가 브랜드를 먼저 추천하도록 설계합니다. 자체 도구로 진단·추적·발행을 직접 실행하는 대구의 AI 검색 최적화(GEO·AIO) 전문.",
    url: "/",
    siteName: "더뷰미디어",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 검색 최적화 GEO·AIO 전문 | 더뷰미디어",
    description:
      "ChatGPT·Gemini·Perplexity가 브랜드를 먼저 추천하도록 설계하는 대구의 AIO 전문.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="743548e26dd08285207940ef5bab6a424967bf23"
        />
        <meta
          name="google-site-verification"
          content="1xTUpkBJesKd1AbKgBsWrAXkYWcmqRQT9Sy9hBpzjk8"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* Pretendard — 프리미엄 한글 웹폰트(가변, 다이내믹 서브셋) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
