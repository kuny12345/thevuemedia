import type { Product } from "@/lib/products";

// Clean stroke icons matching the brand (no extra deps).
export default function ProductIcon({
  iconKey,
  className = "w-7 h-7",
}: {
  iconKey: Product["iconKey"];
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
  // rebuild — 재구축/레이어
  return (
    <svg {...common}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5M3 8v5M21 8v5" />
    </svg>
  );
}
