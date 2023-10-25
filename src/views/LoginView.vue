<template>
  <div class="ts-center">
    <div class="login" v-show="loginPage.show">
      <div class="login-title">教室預約系統</div>
      <div class="login-inputbox">
        <input placeholder="學號" v-model="loginPage.input.account">
        <input placeholder="密碼" v-model="loginPage.input.password">
        <div class="login-option">
          <div class="login-option-forget" @click="showPasswordHint()">忘記密碼</div>
          <div class="login-option-register" @click="switchSubPage('register')">註冊</div>
        </div>
        <div class="login-warning" v-show="loginPage.warning.show" v-html="loginPage.warning.text"></div>
      </div>
      <button class="login-button ts-button is-large" @click="login()">登入</button>
    </div>
    <div class="login register" v-show="registerPage.show">
      <div class="register-backButton" @click="switchSubPage('login')">
        <span class="register-backButton-backIcon ts-icon is-angles-left-icon"></span>返回
      </div>
      <div class="register-title">帳號註冊</div>
      <div class="login-inputbox">
        <input placeholder="學號" v-model="registerPage.input.account">
        <input placeholder="密碼" v-model="registerPage.input.password">
        <input placeholder="忘記密碼提示" maxlength="15" v-model="registerPage.input.hint">
        <div class="login-warning" v-show="registerPage.warning.show" v-html="registerPage.warning.text"></div>
      </div>
      <button @click="register()" class="login-button ts-button is-large">註冊</button>
    </div>
  </div>
</template>

<script>
  function getPasswordHint(account){ // 與後端連接
    alert("getUserHint :\naccount = "+account);
    const hint = "你知道的"
    if (account == "1") return hint;
    return null;
    /*
      return:
        帳號存在,回傳
        帳號不存在, return null
    */
  }
  function userLogin(account, password){ // 與後端連接
    alert("userLogin :\naccount = "+account+"\npassword = "+password);
    if (account == "1" && password == "1") return 1;
    return -1;
    /*
      return:
        1: 登入成功
        -1: 帳號或密碼錯誤
        -2: 帳號遭到封鎖, 解封時間: <time>
    */
  }
  function userRegister(account, password, hint){
    alert("userRegister :\naccount = "+account+"\npassword = "+password+"\nhint = "+hint);
    if (account == "1" && password == "1") return 2;
    if (account == "" || password == "" || hint == "") return -2;
    return 1;
    /*
      return:
        2: 帳號已註冊,密碼正確,將自動登入
        1: 註冊成功,將自動登入
        -1: 帳號已存在
        -2: 註冊資料未輸入完整
    */
  }
  
  export default{
    data(){
      return {
        loginPage: {
          show: true,
          input: { account: "", password: "" },
          warning: { show: false, text: "" }
        },
        registerPage: {
          show: false,
          input: { account: "", password: "", hint: "" },
          warning: { show: false, text: "" }
        }
      }
    },
    methods: {
      switchSubPage(subPageName){
        if (subPageName == "login"){
          this.registerPage.show = false;
          this.loginPage = {
            input: { account: "", password: "" },
            warning: { show: false, text: "" }
          };
          this.loginPage.show = true;
        }else if (subPageName == "register"){
          this.loginPage.show = false;
          this.registerPage = {
            input: { account: "", password: "", hint: "" },
            warning: { show: false, text: "" }
          };
          this.registerPage.show = true;
        }
      },
      showWarning(subPageName, warningString){
        if (subPageName == "login") this.loginPage.warning = { show: true, text: warningString };
        else if (subPageName == "register") this.registerPage.warning = { show: true, text: warningString };
      },
      showPasswordHint(){
        let hint = getPasswordHint(this.loginPage.input.account);
        if (hint != null) this.showWarning("login", "[ 密碼提示 ]<br>"+hint);
        else this.showWarning("login", "帳號不存在 !");
      },
      login(){
        let returnCode = userLogin(
          this.loginPage.input.account,
          this.loginPage.input.password
        );
        if (returnCode == 1) this.$router.push({name: "floorPage"});
        else if (returnCode == -1) this.showWarning("login", "帳號或密碼錯誤");
        else if (returnCode == -2) this.showWarning("login", "帳號遭到封鎖 <br> 解封時間 : (time) ");
        else this.showWarning("login", "未知錯誤");
      },
      register(){
        let returnCode = userRegister(
          this.registerPage.input.account,
          this.registerPage.input.password,
          this.registerPage.input.hint,
        );
        if (returnCode == 1 || returnCode == 2) this.$router.push({name: "floorPage"});
        else if (returnCode == -1) this.showWarning("register", "帳號已存在 , 密碼錯誤");
        else if (returnCode == -2) this.showWarning("register", "註冊資料未輸入完整");
        else this.showWarning("login", "未知錯誤");
      }
    }
  }
</script>

<style src="../assets/css/loginPage.css"></style>
