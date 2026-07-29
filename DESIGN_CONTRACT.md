# THEVUEMEDIA — 홈페이지 개편 DESIGN CONTRACT v3 "Retained Counsel" (단일 계약서)

> 모든 컴포넌트/페이지 빌더 에이전트는 이 문서를 **그대로 따른다**. 톤·토큰·구조 일탈 금지.
> 목표: **하이엔드 컨설팅 펌** — 고가 수임료 포지셔닝. 권위는 여백·세리프 타이포·정밀한 골드 헤어라인에서 나온다. + **GBP↔홈페이지 정합성**(Caleb Ulku 원칙).

## 0. 스택 / 규칙
- Next.js 16 App Router + React 19 + **Tailwind CSS v4**(설정파일 없음, `@theme` 토큰은 `globals.css`). TypeScript.
- 서버 컴포넌트 기본. 상호작용 필요한 것만 `"use client"`(Navbar, Reveal, CountUp, ConsultForm, 모바일메뉴).
- 데이터는 **반드시** `src/lib`에서 import: `nap.ts`(NAP), `services.ts`(GBP미러 서비스), `products.ts`(자체도구 4종), `brand.ts`(시그니처), `schema.ts`(JSON-LD).
- **아이콘은 inline SVG**(stroke 1.5, currentColor). 이모지 금지. 라인 아이콘 한 세트 톤.
- 한국어 카피. `text-wrap: balance` 헤딩, word-break: keep-all.
- 접근성: 대비 4.5:1, 포커스 링 유지, 터치 타깃 ≥44px, `aria-label`(아이콘 버튼), `prefers-reduced-motion` 존중(globals에 처리).
- 반응형: 375/768/1024/1440. 가로 스크롤 금지. `.container-x`(max 1152px) 사용.
- **상담 폼(`/api/consult`)이 유일한 폼 전환 채널** — 발신/수신은 env(RESEND_API_KEY·CONSULT_TO·RESEND_FROM) 주입. 전화(tel:)와 이중 채널.

## 1. 금지(법무/신뢰) — 절대 준수
- ❌ "업계 1위 / 최고 / 100% / 보장" 류 단정·과장 (Google·표시광고법·의료광고법).
- ❌ 검증 안 된 실적 수치(예: "누적 4,595개"는 **테스트값**이라 삭제됨 — 어디에도 쓰지 말 것).
- ❌ 허위 sameAs/소셜(Threads·X·LinkedIn·Facebook·Kakao 가짜 URL 금지). **실재 채널은 YouTube·Instagram뿐**(`NAP.socials`).
- ✅ 수치 대신 **역량 기반 사실**(`SIGNATURE_FACTS`: 도구 4종, AI엔진 5개, 설립 2023)만.
- ✅ 데모/대시보드 목업은 "예시(example)"로 라벨링 — 실제 고객 성과로 오인 금지.

