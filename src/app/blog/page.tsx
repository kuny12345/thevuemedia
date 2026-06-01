import type { Metadata } from "next";
import Link from "next/link";
import { posts, postsByDate, postUrl, type Category } from "@/lib/posts";
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
    url: "https://thevuemedia.com/blog",
    inLanguage: "ko-KR",
    blogPost: postsByDate().map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `https://thevuemedia.com${postUrl(p.slug)}`,
      datePublished: p.iso,
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={collection} />

      <header className="bg-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-primary-light font-semibold text-sm mb-3 tracking-wide uppercase">
            Insights
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            AIO·GEO 인사이트
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            AI가 브랜드를 추천하게 만드는 모든 전략을 한곳에 모았습니다.
            개념부터 엔진별·업종별 실전까지.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        {CATEGORY_ORDER.map((cat) => {
          const items = posts.filter((p) => p.category === cat.key);
          if (!items.length) return null;
          return (
            <section key={cat.key} className="mb-16">
              <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-gray-900">
                  {cat.label}
                </h2>
                <p className="text-gray-500 mt-1">{cat.desc}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={postUrl(p.slug)}
                    className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold mb-4 self-start">
                      {p.tag}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {p.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{p.date}</span>
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                        읽어보기 &rarr;
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
