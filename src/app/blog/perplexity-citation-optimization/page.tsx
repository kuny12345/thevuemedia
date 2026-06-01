import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "Perplexity 인용 최적화 가이드 — 출처로 선택되는 콘텐츠 | 더뷰미디어",
  description:
    "Perplexity는 답변에 출처를 명시합니다. 인용 출처로 선택되기 위한 콘텐츠 구조·근거 표기·구조화 데이터 전략을 정리했습니다.",
  keywords: [
    "Perplexity 최적화",
    "Perplexity 인용",
    "AI 검색 출처",
    "GEO",
    "퍼플렉시티 마케팅",
    "더뷰미디어",
  ],
  openGraph: {
    title: "Perplexity 인용 최적화 가이드 — 출처로 선택되는 콘텐츠",
    description: "Perplexity 답변의 인용 출처로 선택되는 콘텐츠 전략.",
    type: "article",
    publishedTime: "2026-05-28T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/perplexity-citation-optimization" },
};

const faq = [
  {
    q: "Perplexity는 다른 AI와 무엇이 다른가요?",
    a: "Perplexity는 답변마다 참조한 출처 링크를 명시적으로 보여주는 ‘인용 중심’ 엔진입니다. 따라서 ‘인용 가능한 형태의 근거 있는 콘텐츠’가 특히 중요합니다.",
  },
  {
    q: "어떤 콘텐츠가 인용되기 쉽나요?",
    a: "질문에 직접 답하는 명료한 문장, 수치·근거·출처가 표기된 단락, 잘 구조화된 제목 위계와 FAQ가 인용되기 쉽습니다. 모호하고 장황한 글은 발췌되기 어렵습니다.",
  },
  {
    q: "최신성이 중요한가요?",
    a: "네. Perplexity는 실시간 검색을 결합하므로 최신 정보와 갱신된 페이지가 유리합니다. 콘텐츠의 작성·갱신일을 명확히 하는 것이 도움이 됩니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="perplexity-citation-optimization"
      tag="엔진별"
      title="Perplexity 인용 최적화 가이드 — 출처로 선택되는 콘텐츠"
      date="2026.05.28"
      datePublished="2026-05-28T09:00:00+09:00"
      readTime="읽기 10분"
      description="Perplexity 답변의 인용 출처로 선택되는 콘텐츠 전략."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Perplexity는 답변마다 <strong>출처 링크</strong>를 보여주는 인용 중심
        엔진입니다. 즉, Perplexity 최적화의 핵심은 “검색 1위”가 아니라{" "}
        <strong>“인용 출처로 선택되는 것”</strong>입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        Perplexity가 출처를 고르는 방식
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Perplexity는 질문을 이해한 뒤 웹을 검색하고, 답변을 구성하며 근거가 되는
        페이지를 인용합니다. 따라서 <strong>질문에 정확히 답하는 단락</strong>,
        <strong>근거·출처가 표기된 문장</strong>, <strong>명료한 구조</strong>를
        갖춘 콘텐츠가 유리합니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        인용되기 위한 콘텐츠 전략
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>질문형 헤딩:</strong> 사용자가 실제로 묻는 질문을 H2/H3로 두고 바로 아래에 핵심 답을 배치</li>
        <li><strong>근거 표기:</strong> 주장에 수치·출처·날짜를 함께 적어 인용 신뢰도를 높임</li>
        <li><strong>발췌 친화 단락:</strong> 한 단락에 하나의 핵심 — 길고 복잡한 문장 지양</li>
        <li><strong>구조화 데이터:</strong> FAQPage·Article 스키마로 맥락을 명확히 — <Link href="/blog/schema-markup-for-aio" className="text-primary underline">스키마와 AIO</Link></li>
        <li><strong>최신성 관리:</strong> 작성·갱신일을 명시하고 주기적으로 업데이트</li>
      </ul>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">핵심</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Perplexity는 “인용하기 쉬운 콘텐츠”를 좋아합니다. 질문-답 구조, 명확한
          근거, 최신성 — 이 셋이 인용 확률을 좌우합니다. 작동 원리 전반은{" "}
          <Link href="/blog/how-llm-recommends-brands" className="text-primary underline">
            LLM은 어떤 원리로 브랜드를 추천하는가
          </Link>
          를 참고하세요.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          다른 엔진 전략은{" "}
          <Link href="/blog/gemini-ai-overview-guide" className="text-primary font-semibold underline">
            Gemini·AI 오버뷰
          </Link>
          ,{" "}
          <Link href="/blog/copilot-visibility-guide" className="text-primary font-semibold underline">
            Copilot
          </Link>
          {" "}가이드에서 이어집니다.
        </p>
      </div>
    </BlogArticle>
  );
}
