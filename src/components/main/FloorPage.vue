<template>
  <building-selector @building="(v)=>{building=v;}"/>
  <floor-selector :in-building="building" @classroomID="getData"/>
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
        classroom: null // classroom資料
      }
    },
    created(){
      this.getData("default"); // DOM元素被渲染時的預設教室資料(頁面載入時,後端可能來不及傳教室資料到前端)
    },
    methods: {
      getData(classroomID){ // 當平面圖某個教室被點擊,跟後端拿該教室的資料,會更新整個頁面的相關資料
        this.classroom = getClassroomData(classroomID); // 跟後端請求 classroomData
      },
    }
  }
</script>