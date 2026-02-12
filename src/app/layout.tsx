import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "더뷰미디어 | AI가 당신의 브랜드를 추천하게 만듭니다",
  description:
    "ChatGPT, Gemini, Copilot이 고객에게 귀사를 먼저 추천하도록. 더뷰미디어의 AIO 전략이 브랜드의 AI 인지도를 설계합니다.",
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
