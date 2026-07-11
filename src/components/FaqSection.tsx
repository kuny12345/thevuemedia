import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { faqPageSchema } from "@/lib/schema";

// 자주 묻는 질문 — 온페이지 텍스트와 FAQPage JSON-LD가 같은 배열을 공유해
// 항상 일치한다. 답변은 plain text(과장·단정 없음), GEO 인용 자산.
const qas: { q: string; a: string }[] = [
  {
    q: "AIO·GEO가 정확히 뭔가요?",
    a: "AIO(AI 검색 최적화)와 GEO(생성형 엔진 최적화)는 ChatGPT·Gemini·Perplexity·구글 AI 개요 같은 생성형 AI가 답을 만들 때 브랜드를 근거로 인용하고 추천하도록 콘텐츠와 구조화 데이터를 설계하는 작업입니다. 사용자가 검색창 대신 AI에게 직접 묻는 흐름에 대응하기 위한 최적화입니다.",
  },
  {
    q: "기존 SEO와는 무엇이 다른가요?",
    a: "SEO는 검색 결과 페이지에서 한 페이지의 순위를 올리는 데 초점을 둡니다. AIO·GEO는 AI가 여러 출처를 읽고 답을 '생성'할 때 브랜드가 인용·추천되도록 만드는 데 초점을 둡니다. 둘은 충돌하지 않고 함께 가며, 저희는 검색에 잘 잡히는 콘텐츠 위에 구조화 데이터와 AI 인용 자산을 더하는 방식으로 진행합니다.",
  },
  {
    q: "효과는 어떻게 확인하나요?",
    a: "자체 도구 AIRank로 ChatGPT·Perplexity·Gemini·Grok·구글 AI 개요 등 여러 AI 엔진에 실제 질의를 보내, 브랜드가 언급되는지와 어떤 맥락으로 추천되는지를 주기적으로 추적합니다. 추적 결과는 대시보드로 제공되어, 작업 전후의 변화를 같은 기준으로 비교해 확인할 수 있습니다.",
  },
  {
    q: "의료·병원도 광고법에 맞게 진행할 수 있나요?",
    a: "네. 의료광고법과 표시광고법에서 제한하는 과장·단정 표현이나 검증되지 않은 효과 주장을 쓰지 않고, 사실 기반 정보 위주로 콘텐츠를 설계합니다. 의료기관은 사전 심의가 필요한 경우가 있어, 해당 절차를 함께 확인하며 진행합니다.",
  },
  {
    q: "대구가 아닌 다른 지역도 가능한가요?",
    a: "가능합니다. 사무실은 대구 수성구에 있지만, AI 검색 최적화 작업은 온라인으로 진행되어 지역 제약이 없습니다. 화상 미팅과 원격 협업으로 전국 어디든 함께할 수 있고, 지역 기반 검색이 중요한 업종은 해당 지역 정보에 맞춰 설계합니다.",
  },
  {
    q: "비용과 진행 방식은 어떻게 되나요?",
    a: "업종, 목표 키워드, 현재 사이트 상태, 작업 범위(진단·콘텐츠·구조화 데이터·영상 등)에 따라 달라지므로, 무료 진단으로 현황을 확인한 뒤 범위를 정해 견적을 안내합니다. 보통 진단 → 전략 → 실행 → 추적 순서로 진행하며, 단발 작업과 월 단위 운영 모두 가능합니다.",
  },
  {
    q: "기존 홈페이지를 꼭 새로 만들어야 하나요?",
    a: "아닙니다. 대부분은 기존 사이트를 유지한 채 구조화 데이터(스키마)와 콘텐츠를 보강하는 것으로 시작합니다. 다만 사이트 구조나 속도가 AI·검색 인용에 불리한 경우에는 개선이나 리빌딩을 권해 드릴 수 있으며, 이 역시 진단 결과를 근거로 함께 판단합니다.",
  },
  {
    q: "어떤 AI 엔진을 대상으로 하나요?",
    a: "ChatGPT·Gemini·Perplexity·Microsoft Copilot·Grok·구글 AI 개요·네이버 AI 등 주요 생성형 AI와 AI 검색 기능을 대상으로 합니다. 엔진마다 인용하는 출처와 방식이 달라, 각 엔진의 특성에 맞춰 콘텐츠와 데이터를 설계하고 AIRank로 함께 추적합니다.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-pad">
      {/* 온페이지 Q&A와 동일한 배열로 FAQPage 구조화 데이터 emit */}
      <JsonLd data={faqPageSchema(qas)} />

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          {/* 좌: 헤더 (데스크톱에서 sticky) — 첫 문장은 검색자에게 말 건다 */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl">
              자주 묻는 질문
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-on-dark-soft">
              AI 검색 최적화를 처음 검토할 때 가장 많이 받는 질문을 모았습니다.
              더 궁금한 점은 상담에서 직접 답해 드립니다.
            </p>
            <a href="#consult" className="btn btn-ghost mt-8">
              상담 신청
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>

          {/* 우: 접근성 아코디언 (native details/summary — 서버 컴포넌트 유지) */}
          <Reveal>
            <div className="divide-y divide-[rgba(201,169,106,0.14)] border-y border-line">
              {qas.map((qa) => (
                <details key={qa.q} className="group py-5">
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold [&::-webkit-details-marker]:hidden">
                    <h3 className="font-sans text-[16px] font-medium leading-normal text-on-dark">
                      {qa.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mono shrink-0 text-gold transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-on-dark-soft">
                    {qa.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
