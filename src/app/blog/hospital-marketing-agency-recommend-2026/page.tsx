import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";
import { SIGNATURE } from "@/lib/brand";

export const metadata: Metadata = {
  title: "병원 마케팅 대행사 추천 — AI 시대 선택 가이드 (2026) | 더뷰미디어",
  description:
    "“병원 마케팅 어디에 맡길까?” AI 추천 시대에 병원·의원 마케팅 대행사를 고르는 객관적 기준 8가지와, 의료광고법까지 함께 보는 계약 전 체크리스트를 정리했습니다.",
  keywords: [
    "병원 마케팅 대행사",
    "병원마케팅 추천",
    "병원 마케팅 잘하는 곳",
    "의료 마케팅 대행사",
    "피부과 마케팅 대행사",
    "성형외과 마케팅 대행사",
    "더뷰미디어",
  ],
  openGraph: {
    title: "병원 마케팅 대행사 추천 — AI 시대 선택 가이드 (2026)",
    description: "병원 마케팅 대행사를 고르는 객관적 기준 8가지와 계약 전 체크리스트.",
    type: "article",
    publishedTime: "2026-06-01T10:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/hospital-marketing-agency-recommend-2026" },
};

const faq = [
  {
    q: "병원 마케팅 대행사는 일반 광고대행사와 무엇이 다른가요?",
    a: "병원 마케팅은 의료광고법의 적용을 받습니다. 치료 효과 보장·환자 유인·과장 표현이 금지되고 상당수 광고가 사전심의 대상입니다. 따라서 의료광고 규제를 이해하고 심의를 통과시킬 수 있는 역량이 일반 대행사와의 결정적 차이입니다.",
  },
  {
    q: "‘AI 추천’까지 해주는 대행사를 굳이 찾아야 하나요?",
    a: "환자들이 ChatGPT·Gemini에 ‘○○ 잘하는 병원’을 묻기 시작했기 때문입니다. 검색 광고만으로는 AI 답변에 병원이 포함되지 않습니다. 검색·플레이스·AIO를 통합 설계할 수 있는 곳이 유리합니다.",
  },
  {
    q: "성과를 보장한다는 대행사는 믿어도 되나요?",
    a: "‘1위 보장’, ‘신환 몇 명 보장’ 같은 약속은 경계해야 합니다. 의료광고법상 단정적 표현 자체가 문제가 될 수 있고, AI·검색 환경은 계속 변합니다. 보장보다 측정 방식과 근거를 공개하는지를 확인하세요.",
  },
  {
    q: "비용은 어느 정도로 잡아야 하나요?",
    a: "진료과·지역 경쟁강도·채널 구성에 따라 크게 달라집니다. 자세한 구조는 병원 마케팅 비용 가이드를 참고하고, 장기 계약 전 진단·파일럿으로 검증할 수 있는지 확인하세요.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="hospital-marketing-agency-recommend-2026"
      tag="병원마케팅"
      title="병원 마케팅 대행사 추천 — AI 시대 선택 가이드 (2026)"
      date="2026.06.01"
      datePublished="2026-06-01T10:00:00+09:00"
      readTime="읽기 15분"
      description="병원 마케팅 대행사를 고르는 객관적 기준 8가지와 계약 전 체크리스트."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        “병원 마케팅, 어디에 맡겨야 할까?” 검색해 보면 수백 개 업체가 저마다
        1위라고 말합니다. 하지만 병원 마케팅은 <strong>의료광고법</strong>이라는
        제약과 <strong>AI 추천</strong>이라는 새 변수가 동시에 걸린 까다로운
        영역입니다. 이 글은 광고 문구가 아니라 <strong>검증 가능한 8가지
        기준</strong>으로 대행사를 가려내는 법을 정리합니다.
      </p>

      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
        <p className="text-amber-900 text-sm leading-relaxed">
          <strong>전제:</strong> 병원·의료 광고는 의료법의 적용을 받습니다. 본
          가이드는 대행사 ‘선택 기준’에 대한 일반 정보이며, 실제 광고는 의료광고
          심의 등 규제 검토가 필요합니다. 자세한 내용은{" "}
          <Link href="/blog/medical-ad-law-compliance-guide" className="underline font-semibold">의료광고법 가이드</Link>
          를 참고하세요.
        </p>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        왜 ‘대행사 선택’이 병원 마케팅의 성패를 가르나
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        병원 마케팅은 한 번의 캠페인이 아니라 <strong>검색·플레이스·콘텐츠·AI
        인용</strong>이 누적되며 효과가 쌓이는 장기 게임입니다. 잘못된 파트너와
        6개월~1년을 보내면 비용만 잃는 게 아니라, 그 사이 경쟁 병원이 진료과·지역
        키워드와 AI 추천 자리를 선점합니다. 그래서 처음 선택이 중요합니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        병원 마케팅 대행사 선택기준 8가지
      </h2>
      <div className="space-y-4 mb-8">
        {[
          ["1. 의료광고법 이해", "심의 대상·금지표현을 알고, 심의를 통과시킬 수 있는가. 규제를 모르면 행정처분·노출 중단 리스크가 큽니다."],
          ["2. 진료과 경험", "피부과·성형외과·치과 등 우리 진료과의 환자 검색·질의 패턴을 이해하는가."],
          ["3. AI 추천(AIO) 역량", "검색뿐 아니라 ChatGPT·Gemini·Perplexity 답변에 병원이 인용되게 만드는가."],
          ["4. 네이버 플레이스·지역", "‘○○동 ○○과’ 같은 지역 질의를 잡는 플레이스·지도 최적화 역량이 있는가."],
          ["5. 측정 체계", "검색 순위뿐 아니라 AI Mention·인용 여부를 정량 측정·보고하는가."],
          ["6. 구조화 데이터", "FAQPage·Organization 등 스키마로 AI 가독성을 높일 기술 역량이 있는가."],
          ["7. 콘텐츠 깊이(E-E-A-T)", "의료진 전문성·정확한 정보로 신뢰를 쌓는 콘텐츠를 만드는가."],
          ["8. 투명성", "방법론·산출 근거를 공개하는가, 아니면 ‘비법’이라며 감추는가."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              <span className="text-primary">{t.split(".")[0]}.</span>{t.slice(t.indexOf(".") + 1)}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        한눈에 보는 평가 체크표
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-600">평가 항목</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">확인 질문</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">의료광고법</td><td className="py-2.5 px-3">“우리 광고 중 심의 대상은 무엇이고 어떻게 통과시키나요?”</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">AIO</td><td className="py-2.5 px-3">“ChatGPT가 우리 병원을 추천하는지 어떻게 측정·개선하나요?”</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">플레이스</td><td className="py-2.5 px-3">“지역 질의에서 우리 플레이스를 어떻게 띄우나요?”</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">측정</td><td className="py-2.5 px-3">“어떤 지표를 어떤 주기로 보고하나요?”</td></tr>
            <tr><td className="py-2.5 px-3 font-medium">검증</td><td className="py-2.5 px-3">“장기 계약 전 진단·파일럿으로 검증할 수 있나요?”</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">피해야 할 신호</h3>
        <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm">
          <li>“신환 ○명 보장 / AI 1위 보장” 같은 단정적 약속</li>
          <li>의료광고 심의·금지표현에 무관심</li>
          <li>노출·도달만 보고하고 AI 인용·전환 데이터가 없음</li>
          <li>방법을 전혀 공개하지 않음(재현·검증 불가)</li>
        </ul>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        더뷰미디어는 이 기준을 어떻게 충족하나
      </h2>
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-6 text-center">
        <div className="text-4xl font-extrabold text-gradient mb-1">
          {SIGNATURE.value}
          <span className="text-xl align-top text-primary">{SIGNATURE.suffix}</span>
        </div>
        <p className="text-gray-700 font-semibold text-sm">{SIGNATURE.label}</p>
        <p className="text-gray-500 text-xs mt-1">{SIGNATURE.note}</p>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">
        더뷰미디어는 의료광고법 검토를 콘텐츠 설계 단계에 내장하고, 검색·네이버
        플레이스·생성형 AI를 하나의 전략으로 통합합니다. 진단·전략·실행·추적{" "}
        <Link href="/blog/aio-4step-methodology" className="text-primary underline">4단계 방법론</Link>
        을 공개하고, AI Mention Score로 노출을 정량 추적합니다. 수치 보장이 아니라
        과정과 근거의 투명성을 약속합니다.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-2">함께 보면 좋은 글</h3>
        <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm">
          <li><Link href="/hospital-marketing" className="text-primary underline">병원 마케팅 서비스</Link> — 진료과별·채널별 통합 전략</li>
          <li><Link href="/blog/hospital-marketing-cost-guide" className="text-primary underline">병원 마케팅 비용 가이드</Link></li>
          <li><Link href="/blog/medical-ad-law-compliance-guide" className="text-primary underline">의료광고법 완벽 가이드</Link></li>
          <li><Link href="/blog/aio-agency-selection-criteria" className="text-primary underline">AIO·GEO 대행사 선택기준 7가지</Link></li>
        </ul>
      </div>
    </BlogArticle>
  );
}
