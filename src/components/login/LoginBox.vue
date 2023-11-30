<template>
  <div class="loginView">
    <div class="title">教室預約系統</div>
    <div class="loginView-inputbox inputbox-height">
      <input placeholder="學號" v-model="input.account">
      <input placeholder="密碼" v-model="input.password">
      <div class="option">
        <div @click="showPasswordHint()">忘記密碼</div>
        <div @click="$router.push({name:'registerPage'})">註冊</div>
      </div>
      <div class="loginView-warning" v-show="warning.show" v-html="warning.text"></div>
    </div>
    <button class="loginView-button ts-button is-large" @click="login()">登入</button>
  </div>
</template>

<script>
  import { getPasswordHint, userLogin } from "@/api/auth"

  export default{
    data(){
      return{
        show: true,
        input: { account: "", password: "" },
        warning: { show: false, text: "" }
      }
    },
    methods: {
      showWarning(warningString){
        this.warning = { show: true, text: warningString };
      },
      showPasswordHint(){
        let hint = getPasswordHint(this.input.account);
        if (hint != null) this.showWarning("[ 密碼提示 ]<br>"+hint);
        else this.showWarning("帳號不存在 !");
      },
      login(){
        let returnCode = userLogin(this.input.account, this.input.password);
        if (returnCode == 200) this.$router.push({ name: "floorPage" });
        else if (returnCode == 400) this.showWarning("帳號或密碼錯誤");
        else if (returnCode == 403) this.showWarning("帳號遭到封鎖");
        else this.showWarning("未知錯誤");
      }
    }
  }
</script>

<style scoped>
  .title{
    font-size: 30px; font-weight: bold; text-align: center;
  }
  .inputbox-height{
    height: 300px;
  }
  .option{
    margin-top: 2px; padding: 0 6px;
    display: flex; justify-content: space-between;
    font-size: 14px; font-weight: bold;
  }
  .option > div:hover{
    color: #00f;
  }
</style>
