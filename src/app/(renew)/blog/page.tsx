import type { Metadata } from "next";
import { posts, postsByDate, postUrl, type Category } from "@/lib/posts";
import { citationsFor, citationStats, enginesOf, formatDate, loadCitations } from "@/lib/citations";
import PostCard, { thumbUrl } from "@/components/blog/PostCard";
import { CitationLedger, CitationSeal, EngineChip } from "@/components/blog/CitationLog";
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
  const stats = citationStats(citations);
  const categories = CATEGORY_ORDER.filter((c) => posts.some((p) => p.category === c.key));

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={collection} />

      <div className="paper-section">
        <header className="pt-32 pb-12 lg:pt-40 lg:pb-14">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="eyebrow mb-5 justify-center">Insights</p>
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl">
              AIO·GEO 인사이트
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
              AI가 브랜드를 추천하게 만드는 모든 전략을 한곳에 모았습니다.
              개념부터 엔진별·업종별 실전까지.
            </p>
          </div>
        </header>

        {/* AI 답변 인용 기록 — 글 목록과 구분되는 별도 영역 */}
        {stats.total > 0 && (
          <section id="citations" aria-labelledby="citations-heading" className="scroll-mt-20 bg-[#1d2835] text-white">
            <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex items-start gap-5">
                  <span className="hidden shrink-0 sm:inline-flex">
                    <CitationSeal count={stats.total} size={92} id="ledger" />
                  </span>
                  <div>
                    <p className="mb-3 text-[14px] font-bold text-[#8cc4ff]">AI Citation Log</p>
                    <h2 id="citations-heading" className="text-2xl !text-white md:text-3xl">
                      AI 답변 인용 기록
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-[#b8c3cf]">
                      AIRank가 매일 같은 질문을 AI 엔진에 던지고 답변을 저장합니다. 답변의 출처 링크로
                      더뷰미디어 글이 잡힌 기록만 날짜·질문별로 모았습니다. 매일 자동으로 갱신되며,
                      &lsquo;답변 원본 보기&rsquo;로 그날 저장된 실제 답변 화면을 열어볼 수 있습니다.
                    </p>
                  </div>
                </div>
                <dl className="grid shrink-0 grid-cols-3 gap-6 text-center lg:text-right">
                  <div>
                    <dt className="text-[12px] text-[#b8c3cf]">인용</dt>
                    <dd className="mono mt-1 text-2xl font-bold">{stats.total}<span className="ml-0.5 text-sm font-medium text-[#b8c3cf]">건</span></dd>
                  </div>
                  <div>
                    <dt className="text-[12px] text-[#b8c3cf]">인용된 글</dt>
                    <dd className="mono mt-1 text-2xl font-bold">{stats.posts}<span className="ml-0.5 text-sm font-medium text-[#b8c3cf]">편</span></dd>
                  </div>
                  <div>
                    <dt className="text-[12px] text-[#b8c3cf]">최근 측정</dt>
                    <dd className="mono mt-1 text-2xl font-bold">{formatDate(stats.lastDate!).slice(5)}</dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {enginesOf(citations).map((e) => (
                  <EngineChip key={e} engine={e} size="md" />
                ))}
              </div>
              <div className="mt-10">
                <CitationLedger items={citations} />
              </div>
            </div>
          </section>
        )}

        {/* 카테고리 바로가기 */}
        <nav aria-label="카테고리" className="border-y border-gray-200">
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-4 [scrollbar-width:none]">
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

        <main className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          {categories.map((cat) => {
            const items = postsByDate().filter((p) => p.category === cat.key);
            return (
              <section key={cat.key} id={`cat-${cat.key}`} className="mb-20 scroll-mt-24">
                <div className="mb-8 flex flex-col gap-1 border-t border-gray-200 pt-6 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="text-2xl">{cat.label}</h2>
                    <p className="mt-1 text-gray-500">{cat.desc}</p>
                  </div>
                  <span className="mono text-[13px] text-gray-400">{items.length} posts</span>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
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
