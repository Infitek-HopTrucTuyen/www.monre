"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9515],{5826:(E,_,r)=>{r.d(_,{D7:()=>A,Dm:()=>M,KL:()=>t,bt:()=>h,j7:()=>x,l9:()=>d,pD:()=>C,qC:()=>p,rm:()=>l,s_:()=>D,vR:()=>P,vx:()=>c});var f=r(467),R=r(7586),m=r.n(R),u=r(5972);const t=function(){var s=(0,f.A)(function*(a){var n,e,k,L;a.params=a.params||{},(0,u.Ll)({url:"QuanLyLapLich/them",params:{title:a.params.title,content:a.params.content,startTime:null!==(n=a.params.startTime)&&void 0!==n?n:m()(new Date).format("YYYY-MM-DDTHH:mm:ss"),endTime:null!==(e=a.params.endTime)&&void 0!==e?e:m()(new Date((L=new Date,L.setHours(L.getHours()+4),L))).format("YYYY-MM-DDTHH:mm:ss"),chairMan:a.params.chairMan,roomName:null!==(k=a.params.roomName)&&void 0!==k?k:m()(new Date).format("YYYYMMDDHHmmss"),place:a.params.place,status:a.params.status,start:a.params.start,token:a.params.token,serverId:4,typeId:a.params.typeId,sharedRole:a.params.sharedRole,password:a.params.password,isLobby:a.params.isLobby,isPublished:a.params.isPublished},success:L=>{"function"==typeof a.callback&&a.callback(L.data||null)},error:L=>{var o;"function"==typeof a.callback&&a.callback(null==L||null===(o=L.response)||void 0===o?void 0:o.data),console.error(L)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),d=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.IH)({url:`QuanLyLapLich/chinhsua?id=${a.params.id}`,params:{id:a.params.id,title:a.params.title,content:a.params.content,startTime:a.params.startTime,endTime:a.params.endTime,chairMan:a.params.chairMan,roomName:a.params.roomName,place:a.params.place,status:a.params.status,start:a.params.start,token:a.params.token,serverId:a.params.serverId,typeId:a.params.typeId,sharedRole:a.params.sharedRole,password:a.params.password,isLobby:a.params.isLobby,isPublished:a.params.isPublished,modifiedDate:a.params.modifiedDate,modifiedBy:a.params.modifiedBy,don_vi:a.params.don_vi},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),p=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.sj)({url:`QuanLyLapLich/xoa?id=${a.params.id}`,params:{id:a.params.id},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),c=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.hm)({url:"QuanLyLapLich/thongtin",params:{id:a.params.id},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),h=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.hm)({url:"QuanLyLapLich/chitietphonghop",params:{roomName:a.params.roomName},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),P=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.Ll)({url:`QuanLyLapLich/xacnhan?id=${a.params.id}`,params:{id:a.params.id},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),M=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.Ll)({url:`QuanLyLapLich/huyxacnhan?id=${a.params.id}`,params:{id:a.params.id},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),C=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.hm)({url:"QuanLyLapLich/danhsachdaxoa",success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),l=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.Ll)({url:`QuanLyLapLich/khoiphuc?id=${a.params.id}`,params:{id:a.params.id},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),D=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.hm)({url:"QuanLyLapLich/danhsach",params:{pageNumber:a.params.pageNumber,pageSize:a.params.pageSize,dateFrom:a.params.dateFrom,dateTo:a.params.dateTo,search:a.params.search},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),A=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.hm)({url:"QuanLyLapLich/danhsachserver",params:{pageNumber:a.params.pageNumber,pageSize:a.params.pageSize,search:a.params.search},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}(),x=function(){var s=(0,f.A)(function*(a){a.params=a.params||{},(0,u.hm)({url:"QuanLyLapLich/thongtinnguoidung",params:{pageNumber:a.params.pageNumber,pageSize:a.params.pageSize,search:a.params.search},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var e;"function"==typeof a.callback&&a.callback(null==n||null===(e=n.response)||void 0===e?void 0:e.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(n){return s.apply(this,arguments)}}()},3890:(E,_,r)=>{r.d(_,{x:()=>p});var f=r(177),R=r(9417),m=r(4742),u=r(2706),t=r(4342),d=r(4438);let p=(()=>{var c;class h{}return(c=h).\u0275fac=function(M){return new(M||c)},c.\u0275mod=d.$C({type:c}),c.\u0275inj=d.G2t({imports:[f.MD,R.YN,m.bv,u.G,t.LP,u.G,t.LP]}),h})()},9515:(E,_,r)=>{r.r(_),r.d(_,{RoomJoinPageModule:()=>L});var f=r(177),R=r(9417),m=r(4742),u=r(2175),t=r(467),d=r(23),p=r(4393),c=r(5826),h=r(6539),P=r(5751),M=r(1312),C=r(8833),l=r(4438),D=r(4842);const A=["inputRoomCode"];function x(o,b){if(1&o){const y=l.RV6();l.j41(0,"div",16)(1,"ion-chip")(2,"ion-avatar"),l.nrm(3,"img",17),l.k0s(),l.j41(4,"ion-label"),l.EFF(5),l.k0s()(),l.j41(6,"ion-button",18),l.bIt("click",function(){l.eBV(y);const v=l.XpG();return l.Njj(v.signOut())}),l.j41(7,"ion-label"),l.EFF(8,"\u0110\u1ed5i t\xe0i kho\u1ea3n"),l.k0s()()()}if(2&o){const y=l.XpG();l.R7$(5),l.JRh(y.user.name)}}function s(o,b){if(1&o){const y=l.RV6();l.j41(0,"div",19),l.nrm(1,"div",20),l.j41(2,"div")(3,"ion-button",21),l.bIt("click",function(){l.eBV(y);const v=l.XpG();return l.Njj(v.navigateByUrl(v.APP_ROUTE.AUTH))}),l.j41(4,"ion-label"),l.EFF(5),l.nI1(6,"translate"),l.k0s()()(),l.nrm(7,"div",20),l.k0s()}2&o&&(l.R7$(5),l.JRh(l.bMT(6,1,"SignIn")))}const n=[{path:"",component:(()=>{var o;class b{constructor(i,v,g){this.router=i,this.loadingController=v,this.toastController=g,this.APP_ROUTE=C._,this.APP_FUNC_FormatDate=M.Rv,this.dataForm={}}ngOnInit(){var i=this;(0,t.A)(function*(){i.user=(yield(0,h.xk)()).data})()}ngAfterViewInit(){setTimeout(()=>{var i;null===(i=this.inputRoomCode)||void 0===i||i.setFocus()},300)}navigateByUrl(i){this.router.navigateByUrl(i)}signOut(i){var v=this;return(0,t.A)(function*(){yield(0,p.SD)(),(0,d.wn)({callback:()=>{v.router.navigateByUrl(C._.HOME,{replaceUrl:!0})}}),null==i||i.dismiss()})()}changeRoomCode(i){var v=this;return(0,t.A)(function*(){var g;v.dataForm.RoomCode=null===(g=i.detail.value)||void 0===g?void 0:g.trim()})()}submitRoomCode(){var i=this;return(0,t.A)(function*(){i.dataForm.RoomCode&&(0,c.bt)({loadingController:i.loadingController,params:{roomName:i.dataForm.RoomCode},callback:v=>{var g,T,O;null!=v&&v.status?null!==(g=i.user)&&void 0!==g&&g.id?i.router.navigateByUrl(C._.ROOM_EXTERNAL_ID.replace(":id",null===(T=v.data)||void 0===T?void 0:T.id)):i.router.navigateByUrl(C._.ROOM_EXTERNAL_GUEST_ID.replace(":id",null!==(O=i.dataForm.RoomCode)&&void 0!==O?O:"")):(0,P.q)(i.toastController,{},v).then(I=>I.present())}})})()}}return(o=b).\u0275fac=function(i){return new(i||o)(l.rXU(u.Ix),l.rXU(m.Xi),l.rXU(m.K_))},o.\u0275cmp=l.VBU({type:o,selectors:[["app-room-join"]],viewQuery:function(i,v){if(1&i&&l.GBs(A,5),2&i){let g;l.mGM(g=l.lsd())&&(v.inputRoomCode=g.first)}},decls:24,vars:1,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],[1,"min-h-100","w-100","d-flex","flex-column"],[1,"text-center","py-5","area-primary"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/logo-icon.png"],[1,"mt-2","fs-32","fw-900"],[1,"mt-0","mb-4","fs-20"],[1,"flex-grow-1","d-flex","justify-content-center","py-5","area-white"],[1,"w-100","mw-360","px-4"],[1,"mb-4"],[1,"fw-500","fs-14","mb-1"],["mode","md","fill","outline","placeholder","Nh\u1eadp m\xe3 tham gia",3,"ionChange","keyup.enter"],["color","primary","expand","block",1,"ion-no-margin",3,"click"],[1,"mt-5","d-flex","align-items-center","justify-content-between"],["src","../../../assets/favicon/ms-icon-70x70.png","title","avatar"],["size","small","color","medium","fill","clear",3,"click"],[1,"mt-5","d-flex","align-items-center"],[1,"flex-grow-1","border-top"],["size","small","color","primary","fill","clear",3,"click"]],template:function(i,v){1&i&&(l.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),l.nrm(3,"ion-back-button",3),l.k0s()()(),l.j41(4,"ion-content")(5,"div",4)(6,"div",5)(7,"div",6),l.nrm(8,"ion-img",7),l.k0s(),l.j41(9,"div",8),l.EFF(10,"MONRE MEETING"),l.k0s(),l.j41(11,"div",9),l.EFF(12,"N\u1ec1n t\u1ea3ng h\u1ecdp tr\u1ef1c tuy\u1ebfn"),l.k0s()(),l.j41(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13),l.EFF(17,"Vui l\xf2ng \u0111i\u1ec1n m\xe3 tham gia d\u01b0\u1edbi \u0111\xe2y"),l.k0s(),l.j41(18,"ion-input",14),l.bIt("ionChange",function(T){return v.changeRoomCode(T)})("keyup.enter",function(){return v.submitRoomCode()}),l.k0s()(),l.j41(19,"ion-button",15),l.bIt("click",function(){return v.submitRoomCode()}),l.j41(20,"ion-label"),l.EFF(21,"Tham gia"),l.k0s()(),l.DNE(22,x,9,1,"div",16)(23,s,8,3),l.k0s()()()()),2&i&&(l.R7$(22),l.vxM(22,v.user?22:23))},dependencies:[m.mC,m.Jm,m.QW,m.ZB,m.W9,m.eU,m.KW,m.$w,m.he,m.ai,m.Gw,m.el,D.D9],styles:[".area-primary[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.area-white[_ngcontent-%COMP%]{margin-top:-1.5rem;background-color:var(--ion-color-primary-contrast);border-radius:1.5rem 1.5rem 0 0}"]}),b})()}];let e=(()=>{var o;class b{}return(o=b).\u0275fac=function(i){return new(i||o)},o.\u0275mod=l.$C({type:o}),o.\u0275inj=l.G2t({imports:[u.iI.forChild(n),u.iI]}),b})();var k=r(3890);let L=(()=>{var o;class b{}return(o=b).\u0275fac=function(i){return new(i||o)},o.\u0275mod=l.$C({type:o}),o.\u0275inj=l.G2t({imports:[f.MD,R.YN,m.bv,e,k.x]}),b})()},5751:(E,_,r)=>{r.d(_,{q:()=>R});var f=r(467);const R=function(){var m=(0,f.A)(function*(u,t,d){var p,c,h;return!t.message&&d&&(t.message=null!==(h=null==d?void 0:d.message)&&void 0!==h?h:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!",t.icon||(t.icon=null!=d&&d.message?"checkmark-circle-sharp":"alert-circle-outline"),t.color||(t.color=null!=d&&d.status?"success":-1==(null==d?void 0:d.data)?"danger":"warning")),t.position||(t.position="bottom"),t.icon||(t.icon="bulb-outline"),t.color||(t.color="secondary"),t.duration=null!==(p=t.duration)&&void 0!==p?p:3e3,t.animated=null===(c=t.animated)||void 0===c||c,t.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield u.create(t)});return function(t,d,p){return m.apply(this,arguments)}}()},1312:(E,_,r)=>{r.d(_,{IV:()=>t,NY:()=>d,Rv:()=>m,k8:()=>p});var f=r(7586),R=r.n(f);function m(c,h,P){return P?R()(c||void 0).utcOffset(0,!1).format(null!=h?h:"HH:mm, DD/MM/YYYY"):R()(c||void 0).format(null!=h?h:"HH:mm, DD/MM/YYYY")}const t=c=>(null!=c?c:"0123456789").replace(/^0/,"+84").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,d=c=>(null!=c?c:"123456789").replace(/[^0-9]/,"").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,p=c=>{if(!c)return!1;try{return navigator.clipboard.writeText(c),!0}catch(h){console.error(h)}return!1}},2706:(E,_,r)=>{r.d(_,{G:()=>m});var f=r(4438);let m=(()=>{class u{}return u.\u0275fac=function(d){return new(d||u)},u.\u0275mod=f.$C({type:u}),u.\u0275inj=f.G2t({}),u})()}}]);