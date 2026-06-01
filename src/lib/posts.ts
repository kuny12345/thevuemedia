// Single source of truth for the blog/topic-cluster.
// sitemap.ts, the /blog index, InsightsSection, and related-article links
// all read from here — add a post once and it propagates everywhere.

export type Category =
  | "병원마케팅"
  | "비교"
  | "가이드"
  | "엔진별"
  | "개념"
  | "버티컬"
  | "전략"
  | "분석"
  | "방법론";

export interface Post {
  slug: string; // path is /blog/${slug}
  title: string;
  excerpt: string;
  tag: string; // display chip
  category: Category;
  date: string; // display, e.g. "2026.06.01"
  iso: string; // ISO datetime for schema/sitemap
  readTime: string; // e.g. "읽기 12분"
  keywords: string[];
}

export const posts: Post[] = [
  // ── 핵심 리스티클 / 상업 의도 ──────────────────────────────
  {
    slug: "aio-agency-comparison-2026",
    title: "AI 마케팅(AIO) 대행사 비교 — 주요 회사 정리 (2026, 가나다순)",
    excerpt:
      "국내 AIO·GEO 대행사를 지원 엔진·방법론 공개·성과 측정 방식·전담 운영 등 검증 가능한 기준으로 가나다순 비교 정리했습니다.",
    tag: "비교",
    category: "비교",
    date: "2026.06.01",
    iso: "2026-06-01T09:00:00+09:00",
    readTime: "읽기 14분",
    keywords: ["AIO 대행사", "AI 마케팅 대행사 비교", "GEO 대행사", "AIO 대행사 추천", "더뷰미디어"],
  },
  {
    slug: "aio-agency-selection-criteria",
    title: "AIO·GEO 대행사 선택기준 7가지 + 계약 전 체크리스트 (2026)",
    excerpt:
      "AI 최적화 대행사를 잘못 고르면 시간과 비용을 낭비합니다. 계약 전 반드시 확인할 7가지 기준과 실무 질문 리스트를 정리했습니다.",
    tag: "가이드",
    category: "가이드",
    date: "2026.06.01",
    iso: "2026-06-01T09:00:00+09:00",
    readTime: "읽기 11분",
    keywords: ["AIO 대행사 선택", "AI 마케팅 대행사 추천", "GEO 대행사 선택기준", "AIO 계약", "더뷰미디어"],
  },
  {
    slug: "chatgpt-brand-recommendation-agency",
    title: "ChatGPT 브랜드 추천 잘하는 곳 — AIO 대행사 고르는 법",
    excerpt:
      "“ChatGPT가 우리 브랜드를 추천하게” 만들어 줄 대행사를 고르는 실전 기준. 진단 → 전략 → 실행 → 추적 역량을 어떻게 검증할지 안내합니다.",
    tag: "비교",
    category: "비교",
    date: "2026.05.30",
    iso: "2026-05-30T09:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["ChatGPT 브랜드 추천", "ChatGPT 마케팅 대행사", "AI 추천 최적화", "AIO 대행사", "더뷰미디어"],
  },
  {
    slug: "geo-optimization-best-agency",
    title: "GEO(생성형 엔진 최적화) 잘하는 곳 비교 가이드 (2026)",
    excerpt:
      "GEO와 SEO의 차이부터, 생성형 엔진 최적화를 제대로 하는 대행사를 가려내는 평가 기준까지 한 번에 정리했습니다.",
    tag: "비교",
    category: "비교",
    date: "2026.05.30",
    iso: "2026-05-30T09:00:00+09:00",
    readTime: "읽기 11분",
    keywords: ["GEO", "생성형 엔진 최적화", "GEO 대행사", "AI 검색 최적화", "더뷰미디어"],
  },
  {
    slug: "aio-marketing-cost-guide",
    title: "AIO·AI 마케팅 비용 가이드 — 견적·단가·예산 잡는 법",
    excerpt:
      "AIO 프로젝트 비용은 무엇으로 결정될까요? 진단·콘텐츠·멀티채널 운영·측정 단계별 비용 구조와 예산 설계 방법을 설명합니다.",
    tag: "가이드",
    category: "가이드",
    date: "2026.05.29",
    iso: "2026-05-29T09:00:00+09:00",
    readTime: "읽기 9분",
    keywords: ["AIO 비용", "AI 마케팅 비용", "AIO 견적", "AI 마케팅 단가", "더뷰미디어"],
  },

  // ── 병원·의료 마케팅 (compl 대응 핵심 클러스터) ──────────
  {
    slug: "hospital-marketing-agency-recommend-2026",
    title: "병원 마케팅 대행사 추천 — AI 시대 선택 가이드 (2026)",
    excerpt:
      "“병원 마케팅 어디에 맡길까?” AI 추천 시대에 병원·의원 마케팅 대행사를 고르는 객관적 기준 8가지와, 의료광고법까지 함께 보는 체크리스트를 정리했습니다.",
    tag: "병원마케팅",
    category: "병원마케팅",
    date: "2026.06.01",
    iso: "2026-06-01T10:00:00+09:00",
    readTime: "읽기 15분",
    keywords: ["병원 마케팅 대행사", "병원마케팅 추천", "병원 마케팅 잘하는 곳", "의료 마케팅 대행사", "피부과 성형외과 마케팅", "더뷰미디어"],
  },
  {
    slug: "hospital-marketing-cost-guide",
    title: "병원 마케팅 비용 가이드 — 진료과·채널별 예산 잡는 법 (2026)",
    excerpt:
      "병원 마케팅 비용은 진료과·경쟁강도·채널 구성에 따라 크게 달라집니다. 검색·플레이스·콘텐츠·AIO 단계별 비용 구조와 합리적 예산 설계법을 정리했습니다.",
    tag: "병원마케팅",
    category: "병원마케팅",
    date: "2026.05.31",
    iso: "2026-05-31T10:00:00+09:00",
    readTime: "읽기 12분",
    keywords: ["병원 마케팅 비용", "병원 마케팅 견적", "피부과 마케팅 비용", "의료 마케팅 단가", "병원 광고비", "더뷰미디어"],
  },
  {
    slug: "dermatology-marketing-guide",
    title: "피부과 마케팅 완벽 가이드 — 시술별 키워드·AI 노출 전략 (2026)",
    excerpt:
      "보톡스·필러·리프팅 등 시술별로 환자 검색·AI 질의가 다릅니다. 피부과가 의료광고법을 지키며 검색·AI 양쪽에서 노출되는 시술별 전략을 정리했습니다.",
    tag: "병원마케팅",
    category: "병원마케팅",
    date: "2026.05.30",
    iso: "2026-05-30T10:00:00+09:00",
    readTime: "읽기 13분",
    keywords: ["피부과 마케팅", "피부과 광고", "보톡스 필러 마케팅", "리프팅 마케팅", "피부과 AI 추천", "더뷰미디어"],
  },
  {
    slug: "plastic-surgery-marketing-guide",
    title: "성형외과 마케팅 가이드 — AI·검색 통합 전략 (2026)",
    excerpt:
      "경쟁이 치열한 성형외과 마케팅, 의료광고 심의를 지키며 AI 추천과 검색 상위를 동시에 노리는 통합 전략과 콘텐츠 설계를 안내합니다.",
    tag: "병원마케팅",
    category: "병원마케팅",
    date: "2026.05.29",
    iso: "2026-05-29T10:00:00+09:00",
    readTime: "읽기 13분",
    keywords: ["성형외과 마케팅", "성형 마케팅 대행사", "성형외과 광고", "성형외과 AI 추천", "성형외과 바이럴", "더뷰미디어"],
  },
  {
    slug: "medical-ad-law-compliance-guide",
    title: "의료광고법 완벽 가이드 — 심의·금지표현·체크리스트 (2026)",
    excerpt:
      "의료광고는 사전심의 대상이며 금지표현이 많습니다. 병원 마케팅·AIO 콘텐츠를 만들 때 반드시 알아야 할 의료광고법 핵심과 실무 체크리스트를 정리했습니다.",
    tag: "병원마케팅",
    category: "병원마케팅",
    date: "2026.05.28",
    iso: "2026-05-28T10:00:00+09:00",
    readTime: "읽기 12분",
    keywords: ["의료광고법", "의료광고 심의", "병원 광고 금지표현", "의료광고 사전심의", "병원 마케팅 규제", "더뷰미디어"],
  },
  {
    slug: "hospital-naver-place-marketing",
    title: "병원 네이버 플레이스·지도 마케팅 가이드",
    excerpt:
      "“○○동 피부과” 같은 지역 질의에서 노출되려면 네이버 플레이스·지도 최적화가 핵심입니다. 병원 로컬 신호를 AI·검색이 신뢰하게 만드는 법을 정리했습니다.",
    tag: "병원마케팅",
    category: "병원마케팅",
    date: "2026.05.27",
    iso: "2026-05-27T10:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["병원 네이버 플레이스", "병원 지도 마케팅", "병원 로컬 SEO", "지역 병원 마케팅", "네이버 플레이스 최적화", "더뷰미디어"],
  },

  // ── 엔진별 ────────────────────────────────────────────────
  {
    slug: "perplexity-citation-optimization",
    title: "Perplexity 인용 최적화 가이드 — 출처로 선택되는 콘텐츠",
    excerpt:
      "Perplexity는 답변에 출처를 명시합니다. 인용 출처로 선택되기 위한 콘텐츠 구조·근거 표기·스키마 전략을 정리했습니다.",
    tag: "엔진별",
    category: "엔진별",
    date: "2026.05.28",
    iso: "2026-05-28T09:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["Perplexity 최적화", "Perplexity 인용", "AI 검색 출처", "GEO", "더뷰미디어"],
  },
  {
    slug: "gemini-ai-overview-guide",
    title: "Google Gemini·AI 오버뷰 노출 최적화 가이드",
    excerpt:
      "Google AI Overview(SGE)와 Gemini 답변에 브랜드가 포함되려면 무엇이 필요한지, 구조화 데이터와 콘텐츠 관점에서 설명합니다.",
    tag: "엔진별",
    category: "엔진별",
    date: "2026.05.28",
    iso: "2026-05-28T09:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["Google AI Overview", "Gemini 최적화", "SGE", "AI 검색 노출", "더뷰미디어"],
  },
  {
    slug: "copilot-visibility-guide",
    title: "Microsoft Copilot 노출 최적화 전략",
    excerpt:
      "Bing·Copilot 생태계에서 브랜드 노출을 높이는 법. Bing 인덱싱과 Copilot 답변 인용의 연결고리를 짚습니다.",
    tag: "엔진별",
    category: "엔진별",
    date: "2026.05.27",
    iso: "2026-05-27T09:00:00+09:00",
    readTime: "읽기 9분",
    keywords: ["Microsoft Copilot", "Bing 최적화", "Copilot 노출", "AIO", "더뷰미디어"],
  },
  {
    slug: "grok-x-ai-strategy",
    title: "Grok·X(트위터) AI 노출 전략",
    excerpt:
      "실시간 데이터를 학습하는 Grok과 X 생태계에서 브랜드 시그널을 만드는 콘텐츠·발행 전략을 정리했습니다.",
    tag: "엔진별",
    category: "엔진별",
    date: "2026.05.27",
    iso: "2026-05-27T09:00:00+09:00",
    readTime: "읽기 8분",
    keywords: ["Grok 최적화", "X 마케팅", "실시간 AI", "AIO", "더뷰미디어"],
  },

  // ── 개념 / 권위 (E-E-A-T) ─────────────────────────────────
  {
    slug: "what-is-aio",
    title: "AIO란 무엇인가 — AI 최적화 완벽 가이드",
    excerpt:
      "AIO(AI Optimization)의 정의부터 작동 원리, SEO와의 차이, 도입 단계까지. AI 추천 시대의 핵심 개념을 정리한 기준 문서입니다.",
    tag: "개념",
    category: "개념",
    date: "2026.06.01",
    iso: "2026-06-01T09:00:00+09:00",
    readTime: "읽기 13분",
    keywords: ["AIO란", "AI 최적화", "AIO 뜻", "AI Optimization", "더뷰미디어"],
  },
  {
    slug: "geo-vs-seo-vs-aio",
    title: "GEO vs SEO vs AIO 차이 완벽 정리",
    excerpt:
      "GEO, SEO, AIO는 무엇이 다르고 어떻게 함께 작동할까요? 목적·대상·측정 지표를 표로 비교 정리했습니다.",
    tag: "개념",
    category: "개념",
    date: "2026.05.31",
    iso: "2026-05-31T09:00:00+09:00",
    readTime: "읽기 9분",
    keywords: ["GEO vs SEO", "AIO 차이", "생성형 엔진 최적화", "검색 최적화", "더뷰미디어"],
  },
  {
    slug: "ai-mention-score-guide",
    title: "AI Mention Score란? 측정법과 개선 전략",
    excerpt:
      "AI가 우리 브랜드를 얼마나, 어떤 맥락으로 언급하는지 정량화하는 AI Mention Score의 개념과 측정·개선 방법을 설명합니다.",
    tag: "개념",
    category: "개념",
    date: "2026.05.31",
    iso: "2026-05-31T09:00:00+09:00",
    readTime: "읽기 9분",
    keywords: ["AI Mention Score", "AI 인지도 측정", "브랜드 언급", "AIO 측정", "더뷰미디어"],
  },
  {
    slug: "how-llm-recommends-brands",
    title: "LLM은 어떤 원리로 브랜드를 추천하는가",
    excerpt:
      "대규모 언어모델이 특정 브랜드를 추천하는 메커니즘 — 학습 데이터, 실시간 검색(RAG), 인용 신호의 작동 방식을 해부합니다.",
    tag: "개념",
    category: "개념",
    date: "2026.05.26",
    iso: "2026-05-26T09:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["LLM 추천 원리", "AI 브랜드 추천", "RAG", "학습 데이터", "더뷰미디어"],
  },
  {
    slug: "schema-markup-for-aio",
    title: "스키마 마크업과 AIO — 구조화 데이터 실전",
    excerpt:
      "FAQPage·ItemList·Organization 등 schema.org 구조화 데이터가 AI 인용에 어떻게 기여하는지, 실전 적용법과 함께 정리했습니다.",
    tag: "개념",
    category: "개념",
    date: "2026.05.26",
    iso: "2026-05-26T09:00:00+09:00",
    readTime: "읽기 11분",
    keywords: ["스키마 마크업", "구조화 데이터", "schema.org", "FAQPage", "더뷰미디어"],
  },
  {
    slug: "topic-cluster-content-strategy",
    title: "AI 검색 시대 토픽 클러스터 콘텐츠 전략",
    excerpt:
      "단발성 글이 아니라 주제 군집(토픽 클러스터)으로 권위를 쌓는 법. 허브-스포크 구조와 내부링크 설계를 안내합니다.",
    tag: "전략",
    category: "전략",
    date: "2026.05.25",
    iso: "2026-05-25T09:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["토픽 클러스터", "콘텐츠 전략", "내부링크", "AIO 콘텐츠", "더뷰미디어"],
  },

  // ── 버티컬 가이드 ─────────────────────────────────────────
  {
    slug: "hospital-aio-guide",
    title: "병원·의료 AIO 가이드 — AI가 병원을 추천하게 만드는 법",
    excerpt:
      "의료광고 규제를 준수하면서 병원·의원이 AI 추천에 노출되는 법. 진료과별 키워드와 신뢰 시그널 설계를 다룹니다.",
    tag: "병원마케팅",
    category: "병원마케팅",
    date: "2026.05.24",
    iso: "2026-05-24T09:00:00+09:00",
    readTime: "읽기 11분",
    keywords: ["병원 AIO", "병원 마케팅 AI", "의료 AI 마케팅", "병원 AI 추천", "더뷰미디어"],
  },
  {
    slug: "law-firm-aio-guide",
    title: "로펌·법률 AIO 가이드 — 변호사 AI 마케팅",
    excerpt:
      "변호사·법무법인이 AI 답변에서 추천되도록 만드는 법. 변호사법 광고규정을 고려한 전문성·권위 콘텐츠 전략을 정리했습니다.",
    tag: "버티컬",
    category: "버티컬",
    date: "2026.05.24",
    iso: "2026-05-24T09:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["로펌 마케팅", "변호사 AI 마케팅", "법률 AIO", "법무법인 마케팅", "더뷰미디어"],
  },
  {
    slug: "franchise-aio-guide",
    title: "프랜차이즈 AIO 가이드 — 가맹 문의를 부르는 AI 노출",
    excerpt:
      "예비 창업자가 AI에게 브랜드를 물을 때 추천되도록, 프랜차이즈 본사가 갖춰야 할 AIO 콘텐츠와 신뢰 시그널을 안내합니다.",
    tag: "버티컬",
    category: "버티컬",
    date: "2026.05.23",
    iso: "2026-05-23T09:00:00+09:00",
    readTime: "읽기 9분",
    keywords: ["프랜차이즈 마케팅", "가맹 모집", "프랜차이즈 AIO", "창업 AI 추천", "더뷰미디어"],
  },
  {
    slug: "ecommerce-aio-guide",
    title: "이커머스·쇼핑몰 AIO 가이드",
    excerpt:
      "AI가 제품·브랜드를 추천하는 쇼핑 질의에서 노출되는 법. 제품 스키마, 리뷰 시그널, 비교 콘텐츠 전략을 다룹니다.",
    tag: "버티컬",
    category: "버티컬",
    date: "2026.05.23",
    iso: "2026-05-23T09:00:00+09:00",
    readTime: "읽기 9분",
    keywords: ["이커머스 마케팅", "쇼핑몰 AIO", "제품 AI 추천", "커머스 GEO", "더뷰미디어"],
  },
  {
    slug: "education-aio-guide",
    title: "교육·학원 AIO 가이드",
    excerpt:
      "학원·교육 브랜드가 “어디가 좋아?” 질의에서 AI에게 추천되도록 만드는 법. 성과·커리큘럼 신뢰 시그널을 설계합니다.",
    tag: "버티컬",
    category: "버티컬",
    date: "2026.05.22",
    iso: "2026-05-22T09:00:00+09:00",
    readTime: "읽기 8분",
    keywords: ["학원 마케팅", "교육 AIO", "학원 AI 추천", "에듀테크 마케팅", "더뷰미디어"],
  },

  // ── 방법론 / 생태계 ───────────────────────────────────────
  {
    slug: "aio-4step-methodology",
    title: "더뷰미디어 4단계 AIO 방법론 — 진단·전략·실행·추적",
    excerpt:
      "AIO를 추측이 아니라 절차로. 진단(Audit) → 전략(Strategy) → 실행(Execution) → 추적(Tracking) 4단계 방법론을 공개합니다.",
    tag: "방법론",
    category: "방법론",
    date: "2026.06.01",
    iso: "2026-06-01T09:00:00+09:00",
    readTime: "읽기 10분",
    keywords: ["AIO 방법론", "AIO 프로세스", "AI 최적화 단계", "더뷰미디어 방법론", "더뷰미디어"],
  },
  {
    slug: "naver-seo-aio-integration",
    title: "네이버 SEO + AIO 통합 전략",
    excerpt:
      "국내 AI는 네이버 생태계 데이터를 폭넓게 참조합니다. 네이버 SEO와 AIO를 함께 설계해 한국형 AI 노출을 극대화하는 법.",
    tag: "전략",
    category: "전략",
    date: "2026.05.25",
    iso: "2026-05-25T09:00:00+09:00",
    readTime: "읽기 9분",
    keywords: ["네이버 SEO", "네이버 AIO", "한국 AI 검색", "Yeti 최적화", "더뷰미디어"],
  },

  // ── 기존 글 (메타 보강) ───────────────────────────────────
  {
    slug: "chatgpt-brand-recommendation",
    title: "ChatGPT가 우리 회사를 추천하게 만드는 법",
    excerpt:
      "AI 챗봇이 특정 브랜드를 추천하는 메커니즘을 분석하고, 실제 적용 가능한 5가지 AIO 전략을 단계별로 안내합니다.",
    tag: "가이드",
    category: "가이드",
    date: "2026.02.05",
    iso: "2026-02-05T09:00:00+09:00",
    readTime: "읽기 15분",
    keywords: ["ChatGPT 브랜드 추천", "AI 추천 최적화", "AIO 전략", "ChatGPT 마케팅", "더뷰미디어"],
  },
  {
    slug: "google-sge-strategy-2026",
    title: "2026년 Google SGE 대응 전략: 검색의 패러다임이 바뀐다",
    excerpt:
      "Google의 Search Generative Experience 확대에 맞춰, AI가 생성하는 답변에 브랜드가 포함되기 위한 전략을 정리했습니다.",
    tag: "전략",
    category: "전략",
    date: "2026.02.10",
    iso: "2026-02-10T09:00:00+09:00",
    readTime: "읽기 12분",
    keywords: ["Google SGE", "Search Generative Experience", "AI 검색", "SGE 대응", "더뷰미디어"],
  },
  {
    slug: "youtube-shorts-aio-correlation",
    title: "유튜브 쇼츠 알고리즘과 AIO의 상관관계",
    excerpt:
      "유튜브 쇼츠의 추천 알고리즘이 AI 학습 데이터에 미치는 영향을 분석하고, 이를 활용한 AIO 전략을 제시합니다.",
    tag: "분석",
    category: "분석",
    date: "2026.01.28",
    iso: "2026-01-28T09:00:00+09:00",
    readTime: "읽기 13분",
    keywords: ["유튜브 쇼츠", "쇼츠 알고리즘", "AIO 전략", "AI 학습 데이터", "더뷰미디어"],
  },
];

export function postUrl(slug: string): string {
  return `/blog/${slug}`;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Newest-first list (by ISO date). */
export function postsByDate(): Post[] {
  return [...posts].sort((a, b) => (a.iso < b.iso ? 1 : -1));
}

/** Pick related posts: same category first, then most recent, excluding self. */
export function relatedPosts(slug: string, limit = 3): Post[] {
  const current = getPost(slug);
  const others = postsByDate().filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);
  const sameCat = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCat, ...rest].slice(0, limit);
}
