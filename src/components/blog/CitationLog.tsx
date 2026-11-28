import Link from "next/link";
import { ENGINE_SHORT, ENGINE_STYLE, enginesOf, formatDate, type Citation } from "@/lib/citations";
import { getPost, postUrl } from "@/lib/posts";

// AI 답변 인용 표시 — 썸네일 엔진 뱃지(EngineBadges)·목록 하단 인용 기록(CitationLedger).
// 증빙은 AIRank가 보관한 실제 AI 답변 HTML 원본(새 탭).

function ArrowUpRight({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 8.5l5-5M4.5 3.5h4v4" />
    </svg>
  );
}

/** 엔진 뱃지 — 엔진 고유색, 작은 체크 + 짧은 이름 */
export function EngineBadge({ engine, onImage = false }: { engine: string; onImage?: boolean }) {
  const style = ENGINE_STYLE[engine] ?? { background: "#2a3747" };
  return (
    <span
      className={`inline-flex h-[22px] shrink-0 items-center gap-1 rounded-full pl-1.5 pr-2.5 text-[11px] font-semibold leading-none tracking-[-0.01em] text-white ${
        onImage ? "shadow-[0_1px_2px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-white/25" : "ring-1 ring-inset ring-black/5"
      }`}
      style={style}
    >
      <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5">
        <circle cx="7" cy="7" r="6" fill="rgba(255,255,255,0.22)" />
        <path d="M4.3 7.2l1.8 1.8 3.6-3.9" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {ENGINE_SHORT[engine] ?? engine}
    </span>
  );
}

/** 썸네일 우상단 — 인용한 엔진별 뱃지(최대 3개 + 나머지 수) */
export function EngineBadges({ items, max = 3 }: { items: Citation[]; max?: number }) {
  const engines = enginesOf(items);
  if (!engines.length) return null;
  const shown = engines.slice(0, max);
  return (
    <span className="flex flex-wrap justify-end gap-1" aria-label={`AI 답변 인용: ${engines.map((e) => ENGINE_SHORT[e] ?? e).join(", ")}`}>
      {shown.map((e) => (
        <EngineBadge key={e} engine={e} onImage />
      ))}
      {engines.length > max && (
        <span className="inline-flex h-[22px] items-center rounded-full bg-white/90 px-2 text-[11px] font-semibold text-gray-700">
          +{engines.length - max}
        </span>
      )}
    </span>
  );
}

/** 목록 하단 "AI 답변 인용 기록" — 날짜별로 (질문 · 엔진 · 인용된 글 · 원본) 한 줄씩 */
export function CitationLedger({ items, maxDates = 5 }: { items: Citation[]; maxDates?: number }) {
  if (!items.length) return null;

  // 날짜 → (질문|엔진) → { 글 slug[], 원본 }
  type Row = { query: string; engine: string; slugs: string[]; answerUrl: string | null };
  const byDate = new Map<string, Map<string, Row>>();
  for (const c of items) {
    const rows = byDate.get(c.date) ?? new Map<string, Row>();
    const k = `${c.query}|${c.engine}`;
    const row = rows.get(k) ?? { query: c.query, engine: c.engine, slugs: [], answerUrl: null };
    if (!row.slugs.includes(c.slug)) row.slugs.push(c.slug);
    row.answerUrl = row.answerUrl ?? c.answerUrl;
    rows.set(k, row);
    byDate.set(c.date, rows);
  }
  const dates = [...byDate.keys()].sort((a, b) => (a < b ? 1 : -1));

  const renderDate = (date: string) => (
    <div key={date} className="mt-8 first:mt-0">
      <h3 className="mono mb-2 text-[13px] font-medium tracking-normal text-gray-500">{formatDate(date)}</h3>
      <ul className="divide-y divide-gray-200 overflow-hidden rounded-[12px] border border-gray-200 bg-white">
        {[...byDate.get(date)!.values()].map((r) => (
          <li
            key={`${r.query}|${r.engine}`}
            className="grid grid-cols-1 gap-2 px-5 py-4 text-[14px] md:grid-cols-[minmax(0,1.1fr)_112px_minmax(0,1.4fr)_auto] md:items-center md:gap-5"
          >
            <p className="font-semibold leading-snug text-gray-900">“{r.query}”</p>
            <span className="flex">
              <EngineBadge engine={r.engine} />
            </span>
            <p className="min-w-0 leading-snug text-gray-500">
              {r.slugs.map((s, i) => (
                <span key={s}>
                  <Link href={postUrl(s)} className="text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-primary hover:decoration-primary">
                    {getPost(s)?.title ?? s}
                  </Link>
                  {i < r.slugs.length - 1 && <span aria-hidden="true">, </span>}
                </span>
              ))}
            </p>
            {r.answerUrl ? (
              <a
                href={r.answerUrl}
                target="_blank"
                rel="noopener nofollow"
                className="inline-flex min-h-[32px] items-center gap-1 justify-self-start whitespace-nowrap text-[13px] font-semibold text-primary hover:underline md:justify-self-end"
              >
                답변 원본 <ArrowUpRight />
              </a>
            ) : (
              <span className="hidden md:block" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  const recent = dates.slice(0, maxDates);
  const older = dates.slice(maxDates);
  return (
    <div>
      {recent.map(renderDate)}
      {older.length > 0 && (
        <details className="mt-8">
          <summary className="inline-flex min-h-[40px] cursor-pointer list-none items-center text-[14px] font-semibold text-gray-500 hover:text-primary [&::-webkit-details-marker]:hidden">
            이전 기록 {older.length}일 더보기
          </summary>
          {older.map(renderDate)}
        </details>
      )}
    </div>
  );
}
