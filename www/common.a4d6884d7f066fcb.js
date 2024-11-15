"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(M,f,c)=>{c.d(f,{c:()=>l});var _=c(4261),d=c(1086),o=c(8607);const l=(s,r)=>{let a,t;const e=(u,p,E)=>{if(typeof document>"u")return;const C=document.elementFromPoint(u,p);C&&r(C)&&!C.disabled?C!==a&&(i(),n(C,E)):i()},n=(u,p)=>{a=u,t||(t=a);const E=a;(0,_.w)(()=>E.classList.add("ion-activated")),p()},i=(u=!1)=>{if(!a)return;const p=a;(0,_.w)(()=>p.classList.remove("ion-activated")),u&&t!==a&&a.click(),a=void 0};return(0,o.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:u=>e(u.currentX,u.currentY,d.a),onMove:u=>e(u.currentX,u.currentY,d.b),onEnd:()=>{i(!0),(0,d.h)(),t=void 0}})}},8438:(M,f,c)=>{c.d(f,{g:()=>d});var _=c(8476);const d=()=>{if(void 0!==_.w)return _.w.Capacitor}},5572:(M,f,c)=>{c.d(f,{c:()=>_,i:()=>d});const _=(o,l,s)=>"function"==typeof s?s(o,l):"string"==typeof s?o[s]===l[s]:Array.isArray(l)?l.includes(o):o===l,d=(o,l,s)=>void 0!==o&&(Array.isArray(o)?o.some(r=>_(r,l,s)):_(o,l,s))},3351:(M,f,c)=>{c.d(f,{g:()=>_});const _=(r,a,t,e,n)=>o(r[1],a[1],t[1],e[1],n).map(i=>d(r[0],a[0],t[0],e[0],i)),d=(r,a,t,e,n)=>n*(3*a*Math.pow(n-1,2)+n*(-3*t*n+3*t+e*n))-r*Math.pow(n-1,3),o=(r,a,t,e,n)=>s((e-=n)-3*(t-=n)+3*(a-=n)-(r-=n),3*t-6*a+3*r,3*a-3*r,r).filter(u=>u>=0&&u<=1),s=(r,a,t,e)=>{if(0===r)return((r,a,t)=>{const e=a*a-4*r*t;return e<0?[]:[(-a+Math.sqrt(e))/(2*r),(-a-Math.sqrt(e))/(2*r)]})(a,t,e);const n=(3*(t/=r)-(a/=r)*a)/3,i=(2*a*a*a-9*a*t+27*(e/=r))/27;if(0===n)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-n),-Math.sqrt(-n)];const u=Math.pow(i/2,2)+Math.pow(n/3,3);if(0===u)return[Math.pow(i/2,.5)-a/3];if(u>0)return[Math.pow(-i/2+Math.sqrt(u),1/3)-Math.pow(i/2+Math.sqrt(u),1/3)-a/3];const p=Math.sqrt(Math.pow(-n/3,3)),E=Math.acos(-i/(2*Math.sqrt(Math.pow(-n/3,3)))),C=2*Math.pow(p,1/3);return[C*Math.cos(E/3)-a/3,C*Math.cos((E+2*Math.PI)/3)-a/3,C*Math.cos((E+4*Math.PI)/3)-a/3]}},7464:(M,f,c)=>{c.d(f,{i:()=>_});const _=d=>d&&""!==d.dir?"rtl"===d.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,f,c)=>{c.r(f),c.d(f,{startFocusVisible:()=>l});const _="ion-focused",o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=s=>{let r=[],a=!0;const t=s?s.shadowRoot:document,e=s||document.body,n=w=>{r.forEach(m=>m.classList.remove(_)),w.forEach(m=>m.classList.add(_)),r=w},i=()=>{a=!1,n([])},u=w=>{a=o.includes(w.key),a||n([])},p=w=>{if(a&&void 0!==w.composedPath){const m=w.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));n(m)}},E=()=>{t.activeElement===e&&n([])};return t.addEventListener("keydown",u),t.addEventListener("focusin",p),t.addEventListener("focusout",E),t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("mousedown",i),{destroy:()=>{t.removeEventListener("keydown",u),t.removeEventListener("focusin",p),t.removeEventListener("focusout",E),t.removeEventListener("touchstart",i),t.removeEventListener("mousedown",i)},setFocus:n}}},1086:(M,f,c)=>{c.d(f,{I:()=>d,a:()=>a,b:()=>t,c:()=>r,d:()=>n,h:()=>e});var _=c(8438),d=function(i){return i.Heavy="HEAVY",i.Medium="MEDIUM",i.Light="LIGHT",i}(d||{});const l={getEngine(){const i=(0,_.g)();if(null!=i&&i.isPluginAvailable("Haptics"))return i.Plugins.Haptics},available(){if(!this.getEngine())return!1;const u=(0,_.g)();return"web"!==(null==u?void 0:u.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(i){const u=this.getEngine();u&&u.impact({style:i.style})},notification(i){const u=this.getEngine();u&&u.notification({type:i.type})},selection(){this.impact({style:d.Light})},selectionStart(){const i=this.getEngine();i&&i.selectionStart()},selectionChanged(){const i=this.getEngine();i&&i.selectionChanged()},selectionEnd(){const i=this.getEngine();i&&i.selectionEnd()}},s=()=>l.available(),r=()=>{s()&&l.selection()},a=()=>{s()&&l.selectionStart()},t=()=>{s()&&l.selectionChanged()},e=()=>{s()&&l.selectionEnd()},n=i=>{s()&&l.impact(i)}},909:(M,f,c)=>{c.d(f,{I:()=>r,a:()=>n,b:()=>s,c:()=>p,d:()=>C,f:()=>i,g:()=>e,i:()=>t,p:()=>E,r:()=>w,s:()=>u});var _=c(467),d=c(4920),o=c(4929);const s="ion-content",r=".ion-content-scroll-host",a=`${s}, ${r}`,t=m=>"ION-CONTENT"===m.tagName,e=function(){var m=(0,_.A)(function*(v){return t(v)?(yield new Promise(g=>(0,d.c)(v,g)),v.getScrollElement()):v});return function(g){return m.apply(this,arguments)}}(),n=m=>m.querySelector(r)||m.querySelector(a),i=m=>m.closest(a),u=(m,v)=>t(m)?m.scrollToTop(v):Promise.resolve(m.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(m,v,g,y)=>t(m)?m.scrollByPoint(v,g,y):Promise.resolve(m.scrollBy({top:g,left:v,behavior:y>0?"smooth":"auto"})),E=m=>(0,o.b)(m,s),C=m=>{if(t(m)){const g=m.scrollY;return m.scrollY=!1,g}return m.style.setProperty("overflow","hidden"),!0},w=(m,v)=>{t(m)?m.scrollY=v:m.style.removeProperty("overflow")}},3992:(M,f,c)=>{c.d(f,{a:()=>_,b:()=>p,c:()=>a,d:()=>E,e:()=>b,f:()=>r,g:()=>C,h:()=>o,i:()=>d,j:()=>h,k:()=>D,l:()=>t,m:()=>i,n:()=>w,o:()=>n,p:()=>s,q:()=>l,r:()=>O,s:()=>k,t:()=>u,u:()=>g,v:()=>y,w:()=>e,x:()=>m,y:()=>v});const _="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(M,f,c)=>{c.d(f,{c:()=>l,g:()=>s});var _=c(8476),d=c(4920),o=c(4929);const l=(a,t,e)=>{let n,i;if(void 0!==_.w&&"MutationObserver"in _.w){const C=Array.isArray(t)?t:[t];n=new MutationObserver(w=>{for(const m of w)for(const v of m.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&C.includes(v.slot))return e(),void(0,d.r)(()=>u(v))}),n.observe(a,{childList:!0,subtree:!0})}const u=C=>{var w;i&&(i.disconnect(),i=void 0),i=new MutationObserver(m=>{e();for(const v of m)for(const g of v.removedNodes)g.nodeType===Node.ELEMENT_NODE&&g.slot===t&&E()}),i.observe(null!==(w=C.parentElement)&&void 0!==w?w:C,{subtree:!0,childList:!0})},E=()=>{i&&(i.disconnect(),i=void 0)};return{destroy:()=>{n&&(n.disconnect(),n=void 0),E()}}},s=(a,t,e)=>{const n=null==a?0:a.toString().length,i=r(n,t);if(void 0===e)return i;try{return e(n,t)}catch(u){return(0,o.a)("Exception in provided `counterFormatter`.",u),i}},r=(a,t)=>`${a} / ${t}`},1622:(M,f,c)=>{c.r(f),c.d(f,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>O,keyboardDidClose:()=>m,keyboardDidOpen:()=>C,keyboardDidResize:()=>w,resetKeyboardAssist:()=>n,setKeyboardClose:()=>E,setKeyboardOpen:()=>p,startKeyboardAssist:()=>i,trackViewportChanges:()=>y});var _=c(4379);c(8438),c(8476);const l="ionKeyboardDidShow",s="ionKeyboardDidHide";let a={},t={},e=!1;const n=()=>{a={},t={},e=!1},i=h=>{if(_.K.getEngine())u(h);else{if(!h.visualViewport)return;t=O(h.visualViewport),h.visualViewport.onresize=()=>{y(h),C()||w(h)?p(h):m(h)&&E(h)}}},u=h=>{h.addEventListener("keyboardDidShow",D=>p(h,D)),h.addEventListener("keyboardDidHide",()=>E(h))},p=(h,D)=>{v(h,D),e=!0},E=h=>{g(h),e=!1},C=()=>!e&&a.width===t.width&&(a.height-t.height)*t.scale>150,w=h=>e&&!m(h),m=h=>e&&t.height===h.innerHeight,v=(h,D)=>{const b=new CustomEvent(l,{detail:{keyboardHeight:D?D.keyboardHeight:h.innerHeight-t.height}});h.dispatchEvent(b)},g=h=>{const D=new CustomEvent(s);h.dispatchEvent(D)},y=h=>{a=Object.assign({},t),t=O(h.visualViewport)},O=h=>({width:Math.round(h.width),height:Math.round(h.height),offsetTop:h.offsetTop,offsetLeft:h.offsetLeft,pageTop:h.pageTop,pageLeft:h.pageLeft,scale:h.scale})},4379:(M,f,c)=>{c.d(f,{K:()=>l,a:()=>o});var _=c(8438),d=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(d||{}),o=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(o||{});const l={getEngine(){const s=(0,_.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(r=>{if(r.code!==d.Unimplemented)throw r}):Promise.resolve(void 0)}}},4731:(M,f,c)=>{c.d(f,{c:()=>r});var _=c(467),d=c(8476),o=c(4379);const l=a=>{if(void 0===d.d||a===o.a.None||void 0===a)return null;const t=d.d.querySelector("ion-app");return null!=t?t:d.d.body},s=a=>{const t=l(a);return null===t?0:t.clientHeight},r=function(){var a=(0,_.A)(function*(t){let e,n,i,u;const p=function(){var v=(0,_.A)(function*(){const g=yield o.K.getResizeMode(),y=void 0===g?void 0:g.mode;e=()=>{void 0===u&&(u=s(y)),i=!0,E(i,y)},n=()=>{i=!1,E(i,y)},null==d.w||d.w.addEventListener("keyboardWillShow",e),null==d.w||d.w.addEventListener("keyboardWillHide",n)});return function(){return v.apply(this,arguments)}}(),E=(v,g)=>{t&&t(v,C(g))},C=v=>{if(0===u||u===s(v))return;const g=l(v);return null!==g?new Promise(y=>{const h=new ResizeObserver(()=>{g.clientHeight===u&&(h.disconnect(),y())});h.observe(g)}):void 0};return yield p(),{init:p,destroy:()=>{null==d.w||d.w.removeEventListener("keyboardWillShow",e),null==d.w||d.w.removeEventListener("keyboardWillHide",n),e=n=void 0},isKeyboardVisible:()=>i}});return function(e){return a.apply(this,arguments)}}()},7838:(M,f,c)=>{c.d(f,{c:()=>d});var _=c(467);const d=()=>{let o;return{lock:function(){var s=(0,_.A)(function*(){const r=o;let a;return o=new Promise(t=>a=t),void 0!==r&&(yield r),a});return function(){return s.apply(this,arguments)}}()}}},9001:(M,f,c)=>{c.d(f,{c:()=>o});var _=c(8476),d=c(4920);const o=(l,s,r)=>{let a;const t=()=>!(void 0===s()||void 0!==l.label||null===r()),n=()=>{const u=s();if(void 0===u)return;if(!t())return void u.style.removeProperty("width");const p=r().scrollWidth;if(0===p&&null===u.offsetParent&&void 0!==_.w&&"IntersectionObserver"in _.w){if(void 0!==a)return;const E=a=new IntersectionObserver(C=>{1===C[0].intersectionRatio&&(n(),E.disconnect(),a=void 0)},{threshold:.01,root:l});E.observe(u)}else u.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,d.r)(()=>{n()})},destroy:()=>{a&&(a.disconnect(),a=void 0)}}}},7895:(M,f,c)=>{c.d(f,{S:()=>d});const d={bubbles:{dur:1e3,circles:9,fn:(o,l,s)=>{const r=o*l/s-o+"ms",a=2*Math.PI*l/s;return{r:5,style:{top:32*Math.sin(a)+"%",left:32*Math.cos(a)+"%","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(o,l,s)=>{const r=l/s,a=o*r-o+"ms",t=2*Math.PI*r;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":a}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(o,l)=>({r:6,style:{left:32-32*l+"%","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(o,l,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*l+(l<s/2?180:-180)}deg)`,"animation-delay":o*l/s-o+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(o,l,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*l+(l<s/2?180:-180)}deg)`,"animation-delay":o*l/s-o+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(o,l,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":o*l/s-o+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(o,l,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":o*l/s-o+"ms"}})}}},7166:(M,f,c)=>{c.r(f),c.d(f,{createSwipeBackGesture:()=>s});var _=c(4920),d=c(7464),o=c(8607);c(1970);const s=(r,a,t,e,n)=>{const i=r.ownerDocument.defaultView;let u=(0,d.i)(r);const E=g=>u?-g.deltaX:g.deltaX;return(0,o.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:g=>(u=(0,d.i)(r),(g=>{const{startX:O}=g;return u?O>=i.innerWidth-50:O<=50})(g)&&a()),onStart:t,onMove:g=>{const O=E(g)/i.innerWidth;e(O)},onEnd:g=>{const y=E(g),O=i.innerWidth,h=y/O,D=(g=>u?-g.velocityX:g.velocityX)(g),b=D>=0&&(D>.2||y>O/2),A=(b?1-h:h)*O;let L=0;if(A>5){const P=A/Math.abs(D);L=Math.min(P,540)}n(b,h<=0?.01:(0,_.j)(0,h,.9999),L)}})}},2935:(M,f,c)=>{c.d(f,{w:()=>_});const _=(l,s,r)=>{if(typeof MutationObserver>"u")return;const a=new MutationObserver(t=>{r(d(t,s))});return a.observe(l,{childList:!0,subtree:!0}),a},d=(l,s)=>{let r;return l.forEach(a=>{for(let t=0;t<a.addedNodes.length;t++)r=o(a.addedNodes[t],s)||r}),r},o=(l,s)=>{if(1!==l.nodeType)return;const r=l;return(r.tagName===s.toUpperCase()?[r]:Array.from(r.querySelectorAll(s))).find(t=>t.value===r.value)}},3738:(M,f,c)=>{c.d(f,{CL:()=>o,ID:()=>a,Sd:()=>r,e6:()=>s,tv:()=>l});var _=c(467),d=c(5972);const o=function(){var t=(0,_.A)(function*(e){e.params=e.params||{},(0,d.Ll)({url:"CauHinhCuocHop/them",params:{label_vn:e.params.label_vn,label_en:e.params.label_en,status:e.params.status,value:e.params.value},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var i;"function"==typeof e.callback&&e.callback(null==n||null===(i=n.response)||void 0===i?void 0:i.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,_.A)(function*(e){e.params=e.params||{},(0,d.IH)({url:`CauHinhCuocHop/chinhsua?id=${e.params.id}`,params:{id:e.params.id,label_vn:e.params.label_vn,label_en:e.params.label_en,status:e.params.status,value:e.params.value},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var i;"function"==typeof e.callback&&e.callback(null==n||null===(i=n.response)||void 0===i?void 0:i.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,_.A)(function*(e){e.params=e.params||{},(0,d.sj)({url:"CauHinhCuocHop/xoa",params:{id:e.params.id},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var i;"function"==typeof e.callback&&e.callback(null==n||null===(i=n.response)||void 0===i?void 0:i.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(n){return t.apply(this,arguments)}}(),r=function(){var t=(0,_.A)(function*(e){e.params=e.params||{},(0,d.hm)({url:"CauHinhCuocHop/danhsach",params:{search:e.params.search,dateFrom:e.params.dateFrom,dateTo:e.params.dateTo},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var i;"function"==typeof e.callback&&e.callback(null==n||null===(i=n.response)||void 0===i?void 0:i.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(n){return t.apply(this,arguments)}}(),a=function(){var t=(0,_.A)(function*(e){e.params=e.params||{},(0,d.hm)({url:"CauHinhCuocHop/chitiet",params:{id:e.params.id},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var i;"function"==typeof e.callback&&e.callback(null==n||null===(i=n.response)||void 0===i?void 0:i.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(n){return t.apply(this,arguments)}}()},4393:(M,f,c)=>{c.d(f,{FC:()=>l,SD:()=>r,T9:()=>s});var _=c(467),d=c(369);const o=new d.w({name:"_localDB",driverOrder:[d.C.IndexedDB,d.C.LocalStorage]}),l=function(){var a=(0,_.A)(function*(t){var e;yield o.create(),(t=null!==(e=t)&&void 0!==e?e:{}).params=t.params||{};try{var i=(yield o.get("setting"))||{};return"function"==typeof t.callback&&t.callback(i),i}catch(u){"function"==typeof t.callback&&t.callback(),console.error(u)}return{}});return function(e){return a.apply(this,arguments)}}(),s=function(){var a=(0,_.A)(function*(t){var e;yield o.create();var n="setting";(t=null!==(e=t)&&void 0!==e?e:{}).params=t.params||{};try{var i=(yield o.get(n))||{};Object.assign(i,t.params),yield o.set(n,i),"function"==typeof t.callback&&t.callback(i)}catch(u){"function"==typeof t.callback&&t.callback(),console.error(u)}});return function(e){return a.apply(this,arguments)}}(),r=function(){var a=(0,_.A)(function*(t){var e;yield o.create(),(t=null!==(e=t)&&void 0!==e?e:{}).params=t.params||{};try{yield o.set("setting",{}),"function"==typeof t.callback&&t.callback()}catch(i){"function"==typeof t.callback&&t.callback(),console.error(i)}});return function(e){return a.apply(this,arguments)}}()},2925:(M,f,c)=>{c.d(f,{c:()=>l});var _=c(8833),d=c(4438);const o=["jitsiContainer"];let l=(()=>{var s;class r{ngOnInit(){this.api=new window.JitsiMeetExternalAPI(this.roomData.server.ip,{roomName:this.roomData.roomName,width:"100%",height:"100%",parentNode:this.jitsiContainer.nativeElement,interfaceConfigOverwrite:{SHOW_JITSI_WATERMARK:!1,SHOW_WATERMARK_FOR_GUESTS:!1,DEFAULT_BACKGROUND:"#ffffff"},configOverwrite:{disableDeepLinking:!0,disableWakeLock:!0,startWithAudioMuted:!1,startWithVideoMuted:!1,disableAudioLevels:!1,enableWelcomePage:!1,disableSimulcast:!0},prejoinPageEnabled:!1,userInfo:{displayName:this.userData.name,email:this.userData.email},jwt:this.roomData.token,onload:()=>{console.log("Jitsi Meet iframe loaded")}}),this.api.addEventListener("videoConferenceJoined",e=>{console.log("Local user joined the conference:",e)}),this.api.addEventListener("participantJoined",e=>{console.log("Participant joined:",e)}),this.api.addEventListener("participantLeft",e=>{console.log("Participant left:",e)}),this.api.addEventListener("audioMuteStatusChanged",e=>{console.log("Audio mute status changed:",e.muted)}),this.api.addEventListener("videoMuteStatusChanged",e=>{console.log("Video mute status changed:",e.muted)}),this.api.addEventListener("readyToClose",()=>{console.log("Conference is ready to be closed"),window.location.replace(_._.HOME)}),this.api.on("errorOccurred",e=>{console.error("L\u1ed7i khi truy c\u1eadp camera ho\u1eb7c microphone: ",e)}),window.addEventListener("beforeunload",()=>{this.api.dispose()})}ngOnDestroy(){this.api&&this.api.dispose()}}return(s=r).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=d.VBU({type:s,selectors:[["app-jitsi-meet"]],viewQuery:function(t,e){if(1&t&&d.GBs(o,7),2&t){let n;d.mGM(n=d.lsd())&&(e.jitsiContainer=n.first)}},inputs:{roomData:"roomData",userData:"userData"},decls:2,vars:0,consts:[["jitsiContainer",""],[2,"width","100%","height","100%"]],template:function(t,e){1&t&&d.nrm(0,"div",1,0)}}),r})()},4167:(M,f,c)=>{c.d(f,{V:()=>s});var _=c(3738),d=c(5751),o=c(4438),l=c(4742);let s=(()=>{var r;class a{constructor(e,n,i){this.loadingController=e,this.modalController=n,this.toastController=i,this.itemData={}}ngOnInit(){}modalClose(){this.modalController.dismiss()}modalSubmit(){this.itemData.id?(0,_.tv)({params:this.itemData,callback:e=>{(0,d.q)(this.toastController,{},e).then(n=>n.present()),null!=e&&e.status&&this.modalController.dismiss(null==e?void 0:e.data,"success")}}):(0,_.CL)({params:this.itemData,callback:e=>{(0,d.q)(this.toastController,{},e).then(n=>n.present()),null!=e&&e.status&&this.modalController.dismiss(null==e?void 0:e.data,"success")}})}changeLabelVN(e){var n;this.itemData.label_vn=null===(n=e.detail.value)||void 0===n?void 0:n.trim()}changeLabelEN(e){var n;this.itemData.label_en=null===(n=e.detail.value)||void 0===n?void 0:n.trim()}changeValue(e){var n;this.itemData.value=null===(n=e.detail.value)||void 0===n?void 0:n.trim()}changeStatus(e){this.itemData.status=e.detail.checked}}return(r=a).\u0275fac=function(e){return new(e||r)(o.rXU(l.Xi),o.rXU(l.W3),o.rXU(l.K_))},r.\u0275cmp=o.VBU({type:r,selectors:[["app-modal-option-add"]],inputs:{itemData:"itemData"},decls:30,vars:5,consts:[["color","primary"],["slot","end"],[3,"click"],["color","light","name","close-outline"],[1,"ion-padding"],[1,"fw-600","fs-16","mb-1"],["color","danger"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp m\xf4 t\u1ea3","minlength","6","maxlength","100",3,"ionChange","value"],[1,"mt-4"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp m\xf4 t\u1ea3 (EN)","minlength","6","maxlength","100",3,"ionChange","value"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp gi\xe1 tr\u1ecb","minlength","6","maxlength","100",3,"ionChange","value"],["labelPlacement","end",3,"ionChange","checked"],["collapse","fade"],["color","primary","expand","block",3,"click"]],template:function(e,n){1&e&&(o.j41(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),o.EFF(3),o.k0s(),o.j41(4,"ion-buttons",1)(5,"ion-button",2),o.bIt("click",function(){return n.modalClose()}),o.nrm(6,"ion-icon",3),o.k0s()()()(),o.j41(7,"ion-content",4)(8,"div")(9,"div",5),o.EFF(10,"M\xf4 t\u1ea3"),o.j41(11,"ion-text",6),o.EFF(12,"*"),o.k0s()(),o.j41(13,"ion-input",7),o.bIt("ionChange",function(u){return n.changeLabelVN(u)}),o.k0s()(),o.j41(14,"div",8)(15,"div",5),o.EFF(16,"M\xf4 t\u1ea3 (EN)"),o.k0s(),o.j41(17,"ion-input",9),o.bIt("ionChange",function(u){return n.changeLabelEN(u)}),o.k0s()(),o.j41(18,"div",8)(19,"div",5),o.EFF(20,"Gi\xe1 tr\u1ecb"),o.k0s(),o.j41(21,"ion-input",10),o.bIt("ionChange",function(u){return n.changeValue(u)}),o.k0s()(),o.j41(22,"div",8)(23,"ion-checkbox",11),o.bIt("ionChange",function(u){return n.changeStatus(u)}),o.EFF(24,"\xc1p d\u1ee5ng"),o.k0s()()(),o.j41(25,"ion-footer",12)(26,"ion-toolbar")(27,"ion-button",13),o.bIt("click",function(){return n.modalSubmit()}),o.j41(28,"ion-label"),o.EFF(29,"Ho\xe0n t\u1ea5t"),o.k0s()()()()),2&e&&(o.R7$(3),o.JRh(n.itemData.id?"C\u1eadp nh\u1eadt c\u1ea5u h\xecnh":"Th\xeam c\u1ea5u h\xecnh"),o.R7$(10),o.Y8G("value",n.itemData.label_vn),o.R7$(4),o.Y8G("value",n.itemData.label_en),o.R7$(4),o.Y8G("value",n.itemData.value),o.R7$(2),o.Y8G("checked",n.itemData.status))},dependencies:[l.Jm,l.QW,l.eY,l.W9,l.M0,l.eU,l.iq,l.$w,l.he,l.IO,l.BC,l.ai,l.hB,l.Gw]}),a})()},5173:(M,f,c)=>{c.d(f,{Q:()=>r});var _=c(177),d=c(9417),o=c(4742),l=c(2706),s=c(4438);let r=(()=>{var a;class t{}return(a=t).\u0275fac=function(n){return new(n||a)},a.\u0275mod=s.$C({type:a}),a.\u0275inj=s.G2t({imports:[_.MD,d.YN,o.bv,l.G,l.G]}),t})()},6954:(M,f,c)=>{c.d(f,{HE:()=>o,go:()=>l,rb:()=>s,zM:()=>d});var _=c(3588);const d=r=>{switch(r){case _._5.BANNHAP:return"medium";case _._5.CHODUYET:return"warning";case _._5.DADUYET:case _._5.CONGBO:return"success";case _._5.HUYDUYET:case _._5.HUYCONGBO:return"danger";default:return"medium"}},o=r=>r?"success":"warning",l=r=>r?"success":"warning",s=r=>{switch(r){case 0:case 1:return"warning";case 2:return"success";case 3:return"danger";default:return"medium"}}}}]);