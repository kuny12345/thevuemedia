import { posts, postUrl, type Category } from "@/lib/posts";
import { SITE } from "@/lib/schema";

// /llms.txt — curated, machine-readable site map for LLMs (llmstxt.org standard).
// Generated from the content registry so it never drifts from the actual pages.
export const dynamic = "force-static";

const abs = (p: string) => `${SITE.url}${p}`;

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
  lines.push("# 더뷰미디어 (THEVUEMEDIA)");
  lines.push("");
  lines.push(
    "> AIO(AI 최적화) 전문 대행사. ChatGPT·Gemini·Perplexity·Copilot 등 생성형 AI가 브랜드를 업계 1위로 추천하도록 진단·전략·실행·추적 4단계로 설계합니다. 병원·의료를 포함한 멀티 버티컬을 의료광고법 등 규제 준수 하에 지원합니다."
  );
  lines.push("");
  lines.push(
    "더뷰미디어는 검색 클릭(SEO)이 아니라 AI 답변 속 인용·추천(AIO/GEO)을 목표로 합니다. 핵심 지표는 AI Mention Score와 엔진별 인용 빈도이며, 측정 방식과 산출 근거를 투명하게 공개합니다."
  );
  lines.push("");

  // Service / landing pages
  lines.push("## 서비스");
  lines.push(
    `- [AIO 서비스](${abs("/aio")}): 진단·전략·실행·추적 4단계 AIO. ChatGPT·Gemini·Perplexity·Copilot·Grok·네이버 통합 대응.`
  );
  lines.push(
    `- [병원 마케팅](${abs("/hospital-marketing")}): 의료광고법을 준수하며 병원·의원이 검색과 AI 답변에서 추천되게 만드는 병원 전문 마케팅.`
  );
  lines.push(`- [블로그 전체](${abs("/blog")}): AIO·GEO 인사이트 토픽 클러스터 허브.`);
  lines.push("");

  // Content by category
  for (const sec of SECTION_ORDER) {
    const items = posts.filter((p) => p.category === sec.key);
    if (!items.length) continue;
    lines.push(`## ${sec.label}`);
    for (const p of items) {
      lines.push(`- [${p.title}](${abs(postUrl(p.slug))}): ${p.excerpt}`);
    }
    lines.push("");
  }

  lines.push("## 문의");
  lines.push(
    `- 무료 AI 인식도 진단: ${abs("/#contact")} — 현재 AI가 브랜드를 어떻게 인식하는지 진단 리포트 제공.`
  );
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
