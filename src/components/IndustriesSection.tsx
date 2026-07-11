import Reveal from "./Reveal";

// 분야 라인 아이콘 7종 (stroke 1.5, currentColor) — 한 세트 톤 유지(이모지 금지).
// 업종 라벨은 NAP/서비스/도구가 아닌 표시 카피라 로컬 정의.
type IndustryIconKey =
  | "medical"
  | "legal"
  | "franchise"
  | "ecommerce"
  | "education"
  | "finance"
  | "realestate";

function IndustryIcon({
  iconKey,
  className = "h-6 w-6",
}: {
  iconKey: IndustryIconKey;
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
    case "medical": // 의료·병원 — 라운드 사각형 + 십자
      return (
        <svg {...common}>
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <path d="M12 8.2v7.6M8.2 12h7.6" />
        </svg>
      );
    case "legal": // 법률 — 정의의 저울
      return (
        <svg {...common}>
          <circle cx="12" cy="4.3" r="1.3" />
          <path d="M12 5.6V20M8.5 20h7" />
          <path d="M5 7.2h14" />
          <path d="M5 7.2 2.8 11.7h4.4L5 7.2Z" />
          <path d="M19 7.2 16.8 11.7h4.4L19 7.2Z" />
        </svg>
      );
    case "franchise": // 프랜차이즈 — 매장(어닝)
      return (
        <svg {...common}>
          <path d="M4.5 10 6 5h12l1.5 5" />
          <path d="M4 10h16" />
          <path d="M5.5 10v10h13V10" />
          <path d="M10 20v-4.5a2 2 0 0 1 4 0V20" />
        </svg>
      );
    case "ecommerce": // 이커머스 — 쇼핑백
      return (
        <svg {...common}>
          <path d="M5.5 8h13l-1 11.5a1.5 1.5 0 0 1-1.5 1.4H8a1.5 1.5 0 0 1-1.5-1.4L5.5 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
        </svg>
      );
    case "education": // 교육 — 학사모
      return (
        <svg {...common}>
          <path d="M3 8.5 12 4.5l9 4-9 4-9-4Z" />
          <path d="M7 10.6V14c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-3.4" />
          <path d="M21 8.5v4" />
        </svg>
      );
    case "finance": // 금융·보험 — 방패 + 체크
      return (
        <svg {...common}>
          <path d="M12 3.5 19 6v5c0 4.4-2.9 7.4-7 8.5-4.1-1.1-7-4.1-7-8.5V6l7-2.5Z" />
          <path d="M9 11.5l2 2 4-4" />
        </svg>
      );
    case "realestate": // 부동산 — 집
      return (
        <svg {...common}>
          <path d="M4 11 12 4.5 20 11" />
          <path d="M6 9.5V20h12V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
  }
}

type Industry = {
  key: IndustryIconKey;
  label: string;
  note: string;
  featured?: boolean;
};

// 의료가 주력(featured) — 나머지는 동일 원리로 확장.
const industries: Industry[] = [
  {
    key: "medical",
    label: "의료·병원",
    note: "환자가 증상·시술을 AI에게 물을 때, 병원이 근거 있는 출처로 인용되도록 진료 정보를 구조화합니다. 의료광고법을 지키며 정확한 정보로만 노출을 설계합니다.",
    featured: true,
  },
  {
    key: "legal",
    label: "법률",
    note: "법률 상담 질의에서 사무소의 전문 분야가 AI 답변에 정확히 인용되도록 정리합니다.",
  },
  {
    key: "franchise",
    label: "프랜차이즈",
    note: "창업·가맹 문의가 AI로 옮겨갈 때, 본사와 지점 정보가 일관되게 추천되도록 정렬합니다.",
  },
  {
    key: "ecommerce",
    label: "이커머스",
    note: "제품 추천 질문에서 브랜드와 상품이 비교 후보로 등장하도록 데이터를 구조화합니다.",
  },
  {
    key: "education",
    label: "교육",
    note: "강의·과정 비교 질의에서 커리큘럼과 강점이 AI 답변에 인용되도록 콘텐츠를 정리합니다.",
  },
  {
    key: "finance",
    label: "금융·보험",
    note: "상품 비교·상담 질문에서 정확한 조건으로 설명되도록 근거 자료를 제공합니다.",
  },
  {
    key: "realestate",
    label: "부동산",
    note: "지역·매물 질의에서 지역 전문가로 인용되도록 매물·지역 정보를 구조화합니다.",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="section-pad"
    >
      <div className="container-x">
        {/* Header — 첫 문장은 검색자/문제에 말 건다(연혁 X) */}
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">Industries</p>
          <h2 id="industries-heading" className="text-3xl leading-snug sm:text-4xl">
            이미 이 분야들이
            <br />
            준비하고 있습니다
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-on-dark-soft">
            고객은 이미 업종을 가리지 않고 AI에게 먼저 묻습니다. 분야마다 AI가
            인용하는 방식이 다르기 때문에, 업종 특성에 맞춰 인용 자산을
            설계합니다.
          </p>
        </Reveal>

        {/* 7개 분야 카드 — 의료가 주력(2열 폭, 골드 헤어라인 카드) */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((it, i) =>
            it.featured ? (
              <Reveal
                key={it.key}
                delay={i * 60}
                className="sm:col-span-2 lg:col-span-2"
              >
                <article className="card-dark card-hover relative flex h-full flex-col gap-5 p-7 sm:flex-row sm:items-start sm:gap-6">
                  <span className="pill mono absolute right-5 top-5 text-[0.68rem] font-medium uppercase tracking-[0.14em]">
                    주력 분야
                  </span>

                  <span className="icon-chip chip-brand shrink-0">
                    <IndustryIcon iconKey={it.key} className="h-6 w-6" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-xl leading-snug">{it.label}</h3>
                    <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-on-dark-soft">
                      {it.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ) : (
              <Reveal key={it.key} delay={i * 60} className="h-full">
                <article className="card card-hover flex h-full flex-col p-6">
                  <span className="icon-chip chip-brand">
                    <IndustryIcon iconKey={it.key} />
                  </span>
                  <h3 className="mt-5 text-lg leading-snug">{it.label}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-on-dark-soft">
                    {it.note}
                  </p>
                </article>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}
