import type { Metadata } from "next";
import { posts, postsByDate, postUrl, type Category } from "@/lib/posts";
import { citationsFor, loadCitations } from "@/lib/citations";
import PostCard, { thumbUrl } from "@/components/blog/PostCard";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AIO·GEO 인사이트 — AI 최적화 전문 가이드",
  description:
    "ChatGPT·Gemini·Perplexity가 브랜드를 추천하게 만드는 AIO(AI 최적화) 전략, 엔진별 노출 가이드, 업종별 적용법까지. 더뷰미디어의 AIO/GEO 인사이트 전체 모음.",
  keywords: [
    "AIO",
    "GEO",
    "AI 최적화",
    "AI 마케팅",
    "ChatGPT 브랜드 추천",
    "생성형 엔진 최적화",
    "더뷰미디어",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AIO·GEO 인사이트 | 더뷰미디어",
    description:
      "AI 최적화(AIO) 전략·엔진별 가이드·업종별 적용법 전체 모음.",
    type: "website",
    url: "/blog",
  },
};

const CATEGORY_ORDER: { key: Category; label: string; desc: string }[] = [
  { key: "병원마케팅", label: "병원·의료 마케팅", desc: "병원·피부과·성형외과가 의료광고법을 지키며 검색·AI에 노출되는 법" },
  { key: "비교", label: "대행사 비교·선택", desc: "AIO·GEO 대행사를 객관적으로 비교하고 고르는 법" },
  { key: "가이드", label: "핵심 가이드", desc: "AIO를 시작하고 운영하는 실전 가이드" },
  { key: "방법론", label: "방법론", desc: "더뷰미디어의 AIO 작동 방식" },
  { key: "엔진별", label: "엔진별 최적화", desc: "ChatGPT·Gemini·Perplexity·Copilot·Grok 노출 전략" },
  { key: "개념", label: "개념·원리", desc: "AIO·GEO의 정의와 작동 원리" },
  { key: "버티컬", label: "업종별 적용", desc: "병원·법률·프랜차이즈·이커머스·교육" },
  { key: "전략", label: "전략", desc: "AI 검색 시대의 콘텐츠·채널 전략" },
  { key: "분석", label: "분석", desc: "데이터로 보는 AIO 인사이트" },
];

export default async function BlogIndexPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "블로그", path: "/blog" },
  ]);
  const collection = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "더뷰미디어 AIO·GEO 인사이트",
    url: "https://www.thevuemedia.com/blog",
    inLanguage: "ko-KR",
    blogPost: postsByDate().map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://www.thevuemedia.com${postUrl(p.slug)}`,
      image: `https://www.thevuemedia.com${thumbUrl(p.slug)}`,
      datePublished: p.iso,
    })),
  };

  const citations = await loadCitations();
  const categories = CATEGORY_ORDER.filter((c) => posts.some((p) => p.category === c.key));

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={collection} />

      <div className="paper-section">
        <header className="pt-28 pb-10 sm:pt-32 lg:pt-40 lg:pb-14">
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
            <p className="eyebrow mb-5 justify-center">Insights</p>
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl">
              AIO·GEO 인사이트
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
              AI가 브랜드를 추천하게 만드는 모든 전략을 한곳에 모았습니다.
              개념부터 엔진별·업종별 실전까지.
            </p>
          </div>
        </header>

        {/* 카테고리 바로가기 */}
        <nav aria-label="카테고리" className="border-y border-gray-200">
          <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-6 sm:py-4 [&::-webkit-scrollbar]:hidden">
            {categories.map((c) => (
              <a
                key={c.key}
                href={`#cat-${c.key}`}
                className="inline-flex min-h-[40px] shrink-0 items-center rounded-full border border-gray-200 bg-white px-4 text-[14px] font-semibold text-gray-600 transition-colors hover:border-primary hover:text-primary"
              >
                {c.label}
              </a>
            ))}
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:py-20">
          {categories.map((cat) => {
            const items = postsByDate().filter((p) => p.category === cat.key);
            return (
              <section key={cat.key} id={`cat-${cat.key}`} className="mb-16 scroll-mt-24 lg:mb-20">
                <div className="mb-6 flex items-end justify-between gap-4 border-t border-gray-200 pt-6 lg:mb-8">
                  <div>
                    <h2 className="text-xl sm:text-2xl">{cat.label}</h2>
                    <p className="mt-1 text-[14px] text-gray-500 sm:text-base">{cat.desc}</p>
                  </div>
                  <span className="mono hidden shrink-0 text-[13px] text-gray-400 sm:block">{items.length} posts</span>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
                  {items.map((p) => (
                    <PostCard key={p.slug} post={p} citations={citationsFor(citations, p.slug)} />
                  ))}
                </div>
              </section>
            );
          })}
        </main>

      </div>
    </>
  );
}
