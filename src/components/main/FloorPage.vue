<template>
  <building-selector @building="(v)=>{building=v;}"/>
  <floor-selector :in-building="building" @classroom="(v)=>{classroom=v;}"/>
  <classroom-info :classroom="classroom"/>
  <apply-area :classroom="classroom"/>
</template>

<script>
  import { getClassroomData } from '@/api/floor';
  import buildingSelector from "./floorPage/buildingSelector.vue"; // 樓層切換的元件
  import floorSelector from "./floorPage/FloorSelector.vue"; // 平面圖的元件
  import classroomInfo from "./floorPage/ClassroomInfo.vue"; // 教室資訊欄的元件
  import applyArea from "./floorPage/ApplyArea.vue"; // 課表欄&申請確認框的元件
  
  export default{
    components: {
      "building-selector": buildingSelector,
      "floor-selector": floorSelector,
      "classroom-info": classroomInfo,
      "apply-area": applyArea
    },
    data(){
      return {
        building: null, // 現在是哪棟樓
        classroom: getClassroomData(null) // classroom資料
      }
    }
  }
</script>