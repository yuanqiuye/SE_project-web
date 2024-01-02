export async function getPasswordHint(account) { // 獲得某個帳號的密碼提示
    try {
        const response = await fetch('https://qiuye.mooo.com/api/auth/getPasswordHint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'Origin',
            },
            credentials: 'include',
            body: JSON.stringify({ account }),
        });

        if (!response.ok) {
            throw new Error('请求失败');
        }

        const data = await response.json();
        return data.hint;
    } catch (error) {
        console.error('获取密码提示失败', error);
        throw error;
    }
}
/*
  input:
    account: <string>輸入框的帳號
  
  return:
    hint: <string>密碼提示 | <null>
*/

export async function userLogin(account, password) { // 送出登入請求
    try {
        // account = account.toString();
        const response = await fetch('https://qiuye.mooo.com/api/auth/userLogin', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'Origin',
            },
            body: JSON.stringify({ account, password }),
        });

        if (!response.ok) {
            throw new Error('登录失败');
        }

        const data = await response.json();

        if (data.status == "0") {
            localStorage.setItem('loggedInAccount', account);
            localStorage.setItem('level', data.level);

            return 200;
        } else if (data.status == "-1")
            return 400;
        else if (data.status == "-2")
            return 403;

    } catch (error) {
        console.error('登录请求失败', error);
        throw error;
    }
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
//
export async function userRegister(account, password, hint) {
    try {
        const response = await fetch('https://qiuye.mooo.com/api/auth/userRegister', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'Origin',
            },
            body: JSON.stringify({ account, password, hint }),
        });

        if (!response.ok) {
            throw new Error('注册失败');
        }

        const data = await response.json();

        if (data.status == "-2") {
            console.log((data.status));
            return 400; // 用户已存在
        } else {
            localStorage.setItem('loggedInAccount', account);
            localStorage.setItem('level', data.level);
            return 200; //成功
        }


    } catch (error) {
        console.error('註冊请求失败', error);
        throw error;
    }
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

//async
export function verifyCode(account, code) { // 檢查驗證碼是否正確
    // 可修改區 start
    // try {
    //   const response = await fetch('/api/auth//userRegister', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ account, code }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('登录失败');
    //   }

    //   const data = await response.json();

    //   return data.status; // 假设后端返回 { status: 200 }，其中 status 是登录状态码
    // } catch (error) {
    //   console.error('登录请求失败', error);
    //   throw error;
    // }
    // todo 如果驗證成功,直接變成登入狀態 (註冊成功,直接自動登入)
    account
    code
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

//不確定要甚麼?
export function userLogout() { // 登出
    // 可修改區 start
    alert("[api/auth/userLogout]"); // debug
    // 可修改區 end
}

export function getRole() { // 不是api,獲取身分組
    const level = JSON.parse(localStorage.getItem('level'));
    if (level == 1) {
        return "user";
    } else {
        return "admin";
    }
    // 測試中,勿動
}