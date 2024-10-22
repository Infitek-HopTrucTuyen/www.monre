"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5240],{5240:(I,p,r)=>{r.r(p),r.d(p,{RoomExternalPageModule:()=>G});var f=r(177),v=r(9417),l=r(4742),c=r(2175),m=r(467),g=r(5083),_=r(5826),C=r(6539),P=r(2177),h=r(8833),t=r(4438);const R=["jitsiContainer"];let E=(()=>{var i;class s{ngOnInit(){this.api=new window.JitsiMeetExternalAPI(this.roomData.server.ip,{roomName:this.roomData.roomName,width:"100%",height:"100%",parentNode:this.jitsiContainer.nativeElement,interfaceConfigOverwrite:{SHOW_JITSI_WATERMARK:!1,SHOW_WATERMARK_FOR_GUESTS:!1,DEFAULT_BACKGROUND:"#ffffff"},configOverwrite:{startWithAudioMuted:!0,startWithVideoMuted:!0,enableWelcomePage:!1,disableSimulcast:!0},prejoinPageEnabled:!1,userInfo:{displayName:this.userData.name,email:this.userData.email},jwt:this.roomData.token,onload:()=>{console.log("Jitsi Meet iframe loaded")}}),this.api.addEventListener("videoConferenceJoined",o=>{console.log("Local user joined the conference:",o)}),this.api.addEventListener("participantJoined",o=>{console.log("Participant joined:",o)}),this.api.addEventListener("participantLeft",o=>{console.log("Participant left:",o)}),this.api.addEventListener("audioMuteStatusChanged",o=>{console.log("Audio mute status changed:",o.muted)}),this.api.addEventListener("videoMuteStatusChanged",o=>{console.log("Video mute status changed:",o.muted)}),this.api.addEventListener("readyToClose",()=>{console.log("Conference is ready to be closed"),window.location.replace(h._.HOME)}),window.addEventListener("beforeunload",()=>{this.api.dispose()})}ngOnDestroy(){this.api&&this.api.dispose()}}return(i=s).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.VBU({type:i,selectors:[["app-jitsi-meet"]],viewQuery:function(e,o){if(1&e&&t.GBs(R,7),2&e){let n;t.mGM(n=t.lsd())&&(o.jitsiContainer=n.first)}},inputs:{roomData:"roomData",userData:"userData"},decls:2,vars:0,consts:[["jitsiContainer",""],[2,"width","100%","height","100%"]],template:function(e,o){1&e&&t.nrm(0,"div",1,0)}}),s})();const x=["inputRoomPwd"];function D(i,s){if(1&i&&t.nrm(0,"app-jitsi-meet",2),2&i){const a=t.XpG(2);t.Y8G("roomData",a.roomData)("userData",a.userData)}}function M(i,s){if(1&i){const a=t.RV6();t.j41(0,"div")(1,"ion-input",6,0),t.bIt("ionChange",function(o){t.eBV(a);const n=t.XpG(3);return t.Njj(n.changeRoomPwd(o))})("keyup.enter",function(){t.eBV(a);const o=t.XpG(3);return t.Njj(o.checkAccepted())}),t.j41(3,"div",7),t.EFF(4,"M\u1eadt kh\u1ea9u ph\xf2ng h\u1ecdp "),t.j41(5,"ion-text",8),t.EFF(6,"*"),t.k0s()()()()}}function j(i,s){}function w(i,s){if(1&i){const a=t.RV6();t.j41(0,"div",3),t.DNE(1,M,7,0,"div")(2,j,0,0),t.j41(3,"div",4)(4,"ion-button",5),t.bIt("click",function(){t.eBV(a);const o=t.XpG(2);return t.Njj(o.checkAccepted())}),t.j41(5,"ion-label"),t.EFF(6,"Tham gia"),t.k0s()()()()}if(2&i){const a=t.XpG(2);t.R7$(),t.vxM(1,a.isPassedPwd?-1:1),t.R7$(),t.vxM(2,a.isPassedAuth?-1:2)}}function y(i,s){if(1&i&&t.DNE(0,D,1,2,"app-jitsi-meet",2)(1,w,7,2),2&i){const a=t.XpG();t.vxM(0,a.isAccepted&&a.userData?0:1)}}const A=[{path:"",component:(()=>{var i;class s{constructor(e,o,n,u){this.router=o,this.modalController=n,this.toastController=u;let d=e.snapshot.params.id;d&&(this.roomId=d,"ios"==g.Ii.getPlatform()&&this.router.navigateByUrl(h._.ROOM_ID.replace(":id",d),{replaceUrl:!0}))}ngOnInit(){var e=this;(0,m.A)(function*(){var o,n,u,d;e.user=(yield(0,C.xk)()).data,e.userData={name:null!==(o=null===(n=e.user)||void 0===n?void 0:n.ho_ten)&&void 0!==o?o:null===(u=e.user)||void 0===u?void 0:u.ten_day_du,email:null===(d=e.user)||void 0===d?void 0:d.email},(0,P.r)(),e.refreshData()})()}ngAfterViewInit(){setTimeout(()=>{var e;null===(e=this.inputRoomPwd)||void 0===e||e.setFocus()},300)}refreshData(){var e=this;return(0,m.A)(function*(){(0,_.vx)({params:{id:e.roomId},callback:o=>{e.roomData=null==o?void 0:o.data,e.checkAccepted()}})})()}checkAccepted(){var e,o,n;this.isPassedAuth=!(!this.userData.name||!this.userData.email),this.isPassedPwd=null===(e=this.roomData)||void 0===e||!e.password||(null===(o=this.roomData)||void 0===o?void 0:o.password)==(null===(n=this.roomData)||void 0===n?void 0:n.confirm_password),this.isAccepted=this.isPassedAuth&&this.isPassedPwd}changeRoomPwd(e){var o=this;return(0,m.A)(function*(){o.roomData&&(o.roomData.confirm_password=e.detail.value)})()}}return(i=s).\u0275fac=function(e){return new(e||i)(t.rXU(c.nX),t.rXU(c.Ix),t.rXU(l.W3),t.rXU(l.K_))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-room-external"]],viewQuery:function(e,o){if(1&e&&t.GBs(x,5),2&e){let n;t.mGM(n=t.lsd())&&(o.inputRoomPwd=n.first)}},decls:6,vars:2,consts:[["inputRoomPwd",""],["collapse","fade"],[3,"roomData","userData"],[1,"ion-padding","mt-5"],[1,"mt-3"],["color","primary","expand","block",1,"ion-no-margin",3,"click"],["mode","md","label-placement","floating","fill","outline",3,"ionChange","keyup.enter"],["slot","label"],["color","danger"]],template:function(e,o){1&e&&(t.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.k0s()()(),t.j41(4,"ion-content"),t.DNE(5,y,2,1),t.k0s()),2&e&&(t.R7$(3),t.JRh(null==o.roomData?null:o.roomData.title),t.R7$(2),t.vxM(5,o.roomData?5:-1))},dependencies:[l.Jm,l.W9,l.eU,l.$w,l.he,l.IO,l.BC,l.ai,l.Gw,E],styles:["ion-input[fill=outline][_ngcontent-%COMP%]{--border-radius: 0}"]}),s})()}];let T=(()=>{var i;class s{}return(i=s).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[c.iI.forChild(A),c.iI]}),s})(),G=(()=>{var i;class s{}return(i=s).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[f.MD,v.YN,l.bv,T]}),s})()}}]);