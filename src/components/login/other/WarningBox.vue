<template>
  <div class="warning" v-show="text != ''" v-html="text"></div>
</template>

<script>
  export default{
    props: [
      "text"
    ]
  }
</script>

<style scoped>
  .warning{
    color: #f00; font-weight: bold; text-align: center;
  }
</style>