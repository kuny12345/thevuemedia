import Script from "next/script";

// GA4 — 더뷰미디어 계정 > "더뷰미디어 (thevuemedia.com)" 속성의 웹 스트림 측정 ID (공개값).
// 페이지 이동은 GA4 향상된 측정의 "브라우저 기록 이벤트 기반 페이지 변경"이 page_view로 잡는다.
const GA_ID = "G-4589T9S4L7";

// 내부 방문 제외: 운영자 IP가 유동이라 IP 필터 대신 브라우저 단위 표시를 쓴다.
// 아무 페이지나 ?internal=1 로 한 번 열면 이 브라우저의 방문에 traffic_type=internal 이 붙고,
// GA4 데이터 필터 "Internal Traffic"(활성)이 보고서에서 제외한다. ?internal=0 으로 해제.
// 주의: traffic_type 은 config 파라미터로 넘기면 무시되고(2026-11 실측), gtag('set') 이어야 tt=internal 로 전송된다.
const INIT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());
try{var q=new URLSearchParams(location.search).get('internal');if(q==='1')localStorage.setItem('ga_internal','1');if(q==='0')localStorage.removeItem('ga_internal');if(localStorage.getItem('ga_internal')==='1')gtag('set',{traffic_type:'internal'});}catch(e){}
gtag('config','${GA_ID}');`;

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {INIT}
      </Script>
    </>
  );
}
