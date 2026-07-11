import { NAP } from "@/lib/nap";
import { getProduct } from "@/lib/products";
import Reveal from "@/components/Reveal";
import ConsultForm from "@/components/ConsultForm";

// ConsultSection — 모든 페이지 CTA 의 종착지 (id="consult").
// 상담 폼 + 전화 이중 채널. NAP 단일 출처(하드코딩 금지).

const TEL_HREF = `tel:${NAP.phoneE164}`;
const diagnostic = getProduct("schemaworks");
const HOURS = `${NAP.hoursDisplay} · ${NAP.hoursClosed}`;

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
    <section id="consult" className="section-pad dark-section glow relative">
      <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        {/* 좌 — 선언 + NAP */}
        <Reveal>
          <div>
            <p className="eyebrow mb-5">Consultation</p>
            <h2 className="text-3xl leading-snug sm:text-4xl">
              AI가 추천하는 브랜드,
              <br />
              <span className="text-gold">지금</span> 시작하세요
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-on-dark-soft">
              현재 상태를 기준으로 무엇부터 해야 할지, 어디까지가 필요한지
              상담으로 정확히 안내드립니다.
            </p>

            {diagnostic && (
              <a
                href={diagnostic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mono mt-6 inline-flex min-h-[44px] items-center gap-1.5 text-sm text-gold transition-colors hover:text-gold-bright"
                aria-label="무료 AI 진단 (새 창)"
              >
                먼저 무료 AI 진단 받아보기
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            )}

            <ul className="mt-9 space-y-4 border-t border-line pt-7">
              {NAP_SUMMARY.map((item) => (
                <li key={item.key} className="flex items-start gap-3 text-[14px]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-dim"
                    aria-hidden
                  >
                    {item.icon}
                  </svg>
                  <span className="sr-only">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="mono text-on-dark transition-colors hover:text-gold">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-on-dark-soft">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* 우 — 상담 폼 */}
        <Reveal delay={90}>
          <ConsultForm />
        </Reveal>
      </div>
    </section>
  );
}
