import type { Metadata } from "next";
import Link from "next/link";
import {
  serviceSchema,
  howToSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "병원 마케팅 — AI가 우리 병원을 추천하게 만드는 의료 마케팅",
  description:
    "병원·의원·피부과·성형외과 전문 마케팅. 의료광고법을 준수하며 네이버·구글 검색과 ChatGPT·Gemini·Perplexity 같은 AI 답변에서 우리 병원이 추천되도록 설계합니다. 진단·전략·실행·추적 4단계.",
  keywords: [
    "병원 마케팅",
    "병원 마케팅 대행사",
    "의료 마케팅",
    "피부과 마케팅",
    "성형외과 마케팅",
    "병원 AI 마케팅",
    "병원 AIO",
    "더뷰미디어",
  ],
  alternates: { canonical: "/hospital-marketing" },
  openGraph: {
    title: "병원 마케팅 — AI가 우리 병원을 추천하게 | 더뷰미디어",
    description:
      "의료광고법을 준수하며 검색과 AI 답변에서 병원이 추천되게 만드는 병원 전문 마케팅.",
    type: "website",
    url: "/hospital-marketing",
  },
};

const steps = [
  { name: "1. 진단(Audit)", text: "ChatGPT·Gemini·네이버 등에서 현재 우리 병원이 진료과·지역 질의에 어떻게 노출되는지, 경쟁 병원 대비 위치는 어디인지 측정합니다." },
  { name: "2. 전략(Strategy)", text: "환자가 실제로 검색·질문하는 진료과·증상·지역 키워드를 분석해, 의료광고법을 지키는 범위에서 콘텐츠·구조화 데이터 전략을 설계합니다." },
  { name: "3. 실행(Execution)", text: "홈페이지·블로그·네이버 플레이스·영상 등 채널에 일관된 정보를 배포하고, FAQ·HowTo·Organization 스키마로 AI 가독성을 높입니다." },
  { name: "4. 추적(Tracking)", text: "AI Mention Score와 진료과·지역별 인용·노출을 추적하고, 데이터에 기반해 전략을 반복 개선합니다." },
];

const depts = [
  { name: "피부과", href: "/blog/dermatology-marketing-guide", desc: "시술별(보톡스·필러·리프팅) 키워드 전략" },
  { name: "성형외과", href: "/blog/plastic-surgery-marketing-guide", desc: "경쟁 치열한 시장의 AI·검색 통합 전략" },
  { name: "치과·한의원·일반의원", href: "/blog/hospital-aio-guide", desc: "진료과별 신뢰 시그널과 지역 노출" },
];

const faq = [
  {
    q: "의료광고법 때문에 병원 마케팅이 까다롭지 않나요?",
    a: "맞습니다. 의료광고는 사전심의 대상이고 금지표현이 많습니다. 그래서 더뷰미디어는 치료 효과 보장·환자 유인 등 금지표현을 배제하고, 정확한 진료 정보·절차 안내·자주 묻는 질문 중심으로 설계합니다. 규제 준수 콘텐츠가 오히려 AI가 신뢰하는 출처가 됩니다.",
  },
  {
    q: "어떤 채널을 함께 운영하나요?",
    a: "병원 홈페이지·블로그, 네이버 플레이스·지도, 검색(네이버·구글), 그리고 ChatGPT·Gemini·Perplexity 같은 생성형 AI를 하나의 전략으로 통합합니다. 지역 질의에 강한 플레이스와 AI 인용을 함께 노립니다.",
  },
  {
    q: "성과는 어떻게 측정하나요?",
    a: "진료과·지역별 검색 노출과 함께, AI 답변에서 우리 병원이 언급·추천되는지를 AI Mention Score로 추적합니다. 측정 방식과 산출 근거를 함께 공개합니다.",
  },
  {
    q: "작은 의원도 가능한가요?",
    a: "가능합니다. 오히려 경쟁이 덜한 지역·진료과는 AIO를 먼저 시작하면 선점 효과가 큽니다. 진단으로 우선순위 높은 키워드부터 단계적으로 확장하는 방식을 권합니다.",
  },
];

