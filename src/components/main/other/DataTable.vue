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
                <option
                  v-for="floor in getFloorOption()"
                  :key="floor"
                  :value="floor"
                >
                  {{ floor+"F" }}
                </option>
              </select>
            </div>
            <div class="ts-select is-solid">
              <select v-model="fliter.classroomID">
                <option
                  v-for="classroomID in getClassroomOption()"
                  :key="classroomID"
                  :value="classroomID"
                >
                  {{ classroomID }}
                </option>
              </select>
            </div>
          </td>
          <td class="main-table-fliter-period" v-if="tableType == 'search' || tableType == 'status'">
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
              <select v-model="fliter.startPeriod" @change="whenStartPeriodChange">
                <option
                  v-for="period in getPeriod()"
                  :key="period.nth"
                  :value="period.nth"
                >
                  {{ `第 ${period.nth} 節` }}
                </option>
              </select>
            </div>
            <span>到</span>
            <div class="ts-select is-solid">
              <select v-model="fliter.endPeriod">
                <option
                  v-for="period in getPeriod()"
                  :key="period.nth"
                  :value="period.nth"
                  v-show="fliter.startPeriod != null && period.nth >= fliter.startPeriod /* 結束時段不可小於開始時段 */"
                >
                  {{ `第 ${period.nth} 節` }}
                </option>
              </select>
            </div>
          </td>
          <td v-if="tableType == 'status'">
            <div class="ts-select is-solid">
              <select v-model="fliter.status">
                <option :value="status.applying">申請中</option>
                <option :value="status.denied">申請被拒絕</option>
                <option :value="status.approved_noKey">申請通過 ( 未借鑰匙 )</option>
                <option :value="status.approved_haveKey">申請通過 ( 已借鑰匙 )</option>
                <option :value="status.using">借用中</option>
                <option :value="status.afterUse_haveKey">借用完畢 ( 未還鑰匙 )</option>
                <option :value="status.afterUse_noKey">借用完畢 ( 已還鑰匙 )</option>
                <option :value="status.canceled_haveKey">已取消 ( 未還鑰匙 )</option>
                <option :value="status.canceled_nokey">已取消</option>
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
          <td v-if="tableType == 'search'">可申請時段</td><td v-if="tableType == 'status'">時段</td>
          <td v-if="tableType == 'status'">狀態</td>
          <td><span class="ts-icon is-gears-icon"></span></td>
        </tr>
        <tr>
          <td>INS101</td>
          <td>資工系館 ( INS )</td>
          <td class="saveButton-tdFix">
            101 視聽教室 ( 階梯教室 )<save-button :classroomID="null" :in-isSave="null"/>
          </td>
          <td v-if="tableType == 'search' || tableType == 'status'">-</td>
          <td v-if="tableType == 'status'">未知</td>
          <td>
            <span class="ts-icon is-info-icon iconButton infoIconFix" @click="null"></span>
            <span v-if="false" class="ts-icon is-trash-can-icon iconButton-danger trashcanIconFix" @click="null"></span>
            <!-- only status page have other iconButton -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import floor_config from "@/assets/floor/floor-config.json"; // 平面圖排版的設定檔
  import schedule_config from "@/assets/schedule-config.json"; // 課表時段的設定檔
  import saveButton from "@/components/main/other/SaveButton.vue"; // 收藏按鈕comp

  export default{
    components: {
      "save-button": saveButton
    },
    props: [
      "tableType", // 表格類型 -> { "search": 搜尋教室page, "status": 借用狀態page, "save": 我的收藏page }
      "insertData" // 要插入表格的數筆資料
    ],
    data(){
      return {
        fliter: null, // resetFliter() will init
        status: { // 時段狀態
          applying: 0, // 申請中
          denied: 1, // 申請被拒絕
          approved_noKey: 2, // 申請通過(未借鑰匙)
          approved_haveKey: 3, // 申請通過(已借鑰匙)
          using: 4, // 借用中
          afterUse_haveKey: 5, // 借用完畢(未還鑰匙)
          afterUse_noKey: 6, // 借用完畢(已還鑰匙)
          canceled_haveKey: 7, // 已取消(未還鑰匙)
          canceled_nokey: 8, // 已取消
        }
      }
    },
    created(){
      this.resetFliter();
    },
    methods: {
      getFloorOption(){ // 獲取樓層選項
        try{
          return Object.keys(floor_config.B[this.fliter.building].F);
        }catch{null}
        return [];
      },
      getClassroomOption(){ // 獲取教室id選項
        try{
          return Object.keys(floor_config.B[this.fliter.building].F[this.fliter.floor].C);
        }catch{null}
        return [];
      },
      getPeriod(){ // 獲取有哪幾節課
        return schedule_config.periodTime;
      },
      
      whenBuildingChange(){ // 如果大樓改變,重置樓層和教室id
        this.fliter.floor = null;
        this.fliter.classroomID = null;
      },
      whenFloorChange(){ // 如果樓層改變.重置教室id
        this.fliter.classroomID = null;
      },
      whenStartPeriodChange(){ // 如果開始時段改變,將結束時段設為開始時段
        this.fliter.endPeriod = this.fliter.startPeriod;
      },
      
      resetFliter(){ // 重置篩選列
        this.fliter = {
          id: "",
          building: null,
          floor: null,
          classroomID: null,
          day: null,
          startPeriod: null,
          endPeriod: null,
          status: null
        }
      }
    }
  }
</script>

<style scoped>
  .iconButton{
    padding: 8px;
    border-radius: 4px;
    color: #000;
  }
  .iconButton:hover{
    background-color: #cff;
  }
  .iconButton-danger{
    padding: 8px;
    border-radius: 4px;
    color: #f00;
  }
  .iconButton-danger:hover{
    background-color: #fdd;
  }
  .infoIconFix{
    padding: 8px 12.18px;
  }
  .trashcanIconFix{
    padding: 8px 8.68px;
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
    font-weight: bold; user-select: none;
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