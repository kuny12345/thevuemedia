import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AIO·GEO 대행사 선택기준 7가지 + 계약 전 체크리스트 (2026) | 더뷰미디어",
  description:
    "AI 최적화(AIO·GEO) 대행사를 잘못 고르면 시간과 비용을 낭비합니다. 계약 전 반드시 확인할 7가지 기준과 실무 질문 리스트, 피해야 할 제안서 신호를 정리했습니다.",
  keywords: [
    "AIO 대행사 선택",
    "GEO 대행사 선택기준",
    "AI 마케팅 대행사 추천",
    "AIO 대행사 비교",
    "AI 마케팅 계약",
    "더뷰미디어",
  ],
  openGraph: {
    title: "AIO·GEO 대행사 선택기준 7가지 + 계약 전 체크리스트 (2026)",
    description:
      "AI 최적화 대행사를 고르기 전 반드시 확인할 7가지 기준과 실무 질문 리스트.",
    type: "article",
    publishedTime: "2026-06-01T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/aio-agency-selection-criteria" },
};

const faq = [
  {
    q: "AIO 대행사와 일반 마케팅 대행사는 무엇이 다른가요?",
    a: "일반 마케팅 대행사는 광고 노출과 클릭을 목표로 하지만, AIO 대행사는 생성형 AI가 답변에서 브랜드를 인용·추천하게 만드는 것을 목표로 합니다. AI Mention Score·인용 빈도 같은 별도 지표와 구조화 데이터 역량이 필요합니다.",
  },
  {
    q: "성과 보장을 약속하는 대행사는 믿어도 되나요?",
    a: "AI 추천 순위를 100% 보장한다는 약속은 경계해야 합니다. AI 엔진은 지속적으로 변하므로, 보장보다는 측정 방식과 산출 근거를 투명하게 공개하는지를 확인하는 편이 안전합니다.",
  },
  {
    q: "계약 기간은 어느 정도가 적절한가요?",
    a: "AIO는 콘텐츠가 축적되고 AI에 반영되기까지 시간이 필요해 단기 성과를 기대하긴 어렵습니다. 다만 장기 약정 전에 진단·파일럿 단계로 역량을 검증할 수 있는지 확인하는 것이 좋습니다.",
  },
  {
    q: "보고서에서 무엇을 확인해야 하나요?",
    a: "엔진별 인용 여부, AI Mention Score 추이, 측정 방법, 다음 액션이 명확히 담겨 있어야 합니다. 노출·도달 같은 일반 지표만 있고 AI 인용 데이터가 없다면 AIO 보고서로는 부족합니다.",
  },
];

const criteria = [
  {
    n: "1",
    title: "AI 엔진 커버리지 — 몇 개 엔진을 대상으로 하는가",
    body: "ChatGPT만이 아니라 Gemini·Perplexity·Copilot·Grok·네이버까지 통합 대응하는지 확인하세요. 엔진마다 인용 메커니즘이 달라, 한 엔진만 다루면 노출 기회를 놓칩니다.",
  },
  {
    n: "2",
    title: "방법론 공개 여부 — 과정을 설명할 수 있는가",
    body: "‘비법’이라며 과정을 숨기는 대행사보다, 진단→전략→실행→추적의 절차와 산출 근거를 공개하는 곳이 신뢰할 만합니다. 설명할 수 없는 성과는 재현할 수 없습니다.",
  },
  {
    n: "3",
    title: "측정 체계 — AI 인용을 어떻게 정량화하는가",
    body: "AI Mention Score, 엔진별 인용 여부, 경쟁 대비 위치를 측정하는 체계가 있는지 확인하세요. 측정이 없으면 개선도, 검증도 불가능합니다.",
  },
  {
    n: "4",
    title: "구조화 데이터 역량 — 스키마를 다룰 수 있는가",
    body: "FAQPage·ItemList·Organization 등 schema.org 구조화 데이터는 AI 가독성의 핵심입니다. 기술적으로 스키마를 설계·구현할 수 있는지 점검하세요.",
  },
  {
    n: "5",
    title: "콘텐츠 깊이 — E-E-A-T를 만들 수 있는가",
    body: "키워드만 나열한 얇은 글이 아니라, 경험·전문성·권위·신뢰(E-E-A-T)를 담은 콘텐츠를 만들 수 있어야 AI가 출처로 채택합니다.",
  },
  {
    n: "6",
    title: "멀티채널 운영 — 한 채널에 그치지 않는가",
    body: "AI는 웹·영상·SNS·커뮤니티 등 여러 소스를 참조합니다. 동일 메시지를 여러 채널에 일관되게 배포할 운영 역량이 있는지 확인하세요.",
  },
  {
    n: "7",
    title: "규제 준수 — 우리 업종 광고규정을 아는가",
    body: "의료·법률·금융 등 규제 업종이라면 해당 광고규정을 이해하고 적합하게 콘텐츠를 설계하는지 반드시 확인해야 합니다. 단정적 효과 보장 표현은 위험합니다.",
  },
];

