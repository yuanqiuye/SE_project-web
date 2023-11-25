<template>
  <data-table :tableType="'status'" :insert-data="null"/>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  
  export default{
    components: {
      "data-table": dataTable
    }
  }
</script>