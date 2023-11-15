<template>
  <div class="floor box">
    <div class="floor-main">
      <floor-ins1 @ID="sendID"/>
    </div>
    <div class="floor-switch">
      <span class="ts-icon is-caret-up-icon" @click="clickSwitchButton('up')"></span>
      <span class="floor-switch-nth">{{ floor }}</span>
      <span class="ts-icon is-caret-down-icon" @click="clickSwitchButton('down')"></span>
    </div>
  </div>
</template>

<script>
  import ins1 from "./floor/ins1.vue";

  export default{
    components: {
      "floor-ins1": ins1 // 資工系館1F
    },
    props: [
      "building" // FloorPage.vue(父comp) 傳進來的樓層代號
    ],
    data(){
      return {
        floor: "1F" // 目前樓層,顯示用 (暫定)
      }
    },
    methods: {
      sendID(id){ // 傳遞 classroomID 的 func
        this.$emit("classroomID", id); // 接收 <CRid>.vue(子comp) 回傳的 classroomID 並傳給 FloorPage.vue(父comp)
      },
      clickSwitchButton(switchType){ // 切換樓層
        if (switchType == "up") alert("up");
        else if (switchType == "down") alert("down");
      },
    },
    watch: {
      building(/* newValue */){ // FloorPage.vue(父comp) 傳進來的樓層代號改變時
        
      }
    },
  }
</script>

<style scoped>
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