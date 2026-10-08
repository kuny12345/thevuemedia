import type { Metadata } from "next";
import { cache } from "react";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { Blog2AiError, getColumn, getColumns } from "@/lib/blog2ai";
import { abs, breadcrumbSchema } from "@/lib/schema";

export const dynamic = "force-dynamic";

const getArticle = cache(async (slug: string) => {
  try {
    return await getColumn(slug);
  } catch (error) {
    if (error instanceof Blog2AiError && error.status === 404) notFound();
    throw error;
  }
});

function routeKey(value: string) {
  try { return decodeURIComponent(value); } catch { return value; }
}

function articleUrl(slug: string) {
  return abs(`/column/${encodeURIComponent(slug)}`);
}

function dateLabel(value: string | null, fallback: string) {
  const source = value ?? fallback;
  const date = new Date(source);
  return Number.isNaN(date.valueOf()) ? source.slice(0, 10) : new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long", day: "numeric" }).format(date);
}

type TocItem = { id: string; title: string; level: number };

function plainHeading(value: string) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, "\"")
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function articleWithContents(html: string): { html: string; items: TocItem[] } {
  const items: TocItem[] = [];
  const used = new Set<string>();
  const anchoredHtml = html.replace(/<h([2-4])([^>]*)>([\s\S]*?)<\/h\1>/gi, (full, rawLevel: string, rawAttributes: string, inner: string) => {
    const title = plainHeading(inner);
    if (!title) return full;

    const existingId = rawAttributes.match(/\sid=(?:"([^"]+)"|'([^']+)')/i)?.slice(1).find(Boolean);
    const base = (existingId ?? title.normalize("NFKC").toLocaleLowerCase("ko-KR")
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 100)) || `section-${items.length + 1}`;
    let id = base;
    let suffix = 2;
    while (used.has(id)) id = `${base}-${suffix++}`;
    used.add(id);
    items.push({ id, title, level: Number(rawLevel) });

    const attributes = existingId
      ? rawAttributes.replace(/\sid=(?:"[^"]+"|'[^']+')/i, ` id="${id}"`)
      : `${rawAttributes} id="${id}"`;
    return `<h${rawLevel}${attributes}>${inner}</h${rawLevel}>`;
  });

  return { html: anchoredHtml, items };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = await getArticle(routeKey((await params).slug));
  const url = articleUrl(article.slug);
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: article.metaTitle, description: article.metaDescription, publishedTime: article.publishedDate ? `${article.publishedDate}T00:00:00+09:00` : article.publishedAt, modifiedTime: article.updatedAt, images: article.imageUrl ? [{ url: article.imageUrl }] : undefined },
    twitter: { card: article.imageUrl ? "summary_large_image" : "summary", title: article.metaTitle, description: article.metaDescription, images: article.imageUrl ? [article.imageUrl] : undefined },
  };
}

