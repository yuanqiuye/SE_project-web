"use strict";(self["webpackChunkcr"]=self["webpackChunkcr"]||[]).push([[100],{3155:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var r=a(3396);function n(t,e,a,n,c,s){const o=(0,r.up)("data-table");return(0,r.wg)(),(0,r.j4)(o,{"table-type":"requestPage_admin","enable-col":{account:"申請人",period:"時段"},"insert-data":c.insertData},null,8,["insert-data"])}a(7658);var c=a(6346),s=a(5591),o={components:{"data-table":c.Z},data(){return{insertData:[]}},async beforeCreate(){try{const t=await(0,s.dN)(),e=Object.values(t);for(let a of e)a.account=a.pid.slice(0,a.pid.indexOf("-")),0==a.status&&this.insertData.push(a)}catch(t){console.error("Error fetching user period data:",t)}}},u=a(89);const i=(0,u.Z)(o,[["render",n]]);var d=i}}]);
//# sourceMappingURL=100.4e67c7ef.js.map