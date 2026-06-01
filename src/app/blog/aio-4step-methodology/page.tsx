import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { howToSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "더뷰미디어 4단계 AIO 방법론 — 진단·전략·실행·추적 | 더뷰미디어",
  description:
    "AIO를 추측이 아니라 절차로. 진단(Audit) → 전략(Strategy) → 실행(Execution) → 추적(Tracking) 4단계 방법론을 공개합니다.",
  keywords: ["AIO 방법론", "AIO 프로세스", "AI 최적화 단계", "더뷰미디어 방법론", "AIO 도입", "더뷰미디어"],
  openGraph: {
    title: "더뷰미디어 4단계 AIO 방법론 — 진단·전략·실행·추적",
    description: "진단·전략·실행·추적 4단계로 보는 AIO 작동 방식.",
    type: "article",
    publishedTime: "2026-06-01T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/aio-4step-methodology" },
};

const steps = [
  { name: "1. 진단(Audit)", text: "주요 AI 엔진이 현재 브랜드를 어떻게 인식·언급하는지 측정해 AI Mention 기준선과 경쟁 위치를 파악합니다." },
  { name: "2. 전략(Strategy)", text: "고객이 AI에 묻는 질의를 분석해, 추천 출처로 선택되도록 키워드·콘텐츠·구조화 데이터 전략을 설계합니다." },
  { name: "3. 실행(Execution)", text: "6대 플랫폼에 일관된 브랜드 메시지를 배포하고 schema.org 구조화 데이터로 AI 가독성을 높입니다." },
  { name: "4. 추적(Tracking)", text: "AI Mention Score와 인용 여부를 지속 추적하고, 데이터에 기반해 전략을 반복 개선합니다." },
];

const faq = [
  {
    q: "방법론을 공개하는 이유는?",
    a: "재현·검증이 가능해야 신뢰할 수 있기 때문입니다. ‘비공개 비법’보다 과정과 산출 근거를 공개하는 편이 고객에게 더 안전하고 투명합니다.",
  },
  {
    q: "4단계는 한 번으로 끝나나요?",
    a: "아닙니다. 추적 단계에서 얻은 데이터로 전략을 개선해 다시 실행하는 순환 구조입니다. AI 엔진과 경쟁 환경이 계속 변하기 때문입니다.",
  },
  {
    q: "어느 단계부터 시작하나요?",
    a: "진단부터입니다. 현재 위치(기준선)를 모르면 전략도 측정도 불가능합니다.",
  },
];

export default function Page() {
  const howto = howToSchema({
    name: "더뷰미디어 4단계 AIO 방법론",
    description: "진단 → 전략 → 실행 → 추적의 4단계로 AI 추천 노출을 설계합니다.",
    steps,
  });
  return (
    <>
      <JsonLd data={howto} />
      <BlogArticle
        slug="aio-4step-methodology"
        tag="방법론"
        title="더뷰미디어 4단계 AIO 방법론 — 진단·전략·실행·추적"
        date="2026.06.01"
        datePublished="2026-06-01T09:00:00+09:00"
        readTime="읽기 10분"
        description="진단·전략·실행·추적 4단계로 보는 AIO 작동 방식."
        faq={faq}
      >
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          AIO 성과는 운이 아니라 <strong>절차</strong>의 결과입니다. 더뷰미디어는
          AIO를 <strong>진단 → 전략 → 실행 → 추적</strong> 4단계로 표준화해, 과정과
          근거를 투명하게 공개합니다.
        </p>

        {steps.map((s, i) => (
          <div key={s.name}>
            <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
              {s.name}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{s.text}</p>
            {i === 0 && (
              <p className="text-gray-600 leading-relaxed mb-4">
                기준선 측정에는{" "}
                <Link href="/blog/ai-mention-score-guide" className="text-primary underline">
                  AI Mention Score
                </Link>
                를 사용합니다.
              </p>
            )}
            {i === 2 && (
              <p className="text-gray-600 leading-relaxed mb-4">
                콘텐츠는{" "}
                <Link href="/blog/topic-cluster-content-strategy" className="text-primary underline">
                  토픽 클러스터
                </Link>
                로 설계하고,{" "}
                <Link href="/blog/schema-markup-for-aio" className="text-primary underline">
                  스키마
                </Link>
                로 구조화합니다.
              </p>
            )}
          </div>
        ))}

        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-10">
          <h3 className="text-lg font-bold text-primary mb-2">순환하는 구조</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            4단계는 일회성이 아니라 추적 → 전략 개선 → 재실행으로 순환합니다. AI
            환경 변화에 맞춰 지속적으로 최적화합니다.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            방법론을 적용한 서비스는{" "}
            <Link href="/aio" className="text-primary font-semibold underline">AIO 서비스</Link>
            에서, 대행사 비교는{" "}
            <Link href="/blog/aio-agency-comparison-2026" className="text-primary font-semibold underline">AIO 대행사 비교</Link>
            에서 확인하세요.
          </p>
        </div>
      </BlogArticle>
    </>
  );
}
