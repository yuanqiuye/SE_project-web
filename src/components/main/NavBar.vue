<template>
  <div class="navBar ts-app-navbar">
    <router-link :to="{name:'floorPage'}" :class="linkClass.floorPage">
      <div class="ts-icon is-layer-group-icon"></div>
      <div class="label">樓層平面圖</div>
    </router-link>
    <router-link :to="{name:'searchPage'}" :class="linkClass.searchPage">
      <div class="ts-icon is-magnifying-glass-icon"></div>
      <div class="label">搜尋教室</div>
    </router-link>
    <router-link :to="{name:'statusPage'}" :class="linkClass.statusPage">
      <div class="ts-icon is-pen-icon"></div>
      <div class="label">借用狀態</div>
    </router-link>
    <router-link :to="{name:'savePage'}" :class="linkClass.savePage">
      <div class="ts-icon is-star-icon"></div>
      <div class="label">我的收藏</div>
    </router-link>
    <a class="item" @click="logout()">
      <div class="ts-icon is-power-off-icon"></div>
      <div class="label">登出</div>
    </a>
  </div>
</template>

<script>
  import { userLogout } from '@/api/api';

  export default{
    data(){
      return {
        linkClass: {
          floorPage: "item is-active navBar-selected",
          searchPage: "item",
          statusPage: "item",
          savePage: "item"
        }
      }
    },
    methods: {
      logout(){
        userLogout();
        this.$router.push({name: "loginPage"});
      }
    },
    watch: {
      $route(to){
        this.linkClass = { floorPage: "item", searchPage: "item", statusPage: "item", savePage: "item" };
        this.linkClass[to.name] = "item is-active navBar-selected";
      }
    }
  }
</script>

<style scoped>
  .navBar{
    padding: 4px 0;
    background-color: #fd9;
    border: 2px #ec8 solid;
    display: flex; justify-content: center;
  }
  .navBar > a{
    width: 80px; min-width: 80px; height: 60px;
    margin: 0 4px !important;
    white-space: nowrap;
  }
  .navBar > a:hover{
    background-color: #fff4;
  }
  .navBar-selected{
    background-color: #fec !important;
  }
</style>