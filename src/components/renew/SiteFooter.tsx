import Link from "next/link";
import { NAP } from "@/lib/nap";
import { services } from "@/lib/services";
import { products } from "@/lib/products";
import { guides } from "@/lib/guides";

// 리뉴얼 디자인 공용 푸터 — 홈·인사이트에서 같이 쓴다.
// 서비스·SaaS 솔루션·운영 가이드·소셜 링크는 기존 푸터와 같은 단일 출처(lib)를 읽는다.
const TEL_HREF = `tel:${NAP.phoneE164}`;

export default function SiteFooter() {
  return (
    <footer className="sf">
      <div className="sf-in">
        <div className="sf-brand">
          <Link className="brand" href="/" aria-label={`${NAP.name} 홈`}>
            <i />
            {NAP.name}
          </Link>
          <p className="sf-tag">{NAP.tagline}</p>
          <ul className="sf-nap">
            <li>{NAP.address.full}</li>
            <li>
              <a href={TEL_HREF} aria-label={`전화 ${NAP.phoneDisplay}`}>
                {NAP.phoneDisplay}
              </a>
            </li>
            <li>
              {NAP.hoursDisplay} · {NAP.hoursClosed}
            </li>
          </ul>
          <ul className="sf-social" aria-label="소셜 미디어 채널">
            {NAP.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`더뷰미디어 ${s.name} 채널 (새 탭에서 열림)`}
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="sf-col" aria-label="서비스">
          <p className="sf-h">서비스</p>
          <ul>
            {services.map((s) => (
              <li key={s.href}>
                <a href={s.href}>{s.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="sf-col" aria-label="SaaS 솔루션">
          <p className="sf-h">SaaS 솔루션</p>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                {p.external ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} (새 탭에서 열림)`}
                  >
                    {p.name}
                  </a>
                ) : (
                  <a href={p.url}>{p.name}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <nav className="sf-col" aria-label="회사">
          <p className="sf-h">회사</p>
          <ul>
            <li>
              <Link href="/blog">인사이트</Link>
            </li>
            <li>
              <Link href="/#consult">상담 신청</Link>
            </li>
            {guides.map((g) => (
              <li key={g.slug}>
                <a
                  href={g.url}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${g.name} — 운영 중인 영문 병원 가이드 (새 탭에서 열림)`}
                >
                  {g.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="sf-bar">
        <span>© 2026 더뷰미디어(THEVUEMEDIA). All rights reserved.</span>
        <span>
          {NAP.address.addressRegion} {NAP.address.addressLocality} · AI 검색
          최적화(AIO·GEO)
        </span>
      </div>
    </footer>
  );
}
