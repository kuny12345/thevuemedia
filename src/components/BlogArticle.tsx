import Link from "next/link";
import {
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { postUrl, relatedPosts } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";
import { citationsFor } from "@/lib/citations";
import { CitationLogFull } from "@/components/blog/CitationLog";
import PostCard from "@/components/blog/PostCard";

// 글 단위 FAQ 항목(스키마는 본문 하단에서 직접 emit). 홈 FaqSection은
// 무인자 섹션이므로, 블로그 본문은 자체 FAQ 블록으로 렌더한다.
export type FaqItem = { q: string; a: string };

interface BlogArticleProps {
  slug: string;
  tag: string;
  title: string;
  date: string; // display, e.g. "2026.06.01"
  datePublished: string; // ISO
  dateModified?: string; // ISO
  readTime: string;
  description: string;
  faq?: FaqItem[];
  children: React.ReactNode;
}

export default function BlogArticle({
  slug,
  tag,
  title,
  date,
  datePublished,
  dateModified,
  readTime,
  description,
  faq = [],
  children,
}: BlogArticleProps) {
  const path = postUrl(slug);

  const article = articleSchema({
    headline: title,
    description,
    path,
    datePublished,
    dateModified,
  });
  const breadcrumb = breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "블로그", path: "/blog" },
    { name: title, path },
  ]);
  const related = relatedPosts(slug, 3);
  const citations = citationsFor(slug);

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={breadcrumb} />
      {faq.length > 0 && <JsonLd data={faqPageSchema(faq)} />}

      {/* 리뉴얼 디자인 토큰 — 배치·글자 크기는 이전 버전 그대로, 색·서체·모서리만 홈과 같게.
          본문의 gray-*·primary 는 renew.css @theme 에서 홈 토큰으로 연결된다. */}
      <article className="paper-section">
        {/* Editorial header */}
        <header className="border-b border-gray-200 pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="eyebrow mb-5 justify-center">{tag}</span>
            <h1 className="mb-6 text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-400">
              <span className="font-medium text-gray-700">더뷰미디어</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <time dateTime={datePublished}>{date}</time>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="mx-auto max-w-2xl px-6 py-14 text-[17px] leading-8 lg:py-20">
          {children}
          {faq.length > 0 && (
            <section className="mt-14" aria-labelledby="article-faq-heading">
              <h2
                id="article-faq-heading"
                className="mb-5 text-2xl"
              >
                자주 묻는 질문
              </h2>
              <ul className="flex flex-col gap-3">
                {faq.map((it) => (
                  <li key={it.q}>
                    <details className="group overflow-hidden rounded-[14px] border border-gray-200 bg-white open:shadow-sm">
                      <summary className="flex min-h-[44px] cursor-pointer list-none items-start justify-between gap-4 p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                        <span className="text-[17px] font-bold leading-snug text-gray-900">
                          {it.q}
                        </span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </summary>
                      <p className="px-5 pb-5 text-[15px] leading-relaxed text-gray-600">
                        {it.a}
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <CitationLogFull items={citations} />
        </div>

        {/* CTA — 홈 상담 섹션으로 연결 */}
        <div className="border-y border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-2xl px-6 py-14 text-center">
            <h3 className="mb-3 text-2xl">
              AI는 우리 브랜드를 어떻게 인식하고 있을까?
            </h3>
            <p className="mb-6 text-gray-500">
              현재 상태 기준으로 무엇부터 해야 할지 상담으로 안내드립니다.
            </p>
            <Link href="/#consult" className="btn blue">
              상담 신청하기
            </Link>
          </div>
        </div>

        {/* Related */}
        <div className="mx-auto max-w-5xl px-6 py-14 lg:py-16">
          <h3 className="mb-8 text-xl">관련 글 더보기</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
            {related.map((r) => (
              <PostCard key={r.slug} post={r} showCitations={false} />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
