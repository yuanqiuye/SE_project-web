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
          {{ isShowID(block.id) ? block.id : "" }}
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
  import config from "@/assets/floor/floor-config.json"; // 平面圖排版的設定檔
  import classroomInfo from "@/assets/classroom-info.json"; // 全部的教室資訊

  export default{
    props: [
      "in-building" // FloorPage.vue(父comp) 傳進來的樓層代號
    ],
    data(){
      return {
        slt: { // selector
          building: null, // 目前館樓
          floor: null, // 目前樓層
          classroomID: null // 目前選擇的教室
        }
      }
    },
    created(){ // 初始化平面圖
      this.resetBuilding();
      this.urlSwitch(this.$route.query.id);
    },
    mounted(){
      this.sendClassroomID(); // 將預設的 classroomID 傳給 FloorPage.vue(父comp)
    },
    methods: {
      urlSwitch(id){ // 網址的id參數會決定初始選擇的教室,若沒給則用default
        if (id == undefined) return; // 網址沒給參數
        if (!(id in classroomInfo)) return; // id不存在或沒有資料
        
        for (const building of Object.keys(config.B)){
          for (const floor of Object.keys(config.B[building].F)){
            for (const classroomID of Object.keys(config.B[building].F[floor].C)){
              if (id == building+classroomID){
                this.setBuilding(building);
                this.setFloor(floor);
                this.setClassroom(classroomID);
              }
            }
          }
        }
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
        this.slt.classroomID = classroomID;
        this.sendClassroomID(); // 切換教室會將 classroom資料 傳給 FloorPage.vue(父comp)
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
      getBlockData(){ // 教室的矩形按鈕的繪製參數
        return config.B[this.slt.building].F[this.slt.floor].C;
      },
      blockStyle(block){ // 矩形按鈕的座標/大小/顏色
        let style = { left: `${block.left}px`, top: `${block.top}px`, width: `${block.width}px`, height: `${block.height}px` };
        if (!(this.slt.building+block.id in classroomInfo)){ // 如果找不到教室資料
          style.backgroundColor = "#bbb"; // 設為灰色
          style.pointerEvents = "none"; // click event 無效
          return style;
        }
        if (this.slt.classroomID == block.id) style.backgroundColor = "#3ee"; // 被選取的 block ,設為深藍色
        return style;
      },
      isShowID(id){ // 是否顯示矩形按鈕內的教室id
        return this.slt.building+id in classroomInfo;
      },
      
      sendClassroomID(){ // 將 classroomID 傳給 FloorPage.vue(父comp)
        this.$emit("classroomID", this.slt.building + this.slt.classroomID) // 教室的唯一id
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