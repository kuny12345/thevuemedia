import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { Blog2AiError, getColumns } from "@/lib/blog2ai";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "칼럼",
  description: "더뷰미디어의 마케팅·AI 검색 최적화 인사이트와 최신 칼럼을 확인하세요.",
  alternates: { canonical: "/column" },
  openGraph: { type: "website", url: "/column", title: "칼럼 | 더뷰미디어" },
};

type Search = { page?: string; q?: string };

function pageNumber(value: string | undefined) {
  return value && /^[1-9]\d{0,5}$/.test(value) ? Number(value) : 1;
}

function dateLabel(value: string | null, fallback: string) {
  const source = value ?? fallback;
  const date = new Date(source);
  return Number.isNaN(date.valueOf()) ? source.slice(0, 10) : new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(date);
}

export default async function ColumnListPage({ searchParams }: { searchParams: Promise<Search> }) {
  const search = await searchParams;
  const page = pageNumber(search.page);
  const query = typeof search.q === "string" ? search.q.slice(0, 100).trim() : "";
  let data;
  try {
    data = await getColumns(page, query);
  } catch (error) {
    if (error instanceof Blog2AiError) {
      return <ColumnUnavailable />;
    }
    throw error;
  }

  const pageHref = (next: number) => `/column?${new URLSearchParams({ page: String(next), ...(query ? { q: query } : {}) })}`;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${data.site.name} 칼럼`,
    url: "https://thevuemedia.com/column",
    inLanguage: "ko-KR",
    publisher: { "@id": "https://thevuemedia.com/#organization" },
    blogPost: data.articles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `https://thevuemedia.com/column/${encodeURIComponent(article.slug)}`,
      datePublished: article.publishedDate ?? article.publishedAt,
    })),
  };

  return <main className="paper-section min-h-screen">
    <JsonLd data={breadcrumbSchema([{ name: "홈", path: "/" }, { name: "칼럼", path: "/column" }])} />
    <JsonLd data={blogSchema} />
    <header className="border-b border-[rgba(8,17,32,0.1)] pt-32 pb-14 lg:pt-40 lg:pb-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow mb-5">Column</p>
        <h1 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl">최신 칼럼</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">더뷰미디어가 발행한 마케팅과 AI 검색 최적화 인사이트를 모았습니다.</p>
      </div>
    </header>

    <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
      <form className="mb-10 flex max-w-xl gap-2" action="/column">
        <label className="sr-only" htmlFor="column-search">글 제목 검색</label>
        <input id="column-search" name="q" defaultValue={query} maxLength={100} placeholder="글 제목 검색" className="min-h-12 min-w-0 flex-1 border border-[rgba(8,17,32,0.18)] bg-[#fffdf8] px-4 text-sm outline-none transition focus:border-gold-deep focus:ring-2 focus:ring-gold/25" />
        <button className="btn btn-primary min-h-12 px-5 text-sm" type="submit">검색</button>
      </form>
      <p className="mb-6 text-sm text-gray-500">{query ? `“${query}” 검색 결과 ` : "전체 "}<strong className="font-semibold text-ink">{data.total}편</strong></p>

      {data.articles.length ? <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
        {data.articles.map((article) => <Link key={article.id} href={`/column/${encodeURIComponent(article.slug)}`} className="group grid grid-cols-[minmax(0,1fr)] gap-5 border-t border-[rgba(8,17,32,0.13)] py-7 first:border-t-2 md:grid-cols-[minmax(0,1fr)_10.5rem]">
          <div className="min-w-0">
            <p className="mono mb-3 text-xs font-bold tracking-wider text-gold-deep">{article.publishedDate ? dateLabel(article.publishedDate, article.publishedAt) : "칼럼"}</p>
            <h2 className="text-xl leading-snug transition-colors group-hover:text-gold-deep">{article.title}</h2>
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">{article.excerpt || article.metaDescription}</p>
            <span className="mt-5 inline-flex text-sm font-semibold text-gold-deep transition-transform group-hover:translate-x-1">읽어보기&nbsp;→</span>
          </div>
          {article.imageUrl && <div className="order-first aspect-[4/3] overflow-hidden bg-[#efe9dc] md:order-none"><img src={article.imageUrl} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /></div>}
        </Link>)}
      </div> : <div className="border-y border-[rgba(8,17,32,0.13)] py-16 text-center"><p className="text-gray-500">표시할 칼럼이 없습니다.</p></div>}

      {data.totalPages > 1 && <nav aria-label="칼럼 페이지" className="mt-12 flex items-center justify-center gap-3 text-sm">
        {data.page > 1 && <Link className="border border-[rgba(8,17,32,0.18)] px-4 py-2 hover:border-gold-deep" href={pageHref(data.page - 1)}>이전</Link>}
        <span className="text-gray-500">{data.page} / {data.totalPages}</span>
        {data.page < data.totalPages && <Link className="border border-[rgba(8,17,32,0.18)] px-4 py-2 hover:border-gold-deep" href={pageHref(data.page + 1)}>다음</Link>}
      </nav>}
    </div>
  </main>;
}

function ColumnUnavailable() {
  return <main className="paper-section grid min-h-screen place-items-center px-6 pt-20"><div className="max-w-md text-center"><p className="eyebrow mb-5 justify-center">Column</p><h1 className="text-3xl">칼럼을 준비하고 있습니다.</h1><p className="mt-4 leading-relaxed text-gray-500">잠시 후 다시 확인해 주세요.</p><Link href="/" className="btn btn-primary mt-8">홈으로 이동</Link></div></main>;
}
