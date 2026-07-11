import type { ReactNode } from "react";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

/* ── inline line icons (stroke currentColor, 1.5~2) ───────────────────── */
function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 3.2l1.9 4.9 4.9 1.9-4.9 1.9L12 16.8l-1.9-4.9-4.9-1.9 4.9-1.9L12 3.2Z" />
      <path d="M18.5 16.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" />
    </svg>
  );
}

/* ── one chat line inside a mock card ─────────────────────────────────── */
type Tone = "muted" | "brand";

function ChatBubble({
  role,
  tone = "muted",
  children,
}: {
  role: "user" | "ai";
  tone?: Tone;
  children: ReactNode;
}) {
  const isUser = role === "user";

  const avatar = isUser
    ? "bg-white/10 text-on-dark"
    : tone === "brand"
      ? "bg-brand/15 text-brand"
      : "bg-white/[0.07] text-on-dark-soft";

  const bubble = isUser
    ? "rounded-2xl rounded-tr-sm bg-white/[0.07] border border-line-dark text-on-dark"
    : tone === "brand"
      ? "rounded-2xl rounded-tl-sm bg-brand/[0.09] border border-brand/30 text-on-dark"
      : "rounded-2xl rounded-tl-sm bg-[#0f141d] border border-line-dark text-on-dark-soft";

  const labelColor =
    isUser || tone !== "brand" ? "text-on-dark-soft" : "text-brand";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`flex max-w-[90%] items-start gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}
      >
        <span
          className={`mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-lg ${avatar}`}
        >
          {isUser ? <UserIcon /> : <AiIcon />}
        </span>
        <div className={`${bubble} px-3.5 py-2.5`}>
          <span
            className={`mono mb-1 block text-[10px] uppercase tracking-[0.12em] ${labelColor}`}
          >
            {isUser ? "사용자" : "AI"}
          </span>
          <p className="text-[13.5px] leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}

/* ── illustrative tiles — NOT real client results ────────────────────── */
const TILES = [
  { value: 48, suffix: "회", caption: "월간 AI 응답 인용" },
  { value: 72, suffix: "점", caption: "AI 가시성 점수 (Mention Score)" },
  { value: 9, suffix: "개", caption: "추천 응답에 등장한 분야" },
] as const;

export default function ProofSection() {
  return (
    <section
      id="proof"
      className="dark-section grid-bg section-pad glow relative overflow-hidden"
    >
      <div className="container-x">
        {/* heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How It Looks (예시)</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">
            AI 검색을 브랜드의{" "}
            <span className="text-gold">추천 엔진</span>으로 바꿉니다
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-dark-soft md:text-lg">
            사용자가 AI에게 “어디가 좋아?”라고 물을 때, 우리 브랜드가 근거와
            함께 등장하나요? 아래는 도입 전후로 AI 응답이 어떻게 달라지는지
            보여주는 예시 화면입니다.
          </p>
        </Reveal>

        {/* before / after comparison */}
        <Reveal className="mt-12 grid items-stretch gap-5 lg:mt-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          {/* BEFORE */}
          <div className="card-dark relative flex h-full flex-col p-6">
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line-dark bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-on-dark-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
              예시
            </span>
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-line-dark px-3 py-1 text-xs font-semibold text-on-dark-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" aria-hidden="true" />
              AIO 도입 전
            </span>

            <div className="space-y-3">
              <ChatBubble role="user">
                이 분야에서 믿고 맡길 만한 곳 추천해줘.
              </ChatBubble>
              <ChatBubble role="ai" tone="muted">
                관련 업체가 많아 특정 한 곳을 꼽기는 어렵습니다. 직접 검색해
                비교해 보시길 권합니다.
              </ChatBubble>
            </div>

            <div className="mt-auto border-t border-line-dark pt-4">
              <div className="mb-2 flex items-center justify-between text-[11px]">
                <span className="mono uppercase tracking-[0.1em] text-on-dark-soft">
                  AI 응답 내 브랜드 등장
                </span>
                <span className="font-semibold text-on-dark-soft">미등장</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <div className="h-full w-[14%] rounded-full bg-white/25" />
              </div>
            </div>
          </div>

          {/* arrow */}
          <div className="flex items-center justify-center text-brand" aria-hidden="true">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/30 bg-brand/10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 rotate-90 lg:rotate-0"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>

          {/* AFTER */}
          <div className="card-dark relative flex h-full flex-col p-6 ring-1 ring-inset ring-brand/30">
            <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-line-dark bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-on-dark-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
              예시
            </span>
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              AIO 도입 후
            </span>

            <div className="space-y-3">
              <ChatBubble role="user">
                이 분야에서 믿고 맡길 만한 곳 추천해줘.
              </ChatBubble>
              <ChatBubble role="ai" tone="brand">
                <strong className="font-semibold text-white">[브랜드]</strong>를
                함께 확인해 보세요. 공개된 사례와 구조화 데이터를 근거로, 이
                분야 질문에서 꾸준히 인용됩니다.
              </ChatBubble>
            </div>

            <div className="mt-auto border-t border-line-dark pt-4">
              <div className="mb-2 flex items-center justify-between text-[11px]">
                <span className="mono uppercase tracking-[0.1em] text-on-dark-soft">
                  AI 응답 내 브랜드 등장
                </span>
                <span className="font-semibold text-brand">근거 기반 등장</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-brand to-cyan" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* illustrative stat tiles */}
        <div className="mt-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-5">
            {TILES.map((t, i) => (
              <Reveal key={t.caption} delay={i * 80}>
                <div className="card-dark h-full p-6 text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line-dark bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-on-dark-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                    예시 지표
                  </span>
                  <div className="mt-4">
                    <CountUp
                      value={t.value}
                      suffix={t.suffix}
                      className="text-4xl font-extrabold tracking-tight text-white lg:text-5xl"
                    />
                  </div>
                  <p className="mt-2 text-sm text-on-dark-soft">{t.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-on-dark-soft">
            위 화면과 수치는 결과물의 형태를 보여주기 위한 예시 데이터이며, 특정
            고객의 실제 성과나 보장된 결과가 아닙니다.
          </p>
        </div>
      </div>
    </section>
  );
}
