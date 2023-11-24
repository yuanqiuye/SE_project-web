<template>
  <data-table :tableType="'status'"></data-table>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  
  export default{
    components: {
      "data-table": dataTable
    }
  }
</script>