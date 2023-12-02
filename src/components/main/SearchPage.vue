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
          { classroomID: "ins101", period: { day: 1, startPeriod: 1, endPeriod: 4 } },
          { classroomID: "ins105", period: { day: 2, startPeriod: 3, endPeriod: 3 } },
          { classroomID: "ins203", period: { day: 1, startPeriod: 6, endPeriod: 8 } }
        ]
      }
    }
  }
</script>