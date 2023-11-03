<template>
  <div class="ts-center">
    <router-view></router-view>
  </div>
</template>

<style>
  .loginView{
    width: 400px; height: 600px;
    margin: 10px;
    background-color: #fffc; backdrop-filter: blur(20px);
    border-radius: 20px; box-shadow: 0 0 12px #000c;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
  }
  .loginView-inputbox{
    height: 300px;
    display: flex; flex-direction: column; justify-content: center;
  }
  .loginView-inputbox > input{
    height: 40px; width: 280px;
    border: 1px solid #888; border-radius: 20px; box-shadow: 0 0 4px #000b;
    font-family: monospace; font-size: 20px; text-align: center;
  }
  .loginView-inputbox > input:not(:first-child){
    margin-top: 8px;
  }
  .loginView-warning{
    color: #f00; font-weight: bold; text-align: center;
  }
  .loginView-button{
    border: none;
    box-shadow: 0 0 6px #000b;
  }
  .loginView-button:hover{
    background-color: #555;
  }
</style>
