<template>
  <data-table :table-type="'requestPage_admin'" :enable-col="{ account: '學號', period: '時段' }" :insert-data="insertData"/>
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
        if (p.status == 0) this.insertData.push(p);
      }
    }
  }
</script>