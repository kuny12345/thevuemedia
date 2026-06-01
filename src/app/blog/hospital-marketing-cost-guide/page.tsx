import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "병원 마케팅 비용 가이드 — 진료과·채널별 예산 잡는 법 (2026) | 더뷰미디어",
  description:
    "병원 마케팅 비용은 진료과·경쟁강도·채널 구성에 따라 크게 달라집니다. 검색·플레이스·콘텐츠·AIO 단계별 비용 구조와 합리적 예산 설계법, 과금 방식을 정리했습니다.",
  keywords: [
    "병원 마케팅 비용",
    "병원 마케팅 견적",
    "피부과 마케팅 비용",
    "성형외과 마케팅 비용",
    "병원 광고비",
    "의료 마케팅 단가",
    "더뷰미디어",
  ],
  openGraph: {
    title: "병원 마케팅 비용 가이드 — 진료과·채널별 예산 잡는 법 (2026)",
    description: "검색·플레이스·콘텐츠·AIO 단계별 비용 구조와 예산 설계법.",
    type: "article",
    publishedTime: "2026-05-31T10:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/hospital-marketing-cost-guide" },
};

const faq = [
  {
    q: "병원 마케팅 비용은 왜 업체마다 천차만별인가요?",
    a: "작업 범위가 다르기 때문입니다. 단순 검색 광고 대행과, 콘텐츠·플레이스·AIO·측정까지 포함한 통합 운영은 비용이 다를 수밖에 없습니다. 견적을 받을 때 ‘무엇이 포함되는지’를 단계별로 확인해야 비교가 됩니다.",
  },
  {
    q: "광고비와 대행 수수료는 다른 건가요?",
    a: "네. 네이버·구글에 직접 지불하는 매체 광고비와, 대행사에 지불하는 운영 수수료는 별개입니다. 견적서에서 둘을 구분해 확인하세요.",
  },
  {
    q: "저예산으로 시작할 수 있나요?",
    a: "가능합니다. 진단 후 우선순위 높은 진료과·지역 키워드와 플레이스부터 시작해, 효과를 보며 확장하는 방식이 비용 효율적입니다.",
  },
  {
    q: "성과 보장형(신환당 과금)은 어떤가요?",
    a: "매력적으로 보이지만, 의료광고법상 환자 유인성 과금 구조는 문제가 될 수 있고 품질 저하 유인도 있습니다. 구조의 적법성과 측정 투명성을 반드시 확인하세요.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="hospital-marketing-cost-guide"
      tag="병원마케팅"
      title="병원 마케팅 비용 가이드 — 진료과·채널별 예산 잡는 법 (2026)"
      date="2026.05.31"
      datePublished="2026-05-31T10:00:00+09:00"
      readTime="읽기 12분"
      description="검색·플레이스·콘텐츠·AIO 단계별 비용 구조와 예산 설계법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        “병원 마케팅, 한 달에 얼마면 되나요?” 정답은 <strong>“진료과와 범위에 따라
        다르다”</strong>입니다. 막연한 견적 대신 비용을 움직이는 요인을 이해하면,
        우리 병원 상황에 맞는 합리적 예산을 직접 설계할 수 있습니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">비용을 결정하는 4가지 요인</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>진료과 경쟁강도:</strong> 피부과·성형외과처럼 경쟁이 치열한 분야는 키워드 단가와 콘텐츠 요구가 높습니다.</li>
        <li><strong>지역·상권:</strong> 강남권 등 경쟁 밀집 지역은 노출 경쟁이 큽니다.</li>
        <li><strong>채널 구성:</strong> 검색·플레이스·콘텐츠·AIO 중 몇 개를 운영하는가.</li>
        <li><strong>콘텐츠 분량·측정 수준:</strong> 토픽 클러스터 규모와 리포트·대시보드 수준.</li>
      </ul>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">단계별 비용 구조</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-600">단계</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">내용</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">과금 형태</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">진단</td><td className="py-2.5 px-3">AI·검색 노출 현황, 경쟁 분석</td><td className="py-2.5 px-3">초기 일회성</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">구축</td><td className="py-2.5 px-3">키워드 설계, 홈페이지·콘텐츠·스키마</td><td className="py-2.5 px-3">프로젝트형</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">운영</td><td className="py-2.5 px-3">콘텐츠 발행, 플레이스·멀티채널 관리</td><td className="py-2.5 px-3">월 구독형</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">매체 광고</td><td className="py-2.5 px-3">네이버·구글 검색광고 등</td><td className="py-2.5 px-3">매체비 별도(실비)</td></tr>
            <tr><td className="py-2.5 px-3 font-medium">측정</td><td className="py-2.5 px-3">AI Mention·노출 추적, 리포트</td><td className="py-2.5 px-3">운영 포함이 일반적</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mb-8">
        ※ 구체적 금액은 진료과·지역·범위에 따라 크게 달라지므로 본 글에서는 비용
        ‘구조’를 다룹니다. 정확한 견적은 진단 후 산정하는 것이 합리적입니다.
      </p>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">예산 설계 3원칙</h3>
        <ul className="list-disc pl-6 space-y-1.5 text-gray-600 text-sm">
          <li><strong>단계적 투입:</strong> 진단 → 파일럿 → 확장으로 효과를 보며 늘립니다.</li>
          <li><strong>매체비/수수료 분리:</strong> 견적서에서 둘을 구분해 비교합니다.</li>
          <li><strong>측정 포함 확인:</strong> 측정·리포트가 비용에 포함되는지 확인합니다.</li>
        </ul>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          대행사 고르는 기준은{" "}
          <Link href="/blog/hospital-marketing-agency-recommend-2026" className="text-primary font-semibold underline">병원 마케팅 대행사 추천 가이드</Link>
          를, 규제는{" "}
          <Link href="/blog/medical-ad-law-compliance-guide" className="text-primary font-semibold underline">의료광고법 가이드</Link>
          를, 서비스는{" "}
          <Link href="/hospital-marketing" className="text-primary font-semibold underline">병원 마케팅</Link>
          을 참고하세요.
        </p>
      </div>
    </BlogArticle>
  );
}
