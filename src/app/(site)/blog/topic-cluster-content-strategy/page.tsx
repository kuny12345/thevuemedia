import type { Metadata } from "next";
import Link from "next/link";
import BlogArticle from "@/components/BlogArticle";

export const metadata: Metadata = {
  title: "AI 검색 시대 토픽 클러스터 콘텐츠 전략 | 더뷰미디어",
  description:
    "단발성 글이 아니라 주제 군집(토픽 클러스터)으로 권위를 쌓는 법. 허브-스포크 구조와 내부링크 설계를 안내합니다.",
  keywords: ["토픽 클러스터", "콘텐츠 전략", "내부링크", "AIO 콘텐츠", "허브 스포크", "더뷰미디어"],
  openGraph: {
    title: "AI 검색 시대 토픽 클러스터 콘텐츠 전략",
    description: "허브-스포크 구조로 AI가 신뢰하는 주제 권위를 쌓는 법.",
    type: "article",
    publishedTime: "2026-05-25T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/topic-cluster-content-strategy" },
};

const faq = [
  {
    q: "토픽 클러스터가 왜 AIO에 효과적인가요?",
    a: "한 주제를 여러 각도로 깊이 다루면, AI가 그 브랜드를 해당 주제의 권위 있는 출처로 인식할 가능성이 커집니다. 단발성 글보다 ‘주제 전체를 덮는’ 군집이 강합니다.",
  },
  {
    q: "몇 개의 글이 필요한가요?",
    a: "정해진 수는 없습니다. 핵심은 ‘기둥(필러) 글 + 세부(스포크) 글’이 내부링크로 촘촘히 연결되어 주제를 빠짐없이 덮는 것입니다.",
  },
  {
    q: "내부링크는 어떻게 설계하나요?",
    a: "필러 글이 허브가 되어 모든 스포크를 링크하고, 스포크끼리도 관련 주제를 상호 링크합니다. 이 사이트의 /blog 인덱스가 허브 역할을 합니다.",
  },
];

export default function Page() {
  return (
    <BlogArticle
      slug="topic-cluster-content-strategy"
      tag="전략"
      title="AI 검색 시대 토픽 클러스터 콘텐츠 전략"
      date="2026.05.25"
      datePublished="2026-05-25T09:00:00+09:00"
      readTime="읽기 10분"
      description="허브-스포크 구조로 AI가 신뢰하는 주제 권위를 쌓는 법."
      faq={faq}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        AI는 한 편의 글이 아니라 <strong>주제 전체를 얼마나 깊이 덮는가</strong>로
        권위를 판단합니다. 그래서 AIO 콘텐츠의 기본 단위는 글 한 편이 아니라{" "}
        <strong>토픽 클러스터</strong>입니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        허브-스포크 구조
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        토픽 클러스터는 <strong>필러(허브) 글</strong> 하나와 그것을 둘러싼{" "}
        <strong>여러 스포크 글</strong>로 구성됩니다. 필러는 주제를 폭넓게 다루고,
        스포크는 세부 질문을 깊이 답합니다. 모든 글은 내부링크로 연결됩니다.
      </p>

      <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
        클러스터 설계 4단계
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        <li><strong>주제 정의:</strong> 우리가 권위를 갖고 싶은 핵심 주제 선정(예: ‘AIO’)</li>
        <li><strong>질문 발굴:</strong> 고객이 AI에 묻는 세부 질문 목록화</li>
        <li><strong>필러+스포크 작성:</strong> 필러 1편 + 질문별 스포크 다수</li>
        <li><strong>내부링크 연결:</strong> 허브-스포크, 스포크-스포크 상호 링크</li>
      </ul>

      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-primary mb-2">예시</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          이 블로그가 바로 토픽 클러스터입니다. 필러{" "}
          <Link href="/blog/what-is-aio" className="text-primary underline">AIO란 무엇인가</Link>
          를 중심으로 엔진별·업종별·방법론 스포크가{" "}
          <Link href="/blog" className="text-primary underline">/blog 허브</Link>
          에서 연결됩니다.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mt-8">
        <p className="text-gray-600 text-sm leading-relaxed">
          측정과 결합하려면{" "}
          <Link href="/blog/ai-mention-score-guide" className="text-primary font-semibold underline">
            AI Mention Score
          </Link>
          를, 구조화는{" "}
          <Link href="/blog/schema-markup-for-aio" className="text-primary font-semibold underline">
            스키마와 AIO
          </Link>
          를 함께 보세요.
        </p>
      </div>
    </BlogArticle>
  );
}
