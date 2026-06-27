// GBP '서비스(엔티티)' = 홈페이지 서비스 카드 = 개별 서비스 페이지 (3중 정합성).
// Caleb Ulku의 Core 원칙: GBP 카테고리/서비스를 사이트가 1:1로 미러링한다.
// ⚠️ GBP에 등록하는 서비스명은 아래 `name`과 글자 단위로 동일하게 맞출 것.
//   ServicesGrid·서비스 페이지·schema.serviceSchema·llms.txt·Footer가 모두 참조.

export type ServiceIconKey =
  | "ai"
  | "medical"
  | "search"
  | "schema"
  | "rebuild"
  | "content"
  | "video"
  | "track";

export interface ServiceItem {
  slug: string;
  name: string; // GBP 서비스명과 동일하게
  short: string; // 카드 1줄
  description: string; // 페이지/스키마 설명 (사실 기반)
  serviceType: string; // schema.org serviceType
  href: string; // 내부 서비스 페이지 경로
  gbpCategory: string; // 매핑되는 GBP 카테고리
  poweredBy?: string[]; // 어떤 자체 도구로 실행하는가
  iconKey: ServiceIconKey;
  isNew?: boolean; // 신규로 생성해야 하는 페이지
}

export const services: ServiceItem[] = [
  {
    slug: "aio",
    name: "AI 검색 최적화 (GEO·AIO)",
    short: "ChatGPT·Gemini·Perplexity가 브랜드를 먼저 추천하도록 설계",
    description:
      "생성형 AI가 추천·인용할 때 우리 브랜드를 근거로 삼도록, 엔티티 신호·구조화 데이터·인용 콘텐츠를 설계합니다. 진단부터 추적까지 한 흐름으로 'AI가 우리를 아는 상태'를 만듭니다.",
    serviceType: "생성형 엔진 최적화(GEO/AIO)",
    href: "/aio",
    gbpCategory: "인터넷마케팅 서비스",
    poweredBy: ["airank", "schemaworks"],
    iconKey: "ai",
  },
  {
    slug: "hospital-marketing",
    name: "병원·의료 마케팅",
    short: "의료광고법을 지키며 검색·AI 양쪽에서 노출되는 의료 마케팅",
    description:
      "병원·의원 특화 GEO/SEO. 진료과목·시술 엔티티와 지역 신호를 구조화하고, 의료광고법 준수 범위에서 검색과 AI 추천 모두에 대응합니다.",
    serviceType: "의료 마케팅",
    href: "/hospital-marketing",
    gbpCategory: "마케팅 대행업체",
    poweredBy: ["schemaworks", "autopost"],
    iconKey: "medical",
  },
  {
    slug: "seo",
    name: "검색엔진 최적화 (SEO)·네이버",
    short: "구글·네이버 검색과 네이버 플레이스·블로그 노출 최적화",
    description:
      "온페이지·기술 SEO와 네이버 플레이스·블로그 최적화를 함께 운영합니다. 검색 의도에 맞춘 정보 구조와 지역 신호로, 전통 검색의 유입 기반을 단단히 만듭니다.",
    serviceType: "검색엔진 최적화(SEO)",
    href: "/seo",
    gbpCategory: "광고대행사",
    poweredBy: ["schemaworks", "autopost"],
    iconKey: "search",
    isNew: true,
  },
  {
    slug: "schema",
    name: "구조화 데이터 (스키마)",
    short: "schema.org JSON-LD로 'AI가 읽는' 엔티티 그래프 설계",
    description:
      "Organization·LocalBusiness·FAQ·Service 등 schema.org 그래프를 @id로 연결해, AI와 검색이 '이 업체 = 이 서비스 = 이 위치'를 한 개체로 인식하게 만듭니다.",
    serviceType: "구조화 데이터(Schema.org) 설계",
    href: "/schema",
    gbpCategory: "웹디자이너",
    poweredBy: ["schemaworks"],
    iconKey: "schema",
    isNew: true,
  },
  {
    slug: "web-rebuild",
    name: "홈페이지 제작·GEO 리빌딩",
    short: "AI·검색이 이해하는 구조로 사이트를 새로 짓기",
    description:
      "오래된 사이트를 시맨틱 HTML·스키마 그래프·AI 크롤러 친화(robots·llms.txt) 구조로 재구축합니다. 사람과 AI 에이전트 양쪽이 읽기 좋은 홈페이지를 만듭니다.",
    serviceType: "홈페이지 제작·GEO 리빌딩",
    href: "/web-rebuild",
    gbpCategory: "웹디자이너",
    poweredBy: ["aio_factory", "schemaworks"],
    iconKey: "rebuild",
    isNew: true,
  },
  {
    slug: "content",
    name: "콘텐츠 자동 발행·운영",
    short: "AI 콘텐츠 생성→멀티채널 발행→색인·추적을 자동화",
    description:
      "AI로 콘텐츠를 생성해 워드프레스·티스토리·네이버에 자동 발행하고 색인·순위를 추적합니다. 의료광고법 단어 치환을 내장해 안전하게 운영합니다.",
    serviceType: "콘텐츠 마케팅 자동화",
    href: "/content",
    gbpCategory: "마케팅 대행업체",
    poweredBy: ["autopost"],
    iconKey: "content",
    isNew: true,
  },
  {
    slug: "video",
    name: "숏폼 영상 마케팅",
    short: "유튜브·릴스 숏폼으로 AI(특히 Gemini) 추천 신호 강화",
    description:
      "유튜브 쇼츠·인스타 릴스 등 숏폼을 제작·운영합니다. 영상으로 학습되는 Gemini 등 AI 엔진의 추천 신호와 멀티채널 도달을 함께 끌어올립니다.",
    serviceType: "숏폼 영상 마케팅",
    href: "/video",
    gbpCategory: "광고대행사",
    poweredBy: ["autopost"],
    iconKey: "video",
    isNew: true,
  },
  {
    slug: "track",
    name: "AI 노출 추적·진단 리포트",
    short: "5개 AI 엔진의 브랜드 노출·점유율을 매일 측정",
    description:
      "AIRank로 Google AIO·ChatGPT·Perplexity·Gemini·Grok의 답변에서 브랜드 노출·인용·점유율(SOV)을 추적하고, SchemaWorks로 홈페이지 GEO 상태를 진단합니다.",
    serviceType: "AI 가시성 추적·진단",
    href: "/products",
    gbpCategory: "인터넷마케팅 서비스",
    poweredBy: ["airank", "schemaworks"],
    iconKey: "track",
  },
];

export function getService(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

/** 신규로 생성해야 하는 서비스 페이지(워크플로 대상). */
export const newServiceSlugs = services.filter((s) => s.isNew).map((s) => s.slug);
