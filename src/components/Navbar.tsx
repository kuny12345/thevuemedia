"use client";

import { useEffect, useState } from "react";
import { NAP } from "@/lib/nap";

// 다크 베이스 위 헤더 — "Retained Counsel". 세리프 워드마크 + 골드 헤어라인.
// 데스크톱 메뉴 — 섹션 id와 1:1로 맞춰 앵커가 해석되게 유지.
const NAV_LINKS = [
  { href: "/#services", label: "서비스" },
  { href: "/#tools", label: "자체 도구" },
  { href: "/#process", label: "프로세스" },
  { href: "/blog", label: "인사이트" },
] as const;

const TEL_HREF = `tel:${NAP.phoneE164}`;
const TEL_LABEL = `전화 ${NAP.phoneDisplay}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 스크롤 8px 초과 시 헤더 배경/블러 활성.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 데스크톱 폭으로 넘어가면 모바일 메뉴 닫기 + ESC로 닫기.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || mobileOpen
          ? "border-b border-line bg-ink/85 backdrop-blur-xl"
          : "border-b border-line/60 bg-ink/70 backdrop-blur-md"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-[72px]">
        {/* 로고 — 세리프 워드마크 */}
        <a
          href="/"
          aria-label={`${NAP.name} 홈`}
          className="font-serif text-lg font-bold tracking-tight text-[#f5f1e6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          더뷰미디어
        </a>

        {/* 데스크톱 메뉴 */}
        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-on-dark-soft transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 우측: 전화 아이콘 + CTA (데스크톱) */}
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={TEL_HREF}
            aria-label={TEL_LABEL}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[2px] border border-line text-on-dark transition-colors hover:border-line-strong hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <PhoneIcon />
          </a>
          <a
            href="/#consult"
            className="btn btn-primary min-h-[44px] px-5 py-2.5 text-sm"
          >
            상담 신청
          </a>
        </div>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-[2px] text-on-dark md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded bg-current transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                mobileOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* 모바일 슬라이드다운 메뉴 */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          mobileOpen
            ? "max-h-[26rem] border-t opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="모바일 메뉴" className="container-x py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center rounded-[2px] px-4 text-base font-medium text-on-dark transition-colors hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4">
            <a
              href={TEL_HREF}
              aria-label={TEL_LABEL}
              onClick={() => setMobileOpen(false)}
              className="btn btn-ghost w-full"
            >
              <PhoneIcon />
              {NAP.phoneDisplay}
            </a>
            <a
              href="/#consult"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary w-full"
            >
              상담 신청
            </a>
          </div>
        </nav>
      </div>
    </header>
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
