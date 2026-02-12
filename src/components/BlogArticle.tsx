import Script from "next/script";

interface BlogArticleProps {
  tag: string;
  title: string;
  date: string;
  readTime: string;
  jsonLd: Record<string, unknown>;
  children: React.ReactNode;
}

export default function BlogArticle({
  tag,
  title,
  date,
  readTime,
  jsonLd,
  children,
}: BlogArticleProps) {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-white">
        {/* Hero */}
        <header className="bg-dark pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-sm font-bold mb-5">
              {tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
              <span>더뷰미디어</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <time dateTime={date}>{date}</time>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-6 py-14 lg:py-20 prose prose-lg prose-gray">
          {children}
        </div>

        {/* CTA */}
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-6 py-14 text-center">
            <h3 className="text-2xl font-extrabold mb-3">
              AI가 우리 브랜드를 어떻게 인식하고 있을까?
            </h3>
            <p className="text-gray-500 mb-6">
              24시간 내에 전문 컨설턴트가 분석한 AI Mention 리포트를 무료로
              받아보세요.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              무료 AI 인식도 진단받기
            </a>
          </div>
        </div>

        {/* Related */}
        <div className="max-w-3xl mx-auto px-8 md:px-12 lg:px-6 py-14">
          <h3 className="text-xl font-bold mb-6">관련 글 더보기</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/blog/google-sge-strategy-2026"
              className="block p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
            >
              <span className="text-xs text-primary font-bold">전략</span>
              <p className="font-semibold text-gray-900 mt-1 text-sm">
                2026년 Google SGE 대응 전략
              </p>
            </a>
            <a
              href="/blog/chatgpt-brand-recommendation"
              className="block p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
            >
              <span className="text-xs text-primary font-bold">가이드</span>
              <p className="font-semibold text-gray-900 mt-1 text-sm">
                ChatGPT가 우리 회사를 추천하게 만드는 법
              </p>
            </a>
            <a
              href="/blog/youtube-shorts-aio-correlation"
              className="block p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all"
            >
              <span className="text-xs text-primary font-bold">분석</span>
              <p className="font-semibold text-gray-900 mt-1 text-sm">
                유튜브 쇼츠 알고리즘과 AIO의 상관관계
              </p>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
