import Link from "next/link";
import {
  articleSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { postUrl, relatedPosts } from "@/lib/posts";
import FaqSection, { type FaqItem } from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";

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
          <FaqSection items={faq} />
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
