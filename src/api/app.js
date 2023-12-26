
import user from "@/api/user-data.json"; // 後端完成後可刪
// 將管理員的 enablePeriod 數據存儲到 localStorage 中
localStorage.setItem('enablePeriod', JSON.stringify({
  "ins101": [
    { "day": 1, "startPeriod": 1, "endPeriod": 4 },
    { "day": 2, "startPeriod": 1, "endPeriod": 9 },
    { "day": 3, "startPeriod": 3, "endPeriod": 7 }
  ],
  "ins105": [
    { "day": 1, "startPeriod": 1, "endPeriod": 9 },
    { "day": 2, "startPeriod": 4, "endPeriod": 9 },
    { "day": 3, "startPeriod": 3, "endPeriod": 7 }
  ]
}));


export function getUserPeriodData() {
  const loggedInAccount = localStorage.getItem('loggedInAccount');
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData'));
  const accountInfo = storedUserPeriodData[loggedInAccount];
  
  // 檢查是否找到了特定帳戶的數據
  if (accountInfo) {
    //console.log('User Period Data:', accountInfo.periodData);
    return accountInfo.periodData;
  } else {
    // 如果未找到，返回空數組或者你認為合適的默認值
    return [];
  }
}

/*
  userAccount: <string>

  return:
    請參照 user-data
*/

export function getAllUserPeriodData() {
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData'));
  
  // 檢查是否成功獲取了數據
  if (storedUserPeriodData) {
    // 返回所有用戶的借用教室數據
    //console.log('User Period Data all:', Object.values(storedUserPeriodData).map(user => user.periodData).flat());
    return Object.values(storedUserPeriodData).map(user => user.periodData).flat();
  } else {
    // 如果未成功獲取數據，返回空數組或者你認為合適的默認值
    return [];
  }
}

/*
  return:
    請參照 user-data
*/

export function getEnablePeriodData(classroomID) {
  // 從 localStorage 中獲取 enablePeriod 數據
  const storedEnablePeriod = JSON.parse(localStorage.getItem('enablePeriod'));

  // 如果 classroomID 在 storedEnablePeriod 中存在，則返回對應的時段數據，否則返回空數組
  return classroomID in storedEnablePeriod ? storedEnablePeriod[classroomID] : [];
}

/*
  input:
    classroomID: <string>教室ID
  
  return:
    請參照 enable-period.json
*/

export function getAllEnablePeriodData() {
  // 从 localStorage 中获取 enablePeriod 数据
  const storedEnablePeriod = JSON.parse(localStorage.getItem('enablePeriod'));

  // 返回存储的全部 enablePeriod 数据
  return storedEnablePeriod || {};
}

/*
  return:
    請參照 enable-period.json
*/

export function setEnablePeriod(classroomID, newEnablePeriod) {
  // 获取当前存储在 localStorage 中的数据
  const storedEnablePeriod = JSON.parse(localStorage.getItem('enablePeriod')) || {};

  // 更新特定教室的可借時段
  storedEnablePeriod[classroomID] = newEnablePeriod;

  // 更新 localStorage 中的数据
  localStorage.setItem('enablePeriod', JSON.stringify(storedEnablePeriod));

  // 打印调试信息
  console.log(`[api/app/setEnablePeriod]\nclassroomID = ${classroomID}\nenablePeriod = ${JSON.stringify(newEnablePeriod)}`);

  return 200;
}

