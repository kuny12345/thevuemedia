import Link from "next/link";
import { ENGINE_COLOR, ENGINE_LABEL, enginesOf, formatDate, type Citation } from "@/lib/citations";
import { getPost, postUrl } from "@/lib/posts";

// AI 답변 인용 표시 — 썸네일 인증 마크(CitationSeal)·엔진 칩(EngineChips)·인용 기록 섹션(CitationLedger).
// 증빙은 AIRank가 보관한 실제 AI 답변 HTML 원본(새 탭).

function ExternalIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

// 24꼭지 로제트(인증 인장 테두리) — 정적 path
const ROSETTE = (() => {
  const pts: string[] = [];
  const n = 24;
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 === 0 ? 50 : 45.5;
    const a = (Math.PI * i) / n - Math.PI / 2;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${pts.join("L")}Z`;
})();

/** 썸네일 위 인증 마크 — "AI CITED · VERIFIED BY AIRANK" 원형 문구 + 체크 + 건수 */
export function CitationSeal({ count, size = 76, id }: { count: number; size?: number; id: string }) {
  const arc = `seal-arc-${id}`;
  return (
    <span
      className="inline-flex drop-shadow-[0_6px_14px_rgba(10,30,60,0.35)]"
      title={`AI 답변 인용 ${count}건 (AIRank 측정)`}
      role="img"
      aria-label={`AI 답변 인용 인증 ${count}건`}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <path d={ROSETTE} fill="#ffffff" />
        <circle cx="50" cy="50" r="41.5" fill="#0064e0" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="0.8" strokeDasharray="1.6 1.8" />
        <defs>
          <path id={arc} d="M50,50 m-30.5,0 a30.5,30.5 0 1,1 61,0 a30.5,30.5 0 1,1 -61,0" />
        </defs>
        <text fill="#ffffff" fontSize="8.2" fontWeight="700" letterSpacing="1.6" fontFamily="'JetBrains Mono', ui-monospace, monospace">
          <textPath href={`#${arc}`} startOffset="0">
            AI CITED · VERIFIED BY AIRANK ·
          </textPath>
        </text>
        <circle cx="50" cy="50" r="17" fill="#ffffff" />
        <path d="M42 50.5l5.5 5.5 11-12" fill="none" stroke="#0064e0" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
        {count > 1 && (
          <g>
            <circle cx="79" cy="21" r="12" fill="#ffffff" />
            <text x="79" y="25.2" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0064e0" fontFamily="Pretendard, sans-serif">
              {count}
            </text>
          </g>
        )}
      </svg>
    </span>
  );
}

export function EngineChip({ engine, size = "sm" }: { engine: string; size?: "sm" | "md" }) {
  const label = ENGINE_LABEL[engine] ?? engine;
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] ring-1 ring-white/40 ${
        size === "md" ? "px-3 py-1 text-[13px]" : "px-2.5 py-[3px] text-[11.5px]"
      }`}
      style={{ background: ENGINE_COLOR[engine] ?? "#2a3747" }}
    >
      <svg aria-hidden="true" viewBox="0 0 12 12" className="h-2.5 w-2.5">
        <path d="M2.5 6.2l2.2 2.2 4.8-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </span>
  );
}

/** 썸네일 하단에 엔진별 인용 칩 */
export function EngineChips({ items }: { items: Citation[] }) {
  const engines = enginesOf(items);
  if (!engines.length) return null;
  return (
    <span className="flex flex-wrap gap-1.5">
      {engines.map((e) => (
        <EngineChip key={e} engine={e} />
      ))}
    </span>
  );
}

/** 블로그 목록의 "AI 답변 인용 기록" — 날짜 → 질의어 → 엔진별(인용된 글 + 답변 원본) */
export function CitationLedger({ items, maxDates = 7 }: { items: Citation[]; maxDates?: number }) {
  if (!items.length) return null;

  // 날짜 → 질의어 → 엔진 → 글 slug[]
  const byDate = new Map<string, Map<string, Map<string, { slugs: string[]; answerUrl: string | null }>>>();
  for (const c of items) {
    const d = byDate.get(c.date) ?? new Map();
    const q = d.get(c.query) ?? new Map();
    const e = q.get(c.engine) ?? { slugs: [], answerUrl: null };
    if (!e.slugs.includes(c.slug)) e.slugs.push(c.slug);
    e.answerUrl = e.answerUrl ?? c.answerUrl;
    q.set(c.engine, e);
    d.set(c.query, q);
    byDate.set(c.date, d);
  }
  const dates = [...byDate.keys()].sort((a, b) => (a < b ? 1 : -1));

  const renderDate = (date: string) => {
    const queries = byDate.get(date)!;
    return (
      <div key={date} className="grid grid-cols-1 gap-4 border-t border-white/10 py-8 md:grid-cols-[140px_1fr] md:gap-8">
        <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
          <time className="mono text-[15px] font-bold text-white" dateTime={date}>
            {formatDate(date)}
          </time>
          <span className="text-[13px] text-[#b8c3cf]">질문 {queries.size}개</span>
        </div>
        <ul className="flex flex-col gap-3">
          {[...queries.entries()].map(([query, engines]) => (
            <li key={query} className="rounded-[14px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[16px] font-bold leading-snug text-white">
                <span className="mr-2 text-[#8cc4ff]" aria-hidden="true">Q.</span>
                {query}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {[...engines.entries()].map(([engine, v]) => (
                  <li key={engine} className="flex flex-col gap-2 border-t border-white/[0.08] pt-3 sm:flex-row sm:items-center sm:gap-4">
                    <span className="flex self-start sm:self-auto">
                      <EngineChip engine={engine} size="md" />
                    </span>
                    <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-1.5 gap-y-1 text-[14px] text-[#b8c3cf]">
                      <span className="shrink-0">출처로 인용된 글</span>
                      {v.slugs.map((s, i) => (
                        <span key={s} className="min-w-0">
                          <Link href={postUrl(s)} className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
                            {getPost(s)?.title ?? s}
                          </Link>
                          {i < v.slugs.length - 1 && <span aria-hidden="true">,</span>}
                        </span>
                      ))}
                    </div>
                    {v.answerUrl && (
                      <a
                        href={v.answerUrl}
                        target="_blank"
                        rel="noopener nofollow"
                        className="inline-flex min-h-[40px] shrink-0 items-center justify-center gap-1.5 self-start rounded-full bg-white px-4 text-[13px] font-bold text-[#1d2835] transition-colors hover:bg-[#d6e8ff] sm:self-auto"
                      >
                        답변 원본 보기 <ExternalIcon />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const recent = dates.slice(0, maxDates);
  const older = dates.slice(maxDates);
  return (
    <>
      {recent.map(renderDate)}
      {older.length > 0 && (
        <details className="group border-t border-white/10">
          <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-center text-[14px] font-semibold text-[#b8c3cf] hover:text-white [&::-webkit-details-marker]:hidden">
            이전 기록 {older.length}일 더보기
          </summary>
          {older.map(renderDate)}
        </details>
      )}
    </>
  );
}
