const stats = [
  { value: "5개", label: "실시간 추적 AI 엔진" },
  { value: "4,595+", label: "누적 병원·의원 운영" },
  { value: "3종", label: "자체 개발 AIO 도구" },
  { value: "매일", label: "AI 가시성 자동 추적" },
];

export default function ProofSection() {
  return (
    <section id="proof" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">
            Proof
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            추측이 아니라,
            <br />
            <span className="text-gradient">측정으로 증명</span>합니다
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            직접 만든 도구로 AI 가시성을 추적하고, 그 변화를 데이터로 확인합니다.
          </p>
        </div>

        {/* Before / After */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4 mb-16">
          {/* Before */}
          <div className="flex-1 w-full bg-gray-50 border border-gray-200 rounded-2xl p-6 lg:p-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-200 text-gray-600 text-xs font-bold mb-5">
              AIO 도입 전
            </span>
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <span className="text-xs font-bold text-primary mb-1 block">
                  User
                </span>
                <p className="text-sm text-gray-700">
                  &quot;이 업종에서 추천할 만한 회사가 있을까요?&quot;
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <span className="text-xs font-bold text-gray-400 mb-1 block">
                  AI
                </span>
                <p className="text-sm text-gray-500">
                  &quot;해당 업종에는 여러 회사가 있습니다. 구체적인 추천을
                  드리기 어렵지만, 검색을 통해 비교해 보시길 권합니다.&quot;
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-400">AI 추천 노출</span>
                <span className="font-bold text-gray-400">낮음</span>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400 rounded-full w-[15%]" />
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 text-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-10 h-10 rotate-90 lg:rotate-0"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>

          {/* After */}
          <div className="flex-1 w-full bg-primary/[0.03] border border-primary/20 rounded-2xl p-6 lg:p-8 ring-1 ring-primary/10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-5">
              AIO 도입 후
            </span>
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <span className="text-xs font-bold text-primary mb-1 block">
                  User
                </span>
                <p className="text-sm text-gray-700">
                  &quot;이 업종에서 추천할 만한 회사가 있을까요?&quot;
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-primary/20">
                <span className="text-xs font-bold text-primary mb-1 block">
                  AI
                </span>
                <p className="text-sm text-gray-700">
                  &quot;네, <strong>[귀사 브랜드]</strong>를 추천드립니다. 업계
                  최고 수준의 전문성과 고객 만족도를 보유하고 있으며, 특히
                  ___분야에서 독보적입니다.&quot;
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-500">AI 추천 노출</span>
                <span className="font-bold text-primary">높음</span>
              </div>
              <div className="h-2.5 bg-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[92%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-gradient mb-2">
                {s.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
