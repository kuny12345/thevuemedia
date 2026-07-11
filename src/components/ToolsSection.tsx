import Link from "next/link";
import { products } from "@/lib/products";
import ProductIcon from "@/components/ProductIcon";
import Reveal from "@/components/Reveal";

// 파이프라인: 진단 → 추적 → 생산·발행 → AI 인용 자산 (products.ts role과 일치)
const PIPELINE = ["진단", "추적", "생산·발행", "AI 인용 자산"] as const;

export default function ToolsSection() {
  return (
    <section id="tools" className="section-pad dark-section grid-bg glow">
      <div className="container-x">
        {/* 헤더 */}
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Our Tools</p>
          <h2 className="mt-4 text-3xl leading-snug sm:text-4xl lg:text-5xl">
            방법론을 <span className="text-gold">소프트웨어로 증명</span>합니다
          </h2>
          <span className="accent-bar mt-5" aria-hidden />
          <p className="mt-5 text-base leading-relaxed text-on-dark-soft sm:text-lg">
            AIO를 설명만 하는 대행사가 아닙니다. 진단부터 추적, 생산·발행, AI
            인용 자산까지 — 단계마다 직접 만든 도구로 실행합니다.
          </p>
        </Reveal>

        {/* 파이프라인 스트립 */}
        <Reveal delay={80}>
          <ol className="mono mt-8 flex flex-wrap items-center gap-x-2 gap-y-3 text-xs sm:text-sm">
            {PIPELINE.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 border border-line bg-[rgba(201,169,106,0.04)] px-3 py-1.5">
                  <span className="text-gold">0{i + 1}</span>
                  <span className="text-white">{step}</span>
                </span>
                {i < PIPELINE.length - 1 && (
                  <svg
                    aria-hidden
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-on-dark-soft/60"
                  >
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        {/* 도구 4종 카드 */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} className="h-full">
              <article className="card-dark flex h-full flex-col p-5 transition-colors duration-200 hover:border-line-strong sm:p-8">
                {/* 아이콘 + 역할 배지 */}
                <div className="flex items-center justify-between gap-3">
                  <span className="icon-chip chip-dark">
                    <ProductIcon iconKey={p.iconKey} className="h-6 w-6" />
                  </span>
                  <span className="mono inline-flex items-center border border-line-strong bg-[rgba(201,169,106,0.08)] px-3 py-1 text-xs font-medium text-gold-bright">
                    {p.role}
                  </span>
                </div>

                <h3 className="mt-5 text-xl">{p.name}</h3>
                <p className="mt-1.5 text-sm text-on-dark-soft">{p.tagline}</p>

                {/* 기능 (최대 4개) */}
                <ul className="mt-5 space-y-2.5">
                  {p.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed">
                      <svg
                        aria-hidden
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      >
                        <path d="m5 12 4.5 4.5L19 7" />
                      </svg>
                      <span className="text-on-dark">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* 링크: 외부는 새 탭 / 내부는 라우팅 */}
                <div className="mt-auto pt-6">
                  {p.external ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.urlLabel} (새 탭에서 열림)`}
                      className="inline-flex min-h-[44px] items-center gap-1.5 mono text-sm text-gold transition-all hover:gap-2.5 hover:text-gold-bright"
                    >
                      {p.urlLabel}
                      <svg
                        aria-hidden
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={p.url}
                      className="inline-flex min-h-[44px] items-center gap-1.5 mono text-sm text-gold transition-all hover:gap-2.5 hover:text-gold-bright"
                    >
                      {p.urlLabel}
                      <svg
                        aria-hidden
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
