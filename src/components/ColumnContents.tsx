"use client";

import { useEffect, useMemo, useState } from "react";

export type ColumnContentsItem = {
  id: string;
  title: string;
  level: number;
};

interface ColumnContentsProps {
  items: ColumnContentsItem[];
  mobile?: boolean;
}

export default function ColumnContents({ items, mobile = false }: ColumnContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const activeItem = useMemo(
    () => items.find((item) => item.id === activeId) ?? items[0],
    [activeId, items]
  );

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null);
    if (!headings.length) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = window.scrollY + Math.max(120, window.innerHeight * 0.22);
      let current = headings[0].id;
      for (const heading of headings) {
        if (heading.offsetTop <= readingLine) current = heading.id;
        else break;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = headings.at(-1)?.id ?? current;
      }
      setActiveId((previous) => previous === current ? previous : current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  const links = (
    <ol className={mobile ? "space-y-1" : "space-y-1.5"}>
      {items.map((item) => {
        const active = item.id === activeId;
        const depth = item.level === 3 ? "ml-3" : item.level === 4 ? "ml-6" : "";
        return <li key={item.id} className={depth}>
          <a
            href={`#${item.id}`}
            aria-current={active ? "location" : undefined}
            onClick={() => setActiveId(item.id)}
            className={`block border-l-2 py-2 pr-2 pl-3 [overflow-wrap:anywhere] transition-[color,background-color,border-color,transform] duration-200 ${mobile ? "text-sm leading-relaxed" : "text-[13px] leading-[1.55]"} ${active ? "translate-x-0.5 border-gold-deep bg-[rgba(201,169,106,0.1)] font-semibold text-ink" : "border-transparent text-gray-500 hover:border-[rgba(154,123,69,0.35)] hover:text-gold-deep"}`}
          >
            {item.title}
          </a>
        </li>;
      })}
    </ol>
  );

  if (mobile) {
    return <details className="group mb-10 border-y border-[rgba(8,17,32,0.16)] py-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0">
          <strong className="block text-lg">Contents</strong>
          <small className="mt-1 line-clamp-1 block text-xs font-normal text-gold-deep" aria-live="polite">{activeItem?.title}</small>
        </span>
        <svg aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-deep transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6" /></svg>
      </summary>
      <div className="mt-5 border-t border-[rgba(8,17,32,0.1)] pt-4">{links}</div>
    </details>;
  }

  return <nav aria-labelledby="contents-title" className="hidden border-t-2 border-ink pt-6 xl:sticky xl:top-28 xl:block">
    <h2 id="contents-title" className="mb-4 text-lg font-bold tracking-[-0.02em]">Contents</h2>
    {links}
  </nav>;
}
