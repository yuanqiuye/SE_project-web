// import user from "@/api/user-data.json"; // 後端完成後可刪

export function getIsSave(classroomID) { // user是否有收藏某間教室
  var arr = JSON.parse(localStorage.getItem('issave'));
  if (arr == null) {
      arr = [];
  }
  console.log(arr)
  return arr.includes(classroomID);
  // return false;
}
/*
input:
classroomID: 教室id
userAccount: <string>

return: <bool>
*/

export function addSave(classroomID) { // 添加收藏
  // alert(`[api/save/addSave]\nclassroomID = ${classroomID}`); // debug
  var arr = JSON.parse(localStorage.getItem('issave'));
  if (arr == null) {
      arr = [];
  }
  arr.push(classroomID);
  localStorage.setItem('issave', JSON.stringify(arr))
  console.log(arr)
}
/*
input:
classroomID: 教室id
userAccount: <string>
*/

export function removeSave(classroomID) { // 移除收藏
  var arr = JSON.parse(localStorage.getItem('issave'));
  if (arr == null) {
      arr = [];
  }
  const index = arr.indexOf(classroomID);
  if (index > -1) { // only splice array when item is found
      arr.splice(index, 1); // 2nd parameter means remove one item only
  }
  localStorage.setItem('issave', JSON.stringify(arr))
      // alert(`[api/save/removeSave]\nclassroomID = ${classroomID}`); // debug
}
/*
input:
classroomID: 教室id
userAccount: <string>
*/

export function getAllSave() { // user的全部收藏
  var arr = JSON.parse(localStorage.getItem('issave'));
  if (arr == null) {
      arr = [];
  }
  console.log(arr);
  return arr;
}
/*
userAccount: <string>

return: <array>
*/