import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import {
  productSchema,
  collectionPageSchema,
  faqPageSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ProductIcon from "@/components/ProductIcon";

export const metadata: Metadata = {
  title: "제품·솔루션 — 직접 만들어 쓰는 AIO 도구 (airank·schemaworks·GEO 리빌딩)",
  description:
    "더뷰미디어는 AIO를 설명만 하지 않습니다. AI 가시성 추적 플랫폼 airank, 홈페이지 SEO/GEO 자동 진단 schemaworks, GEO 사이트 리빌딩을 직접 개발해 운영합니다. 진단·재구축·측정을 한 팀에서.",
  keywords: [
    "airank",
    "schemaworks",
    "GEO 리빌딩",
    "AI 가시성 추적",
    "SEO GEO 진단",
    "AIO 도구",
    "더뷰미디어",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "제품·솔루션 — 직접 만들어 쓰는 AIO 도구 | 더뷰미디어",
    description:
      "airank(측정)·schemaworks(진단)·GEO 리빌딩(재구축)을 직접 개발해 운영합니다.",
    type: "website",
    url: "/products",
  },
};

const flow = [
  { step: "01", name: "진단", tool: "schemaworks", text: "홈페이지의 스키마·메타·AI 크롤러 신호에서 무엇이 비어 있는지 자동 진단." },
  { step: "02", name: "재구축", tool: "GEO 리빌딩", text: "AI·검색이 읽는 구조로 사이트를 다시 짓고 구조화 데이터를 심습니다." },
  { step: "03", name: "측정", tool: "airank", text: "5개 AI 엔진에서 노출·인용·감성이 어떻게 변하는지 매일 추적·증명." },
];

const faq = [
  {
    q: "이 도구들을 직접 사용할 수 있나요?",
    a: "airank와 schemaworks는 웹에서 바로 사용할 수 있는 SaaS입니다. GEO 사이트 리빌딩은 신청 기반으로 진행하는 작업 서비스입니다.",
  },
  {
    q: "대행 없이 도구만 이용해도 되나요?",
    a: "네. airank(가시성 추적)와 schemaworks(진단)는 독립적으로 이용할 수 있습니다. 리빌딩·운영까지 필요하면 한 팀에서 함께 진행합니다.",
  },
  {
    q: "왜 도구를 직접 만들었나요?",
    a: "시중 도구로는 국내 환경에서 5개 AI 엔진을 한 번에 추적하고, 한국형 SEO/GEO를 진단하기 어려웠습니다. 그래서 측정·진단·재구축을 직접 만들어 검증하며 씁니다.",
  },
];

export default function ProductsPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "홈", path: "/" },
    { name: "제품·솔루션", path: "/products" },
  ]);
  const collection = collectionPageSchema({
    name: "더뷰미디어 제품·솔루션",
    description:
      "AI 가시성 추적(airank), SEO/GEO 자동 진단(schemaworks), GEO 사이트 리빌딩.",
    path: "/products",
    items: products.map((p) => ({ name: p.name, url: p.url })),
  });

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={collection} />
      {products.map((p) => (
        <JsonLd key={p.slug} data={productSchema(p)} />
      ))}
      <JsonLd data={faqPageSchema(faq)} />

      {/* Hero */}
      <header className="bg-dark pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-[460px] h-[460px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-sm font-bold mb-5">
            Products & Solutions
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            AIO를 <span className="text-gradient">직접 만들어</span> 씁니다
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            더뷰미디어는 AI 가시성 추적·SEO/GEO 진단·사이트 리빌딩 도구를 직접
            개발해 운영합니다. 우리가 매일 쓰는 도구로 고객의 AI 노출을
            설계합니다.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* Integrated flow */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 text-center">
            진단 → 재구축 → 측정, 한 팀에서
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            세 도구는 따로도, 함께도 작동합니다. AIO의 전 과정을 하나의 흐름으로 잇습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {flow.map((f) => (
              <div key={f.step} className="rounded-2xl border border-gray-100 p-6 bg-white">
                <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-bold mb-3">
                  {f.step} · {f.name}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{f.tool}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product detail blocks */}
        <section className="space-y-8">
          {products.map((p) => (
            <article
              key={p.slug}
              className="rounded-3xl border border-gray-100 border-t-4 border-t-primary/50 p-8 lg:p-10 bg-white"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <ProductIcon iconKey={p.iconKey} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900">{p.name}</h2>
                  <p className="text-primary font-semibold text-sm mb-4">{p.tagline}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold mb-4">
                    {p.kind === "SoftwareApplication" ? "SaaS 도구" : "리빌딩 서비스"}
                  </span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary font-semibold text-sm hover:underline"
                  >
                    {p.urlLabel} &#8599;
                  </a>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-gray-500 text-sm mb-3">
                    <strong className="text-gray-700">문제 —</strong> {p.problem}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-5">{p.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-400">{p.audience}</p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* FAQ */}
        <section className="mt-20">
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
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            우리가 쓰는 도구로, 우리 브랜드도 진단받아 보세요
          </h2>
          <p className="text-gray-500 mb-6">
            현재 AI가 우리 브랜드를 어떻게 인식하는지 무료로 진단해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/#contact" className="inline-block px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
              무료 AI 인식도 진단받기
            </a>
            <Link href="/hospital-marketing" className="inline-block px-8 py-4 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-primary/40 hover:text-primary transition-colors">
              병원 마케팅 보기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
