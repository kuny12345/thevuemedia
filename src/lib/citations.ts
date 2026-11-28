// AIRank가 측정한 "AI 답변에 우리 글이 인용된 기록".
// 원본: src/data/airank-citations.json (AIRank 질의어별 답변 원문에서 글 제목·URL이
// 출처로 확인된 건만 담는다. 도메인·브랜드명만 나온 건은 글 단위 근거가 아니라 표시하지 않는다.)
import data from "@/data/airank-citations.json";

export type Citation = {
  slug: string;
  query: string;
  engine: string;
  date: string; // YYYY-MM-DD (KST)
  screenshotUrl: string | null;
};

export const ENGINE_LABEL: Record<string, string> = {
  chatgpt: "ChatGPT",
  gemini: "Gemini",
  google_aio: "구글 AI 개요",
  perplexity: "Perplexity",
  naver_ai: "네이버 AI 브리핑",
  grok: "Grok",
  copilot: "Copilot",
};

export const citationsMeta = { generatedAt: data.generatedAt };

const all: Citation[] = data.citations
  .map((c) => ({ slug: c.slug, query: c.query, engine: c.engine, date: c.date, screenshotUrl: c.screenshotUrl }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

/** 해당 글의 인용 기록(최신순). */
export function citationsFor(slug: string): Citation[] {
  return all.filter((c) => c.slug === slug);
}

/** 인용 기록이 있는 글 slug(최근 인용순). */
export function citedSlugs(): string[] {
  return [...new Set(all.map((c) => c.slug))];
}

export function citationStats() {
  return {
    total: all.length,
    posts: citedSlugs().length,
    engines: [...new Set(all.map((c) => c.engine))].length,
    lastDate: all[0]?.date ?? null,
  };
}

export function formatDate(d: string) {
  return d.replaceAll("-", ".");
}
