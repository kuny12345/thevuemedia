# THEVUEMEDIA — 홈페이지 개편 DESIGN CONTRACT (단일 계약서)

> 모든 컴포넌트/페이지 빌더 에이전트는 이 문서를 **그대로 따른다**. 톤·토큰·구조 일탈 금지.
> 목표: 프리미엄 AI·데이터 회사 느낌 + **GBP↔홈페이지 정합성**(Caleb Ulku 원칙).

## 0. 스택 / 규칙
- Next.js 16 App Router + React 19 + **Tailwind CSS v4**(설정파일 없음, `@theme` 토큰은 `globals.css`). TypeScript.
- 서버 컴포넌트 기본. 상호작용 필요한 것만 `"use client"`(Navbar, Reveal, CountUp, 마퀴, 모바일메뉴).
- 데이터는 **반드시** `src/lib`에서 import: `nap.ts`(NAP), `services.ts`(GBP미러 서비스), `products.ts`(자체도구 4종), `brand.ts`(시그니처), `schema.ts`(JSON-LD).
- **아이콘은 inline SVG**(stroke 1.5~2, currentColor). 이모지 금지. 한 세트 톤 유지(라인 아이콘).
- 한국어 카피. 줄바꿈 어색하지 않게(word-wrap), `text-wrap: balance` 헤딩.
- 접근성: 대비 4.5:1, 포커스 링 유지, 터치 타깃 ≥44px, `aria-label`(아이콘 버튼), `prefers-reduced-motion` 존중(globals에 이미 처리).
- 반응형: 375/768/1024/1440. 가로 스크롤 금지. `.container-x`(max 1152px) 사용.

## 1. 금지(법무/신뢰) — 절대 준수
- ❌ "업계 1위 / 최고 / 100% / 보장" 류 단정·과장 (Google·표시광고법·의료광고법).
- ❌ 검증 안 된 실적 수치(예: "누적 4,595개"는 **테스트값**이라 삭제됨 — 어디에도 쓰지 말 것).
- ❌ 허위 sameAs/소셜(Threads·X·LinkedIn·Facebook·Kakao 가짜 URL 금지). **실재 채널은 YouTube·Instagram뿐**(`NAP.socials`).
- ✅ 수치 대신 **역량 기반 사실**(`SIGNATURE_FACTS`: 도구 4종, AI엔진 5개, 설립 2023)만.
- ✅ 데모/대시보드 목업은 "예시(example)"로 라벨링 — 실제 고객 성과로 오인 금지.

