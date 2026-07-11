import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { getService } from "@/lib/services";
import { getProduct, type Product } from "@/lib/products";
import { NAP } from "@/lib/nap";
import { serviceSchema, breadcrumbSchema, faqPageSchema } from "@/lib/schema";

// 데이터는 lib에서만 import (NAP/services 하드코딩 금지).
const service = getService("video")!;
const TEL_HREF = `tel:${NAP.phoneE164}`;

const whatWeDo = [
  "유튜브 쇼츠·인스타그램 릴스 등 숏폼 기획·제작·운영",
  "검색·AI 질의 의도에 맞춘 주제와 자막·설명 구조 설계",
  "멀티채널 업로드와 발행 일정 운영",
  "영상 메타데이터(제목·설명·태그)를 검색·AI 친화적으로 정리",
  "자체 채널(YouTube·Instagram)과 연계한 일관된 메시지 운영",
  "도달·반응 데이터를 기준으로 주제를 반복 개선",
];

const problem =
  "텍스트만으로는 닿지 않는 사용자가 많고, Gemini처럼 영상을 학습하는 AI 엔진이 늘고 있습니다. 영상이 비어 있으면 그만큼 추천 신호도 비어 있습니다.";
const solution =
  "숏폼으로 사람에게는 도달을, AI에게는 학습·추천 신호를 동시에 만듭니다. 멀티채널 운영으로 한 번의 제작을 여러 접점으로 확장합니다.";

const faq = [
  {
    q: "숏폼이 AI 검색과 무슨 상관인가요?",
    a: "Gemini 등 일부 AI 엔진은 영상도 학습·참조합니다. 숏폼은 사람에게 도달하는 동시에, 영상으로 학습되는 AI 엔진에 브랜드 신호를 더하는 채널이 됩니다.",
  },
  {
    q: "어떤 채널에 올리나요?",
    a: "유튜브 쇼츠·인스타그램 릴스를 중심으로 운영합니다. 채널별 형식에 맞춰 한 번 만든 영상을 여러 접점으로 확장합니다.",
  },
  {
    q: "출연자나 촬영 장비가 꼭 필요한가요?",
    a: "주제와 포맷에 따라 다릅니다. 기존 자료·이미지·자막 중심 포맷도 가능하며, 지속 운영할 수 있는 형태로 함께 설계합니다.",
  },
  {
    q: "성과는 어떻게 보나요?",
    a: "채널별 도달·반응 데이터를 기준선과 비교해 추적하고, 반응이 좋은 주제를 반복·확장합니다. 측정 근거를 함께 공유합니다.",
  },
];

export const metadata: Metadata = {
  title: service.name,
  description: service.description,
  alternates: { canonical: service.href },
  openGraph: {
    title: `${service.name} | ${NAP.name}`,
    description: service.description,
    type: "website",
    url: service.href,
  },
};

