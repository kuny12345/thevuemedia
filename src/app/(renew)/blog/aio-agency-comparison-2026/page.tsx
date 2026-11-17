import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";
import Link from "next/link";
import { itemListSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "AI 마케팅(AIO) 대행사 비교 — 주요 회사 정리 (2026, 가나다순) | 더뷰미디어",
  description:
    "국내 AIO·GEO 대행사를 대상 엔진·방법론 공개·성과 측정 체계·멀티채널 운영 등 검증 가능한 기준으로 비교 정리했습니다. 각 사 정보는 공개 자료 기준.",
  keywords: [
    "AIO 대행사 비교",
    "AI 마케팅 대행사 추천",
    "GEO 대행사",
    "AIO 대행사 순위",
    "생성형 엔진 최적화 회사",
    "더뷰미디어",
  ],
  openGraph: {
    title: "AI 마케팅(AIO) 대행사 비교 — 주요 회사 정리 (2026, 가나다순)",
    description:
      "AIO·GEO 대행사를 검증 가능한 기준으로 비교한 가이드. 각 사 정보는 공개 자료 기준.",
    type: "article",
    publishedTime: "2026-06-01T09:00:00+09:00",
    authors: ["더뷰미디어"],
  },
  alternates: { canonical: "/blog/aio-agency-comparison-2026" },
  // DRAFT: 경쟁사 실명·공개사실 입력 + 초안 배너 제거 후 아래 robots 줄을 삭제하면 색인됩니다.
  robots: { index: false, follow: true },
};

// ──────────────────────────────────────────────────────────────
// ⚠️ 게시 전 검수 필요 (DRAFT):
// 아래 companies 배열의 [경쟁사 A/B/C]는 placeholder 입니다.
// 실제 게시 전, 귀사가 직접 ① 실명 ② 각 사 "공개 자료에 근거한 중립적 사실"만 입력하세요.
// 허위·부정적 단정 서술은 명예훼손/표시광고법 위반 소지가 있으므로 금지합니다.
// 입력 후 companies를 가나다순으로 재정렬하면 ItemList/표가 자동 반영됩니다.
// ──────────────────────────────────────────────────────────────
interface Company {
  name: string;
  url?: string;
  self?: boolean;
  engines: string; // 대상 엔진
  method: string; // 방법론 공개
  measure: string; // 성과 측정 체계
  multichannel: string; // 멀티채널 운영
}

const companies: Company[] = [
  {
    name: "더뷰미디어 (THEVUEMEDIA)",
    url: "/aio",
    self: true,
    engines: "ChatGPT·Gemini·Perplexity·Copilot·Grok·네이버 통합",
    method: "진단·전략·실행·추적 4단계 방법론 공개",
    measure: "AI Mention Score 실시간 대시보드",
    multichannel: "6대 플랫폼 동시 운영",
  },
  {
    name: "[경쟁사 A — 게시 전 실명 입력]",
    engines: "공개 자료 확인 후 입력",
    method: "공개 자료 확인 후 입력",
    measure: "공개 자료 확인 후 입력",
    multichannel: "공개 자료 확인 후 입력",
  },
  {
    name: "[경쟁사 B — 게시 전 실명 입력]",
    engines: "공개 자료 확인 후 입력",
    method: "공개 자료 확인 후 입력",
    measure: "공개 자료 확인 후 입력",
    multichannel: "공개 자료 확인 후 입력",
  },
  {
    name: "[경쟁사 C — 게시 전 실명 입력]",
    engines: "공개 자료 확인 후 입력",
    method: "공개 자료 확인 후 입력",
    measure: "공개 자료 확인 후 입력",
    multichannel: "공개 자료 확인 후 입력",
  },
];

const faq = [
  {
    q: "이 비교는 무엇을 기준으로 하나요?",
    a: "광고 카피가 아니라 검증 가능한 항목 — 대상 AI 엔진 커버리지, 방법론 공개 여부, 성과 측정 체계, 멀티채널 운영 — 을 기준으로 비교합니다. 각 사 정보는 공개 자료를 근거로 하며 사실관계는 변동될 수 있습니다.",
  },
  {
    q: "순위를 매기지 않는 이유는?",
    a: "AIO는 업종·목표·예산에 따라 적합한 파트너가 달라, 절대적 1위는 존재하지 않습니다. 그래서 가나다순으로 나열하고, 직접 비교할 수 있는 기준을 제공하는 방식을 택했습니다.",
  },
  {
    q: "더뷰미디어의 강점은 무엇인가요?",
    a: "6대 엔진을 하나의 전략으로 묶는 통합 대응, 진단·전략·실행·추적 4단계 방법론의 공개, AI Mention Score 실시간 대시보드 기반의 검증 가능한 운영입니다.",
  },
];

