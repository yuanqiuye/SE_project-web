"use strict";(self["webpackChunkcr"]=self["webpackChunkcr"]||[]).push([[93],{2477:function(t,e,i){i.d(e,{Nd:function(){return n},hF:function(){return s},kw:function(){return o},z:function(){return l}});i(7658);async function n(t){var e=localStorage.getItem("loggedInAccount").toString();if(null!=t){const i=await fetch("https://qiuye.mooo.com/api/app/getIsSave",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({userAccount:e,classroomID:t})});if(!i.ok)throw new Error("请求失败");return i.json()}return!1}async function o(t){const e=localStorage.getItem("loggedInAccount");await fetch("https://qiuye.mooo.com/api/app/addSave",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({userAccount:e,classroomID:t})})}async function l(t){const e=localStorage.getItem("loggedInAccount");await fetch("https://qiuye.mooo.com/api/app/romoveSave",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({userAccount:e,classroomID:t})})}async function s(){const t=localStorage.getItem("loggedInAccount"),e=await fetch("https://qiuye.mooo.com/api/app/getAllSave",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({userAccount:t})});if(!e.ok)throw new Error("请求失败");const i=await e.json(),n=[];for(const o in i)!0===i[o]&&n.push(o);return console.log(n),n}},1842:function(t,e,i){i.d(e,{S:function(){return o}});var n=i(9752);function o(t){const e={building:"未知的大樓",name:"未知",number:"-",equipment:"-"};let i=e;return t in n&&(i=n[t]),i.id=t,{...i}}},5093:function(t,e,i){i.d(e,{Z:function(){return ht}});var n=i(3396),o=i(9242),l=i(7139);const s=t=>((0,n.dD)("data-v-31aa231c"),t=t(),(0,n.Cn)(),t),a={class:"ts-box borderShadow"},d={class:"main-table ts-table is-celled"},r={key:0,class:"main-table-fliter-account"},c={class:"ts-input is-start-icon is-solid"},u=s((()=>(0,n._)("span",{class:"ts-icon is-magnifying-glass-icon"},null,-1))),h={class:"main-table-fliter-id"},p={class:"ts-input is-start-icon is-solid"},g=s((()=>(0,n._)("span",{class:"ts-icon is-magnifying-glass-icon"},null,-1))),f={class:"ts-select is-solid"},m=s((()=>(0,n._)("option",{value:"ins"},"資工系館",-1))),w=s((()=>(0,n._)("option",{value:"ecg"},"電綜大樓",-1))),b=[m,w],B={class:"main-table-fliter-classroom"},y={class:"ts-select is-solid"},v=["value"],k={class:"ts-select is-solid"},C=["value"],D={key:1,class:"main-table-fliter-period"},_={class:"ts-select is-solid"},P=(0,n.uE)('<option value="1" data-v-31aa231c>星期一</option><option value="2" data-v-31aa231c>星期二</option><option value="3" data-v-31aa231c>星期三</option><option value="4" data-v-31aa231c>星期四</option><option value="5" data-v-31aa231c>星期五</option>',5),T=[P],S={class:"ts-select is-solid"},I=["value"],q=s((()=>(0,n._)("span",null,"到",-1))),x={class:"ts-select is-solid"},F=["value"],O={key:2},U={class:"ts-select is-solid"},z=["value"],A=s((()=>(0,n._)("span",{class:"ts-icon is-rotate-right-icon"},null,-1))),j=[A],N={key:0},$=s((()=>(0,n._)("td",null,[(0,n._)("span",{class:"ts-icon is-hashtag-icon"})],-1))),E=s((()=>(0,n._)("td",null,"大樓",-1))),K=s((()=>(0,n._)("td",null,"教室名稱",-1))),L={key:1},V={key:2},Y=s((()=>(0,n._)("td",null,[(0,n._)("span",{class:"ts-icon is-gears-icon"})],-1))),J={key:0},M={class:"saveButton-tdFix",style:{"justify-content":"center"}},H={key:1},R={key:2},Z=["onClick"],Q=["onClick"],W=["onClick"],G=["onClick"],X=["onClick"],tt=["onClick"],et=["onClick"];function it(t,e,i,s,m,w){const P=(0,n.up)("save-button");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("table",d,[(0,n._)("tbody",null,[(0,n._)("tr",null,["account"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",r,[(0,n._)("div",c,[u,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"學號","onUpdate:modelValue":e[0]||(e[0]=t=>m.fliter.account=t)},null,512),[[o.nr,m.fliter.account]])])])):(0,n.kq)("",!0),(0,n._)("td",h,[(0,n._)("div",p,[g,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"教室代碼","onUpdate:modelValue":e[1]||(e[1]=t=>m.fliter.id=t)},null,512),[[o.nr,m.fliter.id]])])]),(0,n._)("td",null,[(0,n._)("div",f,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[2]||(e[2]=t=>m.fliter.building=t),onChange:e[3]||(e[3]=(...t)=>w.whenBuildingChange&&w.whenBuildingChange(...t))},b,544),[[o.bM,m.fliter.building]])])]),(0,n._)("td",B,[(0,n._)("div",y,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[4]||(e[4]=t=>m.fliter.floor=t),onChange:e[5]||(e[5]=(...t)=>w.whenFloorChange&&w.whenFloorChange(...t))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.getFloorOption(),(t=>((0,n.wg)(),(0,n.iD)("option",{key:t,value:t},(0,l.zw)(t+"F"),9,v)))),128))],544),[[o.bM,m.fliter.floor]])]),(0,n._)("div",k,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[6]||(e[6]=t=>m.fliter.classroomID=t)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.getClassroomOption(),(t=>((0,n.wg)(),(0,n.iD)("option",{key:t,value:t},(0,l.zw)(t),9,C)))),128))],512),[[o.bM,m.fliter.classroomID]])])]),"period"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",D,[(0,n._)("div",_,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[7]||(e[7]=t=>m.fliter.day=t)},T,512),[[o.bM,m.fliter.day]])]),(0,n._)("div",S,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[8]||(e[8]=t=>m.fliter.startPeriod=t),onChange:e[9]||(e[9]=(...t)=>w.whenStartPeriodChange&&w.whenStartPeriodChange(...t))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.getPeriod(),(t=>((0,n.wg)(),(0,n.iD)("option",{key:t.nth,value:t.nth},(0,l.zw)(`第 ${t.nth} 節`),9,I)))),128))],544),[[o.bM,m.fliter.startPeriod]])]),q,(0,n._)("div",x,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[10]||(e[10]=t=>m.fliter.endPeriod=t)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.getPeriod(),(t=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("option",{key:t.nth,value:t.nth},(0,l.zw)(`第 ${t.nth} 節`),9,F)),[[o.F8,null!=m.fliter.startPeriod&&t.nth>=m.fliter.startPeriod]]))),128))],512),[[o.bM,m.fliter.endPeriod]])])])):(0,n.kq)("",!0),"status"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",O,[(0,n._)("div",U,[(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":e[11]||(e[11]=t=>m.fliter.status=t)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.statusText,((t,e)=>((0,n.wg)(),(0,n.iD)("option",{key:e,value:e},(0,l.zw)(t),9,z)))),128))],512),[[o.bM,m.fliter.status]])])])):(0,n.kq)("",!0),(0,n._)("td",null,[(0,n._)("span",{class:"ts-icon is-caret-left-icon main-table-resetButton iconButton",title:"重置篩選器",onClick:e[12]||(e[12]=(...t)=>w.resetFliter&&w.resetFliter(...t))},j)])]),(0,n._)("tr",null,["account"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",N,(0,l.zw)(i.enableCol.account),1)):(0,n.kq)("",!0),$,E,K,"period"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",L,(0,l.zw)(i.enableCol.period),1)):(0,n.kq)("",!0),"status"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",V,(0,l.zw)(i.enableCol.status),1)):(0,n.kq)("",!0),Y]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(w.getTableData(),(t=>(0,n.wy)(((0,n.wg)(),(0,n.iD)("tr",{key:t.classroom.id},["account"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",J,(0,l.zw)(t.account),1)):(0,n.kq)("",!0),(0,n._)("td",null,(0,l.zw)(t.classroom.id.toUpperCase()),1),(0,n._)("td",null,(0,l.zw)(t.classroom.building),1),(0,n._)("td",M,[(0,n.Uk)((0,l.zw)(t.classroom.name)+" ",1),(0,n.Wm)(P,{classroomID:t.classroom.id},null,8,["classroomID"])]),"period"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",H,(0,l.zw)(w.getPeriodText(t.period)),1)):(0,n.kq)("",!0),"status"in i.enableCol?((0,n.wg)(),(0,n.iD)("td",R,(0,l.zw)(w.getStatusText(t.status)),1)):(0,n.kq)("",!0),(0,n._)("td",null,[(0,n._)("span",{class:"ts-icon is-info-icon iconButton infoIconFix",title:"詳細教室資訊",onClick:e=>w.infoButton(t.classroom.id)},null,8,Z),"statusPage"!=i.tableType||0!=t.status&&2!=t.status?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",{key:0,class:"ts-icon is-x-icon iconButton-danger xIconFix",title:"取消申請",onClick:e=>w.cancelButton(t.pid)},null,8,Q)),"statusPage"!=i.tableType||1!=t.status&&6!=t.status&&7!=t.status?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",{key:1,class:"ts-icon is-trash-can-icon iconButton-danger trashcanIconFix",title:"刪除",onClick:e=>w.deleteButton(t.pid)},null,8,W)),"overviewPage_admin"==i.tableType&&2==t.status?((0,n.wg)(),(0,n.iD)("span",{key:2,class:"ts-icon is-key-icon iconButton",title:"借出鑰匙",onClick:e=>w.lendKeyButton(t.pid)},null,8,G)):(0,n.kq)("",!0),"overviewPage_admin"==i.tableType&&5==t.status?((0,n.wg)(),(0,n.iD)("span",{key:3,class:"ts-icon is-key-icon iconButton",title:"歸還鑰匙",onClick:e=>w.receiveKeyButton(t.pid)},null,8,X)):(0,n.kq)("",!0),"requestPage_admin"==i.tableType?((0,n.wg)(),(0,n.iD)("span",{key:4,class:"ts-icon is-check-icon iconButton xIconFix",title:"同意申請",onClick:e=>w.acceptButton(t.pid)},null,8,tt)):(0,n.kq)("",!0),"requestPage_admin"==i.tableType?((0,n.wg)(),(0,n.iD)("span",{key:5,class:"ts-icon is-x-icon iconButton-danger xIconFix",title:"拒絕申請",onClick:e=>w.rejectButton(t.pid)},null,8,et)):(0,n.kq)("",!0)])])),[[o.F8,w.isShow(t)]]))),128))])])])}i(7658);var nt=i(8622),ot=i(6228),lt=i(1842),st=i(7363),at=i(9895),dt=i(5591),rt={components:{"save-button":st.Z},props:{tableType:{default:null},enableCol:{default:{}},insertData:{default:[]}},data(){return{fliter:null,statusText:["申請中","申請被拒絕","申請通過 ( 未借鑰匙 )","申請通過 ( 已借鑰匙 )","借用中","借用完畢 ( 未還鑰匙 )","借用完畢 ( 已還鑰匙 )"],userPoint:{}}},created(){this.resetFliter()},methods:{getFloorOption(){try{return Object.keys(nt.B[this.fliter.building].F)}catch{}return[]},getClassroomOption(){try{return Object.keys(nt.B[this.fliter.building].F[this.fliter.floor].C)}catch{}return[]},getPeriod(){return ot.B},whenBuildingChange(){this.fliter.floor="",this.fliter.classroomID=""},whenFloorChange(){this.fliter.classroomID=""},whenStartPeriodChange(){this.fliter.endPeriod=this.fliter.startPeriod},resetFliter(){this.fliter={account:"",id:"",building:"",floor:"",classroomID:"",day:null,startPeriod:null,endPeriod:null,status:null}},isShow(t){let e=!0;t.account.includes(this.fliter.account)||(e=!1);const i=t.classroom.id.toLowerCase(),n=this.fliter.id.toLowerCase();let o=this.fliter.building;return""==this.fliter.classroomID?o+=this.fliter.floor:o+=this.fliter.classroomID,o=o.toLowerCase(),i.includes(n)||(e=!1),i.includes(o)||(e=!1),null!=this.fliter.day&&t.period.day!=this.fliter.day&&(e=!1),null!=this.fliter.startPeriod&&null!=this.fliter.endPeriod&&(this.fliter.startPeriod>=t.period.startPeriod&&this.fliter.endPeriod<=t.period.endPeriod||(e=!1)),null!=this.fliter.status&&t.status!=this.fliter.status&&(e=!1),e},getTableData(){if(void 0==this.insertData)return[];let t=[];for(let e of this.insertData){const i={pid:e.pid,account:void 0==e.account?"":e.account,classroom:(0,lt.S)(e.classroomID),period:e.period,status:e.status},n=i.classroom.name;i.classroom.name=n.slice(0,n.indexOf("(")).trim(),t.push(i)}return t},getPoint(t){return t in this.userPoint||(this.userPoint[t]=(0,dt.rp)(t)),this.userPoint[t]},getPeriodText(t){console.log(t);const e=["","星期一","星期二","星期三","星期四","星期五"];let i="";return void 0!=t&&(i=`${e[t.day]} , 第 ${t.startPeriod} 節`,t.startPeriod!=t.endPeriod&&(i+=` ~ 第 ${t.endPeriod} 節`)),i},getStatusText(t){let e="未知";return void 0!=t&&(e=this.statusText[t]),e},runConfirmDialog(t,e,i,n){const o=window.confirm(`${t} ?`);if(!o)return;const l=i(n);switch(l){case 200:alert(`${e}成功 !`);break;case 400:alert(`${e}失敗 !`);break;default:alert(`${e}成功 !`);break}window.location.reload()},infoButton(t){"user"==(0,at.cY)()?this.$router.push({name:"floorPage",query:{id:t}}):"admin"==(0,at.cY)()&&this.$router.push({name:"floorPage_admin",query:{id:t}})},cancelButton(t){this.runConfirmDialog("是否要取消申請","取消申請",dt.Bs,t)},deleteButton(t){this.runConfirmDialog("是否要刪除借用紀錄","刪除",dt.tU,t)},lendKeyButton(t){this.runConfirmDialog("是否要借出鑰匙","借用狀態更新",dt.pe,t)},receiveKeyButton(t){this.runConfirmDialog("是否拿到了歸還的鑰匙","借用狀態更新",dt.jo,t)},acceptButton(t){this.runConfirmDialog("是否要同意申請","操作",dt.ED,t)},rejectButton(t){this.runConfirmDialog("是否要拒絕申請","操作",dt.QN,t)}}},ct=i(89);const ut=(0,ct.Z)(rt,[["render",it],["__scopeId","data-v-31aa231c"]]);var ht=ut},7363:function(t,e,i){i.d(e,{Z:function(){return u}});var n=i(3396),o=i(7139);function l(t,e,i,l,s,a){return(0,n.wg)(),(0,n.iD)("span",{class:(0,o.C_)(["ts-icon is-star-icon",s.isSave?"saveButton-saved":"saveButton"]),onClick:e[0]||(e[0]=(...t)=>a.clickSaveButton&&a.clickSaveButton(...t))},null,2)}var s=i(9752),a=i(2477),d={props:["classroomID"],data(){return{isSave:!1}},async created(){this.isSave=await(0,a.Nd)(this.classroomID)},methods:{async clickSaveButton(){this.classroomID in s&&(this.isSave=!this.isSave,this.isSave?await(0,a.kw)(this.classroomID):await(0,a.z)(this.classroomID),this.isSave=await(0,a.Nd)(this.classroomID))}},watch:{async classroomID(){this.isSave=await(0,a.Nd)(this.classroomID)}}},r=i(89);const c=(0,r.Z)(d,[["render",l],["__scopeId","data-v-36c0f576"]]);var u=c},9752:function(t){t.exports=JSON.parse('{"insB07":{"building":"資工系館","name":"B07 教室 ( E化教室 )","number":"30","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"},"insB10":{"building":"資工系館","name":"B10 教室 ( E化教室 )","number":"50","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"},"insB12":{"building":"資工系館","name":"B12 教室 ( E化教室 )","number":"50","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"},"ins101":{"building":"資工系館","name":"101 視聽教室 ( 階梯教室 )","number":"70","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"},"ins105":{"building":"資工系館","name":"105 視聽教室 ( 階梯教室 )","number":"70","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"},"ins203":{"building":"資工系館","name":"203 個人電腦實驗室 ( 教學實驗室 )","number":"80","equipment":"81台主機、投影機、擴大機、麥克風、喇叭、布幕"},"ins205":{"building":"資工系館","name":"205 3D多媒體教學實驗室 ( 教學實驗室 )","number":"25","equipment":"23台mac主機、投影機、擴大機、麥克風、喇叭、布幕"},"ins212":{"building":"資工系館","name":"212 討論室 ( 教學實驗室 )","number":"65","equipment":"投影機、擴大機、麥克風、喇叭、布幕"},"ins301":{"building":"資工系館","name":"301 數位邏輯教學實驗室 ( 教學實驗室 )","number":"53","equipment":"53台主機、投影機、擴大機、麥克風、喇叭、布幕"},"ins303":{"building":"資工系館","name":"303 教室 ( E化教室 )","number":"60","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"},"ins407":{"building":"資工系館","name":"407 教室 ( E化教室 )","number":"15","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"},"ins409":{"building":"資工系館","name":"409 教室 ( E化教室 )","number":"15","equipment":"數位多功能講桌 ( 主機、投影機、擴大機、麥克風、喇叭、布幕 )"}}')},8622:function(t){t.exports=JSON.parse('{"Z":"ins","B":{"ins":{"default":"1","F":{"1":{"default":"101","bgURL":"ins1.png","C":{"101":{"id":"101","width":186,"height":162,"left":92,"top":205},"105":{"id":"105","width":205,"height":162,"left":280,"top":205},"112":{"id":"112","width":95,"height":100,"left":234,"top":54},"110A":{"id":"110A","width":69,"height":100,"left":162,"top":54},"110B":{"id":"110B","width":70,"height":100,"left":89,"top":54},"114A":{"id":"114A","width":76,"height":100,"left":331,"top":54},"114B":{"id":"114B","width":76,"height":100,"left":409,"top":54}}},"2":{"default":"203","bgURL":"ins2.png","C":{"201":{"id":"201","width":125,"height":162,"left":92,"top":205},"203":{"id":"203","width":142,"height":162,"left":220,"top":205},"205":{"id":"205","width":120,"height":162,"left":365,"top":205},"212":{"id":"212","width":190,"height":102,"left":295,"top":53},"210B":{"id":"210B","width":138,"height":102,"left":89,"top":53}}},"B1":{"default":"B07","bgURL":"insB1.png","C":{"B01":{"id":"B01","width":108,"height":74,"left":499,"top":138},"B03":{"id":"B03","width":108,"height":74,"left":388,"top":138},"B05":{"id":"B05","width":34,"height":66,"left":238,"top":158},"B07":{"id":"B07","width":54,"height":66,"left":182,"top":158},"B09":{"id":"B09","width":108,"height":66,"left":72,"top":158},"B10":{"id":"B10","width":108,"height":65,"left":499,"top":44},"B12":{"id":"B12","width":106,"height":65,"left":390,"top":44},"B14":{"id":"B14","width":65,"height":80,"left":208,"top":53},"B16":{"id":"B16","width":62,"height":80,"left":144,"top":53},"B18":{"id":"B18","width":79,"height":80,"left":63,"top":53}}}}},"ecg":{"default":"B1","F":{"6":{"default":"601","bgURL":"ecg6.png","C":{"601":{"id":"601","width":86,"height":71,"left":264,"top":24},"602":{"id":"602","width":55,"height":71,"left":353,"top":24},"603":{"id":"603","width":97,"height":47,"left":264,"top":124},"604":{"id":"604","width":46,"height":47,"left":363,"top":124},"605":{"id":"605","width":86,"height":71,"left":120,"top":24},"606":{"id":"606","width":95,"height":71,"left":23,"top":24},"607":{"id":"607","width":87,"height":71,"left":465,"top":24},"608":{"id":"608","width":122,"height":52,"left":554,"top":24},"609":{"id":"609","width":73,"height":119,"left":23,"top":96},"610":{"id":"610","width":98,"height":142,"left":578,"top":78},"611":{"id":"611","width":55,"height":80,"left":498,"top":138},"612":{"id":"612","width":22,"height":57,"left":98,"top":143}}},"7":{"default":"701","bgURL":"ecg7.png","C":{"701":{"id":"701","width":86,"height":71,"left":264,"top":24},"702":{"id":"702","width":28,"height":71,"left":352,"top":24},"703":{"id":"703","width":28,"height":71,"left":381,"top":24},"704":{"id":"704","width":144,"height":47,"left":264,"top":124},"705":{"id":"705","width":86,"height":71,"left":120,"top":24},"706":{"id":"706","width":95,"height":71,"left":23,"top":24},"707":{"id":"707","width":72,"height":85,"left":23,"top":130},"708":{"id":"708","width":87,"height":71,"left":465,"top":24},"709":{"id":"709","width":122,"height":52,"left":554,"top":24},"710":{"id":"710","width":98,"height":142,"left":578,"top":78},"711":{"id":"711","width":55,"height":80,"left":498,"top":138},"712":{"id":"712","width":62,"height":31,"left":34,"top":97}}},"B1":{"default":"B101","bgURL":"ecgB1.png","C":{"B101":{"id":"B101","width":136,"height":200,"left":276,"top":20},"B102":{"id":"B102","width":88,"height":76,"left":135,"top":60},"B103":{"id":"B103","width":72,"height":73,"left":34,"top":60},"B104":{"id":"B104","width":72,"height":75,"left":34,"top":136},"B105":{"id":"B105","width":88,"height":76,"left":463,"top":60},"B106":{"id":"B106","width":89,"height":69,"left":579,"top":60},"B107":{"id":"B107","width":110,"height":120,"left":558,"top":132}}}}}}}')},6228:function(t){t.exports=JSON.parse('{"B":[{"nth":1,"startTime":"08:20","endTime":"09:10"},{"nth":2,"startTime":"09:20","endTime":"10:10"},{"nth":3,"startTime":"10:20","endTime":"11:10"},{"nth":4,"startTime":"11:15","endTime":"12:05"},{"nth":5,"startTime":"12:10","endTime":"13:00"},{"nth":6,"startTime":"13:10","endTime":"14:00"},{"nth":7,"startTime":"14:10","endTime":"15:00"},{"nth":8,"startTime":"15:10","endTime":"16:00"},{"nth":9,"startTime":"16:05","endTime":"16:55"}]}')}}]);
//# sourceMappingURL=93.65e9afa1.js.map