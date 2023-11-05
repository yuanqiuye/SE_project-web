<template>
  <div class="ts-center">
    <div class="building box ts-selection is-circular">
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
  <div class="floor box">
    <div class="floor-main">
      平面圖
    </div>
    <div class="floor-toggle">
      <span class="ts-icon is-angle-up-icon"></span>
      <span class="floor-toggle-nth">1F</span>
      <span class="ts-icon is-angle-down-icon"></span>
    </div>
  </div>
  <div class="classroomInfo box">
    <div class="classroomInfo-data">
      教室名稱&nbsp;: maybe做表格?<br>
      人數&nbsp;:<br>
      器材&nbsp;:
    </div>
    <span class="classroomInfo-save ts-icon is-star-icon" :class="saveButton?'classroomInfo-save-saved':''" @click="save()"></span>
  </div>
  <div class="reserve">
    <div class="reserve-schedule box">
      課表
    </div>
    <div class="reserve-confirm box">
      +選擇時段按鈕
    </div>
  </div>
</template>

<script>
  import { updateSave } from '@/api/floor';

  export default{
    data(){
      return{
        building: "ins",
        saveButton: false
      }
    },
    methods: {
      save(){
        let nextState = !this.saveButton;
        if (updateSave("userName", nextState) == 1) this.saveButton = nextState;
      }
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
  .floor{
    width: fit-content;
    margin-top: 8px;
    display: flex; justify-content: space-between;
  }
  .floor-main{
    width: 600px; height: 200px;
  }
  .floor-toggle{
    width: 50px;
    margin: 4px 0;
    border-left: 1px #ccc solid;
    font-size: 20px; color: #000; font-weight: bold;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .floor-toggle > span.ts-icon{
    width: 30px; height: 30px;
    border-radius: 4px;
    color: #666;
    display: flex; justify-content: center; align-items: center;
  }
  .floor-toggle > span.ts-icon:hover{
    background-color: #ddd;
  }
  .floor-toggle-nth{
    margin: 16px 0;
  }
  .classroomInfo{
    margin-top: 8px; padding: 4px 8px;
    display: flex; justify-content: space-between;
  }
  .classroomInfo-data{
    
  }
  .classroomInfo-save{
    margin: -4px -2px 0 0;
    border: none;
    color: #fff; font-size: 20px;
    -webkit-text-stroke: 1px #666;
  }
  .classroomInfo-save-saved{
    color: #f80;
    -webkit-text-stroke: 1px;
  }
  .reserve{
    margin-top: 8px;
    display: flex;
  }
  .reserve-schedule{
    width: 400px; height: 600px;
  }
  .reserve-confirm{
    height: fit-content;
    margin-left: 8px;
  }
</style>