import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPost, posts, postsByDate, postUrl, type Category } from "@/lib/posts";
import { citationsFor, citationStats, citedSlugs, formatDate } from "@/lib/citations";
import PostCard, { thumbUrl } from "@/components/blog/PostCard";
import { CitationBadge, CitationLogCompact } from "@/components/blog/CitationLog";
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

export default function BlogIndexPage() {
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

  const stats = citationStats();
  const cited = citedSlugs()
    .map((s) => getPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const categories = CATEGORY_ORDER.filter((c) => posts.some((p) => p.category === c.key));

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={collection} />

      <div className="paper-section">
        <header className="border-b border-gray-200 pt-32 pb-12 lg:pt-40 lg:pb-14">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="eyebrow mb-5 justify-center">Insights</p>
            <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl">
              AIO·GEO 인사이트
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500">
              AI가 브랜드를 추천하게 만드는 모든 전략을 한곳에 모았습니다.
              개념부터 엔진별·업종별 실전까지.
            </p>
            {stats.total > 0 && (
              <a
                href="#cited"
                className="mt-8 inline-flex min-h-[44px] flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-gray-200 bg-white px-5 py-2 text-[14px] text-gray-600 transition-colors hover:border-primary"
              >
                <span className="flex items-center gap-2 font-bold text-gray-900">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  AI 답변 인용 확인 {stats.posts}편 · {stats.total}건
                </span>
                <span className="mono text-[12px] text-gray-400">
                  AIRank 측정 · 최근 {formatDate(stats.lastDate!)}
                </span>
              </a>
            )}
          </div>
        </header>

        {/* 카테고리 바로가기 */}
        <nav aria-label="카테고리" className="border-b border-gray-200">
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
          {/* AI가 실제로 인용한 글 */}
          {cited.length > 0 && (
            <section id="cited" className="mb-20 scroll-mt-24" aria-labelledby="cited-heading">
              <div className="mb-8">
                <p className="eyebrow mb-3">Cited by AI</p>
                <h2 id="cited-heading" className="text-2xl md:text-3xl">
                  AI 답변에 실제로 인용된 글
                </h2>
                <p className="mt-2 max-w-2xl text-gray-500">
                  AIRank가 매일 같은 질문을 AI 엔진에 던지고 답변 화면을 저장합니다.
                  답변의 출처로 이 글들이 표시된 날짜·질문·화면을 그대로 공개합니다.
                </p>
              </div>
              <div className="flex flex-col gap-10">
                {cited.map((p) => {
                  const cites = citationsFor(p.slug);
                  return (
                    <article key={p.slug} className="group grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                      <Link
                        href={postUrl(p.slug)}
                        tabIndex={-1}
                        aria-hidden="true"
                        className="relative block overflow-hidden rounded-[16px] border border-gray-200 bg-gray-50 lg:col-span-7"
                      >
                        <Image
                          src={thumbUrl(p.slug)}
                          alt=""
                          width={1200}
                          height={630}
                          priority
                          sizes="(min-width: 1024px) 640px, 100vw"
                          className="aspect-[1200/630] h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                        />
                        <span className="absolute right-4 top-4">
                          <CitationBadge count={cites.length} />
                        </span>
                      </Link>
                      <div className="flex flex-col lg:col-span-5">
                        <div className="flex items-center gap-2 text-[13px]">
                          <span className="font-bold text-primary">{p.tag}</span>
                          <span className="text-gray-300" aria-hidden="true">·</span>
                          <time className="mono text-gray-400" dateTime={p.iso}>{p.date}</time>
                        </div>
                        <h3 className="mt-2 text-2xl leading-snug">
                          <Link href={postUrl(p.slug)} className="transition-colors hover:text-primary">
                            {p.title}
                          </Link>
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{p.excerpt}</p>
                        <CitationLogCompact items={cites} />
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

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
                    <PostCard key={p.slug} post={p} />
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
