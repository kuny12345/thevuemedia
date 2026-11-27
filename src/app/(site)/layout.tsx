import type { Metadata } from "next";
import "./globals.css";
import { siteMetadata, SiteHeadCommon } from "@/lib/site-meta";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

// 기존 디자인 페이지(서비스 상세·블로그·/rebuild) 전용 레이아웃.
// 홈은 리뉴얼 디자인이라 (home) 그룹의 별도 레이아웃을 쓴다.
export const viewport = {
  themeColor: "#081120",
};

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <SiteHeadCommon />
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@600;700;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* 분석 스크립트(PostHog)가 body 바로 아래 첫 script 앞에 끼어들어 hydration 경고가 나지 않도록, 페이지 내용을 한 겹 감싼다 */}
        <div style={{ display: "contents" }}>{children}</div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
