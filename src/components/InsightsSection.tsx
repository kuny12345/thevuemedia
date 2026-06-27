import Link from "next/link";
import Reveal from "@/components/Reveal";
import { postsByDate, postUrl } from "@/lib/posts";

// 최신 글 3편 (블로그 권위 신호) — posts.ts 단일 출처에서 읽어 자동 동기화.
const latest = postsByDate().slice(0, 3);

export default function InsightsSection() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="section-pad bg-surface relative overflow-hidden"
    >
      <div className="aura aura-soft" aria-hidden="true" />
      <div className="container-x relative z-10">
        {/* Header — 첫 문장은 검색자/문제에 말 건다 */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">// INSIGHTS</p>
            <h2
              id="insights-heading"
              className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-tight"
            >
              <span className="text-gradient">AI 검색</span> 인사이트
            </h2>
            <div className="accent-bar mt-4" aria-hidden />
            <p className="mt-4 text-base sm:text-lg text-text-soft leading-relaxed">
              AI가 어떤 기준으로 브랜드를 추천하는지, 엔진별 인용 전략과 측정
              방법을 실무 관점에서 정리합니다.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          >
            인사이트 전체 보기
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Reveal>

        {/* 최신 글 카드 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {latest.map((p, i) => (
            <Reveal key={p.slug} as="article" delay={i * 80} className="h-full">
              <Link
                href={postUrl(p.slug)}
                aria-label={`${p.title} — 자세히 읽기`}
                className="card card-hover group flex h-full flex-col p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="pill-brand mono text-[0.65rem] font-semibold tracking-wider uppercase">
                    {p.tag}
                  </span>
                  <span className="mono text-xs text-text-soft">
                    {p.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-ink leading-snug group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-text-soft leading-relaxed line-clamp-3">
                  {p.excerpt}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between">
                  <time dateTime={p.iso} className="mono text-xs text-text-soft">
                    {p.date}
                  </time>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand group-hover:gap-2.5 transition-all">
                    읽어보기
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 모바일 전용 전체 보기 (헤더 링크는 sm 이상에서만 노출) */}
        <div className="mt-10 sm:hidden">
          <Link href="/blog" className="btn btn-ghost w-full">
            인사이트 전체 보기
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
