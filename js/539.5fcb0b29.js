"use strict";(self["webpackChunkcr"]=self["webpackChunkcr"]||[]).push([[539],{697:function(t,a,e){e.r(a),e.d(a,{default:function(){return d}});var r=e(3396);function n(t,a,e,n,s,c){const u=(0,r.up)("data-table");return(0,r.wg)(),(0,r.j4)(u,{"table-type":"overviewPage_admin","enable-col":{account:"借用人",period:"時段",status:"狀態"},"insert-data":s.insertData},null,8,["insert-data"])}e(7658);var s=e(1930),c=e(5591),u={components:{"data-table":s.Z},data(){return{insertData:[]}},async created(){try{const t=await(0,c.dN)(),a=Object.values(t);for(let e of a)e.account=e.pid.slice(0,e.pid.indexOf("-")),e.status>=2&&e.status<=5&&this.insertData.push(e)}catch(t){console.error("Error fetching user period data:",t)}}},i=e(89);const o=(0,i.Z)(u,[["render",n]]);var d=o}}]);
//# sourceMappingURL=539.5fcb0b29.js.map