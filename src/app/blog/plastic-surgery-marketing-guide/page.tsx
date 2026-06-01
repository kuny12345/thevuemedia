import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "성형외과 마케팅 가이드 — AI·검색 통합 전략 (2026) | 더뷰미디어",
  description:
    "경쟁이 치열한 성형외과 마케팅, 의료광고 심의를 지키며 AI 추천과 검색 상위를 동시에 노리는 통합 전략과 콘텐츠 설계, 신뢰 시그널 확보법을 정리했습니다.",
  keywords: [
    "성형외과 마케팅",
    "성형 마케팅 대행사",
    "성형외과 광고",
    "성형외과 AI 추천",
    "성형외과 바이럴",
    "성형외과 네이버",
    "더뷰미디어",
  ],
  openGraph: {
    title: "성형외과 마케팅 가이드 — AI·검색 통합 전략 (2026)",
    description: "심의를 지키며 AI 추천과 검색 상위를 동시에 노리는 성형외과 전략.",
    type: "article",
    publishedTime: "2026-05-29T10:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/plastic-surgery-marketing-guide" },
};

const faq = [
  {
    q: "성형외과 마케팅이 특히 어려운 이유는?",
    a: "경쟁이 극심하고, 의료광고 규제가 까다로우며, 환자가 신중하게 비교·검색하기 때문입니다. 단발 광고보다 신뢰를 쌓는 정보 콘텐츠와 AI·검색 통합 전략이 필요합니다.",
  },
  {
    q: "후기·전후 사진 마케팅은 가능한가요?",
    a: "오인 우려가 있는 치료경험담·전후 사진은 의료광고법상 제한될 수 있습니다. 사용 전 심의·전문가 검토가 필수이며, 시술 정보·절차·의료진 전문성 중심 설계가 더 안전합니다.",
  },
  {
    q: "AI 추천이 성형외과에도 효과가 있나요?",
    a: "큽니다. ‘○○ 잘하는 성형외과’ 같은 질의가 AI로 옮겨가고 있어, AI 답변에 병원이 포함되면 비교 단계의 환자에게 강하게 작용합니다.",
  },
  {
    q: "어떤 채널부터 시작해야 하나요?",
    a: "진단으로 현재 노출을 파악한 뒤, 경쟁이 덜한 세부 시술·지역 키워드와 네이버 플레이스부터 시작해 검색·AIO로 확장하는 단계적 접근을 권합니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="plastic-surgery-marketing-guide"
      tag="병원마케팅"
      title="성형외과 마케팅 가이드 — AI·검색 통합 전략 (2026)"
      date="2026.05.29"
      datePublished="2026-05-29T10:00:00+09:00"
      readTime="읽기 13분"
      description="심의를 지키며 AI 추천과 검색 상위를 동시에 노리는 성형외과 전략."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        성형외과는 <strong>가장 경쟁이 치열하고 가장 규제가 까다로운</strong>
        진료과입니다. 환자는 신중하게 비교하고, 점점 더 AI에게 묻습니다. 단발
        광고가 아니라 <strong>신뢰 + AI·검색 통합</strong>이 답입니다.
      </p>

      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
        <p className="text-amber-900 text-sm leading-relaxed">
          <strong>규제 유의:</strong> 성형외과 광고는 의료광고 심의·금지표현이
          특히 엄격합니다. 효과 보장·오인 우려 후기·비교/비방 표현을 배제하고
          심의 대상 여부를 확인하세요. <Link href="/blog/medical-ad-law-compliance-guide" className="underline font-semibold">의료광고법 가이드</Link>
        </p>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        환자의 의사결정 여정에 맞춘 콘텐츠
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-600">단계</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">환자 질의</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">콘텐츠</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">인지</td><td className="py-2.5 px-3">“○○ 수술 어떤 거야?”</td><td className="py-2.5 px-3">시술 정보·종류 설명</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">비교</td><td className="py-2.5 px-3">“○○ 잘하는 곳?”</td><td className="py-2.5 px-3">선택 기준·의료진 전문성</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">신뢰</td><td className="py-2.5 px-3">“부작용·회복은?”</td><td className="py-2.5 px-3">주의사항·회복 과정 FAQ</td></tr>
            <tr><td className="py-2.5 px-3 font-medium">결정</td><td className="py-2.5 px-3">“상담·예약”</td><td className="py-2.5 px-3">절차 안내·상담 동선</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">AI·검색 통합 전략</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>세부 시술·지역 키워드:</strong> 경쟁이 덜한 롱테일부터 선점</li>
        <li><strong>신뢰 콘텐츠:</strong> 의료진 전문성·정확한 정보로 E-E-A-T 확보</li>
        <li><strong>구조화 데이터:</strong> FAQPage·Organization 스키마로 AI 인용성 강화</li>
        <li><strong>플레이스·후기 관리:</strong> 지역 신호와 진정성 있는 평판 관리</li>
        <li><strong>측정:</strong> AI Mention·검색 노출을 함께 추적</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          피부과는{" "}
          <Link href="/blog/dermatology-marketing-guide" className="text-primary font-semibold underline">피부과 마케팅 가이드</Link>
          , 대행사 선택은{" "}
          <Link href="/blog/hospital-marketing-agency-recommend-2026" className="text-primary font-semibold underline">병원 마케팅 대행사 추천</Link>
          , 서비스는{" "}
          <Link href="/hospital-marketing" className="text-primary font-semibold underline">병원 마케팅</Link>
          을 참고하세요.
        </p>
      </div>
    </BlogArticle>
  );
}
