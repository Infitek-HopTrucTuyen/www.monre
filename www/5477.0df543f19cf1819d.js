"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5477],{5477:(b,c,a)=>{a.r(c),a.d(c,{RoomPageModule:()=>$});var f=a(177),v=a(9417),r=a(4742),l=a(2175),m=a(467);const g=(0,a(5083).F3)("Jitsi",{web:()=>a.e(7185).then(a.bind(a,7185)).then(n=>new n.JitsiWeb)});var R=a(5826),P=a(6539),D=a(2177),C=a(8833),o=a(4438);const w=["inputRoomPwd"];function j(n,d){1&n&&o.nrm(0,"div")}function y(n,d){if(1&n){const s=o.RV6();o.j41(0,"div")(1,"ion-input",8,0),o.bIt("ionChange",function(e){o.eBV(s);const i=o.XpG(2);return o.Njj(i.changeRoomPwd(e))})("keyup.enter",function(){o.eBV(s);const e=o.XpG(2);return o.Njj(e.checkAccepted())}),o.j41(3,"div",9),o.EFF(4,"M\u1eadt kh\u1ea9u ph\xf2ng h\u1ecdp "),o.j41(5,"ion-text",10),o.EFF(6,"*"),o.k0s()()()()}}function M(n,d){}function A(n,d){if(1&n){const s=o.RV6();o.j41(0,"div",5),o.DNE(1,y,7,0,"div")(2,M,0,0),o.j41(3,"div",6)(4,"ion-button",7),o.bIt("click",function(){o.eBV(s);const e=o.XpG();return o.Njj(e.checkAccepted())}),o.j41(5,"ion-label"),o.EFF(6,"Tham gia"),o.k0s()()()()}if(2&n){const s=o.XpG();o.R7$(),o.vxM(1,s.isPassedPwd?-1:1),o.R7$(),o.vxM(2,s.isPassedAuth?-1:2)}}const E=[{path:"",component:(()=>{var n;class d{constructor(t,e,i,u){this.router=e,this.modalController=i,this.toastController=u;let h=t.snapshot.params.id;h&&(this.roomId=h)}ngOnInit(){var t=this;(0,m.A)(function*(){var e,i;t.user=(yield(0,P.xk)()).data,t.userData={name:null===(e=t.user)||void 0===e?void 0:e.name,email:null===(i=t.user)||void 0===i?void 0:i.email},(0,D.r)(),t.refreshData()})()}ngAfterViewInit(){setTimeout(()=>{var t;null===(t=this.inputRoomPwd)||void 0===t||t.setFocus()},300)}refreshData(){var t=this;return(0,m.A)(function*(){(0,R.vx)({params:{id:t.roomId},callback:e=>{t.roomData=null==e?void 0:e.data,t.checkAccepted()}})})()}checkAccepted(){var t,e,i;this.isPassedAuth=!(!this.userData.name||!this.userData.email),this.isPassedPwd=null===(t=this.roomData)||void 0===t||!t.password||(null===(e=this.roomData)||void 0===e?void 0:e.password)==(null===(i=this.roomData)||void 0===i?void 0:i.confirm_password),this.isAccepted=this.isPassedAuth&&this.isPassedPwd}changeRoomPwd(t){var e=this;return(0,m.A)(function*(){e.roomData&&(e.roomData.confirm_password=t.detail.value)})()}initJitsi(){var t=this;return(0,m.A)(function*(){var e;if(t.roomData&&t.roomData.roomName&&null!==(e=t.roomData.server)&&void 0!==e&&e.ip&&t.roomData.token){const i=yield g.joinConference({roomName:t.roomData.roomName,url:t.roomData.server.ip,featureFlags:{"prejoinpage.enabled":!1,"recording.enabled":!1,"live-streaming.enabled":!1,"android.screensharing.enabled":!1},subject:t.userData.name,displayName:t.userData.name,email:t.userData.email,avatarURL:"",startWithAudioMuted:!0,startWithVideoMuted:!1,chatEnabled:!1,inviteEnabled:!1,token:t.roomData.token});console.log(i),window.addEventListener("onConferenceJoined",()=>{}),window.addEventListener("onConferenceTerminated",()=>{}),window.addEventListener("onConferenceLeft",()=>{}),window.addEventListener("onChatMessageReceived",u=>{}),window.addEventListener("onParticipantsInfoRetrieved",u=>{}),window.addEventListener("readyToClose",()=>{console.log("User has left the conference"),window.location.replace(C._.HOME)})}})()}}return(n=d).\u0275fac=function(t){return new(t||n)(o.rXU(l.nX),o.rXU(l.Ix),o.rXU(r.W3),o.rXU(r.K_))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-room"]],viewQuery:function(t,e){if(1&t&&o.GBs(w,5),2&t){let i;o.mGM(i=o.lsd())&&(e.inputRoomPwd=i.first)}},decls:9,vars:2,consts:[["inputRoomPwd",""],[1,"ion-no-border","ion-header-custom"],["color","primary"],["slot","start"],["defaultHref","/","text",""],[1,"ion-padding","mt-5"],[1,"mt-3"],["color","primary","expand","block",1,"ion-no-margin",3,"click"],["mode","md","label-placement","floating","fill","outline",3,"ionChange","keyup.enter"],["slot","label"],["color","danger"]],template:function(t,e){1&t&&(o.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-buttons",3),o.nrm(3,"ion-back-button",4),o.k0s(),o.j41(4,"ion-title"),o.EFF(5),o.k0s()()(),o.j41(6,"ion-content"),o.DNE(7,j,1,0,"div")(8,A,7,2),o.k0s()),2&t&&(o.R7$(5),o.JRh(null==e.roomData?null:e.roomData.title),o.R7$(2),o.vxM(7,e.isAccepted&&e.roomData&&e.userData?7:8))},dependencies:[r.Jm,r.QW,r.W9,r.eU,r.$w,r.he,r.IO,r.BC,r.ai,r.Gw,r.el],styles:["ion-input[fill=outline][_ngcontent-%COMP%]{--border-radius: 0}"]}),d})()}];let F=(()=>{var n;class d{}return(n=d).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[l.iI.forChild(E),l.iI]}),d})(),$=(()=>{var n;class d{}return(n=d).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[f.MD,v.YN,r.bv,F]}),d})()}}]);