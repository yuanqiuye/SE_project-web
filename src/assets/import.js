import classroomInfo from "@/assets/classroom-info.json"; // 教室資訊

export function getClassroomInfo(classroomID){ // 獲得教室資料
  const classroom_default = { building: "未知的大樓", name: "未知", number: "-", equipment: "-" };
  let classroom = classroom_default;
  if (classroomID in classroomInfo) classroom = classroomInfo[classroomID];
  classroom.id = classroomID;
  return classroom;
}