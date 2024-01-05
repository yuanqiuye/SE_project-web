(function(){"use strict";var e={9895:function(e,n,t){async function r(e){try{const n=await fetch("https://qiuye.mooo.com/api/auth/getPasswordHint",{method:"POST",headers:{"Content-Type":"application/json",Origin:"Origin"},credentials:"include",body:JSON.stringify({account:e})});if(!n.ok)throw new Error("请求失败");const t=await n.json();return t.hint}catch(n){throw console.error("获取密码提示失败",n),n}}async function o(e,n){try{const t=await fetch("https://qiuye.mooo.com/api/auth/userLogin",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Origin:"Origin"},body:JSON.stringify({account:e,password:n})});if(!t.ok)throw new Error("登录失败");const r=await t.json();if("0"==r.status)return localStorage.setItem("loggedInAccount",e),localStorage.setItem("level",r.level),200;if("-1"==r.status)return 400;if("-2"==r.status)return""==e||""==n?400:403}catch(t){throw console.error("登录请求失败",t),t}}async function a(e,n,t){try{const r=await fetch("https://qiuye.mooo.com/api/auth/userRegister",{method:"POST",headers:{"Content-Type":"application/json",Origin:"Origin"},body:JSON.stringify({account:e,password:n,hint:t})});if(!r.ok)throw new Error("注册失败");const o=await r.json();return"-2"==o.status?(console.log(o.status),400):(localStorage.setItem("loggedInAccount",e),localStorage.setItem("level",o.level),200)}catch(r){throw console.error("註冊请求失败",r),r}}function i(e,n){return 200}function c(){}function u(){const e=JSON.parse(localStorage.getItem("level"));return 1==e?"user":"admin"}t.d(n,{Kv:function(){return c},N$:function(){return a},VP:function(){return i},cY:function(){return u},e9:function(){return r},n$:function(){return o}})},2773:function(e,n,t){var r=t(9242),o=t(3396);function a(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var i=t(89);const c={},u=(0,i.Z)(c,[["render",a]]);var s=u,f=t(2483),l=t(9895);const d=[{path:"/",component:()=>t.e(40).then(t.bind(t,9040)),children:[{path:"",redirect:"/login"},{path:"login",name:"loginPage",component:()=>t.e(821).then(t.bind(t,9821))},{path:"register",component:()=>t.e(559).then(t.bind(t,6559)),children:[{path:"",name:"registerPage",component:()=>t.e(264).then(t.bind(t,6264))},{path:"",name:"registerPage_verify",component:()=>t.e(383).then(t.bind(t,1383))},{path:"",name:"registerPage_result",component:()=>t.e(176).then(t.bind(t,176))}]}]},{path:"/",component:()=>t.e(302).then(t.bind(t,302)),beforeEnter:(e,n,t)=>{const r=(0,l.cY)();"user"==r?t():t("admin"==r?{name:"floorPage_admin"}:{name:"loginPage"})},children:[{path:"floor",name:"floorPage",component:()=>Promise.all([t.e(338),t.e(914),t.e(659)]).then(t.bind(t,6103))},{path:"search",name:"searchPage",component:()=>Promise.all([t.e(338),t.e(346),t.e(379)]).then(t.bind(t,2405))},{path:"status",name:"statusPage",component:()=>Promise.all([t.e(338),t.e(346),t.e(778)]).then(t.bind(t,2467))},{path:"save",name:"savePage",component:()=>Promise.all([t.e(338),t.e(346),t.e(326)]).then(t.bind(t,9540))}]},{path:"/admin",component:()=>t.e(302).then(t.bind(t,302)),beforeEnter:(e,n,t)=>{const r=(0,l.cY)();"user"==r?t({name:"floorPage"}):"admin"==r?t():t({name:"loginPage"})},children:[{path:"floor",name:"floorPage_admin",component:()=>Promise.all([t.e(338),t.e(914),t.e(701)]).then(t.bind(t,3778))},{path:"overview",name:"overviewPage_admin",component:()=>Promise.all([t.e(338),t.e(346),t.e(881)]).then(t.bind(t,6057))},{path:"request",name:"requestPage_admin",component:()=>Promise.all([t.e(338),t.e(346),t.e(918)]).then(t.bind(t,5787))},{path:"user-info",name:"userInfoPage_admin",component:()=>t.e(561).then(t.bind(t,561))},{path:"save",name:"savePage_admin",component:()=>Promise.all([t.e(338),t.e(346),t.e(326)]).then(t.bind(t,9540))}]},{path:"/:pathMatch(.*)",name:"notFound",redirect:"/login",hidden:!0}],h=(0,f.p7)({history:(0,f.r5)(),routes:d});var p=h;(0,r.ri)(s).use(p).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],a=e[f][2];for(var c=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,a<i&&(i=a));if(c){e.splice(f--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{40:"e669a65e",176:"1aa08ba0",264:"e0282da0",302:"be0be24c",326:"22073343",338:"5a1c9f42",346:"a469d4ea",379:"f4fffbb3",383:"1d3f97bc",559:"3a6e3d5d",561:"deb5648f",659:"fc17746f",701:"dc1a81f7",778:"81a629c4",821:"750a9943",881:"382325aa",914:"470065b7",918:"9a6bfd89"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{40:"fc248587",176:"8df220e2",264:"913586e3",302:"75efb497",326:"d0c09585",379:"d0c09585",383:"5bdc3c23",561:"ef4a134e",659:"3a65d772",701:"91325dd0",778:"d0c09585",821:"64355aa5",881:"d0c09585",918:"d0c09585"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="cr:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+a){c=l;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=c,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={40:1,176:1,264:1,302:1,326:1,379:1,383:1,561:1,659:1,701:1,778:1,821:1,881:1,918:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],u=r[2],s=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var f=u(t)}for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(f)},r=self["webpackChunkcr"]=self["webpackChunkcr"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2773)}));r=t.O(r)})();
//# sourceMappingURL=app.dbe6dae5.js.map