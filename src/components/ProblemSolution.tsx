import Reveal from "@/components/Reveal";
import { getProduct } from "@/lib/products";

// Credo — 컨설팅펌식 포지션 선언 + before/after 미니 채팅 목업(예시).
// v3 "Retained Counsel": 다크 베이스, gap-px 그리드, 골드는 스텝번호 1곳.

const airank = getProduct("airank");

const points = [
  {
    title: "검색 대신, AI에게 묻습니다",
    desc: "정보 탐색의 출발점이 검색창에서 대화형 AI로 옮겨가고 있습니다. 질문은 길어지고, 돌아오는 답은 하나로 좁혀집니다.",
  },
  {
    title: "인용되지 않으면, 보이지 않습니다",
    desc: "AI는 학습하고 인용한 출처만 추천합니다. 도메인 어디에도 구조화된 근거가 없으면 브랜드는 답변에서 그대로 사라집니다.",
  },
  {
    title: "측정되지 않으면, 개선할 수 없습니다",
    desc: "AI가 우리를 추천하는지 매일 추적해야 무엇을 바꿔야 할지 알 수 있습니다. 변화는 측정될 때만 개선됩니다.",
    link: airank
      ? { href: airank.url, label: `${airank.name}로 추적`, external: airank.external }
      : undefined,
  },
];

export default function ProblemSolution() {
  return (
    <section className="section-pad">
      <div className="container-x">
        {/* 상단: 좌 선언 / 우 before·after 목업 */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="min-w-0">
              <p className="eyebrow mb-5">Credo</p>
              <h2 className="text-3xl leading-snug sm:text-4xl">
                검색은 답을 주지만,
                <br />
                AI는 <span className="text-gold">추천</span>을 합니다.
              </h2>
              <div className="mt-7 space-y-4 text-[16px] leading-relaxed text-on-dark-soft">
                <p>
                  사람들은 더 이상 열 개의 파란 링크를 훑지 않습니다. ChatGPT에
                  묻고, 돌아온 한 문장의 답을 그대로 신뢰합니다.
                </p>
                <p>
                  검색이 <strong className="font-semibold text-on-dark">목록</strong>을
                  보여줬다면, AI는{" "}
                  <strong className="font-semibold text-on-dark">하나</strong>를
                  추천합니다. 그 추천 안에 인용되지 못하면, 고객은 브랜드를
                  마주칠 기회조차 갖지 못합니다.
                </p>
                <p>
                  그래서 지금 필요한 건 순위를 올리는 SEO가 아니라, AI가 근거로
                  삼고 인용하도록 설계하는 GEO입니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 우 — before/after 미니 채팅 목업 (예시 라벨 필수) */}
          <Reveal>
            <div className="card min-w-0 p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="mono text-xs tracking-wide text-on-dark-soft">
                  AI 답변
                </span>
                <span className="pill pill-brand mono text-[0.7rem] uppercase">예시</span>
              </div>

              <div className="border border-line bg-[rgba(236,231,219,0.03)] px-4 py-3">
                <p className="mono mb-1 text-[0.68rem] tracking-wide text-on-dark-soft">
                  USER
                </p>
                <p className="break-keep text-sm text-on-dark">
                  “대구에서 믿을 만한 ○○ 업체 추천해줘.”
                </p>
              </div>

              <div className="mt-3 border border-line px-4 py-3">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <p className="mono text-[0.68rem] tracking-wide text-on-dark-soft">
                    AI · GEO 적용 전
                  </p>
                  <span className="mono text-[0.65rem] text-on-dark-soft">미인용</span>
                </div>
                <p className="break-keep text-sm leading-relaxed text-on-dark-soft">
                  “여러 업체가 있어 특정 업체를 추천드리긴 어렵습니다. 직접
                  비교해 보시길 권합니다.”
                </p>
              </div>

              <div className="my-2.5 flex items-center justify-center gap-2 text-on-dark-soft">
                <span className="h-px w-8 bg-line" />
                <span className="mono text-[0.65rem] tracking-wide">GEO 적용</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 text-gold"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                <span className="h-px w-8 bg-line" />
              </div>

              <div className="border border-[rgba(201,169,106,0.4)] bg-[rgba(201,169,106,0.06)] px-4 py-3">
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <p className="mono text-[0.68rem] tracking-wide text-gold">
                    AI · GEO 적용 후
                  </p>
                  <span className="mono inline-flex items-center gap-1 text-[0.65rem] text-up">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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
                <p className="break-keep text-sm leading-relaxed text-on-dark">
                  “○○ 분야라면{" "}
                  <strong className="font-semibold text-[#f5f1e6]">[브랜드]</strong>를
                  참고할 만합니다. 구조화된 정보와 사례가 잘 정리되어 있습니다.”
                </p>
                <span className="mono mt-2 inline-block border border-line px-1.5 py-0.5 text-[0.62rem] text-on-dark-soft">
                  출처: [브랜드] 인용
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 하단: 3포인트 — gap-px 그리드 */}
        <Reveal>
          <div className="mt-16 grid gap-px bg-line sm:grid-cols-3">
            {points.map((p, i) => (
              <article key={p.title} className="flex flex-col bg-ink-soft p-8">
                <p className="mono mb-4 text-sm text-gold-dim">0{i + 1}</p>
                <h3 className="break-keep text-lg">{p.title}</h3>
                <p className="mt-2 break-keep text-sm leading-relaxed text-on-dark-soft">
                  {p.desc}
                </p>
                {p.link && (
                  <a
                    href={p.link.href}
                    {...(p.link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mono mt-4 inline-flex items-center gap-1.5 self-start text-sm text-gold transition-colors hover:text-gold-bright"
                    aria-label={`${p.link.label} (새 창)`}
                  >
                    {p.link.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
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
