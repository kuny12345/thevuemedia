import Link from "next/link";
import {
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { postUrl, relatedPosts } from "@/lib/posts";
import JsonLd from "@/components/JsonLd";

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

  return (
    <>
      <JsonLd data={article} />
      <JsonLd data={breadcrumb} />
      {faq.length > 0 && <JsonLd data={faqPageSchema(faq)} />}

      <article className="bg-white">
        {/* Editorial header */}
        <header className="pt-32 pb-12 lg:pt-40 lg:pb-16 border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="inline-block text-xs font-bold tracking-[0.14em] uppercase text-primary mb-4">
              {tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.15] font-extrabold text-ink mb-6">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
              <span className="font-medium text-gray-700">더뷰미디어</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <time dateTime={datePublished}>{date}</time>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="max-w-2xl mx-auto px-6 py-14 lg:py-20 text-[17px] leading-8">
          {children}
          {faq.length > 0 && (
            <section className="mt-14" aria-labelledby="article-faq-heading">
              <h2
                id="article-faq-heading"
                className="text-2xl font-extrabold text-ink mb-5"
              >
                자주 묻는 질문
              </h2>
              <ul className="flex flex-col gap-3">
                {faq.map((it) => (
                  <li key={it.q}>
                    <details className="group rounded-xl border border-gray-200 bg-white open:shadow-sm">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 min-h-[44px] rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                        <span className="font-bold text-ink leading-snug text-[17px]">
                          {it.q}
                        </span>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </summary>
                      <p className="px-5 pb-5 text-gray-600 text-[15px] leading-relaxed">
                        {it.a}
                      </p>
                    </details>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* CTA */}
        <div className="bg-gray-50 border-y border-gray-100">
          <div className="max-w-2xl mx-auto px-6 py-14 text-center">
            <h3 className="text-2xl font-extrabold text-ink mb-3">
              AI는 우리 브랜드를 어떻게 인식하고 있을까?
            </h3>
            <p className="text-gray-500 mb-6">
              전문 컨설턴트가 분석한 AI Mention 리포트를 무료로 받아보세요.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              무료 AI 인식도 진단받기
            </a>
          </div>
        </div>

        {/* Related */}
        <div className="max-w-2xl mx-auto px-6 py-14">
          <h3 className="text-lg font-bold text-ink mb-6">관련 글 더보기</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={postUrl(r.slug)}
                className="block p-5 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <span className="text-xs text-primary font-bold">{r.tag}</span>
                <p className="font-semibold text-ink mt-1 text-sm">{r.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
