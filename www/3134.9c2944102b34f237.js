"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3134],{3890:(T,h,i)=>{i.d(h,{x:()=>p});var f=i(177),P=i(9417),a=i(4742),d=i(2706),e=i(4342),l=i(4438);let p=(()=>{var u;class c{}return(u=c).\u0275fac=function(t){return new(t||u)},u.\u0275mod=l.$C({type:u}),u.\u0275inj=l.G2t({imports:[f.MD,P.YN,a.bv,d.G,e.LP,d.G,e.LP]}),c})()},3134:(T,h,i)=>{i.r(h),i.d(h,{OptionPageModule:()=>U});var f=i(177),P=i(9417),a=i(4742),d=i(2175),e=i(467),l=i(4167),p=i(3738),u=i(6539),c=i(5751),m=i(8833),t=i(4438),E=i(4842);function A(o,g){1&o&&(t.j41(0,"div",6)(1,"div",10)(2,"div")(3,"div",11),t.nrm(4,"ion-img",12),t.k0s(),t.j41(5,"div",13),t.EFF(6),t.nI1(7,"translate"),t.k0s()()()()),2&o&&(t.R7$(6),t.JRh(t.bMT(7,1,"DataNotFound")))}function y(o,g){if(1&o&&(t.j41(0,"div",14),t.eu8(1,15),t.k0s()),2&o){t.XpG();const _=t.sdS(18);t.R7$(),t.Y8G("ngTemplateOutlet",_)}}function O(o,g){if(1&o){const _=t.RV6();t.j41(0,"ion-infinite-scroll",16),t.bIt("ionInfinite",function(r){t.eBV(_);const s=t.XpG();return t.Njj(s.onIonInfinite(r))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}function D(o,g){if(1&o){const _=t.RV6();t.j41(0,"ion-item",19),t.bIt("click",function(){const r=t.eBV(_).$implicit,s=t.XpG(2);return t.Njj(s.navigateByUrl(s.APP_ROUTE.OPTION_DETAIL_ID.replace(":id",r.id)))}),t.j41(1,"ion-label"),t.EFF(2),t.k0s()()}if(2&o){const _=g.$implicit;t.R7$(2),t.JRh(_.label_vn)}}function M(o,g){if(1&o&&(t.j41(0,"ion-list",17),t.Z7z(1,D,3,1,"ion-item",18,t.fX1),t.k0s()),2&o){const _=t.XpG();t.R7$(),t.Dyx(_.listData)}}const C=[{path:"",component:(()=>{var o;class g{constructor(n,r,s,v){this.router=n,this.loadingController=r,this.toastController=s,this.modalController=v,this.APP_ROUTE=m._,this.filter={},this.paging={sortfield:null,sorttype:null,page:1,limit:20,active:!0},this.listData=[],this.limitLoad=0}ngOnInit(){var n=this;(0,e.A)(function*(){(yield(0,u.kU)())&&n.refreshData()})()}onIonRefresher(n){this.filter={},this.refreshData(()=>{n.target.complete()})}onIonInfinite(n){this.loadMore(()=>{n.target.complete()})}pushData(n){1==this.paging.page&&(this.listData.length=0),this.listData=this.listData.concat(n)}refreshData(n){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(n)}loadMore(n){this.paging.page+=1,this.loadData_Paging_Limit(n)}searchChange(n){this.filter.search=n.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(n){var r=this;return(0,e.A)(function*(){if(r.limitLoad>0)return void(n&&n());r.limitLoad=300;let s=setInterval(()=>{r.limitLoad-=100,r.limitLoad<=0&&(clearInterval(s),r.loadData_Paging(n))},100)})()}loadData_Paging(n){var r=this;return(0,e.A)(function*(){(0,p.Sd)({loadingController:r.loadingController,params:{pageNumber:r.paging.page,pageSize:r.paging.limit},callback:s=>{null!=s&&s.status?r.pushData((null==s?void 0:s.data)||[]):(0,c.q)(r.toastController,{},s).then(v=>v.present()),r.listData.length<r.paging.limit*r.paging.page&&(r.paging.active=!1),n&&n()}})})()}navigateByUrl(n){var r=this;return(0,e.A)(function*(){r.router.navigateByUrl(n)})()}presentModalOptionAdd(n){var r=this;return(0,e.A)(function*(){const s=yield r.modalController.create({component:l.V});s.onDidDismiss().then(v=>{"success"==v.role&&r.refreshData()}),s.present()})()}}return(o=g).\u0275fac=function(n){return new(n||o)(t.rXU(d.Ix),t.rXU(a.Xi),t.rXU(a.K_),t.rXU(a.W3))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-option"]],decls:19,vars:2,consts:[["templateList",""],[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],["slot","fixed",3,"ionRefresh"],[1,"py-5"],[3,"ionInfinite",4,"ngIf"],["collapse","fade"],["color","primary","expand","block",3,"click"],[1,"d-flex","align-items-center","justify-content-center","data-not-found"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/no-documents.svg",1,"w-40"],[1,"mt-2","text-center"],[1,"ion-padding"],[3,"ngTemplateOutlet"],[3,"ionInfinite"],["lines","none"],["button","true","detail","true"],["button","true","detail","true",3,"click"]],template:function(n,r){if(1&n){const s=t.RV6();t.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-buttons",3),t.nrm(3,"ion-back-button",4),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"C\u1ea5u h\xecnh cu\u1ed9c h\u1ecdp"),t.k0s()()(),t.j41(6,"ion-content")(7,"ion-refresher",5),t.bIt("ionRefresh",function(j){return t.eBV(s),t.Njj(r.onIonRefresher(j))}),t.nrm(8,"ion-refresher-content"),t.k0s(),t.DNE(9,A,8,3,"div",6)(10,y,2,1)(11,O,2,0,"ion-infinite-scroll",7),t.k0s(),t.j41(12,"ion-footer",8)(13,"ion-toolbar")(14,"ion-button",9),t.bIt("click",function(){return t.eBV(s),t.Njj(r.presentModalOptionAdd())}),t.j41(15,"ion-label"),t.EFF(16,"Th\xeam c\u1ea5u h\xecnh"),t.k0s()()()(),t.DNE(17,M,3,0,"ng-template",null,0,t.C5r)}2&n&&(t.R7$(9),t.vxM(9,r.listData.length?10:9),t.R7$(2),t.Y8G("ngIf",r.paging.active))},dependencies:[f.bT,f.T3,a.Jm,a.QW,a.W9,a.M0,a.eU,a.KW,a.Ax,a.Hp,a.uz,a.he,a.nf,a.To,a.Ki,a.BC,a.ai,a.el,E.D9],styles:["ion-list[_ngcontent-%COMP%]{--background: transparent}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: 8px;--background: var(--ion-color-light)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.5rem}"]}),g})()}];let I=(()=>{var o;class g{}return(o=g).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[d.iI.forChild(C),d.iI]}),g})();var R=i(3890);let U=(()=>{var o;class g{}return(o=g).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[f.MD,P.YN,a.bv,I,R.x]}),g})()},6539:(T,h,i)=>{i.d(h,{UZ:()=>e,kU:()=>p,lJ:()=>l,xk:()=>d});var f=i(467),P=i(8833),a=i(23);const d=function(){var u=(0,f.A)(function*(){return yield(0,a.Pn)()});return function(){return u.apply(this,arguments)}}(),e=function(){var u=(0,f.A)(function*(){var c;let m=yield(0,a.Pn)();return(!m.AccessToken||(null!==(c=m.TokenExpiry)&&void 0!==c?c:0)-(new Date).getTime()<0)&&(yield(0,a.wn)(),window.location.replace(P._.AUTH+`?returnurl=${encodeURIComponent(window.location.href)}`)),m});return function(){return u.apply(this,arguments)}}(),l=function(){var u=(0,f.A)(function*(){return!!(yield(0,a.Pn)()).AccessToken});return function(){return u.apply(this,arguments)}}(),p=function(){var u=(0,f.A)(function*(){var c;let m=yield(0,a.Pn)();return(!m.AccessToken||(null!==(c=m.TokenExpiry)&&void 0!==c?c:0)-(new Date).getTime()<0)&&(yield(0,a.wn)()),!!m.AccessToken});return function(){return u.apply(this,arguments)}}()},5751:(T,h,i)=>{i.d(h,{q:()=>P});var f=i(467);const P=function(){var a=(0,f.A)(function*(d,e,l){var p,u,c;return!e.message&&l&&(e.message=null!==(c=null==l?void 0:l.message)&&void 0!==c?c:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!",e.icon||(e.icon=null!=l&&l.message?"checkmark-circle-sharp":"alert-circle-outline"),e.color||(e.color=null!=l&&l.status?"success":-1==(null==l?void 0:l.data)?"danger":"warning")),e.position||(e.position="bottom"),e.icon||(e.icon="bulb-outline"),e.color||(e.color="secondary"),e.duration=null!==(p=e.duration)&&void 0!==p?p:3e3,e.animated=null===(u=e.animated)||void 0===u||u,e.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield d.create(e)});return function(e,l,p){return a.apply(this,arguments)}}()},2706:(T,h,i)=>{i.d(h,{G:()=>a});var f=i(4438);let a=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275mod=f.$C({type:d}),d.\u0275inj=f.G2t({}),d})()}}]);