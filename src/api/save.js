import user from "@/api/user-data.json"; // 後端完成後可刪

export function getIsSave(classroomID){ // user是否有收藏某間教室
  return user.saveData.includes(classroomID);
}
/*
  input:
    classroomID: 教室id
  userAccount: <string>
  
  return: <bool>
*/

export function addSave(classroomID){ // 添加收藏
  alert(`[api/save/addSave]\nclassroomID = ${classroomID}`); // debug
}
/*
  input:
    classroomID: 教室id
  userAccount: <string>
*/

export function removeSave(classroomID){ // 移除收藏
  alert(`[api/save/removeSave]\nclassroomID = ${classroomID}`); // debug
}
/*
  input:
    classroomID: 教室id
  userAccount: <string>
*/

export function getAllSave(){ // user的全部收藏
  return user.saveData;
}
/*
  userAccount: <string>
  
  return: <array>
*/