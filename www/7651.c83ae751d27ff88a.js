"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7651],{3890:(E,m,r)=>{r.d(m,{x:()=>c});var h=r(177),p=r(9417),o=r(4742),d=r(2706),a=r(4342),i=r(4438);let c=(()=>{var s;class g{}return(s=g).\u0275fac=function(e){return new(e||s)},s.\u0275mod=i.$C({type:s}),s.\u0275inj=i.G2t({imports:[h.MD,p.YN,o.bv,d.G,a.LP,d.G,a.LP]}),g})()},7651:(E,m,r)=>{r.r(m),r.d(m,{AuthPageModule:()=>T});var h=r(177),p=r(9417),o=r(4742),d=r(2175),a=r(467),i=r(5312),c=r(23),s=r(4393),g=r(5751),P=r(8833),e=r(4438),A=r(4842);const M=[{path:"",component:(()=>{var u;class v{constructor(t,n,l,f){this.router=n,this.loadingController=l,this.toastController=f,this.APP_ROUTE=P._,this.dataForm={username:"demo1",password:"123456a@",rememberme:!0};let y=t.snapshot.queryParamMap.get("returnurl");y&&(this.returnUrl=y)}ngOnInit(){(0,s.FC)({callback:t=>{null!=t&&t.authForm&&(this.dataForm=null==t?void 0:t.authForm)}})}changeUserName(t){var n;this.dataForm.username=null===(n=t.detail.value)||void 0===n?void 0:n.replace(/\s/g,"")}changePassword(t){this.dataForm.password=t.detail.value}changeRemember(t){this.dataForm.rememberme=t.detail.checked}redirect(){var t,l,n=new RegExp(i.c.match_web_url,"i");null!==(t=this.returnUrl)&&void 0!==t&&t.match(n)?this.router.navigateByUrl(null===(l=this.returnUrl)||void 0===l?void 0:l.replace(n,"/"),{replaceUrl:!0}):this.router.navigateByUrl(P._.DASHBOARD,{replaceUrl:!0})}get signIn_disabled(){return!this.dataForm.username||!this.dataForm.password}signIn(){var t=this;return(0,a.A)(function*(){t.signIn_disabled||(t.dataForm.rememberme&&(0,s.T9)({params:{authForm:t.dataForm}}),(0,c.L6)({loadingController:t.loadingController,params:t.dataForm,callback:n=>{var l;null!=n&&n.state?(0,c.Dj)({params:{AccessToken:n.token,TokenExpiry:(l=new Date,new Date(l.getFullYear(),l.getMonth(),l.getDate(),23,59,59).getTime()),data:{id:n.data.id,name:n.data.ten_day_du,email:n.data.email,mobile:n.data.so_dien_thoai,ten_dangnhap:n.data.ten_dangnhap,ten_day_du:n.data.ten_day_du,so_dien_thoai:n.data.so_dien_thoai},form:t.dataForm.rememberme?t.dataForm:{}},callback:l=>{null!=l&&l.AccessToken&&t.redirect()}}):(0,g.q)(t.toastController,{},n).then(l=>l.present())}}))})()}}return(u=v).\u0275fac=function(t){return new(t||u)(e.rXU(d.nX),e.rXU(d.Ix),e.rXU(o.Xi),e.rXU(o.K_))},u.\u0275cmp=e.VBU({type:u,selectors:[["app-auth"]],decls:32,vars:7,consts:[[1,"ion-no-border"],["color","light"],["slot","start"],["defaultHref","/","text",""],[1,"min-h-100","w-100","d-flex","flex-column"],[1,"text-center","py-5"],[1,"d-flex","justify-content-center"],["src","../../../assets/image/logo-icon.png"],[1,"mt-2","fs-32","fw-900"],["color","primary"],[1,"mt-0","mb-4","fs-20"],[1,"flex-grow-1","d-flex","justify-content-center","area-white"],[1,"w-100","mw-360","px-4"],[1,"mb-4"],[1,"fw-500","fs-14","mb-2"],["mode","md","fill","outline","placeholder","Nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp",3,"ionChange","value"],["type","password","mode","md","fill","outline","placeholder","Nh\u1eadp m\u1eadt kh\u1ea9u",3,"ionChange","keyup.enter","value"],["slot","end"],["labelPlacement","end",3,"ionChange","checked"],["color","primary","expand","block",1,"ion-no-margin",3,"click","disabled"]],template:function(t,n){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button",3),e.k0s()()(),e.j41(4,"ion-content",1)(5,"div",4)(6,"div",5)(7,"div",6),e.nrm(8,"ion-img",7),e.k0s(),e.j41(9,"div",8)(10,"ion-text",9),e.EFF(11,"MONRE MEETING"),e.k0s()(),e.j41(12,"div",10),e.EFF(13,"N\u1ec1n t\u1ea3ng h\u1ecdp tr\u1ef1c tuy\u1ebfn"),e.k0s()(),e.j41(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14),e.EFF(18,"T\xean \u0111\u0103ng nh\u1eadp"),e.k0s(),e.j41(19,"ion-input",15),e.bIt("ionChange",function(f){return n.changeUserName(f)}),e.k0s()(),e.j41(20,"div",13)(21,"div",14),e.EFF(22,"M\u1eadt kh\u1ea9u"),e.k0s(),e.j41(23,"ion-input",16),e.bIt("ionChange",function(f){return n.changePassword(f)})("keyup.enter",function(){return n.signIn()}),e.nrm(24,"ion-input-password-toggle",17),e.k0s()(),e.j41(25,"div",13)(26,"ion-checkbox",18),e.bIt("ionChange",function(f){return n.changeRemember(f)}),e.EFF(27,"L\u01b0u t\xe0i kho\u1ea3n"),e.k0s()(),e.j41(28,"ion-button",19),e.bIt("click",function(){return n.signIn()}),e.j41(29,"ion-label"),e.EFF(30),e.nI1(31,"translate"),e.k0s()()()()()()),2&t&&(e.R7$(19),e.Y8G("value",n.dataForm.username),e.R7$(4),e.Y8G("value",n.dataForm.password),e.R7$(3),e.Y8G("checked",n.dataForm.rememberme),e.R7$(2),e.Y8G("disabled",n.signIn_disabled),e.R7$(2),e.JRh(e.bMT(31,5,"SignIn")))},dependencies:[o.Jm,o.QW,o.eY,o.W9,o.eU,o.KW,o.$w,o.Wv,o.he,o.IO,o.ai,o.hB,o.Gw,o.el,A.D9]}),v})()}];let F=(()=>{var u;class v{}return(u=v).\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[d.iI.forChild(M),d.iI]}),v})();var D=r(3890);let T=(()=>{var u;class v{}return(u=v).\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[h.MD,p.YN,o.bv,F,D.x]}),v})()},5751:(E,m,r)=>{r.d(m,{q:()=>p});var h=r(467);const p=function(){var o=(0,h.A)(function*(d,a,i){var c,s,g;return!a.message&&i&&(a.message=null!==(g=null==i?void 0:i.message)&&void 0!==g?g:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!",a.icon||(a.icon=null!=i&&i.message?"checkmark-circle-sharp":"alert-circle-outline"),a.color||(a.color=null!=i&&i.status?"success":-1==(null==i?void 0:i.data)?"danger":"warning")),a.position||(a.position="middle"),a.icon||(a.icon="bulb-outline"),a.color||(a.color="secondary"),a.duration=null!==(c=a.duration)&&void 0!==c?c:3e3,a.animated=null===(s=a.animated)||void 0===s||s,a.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield d.create(a)});return function(a,i,c){return o.apply(this,arguments)}}()},2706:(E,m,r)=>{r.d(m,{G:()=>o});var h=r(4438);let o=(()=>{class d{}return d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=h.$C({type:d}),d.\u0275inj=h.G2t({}),d})()}}]);