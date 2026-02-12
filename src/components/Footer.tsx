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
              <span className="text-primary">VIEW</span>
              <span className="text-white">MEDIA</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI가 당신의 브랜드를 추천하게 만듭니다.
            </p>
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
              <li>contact@thevuemedia.co.kr</li>
              <li>02-XXX-XXXX</li>
              <li>서울특별시 강남구</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; 2026 더뷰미디어(THE VIEW MEDIA). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
