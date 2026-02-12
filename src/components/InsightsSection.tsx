import Link from "next/link";

const articles = [
  {
    tag: "전략",
    title: "2026년 Google SGE 대응 전략: 검색의 패러다임이 바뀐다",
    excerpt:
      "Google의 Search Generative Experience가 본격 확대되면서, 기존 SEO만으로는 충분하지 않습니다. AI가 생성하는 답변에 브랜드가 포함되려면...",
    date: "2026.02.10",
    href: "/blog/google-sge-strategy-2026",
  },
  {
    tag: "가이드",
    title: "ChatGPT가 우리 회사를 추천하게 만드는 법",
    excerpt:
      "AI 챗봇이 특정 브랜드를 추천하는 메커니즘을 분석하고, 실제 적용 가능한 5가지 전략을 단계별로 안내합니다...",
    date: "2026.02.05",
    href: "/blog/chatgpt-brand-recommendation",
  },
  {
    tag: "분석",
    title: "유튜브 쇼츠 알고리즘과 AIO의 상관관계",
    excerpt:
      "유튜브 쇼츠의 추천 알고리즘이 AI 학습 데이터에 미치는 영향을 분석하고, 이를 활용한 AIO 전략을 제시합니다...",
    date: "2026.01.28",
    href: "/blog/youtube-shorts-aio-correlation",
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">
            Insights
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            AIO <span className="text-gradient">전문가 인사이트</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            더뷰미디어는 끊임없이 공부하는 전문가 집단입니다.
            <br className="hidden sm:block" />
            최신 AI 트렌드와 실전 전략을 공유합니다.
          </p>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link key={a.title} href={a.href}>
              <article className="group bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 cursor-pointer h-full">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold mb-4">
                  {a.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{a.date}</span>
                  <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    읽어보기 &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
