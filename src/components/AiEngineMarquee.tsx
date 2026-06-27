// AiEngineMarquee — 슬림 띠(서브틀 서피스) + 무한 마퀴.
// 가짜 브랜드 로고 금지 → .mono 텍스트칩만 사용(DESIGN_CONTRACT §4.3, §1).
// CSS-only(애니메이션 + hover pause) → 서버 컴포넌트 유지. reduced-motion은 globals가 중화.

// 추적/추천 대상 AI 엔진(워드마크 텍스트). NAP/서비스/도구가 아니라 표시 라벨이라 로컬 정의.
const ENGINES = [
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Copilot",
  "Grok",
  "Google AI Overview",
  "Naver AI",
  "Claude",
] as const;

function ChipSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-x-3 pl-3"
      aria-hidden={hidden || undefined}
    >
      {ENGINES.map((name, i) => {
        const accent = i % 3 === 2;
        return (
          <li
            key={name}
            className={
              accent
                ? "flex items-center gap-2 whitespace-nowrap rounded-full border border-brand-50 bg-brand-50 px-4 py-2 shadow-sm"
                : "flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-paper px-4 py-2 shadow-sm"
            }
          >
            <span
              aria-hidden="true"
              className="size-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand to-cyan"
            />
            <span
              className={
                accent
                  ? "mono text-sm font-medium text-brand"
                  : "mono text-sm font-medium text-text"
              }
            >
              {name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function AiEngineMarquee() {
  return (
    <section
      aria-label="더뷰미디어가 추적·최적화하는 AI 검색 엔진"
      className="relative overflow-hidden border-y border-line bg-surface py-7 md:py-8"
    >
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-7">
          <p className="shrink-0 text-sm font-medium text-text-soft md:max-w-[16rem]">
            <span
              aria-hidden="true"
              className="mr-2 inline-block size-1.5 rounded-full bg-up align-middle"
            />
            <span className="mono mr-2 text-brand">{"//"}</span>
            이 엔진들이 당신을 추천하게 —
          </p>

          {/* 마퀴 뷰포트: 양 끝 페이드 마스크 + 그룹 호버 일시정지 */}
          <div
            className="group relative min-w-0 flex-1 overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)",
            }}
          >
            <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused]">
              <ChipSet />
              {/* 끊김 없는 루프용 복제본 — 스크린리더에는 숨김 */}
              <ChipSet hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
