const platforms = [
  {
    name: "YouTube Shorts",
    desc: "시청 패턴 분석을 통한 AI 추천 알고리즘 최적화 영상 송출",
    badge: "영상 최적화",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path fill="#fff" d="M9.545 15.568V8.432L15.818 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram Reels",
    desc: "트렌드 키워드 기반의 고관여 비주얼 콘텐츠 확산",
    badge: "비주얼 확산",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    desc: "전문가 그룹 대상 B2B 콘텐츠 및 AI 학습 원천 데이터 확보",
    badge: "B2B 전문",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    desc: "텍스트 기반 AI 모델의 학습 데이터로 활용되는 콘텐츠 생성",
    badge: "텍스트 확산",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.227-.02 4.054-.467 5.291-1.807.904-.977 1.354-2.282 1.338-3.882-.013-1.165-.283-2.065-.802-2.673-.498-.582-1.2-.893-2.087-.924-.59-.017-1.1.114-1.447.348-.26.173-.505.5-.448 1.063l.004.04-.672 6.265h-2.063l.574-5.36c-.084-.597-.36-1.088-.801-1.422-.535-.406-1.27-.618-2.124-.618-1.015 0-1.9.365-2.49 1.028-.637.714-.97 1.77-.936 2.97.025.846.213 1.595.562 2.227.343.622.824 1.1 1.432 1.422.6.32 1.272.483 1.997.486 1.058-.008 1.964-.363 2.613-1.043l1.37 1.536c-1.005 1.05-2.389 1.605-4.002 1.623-1.088-.003-2.097-.27-2.998-.792-.902-.524-1.627-1.27-2.155-2.222-.527-.95-.8-2.03-.816-3.213-.048-1.72.455-3.21 1.413-4.28.983-1.097 2.358-1.683 3.97-1.695 1.222-.003 2.3.295 3.112.86.467.322.84.732 1.116 1.21.377-.592.89-1.07 1.534-1.413.838-.447 1.826-.67 2.928-.644 1.436.05 2.634.608 3.56 1.66.96 1.09 1.453 2.573 1.473 4.41.023 2.166-.653 3.964-2.007 5.428-1.614 1.746-4.004 2.326-6.741 2.35z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    desc: "실시간 트렌드 연동 및 AI 학습용 고품질 텍스트 데이터 배포",
    badge: "실시간 트렌드",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Blog & Web",
    desc: "SEO + AIO 통합 전략으로 검색 엔진과 AI 동시 노출 극대화",
    badge: "SEO + AIO",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
];

export default function ServiceSection() {
  return (
    <section id="service" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">
            Service
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
            6대 플랫폼 멀티 콘텐츠
            <br />
            <span className="text-gradient">장악 전략</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            단순 업로드가 아닙니다. 각 채널의 데이터가 상호 작용하여
            <br className="hidden sm:block" />
            <strong className="text-gray-700">AI Mention Score</strong>를
            끌어올리는 유기적 생태계를 구축합니다.
          </p>
        </div>

        <p className="text-center text-sm font-bold text-primary/60 tracking-widest uppercase mb-10">
          One Source, Multi-Channel AI Dominance
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {p.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {p.desc}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold">
                {p.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
