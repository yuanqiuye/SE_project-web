<template>
  <div class="ts-center">
    <div class="building borderShadow ts-selection is-accent is-circular">
      <label class="item">
        <input type="radio" name="building" @click="$emit('building', 'ins')" :checked="building == 'ins'">
        <div class="text">資工系館&nbsp;(INS)</div>
      </label>
      <label class="item">
        <input type="radio" name="building" @click="$emit('building', 'ecg')" :checked="building == 'ecg'">
        <div class="text">電綜大樓&nbsp;(ECG)</div>
      </label>
    </div>
  </div>
</template>

<script>
  import config from "@/assets/floor/floor-config.json"; // 平面圖排版的設定檔
  import classroomInfo from "@/assets/classroom-info.json"; // 全部的教室資訊

  export default{
    created(){
      this.urlSwitch(this.$route.query.id);
    },
    data(){
      return {
        building: "ins"
      }
    },
    methods: {
      urlSwitch(id){ // 網址的id參數會決定初始選擇的館樓,若沒給則用default
        if (id == undefined) return; // 網址沒給參數
        if (!(id in classroomInfo)) return; // id不存在或沒有資料
        
        for (const building of Object.keys(config.B)){
          for (const floor of Object.keys(config.B[building].F)){
            for (const classroomID of Object.keys(config.B[building].F[floor].C)){
              if (id == building+classroomID) this.building = building;
            }
          }
        }
      },
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
</style>