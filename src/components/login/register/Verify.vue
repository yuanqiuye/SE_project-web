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
      <warning-box :text="warningText"/>
    </div>
    <button class="loginView-button ts-button is-large" @click="clickVerify">驗證</button>
  </div>
</template>

<script>
  import { verifyCode } from '@/api/auth';
  import warningBox from "@/components/login/other/WarningBox.vue";

  export default{
    components: {
      "warning-box": warningBox
    },
    data(){
      return {
        account: "",
        input: { verificationCode: "" },
        warningText: ""
      }
    },
    created(){
      this.account = this.$route.query.account;
    },
    methods: {
      clickVerify(){
        let returnCode = verifyCode(this.account, this.input.verificationCode);
        switch (returnCode){
          case 200: // 驗證碼正確,跳轉至註冊結果頁面(顯示驗證成功)
            this.$router.push({ name: "registerPage_result", query: { result: "success" } });
            break;
          case 400: // 驗證碼錯誤
            this.warningText = "驗證碼錯誤";
            break;
          default:
          this.warningText = "未知錯誤";
            break;
        }
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