export default function HospitalMarketingPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "병원 마케팅", path: "/hospital-marketing" },
  ]);
  const service = serviceSchema({
    name: "병원 마케팅 (의료 마케팅)",
    description:
      "병원·의원·피부과·성형외과 등 의료기관이 의료광고법을 준수하며 검색과 생성형 AI 답변에서 추천되도록 만드는 의료 전문 마케팅 서비스.",
    serviceType: "병원 마케팅 / 의료 마케팅 / 의료 AIO",
    path: "/hospital-marketing",
  });
  const howto = howToSchema({
    name: "병원 마케팅 4단계 방법론",
    description: "진단 → 전략 → 실행 → 추적의 4단계로 병원의 검색·AI 노출을 설계합니다.",
    steps,
  });

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <JsonLd data={howto} />
      <JsonLd data={faqPageSchema(faq)} />

      {/* Hero */}
      <header className="bg-dark pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-sm font-bold mb-5">
            병원 마케팅 · 의료 AIO
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            AI가 <span className="text-gradient">우리 병원</span>을 추천하게
            만듭니다
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            환자는 이제 “○○ 잘하는 병원”을 검색창이 아니라 AI에게 묻습니다.
            의료광고법을 준수하며 네이버·구글 검색과 ChatGPT·Gemini·Perplexity
            답변에서 우리 병원이 추천되도록 설계합니다.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            무료 병원 AI 노출 진단받기
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* 규제 배너 */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-16">
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>의료광고법 준수 원칙:</strong> 모든 병원 콘텐츠는 의료법·의료광고
            심의 기준에 따라 치료 효과 보장·환자 유인·과장 표현을 배제하고,
            사실에 근거한 정보 제공으로 설계합니다.
          </p>
        </div>

        {/* 왜 바뀌었나 */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            병원 마케팅의 판이 바뀌었습니다
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            과거에는 검색 광고 상위 노출이 전부였습니다. 그러나 환자들이 ChatGPT·
            Gemini에게 “○○동 피부과 추천”, “흉터 잘 보는 병원”을 직접 묻기 시작하면서,
            <strong> AI 답변에 우리 병원이 포함되는지</strong>가 새로운 승부처가
            되었습니다. 이것이 병원 <strong>AIO(AI 최적화)</strong>입니다.
          </p>
          <Link href="/blog/hospital-aio-guide" className="text-primary font-semibold hover:underline">
            병원 AIO가 처음이라면 — 병원·의료 AIO 가이드 &rarr;
          </Link>
        </section>

        {/* 진료과별 */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">진료과별 대응</h2>
          <p className="text-gray-500 mb-8">진료과마다 환자 검색·AI 질의가 다릅니다. 각 특성에 맞춰 설계합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {depts.map((d) => (
              <Link key={d.name} href={d.href} className="block rounded-2xl border border-gray-100 p-6 hover:border-primary/20 hover:shadow-md transition-all">
                <h3 className="font-bold text-gray-900 mb-2">{d.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 통합 채널 */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">검색 + 플레이스 + AI, 하나로</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="font-bold text-gray-900 mb-2">검색(네이버·구글)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">진료과·증상·지역 키워드로 검색 상위와 AI 색인 기반을 동시에 확보합니다.</p>
            </div>
            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="font-bold text-gray-900 mb-2">네이버 플레이스·지도</h3>
              <p className="text-gray-600 text-sm leading-relaxed">지역 질의의 핵심. <Link href="/blog/hospital-naver-place-marketing" className="text-primary underline">플레이스 최적화</Link>로 로컬 신뢰 신호를 만듭니다.</p>
            </div>
            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="font-bold text-gray-900 mb-2">생성형 AI(AIO)</h3>
              <p className="text-gray-600 text-sm leading-relaxed">ChatGPT·Gemini·Perplexity 답변의 추천·인용 출처가 되도록 콘텐츠와 스키마를 설계합니다.</p>
            </div>
          </div>
        </section>

        {/* 방법론 */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">병원 마케팅 4단계 방법론</h2>
          <div className="space-y-5">
            {steps.map((s) => (
              <div key={s.name} className="rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 역량 — capability (실제 수치는 사용자가 입력) */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">왜 더뷰미디어인가</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">의료광고법 이해</h3>
              <p className="text-gray-600 text-sm leading-relaxed">심의 기준과 금지표현을 콘텐츠 설계 단계부터 반영합니다. <Link href="/blog/medical-ad-law-compliance-guide" className="text-primary underline">의료광고법 가이드</Link></p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">검색·플레이스·AI 통합</h3>
              <p className="text-gray-600 text-sm leading-relaxed">한 곳에서 모든 채널을 통합 운영해 진료과·지역 노출을 빈틈없이 메웁니다.</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-bold text-gray-900 mb-2">측정·투명성</h3>
              <p className="text-gray-600 text-sm leading-relaxed">AI Mention Score로 노출을 정량 추적하고 산출 근거를 공개합니다.</p>
            </div>
          </div>
          {/* TODO(게시 전): 보유한 실제 성과/규모 수치가 있으면 여기 시그니처 지표로 추가(예: 누적 협업 병원 수, 평균 노출 개선). 허위 수치 금지. */}
        </section>

        {/* FAQ */}
        <section className="mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">Q. {f.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">우리 병원은 AI에게 추천받고 있을까?</h2>
          <p className="text-gray-500 mb-6">진료과·지역 기준 AI 노출 진단 리포트를 무료로 받아보세요.</p>
          <a href="/#contact" className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
            무료 병원 AI 노출 진단받기
          </a>
        </div>
      </div>
    </>
  );
}
