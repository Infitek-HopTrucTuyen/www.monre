"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7634],{7634:(C,v,l)=>{l.r(v),l.d(v,{OptionPageModule:()=>y});var _=l(177),$=l(9417),t=l(4742),f=l(2175),n=l(467),u=l(1855);const g=function(){var a=(0,n.A)(function*(o){var i,r,s;o.params=o.params||{},(0,u.hm)({url:"CauHinhCuocHop/danhsach",params:{strSearch:null!==(i=o.params.strSearch)&&void 0!==i?i:null,dateFrom:null!==(r=o.params.dateFrom)&&void 0!==r?r:null,dateTo:null!==(s=o.params.dateTo)&&void 0!==s?s:null},success:d=>{"function"==typeof o.callback&&o.callback(d.data||null)},error:d=>{var m;"function"==typeof o.callback&&o.callback(null==d||null===(m=d.response)||void 0===m?void 0:m.data),console.error(d)},loading:o.loading,loadingController:o.loadingController})});return function(i){return a.apply(this,arguments)}}();var A=l(6539),T=l(5751),e=l(4438);const P=[{path:"",component:(()=>{var a;class o{constructor(r,s,d,m){this.router=r,this.loadingController=s,this.toastController=d,this.modalController=m,this.listData=[]}ngOnInit(){var r=this;(0,n.A)(function*(){(yield(0,A.kU)())&&r.refreshData()})()}onIonRefresher(r){this.refreshData(()=>{r.target.complete()})}refreshData(r){g({loadingController:this.loadingController,params:{},callback:s=>{null!=s&&s.data?this.listData=(null==s?void 0:s.data)||[]:(0,T.q)(this.toastController,{},s).then(d=>d.present()),r&&r()}})}}return(a=o).\u0275fac=function(r){return new(r||a)(e.rXU(f.Ix),e.rXU(t.Xi),e.rXU(t.K_),e.rXU(t.W3))},a.\u0275cmp=e.VBU({type:a,selectors:[["app-option"]],decls:12,vars:0,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],[1,"ion-padding"],["lines","none"],["button","true","detail","true"],["slot","start","color","primary","src","../../../assets/icon/user-rounded.svg",1,"fs-24"]],template:function(r,s){1&r&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"C\u1ea5u h\xecnh cu\u1ed9c h\u1ecdp"),e.k0s()()(),e.j41(6,"ion-content",4)(7,"ion-list",5)(8,"ion-item",6),e.nrm(9,"ion-icon",7),e.j41(10,"ion-label"),e.EFF(11,"Th\xf4ng tin t\xe0i kho\u1ea3n"),e.k0s()()()())},dependencies:[t.QW,t.W9,t.eU,t.iq,t.uz,t.he,t.nf,t.BC,t.ai,t.el]}),o})()}];let b=(()=>{var a;class o{}return(a=o).\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[f.iI.forChild(P),f.iI]}),o})(),y=(()=>{var a;class o{}return(a=o).\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[_.MD,$.YN,t.bv,b]}),o})()},6539:(C,v,l)=>{l.d(v,{UZ:()=>n,kU:()=>h,lJ:()=>u,xk:()=>f});var _=l(467),$=l(8833),t=l(23);const f=function(){var c=(0,_.A)(function*(){return yield(0,t.Pn)()});return function(){return c.apply(this,arguments)}}(),n=function(){var c=(0,_.A)(function*(){let p=yield(0,t.Pn)();return p.AccessToken||(yield(0,t.wn)(),window.location.replace($._.AUTH+`?returnurl=${encodeURIComponent(window.location.href)}`)),p});return function(){return c.apply(this,arguments)}}(),u=function(){var c=(0,_.A)(function*(){return!!(yield(0,t.Pn)()).AccessToken});return function(){return c.apply(this,arguments)}}(),h=function(){var c=(0,_.A)(function*(){let p=yield(0,t.Pn)();return p.AccessToken||(yield(0,t.wn)()),!!p.AccessToken});return function(){return c.apply(this,arguments)}}()},5751:(C,v,l)=>{l.d(v,{q:()=>$});var _=l(467);const $=function(){var t=(0,_.A)(function*(f,n,u){var h,c,p;return!n.message&&u&&(n.message=null!==(p=null==u?void 0:u.message)&&void 0!==p?p:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!",n.icon||(n.icon=null!=u&&u.message?"checkmark-circle-sharp":"alert-circle-outline"),n.color||(n.color=1==(null==u?void 0:u.state)?"success":"warning")),n.position||(n.position="bottom"),n.icon||(n.icon="bulb-outline"),n.color||(n.color="secondary"),n.duration=null!==(h=n.duration)&&void 0!==h?h:3e3,n.animated=null===(c=n.animated)||void 0===c||c,n.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield f.create(n)});return function(n,u,h){return t.apply(this,arguments)}}()}}]);