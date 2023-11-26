<template>
  <data-table :table-type="'search'" :insert-data="insertData"/>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  
  export default{
    components: {
      "data-table": dataTable
    },
    data(){
      return {
        insertData: [
          { classroomID: "ins101", period: { day: 1, startPeriod: 1, endPeriod: 4 }, status: 0 },
          { classroomID: "ins105", period: { day: 2, startPeriod: 3, endPeriod: 3 }, status: 1 },
          { classroomID: "ins203", period: { day: 1, startPeriod: 6, endPeriod: 8 }, status: 2 }
        ]
      }
    }
  }
</script>