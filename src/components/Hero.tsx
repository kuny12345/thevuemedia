"use client";

import { useEffect, useRef } from "react";

function AnimatedNumber({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      if (el) el.textContent = start.toString();
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [target]);

  return (
    <span className="text-3xl lg:text-4xl font-extrabold text-white">
      <span ref={ref}>0</span>
      <span className="text-primary-light">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-light text-sm font-semibold mb-6 animate-fade-in-up">
            AI Optimization Experts
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up animation-delay-200">
            AI가 <span className="text-gradient">당신의 브랜드</span>를
            <br />
            추천하게 만듭니다
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
            ChatGPT, Gemini, Copilot이 고객에게 귀사를 먼저 추천하도록.
            <br className="hidden sm:block" />
            더뷰미디어의 AIO 전략이 브랜드의 AI 인지도를 설계합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14 animate-fade-in-up animation-delay-600">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-primary text-white font-semibold text-base hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              무료 AI 인식도 진단받기
            </a>
            <a
              href="#service"
              className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-semibold text-base hover:border-gray-400 hover:text-white transition-colors"
            >
              서비스 알아보기
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-8 lg:gap-12">
            <div className="text-center">
              <AnimatedNumber target={450} suffix="%" />
              <p className="text-xs text-gray-500 mt-1">평균 AI 노출량 증가</p>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <AnimatedNumber target={200} suffix="+" />
              <p className="text-xs text-gray-500 mt-1">누적 프로젝트 수</p>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <AnimatedNumber target={6} suffix="개" />
              <p className="text-xs text-gray-500 mt-1">멀티채널 동시 운영</p>
            </div>
          </div>
        </div>

        {/* Dashboard visual */}
        <div className="flex-1 relative max-w-lg w-full">
          <div className="bg-dark-secondary border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-sm text-gray-400 font-medium">
                AI Mention Score
              </span>
            </div>
            <div className="text-5xl font-extrabold text-white mb-1">87.4</div>
            <div className="text-sm text-green-400 font-medium mb-6">
              +23.5% this month
            </div>
            <svg viewBox="0 0 300 80" className="w-full h-auto mb-4">
              <defs>
                <linearGradient
                  id="chartGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                className="chart-fill"
                points="0,80 0,70 30,65 60,55 90,58 120,45 150,40 180,30 210,25 240,18 270,12 300,8 300,80"
              />
              <polyline
                className="chart-line"
                points="0,70 30,65 60,55 90,58 120,45 150,40 180,30 210,25 240,18 270,12 300,8"
              />
            </svg>
            <div className="flex flex-wrap gap-2">
              {["ChatGPT", "Gemini", "Copilot", "Perplexity"].map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-xs font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -top-4 -left-4 lg:-left-8 bg-dark-secondary border border-gray-700/50 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl animate-float">
            <span className="text-2xl">&#x1F4AC;</span>
            <div>
              <div className="text-xs text-gray-400">실시간 언급</div>
              <div className="text-sm font-bold text-white">+12 today</div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-dark-secondary border border-gray-700/50 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl animate-float-delay">
            <span className="text-2xl">&#x1F3AF;</span>
            <div>
              <div className="text-xs text-gray-400">업계 추천 순위</div>
              <div className="text-sm font-bold text-white">#1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
