import Reveal from "@/components/Reveal";
import { getProduct } from "@/lib/products";

// 진단 → 전략 → 실행 → 추적. 각 단계가 실제로 어떤 도구·산출물로 이어지는지 명시.
// 도구명/링크는 src/lib/products.ts(getProduct)에서 가져옵니다 — 하드코딩 금지.
// v3 "Retained Counsel": border-t 스텝 그리드, 골드는 스텝번호 1곳.

interface Step {
  num: string;
  phaseEn: string;
  phaseKo: string;
  desc: string;
  toolSlugs?: string[];
  deliverable?: string;
}

const steps: Step[] = [
  {
    num: "01",
    phaseEn: "Audit",
    phaseKo: "진단",
    desc: "홈페이지의 구조화 데이터·메타·크롤러 신호를 분석해, AI와 검색이 지금 무엇을 읽고 있는지부터 확인합니다.",
    toolSlugs: ["schemaworks"],
  },
  {
    num: "02",
    phaseEn: "Strategy",
    phaseKo: "전략",
    desc: "AI가 우리를 추천할 때 반드시 언급해야 할 키워드·엔티티·소구점을 설계하고, 인용될 정보 구조를 먼저 정의합니다.",
    deliverable: "키워드 · 엔티티 맵",
  },
  {
    num: "03",
    phaseEn: "Execution",
    phaseKo: "실행",
    desc: "전략에 맞춰 콘텐츠와 구조화 자산을 대량으로 구축하고, 멀티채널에 맞게 발행합니다.",
    toolSlugs: ["autopost", "aio_factory"],
  },
  {
    num: "04",
    phaseEn: "Tracking",
    phaseKo: "추적",
    desc: "5개 엔진의 노출·인용·점유율을 실시간으로 측정하고, 그 데이터를 다음 진단으로 다시 연결합니다.",
    toolSlugs: ["airank"],
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-pad">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal as="p" className="eyebrow mb-5">
            Process
          </Reveal>
          <Reveal as="h2" delay={60}>
            <span className="text-3xl sm:text-4xl">진단 · 전략 · 실행 · 추적</span>
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mt-6 text-lg leading-relaxed text-on-dark-soft"
          >
            한 번의 캠페인이 아니라, 진단에서 추적까지 이어지는 하나의
            사이클입니다. 측정되지 않으면 개선되지 않습니다.
          </Reveal>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const tools = (step.toolSlugs ?? [])
              .map((slug) => getProduct(slug))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));

            return (
              <Reveal as="li" key={step.num} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col border-t border-line pt-6">
                  <p className="mono text-sm text-gold">{step.num}</p>
                  <p className="mono mt-4 text-[11px] uppercase tracking-[0.18em] text-on-dark-soft">
                    {step.phaseEn}
                  </p>
                  <h3 className="mt-1.5 text-xl">{step.phaseKo}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-on-dark-soft">
                    {step.desc}
                  </p>
                  <div className="mt-6">
                    <p className="mono mb-2.5 text-[11px] uppercase tracking-wider text-on-dark-soft">
                      {tools.length > 0 ? "사용 도구" : "산출물"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tools.length > 0 ? (
                        tools.map((p) => (
                          <a
                            key={p.slug}
                            href={p.url}
                            {...(p.external
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            className="pill transition-colors hover:border-gold hover:text-gold-bright"
                          >
                            {p.name}
                            {p.external && (
                              <svg
                                className="h-3 w-3"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden
                              >
                                <path d="M7 17 17 7M9 7h8v8" />
                              </svg>
                            )}
                          </a>
                        ))
                      ) : (
                        <span className="pill">{step.deliverable}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal
          as="p"
          delay={120}
          className="mt-10 flex items-center gap-2 text-sm text-on-dark-soft"
        >
          <svg
            className="h-4 w-4 shrink-0 text-gold"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
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
