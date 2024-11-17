"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5240],{5240:(G,m,l)=>{l.r(m),l.d(m,{RoomExternalPageModule:()=>F});var p=l(177),h=l(9417),s=l(4742),u=l(2175),d=l(467),_=l(5826),f=l(6539),v=l(2177),t=l(4438),g=l(8833);const E=["jitsiContainer"];let C=(()=>{var n;class r{ngOnInit(){this.api=new window.JitsiMeetExternalAPI(this.roomData.server.ip,{roomName:this.roomData.roomName,width:"100%",height:"100%",parentNode:this.jitsiContainer.nativeElement,interfaceConfigOverwrite:{SHOW_JITSI_WATERMARK:!1,SHOW_WATERMARK_FOR_GUESTS:!1,DEFAULT_BACKGROUND:"#ffffff"},configOverwrite:{startWithAudioMuted:!0,startWithVideoMuted:!0,enableWelcomePage:!1,disableSimulcast:!0},prejoinPageEnabled:!1,userInfo:{displayName:this.userData.name,email:this.userData.email},jwt:this.roomData.token,onload:()=>{console.log("Jitsi Meet iframe loaded")}}),this.api.addEventListener("videoConferenceJoined",o=>{console.log("Local user joined the conference:",o)}),this.api.addEventListener("participantJoined",o=>{console.log("Participant joined:",o)}),this.api.addEventListener("participantLeft",o=>{console.log("Participant left:",o)}),this.api.addEventListener("audioMuteStatusChanged",o=>{console.log("Audio mute status changed:",o.muted)}),this.api.addEventListener("videoMuteStatusChanged",o=>{console.log("Video mute status changed:",o.muted)}),this.api.addEventListener("readyToClose",()=>{console.log("Conference is ready to be closed"),window.location.replace(g._.HOME)}),window.addEventListener("beforeunload",()=>{this.api.dispose()})}ngOnDestroy(){this.api&&this.api.dispose()}}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-jitsi-meet"]],viewQuery:function(e,o){if(1&e&&t.GBs(E,7),2&e){let a;t.mGM(a=t.lsd())&&(o.jitsiContainer=a.first)}},inputs:{roomData:"roomData",userData:"userData"},decls:2,vars:0,consts:[["jitsiContainer",""],[2,"width","100%","height","100%"]],template:function(e,o){1&e&&t.nrm(0,"div",1,0)}}),r})();const x=["inputRoomPwd"];function R(n,r){1&n&&(t.j41(0,"ion-buttons",3),t.nrm(1,"ion-back-button",4),t.k0s())}function P(n,r){if(1&n&&(t.j41(0,"ion-content",5),t.nrm(1,"app-jitsi-meet",6),t.k0s()),2&n){const i=t.XpG(2);t.R7$(),t.Y8G("roomData",i.roomData)("userData",i.userData)}}function D(n,r){if(1&n){const i=t.RV6();t.j41(0,"div")(1,"div",10),t.EFF(2,"M\u1eadt kh\u1ea9u "),t.j41(3,"ion-text",11),t.EFF(4,"*"),t.k0s()(),t.j41(5,"ion-input",12,0),t.bIt("ionChange",function(o){t.eBV(i);const a=t.XpG(3);return t.Njj(a.changeRoomPwd(o))})("keyup.enter",function(){t.eBV(i);const o=t.XpG(3);return t.Njj(o.checkAccepted())}),t.k0s()()}}function j(n,r){if(1&n){const i=t.RV6();t.j41(0,"div",13)(1,"div",10),t.EFF(2,"T\xean hi\u1ec3n th\u1ecb "),t.j41(3,"ion-text",11),t.EFF(4,"*"),t.k0s()(),t.j41(5,"ion-input",14),t.bIt("ionChange",function(o){t.eBV(i);const a=t.XpG(3);return t.Njj(a.changeUserName(o))}),t.k0s()(),t.j41(6,"div",13)(7,"div",10),t.EFF(8,"Email "),t.j41(9,"ion-text",11),t.EFF(10,"*"),t.k0s()(),t.j41(11,"ion-input",15),t.bIt("ionChange",function(o){t.eBV(i);const a=t.XpG(3);return t.Njj(a.changeUserEmail(o))}),t.k0s()()}if(2&n){const i=t.XpG(3);t.R7$(5),t.Y8G("value",i.userData.name),t.R7$(6),t.Y8G("value",i.userData.email)}}function A(n,r){if(1&n){const i=t.RV6();t.j41(0,"ion-content")(1,"div",7),t.DNE(2,D,7,0,"div")(3,j,12,2),t.j41(4,"div",8)(5,"ion-button",9),t.bIt("click",function(){t.eBV(i);const o=t.XpG(2);return t.Njj(o.checkAccepted())}),t.j41(6,"ion-label"),t.EFF(7,"Tham gia"),t.k0s()()()()()}if(2&n){const i=t.XpG(2);t.R7$(2),t.vxM(2,i.isPassedPwd?-1:2),t.R7$(),t.vxM(3,i.isPassedAuth?-1:3)}}function M(n,r){if(1&n&&t.DNE(0,P,2,2,"ion-content",5)(1,A,8,2),2&n){const i=t.XpG();t.vxM(0,i.isAccepted?0:1)}}const w=[{path:"",component:(()=>{var n;class r{constructor(e,o,a,T){this.router=o,this.modalController=a,this.toastController=T;let c=e.snapshot.params.id;c&&(this.roomId=c)}ngOnInit(){var e=this;(0,d.A)(function*(){var o,a;e.user=(yield(0,f.xk)()).data,e.userData={name:null===(o=e.user)||void 0===o?void 0:o.name,email:null===(a=e.user)||void 0===a?void 0:a.email},(0,v.r)(),e.refreshData()})()}ngAfterViewInit(){setTimeout(()=>{var e;null===(e=this.inputRoomPwd)||void 0===e||e.setFocus()},300)}refreshData(){var e=this;return(0,d.A)(function*(){(0,_.vx)({params:{id:e.roomId},callback:o=>{e.roomData=null==o?void 0:o.data,e.checkAccepted()}})})()}checkAccepted(){var e,o,a;this.isPassedAuth=!(!this.userData.name||!this.userData.email),this.isPassedPwd=null===(e=this.roomData)||void 0===e||!e.password||(null===(o=this.roomData)||void 0===o?void 0:o.password)==(null===(a=this.roomData)||void 0===a?void 0:a.confirm_password),this.isAccepted=this.isPassedAuth&&this.isPassedPwd}changeRoomPwd(e){var o=this;return(0,d.A)(function*(){o.roomData&&(o.roomData.confirm_password=e.detail.value)})()}changeUserName(e){var o=this;return(0,d.A)(function*(){var a;o.userData.name=null===(a=e.detail.value)||void 0===a?void 0:a.trim()})()}changeUserEmail(e){var o=this;return(0,d.A)(function*(){var a;o.userData.email=null===(a=e.detail.value)||void 0===a?void 0:a.trim()})()}}return(n=r).\u0275fac=function(e){return new(e||n)(t.rXU(u.nX),t.rXU(u.Ix),t.rXU(s.W3),t.rXU(s.K_))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-room-external"]],viewQuery:function(e,o){if(1&e&&t.GBs(x,5),2&e){let a;t.mGM(a=t.lsd())&&(o.inputRoomPwd=a.first)}},decls:6,vars:3,consts:[["inputRoomPwd",""],[1,"ion-no-border"],["color","primary"],["slot","start"],["defaultHref","/","text",""],["mode","md"],[3,"roomData","userData"],[1,"ion-padding"],[1,"mt-3"],["color","primary","expand","block",1,"ion-no-margin",3,"click"],[1,"fw-600","fs-16","mb-1"],["color","danger"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp m\u1eadt kh\u1ea9u ph\xf2ng h\u1ecdp",3,"ionChange","keyup.enter"],[1,"mt-4"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp t\xean hi\u1ec3n th\u1ecb","minlength","6","maxlength","100",3,"ionChange","value"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp email","minlength","6","maxlength","100",3,"ionChange","value"]],template:function(e,o){1&e&&(t.j41(0,"ion-header",1)(1,"ion-toolbar",2),t.DNE(2,R,2,0,"ion-buttons",3),t.j41(3,"ion-title"),t.EFF(4),t.k0s()()(),t.DNE(5,M,2,1)),2&e&&(t.R7$(2),t.vxM(2,o.isAccepted?-1:2),t.R7$(2),t.JRh(null==o.roomData?null:o.roomData.title),t.R7$(),t.vxM(5,o.roomData?5:-1))},dependencies:[s.Jm,s.QW,s.W9,s.eU,s.$w,s.he,s.IO,s.BC,s.ai,s.Gw,s.el,C],styles:["ion-input[fill=outline][_ngcontent-%COMP%]{--border-radius: 0}"]}),r})()}];let y=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[u.iI.forChild(w),u.iI]}),r})(),F=(()=>{var n;class r{}return(n=r).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[p.MD,h.YN,s.bv,y]}),r})()}}]);