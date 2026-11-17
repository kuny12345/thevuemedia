import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "GEO vs SEO vs AIO 차이 완벽 정리 | 더뷰미디어",
  description:
    "GEO, SEO, AIO는 무엇이 다르고 어떻게 함께 작동할까요? 목적·대상·측정 지표를 표로 비교 정리했습니다.",
  keywords: ["GEO vs SEO", "AIO 차이", "생성형 엔진 최적화", "검색 최적화", "AEO", "더뷰미디어"],
  openGraph: {
    title: "GEO vs SEO vs AIO 차이 완벽 정리",
    description: "GEO·SEO·AIO의 목적·대상·측정 지표 비교.",
    type: "article",
    publishedTime: "2026-05-31T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/geo-vs-seo-vs-aio" },
};

const faq = [
  {
    q: "셋 중 하나만 하면 되나요?",
    a: "아닙니다. SEO가 토대가 되고, 그 위에 GEO/AIO를 얹는 구조가 가장 효과적입니다. 검색과 AI 답변 양쪽에서 노출을 확보할 수 있기 때문입니다.",
  },
  {
    q: "AEO는 또 무엇인가요?",
    a: "AEO(Answer Engine Optimization)는 AI의 ‘답변’에 최적화한다는 점을 강조한 용어로, GEO·AIO와 거의 같은 맥락에서 쓰입니다.",
  },
  {
    q: "측정 지표가 어떻게 다른가요?",
    a: "SEO는 키워드 순위·트래픽을, GEO/AIO는 AI 인용 여부와 AI Mention Score를 봅니다. 목표가 다르므로 평가 지표도 달라집니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="geo-vs-seo-vs-aio"
      tag="개념"
      title="GEO vs SEO vs AIO 차이 완벽 정리"
      date="2026.05.31"
      datePublished="2026-05-31T09:00:00+09:00"
      readTime="읽기 9분"
      description="GEO·SEO·AIO의 목적·대상·측정 지표 비교."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        SEO, GEO, AIO… 용어는 비슷해 보이지만 <strong>목표와 작동 방식</strong>이
        다릅니다. 헷갈리는 세 개념을 한 표로 정리합니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        한눈에 보는 비교
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left py-3 px-3 font-semibold text-gray-600">항목</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">SEO</th>
              <th className="text-left py-3 px-3 font-semibold text-gray-600">GEO / AIO</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="border-b border-gray-100">
              <td className="py-3 px-3 font-medium">목표</td>
              <td className="py-3 px-3">검색 결과 클릭</td>
              <td className="py-3 px-3">AI 답변 속 인용·추천</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-3 font-medium">대상</td>
              <td className="py-3 px-3">검색엔진(구글·네이버)</td>
              <td className="py-3 px-3">생성형 AI(ChatGPT·Gemini·Perplexity)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-3 font-medium">핵심 지표</td>
              <td className="py-3 px-3">키워드 순위·트래픽</td>
              <td className="py-3 px-3">AI Mention Score·인용 빈도</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3 px-3 font-medium">콘텐츠</td>
              <td className="py-3 px-3">키워드 중심</td>
              <td className="py-3 px-3">질문형·구조화·E-E-A-T</td>
            </tr>
            <tr>
              <td className="py-3 px-3 font-medium">채널</td>
              <td className="py-3 px-3">웹페이지 중심</td>
              <td className="py-3 px-3">웹 + 영상 + SNS 멀티채널</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        결론: 대체가 아니라 레이어링
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        GEO/AIO는 SEO를 대체하지 않습니다. <strong>SEO를 토대로</strong> 그 위에
        AI 인용을 위한 구조와 신뢰 시그널을 더하는 것이 핵심입니다. 개념 전반은{" "}
        <Link href="/blog/what-is-aio" className="text-primary underline">
          AIO란 무엇인가
        </Link>
        에서, 측정은{" "}
        <Link href="/blog/ai-mention-score-guide" className="text-primary underline">
          AI Mention Score
        </Link>
        에서 이어집니다.
      </p>
    </BlogArticle>
  );
}
