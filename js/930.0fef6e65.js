"use strict";(self["webpackChunkcr"]=self["webpackChunkcr"]||[]).push([[930],{1930:function(t,e,i){i.d(e,{Z:function(){return pt}});var l=i(3396),n=i(9242),o=i(7139);const s=t=>((0,l.dD)("data-v-07918efc"),t=t(),(0,l.Cn)(),t),a={class:"ts-box borderShadow"},r={class:"main-table ts-table is-celled"},c={key:0,class:"main-table-fliter-account"},u={class:"ts-input is-start-icon is-solid"},d=s((()=>(0,l._)("span",{class:"ts-icon is-magnifying-glass-icon"},null,-1))),p={class:"main-table-fliter-id"},f={class:"ts-input is-start-icon is-solid"},g=s((()=>(0,l._)("span",{class:"ts-icon is-magnifying-glass-icon"},null,-1))),h={class:"ts-select is-solid"},w=s((()=>(0,l._)("option",{value:"ins"},"資工系館",-1))),y=s((()=>(0,l._)("option",{value:"ecg"},"電綜大樓",-1))),k=[w,y],m={class:"main-table-fliter-classroom"},C={class:"ts-select is-solid"},b=["value"],D={class:"ts-select is-solid"},_=["value"],v={key:1,class:"main-table-fliter-period"},P={class:"ts-select is-solid"},B=(0,l.uE)('<option value="1" data-v-07918efc>星期一</option><option value="2" data-v-07918efc>星期二</option><option value="3" data-v-07918efc>星期三</option><option value="4" data-v-07918efc>星期四</option><option value="5" data-v-07918efc>星期五</option>',5),x=[B],F={class:"ts-select is-solid"},q=["value"],I=s((()=>(0,l._)("span",null,"到",-1))),T={class:"ts-select is-solid"},z=["value"],U={key:2},K={class:"ts-select is-solid"},$=["value"],S=s((()=>(0,l._)("span",{class:"ts-icon is-rotate-right-icon"},null,-1))),V=[S],Y={key:0},M=s((()=>(0,l._)("td",null,[(0,l._)("span",{class:"ts-icon is-hashtag-icon"})],-1))),O=s((()=>(0,l._)("td",null,"大樓",-1))),j=s((()=>(0,l._)("td",null,"教室名稱",-1))),H={key:1},L={key:2},Z=s((()=>(0,l._)("td",null,[(0,l._)("span",{class:"ts-icon is-gears-icon"})],-1))),E={key:0},N={class:"saveButton-tdFix",style:{"justify-content":"center"}},Q={key:1},W={key:2},A=["onClick"],G=["onClick"],J=["onClick"],R=["onClick"],X=["onClick"],tt=["onClick"],et=["onClick"];function it(t,e,i,s,w,y){const B=(0,l.up)("save-button");return(0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("table",r,[(0,l._)("tbody",null,[(0,l._)("tr",null,["account"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",c,[(0,l._)("div",u,[d,(0,l.wy)((0,l._)("input",{type:"text",placeholder:"學號","onUpdate:modelValue":e[0]||(e[0]=t=>w.fliter.account=t)},null,512),[[n.nr,w.fliter.account]])])])):(0,l.kq)("",!0),(0,l._)("td",p,[(0,l._)("div",f,[g,(0,l.wy)((0,l._)("input",{type:"text",placeholder:"教室代碼","onUpdate:modelValue":e[1]||(e[1]=t=>w.fliter.id=t)},null,512),[[n.nr,w.fliter.id]])])]),(0,l._)("td",null,[(0,l._)("div",h,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>w.fliter.building=t),onChange:e[3]||(e[3]=(...t)=>y.whenBuildingChange&&y.whenBuildingChange(...t))},k,544),[[n.bM,w.fliter.building]])])]),(0,l._)("td",m,[(0,l._)("div",C,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>w.fliter.floor=t),onChange:e[5]||(e[5]=(...t)=>y.whenFloorChange&&y.whenFloorChange(...t))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.getFloorOption(),(t=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,o.zw)(t+"F"),9,b)))),128))],544),[[n.bM,w.fliter.floor]])]),(0,l._)("div",D,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[6]||(e[6]=t=>w.fliter.classroomID=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.getClassroomOption(),(t=>((0,l.wg)(),(0,l.iD)("option",{key:t,value:t},(0,o.zw)(t),9,_)))),128))],512),[[n.bM,w.fliter.classroomID]])])]),"period"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",v,[(0,l._)("div",P,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[7]||(e[7]=t=>w.fliter.day=t)},x,512),[[n.bM,w.fliter.day]])]),(0,l._)("div",F,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[8]||(e[8]=t=>w.fliter.startPeriod=t),onChange:e[9]||(e[9]=(...t)=>y.whenStartPeriodChange&&y.whenStartPeriodChange(...t))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.getPeriod(),(t=>((0,l.wg)(),(0,l.iD)("option",{key:t.nth,value:t.nth},(0,o.zw)(`第 ${t.nth} 節`),9,q)))),128))],544),[[n.bM,w.fliter.startPeriod]])]),I,(0,l._)("div",T,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[10]||(e[10]=t=>w.fliter.endPeriod=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.getPeriod(),(t=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("option",{key:t.nth,value:t.nth},(0,o.zw)(`第 ${t.nth} 節`),9,z)),[[n.F8,null!=w.fliter.startPeriod&&t.nth>=w.fliter.startPeriod]]))),128))],512),[[n.bM,w.fliter.endPeriod]])])])):(0,l.kq)("",!0),"status"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",U,[(0,l._)("div",K,[(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":e[11]||(e[11]=t=>w.fliter.status=t)},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(w.statusText,((t,e)=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,o.zw)(t),9,$)))),128))],512),[[n.bM,w.fliter.status]])])])):(0,l.kq)("",!0),(0,l._)("td",null,[(0,l._)("span",{class:"ts-icon is-caret-left-icon main-table-resetButton iconButton",title:"重置篩選器",onClick:e[12]||(e[12]=(...t)=>y.resetFliter&&y.resetFliter(...t))},V)])]),(0,l._)("tr",null,["account"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",Y,(0,o.zw)(i.enableCol.account),1)):(0,l.kq)("",!0),M,O,j,"period"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",H,(0,o.zw)(i.enableCol.period),1)):(0,l.kq)("",!0),"status"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",L,(0,o.zw)(i.enableCol.status),1)):(0,l.kq)("",!0),Z]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.getTableData(),(t=>(0,l.wy)(((0,l.wg)(),(0,l.iD)("tr",{key:t.classroom.id},["account"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",E,(0,o.zw)(t.account)+" ( "+(0,o.zw)(y.getPoint(t.account))+"違規點 )",1)):(0,l.kq)("",!0),(0,l._)("td",null,(0,o.zw)(t.classroom.id.toUpperCase()),1),(0,l._)("td",null,(0,o.zw)(t.classroom.building),1),(0,l._)("td",N,[(0,l.Uk)((0,o.zw)(t.classroom.name)+" ",1),(0,l.Wm)(B,{classroomID:t.classroom.id},null,8,["classroomID"])]),"period"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",Q,(0,o.zw)(y.getPeriodText(t.period)),1)):(0,l.kq)("",!0),"status"in i.enableCol?((0,l.wg)(),(0,l.iD)("td",W,(0,o.zw)(y.getStatusText(t.status)),1)):(0,l.kq)("",!0),(0,l._)("td",null,[(0,l._)("span",{class:"ts-icon is-info-icon iconButton infoIconFix",title:"詳細教室資訊",onClick:e=>y.infoButton(t.classroom.id)},null,8,A),"statusPage"!=i.tableType||0!=t.status&&2!=t.status?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",{key:0,class:"ts-icon is-x-icon iconButton-danger xIconFix",title:"取消申請",onClick:e=>y.cancelButton(t.pid)},null,8,G)),"statusPage"!=i.tableType||1!=t.status&&6!=t.status&&7!=t.status?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("span",{key:1,class:"ts-icon is-trash-can-icon iconButton-danger trashcanIconFix",title:"刪除",onClick:e=>y.deleteButton(t.pid)},null,8,J)),"overviewPage_admin"==i.tableType&&2==t.status?((0,l.wg)(),(0,l.iD)("span",{key:2,class:"ts-icon is-key-icon iconButton",title:"借出鑰匙",onClick:e=>y.lendKeyButton(t.pid)},null,8,R)):(0,l.kq)("",!0),"overviewPage_admin"==i.tableType&&5==t.status?((0,l.wg)(),(0,l.iD)("span",{key:3,class:"ts-icon is-key-icon iconButton",title:"歸還鑰匙",onClick:e=>y.receiveKeyButton(t.pid)},null,8,X)):(0,l.kq)("",!0),"requestPage_admin"==i.tableType?((0,l.wg)(),(0,l.iD)("span",{key:4,class:"ts-icon is-check-icon iconButton xIconFix",title:"同意申請",onClick:e=>y.acceptButton(t.pid)},null,8,tt)):(0,l.kq)("",!0),"requestPage_admin"==i.tableType?((0,l.wg)(),(0,l.iD)("span",{key:5,class:"ts-icon is-x-icon iconButton-danger xIconFix",title:"拒絕申請",onClick:e=>y.rejectButton(t.pid)},null,8,et)):(0,l.kq)("",!0)])])),[[n.F8,y.isShow(t)]]))),128))])])])}i(7658);var lt=i(8622),nt=i(6228),ot=i(1842),st=i(7516),at=i(9895),rt=i(5591),ct={components:{"save-button":st.Z},props:{tableType:{default:null},enableCol:{default:{}},insertData:{default:[]}},data(){return{fliter:null,statusText:["申請中","申請被拒絕","申請通過 ( 未借鑰匙 )","申請通過 ( 已借鑰匙 )","借用中","借用完畢 ( 未還鑰匙 )","借用完畢 ( 已還鑰匙 )","已取消申請"],userPoint:{}}},created(){this.resetFliter()},methods:{getFloorOption(){try{return Object.keys(lt.B[this.fliter.building].F)}catch{}return[]},getClassroomOption(){try{return Object.keys(lt.B[this.fliter.building].F[this.fliter.floor].C)}catch{}return[]},getPeriod(){return nt.B},whenBuildingChange(){this.fliter.floor="",this.fliter.classroomID=""},whenFloorChange(){this.fliter.classroomID=""},whenStartPeriodChange(){this.fliter.endPeriod=this.fliter.startPeriod},resetFliter(){this.fliter={account:"",id:"",building:"",floor:"",classroomID:"",day:null,startPeriod:null,endPeriod:null,status:null}},isShow(t){let e=!0;t.account.includes(this.fliter.account)||(e=!1);const i=t.classroom.id.toLowerCase(),l=this.fliter.id.toLowerCase();let n=this.fliter.building;return""==this.fliter.classroomID?n+=this.fliter.floor:n+=this.fliter.classroomID,n=n.toLowerCase(),i.includes(l)||(e=!1),i.includes(n)||(e=!1),null!=this.fliter.day&&t.period.day!=this.fliter.day&&(e=!1),null!=this.fliter.startPeriod&&null!=this.fliter.endPeriod&&(this.fliter.startPeriod>=t.period.startPeriod&&this.fliter.endPeriod<=t.period.endPeriod||(e=!1)),null!=this.fliter.status&&t.status!=this.fliter.status&&(e=!1),e},getTableData(){if(void 0==this.insertData)return[];let t=[];for(let e of this.insertData){const i={pid:e.pid,account:void 0==e.account?"":e.account,classroom:(0,ot.S)(e.classroomID),period:e.period,status:e.status},l=i.classroom.name;i.classroom.name=l.slice(0,l.indexOf("(")).trim(),t.push(i)}return t},getPoint(t){return t in this.userPoint||(this.userPoint[t]=(0,rt.rp)(t)),this.userPoint[t]},getPeriodText(t){const e=["","星期一","星期二","星期三","星期四","星期五"];let i="";return void 0!=t&&(i=`${e[t.day]} , 第 ${t.startPeriod} 節`,t.startPeriod!=t.endPeriod&&(i+=` ~ 第 ${t.endPeriod} 節`)),i},getStatusText(t){let e="未知";return void 0!=t&&(e=this.statusText[t]),e},runConfirmDialog(t,e,i,l){const n=window.confirm(`${t} ?`);if(!n)return;const o=i(l);switch(o){case 200:alert(`${e}成功 !`);break;case 400:alert(`${e}失敗 !`);break;default:alert("未知錯誤");break}},infoButton(t){"user"==(0,at.cY)()?this.$router.push({name:"floorPage",query:{id:t}}):"admin"==(0,at.cY)()&&this.$router.push({name:"floorPage_admin",query:{id:t}})},cancelButton(t){this.runConfirmDialog("是否要取消申請","取消申請",rt.Bs,t)},deleteButton(t){this.runConfirmDialog("是否要刪除借用紀錄","刪除",rt.tU,t)},lendKeyButton(t){this.runConfirmDialog("是否要借出鑰匙","借用狀態更新",rt.pe,t)},receiveKeyButton(t){this.runConfirmDialog("是否拿到了歸還的鑰匙","借用狀態更新",rt.jo,t)},acceptButton(t){this.runConfirmDialog("是否要同意申請","操作",rt.ED,t)},rejectButton(t){this.runConfirmDialog("是否要拒絕申請","操作",rt.QN,t)}}},ut=i(89);const dt=(0,ut.Z)(ct,[["render",it],["__scopeId","data-v-07918efc"]]);var pt=dt}}]);
//# sourceMappingURL=930.0fef6e65.js.map