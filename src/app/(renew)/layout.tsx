import type { Metadata } from "next";
import "./renew.css";
import "@/styles/site-footer.css";
import { siteMetadata, SiteHeadCommon } from "@/lib/site-meta";

// 리뉴얼 디자인 하위 페이지(인사이트, 추후 칼럼) 전용 레이아웃 — 홈과 같은 디자인 토큰.
export const viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = siteMetadata;

export default function RenewLayout({
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
