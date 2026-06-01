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
  title: "AIO(AI 최적화) 서비스 — AI가 브랜드를 추천하게 만드는 법",
  description:
    "AIO(AI Optimization) 전문 서비스. ChatGPT·Gemini·Perplexity·Copilot이 귀사를 업계 1위로 추천하도록 진단·전략·실행·추적 4단계로 설계합니다. 6대 플랫폼 멀티채널 운영.",
  keywords: [
    "AIO",
    "AI 최적화",
    "AIO 서비스",
    "AI 마케팅",
    "ChatGPT 브랜드 추천",
    "생성형 엔진 최적화",
    "GEO",
    "더뷰미디어",
  ],
  alternates: { canonical: "/aio" },
  openGraph: {
    title: "AIO(AI 최적화) 서비스 | 더뷰미디어",
    description:
      "ChatGPT·Gemini·Perplexity가 귀사를 추천하도록 설계하는 AIO 전문 서비스.",
    type: "website",
    url: "/aio",
  },
};

const steps = [
  {
    name: "1. 진단(Audit) — AI 브랜드 인지도 진단",
    text: "주요 AI 엔진이 현재 우리 브랜드를 어떻게 인식·언급하는지 측정해 AI Mention 기준선과 경쟁 위치를 파악합니다.",
  },
  {
    name: "2. 전략(Strategy) — 키워드 장악 설계",
    text: "고객이 실제로 AI에 묻는 질의를 분석해, 우리 브랜드가 추천 출처로 선택되도록 키워드·콘텐츠·구조화 데이터 전략을 설계합니다.",
  },
  {
    name: "3. 실행(Execution) — 멀티채널 콘텐츠 운영",
    text: "웹·블로그·영상·SNS 등 6대 플랫폼에 일관된 브랜드 메시지를 배포하고 schema.org 구조화 데이터로 AI 가독성을 높입니다.",
  },
  {
    name: "4. 추적(Tracking) — 실시간 성과 추적",
    text: "AI Mention Score와 인용 여부를 지속 추적하고, 데이터에 기반해 전략을 반복 개선합니다.",
  },
];

const engines = [
  { name: "ChatGPT", href: "/blog/chatgpt-brand-recommendation" },
  { name: "Google Gemini · AI 오버뷰", href: "/blog/gemini-ai-overview-guide" },
  { name: "Perplexity", href: "/blog/perplexity-citation-optimization" },
  { name: "Microsoft Copilot", href: "/blog/copilot-visibility-guide" },
  { name: "Grok · X", href: "/blog/grok-x-ai-strategy" },
  { name: "네이버 AI · 통합검색", href: "/blog/naver-seo-aio-integration" },
];

const verticals = [
  { name: "병원·의료", href: "/hospital-marketing" },
  { name: "로펌·법률", href: "/blog/law-firm-aio-guide" },
  { name: "프랜차이즈", href: "/blog/franchise-aio-guide" },
  { name: "이커머스·쇼핑몰", href: "/blog/ecommerce-aio-guide" },
  { name: "교육·학원", href: "/blog/education-aio-guide" },
];

const faq = [
  {
    q: "AIO는 SEO와 무엇이 다른가요?",
    a: "SEO가 검색 결과 상위 노출을 목표로 한다면, AIO는 생성형 AI가 답변을 만들 때 인용·추천하는 '출처'가 되는 것을 목표로 합니다. 측정 지표도 키워드 순위가 아니라 AI Mention Score와 인용 빈도입니다.",
  },
  {
    q: "어떤 AI 엔진을 대상으로 하나요?",
    a: "ChatGPT, Google Gemini·AI 오버뷰, Perplexity, Microsoft Copilot, Grok, 그리고 네이버 등 국내외 주요 생성형 엔진을 함께 대상으로 합니다. 엔진들이 참조하는 데이터 소스가 상당 부분 겹치므로 통합 전략이 효과적입니다.",
  },
  {
    q: "성과는 어떻게 검증하나요?",
    a: "AI Mention Score와 엔진별 인용 여부를 실시간 대시보드로 추적하고, 측정 방식과 산출 근거를 함께 공개합니다. 추측이 아니라 데이터로 진행 상황을 확인할 수 있습니다.",
  },
  {
    q: "특정 업종도 가능한가요?",
    a: "병원·법률·프랜차이즈·이커머스·교육 등 업종별 특성과 광고 규제를 고려한 맞춤 전략을 제공합니다. 규제가 있는 업종은 관련 광고규정 준수를 전제로 콘텐츠를 설계합니다.",
  },
];

