import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "이커머스·쇼핑몰 AIO 가이드 | 더뷰미디어",
  description:
    "AI가 제품·브랜드를 추천하는 쇼핑 질의에서 노출되는 법. 제품 스키마, 리뷰 시그널, 비교 콘텐츠 전략을 다룹니다.",
  keywords: ["이커머스 마케팅", "쇼핑몰 AIO", "제품 AI 추천", "커머스 GEO", "온라인 쇼핑몰 마케팅", "더뷰미디어"],
  openGraph: {
    title: "이커머스·쇼핑몰 AIO 가이드",
    description: "AI 쇼핑 질의에서 제품·브랜드가 추천되는 법.",
    type: "article",
    publishedTime: "2026-05-23T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/ecommerce-aio-guide" },
};

const faq = [
  {
    q: "AI가 제품을 추천할 때 무엇을 보나요?",
    a: "제품 정보의 정확성·구조화, 리뷰와 평판, 여러 채널에서의 일관된 언급을 봅니다. Product·Review 스키마로 정보를 구조화하면 인용에 유리합니다.",
  },
  {
    q: "리뷰가 정말 중요한가요?",
    a: "중요합니다. AI는 제3자 평가를 신뢰 신호로 받아들입니다. 단, 조작된 리뷰는 위험하며, 진정성 있는 리뷰 확보·관리가 핵심입니다.",
  },
  {
    q: "비교 콘텐츠가 효과적인가요?",
    a: "네. ‘○○ 비교’, ‘○○ 추천’ 질의가 많은 만큼, 객관적 기준으로 정리한 비교 콘텐츠가 인용되기 쉽습니다. 단 과장·허위 비교는 피해야 합니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="ecommerce-aio-guide"
      tag="버티컬"
      title="이커머스·쇼핑몰 AIO 가이드"
      date="2026.05.23"
      datePublished="2026-05-23T09:00:00+09:00"
      readTime="읽기 9분"
      description="AI 쇼핑 질의에서 제품·브랜드가 추천되는 법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        소비자는 “가성비 좋은 ○○ 추천”을 AI에게 묻습니다. 이커머스 AIO는 이런
        쇼핑 질의에서 <strong>우리 제품·브랜드가 추천</strong>되도록 정보와 신뢰
        시그널을 설계하는 일입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        AI 쇼핑 추천의 3요소
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>정확한 제품 정보:</strong> 사양·용도·차별점을 명료하게, Product 스키마로 구조화</li>
        <li><strong>리뷰·평판:</strong> 진정성 있는 리뷰와 평점(Review/AggregateRating) 관리</li>
        <li><strong>비교·추천 콘텐츠:</strong> 객관적 기준의 비교로 인용 가능성 확보</li>
      </ul>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        실전 포인트
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li>제품 상세에 Product·Offer·Review 스키마 적용 — <Link href="/blog/schema-markup-for-aio" className="text-primary underline">스키마와 AIO</Link></li>
        <li>“○○ 추천/비교” 질의에 답하는 가이드 콘텐츠 제작</li>
        <li>다채널(웹·영상·SNS)에서 일관된 제품 메시지 노출</li>
        <li>과장·허위 표현 배제(표시광고법 준수)</li>
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          AIO 기본은{" "}
          <Link href="/blog/what-is-aio" className="text-primary font-semibold underline">AIO란 무엇인가</Link>
          , 측정은{" "}
          <Link href="/blog/ai-mention-score-guide" className="text-primary font-semibold underline">AI Mention Score</Link>
          를 참고하세요.
        </p>
      </div>
    </BlogArticle>
  );
}
