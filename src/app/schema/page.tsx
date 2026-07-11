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
const service = getService("schema")!;
const TEL_HREF = `tel:${NAP.phoneE164}`;

const whatWeDo = [
  "Organization·LocalBusiness 노드로 상호·주소·전화·영업시간(NAP)을 기계가 읽게 구조화",
  "FAQPage·Service·Article 등 페이지 유형별 schema.org 마크업 설계",
  "@id로 노드를 연결해 흩어진 정보를 하나의 엔티티 그래프로 묶기",
  "JSON-LD를 서버 렌더링(SSR)으로 출력해 자바스크립트 없이도 크롤러가 읽도록 처리",
  "구조화 데이터 유효성 검증과 리치 결과·AI 인용 적합성 점검",
  "기존 마크업의 누락·오류·중복(@id 충돌) 진단과 정리",
];

const problem =
  "검색과 AI는 페이지의 글자만이 아니라 구조를 읽습니다. 구조화 데이터가 없으면 같은 업체 정보가 페이지마다 따로 인식돼, 신뢰가 쌓이지 않고 추천 근거로도 약합니다.";
const solution =
  "schema.org 그래프를 @id로 연결해 상호·서비스·위치를 한 개체로 묶습니다. AI가 추천 근거로 삼을 만한, 기계가 신뢰하는 구조를 만듭니다.";

const faq = [
  {
    q: "구조화 데이터(스키마)가 정확히 무엇인가요?",
    a: "페이지의 의미를 검색·AI가 이해하도록, 기계가 읽는 형식(주로 schema.org JSON-LD)으로 표기한 데이터입니다. 이 텍스트는 상호, 이건 주소, 이건 FAQ처럼 정보의 정체를 명시합니다.",
  },
  {
    q: "스키마를 넣으면 순위가 바로 오르나요?",
    a: "구조화 데이터 자체가 순위를 곧바로 올려 주지는 않습니다. 다만 검색·AI가 페이지를 정확히 이해하고 리치 결과·AI 인용 대상으로 삼을 가능성을 높이는 토대입니다.",
  },
  {
    q: "어떤 유형의 스키마가 필요한가요?",
    a: "업종과 페이지에 따라 다릅니다. 보통 Organization·LocalBusiness를 기본으로, 서비스 페이지엔 Service, 안내 페이지엔 FAQPage, 글에는 Article을 적용하고 @id로 연결합니다.",
  },
  {
    q: "우리 사이트에 이미 스키마가 있는데도 필요한가요?",
    a: "네. 중복·충돌(@id 미연결), 잘못된 유형, 누락이 흔합니다. SchemaWorks로 현재 상태를 진단한 뒤 빠지거나 어긋난 부분을 정리합니다.",
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

export default function ServiceSchemaPage() {
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
              사람도 <span className="text-gradient">AI</span>도 읽는 엔티티
              그래프를 설계합니다
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft">
              사람 눈에는 멀쩡한 홈페이지가, AI와 검색에는 정체불명일 수
              있습니다. schema.org 구조화 데이터로 ‘이 업체 = 이 서비스 = 이
              위치’를 기계가 하나의 개체로 이해하게 만듭니다.
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
              검색·AI가 신뢰하는 엔티티 그래프를 만들기 위해, 다음을 한 흐름으로
              설계합니다.
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
