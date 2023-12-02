import user from "@/api/user-data.json"; // 後端完成後可刪
import periodData from "@/api/period-data.json"; // 後端連接後可刪

export function getUserPeriodData(){
  // 可修改區 start
  return user.periodData;
  // 可修改區 end
}
/*
  return:
    請參照 user-data
*/

export function getClassroomPeriodData(classroomID){ // 跟後端拿某個教室全部的借用資料
  // 可修改區 start
  if (classroomID in periodData) return periodData[classroomID];
  // 可修改區 end
  return { idle: [], used: [] };
}
/*
  input:
    classroomID: <string>教室ID
  
  return:
    請參照 period-data.json
*/

export function sendApply(classroomID, selectedPeriod){ // 送出借用教室的申請
  // 可修改區 start
  alert(`[api/floor/sendApply]\nclassroomID = ${classroomID}\nselectedPeriod = ${selectedPeriod}`); // debug
  return 1;
  // 可修改區 end
}
/*
  input:
    classroomID: <string>教室ID
    selectedPeriod: { day: <int>星期幾, startPeriod: <int>開始節數, endPeriod: <int>結束節數 }
  userAccount: <string>
  
  return:
    if 申請成功 -> return 1
    if 申請失敗 -> return -1
*/