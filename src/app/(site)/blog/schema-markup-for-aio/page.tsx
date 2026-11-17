import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "스키마 마크업과 AIO — 구조화 데이터 실전 | 더뷰미디어",
  description:
    "FAQPage·ItemList·Organization 등 schema.org 구조화 데이터가 AI 인용에 어떻게 기여하는지, 실전 적용법과 함께 정리했습니다.",
  keywords: ["스키마 마크업", "구조화 데이터", "schema.org", "FAQPage", "ItemList", "더뷰미디어"],
  openGraph: {
    title: "스키마 마크업과 AIO — 구조화 데이터 실전",
    description: "구조화 데이터가 AI 인용에 기여하는 방식과 실전 적용법.",
    type: "article",
    publishedTime: "2026-05-26T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/schema-markup-for-aio" },
};

const faq = [
  {
    q: "스키마만 넣으면 AI에 노출되나요?",
    a: "스키마는 ‘충분조건’이 아니라 ‘가독성 보강’입니다. 좋은 콘텐츠가 전제이고, 스키마는 AI·검색엔진이 그 콘텐츠의 맥락을 정확히 이해하도록 돕는 역할을 합니다.",
  },
  {
    q: "어떤 스키마가 AIO에 중요한가요?",
    a: "FAQPage(질문-답), Article/BlogPosting(콘텐츠), Organization(주체), BreadcrumbList(구조), ItemList(비교·목록)가 핵심입니다. 서비스 페이지엔 Service·HowTo도 유효합니다.",
  },
  {
    q: "스키마는 어떻게 검증하나요?",
    a: "Google Rich Results Test나 schema.org 검증 도구로 문법 오류와 필수 필드를 점검합니다. 페이지의 실제 내용과 스키마가 일치해야 합니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="schema-markup-for-aio"
      tag="개념"
      title="스키마 마크업과 AIO — 구조화 데이터 실전"
      date="2026.05.26"
      datePublished="2026-05-26T09:00:00+09:00"
      readTime="읽기 11분"
      description="구조화 데이터가 AI 인용에 기여하는 방식과 실전 적용법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        <strong>스키마 마크업(구조화 데이터)</strong>은 AI와 검색엔진이 페이지의
        의미를 정확히 이해하도록 돕는 ‘기계가 읽는 라벨’입니다. AIO에서 스키마는
        콘텐츠의 인용 가능성을 높이는 핵심 인프라입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        왜 스키마가 AIO에 중요한가
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        AI는 비정형 텍스트보다 <strong>명시적으로 구조화된 정보</strong>를 더
        정확히 해석합니다. “이 페이지는 FAQ다”, “이건 비교 목록이다”라고 알려주면
        AI가 해당 내용을 답변에 발췌·인용하기 쉬워집니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        AIO 핵심 스키마 5종
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-600">스키마</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">용도</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">FAQPage</td><td className="py-2.5 px-3">질문-답을 명시 — AI Q&amp;A 추출에 직결</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">Article / BlogPosting</td><td className="py-2.5 px-3">콘텐츠의 저자·발행일·주제 명시</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">Organization</td><td className="py-2.5 px-3">브랜드 주체·전문 분야 명시</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 px-3 font-medium">BreadcrumbList</td><td className="py-2.5 px-3">사이트 구조·맥락 제공</td></tr>
            <tr><td className="py-2.5 px-3 font-medium">ItemList</td><td className="py-2.5 px-3">비교·랭킹·목록 구조화</td></tr>
          </tbody>
        </table>
      </div>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">실전 원칙</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          스키마는 <strong>페이지의 실제 내용과 일치</strong>해야 합니다. 보이지
          않는 정보를 스키마에만 넣는 것은 위반이며, 신뢰를 깎습니다. 작성 후
          Rich Results Test로 반드시 검증하세요.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          이 사이트의 모든 콘텐츠도 FAQPage·Article·BreadcrumbList·Organization
          스키마로 구조화되어 있습니다. AIO 전반은{" "}
          <Link href="/blog/what-is-aio" className="text-primary font-semibold underline">
            AIO란 무엇인가
          </Link>
          를 참고하세요.
        </p>
      </div>
    </BlogArticle>
  );
}
