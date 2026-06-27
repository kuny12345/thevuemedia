// 공개되는 '사실 기반' 신호 — 단일 출처.
// ⚠️ 표시광고법: 입증 가능한 실제 수치만 노출. 검증 안 된 실적 숫자 금지.
//    (예: "누적 N개 병원" 같은 수치는 검증된 값이 확정되기 전까지 쓰지 않는다.)

/** 히어로/트러스트에서 쓰는 역량 기반 시그니처(수치 단정 회피). */
export const SIGNATURE = {
  label: "자체 개발 AIO 도구로 직접 실행하는 AI 검색 최적화",
  note: "말로만 컨설팅하지 않고, 진단·추적·발행 도구를 직접 만들어 씁니다.",
} as const;

/** 입증 가능한 역량 지표(수치 단정이 아닌 검증 가능한 사실만). */
export const SIGNATURE_FACTS = [
  {
    value: "4",
    unit: "종",
    label: "자체 개발 AIO 도구",
    note: "AIRank · SchemaWorks · AutoPost · aio_factory",
  },
  {
    value: "5",
    unit: "개",
    label: "AI 엔진 동시 추적",
    note: "Google AIO · ChatGPT · Perplexity · Gemini · Grok",
  },
  {
    value: "2023",
    unit: "",
    label: "설립 · 대구 수성구",
    note: "AI 검색 최적화(GEO·AIO) 전문",
  },
] as const;

export type SignatureFact = (typeof SIGNATURE_FACTS)[number];
