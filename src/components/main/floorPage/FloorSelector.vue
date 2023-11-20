<template>
  <div class="floor box">
    <div class="floor-main">
      <div>
        <img draggable="false" :src="getBGurl(slt.building, slt.floor)">
        <div
          class="block"
          v-for="block in getBlockData(slt.building, slt.floor)"
          :key="block.id"
          :style="blockStyle(block)"
          @click="clickBlock(block)"
        >
          {{ block.id }}
        </div>
      </div>
    </div>
    <div class="floor-switch">
      <span class="ts-icon is-caret-up-icon" @click="clickSwitchButton('up')"></span>
      <span class="floor-switch-nth">{{  }}</span>
      <span class="ts-icon is-caret-down-icon" @click="clickSwitchButton('down')"></span>
    </div>
  </div>
</template>

<script>
  import config from "@/assets/floor/floor-config.json"; // 用來對元素排版的設定檔

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
      this.$emit('classroomID', this.slt.building+this.slt.classroomID); // 將預設的 classroomID 傳給 FloorPage.vue(父comp)
    },
    methods: {
      resetBuilding(){ // 將 大樓+樓層+教室 設為預設值
        this.slt.building = config.default; // 預設大樓
        this.resetFloor();
      },
      resetFloor(){ // 將 樓層+教室 設為預設值
        this.slt.floor = config.B[this.slt.building].default; // 大樓的樓層預設值
        this.resetClassroom();
      },
      resetClassroom(){ // 將 教室 設為預設值
        this.slt.classroomID = config.B[this.slt.building].F[this.slt.floor].default; // 樓層的教室預設值
      },
      
      setBuilding(building){ // 切換大樓
        this.slt.building = building;
        this.resetFloor(); // 切換大樓後,將樓層和教室設為預設值
      },
      setFloor(floor){ // 切換樓層
        this.slt.floor = floor;
        this.resetClassroom(); // 切換樓層後,將教室設為預設值
      },
      setClassroom(classroomID){ // 切換教室
        this.slt.classroomID = classroomID
      },
      
      getBGurl(/* 注意一下傳不傳參數會不會更新 */){ // 產生平面圖背景圖片的實際可用路徑
        const imgURL = config.B[this.slt.building].F[this.slt.floor].bgURL; // 經由 config 取得背景圖片的相對路徑
        return require(`@/assets/floor/${this.slt.building}/${imgURL}`); // 轉為可用的實際路徑後,return
      },
      getBlockData(){ // 教室的方形按鈕的繪製參數
        return config.B[this.slt.building].F[this.slt.floor].C;
      },
      blockStyle(block){ // 方形按鈕的座標和大小
        return {
          left: `${block.left}px`,
          top: `${block.top}px`,
          width: `${block.width}px`,
          height: `${block.height}px`,
          "backgroundColor": (this.slt.classroomID == block.id)?"#6ee":""
        };
      },
      clickBlock(block){ // 按下教室按鈕,切換教室
        this.setClassroom(block.id);
        this.$emit('classroomID', this.slt.building+block.id); // 將目前選擇的教室的 classroomID 傳給 FloorPage.vue(父comp)
      },
      
      clickSwitchButton(switchType){ // 切換樓層
        if (switchType == "up") alert("up");
        else if (switchType == "down") alert("down");
      },
    },
    watch: {
      inBuilding(/* newValue */){ // FloorPage.vue(父comp) 傳進來的樓層代號改變時,切換大樓
        // alert(newValue)
        // this.setBuilding(newValue);
      }
    },
  }
</script>

<style scoped>
  .block{
    position: absolute;
    background-color: #dff;
    font-size: 18px; font-weight: bold; user-select: none;
    display: flex; justify-content: center; align-items: center;
  }
  .block:hover{
    background-color: #cee;
  }
  .floor{
    margin-top: 8px;
    display: flex; justify-content: space-between;
  }
  .floor-main{
    width: 100%;
    padding: 10px 0;
    display: flex; justify-content: center; align-items: center;
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