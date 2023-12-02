export function getPasswordHint(account){ // 獲得某個帳號的密碼提示
  let hint = null; // 預設回傳的密碼提示
  
  // 可修改區 start
  alert(`[api/auth/getPasswordHint]\naccount = ${account}`); // debug
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

export function userLogin(account, password){ // 送出登入請求
  // 可修改區 start
  alert(`[api/auth/userLogin]\naccount = ${account}\npassword = ${password}`); // debug
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

export function userRegister(account, password, hint){ // 送出註冊帳號請求
  // 可修改區 start
  // todo 叫後端傳送驗證碼到user的海大信箱
  alert(`[api/auth/userRegister]\naccount = ${account}\npassword = ${password}\nhint = ${hint}`); // debug
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
  alert("[api/auth/userLogout]"); // debug
  // 可修改區 end
}

export function getRole(){ // 不是api,獲取身分組
  return "admin"; // 測試中,勿動
}