## 2. 디자인 토큰 (globals.css에 정의됨 — 이 값만 사용)
- 컨셉: **"Measured Authority"** — 라이트 베이스 + 딥잉크 데이터 섹션. 리듬: light → dark(데이터) → light.
- 색(유틸): `text-ink`(#0A0E16 헤딩), `text-text`(본문 #1B2230), `text-text-soft`(#5A6577 보조), `bg-paper`(#FFF), `bg-surface`(#F6F7F9 교차섹션), `border-line`(#E6E8EE).
  - 브랜드: `text-brand`/`bg-brand`(#2563EB), `brand-deep`(#1D4ED8), `cyan`(#06B6D4), `up`(#10B981 성장).
  - 딥잉크 섹션: `.dark-section`(bg #0A0E16, 흰 텍스트), 보조 `text-on-dark-soft`(#9AA4B6), 카드 `.card-dark`.
- 타이포: 본문 Noto Sans KR. **데이터/지표/eyebrow는 `.mono`/`.eyebrow`/`.stat-num`(JetBrains Mono, tabular-nums)** — AI·데이터 신뢰감의 핵심.
- AI 강조어에만 `.text-gradient`(블루→시안). 남발 금지(섹션당 1곳).
- 컴포넌트 클래스(globals 제공, 우선 사용): `.btn .btn-primary/.btn-ink/.btn-ghost/.btn-on-dark`, `.card .card-hover .card-dark`, `.pill`, `.eyebrow`, `.section-pad`, `.container-x`, `.dark-section .grid-bg .glow`, `.reveal`(+`.is-visible`), `.animate-marquee`.
- 라운드 16px(`--radius-card`), 그림자 `--shadow-sm/md/lg`. 0px 브루탈리즘 금지.
- 모션 150~300ms ease-out. 섹션 진입은 `.reveal`(클라이언트 Reveal 래퍼가 `.is-visible` 토글). 지표는 CountUp(reduced-motion이면 즉시 최종값).

## 3. NAP (GBP와 100% 동일 — Footer/Contact/Schema 공용)
- 상호: **더뷰미디어** (THEVUEMEDIA)
- 주소: **대구광역시 수성구 청수로20길 13 프롬앤드 206**
- 전화: **010-6663-5352** (tel:+82-10-6663-5352)
- 영업: **평일 09:00–18:00 · 토·일 휴무**
- 설립: 2023-09-21 / 좌표: 35.8396052, 128.6193069 / Plus Code RJQ9+RP
- 소셜: YouTube `@thevuemedia`, Instagram `_thevuemedia_` (이 둘만)
- 모두 `NAP`에서 import. 하드코딩 금지.

## 4. 홈페이지 섹션 순서 (page.tsx 최종 조립)
1. **Navbar** — 로고 더뷰미디어, 메뉴: 서비스 / 자체 도구 / 프로세스 / 인사이트, CTA `무료 AI 진단` + 전화아이콘(tel). 스크롤 시 blur 헤더. 모바일 메뉴.
2. **Hero** — eyebrow `// 대구 · AI 검색 최적화 (GEO·AIO)`. H1: "검색이 끝나고, **AI 추천**이 시작됐습니다" (text-gradient on AI 추천). sub: ChatGPT·Gemini·Perplexity가 브랜드를 먼저 추천하도록 설계 + 자체 도구로 직접 실행. CTA 2개(무료 AI 진단 / 전화). 우측/하단: **AIRank 대시보드 목업**(SVG 라인차트 + mention score 카드, "예시" 라벨, mono 수치).
3. **AiEngineMarquee** — `.dark-section` 얇은 띠 또는 라이트 띠. "이 엔진들이 당신을 추천하게 —" + 무한 마퀴 텍스트 로고: ChatGPT · Gemini · Perplexity · Copilot · Grok · Google AI Overview · Naver AI (텍스트 워드마크, 가짜 브랜드 로고 SVG 금지 → 모노 텍스트칩).
4. **ProblemSolution** — "검색은 답을 주지만, AI는 '추천'을 합니다." GEO가 지금 필요한 이유 3포인트(검색→AI 이동 / 인용 안 되면 보이지 않음 / 측정 가능해야 개선). 좌 카피 + 우 before/after 미니 채팅 목업(예시 라벨).
5. **ServicesGrid (CORE · GBP 미러)** — eyebrow `// SERVICES`. H2 "서비스". `services`(8개) 카드 그리드(아이콘+name+short+`자세히`→`href`). 각 카드 hover. **GBP 서비스명과 1:1**. 신규(isNew) 5개도 카드로 노출.
6. **ToolsSection (차별점)** — `.dark-section.grid-bg`. eyebrow `// OUR TOOLS`. H2 "말이 아니라, 직접 만들어 씁니다". `products`(4종) — 파이프라인(진단→추적→생산·발행→AI 인용 자산) 시각화 + 카드(role 배지·name·tagline·features·링크). 외부도구는 `_blank`.
7. **ProcessSection** — eyebrow `// PROCESS`. H2 "진단 · 전략 · 실행 · 추적". 4단계 타임라인/스텝(01 Audit 진단 / 02 Strategy 전략 / 03 Execution 실행 / 04 Tracking 추적). 각 단계 어떤 도구/산출물.
8. **ProofSection** — `.dark-section`. eyebrow `// PROOF (예시)`. AI mention score 상승 인포그래픽(CountUp, "예시" 명시), before/after 채팅 비교. 절대 실제수치 단정 금지.
9. **IndustriesSection** — H2 "이미 이 분야들이 준비하고 있습니다". 의료·법률·프랜차이즈·이커머스·교육·금융 칩/카드.
10. **InsightsSection** — 기존 `posts.ts` 최신 글 3~6개 카드(블로그 권위). "인사이트 전체" → /blog.
11. **FaqSection** — H2 "자주 묻는 질문". 6~8 Q&A(아코디언). **FAQPage JSON-LD emit**(faqPageSchema). GEO 인용 자산.
12. **CtaSection** — `.dark-section.glow`. "AI가 추천하는 브랜드, 지금 시작하세요." CTA(무료 AI 진단 / 전화) + NAP 요약(주소·전화·영업시간).
13. **Footer** — 풀 NAP(상호·주소·전화 tel·영업시간·설립), 서비스/도구/회사 링크(services·products 기반), 소셜(YouTube·Instagram만), 카피라이트. (LocalBusiness JSON-LD는 layout에서 이미 emit.)

## 5. GEO/AIO 산출물 (정합성 핵심)
- 홈: layout이 organizationSchema(LocalBusiness+NAP)+websiteSchema emit. **추가로 page.tsx에서 FAQPage + Service ItemList(서비스 8개) JSON-LD** emit(`JsonLd` 컴포넌트 사용).
- 각 신규 서비스 페이지: `serviceSchema`+`breadcrumbSchema`+`faqPageSchema` emit. metadata(title/description/canonical/OG) 작성. 본문은 검색자에게 말 거는 첫 문단(연혁 금지).
- `src/app/llms.txt/route.ts` 업데이트: 새 서비스 8개 + 도구 4종 + NAP 반영(에이전트가 기존 파일 읽고 갱신).
- `sitemap.ts`에 새 서비스 경로(/seo /schema /web-rebuild /content /video) 추가.
- robots: AI 봇 허용 유지(GPTBot·ClaudeBot·PerplexityBot·OAI-SearchBot 등). 기존 robots.ts 확인·보강.

## 6. 빌드해야 할 산출물 (워크플로 작업 목록)
**A. 컴포넌트 리라이트(프리미엄 디자인, 위 토큰):**
Navbar, Hero, AiEngineMarquee(신규, 기존 TrustBar 대체/계승), ProblemSolution(신규), ServicesGrid(신규, 기존 ServiceSection 대체), ToolsSection(기존 ProductsSection 대체), ProcessSection, ProofSection, IndustriesSection(신규), InsightsSection, FaqSection, CtaSection, Footer, ProductIcon(아이콘 키 chart/scan/publish/factory 지원), Reveal(신규 client wrapper: IntersectionObserver→`.is-visible`), CountUp(신규 client).
**B. 신규 서비스 페이지(5):** `/seo`, `/schema`, `/web-rebuild`, `/content`, `/video` — 각 `page.tsx`(+필요시 layout.tsx metadata). 구조: Navbar→히어로(eyebrow+H1+sub+CTA)→문제/해결→무엇을 하는가(불릿)→프로세스(howToSchema 선택)→연관 도구→FAQ→CTA→Footer. Service+FAQ+Breadcrumb JSON-LD.
**C. page.tsx** 최종 조립(섹션 순서 §4) + 홈 JSON-LD(FAQ/ItemList).
**D. 인프라:** llms.txt route, sitemap.ts, robots.ts 갱신.

## 7. 카피 톤
- 신뢰·절제·데이터. 과장 없이 단정적. 첫 문장은 항상 검색자/문제에 말 건다(회사 연혁 X).
- 핵심 메시지: "검색이 끝나고 AI 추천이 시작됐다" / "말이 아니라 직접 만들어 쓴다(도구 4종)" / "측정되지 않으면 개선되지 않는다(AIRank)".
