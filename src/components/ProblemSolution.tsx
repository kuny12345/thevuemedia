import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { getProduct } from "@/lib/products";

// 검색 → AI 추천으로의 전환과 'GEO가 지금 필요한 이유' 3포인트.
// 데이터(제품)는 lib/products에서 참조 — 하드코딩 금지.

type Point = {
  title: string;
  desc: string;
  icon: ReactNode;
  link?: { href: string; label: string; external: boolean };
};

const airank = getProduct("airank");

const points: Point[] = [
  {
    title: "검색 대신, AI에게 묻습니다",
    desc: "정보 탐색의 출발점이 검색창에서 대화형 AI로 옮겨가고 있습니다. 질문은 길어지고, 돌아오는 답은 하나로 좁혀집니다.",
    icon: (
      <>
        <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h10A1.5 1.5 0 0 1 17 5.5v6A1.5 1.5 0 0 1 15.5 13H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 11.5z" />
        <path d="M19.4 14l.55 1.55L21.5 16l-1.55.55L19.4 18l-.55-1.45L17.3 16l1.55-.45z" />
      </>
    ),
  },
  {
    title: "인용되지 않으면, 보이지 않습니다",
    desc: "AI는 학습하고 인용한 출처만 추천합니다. 도메인 어디에도 구조화된 근거가 없으면 브랜드는 답변에서 그대로 사라집니다.",
    icon: (
      <>
        <path d="M9 7H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1V8" />
        <path d="M9 7v6a4 4 0 0 1-4 4" />
        <path d="M20 7h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a1 1 0 0 0 1-1V8" />
        <path d="M20 7v6a4 4 0 0 1-4 4" />
      </>
    ),
  },
  {
    title: "측정되지 않으면, 개선할 수 없습니다",
    desc: "AI가 우리를 추천하는지 매일 추적해야 무엇을 바꿔야 할지 알 수 있습니다. 변화는 측정될 때만 개선됩니다.",
    icon: (
      <>
        <path d="M4 5v14h16" />
        <rect x="7" y="12" width="2.6" height="4.5" rx="0.5" />
        <rect x="12.2" y="9" width="2.6" height="7.5" rx="0.5" />
        <rect x="17.4" y="6" width="2.6" height="10.5" rx="0.5" />
      </>
    ),
    link: airank
      ? {
          href: airank.url,
          label: `${airank.name}로 추적`,
          external: airank.external,
        }
      : undefined,
  },
];

// 데코레이션: 포인트 카드 아이콘 칩 액센트 순환 (brand → violet → cyan)
const chipAccents = ["chip-brand", "chip-violet", "chip-cyan"];

