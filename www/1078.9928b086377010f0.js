"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1078],{1078:(E,d,r)=>{r.r(d),r.d(d,{UserDetailPageModule:()=>v});var c=r(177),_=r(9417),i=r(4742),P=r(2175),f=r(6539),A=r(1312),e=r(4438);function n(t,u){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2,"H\u1ecd v\xe0 t\xean"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const a=e.XpG(2);e.R7$(5),e.JRh(a.user.name)}}function o(t,u){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2,"Email"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const a=e.XpG(2);e.R7$(5),e.JRh(a.user.email)}}function l(t,u){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const a=e.XpG(2);e.R7$(5),e.JRh(a.APP_FUNC_FormatMobileNumber(a.user.mobile))}}function T(t,u){if(1&t&&e.DNE(0,n,6,1,"div",5)(1,o,6,1,"div",5)(2,l,6,1,"div",5),2&t){const a=e.XpG();e.vxM(0,a.user.name?0:-1),e.R7$(),e.vxM(1,a.user.email?1:-1),e.R7$(),e.vxM(2,a.user.mobile?2:-1)}}const p=[{path:"",component:(()=>{var t;class u{constructor(s){this.router=s,this.APP_FUNC_FormatMobileNumber=A.IV,(0,f.UZ)().then(m=>{this.user=m.data})}ngOnInit(){}}return(t=u).\u0275fac=function(s){return new(s||t)(e.rXU(P.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-user-detail"]],decls:8,vars:1,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],[1,"ion-padding"],[1,"mb-4"],[1,"mb-1","fs-14","fw-300"],["lines","none","color","light"]],template:function(s,m){1&s&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Th\xf4ng tin t\xe0i kho\u1ea3n"),e.k0s()()(),e.j41(6,"ion-content",4),e.DNE(7,T,3,3),e.k0s()),2&s&&(e.R7$(7),e.vxM(7,m.user?7:-1))},dependencies:[i.QW,i.W9,i.eU,i.uz,i.he,i.BC,i.ai,i.el],styles:["ion-item[_ngcontent-%COMP%]{--border-radius: 4px}"]}),u})()}];let U=(()=>{var t;class u{}return(t=u).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[P.iI.forChild(p),P.iI]}),u})(),v=(()=>{var t;class u{}return(t=u).\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[c.MD,_.YN,i.bv,U]}),u})()},6539:(E,d,r)=>{r.d(d,{UZ:()=>f,kU:()=>e,lJ:()=>A,xk:()=>P});var c=r(467),_=r(8833),i=r(23);const P=function(){var n=(0,c.A)(function*(){return yield(0,i.Pn)()});return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,c.A)(function*(){var o;let l=yield(0,i.Pn)();return(!l.AccessToken||(null!==(o=l.TokenExpiry)&&void 0!==o?o:0)-(new Date).getTime()<0)&&(yield(0,i.wn)(),window.location.replace(_._.AUTH+`?returnurl=${encodeURIComponent(window.location.href)}`)),l});return function(){return n.apply(this,arguments)}}(),A=function(){var n=(0,c.A)(function*(){return!!(yield(0,i.Pn)()).AccessToken});return function(){return n.apply(this,arguments)}}(),e=function(){var n=(0,c.A)(function*(){var o;let l=yield(0,i.Pn)();return(!l.AccessToken||(null!==(o=l.TokenExpiry)&&void 0!==o?o:0)-(new Date).getTime()<0)&&(yield(0,i.wn)()),!!l.AccessToken});return function(){return n.apply(this,arguments)}}()},1312:(E,d,r)=>{r.d(d,{IV:()=>f,NY:()=>A,Rv:()=>i,k8:()=>e});var c=r(7586),_=r.n(c);function i(n,o,l){return l?_()(n||void 0).utcOffset(0,!1).format(null!=o?o:"HH:mm, DD/MM/YYYY"):_()(n||void 0).format(null!=o?o:"HH:mm, DD/MM/YYYY")}const f=n=>(null!=n?n:"0123456789").replace(/^0/,"+84").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,A=n=>(null!=n?n:"123456789").replace(/[^0-9]/,"").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,e=n=>{if(!n)return!1;try{return navigator.clipboard.writeText(n),!0}catch(o){console.error(o)}return!1}}}]);