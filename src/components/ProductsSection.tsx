import Link from "next/link";
import { products } from "@/lib/products";
import ProductIcon from "@/components/ProductIcon";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-24 lg:py-32 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
            What we build
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            말이 아니라, <span className="text-gradient">직접 만들어 씁니다</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            AIO를 설명만 하는 대행사가 아닙니다. 진단·재구축·측정을 위한 도구를
            직접 개발해 운영합니다.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {products.map((p) => (
            <div
              key={p.slug}
              className="group rounded-xl border border-gray-200 bg-white p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-gray-100 text-gray-900 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <ProductIcon iconKey={p.iconKey} />
                </div>
                <h3 className="text-lg font-extrabold text-ink">{p.name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">
                  {p.tagline}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {p.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {p.external ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all"
                  >
                    {p.urlLabel}
                    <span aria-hidden>&#8599;</span>
                  </a>
                ) : (
                  <Link
                    href={p.url}
                    className="mt-auto inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all"
                  >
                    {p.urlLabel}
                    <span aria-hidden>&rarr;</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            제품·솔루션 자세히 보기 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
