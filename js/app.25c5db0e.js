(function(){"use strict";var e={9895:function(e,n,t){async function o(e){try{const n=await fetch("https://qiuye.mooo.com/api/auth/getPasswordHint",{method:"POST",headers:{"Content-Type":"application/json",Origin:"Origin"},credentials:"include",body:JSON.stringify({account:e})});if(!n.ok)throw new Error("请求失败");const t=await n.json();return t.hint}catch(n){throw console.error("获取密码提示失败",n),n}}async function r(e,n){try{const t=await fetch("https://qiuye.mooo.com/api/auth/userLogin",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Origin:"Origin"},body:JSON.stringify({account:e,password:n})});if(!t.ok)throw new Error("登录失败");const o=await t.json();if("0"==o.status)return localStorage.setItem("loggedInAccount",e),localStorage.setItem("level",o.level),200;if("-1"==o.status)return 400;if("-2"==o.status)return""==e||""==n?400:403}catch(t){throw console.error("登录请求失败",t),t}}async function a(e,n,t){try{const o=await fetch("https://qiuye.mooo.com/api/auth/userRegister",{method:"POST",headers:{"Content-Type":"application/json",Origin:"Origin"},body:JSON.stringify({account:e,password:n,hint:t})});if(!o.ok)throw new Error("注册失败");const r=await o.json();return"-2"==r.status?(console.log(r.status),400):(localStorage.setItem("loggedInAccount",e),localStorage.setItem("level",r.level),200)}catch(o){throw console.error("註冊请求失败",o),o}}function i(e,n){return 200}function c(){alert("[api/auth/userLogout]")}function u(){const e=JSON.parse(localStorage.getItem("level"));return 1==e?"user":"admin"}t.d(n,{Kv:function(){return c},N$:function(){return a},VP:function(){return i},cY:function(){return u},e9:function(){return o},n$:function(){return r}})},2773:function(e,n,t){var o=t(9242),r=t(3396);function a(e,n){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(t)}var i=t(89);const c={},u=(0,i.Z)(c,[["render",a]]);var s=u,f=t(2483),l=t(9895);const d=[{path:"/",component:()=>t.e(40).then(t.bind(t,9040)),children:[{path:"",redirect:"/login"},{path:"login",name:"loginPage",component:()=>t.e(821).then(t.bind(t,9821))},{path:"register",component:()=>t.e(559).then(t.bind(t,6559)),children:[{path:"",name:"registerPage",component:()=>t.e(814).then(t.bind(t,1814))},{path:"",name:"registerPage_verify",component:()=>t.e(383).then(t.bind(t,1383))},{path:"",name:"registerPage_result",component:()=>t.e(658).then(t.bind(t,1658))}]}]},{path:"/",component:()=>t.e(302).then(t.bind(t,302)),beforeEnter:(e,n,t)=>{const o=(0,l.cY)();"user"==o?t():t("admin"==o?{name:"floorPage_admin"}:{name:"loginPage"})},children:[{path:"floor",name:"floorPage",component:()=>Promise.all([t.e(470),t.e(914),t.e(635)]).then(t.bind(t,6103))},{path:"search",name:"searchPage",component:()=>Promise.all([t.e(470),t.e(930),t.e(390)]).then(t.bind(t,2405))},{path:"status",name:"statusPage",component:()=>Promise.all([t.e(470),t.e(930),t.e(254)]).then(t.bind(t,2467))},{path:"save",name:"savePage",component:()=>Promise.all([t.e(470),t.e(930),t.e(974)]).then(t.bind(t,9540))}]},{path:"/admin",component:()=>t.e(302).then(t.bind(t,302)),beforeEnter:(e,n,t)=>{const o=(0,l.cY)();"user"==o?t({name:"floorPage"}):"admin"==o?t():t({name:"loginPage"})},children:[{path:"floor",name:"floorPage_admin",component:()=>Promise.all([t.e(470),t.e(914),t.e(144)]).then(t.bind(t,544))},{path:"overview",name:"overviewPage_admin",component:()=>Promise.all([t.e(470),t.e(930),t.e(539)]).then(t.bind(t,697))},{path:"request",name:"requestPage_admin",component:()=>Promise.all([t.e(470),t.e(930),t.e(513)]).then(t.bind(t,8474))},{path:"user-info",name:"userInfoPage_admin",component:()=>t.e(43).then(t.bind(t,8043))},{path:"save",name:"savePage_admin",component:()=>Promise.all([t.e(470),t.e(930),t.e(974)]).then(t.bind(t,9540))}]},{path:"/:pathMatch(.*)",name:"notFound",redirect:"/login",hidden:!0}],h=(0,f.p7)({history:(0,f.PO)("/SE_project-web/"),routes:d});var p=h;(0,o.ri)(s).use(p).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],a=e[f][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{40:"e669a65e",43:"a8dce47a",144:"5df3e550",254:"57692f07",302:"be0be24c",383:"1d3f97bc",390:"ac942b9e",470:"4acf68ca",513:"d651e693",539:"5fcb0b29",559:"3a6e3d5d",635:"8e2ad5a4",658:"f69a6f82",814:"12df1c3c",821:"750a9943",914:"aba51e31",930:"0fef6e65",974:"2dcee67b"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{40:"fc248587",43:"118842b0",144:"60734569",254:"3277b9f1",302:"75efb497",383:"5bdc3c23",390:"3277b9f1",513:"3277b9f1",539:"3277b9f1",635:"a18b30a6",658:"48e3b866",814:"95b598f2",821:"64355aa5",974:"3277b9f1"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="cr:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+a){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=o),e[o]=[r];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/SE_project-web/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),c=t.p+i;if(n(i,c))return r();e(o,c,null,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={40:1,43:1,144:1,254:1,302:1,383:1,390:1,513:1,539:1,635:1,658:1,814:1,821:1,974:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],u=o[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var f=u(t)}for(n&&n(o);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(f)},o=self["webpackChunkcr"]=self["webpackChunkcr"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2773)}));o=t.O(o)})();
//# sourceMappingURL=app.25c5db0e.js.map