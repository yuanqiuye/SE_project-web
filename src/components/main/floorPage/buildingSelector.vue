<template>
  <div class="ts-center">
    <div class="building borderShadow ts-selection is-accent is-circular">
      <label class="item">
        <input type="radio" name="building" @click="$emit('building', 'ins')" checked>
        <div class="text">資工系館&nbsp;(INS)</div>
      </label>
      <label class="item">
        <input type="radio" name="building" @click="$emit('building', 'ecg')">
        <div class="text">電綜大樓&nbsp;(ECG)</div>
      </label>
    </div>
  </div>
</template>

<script>
  export default{
    created(){
      this.$emit('building', 'ins');
    },
  }
</script>

<style scoped>
  .building > label:not(:first-child){
    margin-left: 4px;
  }
  .building > label > input:not(:checked) + div:hover{
    background-color: #ddd;
  }
</style>