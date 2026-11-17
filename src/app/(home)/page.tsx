import fs from "node:fs";
import path from "node:path";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { itemListSchema, faqPageSchema } from "@/lib/schema";
import HomeMotion from "./HomeMotion";
import SiteFooter from "@/components/renew/SiteFooter";

// 홈 화면 HTML(리뉴얼 시안에서 이식) — 빌드 때 읽어 서버에서 그대로 그린다.
// 문구가 HTML에 들어 있어 검색엔진·AI 크롤러가 스크립트 없이 읽을 수 있다.
const html = fs.readFileSync(
  path.join(process.cwd(), "src/app/(home)/home.html"),
  "utf8"
);

// FAQPage JSON-LD는 화면의 FAQ에서 바로 뽑는다 → 화면과 구조화 데이터가 항상 같다.
const text = (s: string) =>
  s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const faqs = [
  ...html.matchAll(
    /<button class="qa-q"><span>([\s\S]*?)<\/span>[\s\S]*?<div class="qa-a"><p>([\s\S]*?)<\/p>/g
  ),
].map((m) => ({ q: text(m[1]), a: text(m[2]) }));

export default function Home() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          "더뷰미디어 서비스",
          services.map((s) => ({
            name: s.name,
            url: s.href,
            description: s.short,
          }))
        )}
      />
      {faqs.length > 0 && <JsonLd data={faqPageSchema(faqs)} />}
      <div
        id="home-root"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <SiteFooter />
      <HomeMotion />
    </>
  );
}
