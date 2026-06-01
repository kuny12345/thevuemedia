import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "피부과 마케팅 완벽 가이드 — 시술별 키워드·AI 노출 전략 (2026) | 더뷰미디어",
  description:
    "보톡스·필러·리프팅 등 시술별로 환자 검색·AI 질의가 다릅니다. 피부과가 의료광고법을 지키며 검색과 AI 답변 양쪽에서 노출되는 시술별 전략과 콘텐츠 설계를 정리했습니다.",
  keywords: [
    "피부과 마케팅",
    "피부과 광고",
    "보톡스 필러 마케팅",
    "리프팅 마케팅",
    "피부과 AI 추천",
    "피부과 네이버 마케팅",
    "더뷰미디어",
  ],
  openGraph: {
    title: "피부과 마케팅 완벽 가이드 — 시술별 키워드·AI 노출 전략 (2026)",
    description: "시술별 검색·AI 질의 차이에 맞춘 피부과 노출 전략.",
    type: "article",
    publishedTime: "2026-05-30T10:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/dermatology-marketing-guide" },
};

const faq = [
  {
    q: "피부과는 왜 시술별로 따로 전략을 짜야 하나요?",
    a: "보톡스·필러·리프팅·여드름·색소 등 시술마다 환자층과 검색·AI 질의가 다르기 때문입니다. ‘피부과’ 한 단어로 묶으면 정작 환자가 묻는 시술별 질의에서 노출되지 않습니다.",
  },
  {
    q: "전후 사진을 쓰면 효과적이지 않나요?",
    a: "효과적으로 보여도 의료광고법상 오인 우려가 있는 전후 사진·후기는 제한될 수 있습니다. 사용 전 심의·전문가 검토가 필요하며, 정확한 시술 정보 중심으로 설계하는 편이 안전하고 AI 신뢰도도 높습니다.",
  },
  {
    q: "지역 키워드도 중요한가요?",
    a: "매우 중요합니다. ‘○○동 피부과’, ‘○○역 리프팅’ 같은 지역+시술 질의가 많아, 네이버 플레이스 최적화와 함께 가야 합니다.",
  },
  {
    q: "AI가 피부과를 추천할 때 무엇을 보나요?",
    a: "정확한 시술 정보, 시술별 FAQ, 의료진 전문성, 지역 신호, 그리고 여러 채널에서의 일관된 언급을 봅니다. 구조화 데이터(FAQPage 등)가 인용에 유리합니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="dermatology-marketing-guide"
      tag="병원마케팅"
      title="피부과 마케팅 완벽 가이드 — 시술별 키워드·AI 노출 전략 (2026)"
      date="2026.05.30"
      datePublished="2026-05-30T10:00:00+09:00"
      readTime="읽기 13분"
      description="시술별 검색·AI 질의 차이에 맞춘 피부과 노출 전략."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        피부과 마케팅의 핵심은 <strong>“피부과”가 아니라 “시술”</strong>입니다.
        환자는 “피부과”가 아니라 “보톡스 잘하는 곳”, “○○동 리프팅”을 검색하고
        AI에게 묻습니다. 시술별로 다른 질의에 맞춰 노출 전략을 설계해야 합니다.
      </p>

      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
        <p className="text-amber-900 text-sm leading-relaxed">
          <strong>규제 유의:</strong> 시술 효과 보장·과장, 오인 우려 후기/전후
          사진 등은 의료광고법상 제한됩니다. 콘텐츠는 사실 기반 정보로 설계하고
          심의 대상 여부를 확인하세요. <Link href="/blog/medical-ad-law-compliance-guide" className="underline font-semibold">의료광고법 가이드</Link>
        </p>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">시술별 질의 특성</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-600">시술군</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">환자 관심사</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">콘텐츠 방향</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">보톡스·필러</td><td className="py-2.5 px-3">부위·지속기간·자연스러움</td><td className="py-2.5 px-3">부위별 정보·FAQ</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">리프팅</td><td className="py-2.5 px-3">장비·통증·회복</td><td className="py-2.5 px-3">장비별 차이·절차 안내</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">여드름·흉터</td><td className="py-2.5 px-3">치료 과정·기간</td><td className="py-2.5 px-3">단계별 치료 정보</td></tr>
            <tr><td className="py-2.5 px-3 font-medium">색소·미백</td><td className="py-2.5 px-3">원인·관리</td><td className="py-2.5 px-3">원인별 정보·홈케어 안내</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">시술별 + 지역 키워드 결합</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        “시술 + 지역”이 피부과 질의의 핵심 패턴입니다. 각 시술 페이지에 정확한
        정보와 FAQ를 두고, <Link href="/blog/hospital-naver-place-marketing" className="text-primary underline">네이버 플레이스</Link>로
        지역 신호를 강화하면 검색과 AI 추천 양쪽에서 노출 기회가 커집니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">AI 추천을 부르는 피부과 콘텐츠</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>시술별 상세 정보:</strong> 적응증·과정·주의사항을 정확히</li>
        <li><strong>시술별 FAQ:</strong> 비용·통증·회복 등 자주 묻는 질문에 사실 기반 답변</li>
        <li><strong>의료진 전문성:</strong> 자격·경력 등 검증 가능한 신뢰 정보</li>
        <li><strong>구조화 데이터:</strong> FAQPage·Organization 스키마 — <Link href="/blog/schema-markup-for-aio" className="text-primary underline">스키마와 AIO</Link></li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          성형외과는{" "}
          <Link href="/blog/plastic-surgery-marketing-guide" className="text-primary font-semibold underline">성형외과 마케팅 가이드</Link>
          , 비용은{" "}
          <Link href="/blog/hospital-marketing-cost-guide" className="text-primary font-semibold underline">병원 마케팅 비용 가이드</Link>
          , 서비스는{" "}
          <Link href="/hospital-marketing" className="text-primary font-semibold underline">병원 마케팅</Link>
          을 참고하세요.
        </p>
      </div>
    </BlogArticle>
  );
}
