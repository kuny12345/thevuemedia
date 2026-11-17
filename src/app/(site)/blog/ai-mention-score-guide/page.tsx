import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "AI Mention Score란? 측정법과 개선 전략 | 더뷰미디어",
  description:
    "AI가 우리 브랜드를 얼마나, 어떤 맥락으로 언급하는지 정량화하는 AI Mention Score의 개념과 측정·개선 방법을 설명합니다.",
  keywords: ["AI Mention Score", "AI 인지도 측정", "브랜드 언급", "AIO 측정", "AI 추천 측정", "더뷰미디어"],
  openGraph: {
    title: "AI Mention Score란? 측정법과 개선 전략",
    description: "AI 언급을 정량화하는 AI Mention Score 개념과 개선법.",
    type: "article",
    publishedTime: "2026-05-31T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/ai-mention-score-guide" },
};

const faq = [
  {
    q: "AI Mention Score는 공식 지표인가요?",
    a: "특정 기관의 표준 지표가 아니라, AI 답변 내 브랜드 언급을 정량화하기 위해 사용하는 운영 지표입니다. 중요한 것은 측정 방식과 산출 근거를 일관되게 공개하는 것입니다.",
  },
  {
    q: "어떻게 측정하나요?",
    a: "동일한 질의 세트를 여러 엔진에 반복 입력해, 브랜드 언급 여부·맥락(긍정/중립)·인용 순위 등을 집계합니다. 기준선을 잡은 뒤 변화를 추적합니다.",
  },
  {
    q: "점수를 올리려면?",
    a: "핵심 키워드와 브랜드를 함께 담은 인용 가능한 콘텐츠를 늘리고, 구조화 데이터와 멀티채널 신뢰 시그널을 강화하면 됩니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="ai-mention-score-guide"
      tag="개념"
      title="AI Mention Score란? 측정법과 개선 전략"
      date="2026.05.31"
      datePublished="2026-05-31T09:00:00+09:00"
      readTime="읽기 9분"
      description="AI 언급을 정량화하는 AI Mention Score 개념과 개선법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        AIO의 성과를 말하려면 먼저 <strong>측정</strong>이 필요합니다.{" "}
        <strong>AI Mention Score</strong>는 AI가 우리 브랜드를 얼마나, 어떤
        맥락으로 언급하는지를 정량화하는 지표입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        무엇을 측정하나
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>언급 여부:</strong> 특정 질의에서 브랜드가 답변에 등장하는가</li>
        <li><strong>맥락:</strong> 추천·전문 등 긍정 맥락인가, 단순 중립 언급인가</li>
        <li><strong>인용 순위:</strong> 여러 후보 중 몇 번째로 등장하는가</li>
        <li><strong>엔진 커버리지:</strong> 몇 개 엔진에서 언급되는가</li>
      </ul>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        측정 절차
      </h2>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm">
          <li>고객이 실제로 묻는 질의 세트 정의</li>
          <li>여러 엔진(ChatGPT·Gemini·Perplexity 등)에 반복 입력</li>
          <li>언급·맥락·순위 집계로 기준선 산출</li>
          <li>전략 실행 후 동일 절차로 변화 추적</li>
        </ul>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">중요</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          점수 자체보다 <strong>측정 방식의 일관성과 투명성</strong>이 중요합니다.
          같은 기준으로 반복 측정해야 개선 여부를 신뢰할 수 있습니다.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          점수를 올리는 콘텐츠 전략은{" "}
          <Link href="/blog/topic-cluster-content-strategy" className="text-primary font-semibold underline">
            토픽 클러스터 전략
          </Link>
          과{" "}
          <Link href="/blog/schema-markup-for-aio" className="text-primary font-semibold underline">
            스키마와 AIO
          </Link>
          에서 이어집니다.
        </p>
      </div>
    </BlogArticle>
  );
}
