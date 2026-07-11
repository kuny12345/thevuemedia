import Link from "next/link";
import { services, type ServiceIconKey } from "@/lib/services";

// 라인 아이콘 8종 (stroke 1.5, currentColor) — service.iconKey로 선택.
// 이모지 금지 · 단일 골드 톤(icon-chip이 골드로 수렴) — "Retained Counsel".
function ServiceIcon({
  iconKey,
  className = "h-6 w-6",
}: {
  iconKey: ServiceIconKey;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (iconKey) {
    case "ai": // 생성형 AI — 스파클
      return (
        <svg {...common}>
          <path d="M12 3l1.7 4.6L18.3 9l-4.6 1.4L12 15l-1.7-4.6L5.7 9l4.6-1.4L12 3Z" />
          <path d="M18.5 14l.8 2.1 2.2.7-2.2.7-.8 2.1-.8-2.1-2.2-.7 2.2-.7.8-2.1Z" />
        </svg>
      );
    case "medical": // 병원·의료 — 라운드 사각형 + 십자
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <path d="M12 8.2v7.6M8.2 12h7.6" />
        </svg>
      );
    case "search": // SEO·네이버 — 돋보기
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="M20.5 20.5l-4.2-4.2" />
        </svg>
      );
    case "schema": // 구조화 데이터 — 연결된 엔티티 그래프
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2.3" />
          <circle cx="5.5" cy="18.5" r="2.3" />
          <circle cx="18.5" cy="18.5" r="2.3" />
          <path d="M12 7.3v2.9M12 10.2l-5.2 6M12 10.2l5.2 6" />
        </svg>
      );
    case "rebuild": // 홈페이지 리빌딩 — 재구축 화살표
      return (
        <svg {...common}>
          <path d="M20.5 12a8.5 8.5 0 1 1-2.5-6" />
          <path d="M20.5 3.5v5h-5" />
        </svg>
      );
    case "content": // 콘텐츠 자동 발행 — 문서
      return (
        <svg {...common}>
          <path d="M14 3.5H7.5A2.5 2.5 0 0 0 5 6v12a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 18V8.5L14 3.5Z" />
          <path d="M14 3.5V8.5h5" />
          <path d="M8.5 13h7M8.5 16.5h7M8.5 9.5h2.5" />
        </svg>
      );
    case "video": // 숏폼 영상 — 재생 화면
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="3.5" />
          <path d="M10.4 9.2l4.4 2.8-4.4 2.8V9.2Z" />
        </svg>
      );
    case "track": // AI 노출 추적 — 상승 차트
      return (
        <svg {...common}>
          <path d="M3.5 3.5v17h17" />
          <path d="M7 15l3.3-3.6 2.7 2L20 7" />
          <circle cx="20" cy="7" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export default function ServicesGrid() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-pad"
    >
      <div className="container-x">
        {/* Header — 골드 모노 eyebrow + 세리프 헤딩 */}
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">// Services</p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl">
            서비스
          </h2>
          <p className="mt-5 text-base leading-relaxed text-on-dark-soft sm:text-lg">
            AI와 검색 양쪽에서 브랜드가 먼저 인용되도록, 진단부터 추적까지
            필요한 작업을 영역별로 나눴습니다. 무엇이 필요한지 골라보세요.
          </p>
        </div>

        {/* 8개 서비스 — GBP 서비스명과 1:1 · 골드 헤어라인 gap-px 그리드 */}
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              aria-label={`${s.name} 자세히 보기`}
              className="group relative flex flex-col bg-ink p-7 transition-colors hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
            >
              {s.isNew && (
                <span className="mono absolute right-5 top-5 border border-line px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-on-dark-soft">
                  New
                </span>
              )}

              <span className="icon-chip chip-brand">
                <ServiceIcon iconKey={s.iconKey} />
              </span>

              <h3 className="mt-5 text-lg leading-snug">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-on-dark-soft">
                {s.short}
              </p>

              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-on-dark-soft transition-colors group-hover:text-gold">
                자세히
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