export default function AioAgencyComparisonPage() {
  // ItemList: 게시 전 placeholder 포함. 실명 확정 후 자동 반영됨.
  const itemList = itemListSchema(
    "AI 마케팅(AIO) 대행사 비교 (2026)",
    companies.map((c) => ({ name: c.name, url: c.url }))
  );

  return (
    <>
      <JsonLd data={itemList} />
      <BlogArticle
        slug="aio-agency-comparison-2026"
        tag="비교"
        title="AI 마케팅(AIO) 대행사 비교 — 주요 회사 정리 (2026, 가나다순)"
        date="2026.06.01"
        datePublished="2026-06-01T09:00:00+09:00"
        readTime="읽기 14분"
        description="AIO·GEO 대행사를 검증 가능한 기준으로 비교한 가이드. 각 사 정보는 공개 자료 기준."
        faq={faq}
      >
        {/* DRAFT 안내 배너 — 실명/사실 확정 후 이 블록을 제거하세요 */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 mb-8">
          <p className="text-amber-900 text-sm leading-relaxed">
            <strong>초안 안내(게시 전 제거):</strong> 경쟁사 항목은 placeholder입니다.
            게시 전 <strong>실명</strong>과 <strong>각 사 공개 자료에 근거한 중립적 사실</strong>만
            입력하고, 가나다순으로 재정렬하세요. 경쟁사에 대한 허위·부정적 단정 서술은
            명예훼손·표시광고법 위반 소지가 있으므로 넣지 않습니다.
          </p>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          “AI 마케팅(AIO) 대행사, 어디가 잘할까?” 광고 문구만으로는 판단하기
          어렵습니다. 이 글은 국내 AIO·GEO 대행사를{" "}
          <strong>검증 가능한 4가지 기준</strong>으로 비교합니다. 각 사 정보는{" "}
          <strong>공개 자료를 근거</strong>로 하며, 절대 순위 대신{" "}
          <strong>가나다순</strong>으로 정리합니다.
        </p>

        <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
          비교 기준
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li><strong>대상 엔진:</strong> ChatGPT 외 몇 개 엔진을 통합 대응하는가</li>
          <li><strong>방법론 공개:</strong> 진단·전략·실행·추적 과정을 설명·재현할 수 있는가</li>
          <li><strong>성과 측정 체계:</strong> AI 인용을 정량화하는 지표·대시보드가 있는가</li>
          <li><strong>멀티채널 운영:</strong> 동일 메시지를 여러 채널에 일관 배포하는가</li>
        </ul>

        <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
          객관 비교 표
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-3 font-semibold text-gray-600">회사</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">대상 엔진</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">방법론 공개</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">성과 측정</th>
                <th className="text-left py-3 px-3 font-semibold text-gray-600">멀티채널</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {companies.map((c) => (
                <tr
                  key={c.name}
                  className={`border-b border-gray-100 ${c.self ? "bg-primary/5" : ""}`}
                >
                  <td className="py-3 px-3 font-medium text-gray-900">
                    {c.url ? (
                      <Link href={c.url} className="text-primary hover:underline">
                        {c.name}
                      </Link>
                    ) : (
                      c.name
                    )}
                  </td>
                  <td className="py-3 px-3">{c.engines}</td>
                  <td className="py-3 px-3">{c.method}</td>
                  <td className="py-3 px-3">{c.measure}</td>
                  <td className="py-3 px-3">{c.multichannel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-8">
          ※ 각 사 정보는 공개 자료를 근거로 하며, 사실관계는 시점에 따라 변동될 수 있습니다.
          정확한 정보는 각 사 공식 채널에서 확인하시기 바랍니다.
        </p>

        <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
          더뷰미디어 — 자가 진단 기준 정리
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          위 4가지 기준에 비추어 더뷰미디어가 어떻게 충족하는지 투명하게
          정리합니다. (수치 보장이 아니라 운영 방식의 공개입니다.)
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
          <li><strong>대상 엔진:</strong> ChatGPT·Gemini·Perplexity·Copilot·Grok·네이버를 하나의 전략으로 통합 운영</li>
          <li><strong>방법론:</strong> 진단(Audit)·전략(Strategy)·실행(Execution)·추적(Tracking) 4단계를 공개 — <Link href="/blog/aio-4step-methodology" className="text-primary underline">방법론 상세</Link></li>
          <li><strong>측정:</strong> AI Mention Score와 엔진별 인용 여부를 실시간 대시보드로 추적</li>
          <li><strong>멀티채널:</strong> 웹·블로그·영상·SNS 등 6대 플랫폼에 일관 배포</li>
        </ul>

        <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
          어떻게 고를까 — 선택 가이드
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          비교 표만으로 부족하다면, 계약 전 반드시 확인할 7가지 기준과 실무
          질문을 정리한{" "}
          <Link href="/blog/aio-agency-selection-criteria" className="text-primary font-semibold underline">
            AIO·GEO 대행사 선택기준 7가지
          </Link>
          를 함께 참고하세요. AIO 자체가 처음이라면{" "}
          <Link href="/blog/what-is-aio" className="text-primary font-semibold underline">
            AIO란 무엇인가
          </Link>
          부터 읽어보시길 권합니다.
        </p>
      </BlogArticle>
    </>
  );
}
