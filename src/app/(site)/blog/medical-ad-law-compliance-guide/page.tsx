import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "의료광고법 완벽 가이드 — 심의·금지표현·체크리스트 (2026) | 더뷰미디어",
  description:
    "의료광고는 사전심의 대상이며 금지표현이 많습니다. 병원 마케팅·AIO 콘텐츠를 만들 때 반드시 알아야 할 의료광고법의 핵심(금지유형·사전심의·자율심의기구)과 실무 체크리스트를 정리했습니다.",
  keywords: [
    "의료광고법",
    "의료광고 심의",
    "의료광고 사전심의",
    "병원 광고 금지표현",
    "의료법 56조",
    "병원 마케팅 규제",
    "더뷰미디어",
  ],
  openGraph: {
    title: "의료광고법 완벽 가이드 — 심의·금지표현·체크리스트 (2026)",
    description: "의료광고 금지유형·사전심의·실무 체크리스트 정리.",
    type: "article",
    publishedTime: "2026-05-28T10:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/medical-ad-law-compliance-guide" },
};

const faq = [
  {
    q: "모든 병원 광고가 사전심의 대상인가요?",
    a: "아닙니다. 의료법령이 정한 일정 매체의 의료광고가 자율심의기구의 사전심의 대상입니다. 매체·형태에 따라 대상 여부가 달라지므로, 광고 전에 대상 여부를 먼저 확인해야 합니다. 정확한 판단은 자율심의기구·전문가 검토를 권합니다.",
  },
  {
    q: "치료 후기·전후 사진은 쓸 수 있나요?",
    a: "치료경험담 등 소비자를 오인하게 할 우려가 있는 표현은 제한됩니다. 전후 사진 등도 조건과 맥락에 따라 문제가 될 수 있어 신중해야 합니다. 사용 전 심의·전문가 검토가 필요합니다.",
  },
  {
    q: "AIO 콘텐츠(블로그·FAQ)도 의료광고인가요?",
    a: "내용과 목적에 따라 의료광고에 해당할 수 있습니다. 단순 정보 제공을 넘어 특정 의료기관·시술을 권유·유인하는 성격이면 규제 대상이 될 수 있으므로, 사실 기반 정보 제공으로 설계하고 필요한 경우 심의를 받아야 합니다.",
  },
  {
    q: "위반하면 어떤 제재가 있나요?",
    a: "의료법에 따라 행정처분(업무정지 등)·벌칙이 부과될 수 있고, 광고 중단·신뢰 훼손으로 이어집니다. 규제 준수는 리스크 관리이자 장기적으로 AI·검색 신뢰도에도 유리합니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="medical-ad-law-compliance-guide"
      tag="병원마케팅"
      title="의료광고법 완벽 가이드 — 심의·금지표현·체크리스트 (2026)"
      date="2026.05.28"
      datePublished="2026-05-28T10:00:00+09:00"
      readTime="읽기 12분"
      description="의료광고 금지유형·사전심의·실무 체크리스트 정리."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        병원 마케팅에서 가장 먼저 막히는 벽이 <strong>의료광고법</strong>입니다.
        금지표현이 많고 상당수 광고가 <strong>사전심의 대상</strong>이라, 규제를
        모르면 노출은커녕 행정처분 리스크를 떠안습니다. 핵심만 정리합니다.
      </p>

      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
        <p className="text-amber-900 text-sm leading-relaxed">
          <strong>면책:</strong> 본 글은 의료광고 규제에 대한 일반적 정보이며 법률
          자문이 아닙니다. 법령·심의 기준은 개정될 수 있으므로, 실제 광고는 반드시
          자율심의기구·법률 전문가의 검토를 받으시기 바랍니다.
        </p>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        의료광고는 ‘기본 금지, 예외 허용’ 구조에 가깝다
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        의료법은 의료광고에 대해 광범위한 금지 유형을 두고, 일정 매체 광고는
        사전심의를 거치도록 합니다. 즉 “일단 올리고 문제되면 내린다”가 아니라{" "}
        <strong>“규정을 먼저 확인하고 만든다”</strong>가 기본 태도여야 합니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">대표적인 금지·주의 유형</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-600">유형</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">예시(피해야 할 표현)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">거짓·과장</td><td className="py-2.5 px-3">“100% 완치”, “부작용 전혀 없음”</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">치료경험담</td><td className="py-2.5 px-3">오인 우려가 있는 환자 후기·체험기</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">비교·비방</td><td className="py-2.5 px-3">“○○보다 우수”, 다른 병원 비방</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">환자 유인</td><td className="py-2.5 px-3">금품·할인으로 환자를 유인·알선</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">근거 없는 표현</td><td className="py-2.5 px-3">객관적 근거 없는 “최고·1위·유일”</td></tr>
            <tr><td className="py-2.5 px-3 font-medium">미평가 신의료기술</td><td className="py-2.5 px-3">평가받지 않은 시술의 효과 광고</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mb-8">
        ※ 위 표는 이해를 돕기 위한 일반적 예시이며, 실제 적용은 매체·맥락·최신
        심의 기준에 따라 달라집니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">사전심의는 누가, 무엇을</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        일정 매체의 의료광고는 의료기관단체 등 <strong>자율심의기구</strong>(대한의사협회·
        대한치과의사협회·대한한의사협회 등)의 사전심의를 받아야 합니다. 매체·형태에
        따라 대상 여부가 달라지므로, 콘텐츠 기획 단계에서 “이 광고가 심의 대상인가”를
        먼저 판단하는 것이 안전합니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">실무 체크리스트</h2>
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
        <ul className="space-y-2 text-gray-600 text-sm">
          {[
            "이 콘텐츠/광고가 ‘의료광고’에 해당하는가",
            "사전심의 대상 매체인가 — 대상이면 심의 신청",
            "거짓·과장·단정(100%, 완치, 1위 등) 표현이 없는가",
            "치료경험담·오인 우려 표현이 없는가",
            "비교·비방·환자 유인 요소가 없는가",
            "객관적 근거 없는 ‘최고/유일’ 표현이 없는가",
            "시술 정보가 정확하고 부작용·주의사항을 균형있게 안내하는가",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2">
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded border border-gray-300 bg-white" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">규제 준수가 곧 AIO 경쟁력</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          AI는 정확하고 신뢰할 수 있는 정보를 선호합니다. 과장 없는 사실 기반
          콘텐츠는 규제도 지키고 AI 인용도 얻는 ‘이중 이득’입니다. 규제는 제약이
          아니라 신뢰의 토대입니다.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          준수하며 노출을 높이는 법은{" "}
          <Link href="/blog/hospital-aio-guide" className="text-primary font-semibold underline">병원·의료 AIO 가이드</Link>
          , 서비스는{" "}
          <Link href="/hospital-marketing" className="text-primary font-semibold underline">병원 마케팅</Link>
          을 참고하세요.
        </p>
      </div>
    </BlogArticle>
  );
}
