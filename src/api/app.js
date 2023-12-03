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

export function getEnablePeriodData(classroomID){ // 跟後端拿某個教室全部的借用資料
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

export function getAllEnablePeriodData(){ // 跟後端拿全部教室的借用資料
  return enablePeriod;
}
/*
  return:
    請參照 enable-period.json
*/

export function sendApply(classroomID, selectedPeriod){ // 送出借用教室的申請
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
    if 取消成功 -> return 200
    if 取消失敗 -> return 400
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
    if 取消成功 -> return 200
    if 取消失敗 -> return 400
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
    if 取消成功 -> return 200
    if 取消失敗 -> return 400
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
    if 取消成功 -> return 200
    if 取消失敗 -> return 400
*/

