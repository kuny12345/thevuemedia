import type { Metadata } from "next";

// 퍼널 전용 세일즈 랜딩 — schemaworks 이메일·추적 페이지에서만 유입.
// /web-rebuild(서비스 설명, index)와 카니벌라이제이션 방지를 위해 noindex.
export const metadata: Metadata = {
  title: "홈페이지 리빌딩 — AI가 읽는 사이트로 2주 만에",
  description:
    "7일 추적에서 확인하셨듯, 문제는 콘텐츠가 아니라 구조입니다. 기존 홈페이지를 유지한 채 AI가 읽고 인용하는 구조로 2주 안에 정비합니다.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/rebuild" },
};

export default function RebuildLayout({ children }: { children: React.ReactNode }) {
  return children;
}
