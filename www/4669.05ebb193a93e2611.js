"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4669],{4669:(D,h,a)=>{a.r(h),a.d(h,{VotePageModule:()=>Y});var _=a(177),v=a(9417),r=a(4742),m=a(2175),o=a(467),u=a(8507),f=a(5811),c=a(6932),g=a(6539),C=a(5751),T=a(1312),y=a(8833),t=a(4438),V=a(4842);const F=e=>({$implicit:e}),E=()=>[];function x(e,s){1&e&&(t.j41(0,"div",7)(1,"div",9)(2,"div")(3,"div",10),t.nrm(4,"ion-img",11),t.k0s(),t.j41(5,"div",12),t.EFF(6),t.nI1(7,"translate"),t.k0s()()()()),2&e&&(t.R7$(6),t.JRh(t.bMT(7,1,"DataNotFound")))}function O(e,s){if(1&e&&(t.j41(0,"div",13),t.eu8(1,14),t.k0s()),2&e){t.XpG();const l=t.sdS(13);t.R7$(),t.Y8G("ngTemplateOutlet",l)}}function R(e,s){if(1&e){const l=t.RV6();t.j41(0,"ion-infinite-scroll",15),t.bIt("ionInfinite",function(i){t.eBV(l);const d=t.XpG();return t.Njj(d.infiniteChange(i))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}function j(e,s){if(1&e&&(t.j41(0,"div",16),t.eu8(1,17),t.k0s()),2&e){const l=s.$implicit;t.XpG(2);const n=t.sdS(15);t.R7$(),t.Y8G("ngTemplateOutlet",n)("ngTemplateOutletContext",t.eq3(2,F,l))}}function I(e,s){if(1&e&&t.Z7z(0,j,2,4,"div",16,t.fX1),2&e){const l=t.XpG();t.Dyx(l.listData)}}function b(e,s){1&e&&(t.j41(0,"ion-text",20),t.EFF(1,"Ch\u1ecdn nhi\u1ec1u"),t.k0s())}function A(e,s){1&e&&(t.j41(0,"ion-text",20),t.EFF(1,"Ch\u1ecdn m\u1ed9t"),t.k0s())}function N(e,s){1&e&&(t.j41(0,"ion-chip",21)(1,"ion-label"),t.EFF(2,"\u0110\xe3 k\u1ebft th\xfac"),t.k0s()())}function L(e,s){1&e&&(t.j41(0,"ion-chip",25)(1,"ion-label"),t.EFF(2,"\u0110ang bi\u1ec3u quy\u1ebft"),t.k0s()())}function U(e,s){if(1&e&&(t.j41(0,"li",16),t.nrm(1,"ion-note",26),t.k0s()),2&e){const l=s.$implicit;t.R7$(),t.Y8G("innerHTML",l.title,t.npT)}}function $(e,s){if(1&e){const l=t.RV6();t.j41(0,"div",18),t.bIt("click",function(){const i=t.eBV(l).$implicit,d=t.XpG();return t.Njj(d.presentModalVoteDetail(i.id))}),t.j41(1,"div")(2,"div",19),t.DNE(3,b,2,0,"ion-text",20)(4,A,2,0)(5,N,3,0,"ion-chip",21)(6,L,3,0),t.k0s(),t.nrm(7,"hr",22),t.j41(8,"div")(9,"div")(10,"b"),t.EFF(11),t.k0s()(),t.j41(12,"div",23)(13,"ul",24),t.Z7z(14,U,2,1,"li",16,t.fX1),t.k0s()()()()()}if(2&e){const l=s.$implicit;t.BMQ("color",l.end?"medium":"primary"),t.R7$(3),t.vxM(3,l.type?3:4),t.R7$(2),t.vxM(5,l.end?5:6),t.R7$(6),t.JRh(l.title),t.R7$(3),t.Dyx(l.meetingvoted||t.lJ4(4,E))}}const k=[{path:"",component:(()=>{var e;class s{constructor(n,i,d,p,P){this.router=n,this.activatedRoute=i,this.loadingController=d,this.toastController=p,this.modalController=P,this.APP_ROUTE=y._,this.APP_FUNC_FormatDate=T.Rv,this.filter={},this.paging={sortfield:null,sorttype:null,page:1,limit:20,active:!0},this.listData=[],this.limitLoad=0;let M=i.snapshot.params.id;M&&(this.scheduleId=M)}ngOnInit(){var n=this;(0,o.A)(function*(){(yield(0,g.kU)())&&n.loadData()})()}pushData(n){1==this.paging.page&&(this.listData.length=0),this.listData=this.listData.concat(n)}refreshData(){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData()}loadData(n){this.loadData_Paging_Limit(n)}loadData_More(n){this.paging.page+=1,this.loadData_Paging_Limit(n)}loadData_Paging_Limit(n){var i=this;return(0,o.A)(function*(){if(i.limitLoad>0)return void(n&&n());i.limitLoad=300;let d=setInterval(()=>{i.limitLoad-=100,i.limitLoad<=0&&(clearInterval(d),i.loadData_Paging(n))},100)})()}loadData_Paging(n){var i=this;return(0,o.A)(function*(){(0,c.hN)({loadingController:i.loadingController,params:{pageNumber:i.paging.page,pageSize:i.paging.limit,scheduleId:i.scheduleId},callback:d=>{var p;null!=d&&d.status?i.pushData(null!==(p=null==d?void 0:d.data)&&void 0!==p?p:[]):(0,C.q)(i.toastController,{},d).then(P=>P.present()),i.listData.length<i.paging.limit*i.paging.page&&(i.paging.active=!1),n&&n()}})})()}refresherChange(n){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData(()=>{n.target.complete()})}infiniteChange(n){this.loadData_More(()=>{n.target.complete()})}searchChange(n){this.filter.search=n.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}presentModalVoteChoice(n){var i=this;return(0,o.A)(function*(){if(!n)return;const d=yield i.modalController.create({component:u.y,componentProps:{id:n}});d.onDidDismiss().then(p=>{"success"==p.role&&i.refreshData()}),d.present()})()}presentModalVoteDetail(n){var i=this;return(0,o.A)(function*(){n&&(yield i.modalController.create({component:f.Q,componentProps:{id:n}})).present()})()}}return(e=s).\u0275fac=function(n){return new(n||e)(t.rXU(m.Ix),t.rXU(m.nX),t.rXU(r.Xi),t.rXU(r.K_),t.rXU(r.W3))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-vote"]],decls:16,vars:2,consts:[["templateList",""],["templateVote",""],[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],["slot","fixed",3,"ionRefresh"],[1,"py-5"],[3,"ionInfinite",4,"ngIf"],[1,"d-flex","align-items-center","justify-content-center","data-not-found"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/no-documents.svg",1,"w-40"],[1,"mt-2","text-center"],[1,"ion-padding"],[3,"ngTemplateOutlet"],[3,"ionInfinite"],[1,"mb-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-vote","cursor-pointer",3,"click"],[1,"d-flex","align-items-center","justify-content-between"],["color","primary",1,"fs-14"],["color","medium",1,"ion-no-margin","fs-10","min-h-20","py-0","no-opacity"],[1,"border-top","mt-3","mb-2"],[1,"mt-2"],[1,"my-0"],["color","warning",1,"ion-no-margin","fs-10","min-h-20","py-0","no-opacity"],["color","medium",1,"text-wrap",3,"innerHTML"]],template:function(n,i){if(1&n){const d=t.RV6();t.j41(0,"ion-header",2)(1,"ion-toolbar",3)(2,"ion-buttons",4),t.nrm(3,"ion-back-button",5),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Danh m\u1ee5c bi\u1ec3u quy\u1ebft"),t.k0s()()(),t.j41(6,"ion-content")(7,"ion-refresher",6),t.bIt("ionRefresh",function(P){return t.eBV(d),t.Njj(i.refresherChange(P))}),t.nrm(8,"ion-refresher-content"),t.k0s(),t.DNE(9,x,8,3,"div",7)(10,O,2,1)(11,R,2,0,"ion-infinite-scroll",8),t.k0s(),t.DNE(12,I,2,0,"ng-template",null,0,t.C5r)(14,$,16,5,"ng-template",null,1,t.C5r)}2&n&&(t.R7$(9),t.vxM(9,i.listData.length?10:9),t.R7$(2),t.Y8G("ngIf",i.paging.active))},dependencies:[_.bT,_.T3,r.QW,r.ZB,r.W9,r.eU,r.KW,r.Ax,r.Hp,r.he,r.JI,r.To,r.Ki,r.IO,r.BC,r.ai,r.el,V.D9],styles:['.card-vote[_ngcontent-%COMP%]{--line-color: var(--ion-color-primary);position:relative}.card-vote[color=primary][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-primary)}.card-vote[color=success][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-success)}.card-vote[color=warning][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-warning)}.card-vote[color=danger][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-danger)}.card-vote[color=medium][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-medium)}.card-vote[_ngcontent-%COMP%]:before{content:"";padding-left:1rem;background-color:var(--line-color);position:absolute;top:0;left:-3px;bottom:0;border-radius:1rem 0 0 1rem}.card-vote[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;padding:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast);border-radius:1rem}.card-vote[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:decimal;padding:0 0 0 1rem}']}),s})()}];let B=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[m.iI.forChild(k),m.iI]}),s})();var X=a(3890);let Y=(()=>{var e;class s{}return(e=s).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[_.MD,v.YN,r.bv,B,X.x]}),s})()},5751:(D,h,a)=>{a.d(h,{q:()=>v});var _=a(467);const v=function(){var r=(0,_.A)(function*(m,o,u){var f,c,g;return!o.message&&u&&(o.message=null!==(g=null==u?void 0:u.message)&&void 0!==g?g:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!",o.icon||(o.icon=null!=u&&u.message?"checkmark-circle-sharp":"alert-circle-outline"),o.color||(o.color=null!=u&&u.status?"success":-1==(null==u?void 0:u.data)?"danger":"warning")),o.position||(o.position="middle"),o.icon||(o.icon="bulb-outline"),o.color||(o.color="secondary"),o.duration=null!==(f=o.duration)&&void 0!==f?f:3e3,o.animated=null===(c=o.animated)||void 0===c||c,o.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield m.create(o)});return function(o,u,f){return r.apply(this,arguments)}}()},1312:(D,h,a)=>{a.d(h,{IV:()=>o,NY:()=>u,Rv:()=>r,k8:()=>f});var _=a(7586),v=a.n(_);function r(c,g,C){return C?v()(c||void 0).utcOffset(0,!1).format(null!=g?g:"HH:mm, DD/MM/YYYY"):v()(c||void 0).format(null!=g?g:"HH:mm, DD/MM/YYYY")}const o=c=>(null!=c?c:"0123456789").replace(/^0/,"+84").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,u=c=>(null!=c?c:"123456789").replace(/[^0-9]/,"").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,f=c=>{if(!c)return!1;try{return navigator.clipboard.writeText(c),!0}catch(g){console.error(g)}return!1}}}]);