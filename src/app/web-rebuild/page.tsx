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
const service = getService("web-rebuild")!;
const TEL_HREF = `tel:${NAP.phoneE164}`;

const whatWeDo = [
  "시맨틱 HTML 구조로 사람·검색·AI 에이전트 모두 읽기 좋은 마크업 구축",
  "연결된 schema.org 그래프(@id)로 엔티티 정합성 확보",
  "llms.txt·robots·sitemap을 갖춰 AI 크롤러가 색인하도록 설정",
  "핵심 웹 지표(속도·반응형·접근성) 기준으로 성능 정비",
  "기존 콘텐츠 이전·정보 구조 재설계와 내부링크 정리",
  "발행 후 진단으로 GEO 상태를 점검하고 보완",
];

const problem =
  "오래된 사이트는 구조가 검색·AI 기준과 어긋나 있는 경우가 많습니다. 페이지를 더해도 기계가 이해하지 못하면, 콘텐츠는 늘지만 보이지는 않습니다.";
const solution =
  "시맨틱 구조와 스키마 그래프, AI 크롤러 친화 설정을 토대로 사이트를 다시 짓습니다. 사람과 AI 에이전트 양쪽이 읽기 좋은 홈페이지가 GEO의 출발선입니다.";

const faq = [
  {
    q: "GEO 리빌딩은 일반 홈페이지 제작과 어떻게 다른가요?",
    a: "보기 좋은 디자인에 더해, 검색·AI가 읽는 구조(시맨틱 HTML·연결된 스키마·llms.txt·robots)를 설계 단계부터 반영하는 점이 다릅니다. 사람과 AI 에이전트 양쪽을 독자로 봅니다.",
  },
  {
    q: "기존 사이트를 꼭 갈아엎어야 하나요?",
    a: "항상 그렇지는 않습니다. SchemaWorks 진단으로 구조의 한계를 먼저 확인합니다. 부분 개선으로 충분하면 그렇게, 토대가 어긋났으면 리빌딩을 권합니다.",
  },
  {
    q: "콘텐츠와 검색 유입은 유지되나요?",
    a: "기존 콘텐츠를 이전하고 URL·리다이렉트·내부링크를 정리해 유입 손실을 최소화하도록 설계합니다. 색인 변화는 발행 후 추적해 보완합니다.",
  },
  {
    q: "제작 후에도 관리가 되나요?",
    a: "발행 후 SchemaWorks로 GEO 상태를 점검하고, 콘텐츠 운영이 필요하면 AutoPost 기반 자동 발행으로 이어갈 수 있습니다.",
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

export default function ServiceWebRebuildPage() {
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
            </div>
            <h1 className="mt-5 max-w-3xl text-3xl font-extrabold leading-[1.15] text-ink sm:text-4xl lg:text-[3rem]">
              {service.name},
              <br />
              사람과 <span className="text-gradient">AI</span>가 함께 읽는
              사이트로 새로 짓습니다
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft">
              오래된 사이트가 검색에도 AI에도 닿지 않는다면, 디자인이 아니라
              구조의 문제일 수 있습니다. 시맨틱 HTML·스키마 그래프·AI 크롤러 친화
              구조로 사이트를 다시 짓습니다.
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
              사람과 AI가 함께 읽는 사이트를 짓기 위해, 다음을 한 흐름으로
              구축합니다.
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
                직접 개발한 도구로 진단하고, 실행하고, 증명합니다.
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
