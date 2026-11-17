import type { Metadata } from "next";
import "./home.css";
import "@/styles/site-footer.css";
import { siteMetadata, SiteHeadCommon } from "@/lib/site-meta";

// 리뉴얼 홈 전용 레이아웃 — 기존 페이지(globals.css)와 스타일이 섞이지 않게 분리.
// 인사이트(/blog)·칼럼(/column) 등은 (site) 레이아웃을 그대로 쓴다(추후 새 톤으로 정리 예정).
export const viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = siteMetadata;

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <SiteHeadCommon />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
