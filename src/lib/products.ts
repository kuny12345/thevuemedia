// 더뷰미디어가 직접 만들어 쓰는 AIO 제품·솔루션 4종 (단일 출처).
// ProductsSection·/products·llms.txt·schema가 모두 이 데이터를 참조합니다.
// 모든 설명은 실제 기능 기반(사실)이어야 합니다 — 표시광고법.
//
// 파이프라인: 진단(schemaworks) → 추적(airank) → 생산·발행(autopost) → AI 인용 자산(aio_factory)

export type ProductKind = "SoftwareApplication" | "Service";
export type ProductIconKey = "chart" | "scan" | "publish" | "factory";

export interface Product {
  slug: string;
  name: string;
  role: string; // 파이프라인 역할 (진단/추적/생산·발행/AI 인용 자산)
  tagline: string;
  problem: string; // 어떤 문제를 푸는가
  description: string; // 무엇을 하는가
  features: string[]; // 실제 기능
  audience: string;
  url: string; // 외부 라이브(SaaS) 또는 내부 경로
  urlLabel: string;
  external: boolean; // true면 외부 SaaS 링크(_blank)
  kind: ProductKind;
  iconKey: ProductIconKey;
}

export const products: Product[] = [
  {
    slug: "schemaworks",
    name: "SchemaWorks",
    role: "진단",
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
    url: "https://schemaworks.org",
    urlLabel: "schemaworks.org",
    external: true,
    kind: "SoftwareApplication",
    iconKey: "scan",
  },
  {
    slug: "airank",
    name: "AIRank",
    role: "추적",
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
    external: true,
    kind: "SoftwareApplication",
    iconKey: "chart",
  },
  {
    slug: "autopost",
    name: "AutoPost",
    role: "생산·발행",
    tagline: "AI 콘텐츠 생성·멀티채널 발행 엔진",
    problem:
      "AI 추천에 필요한 양질의 콘텐츠를 꾸준히, 여러 채널에 맞춰 발행하기가 현실적으로 어렵습니다.",
    description:
      "키워드 분석부터 AI 콘텐츠 생성, 워드프레스·티스토리·네이버 자동 발행, 네이버 색인·순위 추적까지 한 번에 처리합니다. 의료광고법 단어 치환을 내장해 의료 콘텐츠도 안전하게 운영합니다.",
    features: [
      "AI(GPT/Claude) 본문 생성 — 고객별 맞춤 프롬프트",
      "워드프레스·티스토리·네이버 멀티채널 자동 발행",
      "네이버 Search Advisor 색인 요청·순위 추적",
      "의료광고법 금지어 자동 치환·발행 전 검증",
    ],
    audience: "다수 채널을 운영해야 하는 병원·브랜드와 대행사",
    url: "/content",
    urlLabel: "콘텐츠 자동화 알아보기",
    external: false,
    kind: "Service",
    iconKey: "publish",
  },
  {
    slug: "aio_factory",
    name: "aio_factory",
    role: "AI 인용 자산",
    tagline: "AI가 인용하는 큐레이션·랜딩 사이트 빌더",
    problem:
      "AI가 추천 근거로 삼을 만한, 구조화된 정보 자산이 우리 도메인에 없습니다.",
    description:
      "AI가 인용하기 좋은 큐레이션 디렉토리·랜딩 사이트를 생성합니다. llms.txt·연결된 JSON-LD 그래프·AI 봇 허용 robots·sitemap을 자동화해, 생성형 검색이 그대로 근거로 쓸 수 있는 정적 자산을 만듭니다.",
    features: [
      "llms.txt·llms-full.txt 자동 생성 — AI가 읽는 인덱스",
      "@id로 연결된 schema.org 그래프(Business·FAQ·Item)",
      "GPTBot·ClaudeBot·PerplexityBot 허용 robots·sitemap",
      "지역·분야별 큐레이션 구조로 추천 근거 제공",
    ],
    audience: "AI 검색 인용을 노리는 로컬·다지점 브랜드",
    url: "/web-rebuild",
    urlLabel: "GEO 사이트 리빌딩 알아보기",
    external: false,
    kind: "Service",
    iconKey: "factory",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
