<template>
  <data-table :tableType="'save'" :insert-data="null"/>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  
  export default{
    components: {
      "data-table": dataTable
    }
  }
</script>