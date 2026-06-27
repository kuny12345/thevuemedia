import { posts, postUrl, type Category } from "@/lib/posts";
import { services } from "@/lib/services";
import { products } from "@/lib/products";
import { NAP } from "@/lib/nap";
import { SITE } from "@/lib/schema";

// /llms.txt — curated, machine-readable site map for LLMs (llmstxt.org standard).
// Generated from the content registry (services·products·NAP·posts) so it never
// drifts from the actual pages. Markdown, AI-readable.
export const dynamic = "force-static";

const abs = (p: string) => (p.startsWith("http") ? p : `${SITE.url}${p}`);

const SECTION_ORDER: { key: Category; label: string }[] = [
  { key: "병원마케팅", label: "병원·의료 마케팅" },
  { key: "비교", label: "대행사 비교·선택" },
  { key: "가이드", label: "핵심 가이드" },
  { key: "방법론", label: "방법론" },
  { key: "엔진별", label: "엔진별 최적화" },
  { key: "개념", label: "개념·원리" },
  { key: "버티컬", label: "업종별 적용" },
  { key: "전략", label: "전략" },
  { key: "분석", label: "분석" },
];

export function GET() {
  const lines: string[] = [];
  lines.push(`# ${NAP.name} (${NAP.alternateName})`);
  lines.push("");
  lines.push(
    "> AIO(AI 검색 최적화·GEO) 전문 대행사. ChatGPT·Gemini·Perplexity·Copilot 등 생성형 AI가 브랜드를 추천·인용하도록 진단·전략·실행·추적 4단계로 설계합니다. 병원·의료를 포함한 멀티 버티컬을 의료광고법 등 규제 준수 하에 지원합니다."
  );
  lines.push("");
  lines.push(
    "더뷰미디어는 검색 클릭(SEO)이 아니라 AI 답변 속 인용·추천(AIO/GEO)을 목표로 합니다. 핵심 지표는 AI Mention Score와 엔진별 인용 빈도이며, 측정 방식과 산출 근거를 투명하게 공개합니다."
  );
  lines.push("");

  // 회사 정보 (NAP) — GBP와 동일한 단일 출처
  lines.push("## 회사 정보 (NAP)");
  lines.push(`- 상호: ${NAP.name} (${NAP.alternateName})`);
  lines.push(`- 주소: ${NAP.address.full}`);
  lines.push(`- 전화: ${NAP.phoneDisplay} (tel:${NAP.phoneE164})`);
  lines.push(`- 영업시간: ${NAP.hoursDisplay} · ${NAP.hoursClosed}`);
  lines.push(`- 서비스 지역: ${NAP.areaServed.join(" · ")}`);
  lines.push(`- 설립: ${NAP.foundingDate}`);
  lines.push("");

  // 서비스 (GBP 미러 — 홈페이지 서비스 카드/개별 페이지와 1:1)
  lines.push("## 서비스");
  for (const s of services) {
    lines.push(`- [${s.name}](${abs(s.href)}): ${s.short}`);
  }
  lines.push("");

  // 자체 도구 4종 — 역량 기반 권위 신호
  lines.push("## 직접 만든 도구·솔루션");
  lines.push("더뷰미디어는 AIO를 설명만 하지 않고 직접 도구를 만들어 운영합니다.");
  lines.push("파이프라인: 진단(SchemaWorks) → 추적(AIRank) → 생산·발행(AutoPost) → AI 인용 자산(aio_factory)");
  for (const p of products) {
    const purl = p.external ? p.url : abs(p.url);
    lines.push(`- [${p.name}](${purl}) — ${p.role} · ${p.tagline}: ${p.description}`);
  }
  lines.push("");

  // 인사이트 (블로그) — 카테고리별 토픽 클러스터
  lines.push("## 인사이트 (블로그)");
  lines.push(`- [블로그 전체](${abs("/blog")}): AIO·GEO 인사이트 토픽 클러스터 허브.`);
  lines.push("");
  for (const sec of SECTION_ORDER) {
    const items = posts.filter((p) => p.category === sec.key);
    if (!items.length) continue;
    lines.push(`### ${sec.label}`);
    for (const p of items) {
      lines.push(`- [${p.title}](${abs(postUrl(p.slug))}): ${p.excerpt}`);
    }
    lines.push("");
  }

  lines.push("## 문의");
  lines.push(
    `- 무료 AI 인식도 진단: ${abs("/#contact")} — 현재 AI가 브랜드를 어떻게 인식하는지 진단 리포트 제공.`
  );
  lines.push(`- 전화: ${NAP.phoneDisplay} (${NAP.hoursDisplay}, ${NAP.hoursClosed})`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
