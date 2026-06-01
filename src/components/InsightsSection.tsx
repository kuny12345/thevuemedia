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
    <section id="insights" className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
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
              <article className="group rounded-xl border border-gray-200 bg-white p-7 hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer h-full">
                <span className="inline-block text-xs font-bold text-primary mb-3">
                  {a.tag}
                </span>
                <h3 className="text-base font-bold text-ink mb-3 leading-snug group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{a.date}</span>
                  <span className="text-gray-700 font-semibold group-hover:text-primary group-hover:translate-x-0.5 transition-all">
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
