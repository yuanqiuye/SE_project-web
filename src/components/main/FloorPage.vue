<template>
  <building-selector @building="(v)=>{building=v;}"/>
  <floor-selector :in-building="building" @classroom="(v)=>{classroom=v;}"/>
  <classroom-info :classroom="classroom"/>
  <apply-area :classroom="classroom"/>
</template>

<script>
  import { getClassroomData } from '@/api/floor';
  import buildingSelector from "./floorPage/buildingSelector.vue";
  import floorSelector from "./floorPage/FloorSelector.vue";
  import classroomInfo from "./floorPage/ClassroomInfo.vue";
  import applyArea from "./floorPage/ApplyArea.vue";
  
  export default{
    components: {
      "building-selector": buildingSelector, // 樓層切換的元件
      "floor-selector": floorSelector, // 平面圖的元件
      "classroom-info": classroomInfo, // 教室資訊欄的元件
      "apply-area": applyArea // 課表欄&申請確認框的元件
    },
    data(){
      return {
        building: null, // 現在是哪棟樓
        classroom: getClassroomData(null) // classroom資料
      }
    }
  }
</script>