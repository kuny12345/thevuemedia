import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "LLM은 어떤 원리로 브랜드를 추천하는가 | 더뷰미디어",
  description:
    "대규모 언어모델이 특정 브랜드를 추천하는 메커니즘 — 학습 데이터, 실시간 검색(RAG), 인용 신호의 작동 방식을 해부합니다.",
  keywords: ["LLM 추천 원리", "AI 브랜드 추천", "RAG", "학습 데이터", "AI 추천 메커니즘", "더뷰미디어"],
  openGraph: {
    title: "LLM은 어떤 원리로 브랜드를 추천하는가",
    description: "학습 데이터·RAG·인용 신호로 본 AI 추천의 작동 원리.",
    type: "article",
    publishedTime: "2026-05-26T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/how-llm-recommends-brands" },
};

const faq = [
  {
    q: "AI는 광고비를 받고 추천하나요?",
    a: "일반적인 생성형 답변은 광고가 아닙니다. 모델이 학습·검색한 데이터에서 브랜드가 어떤 맥락으로 등장하는지에 따라 추천이 결정됩니다.",
  },
  {
    q: "RAG가 무엇인가요?",
    a: "RAG(Retrieval-Augmented Generation)는 모델이 답변 시 실시간으로 외부 문서를 검색해 근거로 삼는 방식입니다. 최신성·인용 가능성이 중요해지는 이유입니다.",
  },
  {
    q: "학습 데이터에 들어가려면 어떻게 하나요?",
    a: "공개 웹에 핵심 키워드와 브랜드가 함께 등장하는 신뢰 콘텐츠를 꾸준히 쌓고, 여러 채널에서 일관되게 노출하는 것이 핵심입니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="how-llm-recommends-brands"
      tag="개념"
      title="LLM은 어떤 원리로 브랜드를 추천하는가"
      date="2026.05.26"
      datePublished="2026-05-26T09:00:00+09:00"
      readTime="읽기 10분"
      description="학습 데이터·RAG·인용 신호로 본 AI 추천의 작동 원리."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        AI가 특정 브랜드를 추천하는 건 우연이 아닙니다. 그 배경에는{" "}
        <strong>학습 데이터</strong>와 <strong>실시간 검색(RAG)</strong>,
        그리고 <strong>인용 신호</strong>라는 분명한 메커니즘이 있습니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        1. 학습 데이터 — 모델의 ‘기억’
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        LLM은 방대한 공개 텍스트를 학습합니다. 특정 키워드와 브랜드가 함께,
        긍정적 맥락으로 자주 등장할수록 모델은 그 연관성을 강하게 ‘기억’합니다.
        이것이 추천의 1차 토대입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        2. 실시간 검색(RAG) — 모델의 ‘참고 자료’
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        많은 엔진이 답변 시 웹을 실시간 검색해 근거를 가져옵니다. 이때{" "}
        <strong>인용하기 쉬운 구조</strong>와 <strong>최신성</strong>을 갖춘
        페이지가 출처로 선택됩니다. Perplexity·AI 오버뷰가 대표적입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        3. 인용 신호 — ‘신뢰할 만한가’
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        모델은 권위 있는 출처, 일관된 다채널 언급, 구조화된 데이터를 신뢰
        신호로 받아들입니다. 자기 자랑보다 <strong>제3자의 평가와 근거</strong>가
        더 큰 가중치를 갖습니다.
      </p>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">정리</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          빈도(학습) × 인용성(RAG) × 권위(신뢰)의 곱이 AI 추천 확률을 만듭니다.
          AIO는 이 세 축을 동시에 설계하는 작업입니다.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          이 원리를 콘텐츠로 옮기는 법은{" "}
          <Link href="/blog/what-is-aio" className="text-primary font-semibold underline">
            AIO란 무엇인가
          </Link>
          와{" "}
          <Link href="/blog/topic-cluster-content-strategy" className="text-primary font-semibold underline">
            토픽 클러스터 전략
          </Link>
          에서 이어집니다.
        </p>
      </div>
    </BlogArticle>
  );
}
