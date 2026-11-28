// AIRank가 측정한 "AI 답변에 우리 글이 인용된 기록".
//
// 원본: AIRank 인용 피드(GET https://airank.lol/api/public/citations) — 답변 출처 링크가
// /blog/<slug> 인 건만 온다(링크로 확인된 것만, 텍스트 추정 없음). 하루 한 번 다시 받아온다(ISR).
// 피드를 못 받으면(토큰 없음·장애) src/data/airank-citations.json 스냅샷으로 표시한다.
import snapshot from "@/data/airank-citations.json";

export type Citation = {
  slug: string;
  query: string;
  engine: string;
  date: string; // YYYY-MM-DD (KST)
  /** AIRank가 보관한 AI 답변 HTML 원본(새 탭으로 연다) */
  answerUrl: string | null;
};

/** 엔진 표시 이름 — 칩·뱃지 공용 */
export const ENGINE_LABEL: Record<string, string> = {
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  google_aio: "구글 AI 개요",
  perplexity: "Perplexity",
  naver_ai: "네이버 AI 브리핑",
  grok: "Grok",
  copilot: "Copilot",
};

/** 엔진 칩 색 (각 서비스 대표색 계열, 흰 글자 대비 4.5:1 이상) */
export const ENGINE_COLOR: Record<string, string> = {
  chatgpt: "#0b7a5e",
  gemini: "#5b4bdb",
  google_aio: "#1a5fd0",
  perplexity: "#16707a",
  naver_ai: "#03873e",
  grok: "#111111",
  copilot: "#0b5cad",
};

/** 같은 엔진은 한 번만, 정해진 순서로 */
export function enginesOf(items: Citation[]): string[] {
  const order = ["chatgpt", "gemini", "google_aio", "perplexity", "naver_ai", "copilot", "grok"];
  const set = new Set(items.map((c) => c.engine));
  const rank = (e: string) => (order.includes(e) ? order.indexOf(e) : order.length);
  return [...set].sort((a, b) => rank(a) - rank(b));
}

const AIRANK_SITE_ID = "6b0a437d1206163a643caef9"; // AIRank 더뷰미디어
const FEED_URL = `https://airank.lol/api/public/citations?site=${AIRANK_SITE_ID}&prefix=/blog/&days=730`;
const REVALIDATE_SECONDS = 60 * 60 * 24;

type FeedItem = { path: string; query: string; engine: string; date: string; answerUrl: string | null };

async function fetchFeed(): Promise<Citation[] | null> {
  const token = process.env.AIRANK_CITATION_TOKEN;
  if (!token) return null;
  try {
    const res = await fetch(FEED_URL, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: REVALIDATE_SECONDS, tags: ["airank-citations"] },
    });
    if (!res.ok) return null;
    const body = (await res.json()) as { citations?: FeedItem[] };
    if (!Array.isArray(body.citations)) return null;
    return body.citations
      .map((c) => {
        const m = c.path.match(/^\/blog\/([^/]+)$/);
        return m ? { slug: m[1], query: c.query, engine: c.engine, date: c.date, answerUrl: c.answerUrl ?? null } : null;
      })
      .filter((c): c is Citation => c !== null);
  } catch {
    return null;
  }
}

const key = (c: Citation) => `${c.slug}|${c.engine}|${c.date}|${c.query}`;

/** 피드 + 스냅샷 병합(같은 건은 피드 우선), 최신순. 한 렌더 안에서는 fetch 캐시로 1회만 요청된다. */
export async function loadCitations(): Promise<Citation[]> {
  const feed = (await fetchFeed()) ?? [];
  const merged = new Map<string, Citation>();
  for (const c of snapshot.citations as (Omit<Citation, "answerUrl"> & { answerUrl?: string | null })[]) {
    const item: Citation = { slug: c.slug, query: c.query, engine: c.engine, date: c.date, answerUrl: c.answerUrl ?? null };
    merged.set(key(item), item);
  }
  for (const c of feed) {
    const prev = merged.get(key(c));
    merged.set(key(c), { ...c, answerUrl: c.answerUrl ?? prev?.answerUrl ?? null });
  }
  return [...merged.values()].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function citationsFor(all: Citation[], slug: string): Citation[] {
  return all.filter((c) => c.slug === slug);
}

/** 인용 기록이 있는 글 slug — 인용 건수 많은 순, 같으면 최근 인용순 */
export function citedSlugs(all: Citation[]): string[] {
  const count = new Map<string, number>();
  for (const c of all) count.set(c.slug, (count.get(c.slug) ?? 0) + 1);
  const order = [...new Set(all.map((c) => c.slug))];
  return order.sort((a, b) => (count.get(b) ?? 0) - (count.get(a) ?? 0));
}

export function citationStats(all: Citation[]) {
  return {
    total: all.length,
    posts: new Set(all.map((c) => c.slug)).size,
    lastDate: all[0]?.date ?? null,
  };
}

export function formatDate(d: string) {
  return d.replaceAll("-", ".");
}
