"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5471],{3890:(P,p,i)=>{i.d(p,{x:()=>v});var _=i(177),h=i(9417),l=i(4742),s=i(2706),d=i(4342),c=i(4438);let v=(()=>{var m;class f{}return(m=f).\u0275fac=function(E){return new(E||m)},m.\u0275mod=c.$C({type:m}),m.\u0275inj=c.G2t({imports:[_.MD,h.YN,l.bv,s.G,d.LP,s.G,d.LP]}),f})()},5471:(P,p,i)=>{i.r(p),i.d(p,{RoomExternalPageModule:()=>$});var _=i(177),h=i(9417),l=i(4742),s=i(2175),d=i(467),c=i(5826),v=i(6539),m=i(2177),f=i(5751),t=i(4438),E=i(2925);const C=["inputRoomPwd"];function D(o,u){1&o&&(t.j41(0,"ion-buttons",3),t.nrm(1,"ion-back-button",4),t.k0s())}function R(o,u){if(1&o&&(t.j41(0,"ion-content",5),t.nrm(1,"app-jitsi-meet",6),t.k0s()),2&o){const r=t.XpG(2);t.R7$(),t.Y8G("roomData",r.roomData)("userData",r.userData)}}function x(o,u){if(1&o){const r=t.RV6();t.j41(0,"div")(1,"div",10),t.EFF(2,"M\u1eadt kh\u1ea9u "),t.j41(3,"ion-text",11),t.EFF(4,"*"),t.k0s()(),t.j41(5,"ion-input",12,0),t.bIt("ionChange",function(n){t.eBV(r);const a=t.XpG(3);return t.Njj(a.changeRoomPwd(n))})("keyup.enter",function(){t.eBV(r);const n=t.XpG(3);return t.Njj(n.checkAccepted())}),t.k0s()()}}function M(o,u){if(1&o){const r=t.RV6();t.j41(0,"div",13)(1,"div",10),t.EFF(2,"T\xean hi\u1ec3n th\u1ecb "),t.j41(3,"ion-text",11),t.EFF(4,"*"),t.k0s()(),t.j41(5,"ion-input",14),t.bIt("ionChange",function(n){t.eBV(r);const a=t.XpG(3);return t.Njj(a.changeUserName(n))}),t.k0s()(),t.j41(6,"div",13)(7,"div",10),t.EFF(8,"Email "),t.j41(9,"ion-text",11),t.EFF(10,"*"),t.k0s()(),t.j41(11,"ion-input",15),t.bIt("ionChange",function(n){t.eBV(r);const a=t.XpG(3);return t.Njj(a.changeUserEmail(n))}),t.k0s()()}if(2&o){const r=t.XpG(3);t.R7$(5),t.Y8G("value",r.userData.name),t.R7$(6),t.Y8G("value",r.userData.email)}}function y(o,u){if(1&o){const r=t.RV6();t.j41(0,"ion-content")(1,"div",7),t.DNE(2,x,7,0,"div")(3,M,12,2),t.j41(4,"div",8)(5,"ion-button",9),t.bIt("click",function(){t.eBV(r);const n=t.XpG(2);return t.Njj(n.checkAccepted())}),t.j41(6,"ion-label"),t.EFF(7,"Tham gia"),t.k0s()()()()()}if(2&o){const r=t.XpG(2);t.R7$(2),t.vxM(2,r.isPassedPwd?-1:2),t.R7$(),t.vxM(3,r.isPassedAuth?-1:3)}}function A(o,u){if(1&o&&t.DNE(0,R,2,2,"ion-content",5)(1,y,8,2),2&o){const r=t.XpG();t.vxM(0,r.isAccepted?0:1)}}const j=[{path:"",component:(()=>{var o;class u{constructor(e,n,a,U,I){this.router=n,this.loadingController=a,this.modalController=U,this.toastController=I;let g=e.snapshot.params.id;g&&(this.roomId=g)}ngOnInit(){var e=this;(0,d.A)(function*(){var n,a;e.user=(yield(0,v.xk)()).data,e.userData={name:null===(n=e.user)||void 0===n?void 0:n.name,email:null===(a=e.user)||void 0===a?void 0:a.email},(0,m.r)(),e.refreshData()})()}ngAfterViewInit(){setTimeout(()=>{var e;null===(e=this.inputRoomPwd)||void 0===e||e.setFocus()},300)}refreshData(){var e=this;return(0,d.A)(function*(){(0,c.vx)({loadingController:e.loadingController,params:{id:e.roomId},callback:n=>{null!=n&&n.status?(e.roomData=null==n?void 0:n.data,e.checkAccepted()):(0,f.q)(e.toastController,{},n).then(a=>a.present())}})})()}checkAccepted(){var e,n,a;this.isPassedAuth=!(!this.userData.name||!this.userData.email),this.isPassedPwd=null===(e=this.roomData)||void 0===e||!e.password||(null===(n=this.roomData)||void 0===n?void 0:n.password)==(null===(a=this.roomData)||void 0===a?void 0:a.confirm_password),this.isAccepted=this.isPassedAuth&&this.isPassedPwd}changeRoomPwd(e){var n=this;return(0,d.A)(function*(){n.roomData&&(n.roomData.confirm_password=e.detail.value)})()}changeUserName(e){var n=this;return(0,d.A)(function*(){var a;n.userData.name=null===(a=e.detail.value)||void 0===a?void 0:a.trim()})()}changeUserEmail(e){var n=this;return(0,d.A)(function*(){var a;n.userData.email=null===(a=e.detail.value)||void 0===a?void 0:a.trim()})()}}return(o=u).\u0275fac=function(e){return new(e||o)(t.rXU(s.nX),t.rXU(s.Ix),t.rXU(l.Xi),t.rXU(l.W3),t.rXU(l.K_))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-room-external"]],viewQuery:function(e,n){if(1&e&&t.GBs(C,5),2&e){let a;t.mGM(a=t.lsd())&&(n.inputRoomPwd=a.first)}},decls:6,vars:3,consts:[["inputRoomPwd",""],[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],["mode","md"],[3,"roomData","userData"],[1,"ion-padding"],[1,"mt-3"],["color","primary","expand","block",1,"ion-no-margin",3,"click"],[1,"fw-600","fs-16","mb-1"],["color","danger"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp m\u1eadt kh\u1ea9u ph\xf2ng h\u1ecdp",3,"ionChange","keyup.enter"],[1,"mt-4"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp t\xean hi\u1ec3n th\u1ecb","minlength","6","maxlength","100",3,"ionChange","value"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp email","minlength","6","maxlength","100",3,"ionChange","value"]],template:function(e,n){1&e&&(t.j41(0,"ion-header",1)(1,"ion-toolbar",2),t.DNE(2,D,2,0,"ion-buttons",3),t.j41(3,"ion-title"),t.EFF(4),t.k0s()()(),t.DNE(5,A,2,1)),2&e&&(t.R7$(2),t.vxM(2,n.isAccepted?-1:2),t.R7$(2),t.JRh(null==n.roomData?null:n.roomData.title),t.R7$(),t.vxM(5,n.roomData?5:-1))},dependencies:[l.Jm,l.QW,l.W9,l.eU,l.$w,l.he,l.IO,l.BC,l.ai,l.Gw,l.el,E.c],styles:["ion-input[fill=outline][_ngcontent-%COMP%]{--border-radius: 0}"]}),u})()}];let T=(()=>{var o;class u{}return(o=u).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[s.iI.forChild(j),s.iI]}),u})();var G=i(3890),F=i(5173);let $=(()=>{var o;class u{}return(o=u).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[_.MD,h.YN,l.bv,T,G.x,F.Q]}),u})()},2706:(P,p,i)=>{i.d(p,{G:()=>l});var _=i(4438);let l=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=_.$C({type:s}),s.\u0275inj=_.G2t({}),s})()}}]);