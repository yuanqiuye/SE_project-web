<template>
  <div class="ts-center">
    <div class="building borderShadow ts-selection is-accent is-circular" @click="clickBuildingOption()">
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
      <div>&lt; 平面圖 &gt;</div>
    </div>
    <div class="floor-switch">
      <span class="ts-icon is-angle-up-icon" @click="clickSwitchFloorButton('up')"></span>
      <span class="floor-switch-nth">{{ floor }}</span>
      <span class="ts-icon is-angle-down-icon" @click="clickSwitchFloorButton('down')"></span>
    </div>
  </div>
  <div class="classroomInfo box">
    <div class="classroomInfo-data borderShadow ts-box">
      <table class="ts-table is-definition">
        <tbody>
          <tr>
            <td>教室名稱</td>
            <td class="classroomInfo-data-name">
              {{ classroom.name }}
              <span
                class="classroomInfo-save ts-icon is-star-icon"
                :class="saveButton?'classroomInfo-save-saved':''"
                @click="clickSaveButton()"
              ></span>
            </td>
          </tr>
          <tr>
            <td>人數</td>
            <td>{{ classroom.number }}</td>
          </tr>
          <tr>
            <td>器材</td>
            <td>{{ classroom.equipment }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="reserve">
    <div class="reserve-schedule box">
      <div class="borderShadow ts-box">
        <table class="ts-table is-definition is-celled">
          <thead>
            <tr>
              <th></th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th>
            </tr>
          </thead>
          <tbody ref="scheduleTable" @click="clickScheduleTable">
            <tr v-for="(item, rowIndex) in scheduleTableData" :key="rowIndex">
              <td>
                <div>第&nbsp;&nbsp;{{ item.period }}&nbsp;&nbsp;節</div>
                {{ item.startTime }}&nbsp;~&nbsp;{{ item.endTime }}
              </td>
              <td v-for="columnIndex in 5" :key="columnIndex"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="reserve-confirm box" v-show="!confirm.enable">
      <span class="reserve-confirm-emptyText">
        <span class="ts-icon is-plus-icon is-huge"></span>
        目前沒有選取任何時段，請直接點選左側的課表。
      </span>
    </div>
    <div class="reserve-confirm box" v-show="confirm.enable">
      <span class="reserve-confirm-text">
        <span class="reserve-confirm-title">[ 已選擇 ]</span><br>
        <span>
          {{ confirm.building }}&nbsp;{{ classroom.name }}<br>
          {{ confirm.day }}&nbsp;{{ confirm.time }}&nbsp;(&nbsp;{{ confirm.period }}&nbsp;)
        </span>
      </span>
      <div class="reserve-confirm-buttons">
        <button class="borderShadow ts-button is-accent">送出申請</button>
        <button class="borderShadow ts-button is-accent is-secondary" @click="resetsDP()">取消並重置</button>
      </div>
    </div>
  </div>
</template>

<script>
  const periodStartTime = [
    "06:20", "08:20", "09:20", "10:20", "11:15", "12:10", "13:10", "14:10", "15:10", "16:05"
  ];

  import { updateSave } from '@/api/floor';
  
  export default{
    data(){
      return{
        building: "ins",
        floor: "1F",
        classroom: { name: "105 視聽教室", number: "70", equipment: "數位多功能講桌" }, // example data
        saveButton: false,
        scheduleTableData: [],
        sDP: { day: null, startPeriod: null, endPeriod: null }, // selected day & period
        confirm: { enable: false, building: "", classroomName: "", day: "", time: "", period: "" }
      }
    },
    created(){
      this.initScheduleTable();
    },
    methods: {
      clickBuildingOption(){
        this.resetsDP();
      },
      clickSwitchFloorButton(switchType){
        if (switchType == "up") alert("up");
        else if (switchType == "down") alert("down");
      },
      clickSaveButton(){
        let nextState = !this.saveButton;
        if (updateSave(nextState) == 1) this.saveButton = nextState;
      },
      initScheduleTable(){
        for (let i = 0; i <= periodStartTime.length-2; i++){
          this.scheduleTableData.push({ period: i, startTime: periodStartTime[i], endTime: periodStartTime[i+1] });
        }
      },
      setCellBgColor(day, period, color){
        const e_table = this.$refs.scheduleTable;
        e_table.rows[period].cells[day].style.backgroundColor = color;
      },
      resetsDP(){
        if (!(this.sDP.day != null)) return;
        for (let i = this.sDP.startPeriod; i <= this.sDP.endPeriod; i++) this.setCellBgColor(this.sDP.day, i, "#fff0");
        this.sDP = { day: null, startPeriod: null, endPeriod: null };
        this.updateConfirmBox();
      },
      clickScheduleTable(event){
        const e_cell = event.target;
        if (!(e_cell.tagName == "TD")) return;
        
        const day = e_cell.cellIndex;
        const period = e_cell.parentNode.rowIndex-1;
        if (!(day >= 1 && period >= 0)) return;
        
        // if (!()) return; // 無法選取的格子
        
        if (this.sDP.day == null){
          this.sDP = { day: day, startPeriod: period, endPeriod: period };
        }
        else if (day == this.sDP.day && period >= this.sDP.startPeriod-1 && period <= this.sDP.endPeriod+1){
          if (period == this.sDP.startPeriod-1) this.sDP.startPeriod -= 1;
          if (period == this.sDP.endPeriod+1) this.sDP.endPeriod += 1;
        }
        else{
          this.resetsDP();
          this.sDP = { day: day, startPeriod: period, endPeriod: period };
        }
        this.setCellBgColor(day, period, "#aaf");
        
        this.updateConfirmBox();
      },
      updateConfirmBox(){
        this.confirm.enable = (this.sDP.day != null);
        if (!this.confirm.enable) return;
        
        const building = { "ins": "資工系館", "ecg": "電綜大樓" };
        const nthDay = [ "", "星期一", "星期二", "星期三", "星期四", "星期五" ];
        
        this.confirm.building = building[this.building];
        this.confirm.day = nthDay[this.sDP.day]; // 暫定
        this.confirm.time = `${periodStartTime[this.sDP.startPeriod]}~${periodStartTime[this.sDP.endPeriod+1]}`;
        const startPeriod = `${100*this.sDP.day + this.sDP.startPeriod}`;
        if (this.sDP.startPeriod == this.sDP.endPeriod) this.confirm.period = startPeriod;
        else this.confirm.period = `${startPeriod}~${100*this.sDP.day + this.sDP.endPeriod}`;
      }
    }
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
    width: 100%;
    display: flex; justify-content: center; align-items: center;
  }
  .floor-switch{
    width: 50px;
    margin: 4px 0; padding: 8px 0;
    border-left: 1px #ccc solid;
    font-size: 20px; color: #000; font-weight: bold;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .floor-switch > span.ts-icon{
    width: 30px; height: 30px;
    border-radius: 4px;
    color: #666;
    display: flex; justify-content: center; align-items: center;
  }
  .floor-switch > span.ts-icon:hover{
    background-color: #ddd;
  }
  .floor-switch-nth{
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
    font-weight: bold;
  }
  .classroomInfo-data-name{
    padding-bottom: 0;
    display: flex;
  }
  .classroomInfo-save{
    margin: -5.5px 0 0 6px;
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
    padding: 8px;
    white-space: nowrap;
  }
  .reserve-schedule table td, th{
    text-align: center; vertical-align: middle;
  }
  .reserve-schedule table td:first-child{
    padding: 6px;
    font-size: 11px;
  }
  .reserve-schedule table td:first-child > div{
    font-size: 14px;
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