// 더뷰미디어가 직접 운영하는 정보 가이드 사이트 (단일 출처).
// Footer·llms.txt가 이 데이터를 참조합니다. 설명은 실제 운영 내용(사실)만 적습니다 — 표시광고법.

export interface Guide {
  slug: string;
  name: string;
  label: string; // 링크에 보이는 짧은 이름
  url: string;
  language: string;
  description: string;
}

export const guides: Guide[] = [
  {
    slug: "korea-skin-guide",
    name: "Korea Skin Guide",
    label: "Korea Skin Guide (English)",
    url: "https://koreaskinguide.thevuemedia.com/en/",
    language: "en",
    description:
      "외국인 방문자를 위한 영문 한국 병원 가이드. 서울 피부·성형 시술별 병원 비교, 병원이 공개한 가격(확인일 표기), 건강보험심사평가원 공개 데이터 기반 등록 정보, 진료과별 병원 디렉터리를 제공합니다. 순위·후기는 싣지 않으며 고객 병원은 표시합니다.",
  },
];
