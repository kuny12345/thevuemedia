import type { Metadata } from "next";
import "./renew.css";
import "@/styles/site-footer.css";
import "@/styles/site-menu.css";
import { siteMetadata, SiteHeadCommon } from "@/lib/site-meta";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

// 리뉴얼 디자인 하위 페이지(인사이트) 전용 레이아웃 — 홈과 같은 디자인 토큰.
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
      <body>
        {/* 분석 스크립트(PostHog)가 body 바로 아래 첫 script 앞에 끼어들어 hydration 경고가 나지 않도록, 페이지 내용을 한 겹 감싼다 */}
        <div style={{ display: "contents" }}>{children}</div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
