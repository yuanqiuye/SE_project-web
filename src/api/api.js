export function getPasswordHint(account){
  alert("getUserHint :\naccount = "+account);
  const hint = "你知道的"
  if (account == "1") return hint;
  return null;
}
/* return:
  帳號存在,回傳 hint
  帳號不存在, return null
*/

export function userLogin(account, password){
  alert("userLogin :\naccount = "+account+"\npassword = "+password);
  if (account == "1" && password == "1") return 1;
  return -1;
}
/* return:
  1: 登入成功
  -1: 帳號或密碼錯誤
  -2: 帳號遭到封鎖, 解封時間: <time>
*/

export function userRegister(account, password, hint){
  alert("userRegister :\naccount = "+account+"\npassword = "+password+"\nhint = "+hint);
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
  alert("userLogout");
}