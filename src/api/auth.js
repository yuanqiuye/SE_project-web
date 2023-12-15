//async
export function getPasswordHint(account) { // 獲得某個帳號的密碼提示
  let hint = null; // 預設回傳的密碼提示

  // 可修改區 start
  // try {
  //   const response = await fetch('/api/auth/getPasswordHint', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ account }),
  //   });

  //   if (!response.ok) {
  //     throw new Error('请求失败');
  //   }

  //   const data = await response.json();
  //   return data.hint;
  // } catch (error) {
  //   console.error('获取密码提示失败', error);
  //   throw error;
  // }
  if (account == "1") hint = "你知道的"; // 如果帳號存在,將 hint 設為該帳號的密碼提示
  // 可修改區 end

  return hint;
}
/*
  input:
    account: <string>輸入框的帳號
  
  return:
    hint: <string>密碼提示 | <null>
*/
//async
export function userLogin(account, password) { // 送出登入請求
  // 可修改區 start
  // try {
  //   const response = await fetch('/api/auth//userLogin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ account, password }),
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

  if (account == "1" && password == "1") return 200;
  // 可修改區 end
  return 400;
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
//async
export function userRegister(account, password, hint) { // 送出註冊帳號請求
  // 可修改區 start
  // todo 叫後端傳送驗證碼到user的海大信箱
  // try {
  //   const response = await fetch('/api/auth//userRegister', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ account, password, hint }),
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
  password
  hint
  if (account == "1") return 400;
  return 200;
  // 可修改區 end
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
  return "admin"; // 測試中,勿動
}