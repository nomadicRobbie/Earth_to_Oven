(()=>{"use strict";var e={5587:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727);var r=n(5010),a=n(3396),o={class:"content"};function i(e,t,n,r,i,s){var l=(0,a.up)("NavBar"),c=(0,a.up)("router-view"),u=(0,a.up)("FooterItem");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a._)("div",o,[(0,a.Wm)(c)]),(0,a.Wm)(u)],64)}var s=n(7139),l=function(e){return(0,a.dD)("data-v-01afa9f7"),e=e(),(0,a.Cn)(),e},c={class:"shadow-navbar"},u=l((function(){return(0,a._)("p",null,"=",-1)}));function d(e,t,n,o,i,l){var d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",c,[(0,a._)("nav",{class:(0,s.C_)(i.isScrolled?"nav-shadow":"nav")},[(0,a.Wm)(d,{to:"/",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Welcome")]})),_:1}),(0,a.Wm)(d,{to:"/about",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Our Story")]})),_:1}),(0,a.Wm)(d,{to:"/hireUs",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Get in Touch")]})),_:1}),(0,a.Wm)(d,{to:"/shop",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Delicatessen")]})),_:1})],2)]),(0,a._)("div",{class:"nav-collapse",onClick:t[0]||(t[0]=function(){return l.handleNavClick&&l.handleNavClick.apply(l,arguments)})},[u,(0,a.Wm)(r.uT,{mode:"out-in",name:"slide"},{default:(0,a.w5)((function(){return[(0,a._)("nav",{class:(0,s.C_)(i.navbarOpen?"show-nav":"hide-nav")},[(0,a.Wm)(d,{to:"/",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Welcome")]})),_:1}),(0,a.Wm)(d,{to:"/about",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Our Story")]})),_:1}),(0,a.Wm)(d,{to:"/hireUs",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Get in Touch")]})),_:1}),(0,a.Wm)(d,{to:"/shop",class:"navTag"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Delicatessen")]})),_:1})],2)]})),_:1})])],64)}const f={name:"NavBar",data:function(){return{navbarOpen:!1,isScrolled:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleNavClick:function(){this.navbarOpen=!this.navbarOpen},handleScroll:function(){window.scrollY>50?this.isScrolled=!0:this.isScrolled=!1}}};var h=n(89);const m=(0,h.Z)(f,[["render",d],["__scopeId","data-v-01afa9f7"]]),v=m,p=n.p+"img/logo-two.6bfb6a47.svg";var g={class:"footer-container"},b={class:"footer-left"},y=(0,a._)("div",{class:"footer-center"},[(0,a._)("section",null,[(0,a._)("img",{src:p,alt:""})])],-1),w=(0,a._)("div",{class:"footer-right"},[(0,a._)("section",null,"footer content here")],-1);function _(e,t,n,r,o,i){var s=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",b,[(0,a._)("p",null,[(0,a.Wm)(s,{to:"/tsAndCs"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Terms Of Service")]})),_:1})]),(0,a._)("p",null,[(0,a.Wm)(s,{to:"/PrivacyPolicy"},{default:(0,a.w5)((function(){return[(0,a.Uk)("Privacy Policy")]})),_:1})])]),y,w])}const k={name:"FootItem"},O=(0,h.Z)(k,[["render",_]]),C=O,T={components:{NavBar:v,FooterItem:C}},S=(0,h.Z)(T,[["render",i]]),A=S;n(1539),n(8783),n(3948);var P=n(2483);n(8309);const W=n.p+"img/logo.55ae8be3.svg",E=n.p+"img/awards.3cc40112.svg";var N={class:"home-container"},U=(0,a._)("section",{class:"home-content"},[(0,a._)("img",{src:W,alt:"eto Logo"})],-1),j={class:"home-testimonials"},D=(0,a._)("section",{class:"content-img"},[(0,a._)("img",{src:E,alt:""})],-1);function x(e,t,n,r,o,i){return(0,a.wg)(),(0,a.iD)("section",N,[U,(0,a._)("section",j,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.testimonials,(function(e){return(0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"testimony"},[(0,a._)("h1",null,(0,s.zw)(e.name),1),(0,a._)("p",null,(0,s.zw)(e.content),1)])})),128))]),D])}const F={data:function(){return{testimonials:[{id:"test1",name:"Alistair",content:"Had my first Earth to Oven dinner last night for Valentine's Day. Total success. Delicious prawn bhajees followed by melt-in-the-mouth beef. Highly recommend! "},{id:"test2",name:"John and Charlotte",content:"A feast of deliciousness! Alfie and Joey are genius with flavour and texture and he creates exciting menus with seasonal, locally sourced ingredients. A delivery from Earth to Oven is an absolute joy!’"},{id:"test3",name:"Jackie",content:"'ETO dishes offer you heightened dining experience that in my opinion supersedes all other takeaway meals currently on offer in its holistic approach. From the preparation to the packaging to the savouring of the food; it satisfies all the hungry home diners looking for a top notch dish using ingredients that include plant based foods, seasonal local produce all beautifully presented in environmental friendly packaging. An all round dining success that must be shared with everyone who has a passion for mindful eating and living!’ "}]}}},B=(0,h.Z)(F,[["render",x]]),L=B;var H=[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:function(){return n.e(702).then(n.bind(n,2175))}},{path:"/hireUs",name:"hireUs",component:function(){return n.e(460).then(n.bind(n,3460))}},{path:"/shop",name:"shop",component:function(){return n.e(819).then(n.bind(n,8819))}},{path:"/tsAndCs",name:"tsAndCs",component:function(){return n.e(56).then(n.bind(n,3056))}},{path:"/PrivacyPolicy",name:"PrivacyPolicy",component:function(){return n.e(316).then(n.bind(n,316))}}],I=(0,P.p7)({history:(0,P.PO)("/"),routes:H,linkActiveClass:"active-link"});const Y=I;(0,r.ri)(A).use(Y).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{56:"3f46645a",316:"b3d822cb",460:"9f334c48",702:"abf322bc",819:"67cfb430"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{460:"0a26be6e",702:"3a5e8d51",819:"b880f6d6"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="base-template:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var s,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var f=(t,n)=>{s.onerror=s.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,n,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode&&o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=r=>new Promise(((a,o)=>{var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,null,a,o)})),a={143:0};n.f.miniCss=(e,t)=>{var n={460:1,702:1,819:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,l=r=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkbase_template"]=self["webpackChunkbase_template"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(5587)));r=n.O(r)})();
//# sourceMappingURL=app.94641b88.js.map