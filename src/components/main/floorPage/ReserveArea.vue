<template>
  <div class="reserveArea">
    <div class="schedule box">
      <div class="borderShadow ts-box">
        <table class="ts-table is-definition is-celled">
          <thead>
            <tr>
              <th>
                <div>
                  <span class="ts-icon is-rotate-right-icon"></span>
                </div>
              </th>
              <th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th>
            </tr>
          </thead>
          <tbody ref="scheduleTable" @click="clickScheduleTable">
            <tr v-for="(period, rowIndex) in periodTime" :key="rowIndex">
              <td>
                <div>第&nbsp;&nbsp;{{ period.nth }}&nbsp;&nbsp;節</div>
                {{ period.startTime }}&nbsp;~&nbsp;{{ period.endTime }}
              </td>
              <td v-for="columnIndex in 5" :key="columnIndex"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="confirm box" v-show="!confirm.enable">
      <span class="confirm-emptyText">
        <span class="ts-icon is-plus-icon is-huge"></span>
        目前沒有選取任何時段，請直接點選左側的課表。
      </span>
    </div><!--undo!!!!!!!!!!!!!!!!!!!!!!!-->
    <div class="confirm box" v-show="confirm.enable">
      <span class="confirm-text">
        <span class="confirm-title">[ 已選擇 ]</span><br>
        <span>
          {{ classroom.info.building }}&nbsp;{{ classroom.info.name }}<br>
          {{ confirm.day }}&nbsp;{{ confirm.time }}&nbsp;(&nbsp;{{ confirm.period }}&nbsp;)
        </span>
      </span>
      <div class="confirm-buttons">
        <button class="borderShadow ts-button is-accent">送出申請</button>
        <button class="borderShadow ts-button is-accent is-secondary" @click="resetsDP()">取消並重置</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: [
      "classroom"
    ],
    data(){
      return {
        periodTime: [
          { nth: 1, startTime: "08:20", endTime: "09:10" },
          { nth: 2, startTime: "09:20", endTime: "10:10" },
          { nth: 3, startTime: "10:20", endTime: "11:10" },
          { nth: 4, startTime: "11:15", endTime: "12:05" },
          { nth: 5, startTime: "12:10", endTime: "13:00" },
          { nth: 6, startTime: "13:10", endTime: "14:00" },
          { nth: 7, startTime: "14:10", endTime: "15:00" },
          { nth: 8, startTime: "15:10", endTime: "16:00" },
          { nth: 9, startTime: "16:05", endTime: "16:55" },
        ], // 第幾節,各節次的開始和結束時間
        sDP: { day: null, startPeriod: null, endPeriod: null }, // selected day & period
        confirm: { enable: false, building: "", classroomName: "", day: "", time: "", period: "" }
      }
    },
    methods: {
      setCellBgColor(day, period, color){ // 更改課表某一格的顏色
        const e_table = this.$refs.scheduleTable;
        e_table.rows[period-1].cells[day].style.backgroundColor = color;
      },
      resetsDP(){ // 重設選取的節次
        if (this.sDP.day == null) return; // 如果是未選取狀態則不用重設
        
        for (let i = this.sDP.startPeriod; i <= this.sDP.endPeriod; i++) this.setCellBgColor(this.sDP.day, i, "#fff0"); // 重設格子的顏色
        this.sDP = { day: null, startPeriod: null, endPeriod: null };
        this.updateConfirmBox();
      },
      clickScheduleTable(event){ // 點擊課表的event
        const e_cell = event.target;
        if (e_cell.tagName != "TD") return; // 如果點擊了不是表格的區域,則不予理會
        
        const day = e_cell.cellIndex;
        const period = this.periodTime[e_cell.parentNode.rowIndex-1].nth;
        if (!(day >= 1 && period >= 0)) return; // 如果點擊了不是格子的區域,則不予理會
        
        // if () return; // 如果點擊了無法選取的格子,則不予理會
        
        if (this.sDP.day == null){ // 如果還沒選時段,選取目前點的格子
          this.sDP = { day: day, startPeriod: period, endPeriod: period };
        }
        else if (day == this.sDP.day && period >= this.sDP.startPeriod-1 && period <= this.sDP.endPeriod+1){
          // 如果點選的格子介於範圍頭尾&同一天,延長範圍
          if (period == this.sDP.startPeriod-1) this.sDP.startPeriod -= 1;
          if (period == this.sDP.endPeriod+1) this.sDP.endPeriod += 1;
        }
        else{ // 如果不符合以上條件,則重設先前選取的範圍,然後選取目前點的格子
          this.resetsDP();
          this.sDP = { day: day, startPeriod: period, endPeriod: period };
        }
        this.setCellBgColor(day, period, "#aaf"); // 點擊後將格子塗色
        
        this.updateConfirmBox();
      },
      updateConfirmBox(){
        this.confirm.enable = (this.sDP.day != null);
        if (!this.confirm.enable) return;
        
        const building = { "ins": "資工系館", "ecg": "電綜大樓" };
        const nthDay = [ "", "星期一", "星期二", "星期三", "星期四", "星期五" ];
        
        this.confirm.building = building[this.building];
        this.confirm.day = nthDay[this.sDP.day]; // 暫定
        this.confirm.time = `${this.periodTime[this.sDP.startPeriod-1].startTime}~${this.periodTime[this.sDP.endPeriod-1].endTime}`;
        const startPeriod = `${100*this.sDP.day + this.sDP.startPeriod}`;
        const endPeriod = `${100*this.sDP.day + this.sDP.endPeriod}`;
        if (this.sDP.startPeriod == this.sDP.endPeriod) this.confirm.period = startPeriod;
        else this.confirm.period = `${startPeriod}~${endPeriod}`;
      }
    }
  }
</script>

<style scoped>
  .reserveArea{
    margin-top: 8px;
    display: flex;
  }
  .schedule{
    padding: 8px;
    white-space: nowrap;
  }
  .schedule table span.is-rotate-right-icon{
    padding: 6px;
    border-radius: 4px;
    font-size: 20px;
  }
  .schedule table span.is-rotate-right-icon:hover{
    background-color: #ddd;
  }
  .schedule table td, th{
    text-align: center; vertical-align: middle;
  }
  .schedule table td:first-child{
    padding: 6px;
    font-size: 11px;
  }
  .schedule table td:first-child > div{
    font-size: 14px;
  }
  .confirm{
    width: 300px; height: fit-content;
    margin-left: 8px; padding: 8px;
    display: flex; flex-direction: column; align-items: center;
  }
  .confirm-emptyText{
    margin-bottom: 8px;
    font-size: 12px;
    display: flex; flex-direction: column; align-items: center;
  }
  .confirm-emptyText > span.ts-icon{
    margin-bottom: -10px;
  }
  .confirm-title{
    font-size: 18px; font-weight: bold;
  }
  .confirm-text{
    margin: 12px 0;
    font-size: 16px; text-align: center;
  }
  .confirm-buttons{
    margin: 12px 0;
    display: flex; justify-content: space-around;
  }
  .confirm-buttons > button{
    border: none;
  }
  .confirm-buttons > button:nth-child(1):hover{
    background-color: #46c;
  }
  .confirm-buttons > button:nth-child(2){
    margin-left: 16px;
  }
  .confirm-buttons > button:nth-child(2):hover{
    background-color: #ddd;
  }
</style>