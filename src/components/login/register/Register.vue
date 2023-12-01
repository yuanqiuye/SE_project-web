<template>
  <div class="loginView registerBox-fix">
    <div class="backButton" @click="$router.push({name:'loginPage'})">
      <span class="backButton-backIcon ts-icon is-angles-left-icon"></span>
      返回
    </div>
    <div class="title">帳號註冊</div>
    <div class="loginView-inputbox inputbox-height">
      <input placeholder="學號" v-model="input.account">
      <input placeholder="密碼" v-model="input.password">
      <input placeholder="忘記密碼提示" maxlength="15" v-model="input.hint">
      <warning-box :text="warningText"/>
    </div>
    <button class="loginView-button ts-button is-large" @click="register()">註冊</button>
  </div>
</template>

<script>
  import { userRegister } from '@/api/auth';
  import warningBox from "@/components/login/other/WarningBox.vue";

  export default{
    components: {
      "warning-box": warningBox
    },
    data(){
      return{
        show: false,
        input: { account: "", password: "", hint: "" },
        warningText: ""
      }
    },
    methods: {
      register(){
        if (this.input.account == "" || this.input.password == "" || this.input.hint == "") this.warningText = "註冊資料未輸入完整";
        else{
          let returnCode = userRegister(this.input.account, this.input.password, this.input.hint);
          switch (returnCode){
            case 200: // 註冊成功,跳轉至驗證碼頁面
              this.$router.push({ name: "registerPage_verify", query: { account: this.input.account } });
              break;
            case 400: // 帳號已存在,跳轉至註冊結果頁面(顯示帳號已存在)
              this.$router.push({ name: "registerPage_result", query: { result: "exist" } });
              break;
            default:
              this.warningText = "未知錯誤";
              break;
          }
        }
      }
    },
  }
</script>

<style scoped>
  .registerBox-fix{
    padding-bottom: 32px;
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
  .inputbox-height{
    height: 310px;
  }
</style>