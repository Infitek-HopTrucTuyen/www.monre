"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1067],{5826:(V,T,m)=>{m.d(T,{Td:()=>$,Zt:()=>c,j9:()=>_,s4:()=>h});var D=m(467),M=m(7586),l=m.n(M),g=m(1855);const c=function(){var b=(0,D.A)(function*(i){var d,p,f,F,E,x,S,k,j,L,P,O,I,N,Y,A,G,U,w,v;i.params=i.params||{},(0,g.Ll)({url:"QuanLyLapLich/them_lich_hop",params:{title:null!==(d=i.params.title)&&void 0!==d?d:null,content:null!==(p=i.params.content)&&void 0!==p?p:null,startTime:null!==(f=i.params.startTime)&&void 0!==f?f:l()(new Date).format("YYYY-MM-DDTHH:mm:ss"),endTime:null!==(F=i.params.endTime)&&void 0!==F?F:l()(new Date((v=new Date,v.setHours(v.getHours()+4),v))).format("YYYY-MM-DDTHH:mm:ss"),chairMan:null!==(E=i.params.chairMan)&&void 0!==E?E:8,roomName:null!==(x=i.params.roomName)&&void 0!==x?x:l()(new Date).format("YYYYMMDDHHmmss"),place:null!==(S=i.params.place)&&void 0!==S?S:null,status:null!==(k=i.params.status)&&void 0!==k?k:2,start:null===(j=i.params.start)||void 0===j||j,token:null!==(L=i.params.token)&&void 0!==L?L:null,serverId:null!==(P=i.params.serverId)&&void 0!==P?P:4,typeId:null!==(O=i.params.typeId)&&void 0!==O?O:1,sharedRole:null!==(I=i.params.sharedRole)&&void 0!==I?I:0,password:null!==(N=i.params.password)&&void 0!==N?N:null,isLobby:null!==(Y=i.params.isLobby)&&void 0!==Y?Y:0,isPublished:null!==(A=i.params.isPublished)&&void 0!==A?A:1,createdDate:null!==(G=i.params.createdDate)&&void 0!==G?G:l()(new Date).format("YYYY-MM-DDTHH:mm:ss"),createdBy:null!==(U=i.params.createdBy)&&void 0!==U?U:8,don_vi:null!==(w=i.params.don_vi)&&void 0!==w?w:14},success:v=>{"function"==typeof i.callback&&i.callback(v.data||null)},error:v=>{var R;"function"==typeof i.callback&&i.callback(null==v||null===(R=v.response)||void 0===R?void 0:R.data),console.error(v)},loading:i.loading,loadingController:i.loadingController})});return function(d){return b.apply(this,arguments)}}(),h=function(){var b=(0,D.A)(function*(i){var d,p,f,F,E,x,S,k,j,L,P,O,I,N,Y,A,G,U,w;i.params=i.params||{},(0,g.Ll)({url:`QuanLyLapLich/chinh_sua_thong_tin_lich_hop?id=${i.params.id}`,params:{title:null!==(d=i.params.title)&&void 0!==d?d:null,content:null!==(p=i.params.content)&&void 0!==p?p:null,startTime:null!==(f=i.params.startTime)&&void 0!==f?f:null,endTime:null!==(F=i.params.endTime)&&void 0!==F?F:null,chairMan:null!==(E=i.params.chairMan)&&void 0!==E?E:null,roomName:null!==(x=i.params.roomName)&&void 0!==x?x:null,place:null!==(S=i.params.place)&&void 0!==S?S:null,status:null!==(k=i.params.status)&&void 0!==k?k:null,start:null!==(j=i.params.start)&&void 0!==j?j:null,token:null!==(L=i.params.token)&&void 0!==L?L:null,serverId:null!==(P=i.params.serverId)&&void 0!==P?P:null,typeId:null!==(O=i.params.typeId)&&void 0!==O?O:null,sharedRole:null!==(I=i.params.sharedRole)&&void 0!==I?I:null,password:null!==(N=i.params.password)&&void 0!==N?N:null,isLobby:null!==(Y=i.params.isLobby)&&void 0!==Y?Y:null,isPublished:null!==(A=i.params.isPublished)&&void 0!==A?A:null,modifiedDate:null!==(G=i.params.modifiedDate)&&void 0!==G?G:null,modifiedBy:null!==(U=i.params.modifiedBy)&&void 0!==U?U:null,don_vi:null!==(w=i.params.don_vi)&&void 0!==w?w:null},success:v=>{"function"==typeof i.callback&&i.callback(v.data||null)},error:v=>{var R;"function"==typeof i.callback&&i.callback(null==v||null===(R=v.response)||void 0===R?void 0:R.data),console.error(v)},loading:i.loading,loadingController:i.loadingController})});return function(d){return b.apply(this,arguments)}}(),$=function(){var b=(0,D.A)(function*(i){var d;i.params=i.params||{},(0,g.sj)({url:"QuanLyLapLich/xoa_lich_hop",params:{id:null!==(d=i.params.id)&&void 0!==d?d:null},success:p=>{"function"==typeof i.callback&&i.callback(p.data||null)},error:p=>{var f;"function"==typeof i.callback&&i.callback(null==p||null===(f=p.response)||void 0===f?void 0:f.data),console.error(p)},loading:i.loading,loadingController:i.loadingController})});return function(d){return b.apply(this,arguments)}}(),_=function(){var b=(0,D.A)(function*(i){var d;i.params=i.params||{},(0,g.hm)({url:"QuanLyLapLich/thong_tin_cuoc_hop",params:{id:null!==(d=i.params.id)&&void 0!==d?d:null},success:p=>{"function"==typeof i.callback&&i.callback(p.data||null)},error:p=>{var f;"function"==typeof i.callback&&i.callback(null==p||null===(f=p.response)||void 0===f?void 0:f.data),console.error(p)},loading:i.loading,loadingController:i.loadingController})});return function(d){return b.apply(this,arguments)}}()},3664:(V,T,m)=>{m.d(T,{x:()=>_});var D=m(177),M=m(9417),l=m(4742),g=m(4438);let h=(()=>{class u{}return u.\u0275fac=function(y){return new(y||u)},u.\u0275mod=g.$C({type:u}),u.\u0275inj=g.G2t({}),u})();var $=m(4342);let _=(()=>{var u;class C{}return(u=C).\u0275fac=function(e){return new(e||u)},u.\u0275mod=g.$C({type:u}),u.\u0275inj=g.G2t({imports:[D.MD,M.YN,l.bv,h,$.LP,h,$.LP]}),C})()},1067:(V,T,m)=>{m.r(T),m.d(T,{ScheduleDetailPageModule:()=>Fe});var D=m(177),M=m(9417),l=m(4742),g=m(2175),c=m(467),h=m(5826),$=m(5751),_=m(7586),u=m.n(_),C=m(1312),y=m(5883),e=m(4438);const J=["inputRoomPwd"],b=["ionStartDate"];function i(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",12)(1,"ion-item",7)(2,"ion-input",18),e.bIt("ionChange",function(a){e.eBV(o);const s=e.XpG(2);return e.Njj(s.changePassword(a))}),e.nrm(3,"ion-input-password-toggle",19),e.k0s()()()}if(2&t){const o=e.XpG(2);e.R7$(2),e.Y8G("value",o.itemData.password)}}function d(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",5)(1,"div",6),e.EFF(2,"T\xean cu\u1ed9c h\u1ecdp"),e.k0s(),e.j41(3,"ion-item",7)(4,"ion-textarea",8),e.bIt("ionChange",function(a){e.eBV(o);const s=e.XpG();return e.Njj(s.changeTitle(a))}),e.k0s()()(),e.j41(5,"div",5)(6,"div",6),e.EFF(7,"M\xe3 ph\xf2ng h\u1ecdp"),e.k0s(),e.j41(8,"ion-item",7)(9,"ion-input",9),e.bIt("ionChange",function(a){e.eBV(o);const s=e.XpG();return e.Njj(s.changeRoomName(a))}),e.k0s()()(),e.j41(10,"div",10)(11,"ion-toggle",11),e.bIt("ionChange",function(a){e.eBV(o);const s=e.XpG();return e.Njj(s.changeIsPwd(a))}),e.EFF(12,"M\u1eadt kh\u1ea9u truy c\u1eadp"),e.k0s(),e.DNE(13,i,4,1,"div",12),e.k0s(),e.j41(14,"div",5)(15,"div",6),e.EFF(16,"Ng\xe0y b\u1eaft \u0111\u1ea7u"),e.k0s(),e.j41(17,"div",13)(18,"ion-item"),e.nrm(19,"ion-icon",14),e.j41(20,"ion-label")(21,"div",15)(22,"ion-button",16),e.bIt("click",function(){e.eBV(o);const a=e.XpG();return e.Njj(a.presentModalDatetimePicker_StartDate())}),e.j41(23,"ion-label"),e.EFF(24),e.k0s()()()()()()(),e.j41(25,"div",5)(26,"div",6),e.EFF(27,"Th\u1eddi gian h\u1ecdp"),e.k0s(),e.j41(28,"div",13)(29,"ion-item"),e.nrm(30,"ion-icon",17),e.j41(31,"ion-label")(32,"div",15)(33,"ion-button",16),e.bIt("click",function(){e.eBV(o);const a=e.XpG();return e.Njj(a.presentModalDatetimePicker_StartTime())}),e.j41(34,"ion-label"),e.EFF(35),e.k0s()(),e.j41(36,"span"),e.EFF(37," - "),e.k0s(),e.j41(38,"ion-button",16),e.bIt("click",function(){e.eBV(o);const a=e.XpG();return e.Njj(a.presentModalDatetimePicker_EndTime())}),e.j41(39,"ion-label"),e.EFF(40),e.k0s()()()()()()()}if(2&t){const o=e.XpG();e.R7$(4),e.Y8G("autoGrow",!0)("value",o.itemData.title),e.R7$(5),e.Y8G("value",o.itemData.roomName),e.R7$(2),e.Y8G("checked",o.isPwd),e.R7$(2),e.vxM(13,o.isPwd?13:-1),e.R7$(11),e.JRh(o.APP_FUNC_FormatDate(o.itemData.startTime,"DD/MM/YYYY")),e.R7$(11),e.JRh(o.APP_FUNC_FormatDate(o.itemData.startTime,"HH:mm")),e.R7$(5),e.JRh(o.APP_FUNC_FormatDate(o.itemData.endTime,"HH:mm"))}}let p=(()=>{var t;class r{constructor(n,a){this.modalController=n,this.toastController=a,this.APP_FUNC_FormatDate=C.Rv,this.isPwd=!0}ngOnInit(){var n;this.isPwd=!(null===(n=this.itemData)||void 0===n||!n.password)}closeModal(){this.modalController.dismiss()}submitModal(){(0,h.s4)({params:this.itemData,callback:n=>{(0,$.q)(this.toastController,{},n).then(a=>a.present()),this.modalController.dismiss(this.itemData,"success")}})}changeTitle(n){var a=this;return(0,c.A)(function*(){var s;a.itemData.title=null===(s=n.detail.value)||void 0===s||null===(s=s.replace(/\s+/g," "))||void 0===s?void 0:s.trim()})()}changeRoomName(n){var a=this;return(0,c.A)(function*(){var s;a.itemData.roomName=null===(s=n.detail.value)||void 0===s?void 0:s.replace(/[^a-zA-Z0-9]/g,"")})()}changePassword(n){var a=this;return(0,c.A)(function*(){a.itemData.password=n.detail.value})()}presentModalDatetimePicker_StartDate(){var n=this;return(0,c.A)(function*(){let a=yield n.modalController.create({component:y.W,componentProps:{options:{presentation:"date",min:u()(new Date).format("YYYY-MM-DD"),value:n.itemData.startTime}},cssClass:"ion-modal-auto ion-modal-small"});a.onDidDismiss().then(s=>{"success"==s.role&&(n.itemData.startTime=u()(s.data).format("YYYY-MM-DD")+"T"+u()(n.itemData.startTime).format("HH:mm:ss"))}),a.present()})()}presentModalDatetimePicker_StartTime(){var n=this;return(0,c.A)(function*(){let a=yield n.modalController.create({component:y.W,componentProps:{options:{presentation:"time",value:n.itemData.startTime}},cssClass:"ion-modal-auto ion-modal-small"});a.onDidDismiss().then(s=>{"success"==s.role&&(n.itemData.startTime=u()(n.itemData.startTime).format("YYYY-MM-DD")+"T"+u()(s.data).format("HH:mm:ss"))}),a.present()})()}presentModalDatetimePicker_EndDate(){var n=this;return(0,c.A)(function*(){let a=yield n.modalController.create({component:y.W,componentProps:{options:{presentation:"date",min:u()(new Date).format("YYYY-MM-DD"),value:n.itemData.endTime}},cssClass:"ion-modal-auto ion-modal-small"});a.onDidDismiss().then(s=>{"success"==s.role&&(n.itemData.endTime=u()(s.data).format("YYYY-MM-DD")+"T"+u()(n.itemData.endTime).format("HH:mm:ss"))}),a.present()})()}presentModalDatetimePicker_EndTime(){var n=this;return(0,c.A)(function*(){let a=yield n.modalController.create({component:y.W,componentProps:{options:{presentation:"time",value:n.itemData.endTime}},cssClass:"ion-modal-auto ion-modal-small"});a.onDidDismiss().then(s=>{"success"==s.role&&(n.itemData.endTime=u()(n.itemData.endTime).format("YYYY-MM-DD")+"T"+u()(s.data).format("HH:mm:ss"))}),a.present()})()}changeIsPwd(n){var a=this;return(0,c.A)(function*(){a.isPwd=n.detail.checked,a.isPwd&&setTimeout(()=>{var s;null===(s=a.inputRoomPwd)||void 0===s||s.setFocus()},300)})()}}return(t=r).\u0275fac=function(n){return new(n||t)(e.rXU(l.W3),e.rXU(l.K_))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-modal-schedule-update"]],viewQuery:function(n,a){if(1&n&&(e.GBs(J,5),e.GBs(b,5)),2&n){let s;e.mGM(s=e.lsd())&&(a.inputRoomPwd=s.first),e.mGM(s=e.lsd())&&(a.ionStartDate=s.first)}},inputs:{itemData:"itemData"},decls:15,vars:1,consts:[["collapse","fade"],[1,"ion-padding"],[1,"d-flex"],["color","medium","fill","outline",3,"click"],["color","primary","expand","block",1,"flex-grow-1",3,"click"],[1,"mb-4"],[1,"mb-1","fs-14","fw-300"],["lines","none","color","light"],[3,"ionChange","autoGrow","value"],[3,"ionChange","value"],[1,"mb-4","max-w-240"],[1,"fs-14","fw-300",3,"ionChange","checked"],[1,"mt-2"],[1,"choice-item"],["slot","start","color","medium","name","calendar"],[1,"d-flex","align-items-center"],["size","small","color","dark","fill","clear",3,"click"],["slot","start","color","medium","name","time-outline"],["type","password",3,"ionChange","value"],["slot","end","color","dark"]],template:function(n,a){1&n&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"C\u1eadp nh\u1eadt l\u1ecbch h\u1ecdp"),e.k0s()()(),e.j41(4,"ion-content",1),e.DNE(5,d,41,8),e.k0s(),e.j41(6,"ion-footer")(7,"ion-toolbar")(8,"div",2)(9,"ion-button",3),e.bIt("click",function(){return a.closeModal()}),e.j41(10,"ion-label"),e.EFF(11,"\u0110\xf3ng"),e.k0s()(),e.j41(12,"ion-button",4),e.bIt("click",function(){return a.submitModal()}),e.j41(13,"ion-label"),e.EFF(14,"C\u1eadp nh\u1eadt"),e.k0s()()()()()),2&n&&(e.R7$(5),e.vxM(5,a.itemData?5:-1))},dependencies:[l.Jm,l.W9,l.M0,l.eU,l.iq,l.$w,l.Wv,l.uz,l.he,l.nc,l.BC,l.BY,l.ai,l.hB,l.Gw],styles:["ion-item[_ngcontent-%COMP%]{--border-radius: 4px}.choice-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-width: 1px;--border-color: #eee;--border-radius: .75rem}.choice-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[slot=start][_ngcontent-%COMP%]{margin-right:1rem}.choice-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[slot=end][_ngcontent-%COMP%]{margin-left:1rem}"]}),r})();var f=m(8833);function F(t,r){if(1&t&&(e.j41(0,"div",5),e.nrm(1,"ion-icon",8),e.j41(2,"ion-text",4),e.EFF(3),e.k0s()()),2&t){const o=e.XpG();e.R7$(3),e.JRh(null==o.itemData.server?null:o.itemData.server.title)}}function E(t,r){if(1&t&&(e.j41(0,"div",5),e.nrm(1,"ion-icon",9),e.j41(2,"ion-text",4),e.EFF(3),e.k0s()()),2&t){const o=e.XpG();e.R7$(3),e.JRh(o.itemData.place)}}function x(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",10),e.bIt("click",function(){e.eBV(o);const a=e.XpG();return e.Njj(a.copyRoomCode(a.itemData.roomName))}),e.nrm(1,"ion-icon",11),e.j41(2,"ion-text",4),e.EFF(3),e.k0s()()}if(2&t){const o=e.XpG();e.R7$(3),e.JRh(o.itemData.roomName)}}function S(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",10),e.bIt("click",function(){e.eBV(o);const a=e.XpG();return e.Njj(a.changeIsPwd(!a.isShowPwd))}),e.nrm(1,"ion-icon",12),e.j41(2,"ion-text",4),e.EFF(3),e.k0s()()}if(2&t){const o=e.XpG();e.R7$(3),e.JRh(o.isShowPwd?o.itemData.password:"******")}}function k(t,r){if(1&t&&(e.j41(0,"div",6)(1,"b"),e.EFF(2,"N\u1ed9i dung"),e.k0s(),e.j41(3,"div",7),e.nrm(4,"ion-note",13),e.k0s()()),2&t){const o=e.XpG();e.R7$(4),e.Y8G("innerHTML",o.itemData.content,e.npT)}}function j(t,r){if(1&t&&(e.j41(0,"div",7)(1,"ion-chip",14)(2,"ion-avatar"),e.nrm(3,"img",15),e.k0s(),e.j41(4,"ion-label"),e.EFF(5),e.k0s()()()),2&t){const o=r.$implicit;e.R7$(5),e.JRh(o.email)}}let L=(()=>{var t;class r{constructor(n){this.toastController=n,this.APP_FUNC_FormatDate=C.Rv,this.listUser=[]}ngOnInit(){this.listUser=this.itemData.meetingMember||[]}changeIsPwd(n){var a=this;return(0,c.A)(function*(){a.isShowPwd=n})()}copyRoomCode(n){var a=this;return(0,c.A)(function*(){a.isCopied=(0,C.k8)(n),a.isCopied&&(0,$.q)(a.toastController,{color:"success",message:"\u0110\xe3 sao ch\xe9p m\xe3 ph\xf2ng h\u1ecdp!"}).then(s=>s.present())})()}}return(t=r).\u0275fac=function(n){return new(n||t)(e.rXU(l.K_))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-schedule-info"]],inputs:{itemData:"itemData"},decls:18,vars:10,consts:[[1,"ion-padding","bg-light"],[1,"my-0","fw-700"],[1,"mt-3","d-flex","align-items-center"],["color","medium","src","../../../assets/icon/clock.svg",1,"fs-16","mr-2"],["color","medium",1,"fs-14"],[1,"mt-2","d-flex","align-items-center"],[1,"mt-4"],[1,"mt-2"],["color","medium","src","../../../../assets/icon/globe-alt.svg",1,"fs-16","mr-2"],["color","medium","src","../../../assets/icon/location-marker.svg",1,"fs-16","mr-2"],[1,"mt-2","d-flex","align-items-center",3,"click"],["color","medium","src","../../../../assets/icon/desktop-computer.svg",1,"fs-16","mr-2"],["color","medium","name","key-outline",1,"fs-16","mr-2"],["color","medium",3,"innerHTML"],["color","transparent",1,"ion-no-margin"],["src","../../../../assets/image/default-avatar.svg"]],template:function(n,a){1&n&&(e.j41(0,"div",0)(1,"h5",1),e.EFF(2),e.k0s(),e.j41(3,"div",2),e.nrm(4,"ion-icon",3),e.j41(5,"ion-text",4),e.EFF(6),e.k0s()(),e.DNE(7,F,4,1,"div",5)(8,E,4,1,"div",5)(9,x,4,1,"div",5)(10,S,4,1,"div",5)(11,k,5,1,"div",6),e.j41(12,"div",6)(13,"b"),e.EFF(14),e.k0s(),e.j41(15,"div"),e.Z7z(16,j,6,1,"div",7,e.fX1),e.k0s()()()),2&n&&(e.R7$(2),e.JRh(a.itemData.title),e.R7$(4),e.E5c("",a.APP_FUNC_FormatDate(a.itemData.startTime,"MM/DD/YYYY"),", ",a.APP_FUNC_FormatDate(a.itemData.startTime,"HH:mm")," - ",a.APP_FUNC_FormatDate(a.itemData.endTime,"HH:mm"),""),e.R7$(),e.vxM(7,null!=a.itemData.server&&a.itemData.server.title?7:-1),e.R7$(),e.vxM(8,a.itemData.place?8:-1),e.R7$(),e.vxM(9,a.itemData.roomName?9:-1),e.R7$(),e.vxM(10,a.itemData.password?10:-1),e.R7$(),e.vxM(11,a.itemData.content?11:-1),e.R7$(3),e.SpI("Ng\u01b0\u1eddi tham gia (",a.listUser.length,")"),e.R7$(2),e.Dyx(a.listUser))},dependencies:[l.mC,l.ZB,l.iq,l.he,l.JI,l.IO],styles:['.card-schedule[_ngcontent-%COMP%]{--line-color: var(--ion-color-primary);position:relative}.card-schedule[color=primary][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-primary)}.card-schedule[color=medium][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-medium)}.card-schedule[color=warning][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-warning)}.card-schedule[color=danger][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-danger)}.card-schedule[_ngcontent-%COMP%]:before{content:"";padding-left:1rem;background-color:var(--line-color);position:absolute;top:0;left:-3px;bottom:0;border-radius:1rem 0 0 1rem}.card-schedule[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;padding:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast);border-radius:1rem}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 2px #0006}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]:not(:first-child){margin-left:-.5rem}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{background-color:var(--ion-color-medium);color:var(--ion-color-medium-contrast);border-radius:50%;font-size:.75rem}.card-schedule[_ngcontent-%COMP%]   .lst-avatar[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:not(:first-child){margin-left:-.5rem}']}),r})();var P=m(4842);const O=t=>({$implicit:t});function I(t,r){1&t&&(e.j41(0,"div",2)(1,"div",3)(2,"div")(3,"div",4),e.nrm(4,"ion-img",5),e.k0s(),e.j41(5,"div",6),e.EFF(6),e.nI1(7,"translate"),e.k0s()()()()),2&t&&(e.R7$(6),e.JRh(e.bMT(7,1,"DataNotFound")))}function N(t,r){if(1&t&&(e.j41(0,"div",7),e.eu8(1,8),e.k0s()),2&t){const o=r.$implicit;e.XpG(2);const n=e.sdS(4);e.R7$(),e.Y8G("ngTemplateOutlet",n)("ngTemplateOutletContext",e.eq3(2,O,o))}}function Y(t,r){if(1&t&&e.Z7z(0,N,2,4,"div",7,e.fX1),2&t){const o=e.XpG();e.Dyx(o.listData)}}function A(t,r){1&t&&(e.j41(0,"ion-chip",16)(1,"ion-label"),e.EFF(2,"\u0110\xe3 duy\u1ec7t"),e.k0s()())}function G(t,r){1&t&&(e.j41(0,"ion-chip",20)(1,"ion-label"),e.EFF(2,"Ch\u01b0a duy\u1ec7t"),e.k0s()())}function U(t,r){if(1&t&&(e.j41(0,"div",9)(1,"div")(2,"div",10)(3,"div",11)(4,"div",12),e.nrm(5,"ion-icon",13),e.j41(6,"ion-text",14),e.EFF(7),e.k0s()()()(),e.j41(8,"div",15),e.DNE(9,A,3,0,"ion-chip",16)(10,G,3,0),e.j41(11,"ion-button",17)(12,"ion-label"),e.EFF(13,"T\u1ea3i v\u1ec1"),e.k0s()(),e.j41(14,"ion-button",18)(15,"ion-label"),e.EFF(16,"X\xf3a"),e.k0s()()()()(),e.nrm(17,"hr",19)),2&t){const o=r.$implicit;e.R7$(7),e.JRh(o.originalName),e.R7$(2),e.vxM(9,o.status?9:10)}}let w=(()=>{var t;class r{constructor(){this.listData=[]}ngOnInit(){}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-schedule-document"]],inputs:{listData:"listData"},decls:5,vars:1,consts:[["templateItem",""],[1,"ion-padding","bg-light"],[1,"py-5"],[1,"d-flex","align-items-center","justify-content-center","data-not-found"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/no-documents.svg",1,"w-40"],[1,"mt-2","text-center"],[1,"mb-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-document"],[1,"document-item"],[1,"d-flex","align-items-center","justify-content-between"],[1,"d-flex","align-items-start"],["color","medium","src","../../../../assets/icon/document.svg",1,"fs-20","mr-2"],["color","medium"],[1,"d-flex","align-items-center","mt-2"],["color","success",1,"ion-no-margin","fs-14","min-h-24","no-opacity"],["size","small","color","primary","fill","outline",1,"flex-grow-1","m-1"],["size","small","color","danger","fill","outline",1,"flex-grow-1","m-1"],[1,"border-top","my-3"],["color","warning",1,"ion-no-margin","fs-14","min-h-24","no-opacity"]],template:function(n,a){1&n&&(e.j41(0,"div",1),e.DNE(1,I,8,3,"div",2)(2,Y,2,0),e.k0s(),e.DNE(3,U,18,2,"ng-template",null,0,e.C5r)),2&n&&(e.R7$(),e.vxM(1,a.listData.length?2:1))},dependencies:[D.T3,l.Jm,l.ZB,l.iq,l.KW,l.he,l.IO,P.D9],styles:[".card-document[_ngcontent-%COMP%]   .document-item[_ngcontent-%COMP%]{padding:.5rem .75rem;border-radius:.5rem;border:1px solid #E6E7EA;background:#f4f4f6}"]}),r})();const v=t=>({$implicit:t}),R=()=>[];function W(t,r){1&t&&(e.j41(0,"div",2)(1,"div",3)(2,"div")(3,"div",4),e.nrm(4,"ion-img",5),e.k0s(),e.j41(5,"div",6),e.EFF(6),e.nI1(7,"translate"),e.k0s()()()()),2&t&&(e.R7$(6),e.JRh(e.bMT(7,1,"DataNotFound")))}function K(t,r){if(1&t&&(e.j41(0,"div",7),e.eu8(1,8),e.k0s()),2&t){const o=r.$implicit;e.XpG(2);const n=e.sdS(4);e.R7$(),e.Y8G("ngTemplateOutlet",n)("ngTemplateOutletContext",e.eq3(2,v,o))}}function Z(t,r){if(1&t&&e.Z7z(0,K,2,4,"div",7,e.fX1),2&t){const o=e.XpG();e.Dyx(o.listData)}}function q(t,r){1&t&&e.nrm(0,"ion-icon",11)}function ee(t,r){1&t&&e.nrm(0,"ion-icon",18)}function te(t,r){1&t&&(e.j41(0,"ion-chip",12)(1,"ion-label"),e.EFF(2,"\u0110\xe3 duy\u1ec7t"),e.k0s()())}function ne(t,r){1&t&&(e.j41(0,"ion-chip",19)(1,"ion-label"),e.EFF(2,"Ch\u01b0a duy\u1ec7t"),e.k0s()())}function oe(t,r){if(1&t&&(e.j41(0,"div")(1,"ion-checkbox",20),e.EFF(2),e.k0s()()),2&t){const o=r.$implicit;e.R7$(),e.Y8G("value",o.id),e.R7$(),e.JRh(o.title)}}function ae(t,r){if(1&t&&(e.j41(0,"div"),e.Z7z(1,oe,3,2,"div",null,e.fX1),e.k0s()),2&t){const o=e.XpG().$implicit;e.R7$(),e.Dyx(o.meetingvoted||e.lJ4(0,R))}}function ie(t,r){if(1&t&&(e.j41(0,"div")(1,"ion-radio",20),e.EFF(2),e.k0s()()),2&t){const o=r.$implicit;e.R7$(),e.Y8G("value",o.id),e.R7$(),e.JRh(o.title)}}function le(t,r){if(1&t&&(e.j41(0,"ion-radio-group"),e.Z7z(1,ie,3,2,"div",null,e.fX1),e.k0s()),2&t){const o=e.XpG().$implicit;e.R7$(),e.Dyx(o.meetingvoted||e.lJ4(0,R))}}function re(t,r){if(1&t&&(e.j41(0,"div",9)(1,"div")(2,"div",10),e.DNE(3,q,1,0,"ion-icon",11)(4,ee,1,0)(5,te,3,0,"ion-chip",12)(6,ne,3,0),e.k0s(),e.nrm(7,"hr",13),e.j41(8,"div")(9,"div")(10,"b"),e.EFF(11),e.k0s()(),e.j41(12,"div"),e.DNE(13,ae,3,1,"div")(14,le,3,1),e.k0s()(),e.nrm(15,"hr",13),e.j41(16,"div",14)(17,"ion-button",15)(18,"ion-label"),e.EFF(19,"Chi ti\u1ebft"),e.k0s()(),e.j41(20,"ion-button",16)(21,"ion-label"),e.EFF(22,"X\xf3a"),e.k0s()(),e.j41(23,"ion-button",17)(24,"ion-label"),e.EFF(25,"Ch\u1ec9nh s\u1eeda"),e.k0s()()()()()),2&t){const o=r.$implicit;e.R7$(3),e.vxM(3,o.type?3:4),e.R7$(2),e.vxM(5,o.status?5:6),e.R7$(6),e.JRh(o.title),e.R7$(2),e.vxM(13,o.type?13:14)}}let se=(()=>{var t;class r{constructor(){this.listData=[]}ngOnInit(){}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-schedule-vote"]],inputs:{listData:"listData"},decls:5,vars:1,consts:[["templateItem",""],[1,"ion-padding","bg-light"],[1,"py-5"],[1,"d-flex","align-items-center","justify-content-center","data-not-found"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/no-documents.svg",1,"w-40"],[1,"mt-2","text-center"],[1,"mb-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-vote"],[1,"d-flex","align-items-center","justify-content-between"],["color","primary","name","square-outline",1,"fs-24"],["color","success",1,"ion-no-margin","fs-14","min-h-24","no-opacity"],[1,"border-top","my-2"],[1,"d-flex"],["size","small","color","primary","fill","outline",1,"flex-grow-1","m-1"],["size","small","color","danger","fill","outline",1,"flex-grow-1","m-1"],["size","small","color","medium","fill","outline",1,"flex-grow-1","m-1"],["color","primary","name","ellipse-outline",1,"fs-24"],["color","warning",1,"ion-no-margin","fs-14","min-h-24","no-opacity"],["mode","md","labelPlacement","end",3,"value"]],template:function(n,a){1&n&&(e.j41(0,"div",1),e.DNE(1,W,8,3,"div",2)(2,Z,2,0),e.k0s(),e.DNE(3,re,26,4,"ng-template",null,0,e.C5r)),2&n&&(e.R7$(),e.vxM(1,a.listData.length?2:1))},dependencies:[D.T3,l.Jm,l.eY,l.ZB,l.iq,l.KW,l.he,l.KO,l.f0,l.hB,l.Je,P.D9],styles:['.card-vote[_ngcontent-%COMP%]{--line-color: var(--ion-color-primary);position:relative}.card-vote[color=primary][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-primary)}.card-vote[color=medium][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-medium)}.card-vote[color=warning][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-warning)}.card-vote[color=danger][_ngcontent-%COMP%]:before{--line-color: var(--ion-color-danger)}.card-vote[_ngcontent-%COMP%]:before{content:"";padding-left:1rem;background-color:var(--line-color);position:absolute;top:0;left:-3px;bottom:0;border-radius:1rem 0 0 1rem}.card-vote[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;padding:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast);border-radius:1rem}']}),r})();const ce=t=>({$implicit:t});function ue(t,r){1&t&&(e.j41(0,"div",2)(1,"div",3)(2,"div")(3,"div",4),e.nrm(4,"ion-img",5),e.k0s(),e.j41(5,"div",6),e.EFF(6),e.nI1(7,"translate"),e.k0s()()()()),2&t&&(e.R7$(6),e.JRh(e.bMT(7,1,"DataNotFound")))}function me(t,r){if(1&t&&(e.j41(0,"div",7),e.eu8(1,8),e.k0s()),2&t){const o=r.$implicit;e.XpG(2);const n=e.sdS(4);e.R7$(),e.Y8G("ngTemplateOutlet",n)("ngTemplateOutletContext",e.eq3(2,ce,o))}}function de(t,r){if(1&t&&e.Z7z(0,me,2,4,"div",7,e.fX1),2&t){const o=e.XpG();e.Dyx(o.listData)}}function pe(t,r){if(1&t&&(e.j41(0,"div",11)(1,"b"),e.EFF(2,"T\u1ec7p \u0111\xednh k\xe8m:"),e.k0s(),e.j41(3,"div",15)(4,"div",16)(5,"div",17),e.nrm(6,"ion-icon",18),e.j41(7,"ion-text",19),e.EFF(8),e.k0s()()()()()),2&t){const o=e.XpG().$implicit;e.R7$(7),e.Y8G("title",o.originalName),e.R7$(),e.JRh(o.originalName)}}function _e(t,r){if(1&t&&(e.j41(0,"div",9)(1,"h5",10),e.EFF(2),e.k0s(),e.j41(3,"div",11)(4,"b"),e.EFF(5,"N\u1ed9i dung:"),e.k0s(),e.j41(6,"div",12),e.nrm(7,"ion-note",13),e.k0s()(),e.DNE(8,pe,9,2,"div",11),e.k0s(),e.nrm(9,"hr",14)),2&t){const o=r.$implicit;e.R7$(2),e.JRh(o.title),e.R7$(5),e.Y8G("innerHTML",o.content,e.npT),e.R7$(),e.vxM(8,o.originalName?8:-1)}}let he=(()=>{var t;class r{constructor(){this.listData=[]}ngOnInit(){}}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["app-schedule-conslusion"]],inputs:{listData:"listData"},decls:5,vars:1,consts:[["templateItem",""],[1,"ion-padding","bg-light"],[1,"py-5"],[1,"d-flex","align-items-center","justify-content-center","data-not-found"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/no-documents.svg",1,"w-40"],[1,"mt-2","text-center"],[1,"mb-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-conslusion"],[1,"my-0","fw-700"],[1,"mt-4"],[1,"mt-2"],["color","medium",3,"innerHTML"],[1,"border-top","my-3"],[1,"mt-2","document-item"],[1,"d-flex","align-items-center","justify-content-between"],[1,"d-flex","align-items-start","text-truncate"],["color","medium","src","../../../../assets/icon/document.svg",1,"fs-20","mr-2"],["color","medium",1,"text-truncate",3,"title"]],template:function(n,a){1&n&&(e.j41(0,"div",1),e.DNE(1,ue,8,3,"div",2)(2,de,2,0),e.k0s(),e.DNE(3,_e,10,3,"ng-template",null,0,e.C5r)),2&n&&(e.R7$(),e.vxM(1,a.listData.length?2:1))},dependencies:[D.T3,l.iq,l.KW,l.JI,l.IO,P.D9],styles:[".document-item[_ngcontent-%COMP%]{padding:.5rem .75rem;border-radius:.5rem;border:1px solid #E6E7EA;background:#f4f4f6}"]}),r})();const H=()=>[];function fe(t,r){if(1&t&&e.nrm(0,"app-schedule-info",16),2&t){const o=e.XpG(2);e.Y8G("itemData",o.itemData)}}function ve(t,r){if(1&t&&e.nrm(0,"app-schedule-document",17),2&t){const o=e.XpG(2);e.Y8G("listData",o.itemData.meetingDocument||e.lJ4(1,H))}}function ge(t,r){if(1&t&&e.nrm(0,"app-schedule-vote",17),2&t){const o=e.XpG(2);e.Y8G("listData",o.itemData.meetingVotes||e.lJ4(1,H))}}function Ce(t,r){if(1&t&&e.nrm(0,"app-schedule-conslusion",17),2&t){const o=e.XpG(2);e.Y8G("listData",o.itemData.meetingConslusion||e.lJ4(1,H))}}function De(t,r){if(1&t&&e.DNE(0,fe,1,1)(1,ve,1,2)(2,ge,1,2)(3,Ce,1,2),2&t){let o;const n=e.XpG();e.vxM(0,"info"===(o=n.tabActive)?0:"document"===o?1:"vote"===o?2:"conslusion"===o?3:-1)}}function $e(t,r){if(1&t){const o=e.RV6();e.j41(0,"div",18)(1,"div",19)(2,"h4",20),e.EFF(3,"X\xf3a l\u1ecbch h\u1ecdp"),e.k0s(),e.j41(4,"p",21),e.EFF(5,"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a l\u1ecbch h\u1ecdp n\xe0y?"),e.k0s()(),e.j41(6,"div",22)(7,"div",23)(8,"ion-button",24),e.bIt("click",function(){e.eBV(o),e.XpG();const a=e.sdS(27);return e.Njj(null==a?null:a.dismiss())}),e.EFF(9),e.nI1(10,"translate"),e.k0s()(),e.j41(11,"div",25)(12,"ion-button",26),e.bIt("click",function(){e.eBV(o);const a=e.XpG(),s=e.sdS(27);return e.Njj(a.confirmDelete(s))}),e.EFF(13),e.nI1(14,"translate"),e.k0s()()()()}2&t&&(e.R7$(9),e.JRh(e.bMT(10,2,"Cancel")),e.R7$(4),e.JRh(e.bMT(14,4,"Delete")))}function be(t,r){if(1&t){const o=e.RV6();e.j41(0,"ion-button",28),e.bIt("click",function(){e.eBV(o);const a=e.XpG(2);return e.Njj(a.navigateByUrl(a.APP_ROUTE.ROOM_EXTERNAL_ID.replace(":id",a.itemData.id)))}),e.j41(1,"ion-label"),e.EFF(2,"Tham gia"),e.k0s()()}}function ye(t,r){1&t&&(e.j41(0,"ion-button",29)(1,"ion-label"),e.EFF(2,"\u0110\xe3 k\u1ebft th\xfac"),e.k0s()())}function Pe(t,r){if(1&t&&(e.j41(0,"ion-footer",15)(1,"ion-toolbar"),e.DNE(2,be,3,0,"ion-button",27)(3,ye,3,0),e.k0s()()),2&t){const o=e.XpG();e.R7$(2),e.vxM(2,o.checkStatus(o.itemData.endTime)?2:3)}}const ke=[{path:"",component:(()=>{var t;class r{constructor(n,a,s,B,X){this.activatedRoute=n,this.router=a,this.modalController=s,this.toastController=B,this.loadingController=X,this.APP_ROUTE=f._,this.APP_FUNC_FormatDate=C.Rv,this.APP_FUNC_FormatRoomNumber=C.NY,this.tabActive="info";let Q=n.snapshot.queryParams.tab;Q&&(this.tabActive=Q);let z=n.snapshot.params.id;z&&(this.roomId=z,this.refreshData())}ngOnInit(){}refreshData(n){(0,h.j9)({loadingController:this.loadingController,params:{id:this.roomId},callback:a=>{this.itemData=null==a?void 0:a.data,n&&n()}})}changeTab(n){var a=this;return(0,c.A)(function*(){a.tabActive=n.detail.value,a.router.navigate([],{relativeTo:a.activatedRoute,queryParams:{tab:a.tabActive},queryParamsHandling:"merge",replaceUrl:!0})})()}navigateByUrl(n){var a=this;return(0,c.A)(function*(){a.router.navigateByUrl(n)})()}changeIsPwd(n){var a=this;return(0,c.A)(function*(){a.isShowPwd=n})()}copyRoomCode(n){var a=this;return(0,c.A)(function*(){a.isCopied=(0,C.k8)(n)})()}checkStatus(n){return u()().isAfter(u()(n))?0:1}confirmDelete(n){var a=this;return(0,c.A)(function*(){(0,h.Td)({loadingController:a.loadingController,params:{id:a.roomId},callback:s=>{(0,$.q)(a.toastController,{},s).then(B=>B.present()),null!=s&&s.state&&(null==n||n.dismiss(),a.router.navigateByUrl(f._.SCHEDULE,{replaceUrl:!0}))}})})()}presentModalScheduleUpdate(){var n=this;return(0,c.A)(function*(){const a=yield n.modalController.create({component:p,componentProps:{itemData:n.itemData}});a.onDidDismiss().then(s=>{"success"==s.role&&n.refreshData()}),a.present()})()}}return(t=r).\u0275fac=function(n){return new(n||t)(e.rXU(g.nX),e.rXU(g.Ix),e.rXU(l.W3),e.rXU(l.K_),e.rXU(l.Xi))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-schedule-detail"]],decls:30,vars:6,consts:[["modalConfirmDelete",""],[1,"ion-no-border"],["color","primary"],["slot","start"],[3,"defaultHref","text"],["slot","end"],["color","light",3,"click"],["src","../../../assets/icon/trash.svg",1,"fs-24"],["src","../../../assets/icon/pencil.svg",1,"fs-24"],["mode","md",3,"ionChange","scrollable","value"],["value","info"],["value","document"],["value","vote"],["value","conslusion"],[1,"ion-modal-small"],["collapse","fade"],[3,"itemData"],[3,"listData"],[1,"p-4"],[1,"text-center"],[1,"mb-2"],[1,"mb-4","fs-3"],[1,"row"],[1,"col-6","pr-1"],["color","primary","fill","outline","expand","block",3,"click"],[1,"col-6","pl-1"],["color","danger","expand","block",3,"click"],["color","primary","expand","block"],["color","primary","expand","block",3,"click"],["color","medium","expand","block"]],template:function(n,a){if(1&n){const s=e.RV6();e.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-buttons",3),e.nrm(3,"ion-back-button",4),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Chi ti\u1ebft cu\u1ed9c h\u1ecdp"),e.k0s(),e.j41(6,"ion-buttons",5)(7,"ion-button",6),e.bIt("click",function(){e.eBV(s);const X=e.sdS(27);return e.Njj(null==X?null:X.present())}),e.nrm(8,"ion-icon",7),e.k0s(),e.j41(9,"ion-button",6),e.bIt("click",function(){return e.eBV(s),e.Njj(a.presentModalScheduleUpdate())}),e.nrm(10,"ion-icon",8),e.k0s()()()(),e.j41(11,"ion-content")(12,"ion-segment",9),e.bIt("ionChange",function(X){return e.eBV(s),e.Njj(a.changeTab(X))}),e.j41(13,"ion-segment-button",10)(14,"ion-label"),e.EFF(15,"Th\xf4ng tin"),e.k0s()(),e.j41(16,"ion-segment-button",11)(17,"ion-label"),e.EFF(18,"T\xe0i li\u1ec7u"),e.k0s()(),e.j41(19,"ion-segment-button",12)(20,"ion-label"),e.EFF(21,"Bi\u1ec3u quy\u1ebft"),e.k0s()(),e.j41(22,"ion-segment-button",13)(23,"ion-label"),e.EFF(24,"K\u1ebft lu\u1eadn"),e.k0s()()(),e.DNE(25,De,4,1),e.j41(26,"ion-modal",14,0),e.DNE(28,$e,15,6,"ng-template"),e.k0s()(),e.DNE(29,Pe,4,1,"ion-footer",15)}2&n&&(e.R7$(3),e.Y8G("defaultHref","/")("text",""),e.R7$(9),e.Y8G("scrollable",!0)("value",a.tabActive),e.R7$(13),e.vxM(25,a.itemData?25:-1),e.R7$(4),e.vxM(29,a.itemData?29:-1))},dependencies:[l.Jm,l.QW,l.W9,l.M0,l.eU,l.iq,l.he,l.Gp,l.eP,l.BC,l.ai,l.Sb,l.Je,l.el,L,w,se,he,P.D9],styles:["ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:.875rem;text-transform:initial}"]}),r})()}];let Te=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[g.iI.forChild(ke),g.iI]}),r})();var Me=m(3664);let Fe=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[D.MD,M.YN,l.bv,Te,Me.x]}),r})()},5751:(V,T,m)=>{m.d(T,{q:()=>M});var D=m(467);const M=function(){var l=(0,D.A)(function*(g,c,h){var $,_,u;return!c.message&&h&&(c.message=null!==(u=null==h?void 0:h.message)&&void 0!==u?u:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!",c.icon||(c.icon=null!=h&&h.message?"checkmark-circle-sharp":"alert-circle-outline"),c.color||(c.color=1==(null==h?void 0:h.state)?"success":"warning")),c.position||(c.position="bottom"),c.icon||(c.icon="bulb-outline"),c.color||(c.color="secondary"),c.duration=null!==($=c.duration)&&void 0!==$?$:3e3,c.animated=null===(_=c.animated)||void 0===_||_,c.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield g.create(c)});return function(c,h,$){return l.apply(this,arguments)}}()},1312:(V,T,m)=>{m.d(T,{IV:()=>c,NY:()=>h,Rv:()=>l,k8:()=>$});var D=m(7586),M=m.n(D);function l(_,u,C){return C?M()(_||void 0).utcOffset(0,!1).format(null!=u?u:"HH:mm, DD/MM/YYYY"):M()(_||void 0).format(null!=u?u:"HH:mm, DD/MM/YYYY")}const c=_=>(null!=_?_:"0123456789").replace(/^0/,"+84").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,h=_=>(null!=_?_:"123456789").replace(/[^0-9]/,"").replace(/(.)(?=(\d{3})+$)/g,"$1 ")||null,$=_=>{if(!_)return!1;try{return navigator.clipboard.writeText(_),!0}catch(u){console.error(u)}return!1}}}]);