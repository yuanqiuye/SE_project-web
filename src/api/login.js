export function getPasswordHint(account){
  alert(`[api/login/getPasswordHint]\naccount = ${account}`); // debug
  const hint = "你知道的"
  if (account == "1") return hint;
  return null;
}
/* return:
  帳號存在,回傳 hint
  帳號不存在, return null
*/

export function userLogin(account, password){
  alert(`[api/login/userLogin]\naccount = ${account}\npassword = ${password}`); // debug
  if (account == "1" && password == "1") return 1;
  return -1;
}
/* return:
  1: 登入成功
  -1: 帳號或密碼錯誤
  -2: 帳號遭到封鎖, 解封時間: <time>
*/

export function userRegister(account, password, hint){
  alert(`[api/login/userRegister]\naccount = ${account}\npassword = ${password}\nhint = ${hint}`); // debug
  if (account == "" || password == "" || hint == "") return -2;
  if (account == "1" && password == "1") return 2;
  return 1;
}
/* return:
  2: 帳號已註冊,密碼正確,將自動登入
  1: 註冊成功,將自動登入
  -1: 帳號已存在
  -2: 註冊資料未輸入完整
*/

export function userLogout(){
  alert("[api/login/userLogout]"); // debug
}