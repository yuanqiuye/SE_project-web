export function getClassroomPeriodData(classroomID){ // 跟後端拿某個教室全部的借用資料
  const example_classroomPeriodData = {
    "ins101": [
      { account: null, day: 1, startPeriod: 1, endPeriod: 4, state: 0 },
      { account: null, day: 2, startPeriod: 1, endPeriod: 4, state: 0 },
    ],
    "ins105": [
      { account: null, day: 2, startPeriod: 1, endPeriod: 4, state: 0 },
      { account: null, day: 3, startPeriod: 1, endPeriod: 4, state: 0 },
    ],
    "ins203": [
      { account: null, day: 3, startPeriod: 1, endPeriod: 4, state: 0 },
      { account: null, day: 4, startPeriod: 1, endPeriod: 4, state: 0 },
    ],
  };
  
  if (classroomID in example_classroomPeriodData) return example_classroomPeriodData[classroomID];
  return [];
}
/*
  input:
    classroomID: <string>教室ID
  
  return:
    <array> 同 example_classroomPeriodData
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