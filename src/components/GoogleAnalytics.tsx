import Script from "next/script";

// GA4 — 더뷰미디어 계정 > "더뷰미디어 (thevuemedia.com)" 속성의 웹 스트림 측정 ID (공개값).
// 페이지 이동은 GA4 향상된 측정의 "브라우저 기록 이벤트 기반 페이지 변경"이 page_view로 잡는다.
const GA_ID = "G-4589T9S4L7";

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
