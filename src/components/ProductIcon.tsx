import type { ProductIconKey } from "@/lib/products";

/**
 * 도구 4종 라인 아이콘 (inline SVG, stroke 1.8, currentColor).
 * 이모지 금지 — 한 세트 톤 유지.
 *  chart   = 추적(상승 그래프) · scan = 진단(스캔)
 *  publish = 생산·발행(전송) · factory = AI 인용 자산(연결된 그래프)
 */
export default function ProductIcon({
  iconKey,
  className = "w-7 h-7",
}: {
  iconKey: ProductIconKey;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  if (iconKey === "chart") {
    // 가시성 추적 — 상승 그래프
    return (
      <svg {...common}>
        <path d="M3 3v18h18" />
        <path d="M7 14l3-4 3 2 5-7" />
        <circle cx="18" cy="5" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (iconKey === "scan") {
    // 자동 진단 — 스캔/검색
    return (
      <svg {...common}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="11" cy="11" r="3.2" />
        <path d="M15.5 15.5 18 18" />
      </svg>
    );
  }

  if (iconKey === "publish") {
    // 생산·발행 — 멀티채널 전송
    return (
      <svg {...common}>
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
      </svg>
    );
  }

  // factory — AI 인용 자산: @id로 연결된 구조화 데이터 그래프
  return (
    <svg {...common}>
      <circle cx="5" cy="7" r="2.2" />
      <circle cx="19" cy="7" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <path d="M7.2 7h9.6" />
      <path d="M6.4 8.9 10.6 16.1" />
      <path d="M17.6 8.9 13.4 16.1" />
    </svg>
  );
}