export default function ServiceVideoPage() {
  const tools = (service.poweredBy ?? [])
    .map((s) => getProduct(s))
    .filter((p): p is Product => Boolean(p));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.description,
          serviceType: service.serviceType,
          path: service.href,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "홈", path: "/" },
          { name: service.name, path: service.href },
        ])}
      />
      <JsonLd data={faqPageSchema(faq)} />

      <Navbar />

      <main id="main" className="paper-section">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-line bg-paper pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
          <div className="container-x">
            <p className="eyebrow">// SERVICE</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="pill">{service.serviceType}</span>
              <span className="pill">대구 · 대한민국</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.15] text-ink sm:text-4xl lg:text-[3rem]">
              {service.name},
              <br />
              영상으로 사람과 <span className="text-gradient">AI 추천
              신호</span>를 대구에서 함께 키웁니다
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft">
              고객은 글보다 짧은 영상을 먼저 봅니다. 유튜브 쇼츠·인스타 릴스로
              도달을 넓히고, 영상으로 학습되는 AI 엔진의 추천 신호까지 함께
              강화합니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#contact" className="btn btn-primary">
                무료 AI 진단
              </a>
              <a
                href={TEL_HREF}
                aria-label={`전화 상담 ${NAP.phoneDisplay}`}
                className="btn btn-ghost"
              >
                <PhoneIcon />
                {NAP.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* 무엇을 하는가 */}
        <section
          aria-labelledby="what-heading"
          className="section-pad bg-surface"
        >
          <div className="container-x">
            <p className="eyebrow">// WHAT WE DO</p>
            <h2 id="what-heading" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
              무엇을 하는가
            </h2>
            <p className="mt-3 max-w-2xl text-text-soft">
              숏폼으로 도달과 추천 신호를 함께 키우기 위해, 다음을 한 흐름으로
              운영합니다.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {whatWeDo.map((item) => (
                <li key={item} className="card flex items-start gap-3 p-5">
                  <CheckIcon />
                  <span className="leading-relaxed text-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 왜 필요한가 */}
        <section aria-labelledby="why-heading" className="section-pad bg-paper">
          <div className="container-x">
            <p className="eyebrow">// WHY NOW</p>
            <h2 id="why-heading" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
              왜 필요한가
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="card p-7">
                <span className="mono text-xs font-semibold uppercase tracking-[0.16em] text-text-soft">
                  // 지금의 문제
                </span>
                <p className="mt-4 leading-relaxed text-text">{problem}</p>
              </div>
              <div className="card border-brand/40 bg-brand/[0.04] p-7">
                <span className="mono text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  // 우리의 해결
                </span>
                <p className="mt-4 leading-relaxed text-text">{solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 관련 자체 도구 */}
        {tools.length > 0 && (
          <section
            aria-labelledby="tools-heading"
            className="dark-section grid-bg section-pad"
          >
            <div className="container-x">
              <p className="mono text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                // OUR TOOLS
              </p>
              <h2 id="tools-heading" className="mt-3 text-2xl font-extrabold sm:text-3xl">
                이 서비스를 실행하는 자체 도구
              </h2>
              <p className="mt-3 max-w-2xl text-on-dark-soft">
                말이 아니라, 직접 만들어 쓰는 도구로 진단하고 실행합니다.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {tools.map((p) => (
                  <ToolCard key={p.slug} product={p} selfHref={service.href} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="section-pad bg-surface">
          <div className="container-x">
            <p className="eyebrow">// FAQ</p>
            <h2 id="faq-heading" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
              자주 묻는 질문
            </h2>
            <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-paper">
              {faq.map((f, i) => (
                <details
                  key={f.q}
                  className={`group ${i > 0 ? "border-t border-line" : ""}`}
                >
                  <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-ink [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand">
                    <span>{f.q}</span>
                    <PlusIcon />
                  </summary>
                  <div className="px-6 pb-6 leading-relaxed text-text-soft">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>

      <Footer />
    </>
  );
}

/* ---- 도구 카드 (내부 자기참조는 링크 대신 라벨) ---- */
function ToolCard({ product, selfHref }: { product: Product; selfHref: string }) {
  const isSelf = !product.external && product.url === selfHref;
  const body = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cyan">
          {product.role}
        </span>
        {!isSelf && <ArrowIcon external={product.external} />}
      </div>
      <h3 className="mt-4 text-lg font-bold text-white">{product.name}</h3>
      <p className="mt-1.5 text-sm text-on-dark-soft">{product.tagline}</p>
      <ul className="mt-4 space-y-1.5">
        {product.features.slice(0, 2).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-on-dark-soft">
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-bright">
        {isSelf ? "이 페이지에서 다루는 도구" : product.urlLabel}
        {!isSelf && <ArrowIcon external={product.external} small />}
      </span>
    </>
  );

  if (isSelf) {
    return <div className="card-dark p-6">{body}</div>;
  }
  return (
    <a
      href={product.url}
      target={product.external ? "_blank" : undefined}
      rel={product.external ? "noopener noreferrer" : undefined}
      className="card-dark block p-6 transition-colors hover:border-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bright"
    >
      {body}
    </a>
  );
}

/* ---- inline icons (stroke 1.5–2, currentColor) ---- */
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0 text-brand">
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-text-soft transition-transform duration-200 group-open:rotate-45">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
function ArrowIcon({ external, small }: { external: boolean; small?: boolean }) {
  const s = small ? 16 : 18;
  return external ? (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ) : (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
