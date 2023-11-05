<template>
  <nav-bar></nav-bar>
  <div class="pageWrapper">
    <div class="page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavBar from "./../components/main/NavBar.vue";

  export default{
    components: {
      "nav-bar": NavBar
    }
  }
</script>

<style scoped>
  .pageWrapper{
    height: calc(100% - 90px);
    display: flex; justify-content: center;
  }
  .page{
    min-width: fit-content; height: fit-content; max-height: 100%;
    margin: 10px; padding: 8px;
    background-color: #fffa; backdrop-filter: blur(20px);
    border-radius: 6px; box-shadow: 0 0 8px #0006;
    font-size: 16px;
    overflow: auto; overflow-x: hidden;
  }
  .page::-webkit-scrollbar{
    width: 16px;
  }
  .page::-webkit-scrollbar-track{
    margin: 1px 0;
    background-color: none;
  }
  .page::-webkit-scrollbar-thumb{
    border: 4px solid #0000;
    border-radius: 100px;
    background-clip: padding-box;
    background-color: #0006;
  }
  .page::-webkit-scrollbar-thumb:hover{
    background-color: #000b;
  }
</style>
<style>
  .box{
    background-color: #fff;
    border-radius: 6px; box-shadow: 0 0 4px #0006;
  }
  .borderShadow{
    box-shadow: 0 0 4px #0006;
  }
</style>