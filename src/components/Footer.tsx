export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="flex items-center gap-0.5 text-xl font-extrabold tracking-tight mb-4"
            >
              <span className="text-white">THE</span>
              <span className="text-primary">VUE</span>
              <span className="text-white">MEDIA</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              AI가 브랜드를 추천하게 만듭니다.
            </p>
            
            {/* Social Media Links - SEO Optimized */}
            <nav aria-label="소셜 미디어 채널">
              <ul className="flex flex-wrap gap-3">
                {[
                  {
                    name: "YouTube",
                    url: "https://www.youtube.com/@thevuemedia",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                        <path fill="#fff" d="M9.545 15.568V8.432L15.818 12z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/_thevuemedia_",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Threads",
                    url: "https://www.threads.net/@_thevuemedia_",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12.186 0C7.91 0 4.129 1.314 1.314 3.343c-.09.06-.18.12-.27.18v.03c.09.06.18.12.27.18C4.129 5.76 7.91 7.074 12.186 7.074c4.276 0 8.057-1.314 10.872-3.343.09-.06.18-.12.27-.18v-.03c-.09-.06-.18-.12-.27-.18C20.243 1.314 16.462 0 12.186 0zm0 3.343c-4.276 0-8.057 1.314-10.872 3.343-.09.06-.18.12-.27.18v.03c.09.06.18.12.27.18C4.129 9.103 7.91 10.417 12.186 10.417c4.276 0 8.057-1.314 10.872-3.343.09-.06.18-.12.27-.18v-.03c-.09-.06-.18-.12-.27-.18-2.815-2.029-6.596-3.343-10.872-3.343zm0 3.343c-4.276 0-8.057 1.314-10.872 3.343-.09.06-.18.12-.27.18v.03c.09.06.18.12.27.18C4.129 12.446 7.91 13.76 12.186 13.76c4.276 0 8.057-1.314 10.872-3.343.09-.06.18-.12.27-.18v-.03c-.09-.06-.18-.12-.27-.18-2.815-2.029-6.596-3.343-10.872-3.343z" />
                      </svg>
                    ),
                  },
                  {
                    name: "X (Twitter)",
                    url: "https://twitter.com/_thevuemedia_",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/company/_thevuemedia_",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/_thevuemedia_",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Kakao Channel",
                    url: "https://pf.kakao.com/_thevuemedia_",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 3C6.48 3 2 6.48 2 11c0 2.13 1.05 4.04 2.85 5.37L4 21l4.75-2.61C9.58 18.75 10.77 19 12 19c5.52 0 10-3.48 10-8s-4.48-8-10-8z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={`더뷰미디어 ${social.name} 채널`}
                      className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary text-gray-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                      title={`더뷰미디어 ${social.name} 채널`}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Service links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">서비스</h4>
            <ul className="space-y-2.5">
              {[
                { href: "#service", label: "AIO 전략" },
                { href: "#process", label: "도입 프로세스" },
                { href: "#proof", label: "성과 사례" },
                { href: "#contact", label: "무료 진단" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">회사</h4>
            <ul className="space-y-2.5">
              {["회사 소개", "블로그", "채용", "개인정보처리방침"].map(
                (label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">문의</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              <li>kuny12345@gmail.com</li>
              <li>010-6663-</li>
              <li>대구 수성구 청수로 20길 13 프롬앤드 206</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2026 더뷰미디어(THEVUEMEDIA). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
