<template>
  <data-table :tableType="'save'"></data-table>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  
  export default{
    components: {
      "data-table": dataTable
    }
  }
</script>