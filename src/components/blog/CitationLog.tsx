import { ENGINE_LABEL, formatDate, type Citation } from "@/lib/citations";

// AI 답변 인용 기록 — 목록 카드(compact)와 글 본문 하단(full) 공용.
// 근거 화면은 AIRank가 측정 당일 저장한 실제 답변 캡처(airank.lol).

function ExternalIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function EngineChip({ engine }: { engine: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-primary/25 bg-primary/[0.06] px-2.5 py-0.5 text-[12px] font-bold text-primary">
      {ENGINE_LABEL[engine] ?? engine}
    </span>
  );
}

export function CitationBadge({ count }: { count: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[12px] font-bold text-primary shadow-sm backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      AI 인용 {count}건
    </span>
  );
}

export function CitationLogCompact({ items, max = 3 }: { items: Citation[]; max?: number }) {
  if (!items.length) return null;
  const shown = items.slice(0, max);
  return (
    <div className="mt-5 rounded-[12px] border border-gray-200 bg-gray-50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[13px] font-bold text-gray-900">AI 답변 인용 기록</span>
        <span className="mono text-[11px] text-gray-400">AIRank 측정</span>
      </div>
      <ul className="flex flex-col gap-3">
        {shown.map((c) => (
          <li key={`${c.engine}-${c.date}-${c.query}`} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <EngineChip engine={c.engine} />
              <time className="mono text-[12px] text-gray-400" dateTime={c.date}>
                {formatDate(c.date)}
              </time>
            </div>
            <p className="text-[14px] leading-snug text-gray-700">“{c.query}”</p>
            {c.screenshotUrl && (
              <a
                href={c.screenshotUrl}
                target="_blank"
                rel="noopener nofollow"
                className="inline-flex min-h-[28px] items-center gap-1 self-start text-[13px] font-semibold text-primary hover:underline"
              >
                인용된 답변 화면 보기 <ExternalIcon />
              </a>
            )}
          </li>
        ))}
      </ul>
      {items.length > max && <p className="mt-3 text-[12px] text-gray-400">외 {items.length - max}건</p>}
    </div>
  );
}

export function CitationLogFull({ items }: { items: Citation[] }) {
  if (!items.length) return null;
  return (
    <section className="mt-14" aria-labelledby="article-citations-heading">
      <p className="eyebrow mb-3">AI Citation Log</p>
      <h2 id="article-citations-heading" className="mb-2 text-2xl">
        이 글이 AI 답변에 인용된 기록
      </h2>
      <p className="mb-6 text-[15px] leading-relaxed text-gray-500">
        AIRank가 매일 같은 질문을 AI 엔진에 던지고 답변 화면을 저장합니다. 아래는 답변의 출처로 이 글이 표시된 날짜·질문·실제 화면입니다.
      </p>
      <ul className="flex flex-col gap-4">
        {items.map((c) => (
          <li key={`${c.engine}-${c.date}-${c.query}`} className="overflow-hidden rounded-[14px] border border-gray-200 bg-white">
            <div className="flex flex-col gap-2 p-5">
              <div className="flex flex-wrap items-center gap-2">
                <EngineChip engine={c.engine} />
                <time className="mono text-[13px] text-gray-400" dateTime={c.date}>
                  {formatDate(c.date)}
                </time>
              </div>
              <p className="text-[17px] font-bold leading-snug text-gray-900">“{c.query}”</p>
            </div>
            {c.screenshotUrl && (
              <a href={c.screenshotUrl} target="_blank" rel="noopener nofollow" className="group block border-t border-gray-200 bg-gray-50">
                {/* eslint-disable-next-line @next/next/no-img-element -- 외부(airank.lol) 원본 캡처를 그대로 보여준다 */}
                <img
                  src={c.screenshotUrl}
                  alt={`${ENGINE_LABEL[c.engine] ?? c.engine}에 “${c.query}”를 물었을 때의 답변 화면 — 출처로 이 글이 표시됨 (${formatDate(c.date)})`}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full transition-opacity group-hover:opacity-90"
                />
                <span className="flex items-center justify-center gap-1 py-3 text-[14px] font-semibold text-primary">
                  원본 화면 크게 보기 <ExternalIcon />
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
