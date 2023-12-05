<template>
  <building-selector @building="(v)=>{building=v;}"/>
  <floor-selector :in-building="building" @classroomID="(v)=>{classroomID=v;}"/>
  <classroom-info :classroomID="classroomID"/>
  <setting-area :classroomID="classroomID"/>
</template>

<script>
  import buildingSelector from "@/components/user/floorPage/buildingSelector.vue"; // 樓層切換的元件
  import floorSelector from "@/components/user/floorPage/FloorSelector.vue"; // 平面圖的元件
  import classroomInfo from "@/components/user/floorPage/ClassroomInfo.vue"; // 教室資訊欄的元件
  import settingArea from "@/components/admin/floorPage/SettingArea.vue"; // 配置時段的元件
  
  export default{
    components: {
      "building-selector": buildingSelector,
      "floor-selector": floorSelector,
      "classroom-info": classroomInfo,
      "setting-area": settingArea
    },
    data(){
      return {
        building: null, // 現在是哪棟樓
        classroomID: null // classroom資料
      }
    }
  }
</script>