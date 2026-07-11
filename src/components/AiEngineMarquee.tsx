// AiEngineMarquee — v3 "Retained Counsel": 마퀴 폐지, 정적 골드 헤어라인 밴드.
// 가짜 브랜드 로고 금지 → .mono 텍스트칩만 사용(DESIGN_CONTRACT §1, §4.3).
// 애니메이션 없음 → 서버 컴포넌트.

const ENGINES = [
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Copilot",
  "Grok",
  "Google AI Overview",
  "Naver AI",
] as const;

export default function AiEngineMarquee() {
  return (
    <section
      aria-label="더뷰미디어가 추적·최적화하는 AI 검색 엔진"
      className="border-y border-line py-8"
    >
      <div className="container-x flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
        <p className="mono shrink-0 text-[13px] tracking-wide text-on-dark-soft">
          이 엔진들이 당신을 추천하게 —
        </p>
        <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-2.5">
          {ENGINES.map((name) => (
            <li key={name} className="pill">
              <span className="mono text-[13px]">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
