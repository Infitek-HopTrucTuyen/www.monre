"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6488],{6488:(M,u,r)=>{r.r(u),r.d(u,{UserPageModule:()=>T});var m=r(177),_=r(9417),s=r(4742),l=r(2175),g=r(467),f=r(23),v=r(4393),P=r(6539),E=r(1312),d=r(8833),n=r(4438),U=r(3803),h=r(4842);function b(t,a){if(1&t&&(n.j41(0,"ion-note",24),n.EFF(1),n.k0s()),2&t){const e=n.XpG(2);n.R7$(),n.JRh(e.user.email)}}function j(t,a){if(1&t&&(n.j41(0,"ion-note",24),n.EFF(1),n.k0s()),2&t){const e=n.XpG(2);n.R7$(),n.JRh(e.APP_FUNC_FormatMobileNumber(e.user.mobile))}}function k(t,a){if(1&t){const e=n.RV6();n.j41(0,"div",11)(1,"ion-item",12)(2,"ion-avatar",3),n.nrm(3,"img",13),n.k0s(),n.j41(4,"ion-label")(5,"ion-text",2)(6,"b"),n.EFF(7),n.k0s()(),n.j41(8,"div",14),n.nrm(9,"ion-icon",15),n.DNE(10,b,2,1,"ion-note",16),n.k0s(),n.j41(11,"div",14),n.nrm(12,"ion-icon",17),n.DNE(13,j,2,1,"ion-note",16),n.k0s()()()(),n.j41(14,"div",18)(15,"ion-list",12)(16,"ion-item",19),n.bIt("click",function(){n.eBV(e);const o=n.XpG();return n.Njj(o.navigateByUrl(o.APP_ROUTE.USER_DETAIL))}),n.nrm(17,"ion-icon",20),n.j41(18,"ion-label"),n.EFF(19,"Th\xf4ng tin t\xe0i kho\u1ea3n"),n.k0s()(),n.j41(20,"ion-item",19),n.bIt("click",function(){n.eBV(e);const o=n.XpG();return n.Njj(o.navigateByUrl(o.APP_ROUTE.OPTION))}),n.nrm(21,"ion-icon",21),n.j41(22,"ion-label"),n.EFF(23,"C\xe0i \u0111\u1eb7t c\u1ea5u h\xecnh cu\u1ed9c h\u1ecdp"),n.k0s()(),n.j41(24,"ion-item",19),n.bIt("click",function(){n.eBV(e);const o=n.XpG();return n.Njj(o.navigateByUrl(o.APP_ROUTE.SETTING))}),n.nrm(25,"ion-icon",21),n.j41(26,"ion-label"),n.EFF(27,"C\xe0i \u0111\u1eb7t"),n.k0s()(),n.j41(28,"ion-item",19),n.bIt("click",function(){n.eBV(e);const o=n.XpG();return n.Njj(o.navigateByUrl(o.APP_ROUTE.FAQ))}),n.nrm(29,"ion-icon",22),n.j41(30,"ion-label"),n.EFF(31,"C\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"),n.k0s()(),n.j41(32,"ion-item",19),n.bIt("click",function(){n.eBV(e);const o=n.XpG();return n.Njj(o.navigateByUrl(o.APP_ROUTE.HELP))}),n.nrm(33,"ion-icon",23),n.j41(34,"ion-label"),n.EFF(35,"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng"),n.k0s()()()()}if(2&t){const e=n.XpG();n.R7$(7),n.JRh(e.user.ho_ten),n.R7$(3),n.Y8G("ngIf",e.user.email),n.R7$(3),n.Y8G("ngIf",e.user.mobile)}}function F(t,a){if(1&t){const e=n.RV6();n.j41(0,"div",25)(1,"div",26)(2,"h4",27),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"p",28),n.EFF(6),n.nI1(7,"translate"),n.k0s()(),n.j41(8,"div",29)(9,"div",30)(10,"ion-button",31),n.bIt("click",function(){n.eBV(e),n.XpG();const o=n.sdS(17);return n.Njj(null==o?null:o.dismiss())}),n.EFF(11),n.nI1(12,"translate"),n.k0s()(),n.j41(13,"div",32)(14,"ion-button",33),n.bIt("click",function(){n.eBV(e);const o=n.XpG(),c=n.sdS(17);return n.Njj(o.signOut(c))}),n.EFF(15),n.nI1(16,"translate"),n.k0s()()()()}2&t&&(n.R7$(3),n.JRh(n.bMT(4,4,"SignOut")),n.R7$(3),n.JRh(n.bMT(7,6,"SignOut_Confirm")),n.R7$(5),n.JRh(n.bMT(12,8,"Cancel")),n.R7$(4),n.JRh(n.bMT(16,10,"Confirm")))}const C=[{path:"",component:(()=>{var t;class a{constructor(i){this.router=i,this.APP_ROUTE=d._,this.APP_FUNC_FormatMobileNumber=E.IV,(0,P.UZ)().then(o=>{this.user=o.data})}ngOnInit(){}navigateByUrl(i){var o=this;return(0,g.A)(function*(){o.router.navigateByUrl(i)})()}signOut(i){var o=this;return(0,g.A)(function*(){yield(0,v.SD)(),(0,f.wn)({callback:()=>{o.router.navigateByUrl(d._.HOME,{replaceUrl:!0})}}),null==i||i.dismiss()})()}}return(t=a).\u0275fac=function(i){return new(i||t)(n.rXU(l.Ix))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-user"]],decls:20,vars:4,consts:[["modalSignOut",""],[1,"ion-no-border","ion-header-custom"],["color","primary"],["slot","start"],["defaultHref","/","text",""],[1,"d-flex","flex-column","min-h-100"],[1,"flex-grow-1"],[1,"px-3","my-3"],["color","primary","fill","outline","expand","block",1,"ion-no-margin",3,"click"],["slot","end","name","log-out-outline"],[1,"ion-modal-small"],[1,"user-info"],["lines","none"],["src","../../../assets/image/default-avatar.svg","alt","avatar"],[1,"mt-1","d-flex","align-items-center"],["color","medium","src","../../../assets/icon/mail.svg",1,"fs-14"],["color","medium","class","ml-2 fs-14",4,"ngIf"],["color","medium","src","../../../assets/icon/phone.svg",1,"fs-14"],[1,"px-3","my-4"],["button","true","detail","true",3,"click"],["slot","start","color","primary","src","../../../assets/icon/user-rounded.svg",1,"fs-24"],["slot","start","color","primary","src","../../../assets/icon/settings.svg",1,"fs-24"],["slot","start","color","primary","src","../../../assets/icon/chat-alt.svg",1,"fs-24"],["slot","start","color","primary","src","../../../assets/icon/book-open.svg",1,"fs-24"],["color","medium",1,"ml-2","fs-14"],[1,"p-4"],[1,"text-center"],[1,"mb-2"],[1,"mb-4","fs-3"],[1,"row"],[1,"col-6","pr-1"],["color","primary","fill","outline","expand","block",3,"click"],[1,"col-6","pl-1"],["color","primary","expand","block",3,"click"]],template:function(i,o){if(1&i){const c=n.RV6();n.j41(0,"ion-header",1)(1,"ion-toolbar",2)(2,"ion-buttons",3),n.nrm(3,"ion-back-button",4),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"div",5)(9,"div",6),n.DNE(10,k,36,3),n.k0s(),n.j41(11,"div",7)(12,"ion-button",8),n.bIt("click",function(){n.eBV(c);const p=n.sdS(17);return n.Njj(null==p?null:p.present())}),n.nrm(13,"ion-icon",9),n.j41(14,"ion-label"),n.EFF(15,"\u0110\u0103ng xu\u1ea5t"),n.k0s()()()(),n.j41(16,"ion-modal",10,0),n.DNE(18,F,17,12,"ng-template"),n.k0s()(),n.nrm(19,"app-footer-tabs")}2&i&&(n.R7$(5),n.JRh(n.bMT(6,2,"User")),n.R7$(5),n.vxM(10,o.user?10:-1))},dependencies:[m.bT,s.mC,s.Jm,s.QW,s.W9,s.eU,s.iq,s.uz,s.he,s.nf,s.JI,s.IO,s.BC,s.ai,s.Sb,s.el,U.x,h.D9],styles:["ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:4.5rem;height:4.5rem}ion-list[_ngcontent-%COMP%]{--background: transparent}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: 8px;--background: var(--ion-color-light)}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.5rem}.user-info[_ngcontent-%COMP%]{background-color:var(--ion-color-light);padding:1rem;border-radius:0 0 1rem 1rem}.user-info[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background: var(--ion-color-light)}"]}),a})()}];let R=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[l.iI.forChild(C),l.iI]}),a})();var x=r(3664);let T=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[m.MD,_.YN,s.bv,R,x.x]}),a})()}}]);