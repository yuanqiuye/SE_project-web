// 存储 userPeriodData 到 localStorage
localStorage.setItem('userPeriodData', JSON.stringify({
  "1": {
    account: "1",
    password: "1",
    hint: "你知道的",
    point: 0,
    banned: 0,
    role: 2,
    periodData: [
      { "pid": "1-20231202193634", "classroomID": "ins101", "period": { "day": 2, "startPeriod": 3, "endPeriod": 4 }, "status": 3 },
      { "pid": "1-20231202193734", "classroomID": "ins101", "period": { "day": 3, "startPeriod": 1, "endPeriod": 2 }, "status": 0 },
      
    ]
  },
  "01057901": {
    account: "01057901",
    password: "password2",
    hint: "", // 可以根据需要添加提示
    point: 3,
    banned: 0,
    role: 1,
    periodData: [
      { "pid": "01057111-20231202193635", "classroomID": "ins101", "period": { "day": 3, "startPeriod": 6, "endPeriod": 7 }, "status": 2 },
      // ... 其他期间数据 ...
    ]
  },
  "01057902": {
    account: "01057902",
    password: "password3",
    hint: "", // 可以根据需要添加提示
    point: 4,
    banned: 1,
    role: 0,
    periodData: [
      { "pid": "01057902-20231202193636", "classroomID": "ins101", "period": { "day": 1, "startPeriod": 1, "endPeriod": 2 }, "status": 2 },
      // ... 其他期间数据 ...
    ]
  },
}));

// 从 localStorage 获取 userPeriodData
const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData'));

// 输出存储的数据
console.log(storedUserPeriodData);



export function getPasswordHint(account) {
  // 从 localStorage 获取 userPeriodData
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData'));

  if (account in storedUserPeriodData) {
    return storedUserPeriodData[account].hint || null;
  }

  return null; // 如果帳號不存在，返回 null 或其他預設值
}


/*
  input:
    account: <string>輸入框的帳號
  
  return:
    hint: <string>密碼提示 | <null>
*/

export function userLogin(account, password) {
  // 从 localStorage 获取 userPeriodData
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData'));

  if (account in storedUserPeriodData && storedUserPeriodData[account].password === password) {
    // 登入成功，将账号信息存储到 localStorage
    localStorage.setItem('loggedInAccount', account);

    return 200; // 登入成功
  }

  return 400; // 帳號或密碼錯誤
}


/*
  input:
    account: <string>輸入框的帳號
    password: <string>輸入框的密碼
  
  return:
    if 登入成功 -> return 200
    if 帳號或密碼錯誤 -> return 400
    if 帳號遭到封鎖 -> return 403
*/

export function userRegister(account, password, hint) {
  // 从 localStorage 获取 userPeriodData
  const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData')) || {};

  // 檢查帳號是否已存在
  if (account in storedUserPeriodData) {
    return 400; // 帳號已存在
  }

  // 新建帳號
  const newUser = {
    account: account,
    password: password,
    hint: hint || "", // 可以根據需要添加提示
    point: 0,
    banned: 0,
    periodData: [],
  };

  // 更新 localStorage 中的数据
  localStorage.setItem('userPeriodData', JSON.stringify({
    ...storedUserPeriodData,
    [account]: newUser
  }));

  return 200; // 註冊成功
}


/*
  input:
    account: <string>輸入框的帳號
    password: <string>輸入框的密碼
    hint: <string>密碼提示
  
  return:
    if 註冊成功 -> return 200
    if 帳號已存在 -> return 400
*/

export function verifyCode(account, code){ // 檢查驗證碼是否正確
  // 可修改區 start
  alert(`[api/auth/verifyCode]\naccount = ${account}\ncode = ${code}`); // debug
  // todo 如果驗證成功,直接變成登入狀態 (註冊成功,直接自動登入)
  return 200;
  // 可修改區 end
}
/*
  input:
    account: <string>帳號
    code: <string>驗證碼
  
  return:
    if 驗證碼正確 -> return 200
    if 驗證碼錯誤 -> return 400
*/

export function userLogout(){ // 登出
  // 可修改區 start
  alert(`登出成功`); // debug
  // 可修改區 end
}

export function getRole(){ // 不是api,獲取身分組
  return "admin"; // 測試中,勿動
}