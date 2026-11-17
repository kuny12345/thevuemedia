"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// 폰·태블릿(1100px 이하) 메뉴 버튼 + 펼침 메뉴 — 하위 페이지 헤더용 (홈은 motion.js가 같은 동작)
type Item = { href: string; label: string };

export default function MobileMenu({
  items,
  active,
  tel,
  telLabel,
}: {
  items: readonly Item[];
  active?: string;
  tel: string;
  telLabel: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hd = document.querySelector(".hd");
    hd?.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="m-btn"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={open}
        aria-controls="m-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <i />
        <i />
      </button>
      <div className="m-dim" aria-hidden="true" onClick={() => setOpen(false)} />
      <div className="m-panel" id="m-panel" aria-hidden={!open}>
        <nav aria-label="모바일 메뉴">
          {items.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={active === n.label ? "on" : undefined}
              aria-current={active === n.label ? "page" : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="m-ft">
          <a className="m-tel" href={tel} tabIndex={open ? 0 : -1}>
            {telLabel}
          </a>
          <Link className="btn blue" href="/#consult" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            상담 신청
          </Link>
        </div>
      </div>
    </>
  );
}
