/* 더뷰미디어 홈 — 스크롤 인터랙션 (리뉴얼 시안에서 이식). 브라우저에서만 실행. */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import posthog from 'posthog-js';

let started = false;
export function initHome(){
  if (started) return; started = true;
  window.gsap = gsap; window.ScrollTrigger = ScrollTrigger; /* 브라우저 콘솔·점검용 */

  /* 글자 나누기 */
  function split(el){ var t = el.textContent; el.innerHTML = t.split('').map(function(c){ return '<span>'+c+'</span>'; }).join(''); return [].slice.call(el.children); }
  var heroL2 = document.getElementById('heroL2');
  if (!heroL2.querySelector('.c')) heroL2.innerHTML = [['지금은 ',''],['AI 추천','em'],['이',''],['<br>',''],['시작됐습니다.','']].map(function(p){ if (p[0] === '<br>') return '<br>'; return p[0].split('').map(function(c){ return c === ' ' ? ' ' : '<span class="c' + (p[1] ? ' ' + p[1] : '') + '">' + c + '</span>'; }).join(''); }).join('') + '<span class="caret"></span>';
  var atBel = document.getElementById('atB'), atB = atBel ? split(atBel) : [];
  var atAel = document.getElementById('atA');
  if (atAel) (function(){ var html=''; atAel.childNodes.forEach(function(n){ var isB = n.nodeName==='B'; var t=n.textContent; t.split('').forEach(function(c){ html += isB? '<b><span>'+c+'</span></b>' : '<span>'+(c===' '?'&nbsp;':c)+'</span>'; }); }); atAel.innerHTML = html; })();
  var atA = atAel ? [].slice.call(atAel.querySelectorAll('span')) : [];

  document.querySelectorAll('.qa-q').forEach(function(b){ b.addEventListener('click', function(){ var q = b.parentElement, open = q.classList.contains('open'); document.querySelectorAll('.qa.open').forEach(function(o){ o.classList.remove('open'); }); if (!open) q.classList.add('open'); }); });
  /* 서비스 상세 창 (열기: 카드 / 닫기: ×, Esc, 바깥 영역) */
  (function(){
    var root = document.documentElement, ps = [].slice.call(document.querySelectorAll('#drBody .sv-p')), dr = document.getElementById('drawer'), last = null;
    function open(i){ ps.forEach(function(p, k){ p.classList.toggle('cur', k === i); }); dr.scrollTop = 0; root.classList.add('dr-open'); dr.setAttribute('aria-hidden', 'false'); if (window.__lenis) window.__lenis.stop(); setTimeout(function(){ document.getElementById('drX').focus({ preventScroll: true }); }, 50); }
    function close(){ root.classList.remove('dr-open'); dr.setAttribute('aria-hidden', 'true'); if (window.__lenis) window.__lenis.start(); if (last) last.focus({ preventScroll: true }); }
    document.querySelectorAll('.sc').forEach(function(c){ c.addEventListener('click', function(){ last = c; open(+c.dataset.i); }); });
    document.getElementById('drX').addEventListener('click', close);
    document.getElementById('drDim').addEventListener('click', close);
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && root.classList.contains('dr-open')) close(); });
  })();
  /* 'How It Looks (예시)' 장면: 지금은 숨김 (true로 바꾸면 다시 보임) */
  var SHOW_S4 = false;
  if (!SHOW_S4) { var s4el = document.getElementById('s4'); if (s4el) s4el.remove(); }

  /* 상담 신청 폼 → /api/consult (Resend 메일) — 기존 ConsultForm과 같은 동작 */
  (function(){
    var f = document.getElementById('consultForm'); if (!f) return;
    var st = document.getElementById('cfStatus'), btn = f.querySelector('button[type="submit"]');
    var params = new URLSearchParams(location.search), utm = {};
    params.forEach(function(v, k){ if (k.indexOf('utm_') === 0) utm[k] = v; });
    var source = params.get('ref') || params.get('utm_source') || (document.referrer ? (function(){ try { return new URL(document.referrer).hostname; } catch (e) { return 'direct'; } })() : 'direct');
    function fail(msg){ st.textContent = msg; btn.disabled = false; btn.textContent = '상담 신청하기'; }
    f.addEventListener('submit', function(e){
      e.preventDefault(); if (btn.disabled) return;
      var d = new FormData(f); btn.disabled = true; btn.textContent = '접수 중…'; st.textContent = '';
      fetch('/api/consult', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: d.get('name'), phone: d.get('phone'), siteUrl: d.get('siteUrl'), message: d.get('message'), website: d.get('website'), source: source, utm: utm, referrer: document.referrer }) })
        .then(function(res){ return res.json().catch(function(){ return {}; }).then(function(j){ return { ok: res.ok, j: j }; }); })
        .then(function(r){
          if (!r.ok) return fail(r.j.error || '접수에 실패했습니다.');
          f.innerHTML = '<div class="cf-done"><p class="lb">Received</p><h3>상담 신청이 접수되었습니다</h3><p>영업일 기준 1일 내에 담당자가 연락드립니다.<br>급하신 경우 전화로 문의해주세요.</p></div>';
          try { posthog.capture('consult_submitted', { source: source }); } catch (err) { /* noop */ }
        })
        .catch(function(){ fail('네트워크 오류가 발생했습니다.'); });
    });
  })();
  var prm = window.matchMedia('(prefers-reduced-motion: reduce)').matches, reduce = prm || window.innerWidth <= 1100;
  if (reduce) {
    document.documentElement.classList.add('reduced');
    if (!prm) document.documentElement.classList.add('mob');
    heroL2.querySelectorAll('.c').forEach(function(c){ c.style.opacity = 1; });
    [].concat(atA).forEach(function(c){ c.style.opacity = 1; }); document.querySelectorAll('#chat .stream').forEach(function(p){ var t = p.textContent, k = t.indexOf('[브랜드]'), cs = split(p); cs.forEach(function(c){ c.style.opacity = 1; }); if (k >= 0) for (var j = k; j < k + 5; j++) cs[j].classList.add('br'); });
    /* AIRank: 데스크톱에서 판 옆에 붙던 설명을 각 판 위 제목으로 옮김 */
    var cos = document.querySelectorAll('.s3 .co'); document.querySelectorAll('#xp .plate').forEach(function(pl, i){ if (!cos[i]) return; var cap = document.createElement('p'); cap.className = 'plate-cap'; cap.innerHTML = cos[i].innerHTML; pl.insertBefore(cap, pl.firstChild); });
    document.getElementById('swNum').textContent = '68'; document.getElementById('swArc').style.strokeDashoffset = 314.16 * 0.32;
    var srcA = document.getElementById('srcA'), pill = document.getElementById('appPill'); if (srcA) srcA.style.opacity = 1; if (pill) pill.textContent = '근거 기반 등장';
    if (!prm) mobileMotion();
    return;
  }
  /* ---------- 폰·태블릿: 화면에 들어올 때 한 번씩 재생되는 애니메이션 ---------- */
  function mobileMotion(){
    var $ = function(q, r){ return [].slice.call((r || document).querySelectorAll(q)); };
    function count(el, dur){ var to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), from = parseFloat(el.dataset.from || 0), o = { v: from }; el.textContent = from.toFixed(dec); gsap.to(o, { v: to, duration: dur, ease: 'power2.out', onUpdate: function(){ el.textContent = o.v.toFixed(dec); } }); }
    var hooks = new Map();
    function on(el, fn){ hooks.set(el, fn); }
    /* 1) 차례로 떠오르는 블록 (같은 부모 안에서는 0.09초씩 간격) */
    var groups = ['.head', '.proc-h', '.proc .pc', '.chat', '.sw', '.sw-cats .cat', '#xp .plate', '.svc2-h', '.svc2 .sc', '.ind-h', '#indTrack .ic', '.faq-h', '#faqList .qa', '.contact .in > p, .contact .in > h2', '.contact .form > *:not(.hp):not(.cf-st)', '.note'];
    groups.forEach(function(q){ $(q).forEach(function(el){ el.classList.add('rv'); var sib = $(':scope > .rv', el.parentNode); el.style.transitionDelay = Math.min(sib.indexOf(el), 6) * 0.09 + 's'; }); });
    /* 2) 히어로: 순서대로 등장 + 제목 글자 차례로 + 숫자 올라가기 */
    var hero = ['.hero .badge', '.hero .pre', '.hero .l2', '.hero .sub', '.hero .acts', '.hero .facts'].map(function(q){ return document.querySelector(q); });
    hero.forEach(function(el, k){ el.classList.add('rv'); el.style.transitionDelay = (k < 3 ? k * 0.15 : 0.9 + (k - 3) * 0.15) + 's'; });
    var chars = $('.hero .l2 .c'); chars.forEach(function(c){ c.style.opacity = 0; });
    requestAnimationFrame(function(){ hero.forEach(function(el){ el.classList.add('on'); }); chars.forEach(function(c, k){ setTimeout(function(){ c.style.opacity = 1; }, 380 + k * 45); }); setTimeout(function(){ $('.hero .facts .cnt').forEach(function(el){ count(el, 1.4); }); }, 1300); });
    /* 3) AI 대화: 질문 → 적용 전 답변 → 적용 후 답변이 글자 단위로 나타남 */
    var chat = document.getElementById('chat');
    if (chat) { var cu = chat.querySelector('.c-user'), as = $('.c-ai', chat), src = document.getElementById('srcA');
      gsap.set([cu].concat(as, src || []), { opacity: 0, y: 12 }); $('.stream span', chat).forEach(function(c){ c.style.opacity = 0; });
      on(chat, function(){ var tl = gsap.timeline({ delay: 0.4 }); tl.to(cu, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' });
        as.forEach(function(a, k){ tl.to(a, { opacity: 1, y: 0, duration: 0.35 }, '+=0.35'); tl.to($('.stream span', a), { opacity: 1, duration: 0.01, stagger: 0.014 }); });
        if (src) tl.to(src, { opacity: 1, y: 0, duration: 0.35, ease: 'back.out(2)' }, '+=0.1'); }); }
    /* 4) 진단: 점수 원이 차오르며 0 → 68 */
    var sw = document.querySelector('.sw'), arc = document.getElementById('swArc'), num = document.getElementById('swNum');
    if (sw && arc) { var C = 314.16; arc.style.strokeDashoffset = C; num.textContent = '0';
      on(sw, function(){ var o = { v: 0 }; gsap.to(o, { v: 68, duration: 1.4, delay: 0.5, ease: 'power2.out', onUpdate: function(){ num.textContent = Math.round(o.v); arc.style.strokeDashoffset = C * (1 - o.v / 100); } }); }); }
    /* 5) AIRank: 판이 들어오면 숫자 올라가기 */
    $('#xp .plate').forEach(function(pl){ var ns = $('.cnt3', pl); if (!ns.length) return; ns.forEach(function(el){ el.textContent = (0).toFixed(+(el.dataset.dec || 0)); }); on(pl, function(){ setTimeout(function(){ ns.forEach(function(el){ count(el, 1.2); }); }, 300); }); });
    /* Process 안내 문구: 카드가 처음 보일 때 함께 */
    var loop = document.querySelector('.proc-loop'), pc0 = document.querySelector('.proc .pc'); if (loop && pc0) { loop.classList.add('rv'); on(pc0, function(){ loop.classList.add('on'); }); }
    /* 화면에 15% 들어오면 한 번 재생 */
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (!e.isIntersecting) return; e.target.classList.add('on'); var fn = hooks.get(e.target); if (fn) { hooks.delete(e.target); fn(); } io.unobserve(e.target); }); }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    $('.rv').forEach(function(el){ if (hero.indexOf(el) < 0 && el !== loop) io.observe(el); });
  }

  gsap.registerPlugin(ScrollTrigger);
  /* 세로 가운데 맞춤: 헤더(72px) 아래 남은 화면의 가운데 */
  gsap.set(['.head', '.sw', '.chat', '.win'], { yPercent: -50 });
  /* 부드러운 스크롤 (레퍼런스 값: lerp 0.1, 아래로 앞서가는 양 화면 55%로 제한) */
  var lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1.05, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function(t){ lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);
  gsap.ticker.add(function(){ var cap = innerHeight * 0.6; if (lenis.targetScroll - lenis.animatedScroll > cap) lenis.targetScroll = lenis.animatedScroll + cap; });
  ScrollTrigger.addEventListener('refresh', function(){ lenis.resize(); });
  window.__lenis = lenis;
  /* 메뉴·버튼으로 이동: 고정 장면이면 등장 애니메이션이 끝난 지점으로 (시작 지점은 내용이 아직 안 보임) */
  function anchorY(t){
    var st = ScrollTrigger.getAll().find(function(s){ return s.pin && (s.trigger === t || t.contains(s.trigger)); });
    if (!st || !st.animation) return t;
    var tl = st.animation, end = 0;
    tl.getChildren(false, true, true).forEach(function(c){
      var tg = c.targets ? c.targets() : null;
      if (tg && tg.length && tg[0] && typeof tg[0] === 'object' && !tg[0].nodeType && !Array.isArray(tg[0])) return; /* 빈 '머무름' 구간 */
      end = Math.max(end, c.endTime());
    });
    var p = Math.min(1, end / tl.duration() + 0.01);
    return Math.round(st.start + (st.end - st.start) * p);
  }
  window.__anchorY = anchorY;
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ var t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); lenis.scrollTo(anchorY(t), { duration: 1.2 }); } }); });

  /* 숫자 0에서 올라가기 */
  function countUp(els, dur){ var t = gsap.timeline(); [].forEach.call(els, function(el){ var to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), from = parseFloat(el.dataset.from || 0), o = { v: from }; el.textContent = from.toFixed(dec); t.to(o, { v: to, duration: dur, ease: 'power2.out', onUpdate: function(){ el.textContent = o.v.toFixed(dec); } }, 0); }); return t; }
  var END = function(m){ return function(){ return '+=' + Math.round(innerHeight * m); }; };
  var actTL = function(sel, mult){ return gsap.timeline({ scrollTrigger: { trigger: sel + ' .pin', start: 'top top', end: END(mult), pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true } }); };
  var headIn = function(tl, sel){ tl.fromTo(sel + ' .head', { opacity: 0, y: 54, scale: 1.04 }, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' }, 0); };
  var rel = function(el){ var r = el.getBoundingClientRect(); return { x: r.left - gsap.getProperty(el, 'x'), y: r.top - gsap.getProperty(el, 'y') }; };

  /* ---------- 히어로 인트로 ---------- */
  var hero = gsap.timeline({ defaults: { ease: 'power3.out' } });
  hero.from('#hd', { y: -16, opacity: 0, duration: 0.9 }, 0.1)
      .to('.hero .badge', { opacity: 1, duration: 0.6 }, 0.2)
      .to('.hero .pre', { opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.3)
      .to(heroL2.querySelectorAll('.c'), { opacity: 1, duration: 0.01, stagger: 0.07 }, 0.9)
      .to('.hero .sub', { opacity: 1, duration: 0.9, ease: 'power2.out' }, '+=0.15')
      .to('.hero .acts', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '<0.1')
      .to('.hero .facts', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '<0.15')
      .add(countUp(document.querySelectorAll('.hero .cnt'), 1.4), '<')
      .to('.cue', { opacity: 1, duration: 0.6 }, '<0.2');

  /* ---------- 장면 2 · AI 서비스에 질문 → 분석 → 답변 ---------- */
  (function(){
    var Q = '우리 지역에서 믿을 만한 ○○ 업체 추천해줘.';
    var field = document.getElementById('cField'); field.innerHTML = Q.split('').map(function(c){ return '<span>' + (c === ' ' ? '&nbsp;' : c) + '</span>'; }).join('');
    var fc = field.querySelectorAll('span');
    var streams = [].map.call(document.querySelectorAll('#chat .stream'), function(p){ var cs = split(p), t = p.textContent, k = t.indexOf('[브랜드]'); if (k >= 0) for (var j = k; j < k + 5; j++) cs[j].classList.add('br'); return cs; });
    function typeBuild(el){ var html = ''; el.childNodes.forEach(function(n){ if (n.nodeName === 'BR') { html += '<br>'; return; } var em = n.nodeName === 'EM'; n.textContent.split('').forEach(function(c){ var sp = c === ' ' ? ' ' : '<span class="c">' + c + '</span>'; html += em && c !== ' ' ? '<em>' + sp + '</em>' : sp; }); }); el.innerHTML = html + '<span class="caret"></span>'; return el.querySelectorAll('.c'); }
    var FINALE = false; /* 'AI가 믿는 브랜드.' 마무리 장면: 일단 숨김 (true로 바꾸면 다시 켜짐) */
    if (FINALE) document.getElementById('geoFinal').classList.remove('off');
    var gc = typeBuild(document.getElementById('geoFinalH')), gc2 = typeBuild(document.getElementById('geoFinalH2'));
    gsap.set('#geoFinal', { yPercent: -50 });
    var row = document.getElementById('tokrow2'), toks = [].slice.call(row.querySelectorAll('.tok2')), words = [].slice.call(document.querySelectorAll('#cQ .w'));
    var svg = document.getElementById('arcs2'), pairs = [[0,2,'#0064E0'],[1,4,'#00D4FF'],[2,3,'#8595A4'],[0,3,'#0091FF']];
    (function(){ var W = row.offsetWidth; svg.setAttribute('width', W); svg.setAttribute('height', 60); svg.style.top = (toks[0].offsetTop + toks[0].offsetHeight) + 'px';
      svg.innerHTML = pairs.map(function(p, i){ var a = toks[p[0]], b = toks[p[1]], x1 = a.offsetLeft + a.offsetWidth / 2, x2 = b.offsetLeft + b.offsetWidth / 2, h = 18 + i * 6; return '<path stroke="' + p[2] + '" d="M' + x1 + ' 2 Q ' + (x1 + x2) / 2 + ' ' + h * 2 + ' ' + x2 + ' 2"/>'; }).join('');
      [].forEach.call(svg.querySelectorAll('path'), function(p){ var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.dataset.len = L; }); })();
    var tl = actTL('.s2', FINALE ? 5.2 : 2.9); headIn(tl, '.s2');
    tl.fromTo('#chat', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.3);
    tl.to(fc, { opacity: 1, duration: 0.01, stagger: 0.028 }, 0.6);
    tl.to('#cSend', { backgroundColor: '#0064E0', duration: 0.15 }, 1.35);
    tl.to('#cSend', { scale: 0.88, duration: 0.08, yoyo: true, repeat: 1 }, 1.45);
    tl.to(fc, { opacity: 0, duration: 0.15 }, 1.6);
    tl.set(fc, { display: 'none' }, 1.76);
    tl.to('#cSend', { backgroundColor: '#CED0D4', duration: 0.2 }, 1.65);
    tl.fromTo('#cUser', { opacity: 0, y: 60, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power3.out' }, 1.6);
    tl.to('#cThink', { opacity: 1, duration: 0.25 }, 2.0);
    var TOK = 2.1;
    toks.forEach(function(t, i){
      tl.fromTo(t, { opacity: 0, x: function(){ var w = words[i].getBoundingClientRect(), r = row.getBoundingClientRect(); return w.left - (r.left + t.offsetLeft); }, y: function(){ var w = words[i].getBoundingClientRect(), r = row.getBoundingClientRect(); return w.top - (r.top + t.offsetTop); } },
        { opacity: 1, x: 0, y: 0, duration: 0.55, ease: 'power2.inOut', immediateRender: false }, TOK + i * 0.11);
    });
    [].forEach.call(svg.querySelectorAll('path'), function(p, i){ tl.fromTo(p, { strokeDashoffset: +p.dataset.len }, { strokeDashoffset: 0, duration: 0.45, ease: 'power1.inOut', immediateRender: false }, 2.8 + i * 0.12); });
    tl.to('#cThink .c-dots', { opacity: 0, duration: 0.2 }, 3.65);
    tl.to('#cThink', { opacity: 0, duration: 0.25 }, 3.85);
    tl.to('#cThink', { height: 0, paddingTop: 0, paddingBottom: 0, marginBottom: -14, duration: 0.4, ease: 'power2.inOut' }, 4.1);
    tl.fromTo('#cA1', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }, 4.2);
    tl.to(streams[0], { opacity: 1, duration: 0.01, stagger: 0.012 }, 4.35);
    tl.fromTo('#cA2', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }, 4.85);
    tl.to(streams[1], { opacity: 1, duration: 0.01, stagger: 0.012 }, 5.0);
    tl.fromTo('#pillA', { scale: 0.6 }, { scale: 1, duration: 0.45, ease: 'back.out(2)' }, 5.55);
    tl.to('#srcA', { opacity: 1, duration: 0.3 }, 5.65);
    if (FINALE) {
    /* 마무리: 화면이 사라지고 GEO 문장이 가운데에서 써짐 */
      tl.to(['.s2 .head', '#chat'], { opacity: 0, y: -30, duration: 0.5, ease: 'power2.in' }, 6.2);
      tl.fromTo('#geoFinal', { opacity: 0 }, { opacity: 1, duration: 0.01 }, 6.7);
      var T1 = 6.75, E1 = T1 + gc.length * 0.07;
      tl.to(gc, { opacity: 1, duration: 0.01, stagger: 0.07 }, T1);
      tl.fromTo('#geoFinalH .caret', { visibility: 'hidden' }, { visibility: 'visible', duration: 0.01 }, E1);
      tl.to('#geoFinalH', { opacity: 0, y: -24, duration: 0.4, ease: 'power2.in' }, E1 + 0.6);
      var T2 = E1 + 1.1, E2 = T2 + gc2.length * 0.045;
      tl.to(gc2, { opacity: 1, duration: 0.01, stagger: 0.045 }, T2);
      tl.fromTo('#geoFinalH2 .caret', { visibility: 'hidden' }, { visibility: 'visible', duration: 0.01 }, E2);
    }
    tl.to({}, { duration: 0.6 });
  })();



  /* ---------- 프로세스 · 히어로 다음 장면과 같은 효과 (화면 고정 + 스크롤 연동 등장) ---------- */
  (function(){
    var tl = gsap.timeline({ scrollTrigger: { trigger: '.proc', start: 'top top', end: END(1.4), pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true } });
    tl.fromTo('.proc-h', { opacity: 0, y: 54, scale: 1.04 }, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' }, 0);
    tl.fromTo('.proc .pc', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.12 }, 0.5);
    tl.fromTo('.proc-loop', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.5);
    tl.to({}, { duration: 0.5 });
  })();

  /* ---------- 장면 1 · schemaWorks 진단 흐름 ---------- */
  (function(){
    var url = document.getElementById('swUrl'), t = url.textContent; url.innerHTML = t.split('').map(function(c){ return '<span>' + c + '</span>'; }).join('');
    var uc = url.querySelectorAll('span'), steps = [].slice.call(document.querySelectorAll('#swSteps li')), lines = [].slice.call(document.querySelectorAll('#swCode .ln.hit'));
    var tl = actTL('#s1', 3.2); headIn(tl, '#s1');
    tl.fromTo('#sw', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.4);
    tl.to(uc, { opacity: 1, duration: 0.01, stagger: 0.03 }, 0.8);
    tl.to('.sw-kind .k1', { backgroundColor: '#2A3747', borderColor: '#2A3747', color: '#fff', duration: 0.2 }, 1.45);
    tl.to('#swGo', { scale: 0.92, duration: 0.1, yoyo: true, repeat: 1 }, 1.7);
    steps.forEach(function(li, i){ tl.call(function(){ li.classList.toggle('done', tl.time() >= 2.0 + i * 0.38); }, null, 2.0 + i * 0.38); });
    tl.fromTo('#swProg', { width: '0%' }, { width: '100%', duration: 1.9, ease: 'none' }, 1.9);
    tl.to('#swLine', { opacity: 1, duration: 0.1 }, 2.6);
    tl.fromTo('#swLine', { top: 60 }, { top: function(){ var c = document.getElementById('swCode'); return c.offsetTop + c.offsetHeight - 8; }, duration: 0.9, ease: 'power1.inOut' }, 2.6);
    lines.forEach(function(l, i){ tl.call(function(){ l.classList.toggle('lit', tl.time() >= 2.75 + i * 0.25); }, null, 2.75 + i * 0.25); });
    tl.to('#swLine', { opacity: 0, duration: 0.15 }, 3.5);
    tl.to('#swRun', { opacity: 0, y: -16, duration: 0.35, ease: 'power2.in' }, 4.0);
    tl.fromTo('#swRep', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, 4.25);
    var n = { v: 0 }, SCORE = 68;
    tl.to('#swArc', { strokeDashoffset: 314.16 * (1 - SCORE / 100), duration: 0.8, ease: 'power2.out' }, 4.4);
    tl.to(n, { v: SCORE, duration: 0.8, ease: 'power2.out', onUpdate: function(){ document.getElementById('swNum').textContent = Math.round(n.v); } }, 4.4);
    tl.fromTo('.sc-grade', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' }, 5.0);
    tl.fromTo('.cat', { opacity: 0, x: 14 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.1 }, 4.6);
    tl.fromTo('.sw-ex', { opacity: 0 }, { opacity: 1, duration: 0.3 }, 5.2);
    tl.to({}, { duration: 0.6 });
  })();

  /* ---------- 장면 3 · AIRank 분해도 (레퍼런스 02 구조) ---------- */
  (function(){
    var plates = [].slice.call(document.querySelectorAll('#xp .plate')), cos = [].slice.call(document.querySelectorAll('.s3 .co')), pulse = document.getElementById('pulse');
    var COMPACT = [-14, -5, 5, 14], OPEN = [-216, -72, 72, 216];
    gsap.set(plates, { xPercent: -50, yPercent: -50, rotationX: 56, y: function(i){ return COMPACT[i]; } });
    gsap.set(pulse, { xPercent: -50, yPercent: -50, y: OPEN[0], x: -200 });
    function placeCos(){ var xp = document.getElementById('xp'), st = xp.parentElement.getBoundingClientRect(), base = xp.getBoundingClientRect().top - st.top; cos.forEach(function(c, i){ c.style.top = (base + OPEN[i] - 12) + 'px'; }); }
    placeCos(); ScrollTrigger.addEventListener('refreshInit', placeCos);
    var tl = actTL('.s3', 2.3); headIn(tl, '.s3');
    tl.fromTo('#xp', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, 0.6);
    plates.forEach(function(p, i){ tl.to(p, { y: OPEN[i], rotationX: 16, duration: 0.9, ease: 'power2.inOut' }, 1.2 + i * 0.06); });
    tl.fromTo(cos, { opacity: 0, x: 12 }, { opacity: 0.9, x: 0, duration: 0.4, stagger: 0.08, immediateRender: false }, 1.7);
    tl.add(countUp(document.querySelectorAll('.s3 .cnt3'), 0.9), 1.4);
    tl.to(pulse, { opacity: 1, duration: 0.15 }, 2.5);
    plates.forEach(function(p, i){
      if (i) tl.to(pulse, { y: OPEN[i], duration: 0.3, ease: 'power1.inOut' }, 2.55 + i * 0.5);
      tl.call(function(){ plates.forEach(function(q, j){ q.classList.toggle('hot', j === i); }); }, null, 2.6 + i * 0.5 + 0.25);
      tl.to(cos[i], { opacity: 1, duration: 0.2 }, 2.6 + i * 0.5 + 0.25);
    });
    tl.to(pulse, { x: -128, opacity: 0, duration: 0.35, ease: 'power1.in' }, 4.6);
    tl.call(function(){ plates.forEach(function(q){ q.classList.remove('hot'); }); }, null, 4.7);
    tl.to(cos, { opacity: 0, x: 10, duration: 0.3 }, 5.1);
    plates.forEach(function(p, i){ tl.to(p, { y: COMPACT[i], rotationX: 56, duration: 0.8, ease: 'power2.inOut' }, 5.2 + i * 0.04); });
    tl.to({}, { duration: 0.5 });
  })();

  /* ---------- 장면 4 · AI 서비스 화면 (도입 전 → 후) ---------- */
  (function(){
    if (!SHOW_S4) return;
    var ind = document.getElementById('segInd'), sB = document.getElementById('segB'), sA = document.getElementById('segA'), pill = document.getElementById('appPill');
    function segSize(){ gsap.set(ind, { width: sB.offsetWidth }); }
    segSize(); ScrollTrigger.addEventListener('refreshInit', segSize);
    var tl = actTL('.s4', 1.8); headIn(tl, '.s4');
    tl.fromTo('#win', { opacity: 0, y: 40, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }, 0.5);
    tl.fromTo('#ubub', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35 }, 1.0);
    tl.to('#aiw', { opacity: 1, duration: 0.3 }, 1.3);
    tl.to(atB, { opacity: 1, duration: 0.01, stagger: 0.018 }, 1.4);
    tl.fromTo('#appear', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 }, 2.4);
    tl.to(ind, { x: function(){ return sA.offsetLeft - 3; }, width: function(){ return sA.offsetWidth; }, duration: 0.35, ease: 'power3.inOut' }, 3.0);
    tl.call(function(){ var after = tl.time() >= 3.1; sA.classList.toggle('on', after); sB.classList.toggle('on', !after); pill.textContent = after ? '근거 기반 등장' : '미등장'; pill.style.background = after ? 'var(--primary)' : ''; pill.style.color = after ? '#fff' : ''; }, null, 3.1);
    tl.to('#atB', { opacity: 0, duration: 0.3 }, 3.1);
    tl.to(atA, { opacity: 1, duration: 0.01, stagger: 0.018 }, 3.35);
    tl.fromTo(pill, { scale: 0.6 }, { scale: 1, duration: 0.45, ease: 'back.out(2)', immediateRender: false }, 3.2);
    tl.fromTo('#atA b span', { textShadow: '0 0 0 rgba(0,100,224,0)' }, { textShadow: '0 0 14px rgba(0,100,224,.45)', duration: 0.3, yoyo: true, repeat: 1 }, 4.4);
    tl.to({}, { duration: 0.6 });
  })();

  /* ---------- 서비스 · 카드 8개 (진입: 화면 고정 + 스크롤 연동 등장) ---------- */
  (function(){
    var tl = gsap.timeline({ scrollTrigger: { trigger: '.svc2', start: 'top top', end: END(1.1), pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true } });
    tl.fromTo('.svc2-h', { opacity: 0, y: 54, scale: 1.04 }, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' }, 0);
    tl.fromTo('.svc2 .sc', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.07 }, 0.45);
    tl.to({}, { duration: 0.5 });
  })();

  /* ---------- 업종 · 화면 고정 + 아래로 스크롤하면 카드가 옆으로 흐름 (휠 입력은 하나: 페이지 스크롤) ---------- */
  (function(){
    var view = document.getElementById('indView'), track = document.getElementById('indTrack'), base = [].slice.call(track.children);
    /* 끝없이 이어지도록 같은 카드 묶음을 2벌 더 붙임 (스크린리더에는 1벌만) */
    for (var n = 0; n < 2; n++) base.forEach(function(c){ var d = c.cloneNode(true); d.setAttribute('aria-hidden', 'true'); track.appendChild(d); });
    var cards = [].slice.call(track.children), setW = 0, drift = 0, x = 0, live = false;
    var SPEED = 24;            /* 스크롤하지 않을 때 저절로 흐르는 속도: 초당 24px */
    var DIST = 1.15;           /* 고정 구간 동안 카드가 흐르는 거리: 카드 1벌 너비의 1.15배 */
    function measure(){ setW = cards[base.length].offsetLeft - cards[0].offsetLeft; }
    function cover(){ var w = view.clientWidth, cx = w / 2;
      cards.forEach(function(c){ var mid = x + c.offsetLeft + c.offsetWidth / 2, d = (mid - cx) / (w / 2); d = Math.max(-1.4, Math.min(1.4, d));
        c.style.transform = 'translateZ(' + (-Math.abs(d) * 180).toFixed(1) + 'px) rotateY(' + (-d * 22).toFixed(2) + 'deg) scale(' + (1 - Math.min(Math.abs(d) * 0.14, 0.22)).toFixed(3) + ')'; }); }
    var tl = actTL('.ind', 2.6);
    tl.fromTo('.ind-h', { opacity: 0, y: 54, scale: 1.04 }, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' }, 0);
    tl.fromTo(view, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.4);
    tl.to({}, { duration: 2.2 });
    var st = tl.scrollTrigger;
    function place(){ if (!setW) return; var o = drift + st.progress * setW * DIST; o = ((o % setW) + setW) % setW; x = -setW * 0.5 - o; gsap.set(track, { x: x }); cover(); }
    gsap.ticker.add(function(t, dt){ if (!live) return; drift += SPEED * Math.min(dt, 50) / 1000; place(); });
    ScrollTrigger.create({ trigger: 'section.act.ind', start: 'top bottom', end: 'bottom top', onToggle: function(self){ live = self.isActive; } });
    function init(){ measure(); place(); }
    init(); ScrollTrigger.addEventListener('refresh', init);
    window.__ind = { get x(){ return x; }, get setW(){ return setW; }, get live(){ return live; }, get progress(){ return st.progress; } };
  })();



  /* ---------- FAQ · 상담: 앞 장면과 같은 진입 (화면 고정 + 스크롤 연동 등장) ---------- */
  (function(){
    var pinTL = function(sel, mult){ return gsap.timeline({ scrollTrigger: { trigger: sel, start: 'top top', end: END(mult), pin: true, scrub: 1, anticipatePin: 1, invalidateOnRefresh: true } }); };
    var HEAD = [{ opacity: 0, y: 54, scale: 1.04 }, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' }];
    /* FAQ: 내용이 화면 안에 들어갈 때만 고정 (작은 화면에서는 아래가 잘리지 않게 고정 없이 등장만) */
    var fits = document.querySelector('.faq-in').offsetHeight + 72 + 24 <= innerHeight;
    var f = fits ? pinTL('.faq', 1.1) : gsap.timeline({ scrollTrigger: { trigger: '.faq', start: 'top 85%', end: 'top 15%', scrub: 1 } });
    f.fromTo('.faq-h', HEAD[0], HEAD[1], 0);
    f.fromTo('#faqList .qa', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06 }, 0.4);
    if (fits) f.to({}, { duration: 0.5 });
    var c = pinTL('.contact', 1.1);
    c.fromTo(['.contact .lb', '.contact h2', '.contact .desc'], HEAD[0], Object.assign({}, HEAD[1], { stagger: 0.08 }), 0);
    c.fromTo('.contact .form > *:not(.hp):not(.cf-st)', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06 }, 0.45);
    c.to({}, { duration: 0.5 });
  })();

  /* ---------- 헤더: 지금 섹션 이름 · 메뉴 표시 ---------- */
  (function(){
    var navs = [].slice.call(document.querySelectorAll('#nav a'));
    document.querySelectorAll('[data-crumb]').forEach(function(sec){
      ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: function(self){ if (!self.isActive) return; navs.forEach(function(a){ a.classList.toggle('on', a.dataset.k === sec.dataset.nav); }); } });
    });
  })();

  /* 상담: 화면 45%에 들어오면 첫 칸에 커서 (마우스 쓰는 기기만) */
  if (matchMedia('(pointer: fine)').matches) ScrollTrigger.create({ trigger: '#consult', start: function(){ return 'top+=' + Math.round(innerHeight * 0.9) + ' top'; }, onEnter: function(){ document.getElementById('f1').focus({ preventScroll: true }); } });

  document.fonts && document.fonts.ready.then(function(){ ScrollTrigger.refresh(); });

  /* 다른 페이지에서 /#consult 같은 주소로 들어오면, 고정 장면이 만들어진 뒤 그 위치로 이동 */
  if (location.hash.length > 1) { var hashEl = null; try { hashEl = document.querySelector(location.hash); } catch (e) { /* 잘못된 주소 */ }
    if (hashEl) { var goHash = function(){ lenis.scrollTo(anchorY(hashEl), { immediate: true, force: true }); }; setTimeout(goHash, 80); if (document.fonts) document.fonts.ready.then(function(){ setTimeout(goHash, 160); }); } }

}
