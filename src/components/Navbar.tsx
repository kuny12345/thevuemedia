"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        <a href="#" className="flex items-center gap-0.5 text-xl font-extrabold tracking-tight">
          <span className={scrolled ? "text-gray-900" : "text-white"}>THE</span>
          <span className="text-primary">VUE</span>
          <span className={scrolled ? "text-gray-900" : "text-white"}>MEDIA</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {[
            { href: "#service", label: "서비스" },
            { href: "#process", label: "프로세스" },
            { href: "#proof", label: "성과" },
            { href: "#insights", label: "인사이트" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`transition-colors hover:text-primary ${
                  scrolled ? "text-gray-700" : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              무료 진단받기
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
            <span
              key={i}
              className={`block w-5 h-0.5 rounded transition-all ${
                scrolled ? "bg-gray-900" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col p-4 gap-1">
            {[
              { href: "#service", label: "서비스" },
              { href: "#process", label: "프로세스" },
              { href: "#proof", label: "성과" },
              { href: "#insights", label: "인사이트" },
            ].map((item) => (
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
                href="#contact"
                className="block text-center px-4 py-3 bg-primary text-white rounded-full font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                무료 진단받기
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