export default function AioServicePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "AIO 서비스", path: "/aio" },
  ]);
  const service = serviceSchema({
    name: "AIO(AI 최적화) 서비스",
    description:
      "ChatGPT·Gemini·Perplexity·Copilot 등 생성형 AI가 브랜드를 추천 출처로 선택하도록 설계하는 AI 최적화 컨설팅·운영 서비스.",
    serviceType: "AIO 컨설팅 / 생성형 엔진 최적화(GEO)",
    path: "/aio",
  });
  const howto = howToSchema({
    name: "AIO 도입 4단계 방법론",
    description: "진단 → 전략 → 실행 → 추적의 4단계로 AI 추천 노출을 설계합니다.",
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
            AIO Service
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            AI가 당신의 브랜드를 <span className="text-gradient">추천하게</span>{" "}
            만듭니다
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            AIO(AI Optimization)는 ChatGPT·Gemini·Perplexity·Copilot 같은 생성형
            AI가 답변을 만들 때, 우리 브랜드를 추천 출처로 선택하게 만드는
            최적화입니다. 진단부터 실시간 추적까지 4단계로 설계합니다.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            무료 AI 인식도 진단받기
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* What is AIO */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
            AIO란 무엇인가
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            고객은 이제 검색창 대신 AI에게 직접 묻습니다. &ldquo;이 업종에서
            추천할 만한 곳은?&rdquo; AI가 우리를 추천하느냐 경쟁사를 추천하느냐가
            매출을 가릅니다. AIO는 이 답변을 우연이 아닌{" "}
            <strong>전략의 결과</strong>로 만드는 작업입니다.
          </p>
          <Link href="/blog/what-is-aio" className="text-primary font-semibold hover:underline">
            AIO 개념 완벽 가이드 읽기 &rarr;
          </Link>
        </section>

        {/* 4-step methodology */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
            AIO 도입 4단계 방법론
          </h2>
          <div className="space-y-5">
            {steps.map((s) => (
              <div key={s.name} className="rounded-2xl border border-gray-100 p-6 bg-white">
                <h3 className="font-bold text-gray-900 mb-2">{s.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/blog/aio-4step-methodology" className="text-primary font-semibold hover:underline">
              4단계 방법론 자세히 보기 &rarr;
            </Link>
          </div>
        </section>

        {/* Engines */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            대응 엔진
          </h2>
          <p className="text-gray-500 mb-8">
            주요 생성형 AI 엔진 전반을 통합 대상으로 합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {engines.map((e) => (
              <Link
                key={e.name}
                href={e.href}
                className="block p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all text-center font-semibold text-gray-800"
              >
                {e.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Verticals */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            업종별 AIO
          </h2>
          <p className="text-gray-500 mb-8">
            업종 특성과 광고 규제를 고려한 맞춤 전략을 제공합니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {verticals.map((v) => (
              <Link
                key={v.name}
                href={v.href}
                className="block p-5 rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all text-center font-semibold text-gray-800"
              >
                {v.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Why us — capability/methodology, no fabricated metrics */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
            왜 더뷰미디어인가
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="font-bold text-gray-900 mb-2">6대 엔진 통합 대응</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                특정 엔진에 치우치지 않고 ChatGPT·Gemini·Perplexity·Copilot·Grok·네이버를
                하나의 전략으로 묶어 운영합니다.
              </p>
            </div>
            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="font-bold text-gray-900 mb-2">공개된 4단계 방법론</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                진단·전략·실행·추적의 절차와 산출 근거를 투명하게 공개합니다.
                추측이 아니라 검증 가능한 과정으로 진행합니다.
              </p>
            </div>
            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="font-bold text-gray-900 mb-2">실시간 성과 대시보드</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI Mention Score와 인용 여부를 실시간으로 추적해, 데이터에 기반한
                의사결정을 지원합니다.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
            자주 묻는 질문
          </h2>
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            우리 브랜드는 AI에게 추천받고 있을까?
          </h2>
          <p className="text-gray-500 mb-6">
            전문 컨설턴트가 분석한 AI Mention 리포트를 무료로 받아보세요.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            무료 AI 인식도 진단받기
          </a>
        </div>
      </div>
    </>
  );
}
