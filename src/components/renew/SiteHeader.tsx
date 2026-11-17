import Link from "next/link";
import { NAP } from "@/lib/nap";

// 리뉴얼 디자인 하위 페이지(인사이트·칼럼) 공용 헤더 — 홈 헤더와 같은 모양·메뉴.
const NAV = [
  { href: "/#services", label: "서비스" },
  { href: "/#s1", label: "SaaS 솔루션" },
  { href: "/#process", label: "프로세스" },
  { href: "/blog", label: "인사이트" },
  { href: "/column", label: "칼럼" },
] as const;

export default function SiteHeader({ active }: { active?: "인사이트" | "칼럼" }) {
  return (
    <header className="hd solid">
      <Link className="brand" href="/" aria-label={`${NAP.name} 홈`}>
        <i />
        {NAP.name}
      </Link>
      <nav className="nav" aria-label="주요 메뉴">
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className={active === n.label ? "on" : undefined}
            aria-current={active === n.label ? "page" : undefined}
          >
            {n.label}
          </Link>
        ))}
      </nav>
      <div className="hd-r">
        <a className="tel" href={`tel:${NAP.phoneE164}`} aria-label={`전화 ${NAP.phoneDisplay}`}>
          {NAP.phoneDisplay}
        </a>
        <Link className="btn sm" href="/#consult">
          상담 신청
        </Link>
      </div>
    </header>
  );
}
