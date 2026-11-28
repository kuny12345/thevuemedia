// 블로그 썸네일(1200×630) — 빌드 때 글마다 PNG로 생성된다(next/og).
// 제목은 이미지 안에 직접 그려지므로, 목록 카드·OG 공유 이미지로 같이 쓴다.
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Category, Post } from "@/lib/posts";

export const THUMB_SIZE = { width: 1200, height: 630 };

type Theme = { bg: string; title: string; sub: string; meta: string; accent: string; line: string };

// 홈 리뉴얼 토큰(#0064e0 블루 · #2a3747 잉크 · #f1f4f7 서피스) 안에서만 변주한다.
const THEMES: Record<"ink" | "blue" | "paper", Theme> = {
  ink: { bg: "#1d2835", title: "#ffffff", sub: "#b8c3cf", meta: "#8595a4", accent: "#4da3ff", line: "rgba(255,255,255,0.10)" },
  blue: { bg: "#0064e0", title: "#ffffff", sub: "#d6e8ff", meta: "#a9cdfb", accent: "#ffffff", line: "rgba(255,255,255,0.16)" },
  paper: { bg: "#f1f4f7", title: "#2a3747", sub: "#5d6c7b", meta: "#8595a4", accent: "#0064e0", line: "rgba(42,55,71,0.10)" },
};

const CATEGORY_STYLE: Record<Category, { theme: keyof typeof THEMES; label: string }> = {
  병원마케팅: { theme: "ink", label: "HOSPITAL MARKETING" },
  비교: { theme: "blue", label: "AGENCY COMPARISON" },
  가이드: { theme: "blue", label: "PRACTICAL GUIDE" },
  방법론: { theme: "ink", label: "METHODOLOGY" },
  엔진별: { theme: "paper", label: "AI ENGINES" },
  개념: { theme: "paper", label: "CONCEPTS" },
  버티컬: { theme: "paper", label: "INDUSTRIES" },
  전략: { theme: "ink", label: "STRATEGY" },
  분석: { theme: "paper", label: "ANALYSIS" },
};

/** "메인 — 보조 (2026, 가나다순)" → 메인 / 보조 / 꼬리표 */
export function splitTitle(title: string): { main: string; sub?: string; note?: string } {
  let t = title.trim();
  let note: string | undefined;
  const paren = t.match(/\s*\(([^()]*20\d\d[^()]*)\)\s*$/);
  if (paren) {
    note = paren[1].replace(/,\s*/g, " · ");
    if (/^20\d\d$/.test(note)) note = undefined; // 연도만이면 날짜와 중복
    t = t.slice(0, paren.index).trim();
  }
  const parts = t.split(/\s+—\s+|:\s+|\s+\+\s+/);
  if (parts.length > 1) return { main: parts[0].trim(), sub: parts.slice(1).join(" ").trim(), note };
  return { main: t, note };
}

function mainSize(len: number) {
  if (len <= 14) return 76;
  if (len <= 22) return 68;
  if (len <= 30) return 60;
  return 54;
}

// 카테고리별 라인 모티프(스트로크만, 홈의 inline SVG 아이콘 톤).
function Motif({ category, color, bg }: { category: Category; color: string; bg: string }) {
  const s = { fill: "none", stroke: color, strokeWidth: 3, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const shapes: Record<Category, React.ReactNode> = {
    병원마케팅: (
      <g>
        <circle cx="210" cy="210" r="150" {...s} />
        <path d="M210 130v160M130 210h160" {...s} strokeWidth={10} />
        <path d="M20 330h110l30-60 40 120 34-80h246" {...s} />
      </g>
    ),
    비교: (
      <g>
        <path d="M60 60v300h320" {...s} />
        <rect x="100" y="110" width="250" height="34" rx="4" {...s} />
        <rect x="100" y="175" width="190" height="34" rx="4" {...s} />
        <rect x="100" y="240" width="140" height="34" rx="4" {...s} />
        <rect x="100" y="305" width="90" height="34" rx="4" {...s} />
      </g>
    ),
    가이드: (
      <g>
        <rect x="70" y="50" width="280" height="330" rx="10" {...s} />
        <path d="M110 125l22 22 40-44M200 125h110M110 205l22 22 40-44M200 205h110M110 285l22 22 40-44M200 285h80" {...s} />
      </g>
    ),
    방법론: (
      <g>
        <rect x="40" y="250" width="80" height="80" rx="6" {...s} />
        <rect x="140" y="190" width="80" height="140" rx="6" {...s} />
        <rect x="240" y="130" width="80" height="200" rx="6" {...s} />
        <rect x="340" y="70" width="80" height="260" rx="6" {...s} />
        <path d="M60 200l100-70 100-60 100-60" {...s} strokeDasharray="2 14" />
      </g>
    ),
    엔진별: (
      <g>
        {/* AI 답변 말풍선 + 출처 칩 + 스파클 */}
        <path d="M60 70h280a20 20 0 0 1 20 20v170a20 20 0 0 1-20 20H170l-60 50v-50H60a20 20 0 0 1-20-20V90a20 20 0 0 1 20-20z" {...s} />
        <path d="M90 130h200M90 175h230M90 220h120" {...s} />
        <rect x="230" y="204" width="90" height="32" rx="16" {...s} />
        <path d="M385 8l10 28 28 10-28 10-10 28-10-28-28-10 28-10z" {...s} fill={color} />
      </g>
    ),
    개념: (
      <g>
        <path d="M210 210L80 90M210 210l140-100M210 210L90 340M210 210l130 120M80 90l270 20" {...s} />
        <circle cx="210" cy="210" r="40" {...s} fill={bg} />
        <circle cx="80" cy="90" r="22" {...s} fill={bg} />
        <circle cx="350" cy="110" r="22" {...s} fill={bg} />
        <circle cx="90" cy="340" r="22" {...s} fill={bg} />
        <circle cx="340" cy="330" r="22" {...s} fill={bg} />
      </g>
    ),
    버티컬: (
      <g>
        {[0, 1, 2].flatMap((r) =>
          [0, 1, 2].map((c) => (
            <rect key={`${r}${c}`} x={50 + c * 115} y={50 + r * 115} width="90" height="90" rx="8" {...s} fill={r === 1 && c === 1 ? color : "none"} />
          )),
        )}
      </g>
    ),
    전략: (
      <g>
        <circle cx="210" cy="210" r="170" {...s} />
        <circle cx="210" cy="210" r="110" {...s} />
        <circle cx="210" cy="210" r="50" {...s} />
        <path d="M380 40L222 198M380 40v60M380 40h-60" {...s} />
      </g>
    ),
    분석: (
      <g>
        <path d="M40 40v340h360" {...s} />
        <path d="M80 320l80-70 70 40 80-130 80-80" {...s} />
        <circle cx="390" cy="80" r="12" fill={color} />
        <path d="M80 380v-20M160 380v-20M240 380v-20M320 380v-20" {...s} />
      </g>
    ),
  };
  return (
    <svg width="380" height="380" viewBox="0 0 420 420">
      {shapes[category]}
    </svg>
  );
}

// satori는 word-break: keep-all을 지키지 않아 "7가지"가 "7 / 가지"로 끊긴다.
// 어절마다 줄바꿈 없는 블록으로 그려 어절 단위로만 줄이 바뀌게 한다.
function Words({ text, style, gap }: { text: string; style: React.CSSProperties; gap: number }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: gap, ...style }}>
      {text.split(/\s+/).map((w, i) => (
        <span key={i} style={{ display: "flex", whiteSpace: "nowrap" }}>
          {w}
        </span>
      ))}
    </div>
  );
}

