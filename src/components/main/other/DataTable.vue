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
                <option v-for="classroomID in getClassroomOption()" :key="classroomID">{{ classroomID }}</option>
              </select>
            </div>
          </td>
          <td class="main-table-fliter-period">
            <div class="ts-select is-solid">
              <select>
                <option>星期一</option>
                <option>星期二</option>
                <option>星期三</option>
                <option>星期四</option>
                <option>星期五</option>
              </select>
            </div>
            <div class="ts-select is-solid">
              <select>
                <option>第一節</option>
                <option>第二節</option>
                <option>第三節</option>
              </select>
            </div>
            <span>到</span>
            <div class="ts-select is-solid">
              <select>
                <option>第一節</option>
                <option>第二節</option>
                <option>第三節</option>
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
      </tbody>
    </table>
  </div>
</template>

<script>
  import config from "@/assets/floor/floor-config.json"; // 平面圖排版的設定檔

  export default{
    data(){
      return {
        fliter: null
      }
    },
    created(){
      this.resetFliter();
    },
    methods: {
      whenBuildingChange(){
        this.fliter.floor = null;
        this.fliter.classroomID = null;
      },
      whenFloorChange(){
        this.fliter.classroomID = null;
      },
      
      getFloorOption(){
        try{
          return Object.keys(config.B[this.fliter.building].F);
        }catch{null}
        return [];
      },
      getClassroomOption(){
        try{
          return Object.keys(config.B[this.fliter.building].F[this.fliter.floor].C);
        }catch{null}
        return [];
      },
      
      resetFliter(){
        this.fliter = {
          id: "",
          building: null,
          floor: null,
          classroomID: null,
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