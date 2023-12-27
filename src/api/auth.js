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
            { "pid": "1-20231126161739", "classroomID": "ins101", "period": { "day": 1, "startPeriod": 3, "endPeriod": 3 }, "status": 0 },

        ]
    },
    "123": {
        account: "123",
        password: "123",
        hint: "123",
        point: 0,
        banned: 0,
        role: 0,
        periodData: [
            { "pid": "123-20231226193634", "classroomID": "ins101", "period": { "day": 2, "startPeriod": 8, "endPeriod": 9 }, "status": 0 },
            { "pid": "123-20231226193737", "classroomID": "ins101", "period": { "day": 3, "startPeriod": 3, "endPeriod": 5 }, "status": 0 },
            { "pid": "123-20231226193739", "classroomID": "ins101", "period": { "day": 1, "startPeriod": 3, "endPeriod": 3 }, "status": 0 },

        ]
    },
    "01057133": {
        account: "01057133",
        password: "01057133",
        hint: "跟學號一樣", // 可以根据需要添加提示
        point: 3,
        banned: 0,
        role: 1,
        periodData: [
            { "pid": "01057111-20231202193635", "classroomID": "ins101", "period": { "day": 3, "startPeriod": 6, "endPeriod": 7 }, "status": 2 },
            { "pid": "01057111-20231202193734", "classroomID": "ins101", "period": { "day": 3, "startPeriod": 1, "endPeriod": 2 }, "status": 0 }, // ... 其他期间数据 ...
        ]
    },
    "01057132": {
        account: "01057132",
        password: "01057132",
        hint: "跟學號一樣", // 可以根据需要添加提示
        point: 4,
        banned: 1,
        role: 0,
        periodData: [
            { "pid": "01057902-20231202193636", "classroomID": "ins101", "period": { "day": 1, "startPeriod": 1, "endPeriod": 2 }, "status": 2 },
            // ... 其他期间数据 ...
        ]
    },
}));





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
    localStorage.setItem('loggedInAccount', account);
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

export function verifyCode(account, code) { // 檢查驗證碼是否正確
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

export function userLogout() { // 登出
    // 可修改區 start
    alert(`登出成功`); // debug
    // 可修改區 end
}

export function getRole() { // 不是api,獲取身分組
    const storedUserPeriodData = JSON.parse(localStorage.getItem('userPeriodData'));
    const account = JSON.parse(localStorage.getItem('loggedInAccount'));
    if (account in storedUserPeriodData) {
        console.log(storedUserPeriodData[account].role);
    }
    if (account in storedUserPeriodData) {
        if (storedUserPeriodData[account].role == 2) {
            return "admin";
        }
        return "user";
    }
    return "user"; // 測試中,勿動
}