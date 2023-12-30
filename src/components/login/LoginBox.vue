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
      <warning-box :text="warningText"/>
    </div>
    <button class="loginView-button ts-button is-large" @click="login()">登入</button>
  </div>
</template>

<script>
  import { getPasswordHint, userLogin } from "@/api/auth";
  import warningBox from "@/components/login/other/WarningBox.vue";

  export default{
    components: {
      "warning-box": warningBox
    },
    data(){
      return{
        show: true,
        input: { account: "", password: "" },
        warningText: ""
      }
    },
    methods: {
      async showPasswordHint(){
        let hint = await getPasswordHint(this.input.account);
        if (hint != null) this.warningText = `[ 密碼提示 ]<br>${hint}`;
        else this.warningText = "帳號不存在 !";
      },
      async login(){
        let returnCode = await userLogin(this.input.account, this.input.password);
        switch (returnCode){
          case 200: // 帳號及密碼正確,跳轉至平面圖頁面
            this.$router.push({ name: "floorPage" });
            break;
          case 400: // 帳號或密碼錯誤
            this.warningText = "帳號或密碼錯誤";
            break;
          case 403: // 帳號被ban
            this.warningText = "帳號遭到封鎖";
            break;
          default:
            this.warningText = "未知錯誤";
            break;
        }
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
