// !!! 警告 !!!
// 嘗試修改不是"可修改區"的code,會導致不可預期的錯誤!

import classroomDB from "@/api/classroom-data.json"; // 後端實裝後可刪

export function getClassroomData(classroomID){ // 跟後端請求某個教室的資料
  const classroom_default = {
    id: null, // 教室的唯一id, example: "ins101"
    info: { building: "未知的大樓", name: "未知", number: "-", equipment: "-" }, // 教室的基本資料 (不變)
    isSave: false, // 教室是否被user收藏
    periodData: [] // 教室被所有人借的情況
  };
  
  let classroom = classroom_default; // 如果找不到資料則回傳default
  
  // 可修改區 start
  if (classroomID in classroomDB.C) classroom = classroomDB.C[classroomID];
  // 可修改區 end
  
  classroom.id = classroomID;
  
  return classroom;
}
/*
  input:
    classroomID: <string>教室的唯一id, example: "ins101"
  
  return:
    classroom: 請參考 function getClassroomData() 內的 classroom_default
*/

export function updateSave(classroomID, isSave){ // 修改user的收藏data
  // 可修改區 start
  alert(`[api/floor/updateSave]\nclassroomID = ${classroomID}\nisSave = ${isSave}`); // debug
  return 1;
  // 可修改區 end
}
/*
  input:
    classroomID: <string>教室的唯一id, example: "ins101"
    isSave: <bool>是否收藏 -> 更新後端
  userName: <string>

  return:
    1: update success
    -1: update failed
*/

export function sendApply(classroom, selectedPeriod){ // 送出借用教室的申請
  // 可修改區 start
  alert(`[api/floor/sendApply]\nselectedPeriod = ${selectedPeriod}`); // debug
  return 1;
  // 可修改區 end
}
/*
  input:
    classroom: 同 function getClassroomData() 裡的 classroom
    selectedPeriod: { day: <int>星期幾, startPeriod: <int>開始節數, endPeriod: <int>結束節數 }
  userName: <string>
  
  return:
    1: apply success
    -1: apply failed
*/