export default async function ColumnArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const suppliedSlug = routeKey((await params).slug);
  const article = await getArticle(suppliedSlug);
  if (suppliedSlug !== article.slug) permanentRedirect(`/column/${encodeURIComponent(article.slug)}`);
  const url = articleUrl(article.slug);
  const [list] = await Promise.all([getColumns(1)]);
  const moreArticles = list.articles
    .filter((item) => item.slug !== article.slug)
    .slice(0, 5);
  const contents = articleWithContents(article.html);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    mainEntityOfPage: url,
    url,
    inLanguage: "ko-KR",
    datePublished: article.publishedDate ? `${article.publishedDate}T00:00:00+09:00` : article.publishedAt,
    dateModified: article.updatedAt,
    ...(article.categoryName ? { articleSection: article.categoryName } : {}),
    ...(article.imageUrl ? { image: [article.imageUrl] } : {}),
    author: { "@type": "Organization", name: list.site.name },
    publisher: { "@id": "https://thevuemedia.com/#organization" },
    isPartOf: { "@id": "https://thevuemedia.com/#website" },
  };

  return <article className="paper-section min-h-screen">
    <JsonLd data={articleSchema} />
    <JsonLd data={breadcrumbSchema([{ name: "홈", path: "/" }, { name: "칼럼", path: "/column" }, { name: article.title, path: `/column/${article.slug}` }])} />
    <header className="border-b border-[rgba(8,17,32,0.1)] pt-32 pb-12 lg:pt-40 lg:pb-16">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Link href="/column" className="eyebrow mb-5 justify-center hover:text-gold">{article.categoryName ?? "Column"}</Link>
        <h1 className="column-page-title text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">{article.title}</h1>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm text-gray-400"><span className="font-medium text-gray-700">{list.site.name}</span><span className="h-1 w-1 rounded-full bg-gray-300" /><time dateTime={article.publishedDate ?? article.publishedAt}>{dateLabel(article.publishedDate, article.publishedAt)}</time></div>
      </div>
    </header>
    <div className={`mx-auto grid grid-cols-1 gap-14 px-6 py-14 lg:items-start lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:py-20 ${contents.items.length ? "max-w-[86rem] xl:grid-cols-[190px_minmax(0,1fr)_280px] xl:gap-10" : "max-w-6xl"}`}>
      {contents.items.length > 0 && <nav aria-labelledby="contents-title" className="hidden border-t-2 border-ink pt-6 xl:sticky xl:top-28 xl:block">
        <h2 id="contents-title" className="mb-4 text-lg font-bold tracking-[-0.02em]">Contents</h2>
        <ol className="space-y-3">
          {contents.items.map((item) => <li key={item.id} className={item.level === 3 ? "pl-3" : item.level === 4 ? "pl-6" : ""}>
            <a href={`#${item.id}`} className="block text-[13px] leading-[1.55] text-gray-500 [overflow-wrap:anywhere] transition-colors hover:text-gold-deep">{item.title}</a>
          </li>)}
        </ol>
      </nav>}

      <main className="min-w-0">
        {contents.items.length > 0 && <details className="mb-10 border-y border-[rgba(8,17,32,0.16)] py-4 xl:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold [&::-webkit-details-marker]:hidden">Contents <span aria-hidden="true" className="text-sm font-normal text-gold-deep">목차 보기</span></summary>
          <ol className="mt-5 space-y-3 border-t border-[rgba(8,17,32,0.1)] pt-5">
            {contents.items.map((item) => <li key={item.id} className={item.level === 3 ? "pl-3" : item.level === 4 ? "pl-6" : ""}>
              <a href={`#${item.id}`} className="block text-sm leading-relaxed text-gray-500 [overflow-wrap:anywhere] hover:text-gold-deep">{item.title}</a>
            </li>)}
          </ol>
        </details>}
        <div className="column-article min-w-0 text-[17px] leading-8" dangerouslySetInnerHTML={{ __html: contents.html }} />
      </main>

      {moreArticles.length > 0 && <aside aria-labelledby="more-articles-title" className="border-t-2 border-ink pt-6 lg:sticky lg:top-28">
        <div className="mb-2 flex items-end justify-between gap-4">
          <h2 id="more-articles-title" className="text-xl font-bold tracking-[-0.02em]">More Articles</h2>
          <span className="mono pb-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-deep">Latest</span>
        </div>
        <div>
          {moreArticles.map((item) => <Link key={item.id} href={`/column/${encodeURIComponent(item.slug)}`} className="group grid grid-cols-[88px_minmax(0,1fr)] gap-4 border-b border-[rgba(8,17,32,0.13)] py-5 first:pt-4">
            {item.imageUrl
              ? <span className="aspect-square overflow-hidden bg-[#efe9dc]"><img src={item.imageUrl} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></span>
              : <span className="mono grid aspect-square place-items-center bg-[#efe9dc] text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-deep">Column</span>}
            <span className="min-w-0 self-center">
              <time className="mono block text-[10px] tracking-[0.08em] text-gray-400" dateTime={item.publishedDate ?? item.publishedAt}>{dateLabel(item.publishedDate, item.publishedAt)}</time>
              <strong className="mt-1.5 line-clamp-3 block text-[14px] leading-[1.55] text-ink [overflow-wrap:anywhere] transition-colors group-hover:text-gold-deep">{item.title}</strong>
            </span>
          </Link>)}
        </div>
        <Link href="/column" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-all hover:gap-3 hover:text-ink">전체 칼럼 보기 <span aria-hidden="true">→</span></Link>
      </aside>}
    </div>
    <footer className="border-y border-[rgba(8,17,32,0.1)] bg-[#efe9dc]"><div className="mx-auto max-w-2xl px-6 py-12 text-center"><p className="text-lg font-semibold">더 많은 인사이트가 필요하신가요?</p><Link href="/column" className="btn btn-primary mt-5">칼럼 목록 보기</Link></div></footer>
  </article>;
}
