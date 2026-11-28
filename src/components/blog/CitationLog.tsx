import type { CSSProperties } from "react";
import { ENGINE_SHORT, ENGINE_STYLE, enginesOf, formatDate, type Citation } from "@/lib/citations";

// AI 답변 인용 표시 — 썸네일 엔진 뱃지(EngineBadges, 반짝임)·글 안의 인용 기록(PostCitations).
// 증빙은 AIRank가 보관한 실제 AI 답변 HTML 원본(새 탭).

function ArrowUpRight({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 8.5l5-5M4.5 3.5h4v4" />
    </svg>
  );
}

/** 엔진 뱃지 — 엔진 고유색, 작은 체크 + 짧은 이름. sparkle이면 빛 줄기가 지나가고 모서리에 별이 반짝인다. */
export function EngineBadge({
  engine,
  onImage = false,
  sparkle = false,
  delay = 0,
}: {
  engine: string;
  onImage?: boolean;
  sparkle?: boolean;
  delay?: number;
}) {
  const style = ENGINE_STYLE[engine] ?? { background: "#2a3747" };
  const badge = (
    <span
      className={`inline-flex h-[22px] shrink-0 items-center gap-1 rounded-full pl-1.5 pr-2.5 text-[11px] font-semibold leading-none tracking-[-0.01em] text-white ${
        onImage ? "shadow-[0_1px_2px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-white/25" : "ring-1 ring-inset ring-black/5"
      } ${sparkle ? "badge-shine" : ""}`}
      style={sparkle ? ({ ...style, "--shine-delay": `${delay}s` } as CSSProperties) : style}
    >
      <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5">
        <circle cx="7" cy="7" r="6" fill="rgba(255,255,255,0.22)" />
        <path d="M4.3 7.2l1.8 1.8 3.6-3.9" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {ENGINE_SHORT[engine] ?? engine}
    </span>
  );
  if (!sparkle) return badge;
  return (
    <span className="relative inline-flex shrink-0">
      {badge}
      <svg aria-hidden="true" viewBox="0 0 12 12" className="badge-star" style={{ "--shine-delay": `${delay + 0.5}s` } as CSSProperties}>
        <path d="M6 0c.4 3 1.6 4.6 6 6-4.4 1.4-5.6 3-6 6-.4-3-1.6-4.6-6-6 4.4-1.4 5.6-3 6-6z" fill="#fff" />
      </svg>
    </span>
  );
}

/** 썸네일 우상단 — 인용한 엔진별 뱃지(최대 3개 + 나머지 수), 순서대로 반짝인다 */
export function EngineBadges({ items, max = 3, sparkle = true }: { items: Citation[]; max?: number; sparkle?: boolean }) {
  const engines = enginesOf(items);
  if (!engines.length) return null;
  const shown = engines.slice(0, max);
  return (
    <span className="flex flex-wrap justify-end gap-1" aria-label={`AI 답변 인용: ${engines.map((e) => ENGINE_SHORT[e] ?? e).join(", ")}`}>
      {shown.map((e, i) => (
        <EngineBadge key={e} engine={e} onImage sparkle={sparkle} delay={i * 0.45} />
      ))}
      {engines.length > max && (
        <span className="inline-flex h-[22px] items-center rounded-full bg-white/90 px-2 text-[11px] font-semibold text-gray-700">
          +{engines.length - max}
        </span>
      )}
    </span>
  );
}

/** 글 머리 — "AI 답변 인용 N회" + 엔진 뱃지, 누르면 본문 아래 인용 기록으로 */
export function PostCitationSummary({ items }: { items: Citation[] }) {
  if (!items.length) return null;
  return (
    <a
      href="#ai-citations"
      className="mx-auto mt-6 inline-flex min-h-[40px] flex-wrap items-center justify-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-4 pr-2 text-[13px] font-semibold text-gray-600 transition-colors hover:border-primary hover:text-primary"
    >
      AI 답변 인용 {items.length}회
      <span className="flex flex-wrap gap-1">
        {enginesOf(items).map((e, i) => (
          <EngineBadge key={e} engine={e} sparkle delay={i * 0.45} />
        ))}
      </span>
    </a>
  );
}

function Chevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

const ORIGINAL_BTN =
  "inline-flex min-h-[36px] shrink-0 items-center justify-center gap-1 self-start rounded-full border border-primary/30 px-3.5 text-[13px] font-semibold text-primary transition-colors hover:bg-primary hover:text-white sm:self-center";

