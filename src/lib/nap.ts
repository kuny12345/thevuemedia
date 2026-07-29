// 비즈니스 핵심 정보(NAP) — 단일 출처(Source of Truth).
// ⚠️ Google 비즈니스 프로필(GBP)과 글자 단위로 100% 일치해야 합니다.
// Caleb Ulku의 "GBP ↔ 홈페이지 정합성" 원칙: 상호·주소·전화·영업시간·좌표가
// GBP와 동일해야 로컬/AI 검색이 같은 '엔티티'로 인식하고 신뢰를 쌓습니다.
// 값 변경 시 이 파일만 수정하면 Footer·스키마·llms.txt에 일괄 반영됩니다.

export const NAP = {
  name: "더뷰미디어",
  alternateName: "THEVUEMEDIA",
  legalName: "더뷰미디어",
  tagline: "AI가 당신의 브랜드를 추천하게 만듭니다",

  // 연락처 (GBP와 동일)
  phoneDisplay: "070-4215-3007",
  phoneE164: "+82-70-4215-3007",
  email: "", // 공개 이메일 확정 시 입력 — 미확정이면 비움(허위 금지)

  // 주소 (GBP 표기와 동일)
  address: {
    full: "대구광역시 동구 동대구로 457 대구상공회의소 7층",
    streetAddress: "동대구로 457 대구상공회의소 7층",
    addressLocality: "동구",
    addressRegion: "대구광역시",
    postalCode: "41260",
    addressCountry: "KR",
  },
  // 2026-07 사무실 이전. 이전 좌표·Plus Code는 옛 주소값이라 폐기 —
  // GBP에서 새 좌표 확인 후 입력(허위 금지). null이면 스키마에서 geo/hasMap을 생략한다.
  geo: null as { lat: number; lng: number } | null,
  plusCode: "",

  // 영업시간 — 평일 09:00–18:00, 토·일 휴무 (GBP와 동일)
  hours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  hoursDisplay: "평일 09:00 – 18:00",
  hoursClosed: "토·일 휴무",
  foundingDate: "2023-09-21",
  priceRange: "₩₩",

  areaServed: ["대구광역시", "경상북도", "대한민국"],
  url: "https://thevuemedia.com",

  // 실재하는 채널만 (허위 sameAs 금지) — GBP 소셜 프로필과 동일
  socials: [
    { name: "YouTube", url: "https://www.youtube.com/@thevuemedia" },
    { name: "Instagram", url: "https://www.instagram.com/_thevuemedia_" },
  ],
} as const;

/** schema.org sameAs / Footer 공용 — 실재 채널 URL만. */
export const SAME_AS: string[] = NAP.socials.map((s) => s.url);

/** schema.org openingHoursSpecification 빌더 (NAP.hours 기반). */
export function openingHoursSpec() {
  return NAP.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  }));
}

/** schema.org PostalAddress (빈 필드는 제외). */
export function postalAddress() {
  const a = NAP.address;
  const out: Record<string, string> = {
    "@type": "PostalAddress",
    streetAddress: a.streetAddress,
    addressLocality: a.addressLocality,
    addressRegion: a.addressRegion,
    addressCountry: a.addressCountry,
  };
  if (a.postalCode) out.postalCode = a.postalCode;
  return out;
}
