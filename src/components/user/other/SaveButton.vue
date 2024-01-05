<template>
  <span class="ts-icon is-star-icon" :class="isSave?'saveButton-saved':'saveButton'" @click="clickSaveButton"></span>
</template>

<script>
  import allClassroomInfo from "@/assets/classroom-info.json"; // 全部的教室資訊
  import { getIsSave, addSave, removeSave } from '@/api/save';

  export default{
    props: [
      "classroomID"
    ],
    data(){
      return {
        isSave: false // cilent端的"教室是否被收藏"
      }
    },
    async created(){
      this.isSave = await getIsSave(this.classroomID); // 頁面載入時,更新cilent端的"教室是否被收藏"
    },
    methods: {
      async clickSaveButton(){ // 更新user的"教室是否被收藏"
        if (!(this.classroomID in allClassroomInfo)) return; // 如果教室資料不存在,無法更新
        
        this.isSave = !this.isSave;
        if (this.isSave) addSave(this.classroomID);
        else removeSave(this.classroomID);
        window.location.reload(); // force reload
      }
    },
    watch: {
      async classroomID(){ // 教室id改變時,更新cilent端的"教室是否被收藏"
        this.isSave = await getIsSave(this.classroomID);
      }
    }
  }
</script>

<style scoped>
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
<style>
  .saveButton-tdFix{ /* bad solution */
    padding-bottom: 0 !important;
    display: flex;
  }
</style>