import Reveal from "@/components/Reveal";
import { NAP } from "@/lib/nap";

// 라이트 히어로 — "Measured Authority". 좌: 카피+CTA, 우: AIRank 대시보드 목업(예시).
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
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
      strokeWidth="2.2"
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
      <div className="card shadow-[var(--shadow-lg)] p-5 sm:p-6">
        {/* header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-up" aria-hidden="true" />
            <span className="text-sm font-semibold text-ink">AIRank 대시보드</span>
          </div>
          <span className="pill mono text-[11px]">예시 · example</span>
        </div>

        {/* headline metric */}
        <div className="mt-5 flex items-end gap-2.5">
          <span className="stat-num text-gradient text-[2.75rem] leading-none font-extrabold">
            72.4
          </span>
          <span className="mb-1 inline-flex items-center gap-1 text-sm font-semibold text-up">
            <TrendUpIcon />
            +18.2
          </span>
        </div>
        <p className="mono mt-1.5 text-xs text-text-soft">
          Mention Score · 최근 30일 (예시)
        </p>

        {/* rising line chart */}
        <svg
          viewBox="0 0 320 96"
          className="mt-4 h-auto w-full"
          role="img"
          aria-label="예시 Mention Score 추세 — 우상향 라인 차트"
        >
          <defs>
            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline
            fill="url(#heroChartFill)"
            stroke="none"
            points="0,80 0,78 32,72 64,74 96,60 128,63 160,48 192,45 224,34 256,30 288,19 320,12 320,96 0,96"
          />
          <polyline
            fill="none"
            stroke="#2563eb"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,78 32,72 64,74 96,60 128,63 160,48 192,45 224,34 256,30 288,19 320,12"
          />
          <circle cx="320" cy="12" r="4" fill="#06b6d4" />
        </svg>

        {/* mono stat tiles */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-line bg-surface px-3.5 py-3">
            <p className="mono text-[11px] uppercase tracking-wide text-text-soft">
              Share of Voice
            </p>
            <p className="stat-num mt-1 text-xl font-bold text-ink">38%</p>
          </div>
          <div className="rounded-xl border border-line bg-surface px-3.5 py-3">
            <p className="mono text-[11px] uppercase tracking-wide text-text-soft">
              AI 인용
            </p>
            <p className="stat-num mt-1 text-xl font-bold text-ink">24</p>
          </div>
        </div>

        {/* tracked engines */}
        <div className="mt-4">
          <p className="mono text-[11px] uppercase tracking-wide text-text-soft">
            Tracked engines
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {ENGINES.map((e) => (
              <span
                key={e}
                className="mono rounded-md border border-line bg-paper px-2.5 py-1 text-xs font-medium text-text"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-text-soft">
        * 대시보드는 예시 화면입니다 · 실제 고객 성과 아님
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="section-pad relative overflow-hidden bg-paper"
      style={{ paddingTop: "clamp(7rem, 12vw, 11rem)" }}
    >
      {/* 은은한 상단 워시 (라이트) */}
      <div className="aura" aria-hidden="true" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 좌: 카피 + CTA */}
          <Reveal>
            <div>
              <p className="eyebrow">// 대구 · AI 검색 최적화 (GEO·AIO)</p>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                검색이 끝나고,
                <br />
                지금은 <span className="text-gradient">AI 추천</span>이
                시작됐습니다.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-soft">
                ChatGPT·Gemini·Perplexity, 그리고 구글 AI 개요가 고객에게 당신의
                브랜드를 먼저 추천하도록 콘텐츠와 구조를 설계합니다. 컨설팅에
                그치지 않고, 직접 만든 도구로 진단부터 발행·추적까지 실행합니다.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="/#contact" className="btn btn-primary">
                  무료 AI 진단
                  <ArrowIcon />
                </a>
                <a
                  href={`tel:${NAP.phoneE164}`}
                  className="btn btn-ghost"
                  aria-label={`전화 상담 ${NAP.phoneDisplay}`}
                >
                  <PhoneIcon />
                  전화 상담
                </a>
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
