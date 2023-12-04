<template>
  <div class="navBar ts-app-navbar" v-show="role == 'user'">
    <router-link :class="getClass('floorPage')" :to="{ name: 'floorPage' }">
      <div class="ts-icon is-layer-group-icon"></div>
      <div class="label">樓層平面圖</div>
    </router-link>
    <router-link :class="getClass('searchPage')" :to="{ name: 'searchPage' }">
      <div class="ts-icon is-magnifying-glass-icon"></div>
      <div class="label">搜尋教室</div>
    </router-link>
    <router-link :class="getClass('statusPage')" :to="{ name: 'statusPage' }">
      <div class="ts-icon is-list-ul-icon"></div>
      <div class="label">借用紀錄</div>
    </router-link>
    <router-link :class="getClass('savePage')" :to="{ name: 'savePage' }">
      <div class="ts-icon is-star-icon"></div>
      <div class="label">我的收藏</div>
    </router-link>
    <a class="item" @click="logout()">
      <div class="ts-icon is-power-off-icon"></div>
      <div class="label">登出</div>
    </a>
  </div>
  <div class="navBar ts-app-navbar" v-show="role == 'admin'">
    <router-link :class="getClass('floorPage_admin')" :to="{ name: 'floorPage_admin' }">
      <div class="ts-icon is-layer-group-icon"></div>
      <div class="label">樓層平面圖</div>
    </router-link>
    <router-link :class="getClass('overviewPage_admin')" :to="{ name: 'overviewPage_admin' }">
      <div class="ts-icon is-list-ul-icon"></div>
      <div class="label">借用總覽</div>
    </router-link>
    <router-link :class="getClass('requestPage_admin')" :to="{ name: 'requestPage_admin' }">
      <div class="ts-icon is-envelope-icon"></div>
      <div class="label">借用請求</div>
    </router-link>
    <router-link :class="getClass('savePage_admin')" :to="{ name: 'savePage_admin' }">
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
  import { userLogout, getRole } from '@/api/auth';

  export default{
    data(){
      return {
        role: null,
        nowPage: this.$route.name // 目前頁面
      }
    },
    created(){
      this.role = getRole();
    },
    methods: {
      getClass(pageName){
        if (pageName == this.nowPage) return "item is-active navBar-selected"; // 被選取
        return "item"; // 未被選取
      },
      logout(){
        userLogout();
        this.$router.push({name: "loginPage"}); // 登出後會回到登入頁面
      }
    },
    watch: {
      $route(nextPage){
        this.nowPage = nextPage.name;
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
    white-space: nowrap; user-select: none;
  }
  .navBar > a:hover{
    background-color: #fff4;
  }
  .navBar-selected{
    background-color: #fec !important;
  }
</style>