"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2069],{2069:(P,m,t)=>{t.r(m),t.d(m,{HomePageModule:()=>E});var s=t(177),A=t(9417),o=t(4742),c=t(2175),p=t(467),d=t(6539),g=t(8833),e=t(4438);const a=[{path:"",component:(()=>{var n;class u{constructor(r){this.router=r,this.APP_ROUTE=g._}ngOnInit(){var r=this;this.IsOnInit=!0,(0,p.A)(function*(){(yield(0,d.lJ)())&&r.navigateByUrl(g._.DASHBOARD)})()}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.ngOnInit()}navigateByUrl(r){this.router.navigateByUrl(r)}}return(n=u).\u0275fac=function(r){return new(r||n)(e.rXU(c.Ix))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-home"]],decls:19,vars:0,consts:[[1,"min-h-100","w-100","d-flex","flex-column"],[1,"text-center","py-5","area-primary"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/logo-icon.png"],[1,"mt-2","fs-32","fw-900"],[1,"mt-0","mb-4","fs-20"],[1,"flex-grow-1","d-flex","align-items-center","justify-content-center","area-white"],["src","../../../assets/image/home/banner.svg",1,"mw-360"],["collapse","fade"],["color","primary","fill","outline","expand","block",3,"click"],["color","primary","expand","block",3,"click"]],template:function(r,f){1&r&&(e.j41(0,"ion-content")(1,"div",0)(2,"div",1)(3,"div",2),e.nrm(4,"ion-img",3),e.k0s(),e.j41(5,"div",4),e.EFF(6,"MONRE MEETING"),e.k0s(),e.j41(7,"div",5),e.EFF(8,"N\u1ec1n t\u1ea3ng h\u1ecdp tr\u1ef1c tuy\u1ebfn"),e.k0s()(),e.j41(9,"div",6),e.nrm(10,"ion-img",7),e.k0s()()(),e.j41(11,"ion-footer",8)(12,"ion-toolbar")(13,"ion-button",9),e.bIt("click",function(){return f.navigateByUrl(f.APP_ROUTE.ROOM_JOIN)}),e.j41(14,"ion-label"),e.EFF(15,"Tham gia h\u1ecdp ngay"),e.k0s()(),e.j41(16,"ion-button",10),e.bIt("click",function(){return f.navigateByUrl(f.APP_ROUTE.AUTH)}),e.j41(17,"ion-label"),e.EFF(18,"\u0110\u0103ng nh\u1eadp"),e.k0s()()()())},dependencies:[o.Jm,o.W9,o.M0,o.KW,o.he,o.ai],styles:[".area-primary[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.area-white[_ngcontent-%COMP%]{margin-top:-1.5rem;background-color:var(--ion-color-primary-contrast);border-radius:1.5rem 1.5rem 0 0}ion-footer[_ngcontent-%COMP%]{background-color:var(--ion-color-primary-contrast)}"]}),u})()}];let T=(()=>{var n;class u{}return(n=u).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[c.iI.forChild(a),c.iI]}),u})(),E=(()=>{var n;class u{}return(n=u).\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[s.MD,A.YN,o.bv,T]}),u})()},6539:(P,m,t)=>{t.d(m,{UZ:()=>p,kU:()=>g,lJ:()=>d,xk:()=>c});var s=t(467),A=t(8833),o=t(23);const c=function(){var e=(0,s.A)(function*(){return yield(0,o.Pn)()});return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,s.A)(function*(){var i;let a=yield(0,o.Pn)();return(!a.AccessToken||(null!==(i=a.TokenExpiry)&&void 0!==i?i:0)-(new Date).getTime()<0)&&(yield(0,o.wn)(),window.location.replace(A._.AUTH+`?returnurl=${encodeURIComponent(window.location.href)}`)),a});return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,s.A)(function*(){return!!(yield(0,o.Pn)()).AccessToken});return function(){return e.apply(this,arguments)}}(),g=function(){var e=(0,s.A)(function*(){var i;let a=yield(0,o.Pn)();return(!a.AccessToken||(null!==(i=a.TokenExpiry)&&void 0!==i?i:0)-(new Date).getTime()<0)&&(yield(0,o.wn)()),!!a.AccessToken});return function(){return e.apply(this,arguments)}}()}}]);