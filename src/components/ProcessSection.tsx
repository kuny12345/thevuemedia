const steps = [
  {
    num: "01",
    phase: "Audit",
    title: "AI 브랜드 진단",
    desc: "현재 주요 AI(ChatGPT, Gemini 등)가 귀사를 어떻게 평가하는지 전수 조사합니다.",
  },
  {
    num: "02",
    phase: "Strategy",
    title: "키워드 점유 설계",
    desc: "AI가 브랜드 추천 시 반드시 언급해야 할 핵심 키워드 및 소구점을 도출합니다.",
  },
  {
    num: "03",
    phase: "Execution",
    title: "멀티 채널 침투",
    desc: "유튜브부터 SNS까지, AI 학습용 고퀄리티 콘텐츠를 대량 생성 및 배포합니다.",
  },
  {
    num: "04",
    phase: "Tracking",
    title: "실시간 성과 보고",
    desc: "전용 대시보드를 통해 실시간 언급량 및 추천 순위를 리포팅합니다.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            AIO 도입 <span className="text-gradient">4단계 로드맵</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            전문 컨설턴트가 체계적인 프로세스로 프로젝트를 이끕니다.
            <br className="hidden sm:block" />
            막연함 없이, 단계별 명확한 성과를 확인하세요.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-7 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="group flex gap-6 lg:gap-8 items-start">
                <div className="relative flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-ink text-white flex items-center justify-center text-base lg:text-lg font-extrabold z-10 ring-4 ring-white">
                  {step.num}
                </div>
                <div className="rounded-xl p-6 lg:p-7 border border-gray-200 bg-white flex-1 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                  <span className="inline-block text-xs font-bold text-primary uppercase tracking-[0.12em] mb-2">
                    {step.phase}
                  </span>
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
