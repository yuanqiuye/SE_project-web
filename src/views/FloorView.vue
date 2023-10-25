<template>
  <div class="mainApp">
    <div class="mainApp-nav ts-app-navbar">
      <router-link :to="{name:'floorPage'}" class="item is-active mainApp-nav-selected">
        <div class="ts-icon is-layer-group-icon"></div>
        <div class="label">樓層平面圖</div>
      </router-link>
      <router-link :to="{name:'searchPage'}" class="item">
        <div class="ts-icon is-magnifying-glass-icon"></div>
        <div class="label">搜尋教室</div>
      </router-link>
      <router-link :to="{name:'statusPage'}" class="item">
        <div class="ts-icon is-pen-icon"></div>
        <div class="label">借用狀態</div>
      </router-link>
      <router-link :to="{name:'savePage'}" class="item">
        <div class="ts-icon is-star-icon"></div>
        <div class="label">我的收藏</div>
      </router-link>
      <a class="item" @click="logout()">
        <div class="ts-icon is-power-off-icon"></div>
        <div class="label">登出</div>
      </a>
    </div>
    <div class="ts-center">
      <div class="mainApp-main ">
        test
      </div>
    </div>
  </div>
</template>

<script>
  function userLogout(){ // 與後端連接
    alert("userLogout");
  }

  export default{
    data(){
      return {
      }
    },
    methods: {
      logout(){
        userLogout();
        this.$router.push({name: "loginPage"});
      }
    }
  }
</script>

<style src="../assets/css/mainAppStyle.css"></style>