"use client";

import { useEffect, useState } from "react";

/**
 * 상담 신청 폼 — /api/consult 로 제출.
 * 마운트 시 URL 의 ref/utm_* 과 document.referrer 를 읽어 출처를 함께 보낸다.
 * variant: "dark"(다크 섹션 기본) | "paper"(아이보리 지면)
 */
export default function ConsultForm({
  variant = "dark",
  defaultMessage = "",
}: {
  variant?: "dark" | "paper";
  defaultMessage?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const [hp, setHp] = useState(""); // honeypot
  const [meta, setMeta] = useState<{
    source: string;
    utm: Record<string, string>;
    referrer: string;
  }>({ source: "direct", utm: {}, referrer: "" });
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const [k, v] of params) if (k.startsWith("utm_")) utm[k] = v;
    const source =
      params.get("ref") ??
      params.get("utm_source") ??
      (document.referrer ? new URL(document.referrer).hostname : "direct");
    setMeta({ source, utm, referrer: document.referrer });
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setError(null);
    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          siteUrl,
          message,
          website: hp,
          ...meta,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error ?? "접수에 실패했습니다.");
        setState("error");
      } else {
        setState("done");
      }
    } catch {
      setError("네트워크 오류가 발생했습니다.");
      setState("error");
    }
  }

  const isPaper = variant === "paper";
  const inputCls = isPaper
    ? "w-full border border-[rgba(8,17,32,0.18)] bg-white px-4 py-3 text-[15px] text-[#2a2f38] placeholder:text-[#9a958a] focus:border-gold-deep focus:outline-none"
    : "w-full border border-line-strong bg-[rgba(236,231,219,0.04)] px-4 py-3 text-[15px] text-on-dark placeholder:text-[#6b7482] focus:border-gold focus:outline-none";
  const labelCls = `mb-1.5 block text-[13px] font-medium ${isPaper ? "text-text-soft" : "text-on-dark-soft"}`;

  if (state === "done") {
    return (
      <div
        className={`border px-6 py-10 text-center ${isPaper ? "border-[rgba(8,17,32,0.12)] bg-white" : "border-line bg-[rgba(201,169,106,0.04)]"}`}
      >
        <p className="eyebrow mb-3 justify-center">Received</p>
        <h3 className="mb-2 text-xl">상담 신청이 접수되었습니다</h3>
        <p className={`text-sm leading-relaxed ${isPaper ? "text-text-soft" : "text-on-dark-soft"}`}>
          영업일 기준 1일 내에 담당자가 연락드립니다.
          <br />
          급하신 경우 전화로 문의해주세요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      {/* honeypot — 사람에게 보이지 않음 */}
      <input
        type="text"
        name="website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelCls}>
            성함 <span className="text-gold">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            required
            maxLength={50}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="홍길동"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelCls}>
            연락처 <span className="text-gold">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="010-0000-0000"
            className={inputCls}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="cf-site" className={labelCls}>
          홈페이지 주소
        </label>
        <input
          id="cf-site"
          type="text"
          value={siteUrl}
          onChange={(e) => setSiteUrl(e.target.value)}
          placeholder="example.co.kr"
          className={inputCls}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="cf-msg" className={labelCls}>
          문의 내용
        </label>
        <textarea
          id="cf-msg"
          rows={4}
          maxLength={2000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="현재 상황과 궁금한 점을 편하게 적어주세요."
          className={`${inputCls} resize-y`}
        />
      </div>
      {error && (
        <p role="alert" className="mono mt-3 text-[13px] text-[#d97b6c]">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-primary mt-6 w-full sm:w-auto sm:min-w-56"
      >
        {state === "sending" ? "접수 중…" : "상담 신청하기"}
      </button>
      <p className={`mt-3 text-[12px] ${isPaper ? "text-text-soft" : "text-on-dark-soft"}`}>
        남겨주신 정보는 상담 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
