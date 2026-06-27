import Link from "next/link";
import { NAP } from "@/lib/nap";
import { services } from "@/lib/services";
import { products } from "@/lib/products";

const TEL_HREF = `tel:${NAP.phoneE164}`;
const HOURS = `${NAP.hoursDisplay} · ${NAP.hoursClosed}`;
const FOUNDED_YEAR = NAP.foundingDate.slice(0, 4); // "2023"
const YEAR = new Date().getFullYear();

// 회사 링크
const COMPANY_LINKS = [
  { href: "/blog", label: "블로그", external: false },
  { href: "/#insights", label: "인사이트", external: false },
  { href: "/#contact", label: "문의", external: false },
] as const;

// 실재 채널만(YouTube·Instagram). 가짜 sameAs 금지 — NAP.socials 단일 출처.
function SocialIcon({ name }: { name: string }) {
  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" className="h-5 w-5">
        <path d="M23.5 6.5a3 3 0 0 0-2.1-2.13C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.4.51A3 3 0 0 0 .5 6.5 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.13c1.9.51 9.4.51 9.4.51s7.5 0 9.4-.51a3 3 0 0 0 2.1-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.5ZM9.55 15.57V8.43L15.82 12Z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" className="h-5 w-5">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-2.4.11-3.53 1.26-3.64 3.64-.06 1.24-.07 1.61-.07 4.51s.01 3.27.07 4.51c.11 2.38 1.24 3.53 3.64 3.64 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.4-.11 3.53-1.26 3.64-3.64.06-1.24.07-1.61.07-4.51s-.01-3.27-.07-4.51c-.11-2.38-1.24-3.53-3.64-3.64-1.24-.06-1.61-.07-4.76-.07Zm0 4.02a5.8 5.8 0 1 0 0 11.6 5.8 5.8 0 0 0 0-11.6Zm0 9.57a3.77 3.77 0 1 1 0-7.54 3.77 3.77 0 0 1 0 7.54Zm6.04-9.78a1.36 1.36 0 1 0 0 2.71 1.36 1.36 0 0 0 0-2.71Z" />
      </svg>
    );
  }
  return null;
}

export default function Footer() {
  return (
    <footer className="dark-section border-t border-white/10">
      {/* 상단 그라데이션 액센트 라인 (장식) */}
      <div
        aria-hidden
        className="h-0.5 w-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4]"
      />
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* 브랜드 + 풀 NAP 블록 */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex flex-col" aria-label="더뷰미디어 홈">
              <span className="text-xl font-extrabold tracking-tight text-white">
                더뷰미디어
              </span>
              <span className="mono mt-1 text-[0.7rem] tracking-[0.18em] text-on-dark-soft">
                THEVUEMEDIA
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-soft">
              {NAP.tagline}
            </p>

            <ul className="mt-7 space-y-3 text-sm text-on-dark-soft">
              <li className="flex items-start gap-3">
                <Pin />
                <span>{NAP.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone />
                <a
                  href={TEL_HREF}
                  aria-label={`전화 ${NAP.phoneDisplay}`}
                  className="mono inline-flex min-h-[44px] items-center transition-colors hover:text-white"
                >
                  {NAP.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock />
                <span>{HOURS}</span>
              </li>
              <li className="flex items-start gap-3">
                <Building />
                <span>
                  설립 <span className="mono">{FOUNDED_YEAR}</span>
                </span>
              </li>
            </ul>

            {/* 소셜 — YouTube · Instagram (NAP.socials, 실재 채널만) */}
            <nav aria-label="소셜 미디어 채널" className="mt-7">
              <ul className="flex gap-3">
                {NAP.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={`더뷰미디어 ${s.name} 채널 (새 탭에서 열림)`}
                      title={`더뷰미디어 ${s.name}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-on-dark-soft transition-colors hover:border-white/25 hover:bg-white/10 hover:text-brand"
                    >
                      <SocialIcon name={s.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* 링크 컬럼 */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* 서비스 — services 단일 출처 */}
            <FooterCol title="서비스">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={svc.href}
                    className="inline-flex min-h-[36px] items-center text-sm leading-snug text-on-dark-soft transition-colors hover:text-white"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </FooterCol>

            {/* 자체 도구 — products 단일 출처(외부는 _blank) */}
            <FooterCol title="자체 도구">
              {products.map((p) =>
                p.external ? (
                  <li key={p.slug}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} (새 탭에서 열림)`}
                      className="inline-flex min-h-[36px] items-center gap-1.5 text-sm leading-snug text-on-dark-soft transition-colors hover:text-white"
                    >
                      {p.name}
                      <svg
                        aria-hidden
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5 opacity-70"
                      >
                        <path d="M7 17 17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </li>
                ) : (
                  <li key={p.slug}>
                    <Link
                      href={p.url}
                      className="inline-flex min-h-[36px] items-center text-sm leading-snug text-on-dark-soft transition-colors hover:text-white"
                    >
                      {p.name}
                    </Link>
                  </li>
                )
              )}
            </FooterCol>

            {/* 회사 */}
            <FooterCol title="회사">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-flex min-h-[36px] items-center text-sm leading-snug text-on-dark-soft transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </FooterCol>
          </div>
        </div>

        {/* 카피라이트 */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="mono text-xs text-on-dark-soft">
            © {YEAR} 더뷰미디어(THEVUEMEDIA). All rights reserved.
          </p>
          <p className="text-xs text-on-dark-soft">
            {NAP.address.addressRegion} {NAP.address.addressLocality} · AI 검색
            최적화(GEO·AIO)
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── 링크 컬럼 ──────────────────────────────────────────────
function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="eyebrow text-on-dark">{title}</h2>
      <ul className="mt-4 space-y-1.5">{children}</ul>
    </div>
  );
}

// ── 라인 아이콘(stroke 1.75, currentColor) ──────────────────
const iconProps = {
  "aria-hidden": true,
  focusable: "false" as const,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "mt-0.5 h-4 w-4 shrink-0 text-brand-bright",
};

function Pin() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </svg>
  );
}
function Phone() {
  return (
    <svg {...iconProps}>
      <path d="M5 4h3.2l1.4 4-2 1.3a12 12 0 0 0 5.1 5.1l1.3-2 4 1.4V19a1.8 1.8 0 0 1-2 1.8A15.5 15.5 0 0 1 3.2 6 1.8 1.8 0 0 1 5 4Z" />
    </svg>
  );
}
function Clock() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.6V12l3 1.8" />
    </svg>
  );
}
function Building() {
  return (
    <svg {...iconProps}>
      <path d="M4 21h16M6 21V5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v16M18 21v-9h2" />
      <path d="M9 8h3M9 12h3M9 16h3" />
    </svg>
  );
}
