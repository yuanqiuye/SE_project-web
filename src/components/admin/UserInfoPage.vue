<template>
  <user-info-table :insert-data="insertData"/>
</template>

<script>
  import userInfoTable from "@/components/admin/other/UserInfoTable.vue";
  import { getAllUserPoint } from "@/api/app";
  
  export default{
    components: {
      "user-info-table": userInfoTable
    },
    data(){
      return {
        insertData: getAllUserPoint()
      }
    }
  }
</script>