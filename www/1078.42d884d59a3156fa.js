"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1078],{1078:(E,c,r)=>{r.r(c),r.d(c,{UserDetailPageModule:()=>C});var s=r(177),d=r(9417),a=r(4742),_=r(2175),P=r(6539),f=r(1312),e=r(4438);function n(t,u){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2,"H\u1ecd v\xe0 t\xean"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const o=e.XpG(2);e.R7$(5),e.JRh(o.user.ho_ten)}}function i(t,u){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2,"Email"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const o=e.XpG(2);e.R7$(5),e.JRh(o.user.email)}}function m(t,u){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2,"Email CV"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const o=e.XpG(2);e.R7$(5),e.JRh(o.user.email_cong_vu)}}function U(t,u){if(1&t&&(e.j41(0,"div",5)(1,"div",6),e.EFF(2,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const o=e.XpG(2);e.R7$(5),e.JRh(o.APP_FUNC_FormatMobileNumber(o.user.mobile))}}function p(t,u){if(1&t&&e.DNE(0,n,6,1,"div",5)(1,i,6,1,"div",5)(2,m,6,1,"div",5)(3,U,6,1,"div",5),2&t){const o=e.XpG();e.vxM(0,o.user.ho_ten?0:-1),e.R7$(),e.vxM(1,o.user.email?1:-1),e.R7$(),e.vxM(2,o.user.email_cong_vu&&o.user.email_cong_vu!=o.user.email?2:-1),e.R7$(),e.vxM(3,o.user.mobile?3:-1)}}const v=[{path:"",component:(()=>{var t;class u{constructor(l){this.router=l,this.APP_FUNC_FormatMobileNumber=f.IV,(0,P.UZ)().then(A=>{this.user=A.data})}ngOnInit(){}}return(t=u).\u0275fac=function(l){return new(l||t)(e.rXU(_.Ix))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-user-detail"]],decls:8,vars:1,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],[1,"ion-padding"],[1,"mb-4"],[1,"mb-1","fs-14","fw-300"],["lines","none","color","light"]],template:function(l,A){1&l&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Th\xf4ng tin t\xe0i kho\u1ea3n"),e.k0s()()(),e.j41(6,"ion-content",4),e.DNE(7,p,4,4),e.k0s()),2&l&&(e.R7$(7),e.vxM(7,A.user?7:-1))},dependencies:[a.QW,a.W9,a.eU,a.uz,a.he,a.BC,a.ai,a.el],styles:["ion-item[_ngcontent-%COMP%]{--border-radius: 4px}"]}),u})()}];let T=(()=>{var t;class u{}return(t=u).\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[_.iI.forChild(v),_.iI]}),u})(),C=(()=>{var t;class u{}return(t=u).\u0275fac=function(l){return new(l||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[s.MD,d.YN,a.bv,T]}),u})()},6539:(E,c,r)=>{r.d(c,{UZ:()=>P,kU:()=>e,lJ:()=>f,xk:()=>_});var s=r(467),d=r(8833),a=r(23);const _=function(){var n=(0,s.A)(function*(){return yield(0,a.Pn)()});return function(){return n.apply(this,arguments)}}(),P=function(){var n=(0,s.A)(function*(){let i=yield(0,a.Pn)();return i.AccessToken||(yield(0,a.wn)(),window.location.replace(d._.AUTH+`?returnurl=${encodeURIComponent(window.location.href)}`)),i});return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,s.A)(function*(){return!!(yield(0,a.Pn)()).AccessToken});return function(){return n.apply(this,arguments)}}(),e=function(){var n=(0,s.A)(function*(){let i=yield(0,a.Pn)();return i.AccessToken||(yield(0,a.wn)()),!!i.AccessToken});return function(){return n.apply(this,arguments)}}()},1312:(E,c,r)=>{r.d(c,{IV:()=>P,NY:()=>f,Rv:()=>a,k8:()=>e});var s=r(7586),d=r.n(s);function a(n,i,m){return m?d()(n||void 0).utcOffset(0,!1).format(null!=i?i:"HH:mm, DD/MM/YYYY"):d()(n||void 0).format(null!=i?i:"HH:mm, DD/MM/YYYY")}const P=n=>(null!=n?n:"0123456789").replace(/^0/,"+84").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,f=n=>(null!=n?n:"123456789").replace(/[^0-9]/,"").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,e=n=>{if(!n)return!1;try{return navigator.clipboard.writeText(n),!0}catch(i){console.error(i)}return!1}}}]);