## 2. 디자인 토큰 (globals.css v3 — 이 값만 사용)
- 컨셉: **"Retained Counsel"** — **딥 네이비 단일 다크 베이스**(#081120) + **원포인트 골드**(#C9A96A) + **세리프 헤딩**(Noto Serif KR). 리듬: dark(기본) → `.paper-section`(아이보리 #F6F2E9 교차) → dark.
- **골드는 섹션당 1곳** — eyebrow·CTA·수치·헤어라인 중 하나만. 멀티 액센트·그라데이션 텍스트 남발·장식 루프 애니메이션 전면 금지.
- 색(유틸): 다크 위 본문 `text-on-dark`(#ECE7DB 웜 아이보리), 보조 `text-on-dark-soft`(#97A0B0). 아이보리 지면(`.paper-section`) 위 본문 `text-text`(#2A2F38)/`text-text-soft`. 골드 `text-gold`/`bg-gold`(+bright/deep/dim). 헤어라인 `border-line`(골드 틴트 rgba), 아이보리 위는 `--color-line-paper`.
- 타이포 3단: **헤딩 h1~h3 = Noto Serif KR**(globals가 자동 적용, 700/900) / 본문·UI = Pretendard / **데이터·eyebrow·수치 = JetBrains Mono**(`.mono`/`.eyebrow`/`.stat-num`). 시그니처 조합: "골드 모노 eyebrow(선행 헤어라인 내장) + 세리프 헤딩 + 모노 수치".
- 컴포넌트 클래스(globals 제공, 우선 사용): `.btn .btn-primary(골드)/.btn-ink(아이보리 솔리드)/.btn-ghost(헤어라인)/.btn-on-dark`, `.card .card-hover .card-dark .card-paper`, `.pill .pill-brand`, `.eyebrow`, `.section-pad`, `.container-x`, `.dark-section`(다크 위 미세 상승 패널) `.paper-section`(아이보리) `.grid-bg .glow`(정적), `.reveal`(+`.is-visible`), `.accent-bar`(1px 골드), `.hairline-gold`.
- 라운드 **4px**(`--radius-card`)·버튼 2px — 하이엔드 절제. 그림자는 깊고 은은(`--shadow-sm/md/lg/gold`).
- 모션: 진입 `.reveal`(0.7s ease-out)과 마이크로 호버만. **배경·장식 루프 애니메이션 금지**. 지표는 CountUp(reduced-motion이면 즉시 최종값).
- legacy 호환: `--color-gray-*`는 웜 뉴트럴, `--color-primary/brand/indigo/violet/cyan`은 골드 계열로 재매핑되어 있음(블로그 38개 무수정 호환). 새 코드는 legacy 별칭 대신 gold/on-dark/paper 계열을 직접 사용.

## 3. NAP (GBP와 100% 동일 — Footer/Contact/Schema 공용)
- 상호: **더뷰미디어** (THEVUEMEDIA)
- 주소: **대구광역시 동구 동대구로 457 대구상공회의소 7층** (우 41260)
- 전화: **070-4215-3007** (tel:+82-70-4215-3007)
- 영업: **평일 09:00–18:00 · 토·일 휴무**
- 설립: 2023-09-21 / 좌표·Plus Code: 2026-07 이전으로 미확정(허위 금지 원칙상 비움 — GBP 확인 후 `NAP.geo` 입력)
- 소셜: YouTube `@thevuemedia`, Instagram `_thevuemedia_` (이 둘만)
- 모두 `NAP`에서 import. 하드코딩 금지.

## 4. 홈페이지 섹션 순서 (page.tsx 조립)
1. **Navbar** — 세리프 로고 워드마크, 메뉴: 서비스 / 자체 도구 / 프로세스 / 인사이트, CTA `상담 신청`(→`/#consult`) + 전화 아이콘(tel). 스크롤 시 blur 헤더. 모바일 메뉴.
2. **Hero** — eyebrow `// 대구 · AI 검색 최적화 (GEO·AIO)`. 세리프 대형 선언 H1(골드 강조 1개 단어). sub + CTA 2개(상담 신청 / 무료 AI 진단→schemaworks). 도구 4종 사실 배지. AIRank 대시보드 목업("예시" 라벨, 골드 라인차트).
3. **엔진 밴드** — 마퀴 폐지 → 정적 골드 헤어라인 밴드 + 모노 텍스트칩(ChatGPT · Gemini · Perplexity · Copilot · Grok · Google AI Overview · Naver AI).
4. **Credo**(ProblemSolution 계승) — 컨설팅펌식 포지션 선언 3문장 + before/after 미니 채팅 목업("예시").
5. **ServicesGrid (GBP 미러)** — 서비스 8종 카드. GBP 서비스명 1:1.
6. **ProcessSection** — 01 Audit / 02 Strategy / 03 Execution / 04 Tracking.
7. **ToolsSection** — `.dark-section.grid-bg`. "방법론을 소프트웨어로 증명합니다" — 도구 4종 파이프라인(신뢰의 핵심 축).
8. **ProofSection** — "예시" 라벨 인포그래픽 + before/after.
9. **IndustriesSection** — 의료·법률·프랜차이즈·이커머스·교육·금융.
10. **InsightsSection** — posts.ts 최신 글 카드 → /blog.
11. **FaqSection** — 아코디언 + FAQPage JSON-LD.
12. **ConsultSection**(id="consult", 신설) — ConsultForm + 전화 + NAP 요약. 모든 페이지 CTA의 종착지.
13. **Footer** — 풀 NAP, 서비스/도구/회사 링크, 소셜(YouTube·Instagram만).

## 5. `/rebuild` — 퍼널 전용 랜딩 (schemaworks 유입)
- **noindex, follow** (`metadata.robots`). sitemap.ts·llms.txt **미등재**. `/web-rebuild`(GBP 서비스 설명, index)와 역할 분리: 설명 vs 세일즈.
- 유입 맥락: schemaworks 7일 추적에서 "AI 미언급"을 방금 데이터로 확인한 상태 → 문제 재설득 생략, 원인(구조)→엔트리 상품(홈페이지 리빌딩, 2주, 가격 범위)→업셀(AIO 통합 프로그램 비교 카드)→실증(도구 4종)→FAQ→ConsultForm(source 자동 태깅).
- NAP은 `nap.ts` import. 법무 §1 동일 적용.

## 6. GEO/AIO 산출물 (정합성)
- 홈: layout이 organizationSchema+websiteSchema emit. page.tsx에서 FAQPage + Service ItemList JSON-LD(`JsonLd` 컴포넌트).
- 각 서비스 페이지: serviceSchema+breadcrumbSchema+faqPageSchema + metadata(title/description/canonical/OG). 첫 문단은 검색자에게 말 걸기(연혁 금지).
- llms.txt·sitemap·robots(AI 봇 허용: GPTBot·ClaudeBot·PerplexityBot·OAI-SearchBot 등) 유지·갱신. `/rebuild`는 어디에도 미등재.

## 7. 카피 톤
- 신뢰·절제·데이터. 과장 없이 단정적. 첫 문장은 항상 검색자/문제에 말 건다(회사 연혁 X).
- 하이엔드 컨설팅 어법: 짧은 선언 + 근거. "검색이 끝나고 AI 추천이 시작됐다" / "방법론을 소프트웨어로 증명한다(도구 4종)" / "측정되지 않으면 개선되지 않는다(AIRank)".
