import Link from "next/link";
import { NAP } from "@/lib/nap";
import { SIGNATURE_FACTS } from "@/lib/brand";
import { faqPageSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ConsultForm from "@/components/ConsultForm";

/**
 * /rebuild — schemaworks 퍼널 전용 세일즈 랜딩 (noindex).
 * 유입자는 7일 AI 추적에서 "미언급"을 방금 데이터로 확인한 상태.
 * 문제 재설득 없이 원인(구조) → 엔트리(리빌딩) → 업셀(AIO 통합)로 직행한다.
 */

const STRUCTURAL_GAPS = [
  {
    title: "구조화 데이터 부재",
    desc: "JSON-LD 그래프가 없거나 끊어져 있으면 AI는 업체명·진료과목·위치를 확신하지 못하고, 확신하지 못하는 정보는 인용하지 않습니다.",
  },
  {
    title: "시맨틱 구조 붕괴",
    desc: "이미지와 div로만 지어진 페이지는 사람 눈에는 완성이지만, AI 크롤러에게는 제목도 본문도 없는 빈 문서입니다.",
  },
  {
    title: "AI 크롤러 신호 없음",
    desc: "llms.txt·robots·sitemap이 AI 봇을 안내하지 않으면, 읽으러 온 엔진도 무엇을 읽어야 할지 모른 채 떠납니다.",
  },
];

// 구매자 관점 어미("~됩니다") 7개 — 판매자 관점 명사 나열 금지
const DELIVERABLES = [
  "AI가 당신의 업종·위치·강점을 정확히 읽을 수 있게 됩니다 (연결된 JSON-LD 그래프)",
  "이미지 속에 갇혀 있던 내용이 AI가 인용할 수 있는 문서가 됩니다 (시맨틱 구조)",
  "읽으러 온 AI 크롤러가 무엇을 읽어야 할지 안내받게 됩니다 (llms.txt · robots · sitemap)",
  "검색 결과·카톡 공유·AI 답변 어디서든 같은 얼굴로 보이게 됩니다 (메타 · OG 정비)",
  "속도와 모바일 사용성 점수가 개선됩니다 (Core Web Vitals)",
  "기존 디자인과 주소는 그대로 — 방문자는 아무 변화도 느끼지 못합니다",
  "완료 후 같은 기준의 재진단 리포트로 전후 점수를 직접 확인하게 됩니다",
];

const PROCESS = [
  { step: "01", title: "리포트 인계", desc: "받으신 진단·추적 리포트를 그대로 인계받아 감점 항목별 수술 계획을 세웁니다." },
  { step: "02", title: "구조 설계", desc: "기존 디자인과 콘텐츠는 유지한 채, AI가 읽는 문서 구조와 데이터 레이어를 설계합니다." },
  { step: "03", title: "리빌딩", desc: "2주 안에 구축을 마칩니다. 운영 중인 사이트는 멈추지 않습니다." },
  { step: "04", title: "재진단 검증", desc: "같은 진단 기준으로 전후 점수를 비교해 결과를 문서로 확인시켜 드립니다." },
];

const FAQ = [
  {
    q: "홈페이지를 새로 만드는 건가요?",
    a: "아닙니다. 기존 홈페이지의 디자인과 콘텐츠는 유지한 채, AI와 검색엔진이 읽는 내부 구조(시맨틱 마크업·구조화 데이터·크롤러 신호)를 정비하는 작업입니다. 운영 중단 없이 진행됩니다.",
  },
  {
    q: "기간과 비용은 어떻게 되나요?",
    a: "표준 리빌딩은 착수 후 2주 내 완료됩니다. 비용은 200만원대부터 시작하며, 페이지 규모와 현재 상태에 따라 상담 후 견적을 드립니다.",
  },
  {
    q: "리빌딩만 하면 AI가 바로 추천하나요?",
    a: "리빌딩은 AI가 읽고 인용할 수 있는 상태를 만드는 출발선입니다. 언급 여부는 콘텐츠 자산과 축적 시간의 영향을 함께 받으므로, 리빌딩 후 추적·콘텐츠까지 이어지는 AIO 프로그램을 함께 안내드립니다. 확정적 결과를 약속하는 방식으로는 일하지 않습니다.",
  },
  {
    q: "어떤 업종이든 가능한가요?",
    a: "병원·법률 등 전문직을 중심으로 하되, 로컬 기반 사업 전반을 다룹니다. 의료광고법 등 업종 규제를 준수하는 범위에서 작업합니다.",
  },
  {
    q: "진행하려면 무엇이 필요한가요?",
    a: "홈페이지 관리 권한(FTP 또는 CMS 계정) 확인 후 리빌딩 가능 여부를 먼저 판단해 드립니다. 불가능한 구조라면 착수 전에 정확히 말씀드립니다.",
  },
];

function GoldCheck() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
      aria-hidden
    >
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RebuildPage() {
  return (
    <main>
      <JsonLd data={faqPageSchema(FAQ)} />

      {/* 간소 헤더 */}
      <header className="border-b border-line">
        <div className="container-x flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg font-bold tracking-tight text-[#f5f1e6]"
          >
            더뷰미디어
          </Link>
          <a
            href={`tel:${NAP.phoneE164}`}
            className="mono text-sm text-on-dark-soft transition-colors hover:text-gold"
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </header>

      {/* 1. 훅 — 미끄럼틀: 첫 문장의 목적은 둘째 문장을 읽게 하는 것 */}
      <section className="section-pad relative">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-6">Structural Rebuilding</p>
          <h1 className="text-4xl leading-[1.22] sm:text-5xl">
            잠재 고객이 AI에게 물었을 때,
            <br />
            당신의 이름은 <em className="not-italic text-gold">몇 번</em>{" "}
            나왔습니까.
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-on-dark-soft">
            그 숫자를 이미 보셨을 겁니다. 7일간, 잠재 고객의 질문에 AI가 다른
            곳을 추천하는 동안 당신의 홈페이지는 답변에 등장할 기회조차 얻지
            못했습니다. 콘텐츠가 부족해서가 아닙니다 — AI가 읽을 수 없는{" "}
            <strong className="font-semibold text-on-dark">구조</strong> 위에
            콘텐츠가 올라가 있기 때문입니다.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-on-dark-soft">
            지금 매출에는 아무 이상이 없어 보일 수 있습니다. 그래서 더
            위험합니다. 검색이 AI로 옮겨가는 동안, 보이지 않는 자리는 소리 없이
            다른 이름으로 채워지고 있습니다.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#consult" className="btn btn-primary">
              내 리포트 기준으로 상담받기
            </a>
            <a href={`tel:${NAP.phoneE164}`} className="btn btn-ghost">
              전화 상담 {NAP.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* 2. 원인 — 적은 경쟁사가 아니라 '낡은 구조' (공동의 적) */}
      <section className="dark-section section-pad">
        <div className="container-x">
          <p className="eyebrow mb-4">Why Invisible</p>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            수백만 원을 들인 홈페이지가
            <br />
            AI에게는 빈 문서인 이유
          </h2>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-3">
            {STRUCTURAL_GAPS.map((g, i) => (
              <div key={g.title} className="bg-ink-soft p-8">
                <p className="mono mb-4 text-sm text-gold-dim">
                  0{i + 1}
                </p>
                <h3 className="mb-3 text-lg">{g.title}</h3>
                <p className="text-[15px] leading-relaxed text-on-dark-soft">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-on-dark-soft">
            받으신 진단 리포트의 감점 항목들이 바로 이 세 가지의 구체적 증상입니다.
          </p>
          <p className="mt-6 max-w-2xl border-l-2 border-gold pl-5 text-[16px] leading-relaxed text-on-dark">
            우리는 검색 순위를 논하려는 것이 아닙니다.{" "}
            <strong className="font-semibold">
              AI가 당신을 건너뛰게 만드는 구조를 없애려는 것
            </strong>
            입니다.
          </p>
        </div>
      </section>

      {/* 3. 엔트리 상품 */}
      <section className="section-pad">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow mb-4">The Entry</p>
            <h2 className="text-3xl leading-snug sm:text-4xl">
              새로 만들지 않습니다.
              <br />
              <span className="text-gold">AI가 읽도록</span> 다시 짓습니다.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-on-dark-soft">
              홈페이지 리빌딩은 기존 디자인과 콘텐츠를 유지한 채 내부 구조만
              수술하는 작업입니다. 방문자에게는 같은 사이트, AI에게는 전혀 다른
              문서가 됩니다.
            </p>
            <div className="mt-10 flex items-baseline gap-4 border-t border-line pt-8">
              <div>
                <p className="mono text-[13px] text-on-dark-soft">기간</p>
                <p className="stat-num mt-1 text-3xl text-[#f5f1e6]">2주</p>
              </div>
              <div className="ml-8">
                <p className="mono text-[13px] text-on-dark-soft">비용</p>
                <p className="stat-num mt-1 text-3xl text-[#f5f1e6]">
                  200만원대<span className="text-lg text-on-dark-soft">부터</span>
                </p>
                <p className="mt-1 text-[13px] text-on-dark-soft">규모별 견적 · 상담 후 확정</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-on-dark-soft">
              한 달 검색광고비 수준의 일회성 투자입니다. 광고는 끄는 순간
              사라지지만, 구조는 광고가 꺼진 뒤에도 남아서 일합니다.
            </p>
          </div>
          <div className="card p-8">
            <p className="mono mb-5 text-[13px] tracking-wider text-gold">
              2주 후, 이렇게 달라집니다
            </p>
            <ul className="space-y-3.5">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3 text-[15px] leading-relaxed">
                  <GoldCheck />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. 프로세스 */}
      <section className="dark-section section-pad">
        <div className="container-x">
          <p className="eyebrow mb-4">Process</p>
          <h2 className="text-3xl sm:text-4xl">리포트에서 재진단까지, 2주</h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-on-dark-soft">
            완료의 기준은 우리의 감이 아니라 진단 점수입니다. 착수 전과 같은
            22개 항목을 다시 통과해야 끝난 것으로 봅니다.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="border-t border-line pt-6">
                <p className="mono text-sm text-gold">{p.step}</p>
                <h3 className="mt-3 text-lg">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-on-dark-soft">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 업셀 — AIO 통합 프로그램 */}
      <section className="section-pad">
        <div className="container-x">
          <p className="eyebrow mb-4">Beyond Rebuilding</p>
          <h2 className="max-w-2xl text-3xl leading-snug sm:text-4xl">
            읽히는 것은 출발선입니다.
            <br />
            추천받는 것이 목적지입니다.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <p className="mono text-[13px] tracking-wider text-on-dark-soft">
                ENTRY
              </p>
              <h3 className="mt-3 text-2xl">홈페이지 리빌딩</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-on-dark-soft">
                AI가 읽고 인용할 수 있는 구조를 만듭니다. 2주 완료, 재진단
                리포트로 검증.
              </p>
              <ul className="mt-6 space-y-2.5 text-[14px] text-on-dark-soft">
                <li className="flex gap-2.5"><GoldCheck />구조 수술 + 데이터 레이어</li>
                <li className="flex gap-2.5"><GoldCheck />AI 크롤러 신호 3종</li>
                <li className="flex gap-2.5"><GoldCheck />전후 점수 비교 리포트</li>
              </ul>
            </div>
            <div className="card-dark relative p-8">
              <p className="mono text-[13px] tracking-wider text-gold">
                RETAINED — AIO 통합 프로그램
              </p>
              <h3 className="mt-3 text-2xl">
                리빌딩 <span className="text-gold">+ 추적 · 콘텐츠 · 인용 자산</span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-on-dark-soft">
                리빌딩으로 기반을 만들고, 자체 도구로 매달 언급을 측정하며
                인용될 콘텐츠 자산을 쌓아가는 연간 프로그램입니다. 읽히는
                상태에 만족하지 않고, 인용되는 상태까지 함께 갑니다.
              </p>
              <ul className="mt-6 space-y-2.5 text-[14px] text-on-dark-soft">
                <li className="flex gap-2.5"><GoldCheck />AIRank — 5개 AI 엔진 언급 추적</li>
                <li className="flex gap-2.5"><GoldCheck />질의어 설계 + 인용형 콘텐츠 제작·발행</li>
                <li className="flex gap-2.5"><GoldCheck />월간 리포트 · 분기 전략 리뷰</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-on-dark-soft">
            상담 시 현재 상태 기준으로 두 가지 경로의 견적을 함께 드립니다.
          </p>
        </div>
      </section>

      {/* 6. 실증 — 도구 = 포트폴리오 */}
      <section className="dark-section grid-bg section-pad relative">
        <div className="container-x">
          <p className="eyebrow mb-4">Why Us</p>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">
            방법론을 소프트웨어로 증명합니다
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-on-dark-soft">
            진단·추적·발행 도구를 자체 개발해 실무에 씁니다. 방금 받아보신 진단
            리포트와 7일 추적이 그 도구의 실물입니다.
          </p>
          <p className="mt-6 max-w-xl border-l-2 border-gold pl-5 text-[16px] leading-relaxed text-on-dark">
            그리고 약속 하나 — 리빌딩이 필요 없는 사이트에는 리빌딩을 권하지
            않습니다. 구조를 열어본 뒤, 필요 없다면 그렇게 말씀드립니다.
          </p>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-3">
            {SIGNATURE_FACTS.map((f) => (
              <div key={f.label} className="bg-ink-soft p-8">
                <p className="stat-num text-4xl text-gold">
                  {f.value}
                  <span className="text-xl">{f.unit}</span>
                </p>
                <p className="mt-2 font-medium text-on-dark">{f.label}</p>
                <p className="mt-1 text-[13px] text-on-dark-soft">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-3xl">자주 묻는 질문</h2>
          <div className="mt-10 divide-y divide-[rgba(201,169,106,0.14)] border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-on-dark">
                  {f.q}
                  <span className="mono shrink-0 text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-on-dark-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 상담 폼 */}
      <section id="consult" className="dark-section section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_3fr]">
          <div>
            <p className="eyebrow mb-4">Consultation</p>
            <h2 className="text-3xl leading-snug sm:text-4xl">
              리포트를 가지고
              <br />
              오시면 됩니다
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-on-dark-soft">
              받으신 7일 기록을 함께 다시 보는 것부터 시작합니다. 그 데이터를
              기준으로 리빌딩 가능 여부와 견적을 안내드리고, 불가능한 구조라면
              착수 전에 정확히 말씀드립니다.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-on-dark-soft">
              품질을 위해 동시 진행 건수를 제한하고 있습니다 — 착수 가능
              시점은 상담에서 안내드립니다.
            </p>
            <div className="mt-8 space-y-1.5 border-t border-line pt-6 text-[14px] text-on-dark-soft">
              <p className="font-medium text-on-dark">{NAP.name}</p>
              <p>{NAP.address.full}</p>
              <p>
                <a href={`tel:${NAP.phoneE164}`} className="mono hover:text-gold">
                  {NAP.phoneDisplay}
                </a>
                {" · "}
                {NAP.hoursDisplay} · {NAP.hoursClosed}
              </p>
            </div>
          </div>
          <div>
            <ConsultForm defaultMessage="스키마웍스 진단을 받았습니다. 리빌딩 상담을 원합니다." />
          </div>
        </div>
      </section>

      {/* 간소 푸터 */}
      <footer className="border-t border-line py-8">
        <div className="container-x flex flex-col items-start justify-between gap-3 text-[13px] text-on-dark-soft sm:flex-row">
          <p>
            © {new Date().getFullYear()} {NAP.name} ({NAP.alternateName})
          </p>
          <p>
            {NAP.address.full} ·{" "}
            <a href={`tel:${NAP.phoneE164}`} className="mono hover:text-gold">
              {NAP.phoneDisplay}
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
