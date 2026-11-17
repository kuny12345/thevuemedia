import SiteHeader from "@/components/renew/SiteHeader";
import SiteFooter from "@/components/renew/SiteFooter";

// 인사이트 — 리뉴얼 디자인 헤더·푸터
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader active="인사이트" />
      {children}
      <SiteFooter />
    </>
  );
}
