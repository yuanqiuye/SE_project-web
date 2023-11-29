<template>
  <div class="loginView registerBox-paddingBottom">
    <div class="backButton" @click="$router.push({name:'loginPage'})">
      <span class="backButton-backIcon ts-icon is-angles-left-icon"></span>
      返回
    </div>
    <div class="title">帳號註冊</div>
    <div class="loginView-inputbox">
      <input placeholder="海大email" v-model="input.account">
      <input placeholder="密碼" v-model="input.password">
      <input placeholder="忘記密碼提示" maxlength="15" v-model="input.hint">
      <div class="loginView-warning" v-show="warning.show" v-html="warning.text"></div>
    </div>
    <button @click="register()" class="loginView-button ts-button is-large">註冊</button>
  </div>
</template>

<script>
  import { userRegister } from '@/api/auth';

  export default{
    data(){
      return{
        show: false,
        input: { account: "", password: "", hint: "" },
        warning: { show: false, text: "" }
      }
    },
    methods: {
      showWarning(warningString){
        this.warning = { show: true, text: warningString };
      },
      register(){
        let returnCode = userRegister(this.input.account, this.input.password, this.input.hint);
        if (returnCode == 1 || returnCode == 2) this.$router.push({name: "floorPage"});
        else if (returnCode == -1) this.showWarning("帳號已存在 , 密碼錯誤");
        else if (returnCode == -2) this.showWarning("註冊資料未輸入完整");
        else this.showWarning("未知錯誤");
      }
    },
  }
</script>

<style scoped>
  .registerBox-paddingBottom{
    padding-bottom: 42px;
  }
  .backButton{
    position: relative; right: 148px; bottom: 60px;
    font-weight: bold; font-size: 18px;
    display: flex; align-items: center;
  }
  .backButton:hover{
    color: #00f;
  }
  .backButton-backIcon{
    margin: 2px 6px 0 0;
  }
  .title{
    font-size: 24px; color:#666; font-weight: bold; font-style: italic; text-align: center;
  }
</style>