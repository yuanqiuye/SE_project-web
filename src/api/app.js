import enablePeriod from "@/api/enable-period.json"; // 後端連接後可刪
import user from "@/api/user-data.json"; // 後端完成後可刪

export function getUserPeriodData(){ // 獲取user的借用資料
  // 可修改區 start
  return user.periodData;
  // 可修改區 end
}
/*
  userAccount: <string>

  return:
    請參照 user-data
*/

export function getAllUserPeriodData(){ // 獲取所有user的借用資料
  // 可修改區 start
  return user.periodData;
  // 可修改區 end
}
/*
  return:
    請參照 user-data
*/

export function getEnablePeriodData(classroomID){ // 跟後端拿某間教室的可借時段
  // 可修改區 start
  if (classroomID in enablePeriod) return enablePeriod[classroomID];
  // 可修改區 end
  return [];
}
/*
  input:
    classroomID: <string>教室ID
  
  return:
    請參照 enable-period.json
*/

export function getAllEnablePeriodData(){ // 跟後端拿全部教室的可借時段
  return enablePeriod;
}
/*
  return:
    請參照 enable-period.json
*/

export function setEnablePeriod(classroomID, enablePeriod){ // 修改某間教室的可借時段
  // 可修改區 start
  alert(`[api/app/setEnablePeriod]\nclassroomID = ${classroomID}\nenablePeriod.length = ${enablePeriod.length}`); // debug
  return 200;
  // 可修改區 end
}

export function sendApply(classroomID, selectedPeriod){ // 送出借用教室的申請 (user)
  // 可修改區 start
  alert(`[api/app/sendApply]\nclassroomID = ${classroomID}\nselectedPeriod = ${selectedPeriod}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    classroomID: <string>教室ID
    selectedPeriod: { day: <int>星期幾, startPeriod: <int>開始節數, endPeriod: <int>結束節數 }
  userAccount: <string>
  
  return:
    if 申請成功 -> return 200
    if 申請失敗 -> return 400
*/

export function cancelApply(pid){ // 取消教室申請 (user)
  // 可修改區 start
  alert(`[api/app/cancelApply]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function deletePeriodData(pid){ // 刪除特定狀態的借用紀錄 (user) ( ex: 申請被拒絕 / 借用完畢(已還鑰匙) / 已取消申請 )
  // 可修改區 start
  alert(`[api/app/deletePeriodData]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function LendKey(pid){ // 借出鑰匙 (admin)
  // 可修改區 start
  alert(`[api/app/LendKey]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function ReceiveKey(pid){ // 收到歸還的鑰匙 (admin)
  // 可修改區 start
  alert(`[api/app/ReceiveKey]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function acceptRequest(pid){ // 接受一個時段申請 (admin)
  // 可修改區 start
  alert(`[api/app/acceptRequest]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function rejectRequest(pid){ // 拒絕一個時段申請 (admin)
  // 可修改區 start
  alert(`[api/app/rejectRequest]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function getAllUserPoint(){ // 獲取所有的user的計點狀況 (admin)
  return [
    { account: "01057900", role: 0, point: 2, banned: 1 },
    { account: "01057901", role: 1, point: 3, banned: 0 },
    { account: "01057902", role: 2, point: 4, banned: 0 },
  ];
}

export function getUserPoint(account){ // 獲取user的記點狀況 (admin)
  // 可修改區 start
  account
  return user.point;
  // 可修改區 end
}
/*
  input:
    account: <string>學號(帳號)
  
  return:
    <int>違規點數
*/

export function setUserPoint(account, point){ // 修改user的記點狀況 (admin)
  // 可修改區 start
  alert(`[api/app/setUserPoint]\naccount = ${account}\npoint = ${point}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    account: <string>學號(帳號)
    point: <int>違規點數
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function getUserBanState(account){
  // 可修改區 start
  account
  return 0;
  // 可修改區 end
}

export function setUserBanState(account, state){
  // 可修改區 start
  alert(`[api/app/setUserBanState]\naccount = ${account}\nstate = ${state}`); // debug
  return 200;
  // 可修改區 end
}
