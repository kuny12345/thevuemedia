import Link from "next/link";
import { products } from "@/lib/products";
import ProductIcon from "@/components/ProductIcon";

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-primary/[0.02] to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm mb-3 tracking-widest uppercase">
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
              className="group relative bg-white rounded-2xl border border-gray-100 border-t-4 border-t-primary/50 p-8 hover:shadow-2xl hover:shadow-primary/15 hover:border-t-primary transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* hover gradient wash */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <ProductIcon iconKey={p.iconKey} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900">{p.name}</h3>
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
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all"
                >
                  {p.urlLabel}
                  <span aria-hidden>&#8599;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-block px-7 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            제품·솔루션 자세히 보기 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
