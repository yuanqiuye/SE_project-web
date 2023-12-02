<template>
  <data-table :enable-col="{}" :insert-data="getInsertData()"/>
</template>

<script>
  import dataTable from "./other/DataTable.vue";
  import { getAllSave } from "@/api/save";
  
  export default{
    components: {
      "data-table": dataTable
    },
    methods: {
      getInsertData(){
        let insertData = [];
        for (let id of getAllSave()) insertData.push({ classroomID: id });
        return insertData;
      }
    }
  }
</script>