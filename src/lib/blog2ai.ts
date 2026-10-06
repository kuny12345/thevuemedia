import "server-only";

const API_TIMEOUT_MS = 8_000;

export type ColumnSummary = {
  id: string;
  siteId: string;
  slug: string;
  title: string;
  excerpt: string;
  metaDescription: string;
  imageUrl: string | null;
  publishedDate: string | null;
  publishedAt: string;
  revision: number;
};

export type ColumnArticle = ColumnSummary & {
  html: string;
  sourceUrl: string;
  metaTitle: string;
  categoryName: string | null;
  updatedAt: string;
};

type ColumnList = {
  site: { id: string; name: string; websiteUrl: string | null };
  articles: ColumnSummary[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

class Blog2AiError extends Error {
  constructor(readonly status: number) {
    super(status === 404 ? "칼럼을 찾을 수 없습니다." : "칼럼 서버에 연결하지 못했습니다.");
  }
}

function settings() {
  // 배포 환경변수 입력 과정에서 끝 공백이나 줄바꿈이 포함돼도 서버 전용 값만
  // 정규화한다. 키는 클라이언트 번들에 절대 포함하지 않는다.
  const apiUrl = process.env.BLOG2AI_API_URL?.trim();
  const apiKey = process.env.BLOG2AI_API_KEY?.trim();
  if (!apiUrl || !apiKey) return null;

  const base = new URL(apiUrl);
  if (base.protocol !== "https:" || base.username || base.password || base.search || base.hash) {
    throw new Error("유효한 Blog2AI API 주소가 필요합니다.");
  }
  if (!/^b2a_[A-Za-z0-9_-]{43}$/.test(apiKey)) {
    throw new Error("유효한 Blog2AI 연결 키가 필요합니다.");
  }
  return { apiUrl: base.href.replace(/\/$/, ""), apiKey };
}

async function request<T>(path: string): Promise<T> {
  const config = settings();
  if (!config) throw new Blog2AiError(503);

  const response = await fetch(`${config.apiUrl}/articles${path}`, {
    headers: { Accept: "application/json", Authorization: `Bearer ${config.apiKey}` },
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(API_TIMEOUT_MS),
  });

  if (!response.ok) {
    await response.body?.cancel();
    throw new Blog2AiError(response.status);
  }
  return response.json() as Promise<T>;
}

function mediaUrl(value: string | null) {
  if (!value?.startsWith("/")) return value;
  const config = settings();
  return config ? new URL(value, config.apiUrl).href : value;
}

export function hasBlog2AiConnection() {
  return Boolean(settings());
}

export async function getColumns(page = 1, query = "") {
  if (!Number.isSafeInteger(page) || page < 1 || query.length > 100) {
    throw new Blog2AiError(400);
  }
  const result = await request<ColumnList>(`?${new URLSearchParams({ page: String(page), q: query })}`);
  return {
    ...result,
    articles: result.articles.map((article) => ({ ...article, imageUrl: mediaUrl(article.imageUrl) })),
  };
}

export async function getColumn(slug: string) {
  if (!/^[\p{L}\p{N}_-]{1,180}$/u.test(slug)) throw new Blog2AiError(404);
  const response = await request<{ publication: ColumnArticle }>(`/${encodeURIComponent(slug)}`);
  return { ...response.publication, imageUrl: mediaUrl(response.publication.imageUrl) };
}

export { Blog2AiError };