/** 질문 한 장 — 엔진 뱃지 + 인용 일수·최근 날짜, 펼치면 날짜별 답변 원본 */
function QueryCard({ query, items }: { query: string; items: Citation[] }) {
  const days = new Set(items.map((c) => c.date)).size;
  const latest = items[0]; // items는 최신순
  const head = (
    <div className="min-w-0">
      <p className="mb-2 text-[16px] font-semibold leading-snug text-gray-900">“{query}”</p>
      <div className="flex flex-wrap items-center gap-1.5">
        {enginesOf(items).map((e) => (
          <EngineBadge key={e} engine={e} />
        ))}
        <span className="mono ml-1 text-[12px] text-gray-500">
          {days > 1 ? `${days}일 인용 · 최근 ` : ""}
          {formatDate(latest.date)}
        </span>
      </div>
    </div>
  );

  // 한 건뿐이면 접지 않고 바로 원본
  if (items.length === 1) {
    return (
      <li className="flex flex-col gap-3 rounded-[14px] border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        {head}
        {latest.answerUrl && (
          <a href={latest.answerUrl} target="_blank" rel="noopener nofollow" className={ORIGINAL_BTN}>
            답변 원본 <ArrowUpRight />
          </a>
        )}
      </li>
    );
  }

  const row = (c: Citation) => (
    <li key={`${c.date}|${c.engine}`} className="flex min-h-[40px] items-center justify-between gap-3">
      <span className="flex items-center gap-2">
        <time dateTime={c.date} className="mono w-[86px] text-[13px] text-gray-500">
          {formatDate(c.date)}
        </time>
        <EngineBadge engine={c.engine} />
      </span>
      {c.answerUrl && (
        <a href={c.answerUrl} target="_blank" rel="noopener nofollow" className="inline-flex min-h-[36px] items-center gap-1 text-[13px] font-semibold text-primary hover:underline">
          원본 <ArrowUpRight />
        </a>
      )}
    </li>
  );
  const SHOW = 10;
  return (
    <li className="rounded-[14px] border border-gray-200 bg-white">
      <details className="group">
        <summary className="flex cursor-pointer list-none flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5 [&::-webkit-details-marker]:hidden">
          {head}
          <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-[13px] font-semibold text-gray-500 group-open:text-primary">
            날짜별 원본 {items.length} <Chevron />
          </span>
        </summary>
        <div className="border-t border-gray-100 px-5 py-2">
          <ul>{items.slice(0, SHOW).map(row)}</ul>
          {items.length > SHOW && (
            <details className="group/more">
              <summary className="inline-flex min-h-[40px] cursor-pointer list-none items-center text-[13px] font-semibold text-gray-500 hover:text-primary group-open/more:hidden [&::-webkit-details-marker]:hidden">
                이전 {items.length - SHOW}건 더보기
              </summary>
              <ul>{items.slice(SHOW).map(row)}</ul>
            </details>
          )}
        </div>
      </details>
    </li>
  );
}

/** 본문 끝 — 이 글이 인용된 AI 답변. 질문별로 묶고(많이 인용된 순), 4개 넘으면 나머지는 접는다. */
export function PostCitations({ items, maxQueries = 4 }: { items: Citation[]; maxQueries?: number }) {
  if (!items.length) return null;
  const sorted = [...items].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const byQuery = new Map<string, Citation[]>();
  for (const c of sorted) byQuery.set(c.query, [...(byQuery.get(c.query) ?? []), c]);
  const groups = [...byQuery.entries()].sort((a, b) => b[1].length - a[1].length || (a[1][0].date < b[1][0].date ? 1 : -1));
  const dates = [...new Set(sorted.map((c) => c.date))];
  const first = dates[dates.length - 1];
  const last = dates[0];
  const shown = groups.slice(0, maxQueries);
  const rest = groups.slice(maxQueries);

  return (
    <section id="ai-citations" aria-labelledby="ai-citations-heading" className="mt-14 scroll-mt-24 border-t border-gray-200 pt-10">
      <p className="mb-2 text-[13px] font-bold text-primary">AI Citation</p>
      <h2 id="ai-citations-heading" className="mb-3 text-2xl">
        이 글이 인용된 AI 답변
      </h2>
      <p className="mb-2 text-[15px] leading-relaxed text-gray-500">
        AIRank가 매일 같은 질문으로 AI 답변을 수집해, 출처 링크로 이 글이 잡힌 날만 남겼습니다.
        &lsquo;원본&rsquo;을 누르면 그날 저장된 실제 답변 화면이 새 탭으로 열립니다.
      </p>
      <p className="mono mb-6 text-[13px] text-gray-500">
        인용 {items.length}회 · 질문 {groups.length}개 · 엔진 {enginesOf(items).length}개 ·{" "}
        {first === last ? formatDate(last) : `${formatDate(first)} ~ ${formatDate(last)}`}
      </p>
      <ul className="flex flex-col gap-3">
        {shown.map(([q, cs]) => (
          <QueryCard key={q} query={q} items={cs} />
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="group/q mt-3">
          <summary className="inline-flex min-h-[40px] cursor-pointer list-none items-center text-[14px] font-semibold text-gray-500 hover:text-primary group-open/q:hidden [&::-webkit-details-marker]:hidden">
            질문 {rest.length}개 더보기
          </summary>
          <ul className="flex flex-col gap-3">
            {rest.map(([q, cs]) => (
              <QueryCard key={q} query={q} items={cs} />
            ))}
          </ul>
        </details>
      )}
    </section>
  );
}
