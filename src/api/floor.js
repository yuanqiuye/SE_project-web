import classroomDB from "@/api/classroom-data.json";

export function getClassroomData(classroomID){ // 跟後端請求某個教室的資料
  const classroom_default = {
    info: { building: "未知的大樓", name: "未知", number: "-", equipment: "-" },
    isSave: false,
    periodData: []
  } // 預設教室資料,勿刪
  
  let classroom = classroom_default; // 如果找不到資料則回傳default
  if (classroomID in classroomDB.C){
    classroom = classroomDB.C[classroomID];
    
    classroom.periodData = [ // for test
      { day: 1, startPeriod: 1, endPeriod: 9, state: 0 },
      { day: 2, startPeriod: 1, endPeriod: 9, state: 0 },
      { day: 3, startPeriod: 1, endPeriod: 9, state: 0 },
      { day: 4, startPeriod: 1, endPeriod: 9, state: 0 },
      { day: 2, startPeriod: 1, endPeriod: 4, state: 1 },
      { day: 3, startPeriod: 1, endPeriod: 4, state: 2 }
    ] // 時段借用狀態: { 0: 可借用, 1: 已被借用, 2: 被自己借用 }
  }
  classroom.id = classroomID;
  
  return classroom;
}

export function updateSave(classroomID, isSave){ // 修改user的收藏data
  alert(`[api/floor/updateSave]\nclassroomID = ${classroomID}\nisSave = ${isSave}`); // debug
  return 1;
}
/* return:
  1: update success
  -1: update failed
*/

export function sendApply(selectedPeriod){ // 送出借用教室的申請
  alert(`[api/floor/sendApply]\nselectedPeriod = ${selectedPeriod}`); // debug
  return 1;
}
/* return:
  1: apply success
  -1: apply failed
*/