let fontCache: Promise<{ name: string; data: Buffer; weight: 500 | 600 | 700 | 800; style: "normal" }[]> | null = null;
export function thumbnailFonts() {
  if (!fontCache) {
    const dir = join(process.cwd(), "src/assets/fonts");
    const load = (f: string) => readFile(join(dir, f));
    fontCache = Promise.all([
      load("Pretendard-ExtraBold.otf"),
      load("Pretendard-Bold.otf"),
      load("Pretendard-SemiBold.otf"),
      load("JetBrainsMono-Medium.ttf"),
    ]).then(([xb, b, sb, mono]) => [
      { name: "Pretendard", data: xb, weight: 800, style: "normal" },
      { name: "Pretendard", data: b, weight: 700, style: "normal" },
      { name: "Pretendard", data: sb, weight: 600, style: "normal" },
      { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
    ]);
  }
  return fontCache;
}

export function Thumbnail({ post }: { post: Post }) {
  const cat = CATEGORY_STYLE[post.category];
  const th = THEMES[cat.theme];
  const { main, sub, note } = splitTitle(post.title);
  const size = mainSize(main.length);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: th.bg,
        position: "relative",
        fontFamily: "Pretendard",
      }}
    >
      {/* 헤어라인 그리드(정적 장식) */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 136, height: 1, background: th.line, display: "flex" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 128, height: 1, background: th.line, display: "flex" }} />
      <div style={{ position: "absolute", right: 48, top: 168, opacity: cat.theme === "paper" ? 0.22 : 0.26, display: "flex" }}>
        <Motif category={post.category} color={th.accent} bg={th.bg} />
      </div>

      {/* 상단: 라벨 */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "JetBrains Mono", fontSize: 22, letterSpacing: 2, color: th.meta }}>
        <div style={{ width: 36, height: 3, background: th.accent, display: "flex" }} />
        <span style={{ color: th.accent }}>{cat.label}</span>
        <span>/ {post.tag}</span>
      </div>

      {/* 제목 */}
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 740 }}>
        <Words
          text={main}
          style={{ fontSize: size, fontWeight: 800, lineHeight: 1.16, letterSpacing: -size * 0.035, color: th.title }}
          gap={size * 0.24}
        />
        {sub && (
          <Words
            text={sub}
            style={{ marginTop: 22, fontSize: 34, fontWeight: 600, lineHeight: 1.3, letterSpacing: -1, color: th.sub, maxWidth: 720 }}
            gap={9}
          />
        )}
      </div>

      {/* 하단: 브랜드 · 날짜 */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: cat.theme === "blue" ? "#ffffff" : "#0064e0", display: "flex" }} />
          <span style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, color: th.title }}>더뷰미디어</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "JetBrains Mono", fontSize: 21, color: th.meta }}>
          {note && (
            <span style={{ display: "flex", padding: "6px 14px", border: `1.5px solid ${th.line}`, borderRadius: 100, color: th.sub }}>{note}</span>
          )}
          <span>{post.date}</span>
        </div>
      </div>
    </div>
  );
}
