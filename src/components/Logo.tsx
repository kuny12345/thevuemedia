// 브랜드 로고 — 마크(헤어라인 프레임 + 골드 세리프 V) + 워드마크.
// 파비콘·OG·Organization 스키마 logo(/icon-512)와 동일 아이덴티티.
// 폰트는 사이트 전역에 로드된 Noto Serif KR 사용.

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <rect x="1" y="1" width="46" height="46" fill="#0d1930" />
      <rect
        x="3.5"
        y="3.5"
        width="41"
        height="41"
        fill="none"
        stroke="#c9a96a"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Noto Serif KR', serif"
        fontWeight="900"
        fontSize="27"
        fill="#c9a96a"
      >
        V
      </text>
    </svg>
  );
}

export default function Logo({
  markSize = 30,
  onPaper = false,
}: {
  markSize?: number;
  onPaper?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark size={markSize} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-[19px] font-bold tracking-tight ${
            onPaper ? "text-[#10131a]" : "text-[#f5f1e6]"
          }`}
        >
          더뷰미디어
        </span>
        <span className="mono mt-1 text-[8.5px] tracking-[0.32em] text-gold">
          THEVUEMEDIA
        </span>
      </span>
    </span>
  );
}
