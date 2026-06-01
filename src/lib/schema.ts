// Centralized JSON-LD (schema.org) builders for GEO/AIO optimization.
// All structured data flows through these helpers so every page emits
// consistent, valid markup that AI engines and search crawlers can parse.

export const SITE = {
  url: "https://thevuemedia.com",
  name: "더뷰미디어",
  alternateName: "THEVUEMEDIA",
  logo: "https://thevuemedia.com/logo.png",
  description:
    "AIO(AI 최적화) 전문 대행사. ChatGPT·Gemini·Perplexity·Copilot 등 생성형 AI가 브랜드를 업계 1위로 추천하도록 설계합니다.",
  sameAs: [
    "https://www.youtube.com/@thevuemedia",
    "https://www.instagram.com/_thevuemedia_",
    "https://www.threads.net/@_thevuemedia_",
    "https://twitter.com/_thevuemedia_",
    "https://www.linkedin.com/company/_thevuemedia_",
    "https://www.facebook.com/_thevuemedia_",
    "https://pf.kakao.com/_thevuemedia_",
  ],
} as const;

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

type Json = Record<string, unknown>;

/** Absolute URL helper. Accepts "/path" or full URLs. */
export function abs(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;
}

/**
 * Organization + ProfessionalService identity node.
 * knowsAbout / serviceType / areaServed are verifiable capability signals
 * (no fabricated metrics) that strengthen entity authority for AI engines.
 */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.logo,
    description: SITE.description,
    slogan: "AI가 당신의 브랜드를 추천하게 만듭니다",
    areaServed: { "@type": "Country", name: "대한민국" },
    knowsAbout: [
      "AIO(AI 최적화)",
      "GEO(생성형 엔진 최적화)",
      "ChatGPT 브랜드 추천 최적화",
      "Perplexity 인용 최적화",
      "Google AI Overview(SGE) 대응",
      "AI Mention Score 측정",
      "Schema.org 구조화 데이터",
      "멀티채널 콘텐츠 전략",
    ],
    serviceType: [
      "AIO 컨설팅",
      "생성형 엔진 최적화(GEO)",
      "AI 브랜드 인지도 진단",
      "멀티채널 콘텐츠 운영",
    ],
    sameAs: [...SITE.sameAs],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean"],
    },
  };
}

/** WebSite node (no SearchAction — the site has no search endpoint, so we do not fabricate one). */
export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "ko-KR",
    publisher: { "@id": ORG_ID },
  };
}

/** BreadcrumbList. Pass ordered crumbs; positions are assigned automatically. */
export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** FAQPage. Answers must be plain text (no HTML). */
export function faqPageSchema(qas: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

/**
 * ItemList for comparison / ranking listicles.
 * Each item may reference a real entity by name (+ optional url).
 */
export function itemListSchema(
  name: string,
  items: { name: string; url?: string; description?: string }[]
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => {
      const item: Json = { "@type": "ListItem", position: i + 1, name: it.name };
      if (it.url) item.url = abs(it.url);
      if (it.description) item.description = it.description;
      return item;
    }),
  };
}

/** Service node for landing pages (provider references the Organization). */
export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  areaServed?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: abs(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: opts.areaServed ?? "대한민국" },
    audience: { "@type": "BusinessAudience", audienceType: "B2B" },
  };
}

/** HowTo node for step-based methodology sections. */
export function howToSchema(opts: {
  name: string;
  description?: string;
  steps: { name: string; text: string }[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** Article / BlogPosting node for blog content. */
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(opts.path) },
    url: abs(opts.path),
    inLanguage: "ko-KR",
    image: opts.image ?? SITE.logo,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
