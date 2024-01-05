<template>
  <div class="loginView">
    <div class="title" v-show="result == 'success'">
      <span class="ts-icon is-envelope-circle-check-icon"></span><br>
      帳號注冊成功，按下確認將跳到登入畫面
    </div>
    <div class="title" v-show="result == 'exist'">
      <span class="ts-icon is-user-check-icon"></span><br>
      帳號已存在，按下確認將跳到register畫面
    </div>
    <button class="loginView-button ts-button is-large" @click="clickButton">確認</button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        result: null
      }
    },
    created(){
      this.result = this.$route.query.result;
    },
    methods: {
      clickButton(){
        if (this.result == "success") this.$router.push({ name: "loginPage" }); // 驗證碼正確
        else if (this.result == "exist") this.$router.push({ name: "registerPage" }); // 帳號已存在
      }
    }
  }
</script>

<style scoped>
  .title{
    margin-bottom: 150px;
    font-size: 20px; font-weight: bold; text-align: center;
  }
  .title > span.ts-icon{
    font-size: 40px;
  }
</style>