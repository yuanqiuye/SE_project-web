<template>
  <user-info-table :insert-data="insertData"/>
</template>

<script>
import { ref, onMounted } from 'vue';
import userInfoTable from "@/components/admin/other/UserInfoTable.vue";
import { getAllUserPoint } from "@/api/app";

export default {
  components: {
    "user-info-table": userInfoTable
  },
  setup() {
    const insertData = ref([]);

    onMounted(async () => {
      try {
        insertData.value = await getAllUserPoint();
      } catch (error) {
        console.error('获取用户积分数据时发生错误:', error);
      }
    });

    return { insertData };
  }
}
</script>
