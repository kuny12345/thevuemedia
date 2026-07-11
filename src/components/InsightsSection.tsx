import Link from "next/link";
import Reveal from "@/components/Reveal";
import { postsByDate, postUrl } from "@/lib/posts";

// 최신 글 3편 (블로그 권위 신호) — posts.ts 단일 출처에서 읽어 자동 동기화.
const latest = postsByDate().slice(0, 3);

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function InsightsSection() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="dark-section section-pad"
    >
      <div className="container-x">
        {/* Header — 첫 문장은 검색자/문제에 말 건다 */}
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Insights</p>
            <h2 id="insights-heading" className="text-3xl sm:text-4xl">
              AI 검색 인사이트
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-on-dark-soft">
              AI가 어떤 기준으로 브랜드를 추천하는지, 엔진별 인용 전략과 측정
              방법을 실무 관점에서 정리합니다.
            </p>
          </div>

          <Link
            href="/blog"
            className="mono hidden shrink-0 items-center gap-2 text-sm text-on-dark-soft transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold sm:inline-flex"
          >
            인사이트 전체
            <ArrowIcon />
          </Link>
        </Reveal>

        {/* 최신 글 카드 — 링크·데이터는 posts.ts 그대로 */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {latest.map((p, i) => (
            <Reveal key={p.slug} as="article" delay={i * 80} className="h-full">
              <Link
                href={postUrl(p.slug)}
                aria-label={`${p.title} — 자세히 읽기`}
                className="card card-hover group flex h-full flex-col p-7 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="pill mono text-[0.65rem] font-medium uppercase tracking-[0.14em]">
                    {p.tag}
                  </span>
                  <span className="mono text-xs text-on-dark-soft">
                    {p.readTime}
                  </span>
                </div>

                <h3 className="mt-5 text-lg leading-snug transition-colors group-hover:text-gold-bright">
                  {p.title}
                </h3>
                <p className="mb-6 mt-3 line-clamp-3 text-[14px] leading-relaxed text-on-dark-soft">
                  {p.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                  <time dateTime={p.iso} className="mono text-xs text-on-dark-soft">
                    {p.date}
                  </time>
                  <span className="mono inline-flex items-center gap-1.5 text-xs text-on-dark-soft transition-colors group-hover:text-gold">
                    읽어보기
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 모바일 전용 전체 보기 (헤더 링크는 sm 이상에서만 노출) */}
        <div className="mt-10 sm:hidden">
          <Link href="/blog" className="btn btn-ghost w-full">
            인사이트 전체
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
