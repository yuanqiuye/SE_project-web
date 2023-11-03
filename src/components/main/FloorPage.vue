<template>
  <div class="floor ts-center">
    <div class="floor-building box-shadow ts-selection is-circular">
      <label class="item">
        <input type="radio" name="building" @click="building='ins';" checked>
        <div class="text">資工系館&nbsp;(INS)</div>
      </label>
      <label class="item">
        <input type="radio" name="building" @click="building='ecg';">
        <div class="text">電綜大樓&nbsp;(ECG)</div>
      </label>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        building: "ins"
      }
    },
    methods: {
      
    },
  }
</script>

<style scoped>
  .floor{
    width: 800px;
  }
  .floor-building > label:not(:first-child){
    margin-left: 4px;
  }
  .floor-building > label > input:not(:checked) + div:hover{
    background-color: #ddd;
  }
</style>