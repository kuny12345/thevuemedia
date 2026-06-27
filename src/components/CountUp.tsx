"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** 최종 목표값 */
  value: number;
  /** 값 뒤 접미사 (예: "%", "+", "건") */
  suffix?: string;
  /** 값 앞 접두사 (예: "₩", "x") */
  prefix?: string;
  /** 애니메이션 길이 (ms, 기본 1600) */
  duration?: number;
  /** 추가 클래스 (.stat-num 위에 합성) */
  className?: string;
};

/**
 * 스크롤 진입 시 0 → value 로 카운트업하는 클라이언트 컴포넌트.
 * - IntersectionObserver(once) + requestAnimationFrame
 * - prefers-reduced-motion: 최종값 즉시 표시
 * - 숫자는 toLocaleString 으로 포맷
 */
export default function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // 모션 최소화 선호 시 즉시 최종값
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCurrent(value);
      return;
    }

    let rafId = 0;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const t = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setCurrent(value * eased);
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setCurrent(value);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    // IntersectionObserver 미지원 환경 폴백
    if (typeof IntersectionObserver === "undefined") {
      run();
      return () => cancelAnimationFrame(rafId);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [value, duration]);

  const display = Math.round(current).toLocaleString();

  return (
    <span
      ref={ref}
      className={["stat-num", className].filter(Boolean).join(" ")}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
