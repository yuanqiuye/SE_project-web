import classroomInfo from "@/assets/classroom-info.json"; // 教室資訊

export function getClassroomInfo(classroomID){ // 獲得教室資料
  const classroom_default = { building: "未知的大樓", name: "未知", number: "-", equipment: "-" };
  let classroom = classroom_default;
  if (classroomID in classroomInfo) classroom = classroomInfo[classroomID];
  classroom.id = classroomID;
  return { ...classroom }; // copy
}
/*
  為什麼要多寫一個function是因為要處理沒有資料的教室
  如果是需要拿到"有資料"的全部教室代號,會直接在vue檔內 import "classroom-info.json"
*/