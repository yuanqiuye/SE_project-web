<template>
  <data-table
    :table-type="'requestPage_admin'"
    :enable-col="{ account: '申請人', period: '時段' }"
    :insert-data="insertData"
  />
</template>

<script>
import dataTable from "@/components/user/other/DataTable.vue";
import { getAllUserPeriodData } from "@/api/app";

export default {
  components: {
    "data-table": dataTable,
  },
  data() {
    return {
      insertData: [],
    };
  },
  async created() {
    try {
      const allUserPeriodData = await getAllUserPeriodData();
      const dataArray = Object.values(allUserPeriodData);

      for (let p of dataArray) {
        p.account = p.pid.slice(0, p.pid.indexOf("-"));
        if (p.status >= 2 && p.status <= 5) this.insertData.push(p);
      }
    } catch (error) {
      console.error('Error fetching user period data:', error);
    }
  },
};
</script>
