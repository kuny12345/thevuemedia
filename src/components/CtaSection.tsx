import { NAP } from "@/lib/nap";
import { getProduct } from "@/lib/products";
import Reveal from "@/components/Reveal";

// 전화 CTA — NAP 단일 출처(하드코딩 금지)
const TEL_HREF = `tel:${NAP.phoneE164}`;
// 무료 AI 진단 = 자체 진단 SaaS(SchemaWorks). URL은 products 단일 출처에서.
const diagnostic = getProduct("schemaworks");
const HOURS = `${NAP.hoursDisplay} · ${NAP.hoursClosed}`;

// NAP 요약(주소·전화·영업시간) — 라인 아이콘(stroke 1.75, currentColor)
const NAP_SUMMARY = [
  {
    key: "address",
    label: "주소",
    value: NAP.address.full,
    href: undefined as string | undefined,
    icon: (
      <>
        <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
        <circle cx="12" cy="10.5" r="2.4" />
      </>
    ),
  },
  {
    key: "phone",
    label: "전화",
    value: NAP.phoneDisplay,
    href: TEL_HREF,
    icon: (
      <path d="M5 4h3.2l1.4 4-2 1.3a12 12 0 0 0 5.1 5.1l1.3-2 4 1.4V19a1.8 1.8 0 0 1-2 1.8A15.5 15.5 0 0 1 3.2 6 1.8 1.8 0 0 1 5 4Z" />
    ),
  },
  {
    key: "hours",
    label: "영업시간",
    value: HOURS,
    href: undefined,
    icon: (
      <>
        <circle cx="12" cy="12" r="8.2" />
        <path d="M12 7.6V12l3 1.8" />
      </>
    ),
  },
] as const;

export default function CtaSection() {
  return (
    <section id="contact" className="section-pad dark-section glow">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">// GET STARTED</p>

          <h2 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-balance sm:text-4xl lg:text-[2.9rem]">
            AI가 추천하는 브랜드,{" "}
            <span className="text-gradient">지금 시작하세요.</span>
          </h2>

          <span className="accent-bar mx-auto mt-6" aria-hidden />

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-on-dark-soft sm:text-lg">
            홈페이지 주소만 입력하면, AI·검색이 우리 브랜드를 어떻게 읽는지 무료로
            진단해 드립니다. 결과를 바탕으로 무엇부터 고쳐야 할지 함께 정합니다.
          </p>

          {/* CTA — 무료 AI 진단(primary) + 전화 상담(.btn-on-dark) */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={diagnostic?.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="무료 AI 진단 시작하기 (새 탭에서 열림)"
              className="btn btn-primary w-full sm:w-auto"
            >
              무료 AI 진단
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
            </a>

            <a
              href={TEL_HREF}
              aria-label={`전화 상담 ${NAP.phoneDisplay}`}
              className="btn btn-on-dark w-full sm:w-auto"
            >
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
                <path d="M5 4h3.2l1.4 4-2 1.3a12 12 0 0 0 5.1 5.1l1.3-2 4 1.4V19a1.8 1.8 0 0 1-2 1.8A15.5 15.5 0 0 1 3.2 6 1.8 1.8 0 0 1 5 4Z" />
              </svg>
              전화 상담
            </a>
          </div>

          {/* NAP 요약 — mono / muted */}
          <dl className="mono mx-auto mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-8 text-sm text-on-dark-soft sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {NAP_SUMMARY.map((item) => (
              <div key={item.key} className="flex items-center gap-2.5">
                <span className="icon-chip chip-dark" aria-hidden>
                  <svg
                    aria-hidden
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                  >
                    {item.icon}
                  </svg>
                </span>
                <dt className="sr-only">{item.label}</dt>
                <dd className="not-italic">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="min-h-[44px] transition-colors hover:text-white"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
