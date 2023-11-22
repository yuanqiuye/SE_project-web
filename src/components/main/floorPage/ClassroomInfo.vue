<template>
  <div class="classroomInfo borderShadow ts-box">
    <table class="ts-table is-definition">
      <tbody>
        <tr>
          <td>教室名稱</td>
          <td class="classroomInfo-name">
            {{ classroom.info.name }}
            <span
              class="ts-icon is-star-icon"
              :class="saveButton?'saveButton-saved':'saveButton'"
              @click="clickSaveButton()"
            ></span>
          </td>
        </tr>
        <tr>
          <td>人數</td>
          <td>{{ classroom.info.number }}</td>
        </tr>
        <tr>
          <td>器材</td>
          <td>{{ classroom.info.equipment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { updateSave } from '@/api/floor';

  export default{
    props: [
      "classroom" // 教室資料
    ],
    data(){
      return {
        saveButton: false // cilent端的"教室是否被收藏"
      }
    },
    created(){
      this.saveButton = this.classroom.isSave; // 頁面載入時,更新cilent端的"教室是否被收藏"
    },
    methods: {
      clickSaveButton(){
        let nextState = !this.saveButton;
        if (updateSave(this.classroom.id, nextState) == 1) this.saveButton = nextState; // 後端成功修改收藏,星星才會變顏色
      },
    },
    computed:{
      classroom_isSave(){
        return this.classroom.isSave;
      }
    },
    watch: {
      classroom_isSave(newValue){
        this.saveButton = newValue; // 父comp的classroom更新時,更新cilent端的"教室是否被收藏"
      }
    }
  }
</script>

<style scoped>
  .classroomInfo{
    margin-top: 8px;
    border: none;
    font-size: 16px;
  }
  .classroomInfo > table > tbody > tr > td:first-child{
    width: 100px;
    font-weight: bold;
  }
  .classroomInfo-name{
    padding-bottom: 0;
    display: flex;
  }
  .saveButton{
    margin: -5.5px 0 0 6px;
    border: none;
    color: #fff; font-size: 20px;
    -webkit-text-stroke: 1px #666;
  }
  .saveButton-saved{
    margin: -5.5px 0 0 6px;
    border: none;
    color: #f80; font-size: 20px;
    -webkit-text-stroke: 1px;
  }
</style>