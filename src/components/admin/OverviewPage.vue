<template>
  <data-table
    :table-type="'overviewPage_admin'"
    :enable-col="{ account: '借用人', period: '時段', status: '狀態' }"
    :insert-data="insertData"
  />
</template>

<script>
  import dataTable from "@/components/user/other/DataTable.vue";
  import { getAllUserPeriodData } from "@/api/app";
  
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
      const allUserPeriodData = getAllUserPeriodData();
      for (let p of allUserPeriodData){
        p.account = p.pid.slice(0, p.pid.indexOf("-"));
        if (p.status >= 2 && p.status <= 5) this.insertData.push(p);
      }
    }
  }
</script>