import Reveal from "@/components/Reveal";
import { SIGNATURE_FACTS } from "@/lib/brand";

// 다크 히어로 — "Retained Counsel". 좌: 세리프 선언 카피+CTA+사실 배지, 우: AIRank 대시보드 목업(예시).
// 법무: 1위/최고/100%/보장·검증 안 된 실적 단정 금지. 대시보드 수치는 전부 '예시'.

const ENGINES = ["ChatGPT", "Gemini", "Perplexity", "구글 AIO"] as const;

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function TrendUpIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M17 7h4v4" />
    </svg>
  );
}

/** AIRank 대시보드 — 일러스트용 목업(예시). 실제 고객 성과 아님. */
function DashboardMockup() {
  return (
    <div className="min-w-0">
      <div className="card-dark p-5 shadow-[var(--shadow-lg)] sm:p-6">
        {/* header */}
        <div className="flex items-center justify-between gap-3">
          <span className="mono text-[13px] font-medium text-on-dark">
            AIRank 대시보드
          </span>
          <span className="pill mono text-[11px]">예시 · example</span>
        </div>

        {/* headline metric */}
        <div className="mt-5 flex items-end gap-2.5">
          <span className="stat-num text-[2.75rem] font-bold leading-none text-[#f5f1e6]">
            72.4
          </span>
          <span className="mono mb-1 inline-flex items-center gap-1 text-sm text-on-dark-soft">
            <TrendUpIcon />
            +18.2
          </span>
        </div>
        <p className="mono mt-1.5 text-xs text-on-dark-soft">
          Mention Score · 최근 30일 (예시)
        </p>

        {/* rising line chart — 골드 라인 */}
        <svg
          viewBox="0 0 320 96"
          className="mt-4 h-auto w-full"
          role="img"
          aria-label="예시 Mention Score 추세 — 우상향 라인 차트"
        >
          <defs>
            <linearGradient id="heroChartGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c9a96a" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#c9a96a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            fill="url(#heroChartGold)"
            stroke="none"
            points="0,80 0,78 32,72 64,74 96,60 128,63 160,48 192,45 224,34 256,30 288,19 320,12 320,96 0,96"
          />
          <polyline
            className="chart-line"
            points="0,78 32,72 64,74 96,60 128,63 160,48 192,45 224,34 256,30 288,19 320,12"
          />
          <circle cx="320" cy="12" r="3" fill="#c9a96a" />
        </svg>

        {/* mono stat tiles */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-[2px] border border-line bg-ink-soft px-3.5 py-3">
            <p className="mono text-[11px] uppercase tracking-wide text-on-dark-soft">
              Share of Voice
            </p>
            <p className="stat-num mt-1 text-xl font-bold text-[#f5f1e6]">38%</p>
          </div>
          <div className="rounded-[2px] border border-line bg-ink-soft px-3.5 py-3">
            <p className="mono text-[11px] uppercase tracking-wide text-on-dark-soft">
              AI 인용
            </p>
            <p className="stat-num mt-1 text-xl font-bold text-[#f5f1e6]">24</p>
          </div>
        </div>

        {/* tracked engines */}
        <div className="mt-4">
          <p className="mono text-[11px] uppercase tracking-wide text-on-dark-soft">
            Tracked engines
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {ENGINES.map((e) => (
              <span key={e} className="pill mono text-xs">
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-on-dark-soft">
        * 대시보드는 예시 화면입니다 · 실제 고객 성과 아님
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{ paddingTop: "clamp(7.5rem, 12vw, 11rem)" }}
    >
      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 좌: 카피 + CTA + 사실 배지 */}
          <Reveal>
            <div className="min-w-0">
              <p className="eyebrow">AI 검색 최적화 (GEO·AIO)</p>

              <h1 className="mt-6 text-4xl leading-[1.18] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.15]">
                검색이 끝나고,
                <br />
                지금은 <span className="text-gold">AI 추천</span>이
                <br />
                시작됐습니다.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-on-dark-soft">
                ChatGPT·Gemini·Perplexity, 그리고 구글 AI 개요가 고객에게 당신의
                브랜드를 먼저 추천하도록 콘텐츠와 구조를 설계합니다. 컨설팅에
                그치지 않고, 직접 만든 도구로 진단부터 발행·추적까지 실행합니다.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/#consult" className="btn btn-primary">
                  상담 신청
                  <ArrowIcon />
                </a>
                <a
                  href="https://schemaworks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                  aria-label="무료 AI 진단 — schemaworks.org (새 창)"
                >
                  무료 AI 진단
                  <ExternalIcon />
                </a>
              </div>

              {/* 사실 배지 — 역량 기반 시그니처(SIGNATURE_FACTS) */}
              <div className="mt-12 grid grid-cols-3 gap-3 border-t border-line pt-7 sm:gap-6">
                {SIGNATURE_FACTS.map((f) => (
                  <div key={f.label}>
                    <p className="stat-num text-2xl text-[#f5f1e6] sm:text-3xl">
                      {f.value}
                      {f.unit && (
                        <span className="ml-0.5 text-base text-on-dark-soft">
                          {f.unit}
                        </span>
                      )}
                    </p>
                    <p className="mt-1.5 break-keep text-[12px] leading-snug text-on-dark-soft sm:text-[13px]">
                      {f.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 우: AIRank 대시보드 목업 (예시) */}
          <Reveal delay={120}>
            <DashboardMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
