<template>
  <nav-bar></nav-bar>
  <div class="pageWrapper">
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavBar from "./../components/NavBar.vue";

  export default{
    components: {
      "nav-bar": NavBar
    }
  }
</script>

<style scoped>
  .pageWrapper{
    display: flex; justify-content: center; align-items: center;
  }
  .page{
    margin: 10px; padding: 8px;
    background-color: #fffc; backdrop-filter: blur(20px);
    border-radius: 6px; box-shadow: 0 0 8px #0006;
    font-size: 16px;
  }
</style>