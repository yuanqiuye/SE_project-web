import user from "@/api/user-data.json"; // 後端完成後可刪
import classroomPeriodData from "@/api/period-data.json"; // 後端連接後可刪

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

export function getClassroomPeriodData(classroomID){ // 跟後端拿某個教室全部的借用資料
  // 可修改區 start
  if (classroomID in classroomPeriodData) return classroomPeriodData[classroomID];
  // 可修改區 end
  return { idle: [], used: [] };
}
/*
  input:
    classroomID: <string>教室ID
  
  return:
    請參照 period-data.json
*/

export function getAllClassroomPeriodData(){ // 跟後端拿全部教室的借用資料
  return classroomPeriodData;
}

export function sendApply(classroomID, selectedPeriod){ // 送出借用教室的申請
  // 可修改區 start
  alert(`[api/floor/sendApply]\nclassroomID = ${classroomID}\nselectedPeriod = ${selectedPeriod}`); // debug
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

export function cancelApply(classroomID){ // 取消教室申請
  // 可修改區 start
  alert(`[api/floor/cancelApply]\nclassroomID = ${classroomID}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    classroomID: <string>教室ID
  userAccount: <string>
  
  return:
    if 取消成功 -> return 200
    if 取消失敗 -> return 400
*/

export function deletePeriodData(classroomID){ // 刪除特定狀態的借用紀錄 ( ex: 申請被拒絕 / 借用完畢(已還鑰匙) / 已取消申請 )
  // 可修改區 start
  alert(`[api/floor/deletePeriodData]\nclassroomID = ${classroomID}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    classroomID: <string>教室ID
  userAccount: <string>
  
  return:
    if 刪除成功 -> return 200
    if 刪除失敗 -> return 400
*/
