"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6658],{6658:(w,p,l)=>{l.r(p),l.d(p,{DashboardPageModule:()=>V});var h=l(177),b=l(9417),s=l(4742),g=l(2175),m=l(467),P=l(7586),v=l.n(P),_=l(5826),C=l(6539),D=l(5751),u=l(1312),f=l(8833),M=l(6954),t=l(4438),j=l(2844),R=l(4842);const y=e=>({$implicit:e}),F=()=>[],x=()=>[0,1,2];function O(e,r){if(1&e&&(t.j41(0,"ion-item",21)(1,"ion-avatar",22),t.nrm(2,"img",23),t.k0s(),t.j41(3,"ion-label")(4,"div",24),t.EFF(5),t.k0s(),t.j41(6,"div",25)(7,"ion-text",26),t.EFF(8),t.k0s()()()(),t.nrm(9,"hr",27)),2&e){const a=t.XpG();t.R7$(5),t.JRh(a.user.name),t.R7$(3),t.JRh(a.user.email)}}function T(e,r){1&e&&(t.j41(0,"div",20)(1,"div",28)(2,"div")(3,"div",29),t.nrm(4,"ion-img",30),t.k0s(),t.j41(5,"div",31),t.EFF(6),t.nI1(7,"translate"),t.k0s()()()()),2&e&&(t.R7$(6),t.JRh(t.bMT(7,1,"DataNotFound")))}function k(e,r){if(1&e&&(t.j41(0,"div",32),t.eu8(1,33),t.k0s()),2&e){const a=r.$implicit;t.XpG(2);const n=t.sdS(33);t.R7$(),t.Y8G("ngTemplateOutlet",n)("ngTemplateOutletContext",t.eq3(2,y,a))}}function E(e,r){if(1&e&&t.Z7z(0,k,2,4,"div",32,t.fX1),2&e){const a=t.XpG();t.Dyx(a.listData)}}function $(e,r){if(1&e&&(t.j41(0,"div",39),t.nrm(1,"ion-icon",42),t.j41(2,"ion-text",38),t.EFF(3),t.k0s()()),2&e){const a=t.XpG().$implicit;t.R7$(3),t.JRh(a.place)}}function N(e,r){1&e&&(t.j41(0,"ion-avatar",43),t.nrm(1,"img",23),t.k0s()),2&e&&t.Y8G("title",r.$implicit.email)}function I(e,r){if(1&e&&t.Z7z(0,N,2,1,"ion-avatar",43,t.fX1),2&e){const a=t.XpG().$implicit;t.Dyx(a.meetingMember||t.lJ4(0,F))}}function U(e,r){if(1&e&&(t.j41(0,"ion-avatar",43),t.nrm(1,"img",23),t.k0s()),2&e){const a=r.$implicit,n=t.XpG(2).$implicit;t.Y8G("title",n.meetingMember[a].email)}}function X(e,r){if(1&e&&(t.Z7z(0,U,2,1,"ion-avatar",43,t.fX1),t.j41(2,"span",44)(3,"span"),t.EFF(4),t.k0s()()),2&e){const a=t.XpG().$implicit;t.Dyx(t.lJ4(1,x)),t.R7$(4),t.SpI("+",a.meetingMember.length-3,"")}}function A(e,r){if(1&e){const a=t.RV6();t.j41(0,"ion-button",46),t.bIt("click",function(){t.eBV(a);const o=t.XpG(2).$implicit,i=t.XpG();return t.Njj(i.navigateByUrl(i.APP_ROUTE.ROOM_EXTERNAL_ID.replace(":id",o.id)))}),t.j41(1,"ion-label"),t.EFF(2,"Tham gia"),t.k0s()()}}function B(e,r){if(1&e&&t.DNE(0,A,3,0,"ion-button",45),2&e){const a=t.XpG().$implicit;t.vxM(0,2==a.status||3==a.status?0:-1)}}function G(e,r){1&e&&(t.j41(0,"ion-button",47)(1,"ion-label"),t.EFF(2,"\u0110\xe3 k\u1ebft th\xfac"),t.k0s()())}function L(e,r){if(1&e){const a=t.RV6();t.j41(0,"div",34)(1,"div")(2,"div",35),t.bIt("click",function(){const o=t.eBV(a).$implicit,i=t.XpG();return t.Njj(i.navigateByUrl(i.APP_ROUTE.SCHEDULE_DETAIL_ID.replace(":id",o.id)))}),t.j41(3,"div")(4,"b"),t.EFF(5),t.k0s()(),t.j41(6,"div",36),t.nrm(7,"ion-icon",37),t.j41(8,"ion-text",38),t.EFF(9),t.k0s()(),t.DNE(10,$,4,1,"div",39),t.k0s(),t.j41(11,"div",40)(12,"div",41),t.DNE(13,I,2,1)(14,X,5,2),t.k0s(),t.DNE(15,B,1,1)(16,G,3,0),t.k0s()()()}if(2&e){const a=r.$implicit,n=t.XpG();t.BMQ("color",n.ColorStatusSchedule(a.status,a.endTime)),t.R7$(5),t.JRh(a.title),t.R7$(4),t.Lme("",n.APP_FUNC_FormatDate(a.startTime,"HH:mm")," - ",n.APP_FUNC_FormatDate(a.endTime,"HH:mm"),""),t.R7$(),t.vxM(10,a.place?10:-1),t.R7$(3),t.vxM(13,(null==a.meetingMember?null:a.meetingMember.length)<=3?13:14),t.R7$(2),t.vxM(15,n.checkStatus(a.endTime)?15:16)}}const Y=[{path:"",component:(()=>{var e;class r{constructor(n,o,i){this.router=n,this.loadingController=o,this.toastController=i,this.APP_ROUTE=f._,this.APP_FUNC_FormatDate=u.Rv,this.ColorStatusSchedule=M.z,this.dataForm={},this.filter={},this.paging={sortfield:null,sorttype:null,page:1,limit:20,active:!0},this.listData=[],this.limitLoad=0}ngOnInit(){(0,C.UZ)().then(n=>{this.user=n.data,this.refreshData()})}onIonRefresher(n){this.filter={},this.refreshData(()=>{n.target.complete()})}pushData(n){1==this.paging.page&&(this.listData.length=0),this.listData=this.listData.concat(n)}refreshData(n){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(n)}loadData_Paging_Limit(n){var o=this;return(0,m.A)(function*(){if(o.limitLoad>0)return void(n&&n());o.limitLoad=300;let i=setInterval(()=>{o.limitLoad-=100,o.limitLoad<=0&&(clearInterval(i),o.loadData_Paging(n))},100)})()}loadData_Paging(n){var o=this;return(0,m.A)(function*(){(0,_.s_)({loadingController:o.loadingController,params:{pageNumber:o.paging.page,pageSize:o.paging.limit,search:o.filter.search,dateFrom:(0,u.Rv)(new Date,"YYYY-MM-DD"),dateTo:(0,u.Rv)(new Date,"YYYY-MM-DD")},callback:i=>{var c;null!=i&&i.status?o.pushData(null!==(c=null==i?void 0:i.data)&&void 0!==c?c:[]):(0,D.q)(o.toastController,{},i).then(d=>d.present()),o.listData.length<o.paging.limit*o.paging.page&&(o.paging.active=!1),n&&n()}})})()}checkStatus(n){return v()().isBefore(v()(n))}navigateByUrl(n){var o=this;return(0,m.A)(function*(){o.router.navigateByUrl(n)})()}changeRoomCode(n){var o=this;return(0,m.A)(function*(){var i;o.dataForm.RoomCode=null===(i=n.detail.value)||void 0===i?void 0:i.trim()})()}submitRoomCode(){var n=this;return(0,m.A)(function*(){n.dataForm.RoomCode&&(0,_.bt)({params:{roomName:n.dataForm.RoomCode},callback:o=>{var i,c;null!=o&&null!==(i=o.data)&&void 0!==i&&i.id&&n.router.navigateByUrl(f._.ROOM_EXTERNAL_ID.replace(":id",null==o||null===(c=o.data)||void 0===c?void 0:c.id))}})})()}}return(e=r).\u0275fac=function(n){return new(n||e)(t.rXU(g.Ix),t.rXU(s.Xi),t.rXU(s.K_))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-dashboard"]],decls:34,vars:3,consts:[["templateSchedule",""],["slot","fixed",3,"ionRefresh"],[1,"ion-no-border"],["color","primary"],[1,"h-92","px-2","mx-1","d-flex","align-items-center","justify-content-between"],["src","../../../assets/image/logo-light.svg",1,"h-40"],[1,"area-primary"],[1,"area-white"],[1,"card-join","px-3"],[1,"d-flex","align-items-center"],["color","primary",1,"p-2","m-0"],["src","../../../assets/icon/video-camera.svg",1,"fs-16","m-0"],["color","primary",1,"ml-2"],[1,"mt-2","d-flex","align-items-stretch","card-join-form"],["mode","md","color","primary","fill","outline","placeholder","Nh\u1eadp m\xe3 tham gia",3,"ionChange","keyup.enter"],["color","primary","expand","block",1,"ion-no-margin",3,"click"],[1,"text-nowrap"],[1,"area-default"],[1,"mb-3","d-flex","align-items-center","justify-content-between"],["size","small","color","primary","fill","outline",1,"ion-no-margin",3,"click"],[1,"py-5"],["lines","none","color","transparent"],["slot","start",1,"w-40","h-40"],["src","../../../assets/image/default-avatar.svg"],[1,"fs-18","fw-700"],[1,"fs-14","fw-300"],["color","medium"],[1,"mt-3","mb-3","mx-3"],[1,"d-flex","align-items-center","justify-content-center","data-not-found"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/no-documents.svg",1,"w-40"],[1,"mt-2","text-center"],[1,"mb-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-schedule"],[3,"click"],[1,"mt-3","d-flex","align-items-center"],["color","primary","src","../../../assets/icon/clock.svg",1,"fs-16","mr-3"],["color","medium",1,"fs-14"],[1,"mt-1","d-flex","align-items-center"],[1,"mt-2","d-flex","align-items-end","justify-content-between"],[1,"lst-avatar","d-flex","align-items-center"],["color","primary","src","../../../assets/icon/location-marker.svg",1,"fs-16","mr-3"],[1,"w-24","h-24",3,"title"],[1,"avatar","w-24","h-24","d-flex","align-items-center","justify-content-center"],["size","small","color","primary",1,"ion-no-margin"],["size","small","color","primary",1,"ion-no-margin",3,"click"],["size","small","color","medium",1,"ion-no-margin"]],template:function(n,o){if(1&n){const i=t.RV6();t.j41(0,"ion-content")(1,"ion-refresher",1),t.bIt("ionRefresh",function(d){return t.eBV(i),t.Njj(o.onIonRefresher(d))}),t.nrm(2,"ion-refresher-content"),t.k0s(),t.j41(3,"ion-header",2)(4,"ion-toolbar",3)(5,"div",4),t.nrm(6,"ion-img",5),t.k0s()()(),t.nrm(7,"div",6),t.j41(8,"div",7),t.DNE(9,O,10,2),t.j41(10,"div",8)(11,"div",9)(12,"ion-chip",10),t.nrm(13,"ion-icon",11),t.k0s(),t.j41(14,"ion-text",12)(15,"b"),t.EFF(16,"Tham gia h\u1ecdp ngay"),t.k0s()()(),t.j41(17,"div",13)(18,"ion-input",14),t.bIt("ionChange",function(d){return t.eBV(i),t.Njj(o.changeRoomCode(d))})("keyup.enter",function(){return t.eBV(i),t.Njj(o.submitRoomCode())}),t.k0s(),t.j41(19,"ion-button",15),t.bIt("click",function(){return t.eBV(i),t.Njj(o.submitRoomCode())}),t.j41(20,"ion-label",16),t.EFF(21,"Tham gia"),t.k0s()()()()(),t.j41(22,"div",17)(23,"div",18)(24,"b"),t.EFF(25),t.k0s(),t.j41(26,"ion-button",19),t.bIt("click",function(){return t.eBV(i),t.Njj(o.navigateByUrl(o.APP_ROUTE.SCHEDULE))}),t.j41(27,"ion-label"),t.EFF(28,"Xem l\u1ecbch h\u1ecdp"),t.k0s()()(),t.DNE(29,T,8,3,"div",20)(30,E,2,0),t.k0s()(),t.nrm(31,"app-footer-tabs"),t.DNE(32,L,17,7,"ng-template",null,0,t.C5r)}2&n&&(t.R7$(9),t.vxM(9,o.user?9:-1),t.R7$(16),t.SpI("H\xf4m nay - ",o.APP_FUNC_FormatDate(void 0,"DD/MM/YYYY"),""),t.R7$(4),t.vxM(29,o.listData.length?30:29))},dependencies:[h.T3,s.mC,s.Jm,s.ZB,s.W9,s.eU,s.iq,s.KW,s.$w,s.uz,s.he,s.To,s.Ki,s.IO,s.ai,s.Gw,j.x,R.D9],styles:['.area-primary[_ngcontent-%COMP%]{padding-bottom:1.5rem;background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.area-white[_ngcontent-%COMP%]{padding:1.5rem 0 3.5rem;margin-top:-1.5rem;background-color:var(--ion-color-primary-contrast);border-radius:1.5rem 1.5rem 0 0}.area-white[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-top:1px solid var(--ion-color-light-shade)}.area-default[_ngcontent-%COMP%]{padding:1.5rem 1rem;margin-top:-1.5rem;background-color:var(--ion-background-color);border-radius:1.5rem 1.5rem 0 0}.card-join[_ngcontent-%COMP%]   .card-join-form[_ngcontent-%COMP%]{border:1px solid var(--ion-color-primary);border-radius:.75rem;overflow:hidden}.card-join[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{border-radius:.75rem}.card-join[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--border-color: transparent;min-height:2.75rem}.card-join[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius: 0;min-height:2.75rem}.card-schedule[_ngcontent-%COMP%]{--line-color: var(--ion-color-primary);position:relative}.card-schedule[color=primary][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-primary)}.card-schedule[color=success][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-success)}.card-schedule[color=warning][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-warning)}.card-schedule[color=danger][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-danger)}.card-schedule[color=medium][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-medium)}.card-schedule[_ngcontent-%COMP%]:before{content:"";padding-left:1rem;background-color:var(--line-color);position:absolute;top:0;left:-3px;bottom:0;border-radius:1rem 0 0 1rem}.card-schedule[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;padding:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast);border-radius:1rem}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 2px #0006}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]:not(:first-child){margin-left:-.5rem}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{background-color:var(--ion-color-medium-tint);color:var(--ion-color-medium-contrast);border-radius:50%;font-size:.75rem}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:not(:first-child){margin-left:-.5rem}']}),r})()}];let S=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[g.iI.forChild(Y),g.iI]}),r})();var z=l(3664);let V=(()=>{var e;class r{}return(e=r).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[h.MD,b.YN,s.bv,S,z.x]}),r})()}}]);