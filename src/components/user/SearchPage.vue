<template>
  <data-table :enable-col="{ period: '可借用時段' }" :insert-data="insertData"/>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  import config from "@/assets/schedule-config.json"; // 課表時段的設定檔
  import { getAllClassroomPeriodData } from '@/api/app';
  
  export default{
    components: {
      "data-table": dataTable
    },
    data(){
      return {
        insertData: []
      }
    },
    created(){
      const classroomPeriodData = getAllClassroomPeriodData(); // 全部教室的借用資料
      const periodNumber = config.periodTime.length;
      
      for (let classroomID of Object.keys(classroomPeriodData)){ // 遍歷所有教室
        let periodState = Array.from(Array(1+5), () => Array(1+periodNumber).fill(false));
        // 生成空狀態表(表格全部填無法借用)
        
        for (const p of classroomPeriodData[classroomID].idle){
          for (let i = p.startPeriod; i <= p.endPeriod; i++) periodState[p.day][i] = true; // 更新狀態表 (true: 可借用)
        }
        // 更新狀態表(可借用)
        
        for (const p of classroomPeriodData[classroomID].used){
          for (let i = p.startPeriod; i <= p.endPeriod; i++) periodState[p.day][i] = false; // 更新狀態表 (false: 已被借用或不能借)
        }
        // 更新狀態表(已被借用)
        
        for (let day = 1; day <= 5; day++){
          let p = null;
          for (let period = 1; period <= periodNumber; period++){
            if (periodState[day][period]){
              if (p == null) p = { day: day, startPeriod: period, endPeriod: period };
              else p.endPeriod = period;
            }else{
              if (p != null){
                this.insertData.push({ classroomID: classroomID, period: p });
                p = null;
              }
            }
          }
          if (p != null){ // 連續可借節次持續到最末堂的例外處理
            this.insertData.push({ classroomID: classroomID, period: p });
            p = null;
          }
          // 求連續可借節次
        }
      }
    }
  }
</script>