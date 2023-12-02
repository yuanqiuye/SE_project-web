<template>
  <data-table :enable-col="{ period: '時段', status: '狀態' }" :insert-data="insertData"/>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  import { getUserPeriodData } from '@/api/app';
  
  export default{
    components: {
      "data-table": dataTable
    },
    data(){
      return {
        insertData: null
      }
    },
    created(){
      this.insertData = getUserPeriodData();
    }
  }
</script>