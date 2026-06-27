import Reveal from "@/components/Reveal";
import { getProduct } from "@/lib/products";

// 진단 → 전략 → 실행 → 추적. 각 단계가 실제로 어떤 도구·산출물로 이어지는지 명시.
// 도구명/링크는 src/lib/products.ts(getProduct)에서 가져옵니다 — 하드코딩 금지.

type IconKey = "audit" | "strategy" | "execution" | "tracking";

interface Step {
  num: string;
  phaseEn: string;
  phaseKo: string;
  desc: string;
  icon: IconKey;
  // 이 단계에서 쓰는 도구(제품 slug) 또는 산출물 라벨
  toolSlugs?: string[];
  deliverable?: string;
}

const steps: Step[] = [
  {
    num: "01",
    phaseEn: "Audit",
    phaseKo: "진단",
    desc: "홈페이지의 구조화 데이터·메타·크롤러 신호를 분석해, AI와 검색이 지금 무엇을 읽고 있는지부터 확인합니다.",
    icon: "audit",
    toolSlugs: ["schemaworks"],
  },
  {
    num: "02",
    phaseEn: "Strategy",
    phaseKo: "전략",
    desc: "AI가 우리를 추천할 때 반드시 언급해야 할 키워드·엔티티·소구점을 설계하고, 인용될 정보 구조를 먼저 정의합니다.",
    icon: "strategy",
    deliverable: "키워드 · 엔티티 맵",
  },
  {
    num: "03",
    phaseEn: "Execution",
    phaseKo: "실행",
    desc: "전략에 맞춰 콘텐츠와 구조화 자산을 대량으로 구축하고, 멀티채널에 맞게 발행합니다.",
    icon: "execution",
    toolSlugs: ["autopost", "aio_factory"],
  },
  {
    num: "04",
    phaseEn: "Tracking",
    phaseKo: "추적",
    desc: "5개 엔진의 노출·인용·점유율을 실시간으로 측정하고, 그 데이터를 다음 진단으로 다시 연결합니다.",
    icon: "tracking",
    toolSlugs: ["airank"],
  },
];

function StepIcon({ icon }: { icon: IconKey }) {
  const common = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (icon) {
    case "audit":
      // 스캔/진단 — 돋보기 + 프레임
      return (
        <svg {...common}>
          <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
          <circle cx="11" cy="11" r="3.2" />
          <path d="M15.5 15.5 18 18" />
        </svg>
      );
    case "strategy":
      // 엔티티/키워드 설계 — 연결된 노드
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2.2" />
          <circle cx="18" cy="6" r="2.2" />
          <circle cx="12" cy="18" r="2.2" />
          <path d="M7.6 7.6 10.6 16M16.4 7.6 13.4 16M8 6h8" />
        </svg>
      );
    case "execution":
      // 대량 구축 — 적층 레이어
      return (
        <svg {...common}>
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 13l9 5 9-5M3 8v5M21 8v5" />
        </svg>
      );
    case "tracking":
      // 실시간 측정 — 펄스/그래프
      return (
        <svg {...common}>
          <path d="M3 12h3l2-6 4 14 2.5-8H21" />
        </svg>
      );
  }
}

// 아이콘 칩 액센트 로테이션: brand → violet → cyan → indigo
const chipAccents = ["chip-brand", "chip-violet", "chip-cyan", "chip-indigo"] as const;

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-surface relative overflow-hidden">
      <div className="aura aura-soft" aria-hidden="true" />
      <div className="container-x relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <Reveal as="p" className="eyebrow mb-4">
            // PROCESS
          </Reveal>
          <Reveal as="h2" delay={60}>
            <span className="text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              진단 · 전략 · 실행 · 추적
            </span>
          </Reveal>
          <div className="accent-bar mt-5" aria-hidden />
          <Reveal
            as="p"
            delay={120}
            className="mt-5 text-lg leading-relaxed text-text-soft"
          >
            한 번의 캠페인이 아니라, 진단에서 추적까지 이어지는 하나의 사이클입니다.{" "}
            <span className="text-gradient font-semibold">측정</span>되지 않으면
            개선되지 않습니다.
          </Reveal>
        </div>

        {/* Steps timeline / numbered grid */}
        <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const tools = (step.toolSlugs ?? [])
              .map((slug) => getProduct(slug))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));
            const isLast = i === steps.length - 1;

            return (
              <Reveal
                as="li"
                key={step.num}
                delay={i * 90}
                className="relative h-full"
              >
                <div className="card card-hover flex h-full flex-col p-7">
                  {/* number + icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="mono text-gradient text-3xl font-semibold tracking-tight">
                      {step.num}
                    </span>
                    <span className={`icon-chip ${chipAccents[i % chipAccents.length]}`}>
                      <StepIcon icon={step.icon} />
                    </span>
                  </div>

                  {/* title EN + KO */}
                  <p className="eyebrow mb-1.5">{step.phaseEn}</p>
                  <h3 className="mb-2.5 text-xl font-bold text-ink">
                    {step.phaseKo}
                  </h3>

                  {/* desc */}
                  <p className="flex-1 text-[15px] leading-relaxed text-text-soft">
                    {step.desc}
                  </p>

                  {/* tool used / deliverable */}
                  <div className="mt-6 border-t border-line pt-5">
                    <p className="mono mb-2.5 text-[11px] uppercase tracking-wider text-text-soft">
                      {tools.length > 0 ? "사용 도구" : "산출물"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tools.length > 0
                        ? tools.map((p) => (
                            <a
                              key={p.slug}
                              href={p.url}
                              {...(p.external
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  }
                                : {})}
                              className="pill transition-colors hover:border-brand hover:text-brand"
                            >
                              {p.name}
                              {p.external && (
                                <svg
                                  className="h-3 w-3"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden
                                >
                                  <path d="M7 17 17 7M9 7h8v8" />
                                </svg>
                              )}
                            </a>
                          ))
                        : (
                            <span className="pill">{step.deliverable}</span>
                          )}
                    </div>
                  </div>

                  {/* flow connector (desktop only) */}
                  {!isLast && (
                    <span
                      className="absolute top-1/2 -right-[1.55rem] z-10 hidden -translate-y-1/2 text-line-strong lg:block"
                      aria-hidden
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ol>

        {/* loop note — 추적이 다시 진단으로 환류 */}
        <Reveal
          as="p"
          delay={120}
          className="mt-8 flex items-center gap-2 text-sm text-text-soft"
        >
          <svg
            className="h-4 w-4 shrink-0 text-brand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" />
          </svg>
          추적 데이터는 다음 진단으로 환류됩니다 — 사이클을 반복할수록 정교해집니다.
        </Reveal>
      </div>
    </section>
  );
}