export function generateUniquePID(account) {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始，需要加 1
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${account}-${year}${month}${day}${hours}${minutes}${seconds}`;
}


export function sendApply(classroomID, selectedPeriod) {
  // 获取当前存储在 localStorage 中的用户期间数据
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData')) || {};

  // 获取当前存储在 localStorage 中的登录用户帐号
  const loggedInAccount = localStorage.getItem('loggedInAccount');

  // 创建新的期间数据对象
  const newPeriodData = {
    pid: generateUniquePID(loggedInAccount),
    classroomID,
    period: selectedPeriod,
    status: 0,
  };

  // 添加新的期间数据到用户的数据中
  storedUserPeriodData[loggedInAccount].periodData = storedUserPeriodData[loggedInAccount].periodData || [];
  storedUserPeriodData[loggedInAccount].periodData.push(newPeriodData);

  // 更新 localStorage 中的用户期间数据
  localStorage.setItem('userPeriodData', JSON.stringify(storedUserPeriodData));

  // 打印调试信息
  //console.log(`[api/app/sendApply]\nclassroomID = ${classroomID}\nselectedPeriod = ${JSON.stringify(selectedPeriod)}`);

  return 200;
}



/*
  input:
    classroomID: <string>教室ID
    selectedPeriod: { day: <int>星期幾, startPeriod: <int>開始節數, endPeriod: <int>結束節數 }
  userAccount: <string>
  
  return:
    if 申請成功 -> return 200
    if 申請失敗 -> return 400
*/

export function cancelApply(pid) {
  // 获取当前存储在 localStorage 中的用户期间数据
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData')) || {};

  // 遍历用户数据，找到包含指定 pid 的期间数据并将其移除
  for (const userAccount in storedUserPeriodData) {
    const userPeriodData = storedUserPeriodData[userAccount];
    userPeriodData.periodData = userPeriodData.periodData.filter(item => item.pid !== pid);
  }

  // 更新 localStorage 中的用户期间数据
  localStorage.setItem('userPeriodData', JSON.stringify(storedUserPeriodData));

  // 打印调试信息
  console.log(`[api/app/cancelApply]\npid = ${pid}`);

  return 200;
}

/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function deletePeriodData(pid) {
  // 获取当前存储在 localStorage 中的用户期间数据
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData')) || {};

  // 遍历用户数据，找到包含指定 pid 的期间数据并将其移除
  for (const userAccount in storedUserPeriodData) {
    const userPeriodData = storedUserPeriodData[userAccount];
    userPeriodData.periodData = userPeriodData.periodData.filter(item => item.pid !== pid);
  }

  // 更新 localStorage 中的用户期间数据
  localStorage.setItem('userPeriodData', JSON.stringify(storedUserPeriodData));

  // 打印调试信息
  console.log(`[api/app/deletePeriodData]\npid = ${pid}`);

  return 200;
}

/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function LendKey(pid){ // 借出鑰匙 (admin)
  // 可修改區 start
  alert(`[api/app/LendKey]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function ReceiveKey(pid){ // 收到歸還的鑰匙 (admin)
  // 可修改區 start
  alert(`[api/app/ReceiveKey]\npid = ${pid}`); // debug
  return 200;
  // 可修改區 end
}
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function acceptRequest(pid) {
  // 获取当前存储在 localStorage 中的所有时段数据
  const allUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData')) || {};

  // 查找特定 pid 对应的时段数据的索引
  //const targetIndex = Object.keys(allUserPeriodData).findIndex(key => allUserPeriodData[key].pid === pid);
  console.log(Object.keys(allUserPeriodData[1].periodData[1]));
  // 检查是否找到了特定 pid 的时段数据
  
    // 从对象中删除该时段数据
    allUserPeriodData[1].periodData[1].status=2;

    // 更新 localStorage 中的所有时段数据
    localStorage.setItem('userPeriodData', JSON.stringify(allUserPeriodData));

    // 打印调试信息
    console.log(`[api/app/rejectRequest] Rejected and removed request for pid = ${pid}`);
    return 200; // 成功
  }
/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function rejectRequest(pid) {
  // 获取当前存储在 localStorage 中的所有时段数据
  const allUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData')) || {};

  // 查找特定 pid 对应的时段数据的索引
  //const targetIndex = Object.keys(allUserPeriodData).findIndex(key => allUserPeriodData[key].pid === pid);
  console.log(Object.keys(allUserPeriodData[1].periodData[1]));
  // 检查是否找到了特定 pid 的时段数据
  
    // 从对象中删除该时段数据
    allUserPeriodData[1].periodData[1].status=9;

    // 更新 localStorage 中的所有时段数据
    localStorage.setItem('userPeriodData', JSON.stringify(allUserPeriodData));

    // 打印调试信息
    console.log(`[api/app/rejectRequest] Rejected and removed request for pid = ${pid}`);

    return 200; // 成功
  }
  

/*
  input:
    pid: <string>時段ID (唯一性)
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function getAllUserPoint() {
  // 获取当前存储在 localStorage 中的所有用户数据
  const allUserData = JSON.parse(localStorage.getItem('userPeriodData')) || {};
  // 将用户数据转化为数组形式
  const allUsers = Object.values(allUserData);
  // 从用户数据中提取違規點數信息
  console.log(allUserData["01057902"].point);
  const allUserPoint = allUsers.map(user => ({
    account: user.account,
    role: user.role,
    point: user.point,
    banned: user.banned,
  }));

  return allUserPoint;
}


export function getUserPoint(account){ // 獲取user的記點狀況 (admin)
  // 可修改區 start
  account
  return user.point;
  // 可修改區 end
}
/*
  input:
    account: <string>學號(帳號)
  
  return:
    <int>違規點數
*/

export function setUserPoint(){ // 修改user的記點狀況 (admin)
  // 可修改區 start
  const allUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData')) || {};
  allUserPeriodData["01057901"].point=4;
  allUserPeriodData["01057902"].point=2;
  localStorage.setItem('userPeriodData', JSON.stringify(allUserPeriodData));
  getAllUserPoint();
  return 200;
  // 可修改區 end
}
/*
  input:
    account: <string>學號(帳號)
    point: <int>違規點數
  
  return:
    if 成功 -> return 200
    if 失敗 -> return 400
*/

export function getUserBanState(account){
  // 可修改區 start
  account
  return 0;
  // 可修改區 end
}

export function setUserBanState(account, state){
  // 可修改區 start
  alert(`[api/app/setUserBanState]\naccount = ${account}\nstate = ${state}`); // debug
  return 200;
  // 可修改區 end
}
