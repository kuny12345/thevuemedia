import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Google Gemini·AI 오버뷰 노출 최적화 가이드 | 더뷰미디어",
  description:
    "Google AI Overview(SGE)와 Gemini 답변에 브랜드가 포함되려면 무엇이 필요한지, 구조화 데이터와 콘텐츠 관점에서 정리했습니다.",
  keywords: [
    "Google AI Overview",
    "Gemini 최적화",
    "SGE",
    "AI 검색 노출",
    "구글 AI 오버뷰",
    "더뷰미디어",
  ],
  openGraph: {
    title: "Google Gemini·AI 오버뷰 노출 최적화 가이드",
    description: "AI Overview와 Gemini 답변에 브랜드가 포함되는 법.",
    type: "article",
    publishedTime: "2026-05-28T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/gemini-ai-overview-guide" },
};

const faq = [
  {
    q: "AI 오버뷰와 Gemini는 어떤 관계인가요?",
    a: "둘 다 Google의 생성형 AI 기반입니다. AI 오버뷰는 검색 결과 상단의 AI 요약이고, Gemini는 독립 어시스턴트입니다. 참조하는 데이터와 신뢰 기준이 겹치므로 함께 최적화하는 것이 효율적입니다.",
  },
  {
    q: "노출에 가장 중요한 요소는?",
    a: "E-E-A-T(경험·전문성·권위·신뢰)와 구조화 데이터입니다. Google은 신뢰할 수 있는 출처를 선호하므로, 전문성이 드러나는 콘텐츠와 정확한 스키마가 핵심입니다.",
  },
  {
    q: "기존 SEO 자산이 도움이 되나요?",
    a: "네. AI 오버뷰는 Google 색인을 기반으로 하므로 SEO 자산이 토대가 됩니다. 다만 인용·요약되기 쉬운 구조와 스키마를 추가로 갖춰야 노출 확률이 올라갑니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="gemini-ai-overview-guide"
      tag="엔진별"
      title="Google Gemini·AI 오버뷰 노출 최적화 가이드"
      date="2026.05.28"
      datePublished="2026-05-28T09:00:00+09:00"
      readTime="읽기 10분"
      description="AI Overview와 Gemini 답변에 브랜드가 포함되는 법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Google 검색의 상단을 <strong>AI 오버뷰(AI Overview)</strong>가 차지하고,
        그 아래 파란 링크는 점점 밀려납니다. Gemini와 AI 오버뷰에 우리 브랜드가
        포함되는 것이 새로운 1위의 기준입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        Google의 AI는 어떤 출처를 고르나
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Google은 <strong>E-E-A-T</strong>를 기준으로 출처를 선택합니다. 실제
        경험과 전문성, 권위 있는 출처, 신뢰할 수 있는 정보일수록 AI 답변에
        인용될 확률이 높습니다. SGE 대응 전반은{" "}
        <Link href="/blog/google-sge-strategy-2026" className="text-primary underline">
          2026 Google SGE 대응 전략
        </Link>
        에서 다룹니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        노출을 높이는 실전 포인트
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>구조화 데이터:</strong> FAQPage·HowTo·Article·Organization 스키마로 맥락 제공</li>
        <li><strong>질문형 콘텐츠:</strong> 사용자의 실제 질문에 명료하게 답하는 단락 구성</li>
        <li><strong>전문성 신호:</strong> 저자·근거·데이터로 E-E-A-T 강화</li>
        <li><strong>멀티 소스:</strong> 웹·영상·뉴스 등 여러 출처에서 일관된 메시지 노출</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          다른 엔진은{" "}
          <Link href="/blog/perplexity-citation-optimization" className="text-primary font-semibold underline">
            Perplexity
          </Link>
          ,{" "}
          <Link href="/blog/copilot-visibility-guide" className="text-primary font-semibold underline">
            Copilot
          </Link>
          {" "}가이드를 참고하세요. 구조화 데이터는{" "}
          <Link href="/blog/schema-markup-for-aio" className="text-primary font-semibold underline">
            스키마와 AIO
          </Link>
          에서 자세히 다룹니다.
        </p>
      </div>
    </BlogArticle>
  );
}
