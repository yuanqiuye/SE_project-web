export function getClassroomData(classroomID){ // 跟後端請求某個教室的資料
  const classroomDB = {
    "ins105": {
      id: "ins105", // 教室編號(唯一性)
      info: {
        building: "資工系館",
        name: "105 視聽教室",
        number: "70",
        equipment: "數位多功能講桌"
      }, // 教室資訊(靜態)
      isSave: true, // 該教室有被user保存嗎?
      periodData: [
        { day: 1, startPeriod: 1, endPeriod: 9, state: 0 },
        { day: 2, startPeriod: 1, endPeriod: 9, state: 0 },
        { day: 3, startPeriod: 1, endPeriod: 9, state: 0 },
        { day: 4, startPeriod: 1, endPeriod: 9, state: 0 },
        { day: 2, startPeriod: 1, endPeriod: 4, state: 1 },
        { day: 3, startPeriod: 1, endPeriod: 4, state: 2 }
      ], // 時段借用狀態: { 0: 可借用, 1: 已被借用, 2: 被自己借用 }
    }
  }; // 模擬後端資料庫
  
  const classroom_default = {
    id: classroomID,
    info: {
      building: `< 大樓名稱 >`,
      name: `< 教室名稱 >`,
      number: `< 人數 >`,
      equipment: `< 設備 >`
    },
    isSave: false,
    periodData: []
  } // 預設教室資料,勿刪
  
  // alert(`[api/floor/getClassroomData]\nclassroomID = ${classroomID}`); // debug
  if (classroomID in classroomDB) return classroomDB[classroomID];
  return classroom_default;
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