export default function AioAgencySelectionCriteriaPage() {
  return (
    <BlogArticle
      slug="aio-agency-selection-criteria"
      tag="가이드"
      title="AIO·GEO 대행사 선택기준 7가지 + 계약 전 체크리스트 (2026)"
      date="2026.06.01"
      datePublished="2026-06-01T09:00:00+09:00"
      readTime="읽기 11분"
      description="AI 최적화 대행사를 고르기 전 반드시 확인할 7가지 기준과 실무 질문 리스트."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        AIO·GEO 대행사를 잘못 고르면 <strong>수개월의 시간과 적지 않은 비용</strong>이
        그대로 사라집니다. AI 최적화는 일반 마케팅과 평가 기준이 다르기 때문에,
        계약 전에 아래 <strong>7가지 기준</strong>으로 냉정하게 검증해야 합니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        왜 대행사 선택이 AIO 성패를 가르는가
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        AIO는 한 번의 캠페인이 아니라 콘텐츠·구조화 데이터·멀티채널이 축적되며
        AI 학습·참조에 반영되는 누적 게임입니다. 잘못된 파트너와 6개월을 보내면
        시간만 잃는 게 아니라, AI가 우리 브랜드를 학습할 기회 자체를 경쟁사에
        내주게 됩니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        반드시 확인해야 할 7가지 체크리스트
      </h2>
      <div className="space-y-5 mb-8">
        {criteria.map((c) => (
          <div key={c.n} className="rounded-2xl border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              <span className="text-primary">{c.n}.</span> {c.title.slice(c.title.indexOf(" ") + 1)}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        이런 제안서는 피하세요
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>“AI 추천 1위 100% 보장”</strong> — AI 엔진 변동성을 무시한 과장입니다.</li>
        <li><strong>측정 지표가 노출·도달뿐</strong> — AI 인용 데이터가 없으면 AIO가 아닙니다.</li>
        <li><strong>방법을 일절 공개하지 않음</strong> — 재현·검증이 불가능합니다.</li>
        <li><strong>업종 광고규정에 무관심</strong> — 규제 업종에서 법적 리스크를 키웁니다.</li>
      </ul>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        계약 전 실무 질문 리스트
      </h2>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm">
          <li>“우리 브랜드의 현재 AI Mention 기준선을 어떻게 측정하나요?”</li>
          <li>“대상 엔진은 무엇이고, 엔진별 전략은 어떻게 다른가요?”</li>
          <li>“성과는 어떤 지표로, 어떤 주기로 보고하나요?”</li>
          <li>“구조화 데이터(스키마)는 직접 설계·구현하나요?”</li>
          <li>“우리 업종의 광고규정을 어떻게 반영하나요?”</li>
          <li>“장기 약정 전에 파일럿으로 검증할 수 있나요?”</li>
        </ul>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mt-8">
        <h3 className="text-lg font-bold text-primary mb-2">참고</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          7가지 기준으로 후보들을 비교해 보고 싶다면{" "}
          <Link href="/blog/aio-agency-comparison-2026" className="text-primary font-semibold underline">
            AI 마케팅(AIO) 대행사 비교 가이드
          </Link>
          를, AIO의 기본 개념이 궁금하다면{" "}
          <Link href="/blog/what-is-aio" className="text-primary font-semibold underline">
            AIO란 무엇인가
          </Link>
          를 함께 읽어보세요.
        </p>
      </div>
    </BlogArticle>
  );
}
