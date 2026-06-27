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
const service = getService("seo")!;
const TEL_HREF = `tel:${NAP.phoneE164}`;

const whatWeDo = [
  "온페이지 SEO — 제목·메타·헤딩·내부링크 구조를 검색 의도에 맞게 정비",
  "기술 SEO — 색인·사이트맵·robots·속도·모바일·canonical 점검과 개선",
  "네이버 플레이스 최적화 — 업체 정보·카테고리·리뷰 신호의 정합성 정리",
  "네이버 블로그·검색 노출 — 키워드 의도에 맞춘 콘텐츠 구조 설계",
  "구조화 데이터 연계 — 검색이 페이지를 하나의 엔티티로 이해하도록 스키마 연결",
  "색인·순위 추적 — 발행 후 색인 요청과 순위 변화를 지속 모니터링",
];

const problem =
  "검색 사용자는 첫 페이지 밖을 거의 보지 않습니다. 게다가 구글과 네이버는 평가 방식이 달라, 한쪽만 맞추면 다른 쪽에서 사라지기 쉽습니다. AI 검색이 늘어도 그 답변의 상당수는 여전히 검색 색인을 근거로 합니다.";
const solution =
  "온페이지·기술 SEO로 검색이 읽기 좋은 구조를 만들고, 네이버 플레이스·블로그로 지역과 전국 의도를 모두 덮습니다. 전통 검색의 유입 기반이 단단해야 AI 추천의 토대도 단단해집니다.";

const faq = [
  {
    q: "SEO와 AIO(AI 검색 최적화)는 무엇이 다른가요?",
    a: "SEO는 구글·네이버 검색 결과에서 찾기 쉽게 만드는 작업이고, AIO는 생성형 AI 답변에서 인용·추천되도록 만드는 작업입니다. 두 작업은 색인·구조화 데이터 등 토대를 상당 부분 공유하므로 함께 진행하면 효율적입니다.",
  },
  {
    q: "구글과 네이버를 같이 최적화할 수 있나요?",
    a: "네. 두 엔진은 평가 방식이 다르지만, 정확한 정보 구조와 구조화 데이터라는 토대는 공통입니다. 온페이지·기술 SEO는 공통으로 정비하고, 네이버는 플레이스·블로그 영역을 별도로 다룹니다.",
  },
  {
    q: "효과는 어떻게 확인하나요?",
    a: "색인 여부, 검색 노출·순위 변화, 유입 추이를 기준선과 비교해 추적합니다. 측정 방식과 근거를 함께 공유하므로 추측이 아니라 데이터로 진행 상황을 확인할 수 있습니다.",
  },
  {
    q: "새 홈페이지가 없어도 가능한가요?",
    a: "가능합니다. 기존 사이트의 구조부터 진단해 개선합니다. 다만 구조 자체가 오래돼 한계가 크면, 홈페이지 제작·GEO 리빌딩을 함께 검토하기도 합니다.",
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

export default function ServiceSeoPage() {
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

      <main id="main">
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
              대구·전국 검색과{" "}
              <span className="text-gradient">AI 인용</span>의 기반을 함께
              세웁니다
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft">
              검색 결과 어디에도 우리가 보이지 않는다면, 문제는 콘텐츠가 아니라
              구조일 수 있습니다. 온페이지·기술 SEO와 네이버 플레이스·블로그를
              함께 정비해, 구글과 네이버 양쪽에서 찾을 수 있게 만듭니다.
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
              검색에 닿는 구조를 만들기 위해, 다음을 한 흐름으로 운영합니다.
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
        <section
          aria-labelledby="why-heading"
          className="section-pad bg-paper"
        >
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
