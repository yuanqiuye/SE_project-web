<template>
  <div class="loginView">
    <div class="title">
      驗證碼已發送到<br>
      {{ account }}<span class="email">@mail.ntou.edu.tw</span><br>
      <span class="ts-icon is-arrow-up-right-from-square-icon is-small">
        <a class="ntouLink" href="https://mail.ntou.edu.tw/" target="_blank">海大電子郵件系統</a>
      </span>
    </div>
    <div class="loginView-inputbox inputbox-height">
      <input placeholder="驗證碼" v-model="input.verificationCode">
    </div>
    <button @click="clickVerify" class="loginView-button ts-button is-large">驗證</button>
  </div>
</template>

<script>
  import { verifyCode } from '@/api/auth';

  export default{
    data(){
      return {
        account: "",
        input: { verificationCode: "" }
      }
    },
    created(){
      this.account = this.$route.query.account;
    },
    methods: {
      clickVerify(){
        verifyCode(this.account, this.input.verificationCode);
      }
    },
  }
</script>

<style scoped>
  .title{
    font-size: 20px; font-weight: bold; text-align: center;
  }
  .email{
    color: #888;
  }
  .ntouLink{
    margin: -20px 0 0 6px;
    font-size: 14px;
  }
  .ntouLink:hover{
    color: #00f;
  }
  .inputbox-height{
    height: 240px;
  }
</style>