<template>
  <data-table :tableType="'search'"></data-table>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  
  export default{
    components: {
      "data-table": dataTable
    }
  }
</script>