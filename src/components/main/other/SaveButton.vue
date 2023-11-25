<template>
  <span class="ts-icon is-star-icon" :class="isSave?'saveButton-saved':'saveButton'" @click="clickSaveButton"></span>
</template>

<script>
  import { updateSave } from '@/api/floor';

  export default{
    props: [
      "classroomID",
      "inIsSave"
    ],
    data(){
      return {
        isSave: false // cilent端的"教室是否被收藏"
      }
    },
    created(){
      this.setState(this.inIsSave); // 頁面載入時,更新cilent端的"教室是否被收藏"
    },
    methods: {
      setState(nextState){
        this.isSave = nextState;
      },
      clickSaveButton(){
        this.setState(!this.isSave);
        updateSave(this.classroomID, this.isSave); // 更新user的"教室是否被收藏"
      }
    },
    watch: {
      classroomID(){
        this.setState(this.inIsSave); // 由外部更新狀態,非人為操作,不會更新後端資料
      },
      inIsSave(){
        this.setState(this.inIsSave); // 由外部更新狀態,非人為操作,不會更新後端資料
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