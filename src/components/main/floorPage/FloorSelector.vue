<template>
  <div class="floor box">
    <div class="floor-main">
      <div>
        <img class="floor-main-bg" draggable="false" :src="getBGurl(slt.building, slt.floor)">
        <div
          class="block"
          v-for="block in getBlockData(slt.building, slt.floor)"
          :key="block.id"
          :style="blockStyle(block)"
          @click="setClassroom(block.id)"
        >
          {{ block.id }}
        </div>
      </div>
    </div>
    <div class="floor-switch">
      <span class="ts-icon is-caret-up-icon" @click="clickSwitchButton('up')"></span>
      <span class="floor-switch-nth">{{ slt.floor+"F" }}</span>
      <span class="ts-icon is-caret-down-icon" @click="clickSwitchButton('down')"></span>
    </div>
  </div>
</template>

<script>
  import { getClassroomData } from '@/api/floor';
  import config from "@/assets/floor/floor-config.json"; // 平面圖排版的設定檔

  export default{
    props: [
      "in-building" // FloorPage.vue(父comp) 傳進來的樓層代號
    ],
    data(){
      return {
        slt: { // selector
          building: null, // 目前大樓
          floor: null, // 目前樓層
          classroomID: null // 目前選擇的教室
        }
      }
    },
    created(){ // 初始化平面圖
      this.resetBuilding();
    },
    mounted(){
      this.sendClassroomData(); // 將預設的 classroomID 傳給 FloorPage.vue(父comp)
    },
    methods: {
      setBuilding(building){ // 切換大樓
        this.slt.building = building;
        this.resetFloor(); // 切換大樓後,將樓層和教室設為預設值
      },
      setFloor(floor){ // 切換樓層
        this.slt.floor = floor;
        this.resetClassroom(); // 切換樓層後,將教室設為預設值
      },
      setClassroom(classroomID){ // 切換教室
        this.slt.classroomID = classroomID;
        this.sendClassroomData(); // 切換教室會將 classroom資料 傳給 FloorPage.vue(父comp)
      },
      
      resetBuilding(){ // 將 大樓+樓層+教室 設為預設值
        this.setBuilding(config.default); // 預設大樓
      },
      resetFloor(){ // 將 樓層+教室 設為預設值
        this.setFloor(config.B[this.slt.building].default); // 大樓的樓層預設值
      },
      resetClassroom(){ // 將 教室 設為預設值
        this.setClassroom(config.B[this.slt.building].F[this.slt.floor].default); // 樓層的教室預設值
      },
      
      getBGurl(/* 注意一下傳不傳參數會不會更新 */){ // 產生平面圖背景圖片的實際可用路徑
        const imgURL = config.B[this.slt.building].F[this.slt.floor].bgURL; // 經由 config 取得背景圖片的相對路徑
        return require(`@/assets/floor/${this.slt.building}/${imgURL}`); // 轉為可用的實際路徑後,return
      },
      getBlockData(){ // 教室的方形按鈕的繪製參數
        return config.B[this.slt.building].F[this.slt.floor].C;
      },
      blockStyle(block){ // 方形按鈕的座標/大小/顏色
        const style = { left: `${block.left}px`, top: `${block.top}px`, width: `${block.width}px`, height: `${block.height}px` };
        if (this.slt.classroomID == block.id) style.backgroundColor = "#3ee";
        return style;
      },
      
      sendClassroomData(){ // 將 classroom資料 傳給 FloorPage.vue(父comp)
        const id = this.slt.building + this.slt.classroomID;
        const classroom = getClassroomData(id); // 跟後端拿新教室的資料,會更新整個頁面的相關資料
        this.$emit("classroom", classroom); // 將目前選擇的教室的 classroom資料 傳給 FloorPage.vue(父comp)
      },
      clickSwitchButton(switchType){ // 當上下樓按鈕被點擊
        const floorList = Object.keys(config.B[this.slt.building].F);
        const nowFloorIndex = floorList.indexOf(this.slt.floor);
        
        let nextFloorIndex = nowFloorIndex;
        if (switchType == "up") nextFloorIndex++;
        else if (switchType == "down")  nextFloorIndex--;
        nextFloorIndex = (nextFloorIndex + floorList.length) % floorList.length;
        
        this.setFloor(floorList[nextFloorIndex]); // 切換樓層
      },
    },
    watch: {
      inBuilding(newValue){ // FloorPage.vue(父comp) 傳進來的樓層代號改變時,切換大樓
        this.setBuilding(newValue);
      }
    },
  }
</script>

<style scoped>
  .block{
    position: absolute;
    background-color: #dee;
    font-size: 18px; font-weight: bold;
    display: flex; justify-content: center; align-items: center;
  }
  .block:hover{
    background-color: #bee;
  }
  .floor{
    margin-top: 8px;
    display: flex; justify-content: space-between;
    user-select: none;
  }
  .floor-main{
    width: 100%; height: 420px;
    padding: 10px 0;
    display: flex; justify-content: center; align-items: center;
  }
  .floor-main-bg{
    z-index: 1;
    pointer-events: none;
  }
  .floor-switch{
    width: 50px;
    margin: 4px 0; padding: 8px 0;
    border-left: 1px #ccc solid;
    font-size: 20px; color: #000; font-weight: bold;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .floor-switch > span.ts-icon{
    width: 30px; height: 30px;
    border-radius: 4px;
    font-size: 26px; color: #666;
    display: flex; justify-content: center; align-items: center;
  }
  .floor-switch > span.ts-icon:hover{
    background-color: #ddd;
  }
  .floor-switch-nth{
    margin: 16px 0;
  }
</style>