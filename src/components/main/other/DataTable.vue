<template>
  <div class="ts-box borderShadow">
    <table class="main-table ts-table is-celled">
      <tbody>
        <tr>
          <td class="main-table-fliter-id">
            <div class="ts-input is-start-icon is-solid">
              <span class="ts-icon is-magnifying-glass-icon"></span>
              <input type="text" placeholder="教室代碼" v-model="fliter.id">
            </div>
          </td>
          <td>
            <div class="ts-select is-solid">
              <select v-model="fliter.building" @change="whenBuildingChange">
                <option value="ins">資工系館 ( INS )</option>
                <option value="ecg">電綜大樓 ( ECG )</option>
              </select>
            </div>
          </td>
          <td class="main-table-fliter-classroom">
            <div class="ts-select is-solid">
              <select v-model="fliter.floor" @change="whenFloorChange">
                <option v-for="floor in getFloorOption()" :key="floor" :value="floor">{{ floor+"F" }}</option>
              </select>
            </div>
            <div class="ts-select is-solid">
              <select v-model="fliter.classroomID">
                <option v-for="classroomID in getClassroomOption()" :key="classroomID" :value="classroomID">{{ classroomID }}</option>
              </select>
            </div>
          </td>
          <td class="main-table-fliter-period">
            <div class="ts-select is-solid">
              <select v-model="fliter.day">
                <option value="1">星期一</option>
                <option value="2">星期二</option>
                <option value="3">星期三</option>
                <option value="4">星期四</option>
                <option value="5">星期五</option>
              </select>
            </div>
            <div class="ts-select is-solid">
              <select v-model="fliter.startPeriod">
                <option v-for="period in getStartPeriod()" :key="period.nth" :value="period.nth">{{ `第 ${period.nth} 節` }}</option>
              </select>
            </div>
            <span>到</span>
            <div class="ts-select is-solid">
              <select v-model="fliter.endPeriod">
                <option v-for="period in getEndPeriod()" :key="period.nth" :value="period.nth">{{ `第 ${period.nth} 節` }}</option>
              </select>
            </div>
          </td>
          <td>
            <span class="ts-icon is-caret-left-icon main-table-resetButton iconButton" @click="resetFliter">
              <span class="ts-icon is-rotate-right-icon"></span>
            </span>
          </td>
        </tr>
        <tr>
          <td>#</td>
          <td>大樓</td>
          <td>教室名稱</td>
          <td>可申請時段</td>
          <td>
            <span class="ts-icon is-gears-icon"></span>
          </td>
        </tr>
        <tr>
          <td>INS101</td>
          <td>資工系館 ( INS )</td>
          <td>101 視聽教室 ( 階梯教室 )</td>
          <td>-</td>
          <td>
            <span class="ts-icon is-info-icon iconButton" @click="null"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import floor_config from "@/assets/floor/floor-config.json"; // 平面圖排版的設定檔
  import schedule_config from "@/assets/schedule-config.json"; // 課表時段的設定檔

  export default{
    data(){
      return {
        fliter: null // resetFliter() will init
      }
    },
    created(){
      this.resetFliter();
    },
    methods: {
      getFloorOption(){
        try{
          return Object.keys(floor_config.B[this.fliter.building].F);
        }catch{null}
        return [];
      },
      getClassroomOption(){
        try{
          return Object.keys(floor_config.B[this.fliter.building].F[this.fliter.floor].C);
        }catch{null}
        return [];
      },
      getStartPeriod(){
        return schedule_config.periodTime;
      },
      getEndPeriod(){
        return []; // todo
      },
      
      whenBuildingChange(){
        this.fliter.floor = null;
        this.fliter.classroomID = null;
      },
      whenFloorChange(){
        this.fliter.classroomID = null;
      },
      
      resetFliter(){
        this.fliter = {
          id: "",
          building: null,
          floor: null,
          classroomID: null,
          day: null,
          startPeriod: null,
          endPeriod: null
        }
      }
    }
  }
</script>

<style scoped>
  .iconButton{
    padding: 8px;
    border-radius: 4px;
  }
  .iconButton:hover{
    background-color: #ddd;
  }
  .main-table td{
    text-align: center; white-space: nowrap;
    overflow-x: hidden;
  }
  .main-table > tbody > tr:nth-child(1) > td{
    padding: 6px 8px;
  }
  .main-table > tbody > tr:nth-child(2) > td{
    background-color: #e4e4e4;
    font-weight: bold;
  }
  .main-table-resetButton > span.ts-icon{
    margin-left: 4px;
  }
  .main-table-fliter-id > div{
    width: 120px;
  }
  .main-table-fliter-classroom > div:not(:first-child){
    margin-left: 6px;
  }
  .main-table-fliter-period > div:not(:first-child){
    margin-left: 6px;
  }
  .main-table-fliter-period > span{
    margin-left: 6px;
  }
</style>