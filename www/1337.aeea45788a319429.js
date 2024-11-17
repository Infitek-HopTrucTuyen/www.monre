"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1337],{1462:(Q,I,f)=>{f.d(I,{E_:()=>H,F3:()=>g});var p=f(467);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var c=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(c||{});class m extends Error{constructor(t,l){super(t),this.message=t,this.code=l}}const V=s=>{var t,l,u,C,P;const O=s.CapacitorCustomPlatform||null,d=s.Capacitor||{},M=d.Plugins=d.Plugins||{},v=s.CapacitorPlatforms,G=(null===(t=null==v?void 0:v.currentPlatform)||void 0===t?void 0:t.getPlatform)||(()=>null!==O?O.name:(s=>{var t,l;return null!=s&&s.androidBridge?"android":null!==(l=null===(t=null==s?void 0:s.webkit)||void 0===t?void 0:t.messageHandlers)&&void 0!==l&&l.bridge?"ios":"web"})(s)),a=(null===(l=null==v?void 0:v.currentPlatform)||void 0===l?void 0:l.isNativePlatform)||(()=>"web"!==G()),n=(null===(u=null==v?void 0:v.currentPlatform)||void 0===u?void 0:u.isPluginAvailable)||(h=>{const b=Y.get(h);return!!(null!=b&&b.platforms.has(G())||te(h))}),te=(null===(C=null==v?void 0:v.currentPlatform)||void 0===C?void 0:C.getPluginHeader)||(h=>{var b;return null===(b=d.PluginHeaders)||void 0===b?void 0:b.find(F=>F.name===h)}),Y=new Map,se=(null===(P=null==v?void 0:v.currentPlatform)||void 0===P?void 0:P.registerPlugin)||((h,b={})=>{const F=Y.get(h);if(F)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),F.proxy;const j=G(),K=te(h);let R;const le=function(){var A=(0,p.A)(function*(){return!R&&j in b?R=R="function"==typeof b[j]?yield b[j]():b[j]:null!==O&&!R&&"web"in b&&(R=R="function"==typeof b.web?yield b.web():b.web),R});return function(){return A.apply(this,arguments)}}(),N=A=>{let w;const S=(...U)=>{const B=le().then(D=>{const z=((A,w)=>{var S,U;if(!K){if(A)return null===(U=A[w])||void 0===U?void 0:U.bind(A);throw new m(`"${h}" plugin is not implemented on ${j}`,c.Unimplemented)}{const B=null==K?void 0:K.methods.find(D=>w===D.name);if(B)return"promise"===B.rtype?D=>d.nativePromise(h,w.toString(),D):(D,z)=>d.nativeCallback(h,w.toString(),D,z);if(A)return null===(S=A[w])||void 0===S?void 0:S.bind(A)}})(D,A);if(z){const Z=z(...U);return w=null==Z?void 0:Z.remove,Z}throw new m(`"${h}.${A}()" is not implemented on ${j}`,c.Unimplemented)});return"addListener"===A&&(B.remove=(0,p.A)(function*(){return w()})),B};return S.toString=()=>`${A.toString()}() { [capacitor code] }`,Object.defineProperty(S,"name",{value:A,writable:!1,configurable:!1}),S},ne=N("addListener"),re=N("removeListener"),ue=(A,w)=>{const S=ne({eventName:A},w),U=function(){var D=(0,p.A)(function*(){const z=yield S;re({eventName:A,callbackId:z},w)});return function(){return D.apply(this,arguments)}}(),B=new Promise(D=>S.then(()=>D({remove:U})));return B.remove=(0,p.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield U()}),B},q=new Proxy({},{get(A,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return K?ue:ne;case"removeListener":return re;default:return N(w)}}});return M[h]=q,Y.set(h,{name:h,proxy:q,platforms:new Set([...Object.keys(b),...K?[j]:[]])}),q});return d.convertFileSrc||(d.convertFileSrc=h=>h),d.getPlatform=G,d.handleError=h=>s.console.error(h),d.isNativePlatform=a,d.isPluginAvailable=n,d.pluginMethodNoop=(h,b,F)=>Promise.reject(`${F} does not have an implementation of "${b}".`),d.registerPlugin=se,d.Exception=m,d.DEBUG=!!d.DEBUG,d.isLoggingEnabled=!!d.isLoggingEnabled,d.platform=d.getPlatform(),d.isNative=d.isNativePlatform(),d},r=(s=>s.Capacitor=V(s))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),g=r.registerPlugin;class H{constructor(t){this.listeners={},this.windowListeners={},t&&(console.warn(`Capacitor WebPlugin "${t.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=t)}addListener(t,l){var u=this;this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(l);const P=this.windowListeners[t];P&&!P.registered&&this.addWindowListener(P);const O=function(){var M=(0,p.A)(function*(){return u.removeListener(t,l)});return function(){return M.apply(this,arguments)}}(),d=Promise.resolve({remove:O});return Object.defineProperty(d,"remove",{value:(M=(0,p.A)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield O()}),function(){return M.apply(this,arguments)})}),d;var M}removeAllListeners(){var t=this;return(0,p.A)(function*(){t.listeners={};for(const l in t.windowListeners)t.removeWindowListener(t.windowListeners[l]);t.windowListeners={}})()}notifyListeners(t,l){const u=this.listeners[t];u&&u.forEach(C=>C(l))}hasListeners(t){return!!this.listeners[t].length}registerWindowListener(t,l){this.windowListeners[l]={registered:!1,windowEventName:t,pluginEventName:l,handler:u=>{this.notifyListeners(l,u)}}}unimplemented(t="not implemented"){return new r.Exception(t,c.Unimplemented)}unavailable(t="not available"){return new r.Exception(t,c.Unavailable)}removeListener(t,l){var u=this;return(0,p.A)(function*(){const C=u.listeners[t];if(!C)return;const P=C.indexOf(l);u.listeners[t].splice(P,1),u.listeners[t].length||u.removeWindowListener(u.windowListeners[t])})()}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}}},369:(Q,I,f)=>{f.d(I,{C:()=>_,w:()=>W});var p=f(467),L=f(119),k=f.n(L);const _={SecureStorage:"ionicSecureStorage",IndexedDB:k().INDEXEDDB,LocalStorage:k().LOCALSTORAGE},E={name:"_ionicstorage",storeName:"_ionickv",dbKey:"_ionickey",driverOrder:[_.SecureStorage,_.IndexedDB,_.LocalStorage]};class W{constructor(c=E){this._db=null,this._secureStorageDriver=null;const m=Object.assign({},E,c||{});this._config=m}create(){var c=this;return(0,p.A)(function*(){const m=k().createInstance(c._config);return c._db=m,yield m.setDriver(c._config.driverOrder||[]),c})()}defineDriver(c){var m=this;return(0,p.A)(function*(){return c._driver===_.SecureStorage&&(m._secureStorageDriver=c),k().defineDriver(c)})()}get driver(){var c;return(null===(c=this._db)||void 0===c?void 0:c.driver())||null}assertDb(){if(!this._db)throw new Error("Database not created. Must call create() first");return this._db}get(c){return this.assertDb().getItem(c)}set(c,m){return this.assertDb().setItem(c,m)}remove(c){return this.assertDb().removeItem(c)}clear(){return this.assertDb().clear()}length(){return this.assertDb().length()}keys(){return this.assertDb().keys()}forEach(c){return this.assertDb().iterate(c)}setEncryptionKey(c){var m;if(!this._secureStorageDriver)throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available");null===(m=this._secureStorageDriver)||void 0===m||m.setEncryptionKey(c)}}},1855:(Q,I,f)=>{f.d(I,{sj:()=>O,hm:()=>H,Ll:()=>s,ZD:()=>M,IH:()=>l});var p=f(467),L=f(369),k=f(4342),_=f(5312),E=f(23);const x=(0,f(1462).F3)("Http",{web:()=>f.e(29).then(f.bind(f,29)).then(e=>new e.HttpWeb),electron:()=>f.e(29).then(f.bind(f,29)).then(e=>new e.HttpWeb)}),y=(new L.w({name:"_config",driverOrder:[L.C.IndexedDB,L.C.LocalStorage]}),e=>{if(e)return Object.fromEntries(Object.entries(e).filter(([a,i])=>null!=i))}),X=e=>{e=y(e);const a=new FormData;return Object.keys(e).forEach(i=>{a.append(i,e[i])}),a};function H(e){return $.apply(this,arguments)}function $(){return($=(0,p.A)(function*(e){var a,i;e.loading=null!==(a=e.loading)&&void 0!==a?a:o=>{},e.loading(!0);let n=e.loadingController?yield e.loadingController.create():void 0;null==n||n.present(),x.get({url:_.c.api_url+e.url,headers:e.headers||{Authorization:`Bearer ${0==e.authorization?"":null!==(i=e.AccessToken)&&void 0!==i?i:(yield(0,E.Pn)()).AccessToken}`,lang:yield(0,k.al)()},params:y(e.params)}).then(o=>{"function"==typeof e.success&&e.success(o)}).catch(o=>{"function"==typeof e.error&&e.error(o)}).finally(()=>{e.loading(!1),null==n||n.dismiss()})})).apply(this,arguments)}function s(e){return t.apply(this,arguments)}function t(){return(t=(0,p.A)(function*(e){var a,i;e.loading=null!==(a=e.loading)&&void 0!==a?a:o=>{},e.loading(!0);let n=e.loadingController?yield e.loadingController.create():void 0;null==n||n.present(),x.post({url:_.c.api_url+e.url,headers:e.headers||{Origin:"https://localhost","Content-Type":"application/json",Authorization:`Bearer ${0==e.authorization?"":null!==(i=e.AccessToken)&&void 0!==i?i:(yield(0,E.Pn)()).AccessToken}`,lang:yield(0,k.al)()},data:y(e.params)}).then(o=>{"function"==typeof e.success&&e.success(o)}).catch(o=>{"function"==typeof e.error&&e.error(o)}).finally(()=>{e.loading(!1),null==n||n.dismiss()})})).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=(0,p.A)(function*(e){var a,i;e.loading=null!==(a=e.loading)&&void 0!==a?a:o=>{},e.loading(!0);let n=e.loadingController?yield e.loadingController.create():void 0;null==n||n.present(),x.put({url:_.c.api_url+e.url,headers:e.headers||{Origin:"https://localhost","Content-Type":"application/json",Authorization:`Bearer ${0==e.authorization?"":null!==(i=e.AccessToken)&&void 0!==i?i:(yield(0,E.Pn)()).AccessToken}`,lang:yield(0,k.al)()},data:y(e.params)}).then(o=>{"function"==typeof e.success&&e.success(o)}).catch(o=>{"function"==typeof e.error&&e.error(o)}).finally(()=>{e.loading(!1),null==n||n.dismiss()})})).apply(this,arguments)}function O(e){return d.apply(this,arguments)}function d(){return(d=(0,p.A)(function*(e){var a,i;e.loading=null!==(a=e.loading)&&void 0!==a?a:o=>{},e.loading(!0);let n=e.loadingController?yield e.loadingController.create():void 0;null==n||n.present(),x.del({url:_.c.api_url+e.url,headers:e.headers||{Origin:"https://localhost","Content-Type":"application/json",Authorization:`Bearer ${0==e.authorization?"":null!==(i=e.AccessToken)&&void 0!==i?i:(yield(0,E.Pn)()).AccessToken}`,lang:yield(0,k.al)()},data:y(e.params)}).then(o=>{"function"==typeof e.success&&e.success(o)}).catch(o=>{"function"==typeof e.error&&e.error(o)}).finally(()=>{e.loading(!1),null==n||n.dismiss()})})).apply(this,arguments)}function M(e){return v.apply(this,arguments)}function v(){return(v=(0,p.A)(function*(e){var a,i;e.loading=null!==(a=e.loading)&&void 0!==a?a:o=>{},e.loading(!0);let n=e.loadingController?yield e.loadingController.create():void 0;null==n||n.present(),x.post({url:_.c.api_url+e.url,headers:e.headers||{Origin:"https://localhost","Content-Type":"multipart/form-data",Authorization:`Bearer ${0==e.authorization?"":null!==(i=e.AccessToken)&&void 0!==i?i:(yield(0,E.Pn)()).AccessToken}`,lang:yield(0,k.al)()},data:X(e.params)}).then(o=>{"function"==typeof e.success&&e.success(o)}).catch(o=>{"function"==typeof e.error&&e.error(o)}).finally(()=>{e.loading(!1),null==n||n.dismiss()})})).apply(this,arguments)}},23:(Q,I,f)=>{f.d(I,{Dj:()=>W,L6:()=>V,Pn:()=>E,wn:()=>x});var p=f(467),L=f(369),k=f(1855);const _=new L.w({name:"_authDB",driverOrder:[L.C.IndexedDB,L.C.LocalStorage]}),E=function(){var T=(0,p.A)(function*(r){yield _.create();try{var g=(yield _.get("auth-device"))||{};return"function"==typeof(null==r?void 0:r.callback)&&r.callback(Object.assign({},g||{})),g}catch(y){"function"==typeof(null==r?void 0:r.callback)&&r.callback(),console.error(y)}return{}});return function(g){return T.apply(this,arguments)}}(),W=function(){var T=(0,p.A)(function*(r){yield _.create(),r.params=r.params||{};try{var g=Object.assign({},r.params);yield _.set("auth-device",g),"function"==typeof r.callback&&r.callback(Object.assign({},g||{}))}catch(y){"function"==typeof r.callback&&r.callback(),console.error(y)}});return function(g){return T.apply(this,arguments)}}(),x=function(){var T=(0,p.A)(function*(r){return r&&(r.params={}),W(null!=r?r:{})});return function(g){return T.apply(this,arguments)}}(),V=function(){var T=(0,p.A)(function*(r){r.params=r.params||{},(0,k.Ll)({authorization:!1,url:"Auth/dang_nhap",params:{username:r.params.username,password:r.params.password,rememberme:r.params.rememberme},success:g=>{"function"==typeof r.callback&&r.callback(g.data||null)},error:g=>{var y;"function"==typeof r.callback&&r.callback(null==g||null===(y=g.response)||void 0===y?void 0:y.data),console.error(g)},loading:r.loading,loadingController:r.loadingController})});return function(g){return T.apply(this,arguments)}}()}}]);