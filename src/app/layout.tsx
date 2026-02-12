import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIO, AI 최적화 솔루션 | 더뷰미디어 - ChatGPT 브랜드 추천 1위 만들기",
  description:
    "AIO전문 서비스. Google오버뷰, ChatGPT, Gemini, Copilot이 고객에게 귀사를 업계 1위로 추천하도록 설계합니다. AI 브랜드 인지도 진단부터 멀티채널 전략까지, 실시간 성과 대시보드로 검증되는 AIO 솔루션을 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
