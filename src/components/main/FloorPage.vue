<template>
  <div class="ts-center">
    <div class="building borderShadow ts-selection is-accent is-circular">
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
    <div class="classroomInfo-data borderShadow ts-box">
      <table class="ts-table is-definition">
        <tbody>
          <tr>
            <td><strong>教室名稱</strong></td>
            <td class="classroomInfo-data-name">
              <span>105 視聽教室</span>
              <span class="classroomInfo-save ts-icon is-star-icon" :class="saveButton?'classroomInfo-save-saved':''" @click="save()"></span>
            </td>
          </tr>
          <tr>
            <td><strong>人數</strong></td>
            <td>70</td>
          </tr>
          <tr>
            <td><strong>器材</strong></td>
            <td>數位多功能講桌</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="reserve">
    <div class="reserve-schedule box">
      課表
    </div>
    <div class="reserve-confirm box" style="display:none;">
      <span class="reserve-confirm-emptyText">
        <span class="ts-icon is-plus-icon is-huge"></span>
        目前沒有選取任何時段，請直接點選左側的課表。
      </span>
    </div>
    <div class="reserve-confirm box">
      <span class="reserve-confirm-text">
        <span class="reserve-confirm-title">[ 已選擇 ]</span><br>
        <span>
          資工系館 105 視聽教室<br>
          星期三 13:10~15:00 ( 306~307 )
        </span>
      </span>
      <div class="reserve-confirm-buttons">
        <button class="borderShadow ts-button is-accent">送出申請</button>
        <button class="borderShadow ts-button is-accent is-secondary">取消並重置</button>
      </div>
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
    margin-top: 8px;
    display: flex; justify-content: space-between;
  }
  .floor-main{
    height: 200px;
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
    margin-top: 8px; padding: 8px;
  }
  .classroomInfo-data{
    font-size: 16px;
  }
  .classroomInfo-data > table > tbody > tr > td:first-child{
    width: 100px;
  }
  .classroomInfo-data-name{
    padding-bottom: 0;
    display: flex;
  }
  .classroomInfo-save{
    margin: -6px 0 0 6px;
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
    width: 300px; height: fit-content;
    margin-left: 8px; padding: 8px;
    display: flex; flex-direction: column; align-items: center;
  }
  .reserve-confirm-emptyText{
    margin-bottom: 8px;
    font-size: 12px;
    display: flex; flex-direction: column; align-items: center;
  }
  .reserve-confirm-emptyText > span.ts-icon{
    margin-bottom: -10px;
  }
  .reserve-confirm-title{
    font-size: 18px; font-weight: bold;
  }
  .reserve-confirm-text{
    margin: 12px 0;
    font-size: 16px; text-align: center;
  }
  .reserve-confirm-buttons{
    margin: 12px 0;
    display: flex; justify-content: space-around;
  }
  .reserve-confirm-buttons > button{
    border: none;
  }
  .reserve-confirm-buttons > button:nth-child(1):hover{
    background-color: #46c;
  }
  .reserve-confirm-buttons > button:nth-child(2){
    margin-left: 16px;
  }
  .reserve-confirm-buttons > button:nth-child(2):hover{
    background-color: #ddd;
  }
</style>