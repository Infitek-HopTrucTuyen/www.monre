"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5477],{5477:(G,c,s)=>{s.r(c),s.d(c,{RoomPageModule:()=>T});var p=s(177),v=s(9417),r=s(4742),u=s(2175),d=s(467);const g=(0,s(5083).F3)("Jitsi",{web:()=>s.e(7185).then(s.bind(s,7185)).then(n=>new n.JitsiWeb)});var f=s(5826),C=s(6539),R=s(2177),P=s(5751),E=s(8833),o=s(4438);const j=["inputRoomPwd"];function D(n,l){1&n&&o.nrm(0,"div")}function F(n,l){if(1&n){const a=o.RV6();o.j41(0,"div")(1,"div",8),o.EFF(2,"M\u1eadt kh\u1ea9u "),o.j41(3,"ion-text",9),o.EFF(4,"*"),o.k0s()(),o.j41(5,"ion-input",10,0),o.bIt("ionChange",function(e){o.eBV(a);const i=o.XpG(2);return o.Njj(i.changeRoomPwd(e))})("keyup.enter",function(){o.eBV(a);const e=o.XpG(2);return o.Njj(e.checkAccepted())}),o.k0s()()}}function A(n,l){if(1&n){const a=o.RV6();o.j41(0,"div",11)(1,"div",8),o.EFF(2,"T\xean hi\u1ec3n th\u1ecb "),o.j41(3,"ion-text",9),o.EFF(4,"*"),o.k0s()(),o.j41(5,"ion-input",12),o.bIt("ionChange",function(e){o.eBV(a);const i=o.XpG(2);return o.Njj(i.changeUserName(e))}),o.k0s()(),o.j41(6,"div",11)(7,"div",8),o.EFF(8,"Email "),o.j41(9,"ion-text",9),o.EFF(10,"*"),o.k0s()(),o.j41(11,"ion-input",13),o.bIt("ionChange",function(e){o.eBV(a);const i=o.XpG(2);return o.Njj(i.changeUserEmail(e))}),o.k0s()()}if(2&n){const a=o.XpG(2);o.R7$(5),o.Y8G("value",a.userData.name),o.R7$(6),o.Y8G("value",a.userData.email)}}function x(n,l){if(1&n){const a=o.RV6();o.j41(0,"div")(1,"div",8),o.EFF(2,"M\u1eadt kh\u1ea9u "),o.j41(3,"ion-text",9),o.EFF(4,"*"),o.k0s()(),o.j41(5,"ion-input",10,0),o.bIt("ionChange",function(e){o.eBV(a);const i=o.XpG(2);return o.Njj(i.changeRoomPwd(e))})("keyup.enter",function(){o.eBV(a);const e=o.XpG(2);return o.Njj(e.checkAccepted())}),o.k0s()()}}function k(n,l){if(1&n){const a=o.RV6();o.j41(0,"div",11)(1,"div",8),o.EFF(2,"T\xean hi\u1ec3n th\u1ecb "),o.j41(3,"ion-text",9),o.EFF(4,"*"),o.k0s()(),o.j41(5,"ion-input",12),o.bIt("ionChange",function(e){o.eBV(a);const i=o.XpG(2);return o.Njj(i.changeUserName(e))}),o.k0s()(),o.j41(6,"div",11)(7,"div",8),o.EFF(8,"Email "),o.j41(9,"ion-text",9),o.EFF(10,"*"),o.k0s()(),o.j41(11,"ion-input",13),o.bIt("ionChange",function(e){o.eBV(a);const i=o.XpG(2);return o.Njj(i.changeUserEmail(e))}),o.k0s()()}if(2&n){const a=o.XpG(2);o.R7$(5),o.Y8G("value",a.userData.name),o.R7$(6),o.Y8G("value",a.userData.email)}}function w(n,l){if(1&n){const a=o.RV6();o.j41(0,"div",5),o.DNE(1,F,7,0,"div")(2,A,12,2)(3,x,7,0,"div")(4,k,12,2),o.j41(5,"div",6)(6,"ion-button",7),o.bIt("click",function(){o.eBV(a);const e=o.XpG();return o.Njj(e.checkAccepted())}),o.j41(7,"ion-label"),o.EFF(8,"Tham gia"),o.k0s()()()()}if(2&n){const a=o.XpG();o.R7$(),o.vxM(1,a.isPassedPwd?-1:1),o.R7$(),o.vxM(2,a.isPassedAuth?-1:2),o.R7$(),o.vxM(3,a.isPassedPwd?-1:3),o.R7$(),o.vxM(4,a.isPassedAuth?-1:4)}}const $=[{path:"",component:(()=>{var n;class l{constructor(t,e,i,m,y){this.router=e,this.loadingController=i,this.modalController=m,this.toastController=y;let h=t.snapshot.params.id;h&&(this.roomId=h)}ngOnInit(){var t=this;(0,d.A)(function*(){var e,i;t.user=(yield(0,C.xk)()).data,t.userData={name:null===(e=t.user)||void 0===e?void 0:e.name,email:null===(i=t.user)||void 0===i?void 0:i.email},(0,R.r)(),t.refreshData()})()}ngAfterViewInit(){setTimeout(()=>{var t;null===(t=this.inputRoomPwd)||void 0===t||t.setFocus()},300)}refreshData(){var t=this;return(0,d.A)(function*(){(0,f.vx)({loadingController:t.loadingController,params:{id:t.roomId},callback:e=>{null!=e&&e.status?(t.roomData=null==e?void 0:e.data,t.checkAccepted()):(0,P.q)(t.toastController,{},e).then(i=>i.present())}})})()}checkAccepted(){var t,e,i;this.isPassedAuth=!(!this.userData.name||!this.userData.email),this.isPassedPwd=null===(t=this.roomData)||void 0===t||!t.password||(null===(e=this.roomData)||void 0===e?void 0:e.password)==(null===(i=this.roomData)||void 0===i?void 0:i.confirm_password),this.isAccepted=this.isPassedAuth&&this.isPassedPwd}changeRoomPwd(t){var e=this;return(0,d.A)(function*(){e.roomData&&(e.roomData.confirm_password=t.detail.value)})()}changeUserName(t){var e=this;return(0,d.A)(function*(){var i;e.userData.name=null===(i=t.detail.value)||void 0===i?void 0:i.trim()})()}changeUserEmail(t){var e=this;return(0,d.A)(function*(){var i;e.userData.email=null===(i=t.detail.value)||void 0===i?void 0:i.trim()})()}initJitsi(){var t=this;return(0,d.A)(function*(){var e;if(t.roomData&&t.roomData.roomName&&null!==(e=t.roomData.server)&&void 0!==e&&e.ip&&t.roomData.token){const i=yield g.joinConference({roomName:t.roomData.roomName,url:t.roomData.server.ip,featureFlags:{"prejoinpage.enabled":!1,"recording.enabled":!1,"live-streaming.enabled":!1,"android.screensharing.enabled":!1},subject:t.userData.name,displayName:t.userData.name,email:t.userData.email,avatarURL:"",startWithAudioMuted:!0,startWithVideoMuted:!1,chatEnabled:!1,inviteEnabled:!1,token:t.roomData.token});console.log(i),window.addEventListener("onConferenceJoined",()=>{}),window.addEventListener("onConferenceTerminated",()=>{}),window.addEventListener("onConferenceLeft",()=>{}),window.addEventListener("onChatMessageReceived",m=>{}),window.addEventListener("onParticipantsInfoRetrieved",m=>{}),window.addEventListener("readyToClose",()=>{console.log("User has left the conference"),window.location.replace(E._.HOME)})}})()}}return(n=l).\u0275fac=function(t){return new(t||n)(o.rXU(u.nX),o.rXU(u.Ix),o.rXU(r.Xi),o.rXU(r.W3),o.rXU(r.K_))},n.\u0275cmp=o.VBU({type:n,selectors:[["app-room"]],viewQuery:function(t,e){if(1&t&&o.GBs(j,5),2&t){let i;o.mGM(i=o.lsd())&&(e.inputRoomPwd=i.first)}},decls:9,vars:2,consts:[["inputRoomPwd",""],[1,"ion-no-border","ion-header-custom"],["color","primary"],["slot","start"],["defaultHref","/","text",""],[1,"ion-padding"],[1,"mt-3"],["color","primary","expand","block",1,"ion-no-margin",3,"click"],[1,"fw-600","fs-16","mb-1"],["color","danger"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp m\u1eadt kh\u1ea9u ph\xf2ng h\u1ecdp",3,"ionChange","keyup.enter"],[1,"mt-4"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp t\xean hi\u1ec3n th\u1ecb","minlength","6","maxlength","100",3,"ionChange","value"],["mode","md","fill","outline","clear-input","true","placeholder","Nh\u1eadp email","minlength","6","maxlength","100",3,"ionChange","value"]],template:function(t,e){1&t&&(o.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-buttons",3),o.nrm(3,"ion-back-button",4),o.k0s(),o.j41(4,"ion-title"),o.EFF(5),o.k0s()()(),o.j41(6,"ion-content"),o.DNE(7,D,1,0,"div")(8,w,9,4),o.k0s()),2&t&&(o.R7$(5),o.JRh(null==e.roomData?null:e.roomData.title),o.R7$(2),o.vxM(7,e.isAccepted&&e.roomData&&e.userData?7:8))},dependencies:[r.Jm,r.QW,r.W9,r.eU,r.$w,r.he,r.IO,r.BC,r.ai,r.Gw,r.el],styles:["ion-input[fill=outline][_ngcontent-%COMP%]{--border-radius: 0}"]}),l})()}];let M=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[u.iI.forChild($),u.iI]}),l})(),T=(()=>{var n;class l{}return(n=l).\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.$C({type:n}),n.\u0275inj=o.G2t({imports:[p.MD,v.YN,r.bv,M]}),l})()}}]);