import Script from "next/script";

// GA4 — 더뷰미디어 계정 > "더뷰미디어 (thevuemedia.com)" 속성의 웹 스트림 측정 ID (공개값).
// 페이지 이동은 GA4 향상된 측정의 "브라우저 기록 이벤트 기반 페이지 변경"이 page_view로 잡는다.
const GA_ID = "G-4589T9S4L7";

// 내부 방문 제외: 운영자 IP가 유동이라 IP 필터 대신 브라우저 단위로 끈다.
// 아무 페이지나 ?internal=1 로 한 번 열면 이 브라우저에서는 GA를 아예 불러오지 않는다. ?internal=0 으로 해제.
// (traffic_type=internal 표시 방식은 쓰지 않는다 — 2026-11 실측: 업그레이드된 Google 태그는 config 시점의
//  첫 page_view 에 config 파라미터·gtag('set') 값을 붙이지 않고 send_page_view:false 도 무시했다.)
const INIT = `(function(){var internal=false;try{var q=new URLSearchParams(location.search).get('internal');if(q==='1')localStorage.setItem('ga_internal','1');if(q==='0')localStorage.removeItem('ga_internal');internal=localStorage.getItem('ga_internal')==='1';}catch(e){}
if(internal)return;
window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config','${GA_ID}');
var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';document.head.appendChild(s);})();`;

export function GoogleAnalytics() {
  return (
    <Script id="ga4-init" strategy="afterInteractive">
      {INIT}
    </Script>
  );
}
