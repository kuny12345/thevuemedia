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
        <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">{article.title}</h1>
        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-400"><span className="font-medium text-gray-700">{list.site.name}</span><span className="h-1 w-1 rounded-full bg-gray-300" /><time dateTime={article.publishedDate ?? article.publishedAt}>{dateLabel(article.publishedDate, article.publishedAt)}</time></div>
      </div>
    </header>
    <div className="column-article mx-auto max-w-2xl px-6 py-14 text-[17px] leading-8 lg:py-20" dangerouslySetInnerHTML={{ __html: article.html }} />
    <footer className="border-y border-[rgba(8,17,32,0.1)] bg-[#efe9dc]"><div className="mx-auto max-w-2xl px-6 py-12 text-center"><p className="text-lg font-semibold">더 많은 인사이트가 필요하신가요?</p><Link href="/column" className="btn btn-primary mt-5">칼럼 목록 보기</Link></div></footer>
  </article>;
}
