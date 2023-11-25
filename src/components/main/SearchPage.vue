<template>
  <data-table :table-type="'search'" :insert-data="null"/>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  
  export default{
    components: {
      "data-table": dataTable
    },
    data(){
      return {
        
      }
    }
  }
</script>