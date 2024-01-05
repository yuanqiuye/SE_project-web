<template>
  <data-table :enable-col="{ period: '可借用時段' }" :insert-data="insertData" />
</template>

<script>
import dataTable from "./other/DataTable.vue";
import config from "@/assets/schedule-config.json"; // 課表時段的設定檔
import { getAllEnablePeriodData, getAllUserPeriodData } from '@/api/app';

export default {
  components: {
    "data-table": dataTable
  },
  data() {
    return {
      insertData: []
    }
  },
  async created() {
    const enablePeriodData = await getAllEnablePeriodData(); // 全部教室的借用資料
    const periodNumber = config.periodTime.length;

    for (let classroomID of Object.keys(enablePeriodData)) {
      let periodState = Array.from(Array(1 + 5), () => Array(1 + periodNumber).fill(false));

      for (const p of enablePeriodData[classroomID]) {
        for (let i = p.startPeriod; i <= p.endPeriod; i++) periodState[p.day][i] = true;
      }

      const allUserPeriodData = await getAllUserPeriodData(); // 使用 await 等待函數完成

      for (const p of Object.values(allUserPeriodData)) {
        if (p.classroomID == classroomID && (p.status == 2 || p.status == 3)) {
          for (let i = p.period.startPeriod; i <= p.period.endPeriod; i++) periodState[p.period.day][i] = false;
        }
      }

      for (let day = 1; day <= 5; day++) {
        let p = null;
        for (let period = 1; period <= periodNumber; period++) {
          if (periodState[day][period]) {
            if (p == null) p = { day: day, startPeriod: period, endPeriod: period };
            else p.endPeriod = period;
          } else {
            if (p != null) {
              this.insertData.push({ classroomID: classroomID, period: p });
              p = null;
            }
          }
        }
        if (p != null) {
          this.insertData.push({ classroomID: classroomID, period: p });
          p = null;
        }
      }
    }
  }

}
</script>