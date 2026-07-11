import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * 상담 신청 폼 → Resend 로 알림 메일 발송.
 * 발신 도메인은 Resend 에 검증된 것만 가능 — 기본 hello@schemaworks.org (동일 계정).
 * env: RESEND_API_KEY(필수) · CONSULT_TO · RESEND_FROM
 */

const PHONE_RE = /^[0-9\-+() ]{9,16}$/;

/** IP당 시간당 신청 상한 — 서버리스 인스턴스별 best-effort (강화 필요 시 Vercel WAF) */
const RATE_LIMIT = 5;
const rateMap = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - 3600_000;
  const hits = (rateMap.get(ip) ?? []).filter((t) => t > windowStart);
  if (hits.length >= RATE_LIMIT) return true;
  hits.push(now);
  rateMap.set(ip, hits);
  return false;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    phone?: string;
    siteUrl?: string;
    message?: string;
    source?: string;
    utm?: Record<string, string>;
    referrer?: string;
    website?: string; // honeypot
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // honeypot — 봇이 채우면 성공 응답만 반환하고 발송하지 않는다
  if (body.website) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();
  let siteUrl = (body.siteUrl ?? "").trim();

  if (!name || name.length > 50) {
    return NextResponse.json({ error: "성함을 입력해주세요." }, { status: 400 });
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ error: "연락처 형식을 확인해주세요." }, { status: 400 });
  }
  if (message.length > 2000) {
    return NextResponse.json({ error: "내용이 너무 깁니다." }, { status: 400 });
  }
  if (siteUrl) {
    if (!/^https?:\/\//i.test(siteUrl)) siteUrl = `https://${siteUrl}`;
    try {
      const u = new URL(siteUrl);
      if (!/^https?:$/.test(u.protocol)) throw new Error();
    } catch {
      return NextResponse.json({ error: "홈페이지 주소를 확인해주세요." }, { status: 400 });
    }
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "잠시 후 다시 시도해주세요." },
      { status: 429 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[consult] RESEND_API_KEY 미설정");
    return NextResponse.json(
      { error: "일시적인 오류입니다. 전화로 문의해주세요." },
      { status: 500 },
    );
  }

  const source = (body.source ?? "direct").slice(0, 100);
  const utmLines = Object.entries(body.utm ?? {})
    .filter(([k]) => /^utm_/.test(k))
    .map(([k, v]) => `${esc(k)}: ${esc(String(v).slice(0, 200))}`)
    .join("<br/>");

  const html = `
    <h2 style="margin:0 0 12px">상담 신청 — ${esc(name)}</h2>
    <table style="border-collapse:collapse;font-size:14px">
      <tr><td style="padding:4px 12px 4px 0;color:#888">성함</td><td>${esc(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">연락처</td><td>${esc(phone)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">홈페이지</td><td>${siteUrl ? `<a href="${esc(siteUrl)}">${esc(siteUrl)}</a>` : "-"}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;color:#888">유입</td><td>${esc(source)}</td></tr>
    </table>
    ${message ? `<p style="white-space:pre-wrap;border-left:3px solid #C9A96A;padding-left:12px;margin:16px 0">${esc(message)}</p>` : ""}
    ${utmLines ? `<p style="font-size:12px;color:#888">${utmLines}</p>` : ""}
    <p style="font-size:12px;color:#888">referrer: ${esc((body.referrer ?? "-").slice(0, 300))} · ip: ${esc(ip)} · ${new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? "더뷰미디어 상담 <hello@schemaworks.org>",
      to: [process.env.CONSULT_TO ?? "kuny12345@gmail.com"],
      subject: `[상담] ${name} — ${source}`,
      html,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    const detail = res ? await res.text().catch(() => "") : "network";
    console.error("[consult] Resend 발송 실패:", res?.status, detail.slice(0, 300));
    return NextResponse.json(
      { error: "접수에 실패했습니다. 전화로 문의해주세요." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
