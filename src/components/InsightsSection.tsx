import Link from "next/link";
import { postsByDate, postUrl } from "@/lib/posts";

const articles = postsByDate()
  .slice(0, 3)
  .map((p) => ({
    tag: p.tag,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    href: postUrl(p.slug),
  }));

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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-7 py-3 rounded-full border border-gray-200 text-gray-700 font-semibold hover:border-primary/30 hover:text-primary transition-colors"
          >
            모든 인사이트 보기 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