export default function ProblemSolution() {
  return (
    <section className="section-pad bg-paper border-t border-line relative overflow-hidden">
      <div className="aura aura-soft" aria-hidden="true" />
      <div className="container-x relative z-10">
        {/* 상단: 좌 카피 / 우 before·after 미니 채팅 목업 */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 좌 — 내러티브 */}
          <Reveal>
            <div className="min-w-0">
              <p className="eyebrow mb-4">// WHY GEO NOW</p>
              <h2 className="text-3xl font-extrabold leading-[1.18] tracking-tight text-ink text-balance break-keep sm:text-4xl">
                검색은 답을 주지만, AI는{" "}
                <span className="text-gradient">‘추천’</span>을 합니다.
              </h2>

              <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-text break-keep">
                <p>
                  사람들은 더 이상 열 개의 파란 링크를 훑지 않습니다. ChatGPT에
                  묻고, 돌아온 한 문장의 답을 그대로 신뢰합니다.
                </p>
                <p>
                  검색이 <span className="font-semibold text-ink">‘목록’</span>을
                  보여줬다면, AI는{" "}
                  <span className="font-semibold text-ink">‘하나’</span>를
                  추천합니다. 그 추천 안에 인용되지 못하면, 고객은 브랜드를
                  마주칠 기회조차 갖지 못합니다.
                </p>
                <p className="text-text-soft">
                  그래서 지금 필요한 건 순위를 올리는 SEO가 아니라, AI가 근거로
                  삼고 인용하도록 설계하는{" "}
                  <span className="font-semibold text-brand">GEO</span>입니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 우 — before/after 미니 채팅 목업 (예시) */}
          <Reveal>
            <div className="card min-w-0 p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-text-soft">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-brand"
                    aria-hidden="true"
                  >
                    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h10A1.5 1.5 0 0 1 17 5.5v6A1.5 1.5 0 0 1 15.5 13H9l-4 4v-4H5.5A1.5 1.5 0 0 1 4 11.5z" />
                  </svg>
                  <span className="mono text-xs tracking-wide">
                    AI 답변
                  </span>
                </div>
                <span className="pill pill-brand mono text-[0.7rem] uppercase">예시</span>
              </div>

              {/* 사용자 질문 */}
              <div className="rounded-xl border border-line bg-surface px-4 py-3">
                <p className="mono mb-1 text-[0.68rem] tracking-wide text-text-soft">
                  USER
                </p>
                <p className="text-sm text-text break-keep">
                  “대구에서 믿을 만한 ○○ 업체 추천해줘.”
                </p>
              </div>

              {/* GEO 적용 전 — 미인용 */}
              <div className="mt-3 rounded-xl border border-line bg-paper px-4 py-3">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <p className="mono text-[0.68rem] tracking-wide text-text-soft">
                    AI · GEO 적용 전
                  </p>
                  <span className="mono inline-flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 text-[0.65rem] text-text-soft">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    미인용
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text-soft break-keep">
                  “여러 업체가 있어 특정 업체를 추천드리긴 어렵습니다. 직접
                  비교해 보시길 권합니다.”
                </p>
              </div>

              {/* 전환 표시 */}
              <div className="my-2.5 flex items-center justify-center gap-2 text-text-soft">
                <span className="h-px w-8 bg-line" />
                <span className="mono text-[0.65rem] tracking-wide">
                  GEO 적용
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 text-brand"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                <span className="h-px w-8 bg-line" />
              </div>

              {/* GEO 적용 후 — 인용됨 */}
              <div className="rounded-xl border border-brand/30 bg-brand/[0.05] px-4 py-3 ring-1 ring-brand/10">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <p className="mono text-[0.68rem] tracking-wide text-brand">
                    AI · GEO 적용 후
                  </p>
                  <span className="mono inline-flex items-center gap-1 rounded-full bg-up/10 px-2 py-0.5 text-[0.65rem] text-up">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    인용됨
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-text break-keep">
                  “○○ 분야라면{" "}
                  <strong className="font-semibold text-ink">[브랜드]</strong>를
                  참고할 만합니다. 구조화된 정보와 사례가 잘 정리되어 있습니다.”
                </p>
                <span className="mono mt-2 inline-flex items-center gap-1 rounded-md border border-line bg-paper px-1.5 py-0.5 text-[0.62rem] text-text-soft">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
                    <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
                  </svg>
                  출처: [브랜드] 인용
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 하단: GEO가 지금 필요한 이유 3포인트 */}
        <Reveal>
          <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-3">
            {points.map((p, i) => (
              <article
                key={p.title}
                className="card card-hover flex flex-col p-6"
              >
                <span
                  className={`icon-chip ${chipAccents[i % chipAccents.length]} mb-4`}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    {p.icon}
                  </svg>
                </span>
                <h3 className="text-lg font-bold text-ink break-keep">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-soft break-keep">
                  {p.desc}
                </p>
                {p.link && (
                  <a
                    href={p.link.href}
                    {...(p.link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-4 inline-flex items-center gap-1.5 self-start rounded-md py-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    aria-label={`${p.link.label} (새 창)`}
                  >
                    {p.link.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                )}
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
