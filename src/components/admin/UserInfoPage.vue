<template>
  <user-info-table :insert-data="insertData"/>
</template>

<script>
  import userInfoTable from "@/components/admin/other/UserInfoTable.vue";
  
  export default{
    components: {
      "user-info-table": userInfoTable
    },
    data(){
      return {
        insertData: [
          { account: "01057900", role: 0, point: 2, banned: 1 },
          { account: "01057901", role: 1, point: 3, banned: 0 },
          { account: "01057902", role: 2, point: 4, banned: 0 },
        ]
      }
    }
  }
</script>