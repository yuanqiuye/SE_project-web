export function getClassroomData(classroomID){ // 跟後端請求某個教室的資料
  const classroomDB = {
    "ins105": {
      id: "ins105", // 教室編號(唯一性)
      info: { building: "資工系館", name: "105 視聽教室", number: "70", equipment: "數位多功能講桌" }, // 教室資訊(靜態)
      isSave: true, // 對於當前使用者是否被保存
      periodData: [
        { day: 1, startPeriod: 1, endPeriod: 4, state: 0 },
        { day: 2, startPeriod: 1, endPeriod: 4, state: 1 },
        { day: 3, startPeriod: 1, endPeriod: 4, state: 2 }
      ], // 時段借用狀態: { 0: 可借用, 1: 已被借用, 2: 被自己借用 }
    }
  }; // 模擬後端資料庫
  
  return classroomDB[classroomID];
}

export function updateSave(/* isSave */){
  return 1;
}
/* return:
  1: update success
  -1: update failed
*/