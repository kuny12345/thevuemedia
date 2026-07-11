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
const service = getService("content")!;
const TEL_HREF = `tel:${NAP.phoneE164}`;

const whatWeDo = [
  "키워드 분석을 바탕으로 고객 맞춤 프롬프트로 AI 본문 생성",
  "워드프레스·티스토리·네이버에 멀티채널 자동 발행",
  "네이버 Search Advisor 색인 요청과 순위 추적",
  "의료광고법 금지어 자동 치환·발행 전 검증으로 안전 운영",
  "발행 일정과 채널별 운영을 스케줄로 관리",
  "발행 콘텐츠를 AI가 인용하기 좋은 구조로 정리",
];

const problem =
  "AI 추천에는 꾸준한 양질의 콘텐츠가 필요하지만, 채널마다 형식이 달라 수작업으로는 지속하기 어렵습니다. 특히 의료처럼 규제가 있는 분야는 단어 하나가 위험이 됩니다.";
const solution =
  "생성·발행·추적을 자동화해 운영 부담을 줄이고, 의료광고법 단어 치환을 내장해 안전하게 발행합니다. 꾸준함이 AI 인용의 토대를 만듭니다.";

const faq = [
  {
    q: "AI가 쓴 글을 그대로 발행해도 괜찮나요?",
    a: "고객별 맞춤 프롬프트로 생성하고, 발행 전 검증 단계를 둡니다. 특히 의료 분야는 금지어 자동 치환과 점검을 거쳐 규제 위반 위험을 줄입니다.",
  },
  {
    q: "어떤 채널에 발행되나요?",
    a: "워드프레스·티스토리·네이버를 기본으로 멀티채널 자동 발행합니다. 채널별 형식 차이를 자동으로 맞춰 운영 부담을 줄입니다.",
  },
  {
    q: "의료광고법은 어떻게 대응하나요?",
    a: "발행 파이프라인에 금지어 자동 치환과 발행 전 검증을 내장했습니다. 치료 효과 단정·환자 유인 같은 표현을 배제하도록 설계합니다.",
  },
  {
    q: "발행 후 성과는 추적되나요?",
    a: "네이버 색인 요청과 순위 변화를 추적하고, 필요하면 AI 노출까지 연계해 모니터링합니다. 측정 근거를 함께 공유합니다.",
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

export default function ServiceContentPage() {
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
              <span className="text-gradient">AI가 인용할</span> 콘텐츠를
              대구에서 꾸준히 발행합니다
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-soft">
              좋은 콘텐츠를 여러 채널에 꾸준히 올리는 일은 현실적으로 버겁습니다.
              AI 생성부터 멀티채널 발행, 색인·추적까지 한 흐름으로 자동화합니다.
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
              콘텐츠를 안전하고 꾸준하게 운영하기 위해, 다음을 한 흐름으로
              자동화합니다.
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
