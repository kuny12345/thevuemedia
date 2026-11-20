import SiteHeader from "@/components/renew/SiteHeader";
import SiteFooter from "@/components/renew/SiteFooter";

// 서비스 상세 — 리뉴얼 디자인 헤더·푸터
export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader active="서비스" />
      <div className="svc-page">{children}</div>
      <SiteFooter />
    </>
  );
}
