import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "병원·의료 AIO 가이드 — AI가 병원을 추천하게 만드는 법 | 더뷰미디어",
  description:
    "의료광고 규제를 준수하면서 병원·의원이 AI 추천에 노출되는 법. 진료과별 키워드와 신뢰 시그널 설계를 다룹니다.",
  keywords: ["병원 AIO", "병원 마케팅 AI", "의료 AI 마케팅", "병원 AI 추천", "의료광고", "더뷰미디어"],
  openGraph: {
    title: "병원·의료 AIO 가이드 — AI가 병원을 추천하게 만드는 법",
    description: "의료광고 규제를 준수하며 병원이 AI 추천에 노출되는 법.",
    type: "article",
    publishedTime: "2026-05-24T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/hospital-aio-guide" },
};

const faq = [
  {
    q: "의료광고 규제 때문에 AIO가 어렵지 않나요?",
    a: "오히려 규제를 잘 지키는 신뢰 콘텐츠가 AIO에 유리합니다. 단정적 효과·치료 보장 표현을 피하고, 정확한 정보·진료 안내·자주 묻는 질문 중심으로 구성하면 규제 준수와 AI 인용을 동시에 충족할 수 있습니다.",
  },
  {
    q: "무엇을 콘텐츠로 만들어야 하나요?",
    a: "진료과·증상·시술에 대한 정확한 설명, 진료 절차, 자주 묻는 질문, 의료진 전문성 정보 등이 좋습니다. 환자가 AI에 묻는 질문에 정확히 답하는 형태가 핵심입니다.",
  },
  {
    q: "효과를 단정적으로 표현해도 되나요?",
    a: "안 됩니다. 의료광고법상 치료 효과를 보장·단정하는 표현은 금지됩니다. 콘텐츠는 사실에 근거한 정보 제공에 집중해야 하며, 사전심의 대상 여부도 확인해야 합니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="hospital-aio-guide"
      tag="버티컬"
      title="병원·의료 AIO 가이드 — AI가 병원을 추천하게 만드는 법"
      date="2026.05.24"
      datePublished="2026-05-24T09:00:00+09:00"
      readTime="읽기 11분"
      description="의료광고 규제를 준수하며 병원이 AI 추천에 노출되는 법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        환자들은 이제 “○○ 잘하는 병원”을 AI에게 묻습니다. 병원 AIO의 핵심은{" "}
        <strong>의료광고 규제를 준수하면서</strong> AI가 신뢰하는 정보 출처가
        되는 것입니다.
      </p>

      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
        <p className="text-amber-900 text-sm leading-relaxed">
          <strong>규제 유의:</strong> 의료광고는 의료법의 적용을 받습니다.
          치료 효과를 보장·단정하는 표현, 환자 유인 표현 등은 금지되며, 사전심의
          대상일 수 있습니다. 본 가이드는 일반적 정보이며, 실제 콘텐츠는 관련
          규정 검토를 전제로 합니다.
        </p>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        규제 준수가 곧 AIO 경쟁력이다
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        AI는 신뢰할 수 있는 정보를 선호합니다. 과장 없는 정확한 의료 정보,
        진료 절차 안내, 자주 묻는 질문은 규제도 지키고 AI 인용도 얻는{" "}
        <strong>일석이조</strong>의 콘텐츠입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        병원 AIO 콘텐츠 설계
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>진료과·증상 정보:</strong> 환자가 묻는 증상·시술에 대한 정확한 설명</li>
        <li><strong>진료 절차 안내:</strong> 예약·진료·사후관리 과정을 명료하게</li>
        <li><strong>FAQ:</strong> 비용·회복·주의사항 등 자주 묻는 질문에 사실 기반 답변</li>
        <li><strong>의료진 전문성:</strong> 자격·경력 등 검증 가능한 정보로 신뢰 형성</li>
        <li><strong>지역 정보:</strong> 위치·진료시간 등 로컬 신호</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          AIO 기본 개념은{" "}
          <Link href="/blog/what-is-aio" className="text-primary font-semibold underline">AIO란 무엇인가</Link>
          , 측정은{" "}
          <Link href="/blog/ai-mention-score-guide" className="text-primary font-semibold underline">AI Mention Score</Link>
          를 참고하세요. 업종별 전략은{" "}
          <Link href="/aio" className="text-primary font-semibold underline">AIO 서비스</Link>
          에서 상담할 수 있습니다.
        </p>
      </div>
    </BlogArticle>
  );
}
