// Centralized JSON-LD (schema.org) builders for GEO/AIO optimization.
// All structured data flows through these helpers so every page emits
// consistent, valid markup that AI engines and search crawlers can parse.
//
// ⭐ GBP ↔ 홈페이지 정합성: Organization 노드를 LocalBusiness로 확장해
//    상호·주소·전화·영업시간·좌표를 GBP와 동일하게 emit한다(= 같은 엔티티).
import { products, type Product } from "@/lib/products";
import { services } from "@/lib/services";
import { NAP, SAME_AS, postalAddress, openingHoursSpec } from "@/lib/nap";

export const SITE = {
  url: NAP.url,
  name: NAP.name,
  alternateName: NAP.alternateName,
  logo: `${NAP.url}/logo.png`,
  description:
    "AIO(AI 검색 최적화) 전문 대행사. ChatGPT·Gemini·Perplexity·구글 AI 개요 등 생성형 AI가 브랜드를 먼저 추천하도록 설계합니다.",
  sameAs: SAME_AS,
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
 * Organization + ProfessionalService + LocalBusiness identity node.
 * NAP(상호/주소/전화/영업시간/좌표)는 GBP와 100% 동일하게 emit한다.
 * knowsAbout / serviceType / areaServed 는 검증 가능한 역량 신호(허위 수치 없음).
 */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: SITE.alternateName,
    legalName: NAP.legalName,
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.logo,
    description: SITE.description,
    slogan: NAP.tagline,
    // --- NAP (GBP 동일) ---
    telephone: NAP.phoneE164,
    address: postalAddress(),
    ...(NAP.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: NAP.geo.lat,
            longitude: NAP.geo.lng,
          },
          hasMap: `https://www.google.com/maps/place/${encodeURIComponent(NAP.name)}/@${NAP.geo.lat},${NAP.geo.lng},17z`,
        }
      : {}),
    openingHoursSpecification: openingHoursSpec(),
    foundingDate: NAP.foundingDate,
    priceRange: NAP.priceRange,
    areaServed: [
      { "@type": "AdministrativeArea", name: "대구광역시" },
      { "@type": "AdministrativeArea", name: "경상북도" },
      { "@type": "Country", name: "대한민국" },
    ],
    knowsAbout: [
      "AIO(AI 검색 최적화)",
      "GEO(생성형 엔진 최적화)",
      "ChatGPT 브랜드 추천 최적화",
      "Perplexity 인용 최적화",
      "Google AI Overview(SGE) 대응",
      "Schema.org 구조화 데이터",
      "병원·의료 마케팅",
      "네이버 플레이스·SEO",
      "대구 AI 검색 마케팅",
    ],
    serviceType: [
      ...services.map((s) => s.serviceType),
      "AIO 컨설팅",
    ],
    sameAs: [...SITE.sameAs],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: NAP.phoneE164,
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean"],
    },
    // 제공 서비스(GBP 미러) + 자체 도구를 한 카탈로그로 — 역량 기반 권위 신호.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "서비스 · 자체 AIO 도구",
      itemListElement: [
        ...services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            url: abs(s.href),
            description: s.short,
            serviceType: s.serviceType,
          },
        })),
        ...products.map((p) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": p.kind,
            name: p.name,
            url: p.external ? p.url : abs(p.url),
            description: p.tagline,
          },
        })),
      ],
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

/** SoftwareApplication (또는 Service) node for a product. */
export function productSchema(p: Product): Json {
  const base: Json = {
    "@context": "https://schema.org",
    "@type": p.kind,
    name: p.name,
    url: p.external ? p.url : abs(p.url),
    description: p.description,
    provider: { "@id": ORG_ID },
  };
  if (p.kind === "SoftwareApplication") {
    base.applicationCategory = "BusinessApplication";
    base.operatingSystem = "Web";
    base.publisher = { "@id": ORG_ID };
  } else {
    base.serviceType = p.tagline;
    base.areaServed = { "@type": "Country", name: "대한민국" };
  }
  return base;
}

/** CollectionPage node listing items (e.g. the /products page). */
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  items: { name: string; url: string }[];
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    inLanguage: "ko-KR",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: abs(it.url),
      })),
    },
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
