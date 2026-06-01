// 더뷰미디어가 직접 만들어 쓰는 AIO 제품·솔루션 (단일 출처).
// ProductsSection·/products·llms.txt·schema가 모두 이 데이터를 참조합니다.
// 모든 설명은 실제 기능 기반(사실)이어야 합니다 — 표시광고법.

export type ProductKind = "SoftwareApplication" | "Service";

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  problem: string; // 어떤 문제를 푸는가
  description: string; // 무엇을 하는가
  features: string[]; // 실제 기능
  audience: string;
  url: string; // 라이브/데모
  urlLabel: string;
  kind: ProductKind;
  iconKey: "chart" | "scan" | "rebuild";
}

export const products: Product[] = [
  {
    slug: "airank",
    name: "airank",
    tagline: "AI 가시성·감성 추적 플랫폼",
    problem:
      "ChatGPT·Gemini가 우리 브랜드를 추천하는지, 경쟁사를 추천하는지 눈으로 확인할 방법이 없습니다.",
    description:
      "5개 AI 엔진의 답변에서 우리 브랜드가 어떻게 언급·인용되는지 매일 자동으로 추적하고, 점유율과 감성까지 정량화합니다. ‘AIO가 실제로 효과가 있는가’를 데이터로 증명하는 측정 레이어입니다.",
    features: [
      "5개 엔진 동시 추적 — Google AIO·ChatGPT·Perplexity·Gemini·Grok",
      "노출·인용 순위·감성·점유율(Share of Voice) 일일 측정",
      "경쟁사 대비 가시성·감성 사분면 분석",
      "AI 답변 원문 아카이브로 근거 보관",
    ],
    audience: "AI 가시성을 관리·증명해야 하는 브랜드와 대행사",
    url: "https://airank.lol",
    urlLabel: "airank.lol",
    kind: "SoftwareApplication",
    iconKey: "chart",
  },
  {
    slug: "schemaworks",
    name: "schemaworks",
    tagline: "홈페이지 SEO/GEO 자동 진단 SaaS",
    problem:
      "우리 홈페이지가 AI·검색에 잘 읽히는지(스키마·메타·크롤러 신호) 한눈에 알 수가 없습니다.",
    description:
      "홈페이지 주소만 넣으면 자동으로 페이지를 분석해, schema.org 구조화 데이터·메타데이터·AI 크롤러 신호를 점검하고 SEO/GEO 진단 리포트를 만들어 줍니다. 리빌딩 전에 무엇이 비어 있는지부터 확인합니다.",
    features: [
      "URL 입력 → 자동 크롤링·AI 기반 온페이지 분석",
      "schema.org·메타·OpenGraph·canonical 점검",
      "robots·llms.txt 등 AI 크롤러 신호 진단",
      "공유 가능한 SEO/GEO 진단 리포트 발행",
    ],
    audience: "병원·기관 마케팅팀과 GEO 대행사",
    url: "https://schemaworks.thevuemedia.com",
    urlLabel: "schemaworks.thevuemedia.com",
    kind: "SoftwareApplication",
    iconKey: "scan",
  },
  {
    slug: "geo-rebuild",
    name: "GEO 사이트 리빌딩",
    tagline: "AI가 읽는 구조로 재구축",
    problem:
      "오래된 사이트는 스키마·시맨틱 구조·AI 크롤러 신호가 없어, 검색과 AI 답변 어디에도 잘 잡히지 않습니다.",
    description:
      "기존 홈페이지를 AI·검색이 이해하기 쉬운 구조로 다시 짓습니다. schema.org 그래프, AI 크롤러 친화 robots·llms.txt, 시맨틱 HTML, 지역 신호까지 GEO 우선으로 재설계합니다.",
    features: [
      "MedicalClinic·FAQPage·MedicalProcedure 등 schema.org 그래프 구현",
      "AI 크롤러 허용 robots·llms.txt 생성",
      "시맨틱 HTML·페이지별 메타·OpenGraph 최적화",
      "주소·좌표 등 지역(Geo) 신호로 로컬 노출 강화",
    ],
    audience: "검색·AI 양쪽 노출이 필요한 병원·브랜드",
    url: "https://kuny12345.github.io/ctlspine/",
    urlLabel: "리빌딩 사례 — 허리나은병원",
    kind: "Service",
    iconKey: "rebuild",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
