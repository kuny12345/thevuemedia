"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "/aio", label: "AIO 서비스" },
  { href: "/hospital-marketing", label: "병원 마케팅" },
  { href: "/products", label: "제품" },
  { href: "/blog", label: "인사이트" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/80"
          : "bg-white/0 border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="/"
          className="flex items-center gap-0.5 text-base font-extrabold tracking-tight text-ink"
        >
          <span>THE</span>
          <span className="text-primary">VUE</span>
          <span>MEDIA</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-500 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              무료 진단
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-5 h-0.5 rounded bg-ink" />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col p-4 gap-1">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="/#contact"
                className="block text-center px-4 py-3 bg-gray-900 text-white rounded-lg font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                무료 진단
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
