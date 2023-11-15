<template>
  <building-selector @building="(v)=>{building=v;}"/>
  <floor-selector :building="building" @classroomID="getData"/>
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
      "building-selector": buildingSelector,
      "floor-selector": floorSelector,
      "classroom-info": classroomInfo,
      "apply-area": applyArea
    },
    data(){
      return {
        building: null,
        classroom: null // classroom資料
      }
    },
    created(){
      this.getData("ins105");
    },
    methods: {
      getData(classroomID){ // 跟後端請求 classroomData
        this.classroom = getClassroomData(classroomID); // classroomID 僅用於跟後端拿 classroom資料時 需要的 key
      },
    }
  }
</script>

