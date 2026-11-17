import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "교육·학원 AIO 가이드 | 더뷰미디어",
  description:
    "학원·교육 브랜드가 “어디가 좋아?” 질의에서 AI에게 추천되도록 만드는 법. 성과·커리큘럼 신뢰 시그널을 설계합니다.",
  keywords: ["학원 마케팅", "교육 AIO", "학원 AI 추천", "에듀테크 마케팅", "학원 홍보", "더뷰미디어"],
  openGraph: {
    title: "교육·학원 AIO 가이드",
    description: "학원·교육 브랜드가 AI 추천에 노출되는 법.",
    type: "article",
    publishedTime: "2026-05-22T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/education-aio-guide" },
};

const faq = [
  {
    q: "학원도 AI 추천이 의미가 있나요?",
    a: "큽니다. 학부모·학생이 ‘○○ 잘 가르치는 학원’, ‘○○ 인강 추천’을 AI에 묻는 경우가 늘고 있어, 추천 노출이 상담·등록으로 이어집니다.",
  },
  {
    q: "무엇을 콘텐츠로 만들어야 하나요?",
    a: "커리큘럼·교육 방식·강사 전문성, 자주 묻는 질문, 학습 가이드 등이 좋습니다. 학생·학부모의 의사결정에 필요한 정보를 정확히 제공하세요.",
  },
  {
    q: "성과 표현은 어떻게 하나요?",
    a: "검증 불가능한 합격·성적 보장 표현은 피해야 합니다. 사실에 근거한 정보와 교육 철학·방식 중심으로 신뢰를 쌓는 것이 안전하고 효과적입니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="education-aio-guide"
      tag="버티컬"
      title="교육·학원 AIO 가이드"
      date="2026.05.22"
      datePublished="2026-05-22T09:00:00+09:00"
      readTime="읽기 8분"
      description="학원·교육 브랜드가 AI 추천에 노출되는 법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        학부모와 학생은 “○○ 잘 가르치는 학원”, “○○ 인강 추천”을 AI에게 묻습니다.
        교육 AIO는 이런 질의에서 <strong>우리 교육 브랜드가 추천</strong>되도록
        전문성과 신뢰를 전달하는 일입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        교육 AIO 콘텐츠 설계
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>커리큘럼·교육 방식:</strong> 무엇을 어떻게 가르치는지 구체적으로</li>
        <li><strong>강사 전문성:</strong> 경력·자격 등 검증 가능한 정보</li>
        <li><strong>학습 가이드:</strong> 학생·학부모에게 유용한 정보성 콘텐츠</li>
        <li><strong>FAQ:</strong> 수강·비용·일정 관련 자주 묻는 질문에 사실 기반 답변</li>
      </ul>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">유의</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          합격·성적을 보장·단정하는 표현은 표시광고 측면에서 위험합니다. 교육
          철학·방식과 검증 가능한 정보로 신뢰를 쌓는 것이 AIO에도 더 효과적입니다.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          AIO 개념은{" "}
          <Link href="/blog/what-is-aio" className="text-primary font-semibold underline">AIO란 무엇인가</Link>
          , 콘텐츠 구조는{" "}
          <Link href="/blog/topic-cluster-content-strategy" className="text-primary font-semibold underline">토픽 클러스터 전략</Link>
          을 참고하세요.
        </p>
      </div>
    </BlogArticle>
  );
}
