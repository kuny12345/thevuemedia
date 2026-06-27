"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** 추가 클래스 (기본 .reveal 위에 합성) */
  className?: string;
  /** 렌더링 태그 (기본 div) */
  as?: ElementType;
  /** 진입 전환 지연 (ms) — 스태거용 */
  delay?: number;
};

/**
 * 스크롤 진입 시 .is-visible 를 토글하는 클라이언트 래퍼.
 * - IntersectionObserver(threshold ~0.15, once)
 * - prefers-reduced-motion: 즉시 표시
 * - .reveal / .is-visible 모션은 globals.css 가 담당
 */
export default function Reveal({
  children,
  className,
  as,
  delay,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // 모션 최소화 선호 시 즉시 표시
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    // IntersectionObserver 미지원 환경 폴백
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={["reveal", visible ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
