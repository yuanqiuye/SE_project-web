"use strict";(self["webpackChunkcr"]=self["webpackChunkcr"]||[]).push([[685],{3778:function(l,e,o){o.r(e),o.d(e,{default:function(){return W}});var s=o(3396);function t(l,e,o,t,n,a){const i=(0,s.up)("building-selector"),r=(0,s.up)("floor-selector"),c=(0,s.up)("classroom-info"),d=(0,s.up)("setting-area");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{onBuilding:e[0]||(e[0]=l=>{n.building=l})}),(0,s.Wm)(r,{"in-building":n.building,onClassroomID:e[1]||(e[1]=l=>{n.classroomID=l})},null,8,["in-building"]),(0,s.Wm)(c,{classroomID:n.classroomID},null,8,["classroomID"]),(0,s.Wm)(d,{classroomID:n.classroomID},null,8,["classroomID"])],64)}var n=o(4332),a=o(6480),i=o(9950),r=o(7139),c=o(9242);const d=l=>((0,s.dD)("data-v-39a55a88"),l=l(),(0,s.Cn)(),l),u={class:"applyArea"},b={class:"schedule ts-box borderShadow"},h={class:"ts-table is-definition is-celled"},m=d((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"星期一"),(0,s._)("th",null,"星期二"),(0,s._)("th",null,"星期三"),(0,s._)("th",null,"星期四"),(0,s._)("th",null,"星期五")])],-1))),f={ref:"scheduleTable"},p=["onClick"],g={class:"confirm box"},_={class:"confirm-emptyText"},w=d((()=>(0,s._)("span",{class:"ts-icon is-plus-icon is-huge"},null,-1))),k={class:"confirm-text"},y=d((()=>(0,s._)("span",{class:"confirm-title"},"確定要修改可借時段嗎 ?",-1))),D=[y],I={class:"confirm-buttons"},S={class:"periodLegend box"},v={class:"ts-box is-collapsed"},B={class:"ts-table is-collapsed is-celled"};function C(l,e,o,t,n,a){return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",b,[(0,s._)("table",h,[m,(0,s._)("tbody",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.getPeriodTime(),((l,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,[(0,s._)("div",null,"第  "+(0,r.zw)(l.nth)+"  節",1),(0,s.Uk)(" "+(0,r.zw)(l.startTime)+" ~ "+(0,r.zw)(l.endTime),1)]),((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(5,(l=>(0,s._)("td",{key:l,style:(0,r.j5)({backgroundColor:a.getBlockBgColor(l,e+1)}),onClick:o=>a.clickBlock(l,e+1)},null,12,p))),64))])))),128))],512)])]),(0,s._)("div",null,[(0,s._)("div",g,[(0,s.wy)((0,s._)("span",_,[w,(0,s.Uk)(" 目前沒有修改任何時段，請直接點選左側的課表。 ")],512),[[c.F8,!n.confirm.enable]]),(0,s.wy)((0,s._)("span",k,D,512),[[c.F8,n.confirm.enable]]),(0,s.wy)((0,s._)("div",I,[(0,s._)("button",{class:"borderShadow ts-button is-accent",onClick:e[0]||(e[0]=(...l)=>a.clickUpdateButton&&a.clickUpdateButton(...l))},"確定修改"),(0,s._)("button",{class:"borderShadow ts-button is-accent is-secondary",onClick:e[1]||(e[1]=(...l)=>a.resetScheduleTable&&a.resetScheduleTable(...l))},"取消並重置")],512),[[c.F8,n.confirm.enable]])]),(0,s._)("div",S,[(0,s._)("div",v,[(0,s._)("table",B,[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.legendData,(l=>((0,s.wg)(),(0,s.iD)("tr",{key:l.color},[(0,s._)("td",{style:(0,r.j5)({width:"50px",backgroundColor:l.color})},null,4),(0,s._)("td",null,(0,r.zw)(l.name),1)])))),128))])])])])])])}o(7658);var T=o(6228),P=o(1842),x=o(5591),U={props:["classroomID"],data(){return{classroomInfo:(0,P.S)(null),periodState:null,confirm:{enable:!1},legendData:[{name:"可借用",color:"#fff"},{name:"無法借用",color:"#bbb"}]}},async created(){this.classroomInfo=(0,P.S)(this.classroomID||"ins101"),await this.resetScheduleTable()},methods:{getPeriodTime(){return T.B},getBlockBgColor(l,e){return this.periodState&&this.periodState[l]&&this.periodState[l][e]?"#fff":"#bbb"},async resetScheduleTable(){var l=Array.from(Array(6),(()=>Array(T.B.length+1).fill(!1)));const e=await(0,x.vx)(this.classroomInfo.id);if(console.log("enablePeriod:",e),e)for(const o of e)for(let e=o.startPeriod;e<=o.endPeriod;e++)l[o.day][e]=!0;this.periodState=l,this.confirm.enable=!1},clickBlock(l,e){this.confirm.enable=!0,this.periodState[l][e]=!this.periodState[l][e]},async clickUpdateButton(){let l=[];for(let e=1;e<=5;e++){let o=null;for(let s=1;s<=T.B.length;s++)this.periodState[e][s]?null==o?o={day:e,startPeriod:s,endPeriod:s}:o.endPeriod=s:null!=o&&(l.push(o),o=null);null!=o&&(l.push(o),o=null)}console.log("classroomInfo:",this.classroomInfo.id),console.log("enablePeriodtest:",l),await(0,x.bK)(this.classroomInfo.id,l),this.resetScheduleTable()}},watch:{async classroomID(l){this.classroomInfo=(0,P.S)(l||"ins101"),await this.resetScheduleTable()}}},Z=o(89);const z=(0,Z.Z)(U,[["render",C],["__scopeId","data-v-39a55a88"]]);var A=z,H={components:{"building-selector":n.Z,"floor-selector":a.Z,"classroom-info":i.Z,"setting-area":A},data(){return{building:null,classroomID:null}}};const K=(0,Z.Z)(H,[["render",t]]);var W=K}}]);
//# sourceMappingURL=685.fb6fb2ec.js.map