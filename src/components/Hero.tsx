"use client";

import { useEffect, useRef } from "react";
import { SIGNATURE } from "@/lib/brand";

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const duration = 1600;
    const startTime = performance.now();
    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (el) el.textContent = Math.round(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [target]);

  return (
    <span className="text-3xl font-extrabold text-ink tracking-tight">
      <span ref={ref}>0</span>
      <span className="text-primary">{suffix}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      {/* faint top wash */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/[0.04] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-6 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            AI Optimization Studio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] lg:leading-[1.08] font-extrabold text-ink mb-6 animate-fade-in-up animation-delay-100">
            AI가 <span className="text-gradient">당신의 브랜드</span>를
            <br className="hidden sm:block" /> 추천하게 만듭니다
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
            ChatGPT·Gemini·Perplexity가 고객에게 귀사를 먼저 추천하도록.
            측정·진단·재구축 도구를 직접 만들어 쓰는 팀이 설계합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12 animate-fade-in-up animation-delay-300">
            <a
              href="/#contact"
              className="px-6 py-3.5 rounded-lg bg-gray-900 text-white font-semibold text-[15px] hover:bg-gray-800 transition-colors"
            >
              무료 AI 인식도 진단
            </a>
            <a
              href="/products"
              className="px-6 py-3.5 rounded-lg border border-gray-300 text-gray-800 font-semibold text-[15px] hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              제품 보기 &rarr;
            </a>
          </div>

          {/* Stats — 실제 근거 */}
          <div className="flex items-center justify-center lg:justify-start gap-7 lg:gap-10">
            <div className="text-center lg:text-left">
              <AnimatedNumber target={5} suffix="개" />
              <p className="text-xs text-gray-400 mt-1">실시간 추적 AI 엔진</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center lg:text-left">
              <AnimatedNumber target={SIGNATURE.valueNum} suffix={SIGNATURE.suffix} />
              <p className="text-xs text-gray-400 mt-1">{SIGNATURE.label}</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center lg:text-left">
              <AnimatedNumber target={3} suffix="종" />
              <p className="text-xs text-gray-400 mt-1">자체 개발 AIO 도구</p>
            </div>
          </div>
        </div>

        {/* airank dashboard visual — light */}
        <div className="flex-1 relative max-w-md w-full">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-gray-500 font-medium">
                  AI Mention Score
                </span>
              </div>
              <a
                href="https://airank.lol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-primary hover:text-primary-dark transition-colors"
              >
                airank ↗
              </a>
            </div>
            <div className="text-4xl font-extrabold text-ink mb-1 tracking-tight">
              87.4
            </div>
            <div className="text-sm text-emerald-600 font-medium mb-5">
              ▲ 23.5% this month
            </div>
            <svg viewBox="0 0 300 80" className="w-full h-auto mb-4">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.35" />
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
            <div className="flex flex-wrap gap-1.5">
              {["Google AIO", "ChatGPT", "Perplexity", "Gemini", "Grok"].map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* floating chips */}
          <div className="absolute -top-3 -left-3 lg:-left-6 bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-sm animate-float">
            <span className="text-lg">💬</span>
            <div>
              <div className="text-[11px] text-gray-400">실시간 언급</div>
              <div className="text-sm font-bold text-ink">+12 today</div>
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 lg:-right-6 bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-sm animate-float-delay">
            <span className="text-lg">🎯</span>
            <div>
              <div className="text-[11px] text-gray-400">업계 추천</div>
              <div className="text-sm font-bold text-ink">#1</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
