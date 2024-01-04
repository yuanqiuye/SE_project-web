<template>
  <data-table :insert-data="getinsertData()" />
</template>

<script>
import DataTable from "./other/DataTable.vue";
import { getAllSave } from "@/api/save";

export default {
  components: {
    "data-table": DataTable
  },
  data() {
    return {
      insertData: [] // 初始化为空数组或适当的默认值
    };
  },
  async created() {
    await this.fetchDataAndRenderTable();
  },
  methods: {
    async fetchDataAndRenderTable() {
      this.insertData = await this.getInsertData();
    },
    async getInsertData() {
      try {
        const saveData = await getAllSave();

        let insertData = [];
        for (let id of saveData) {
          insertData.push({ classroomID: id });
        }

        return insertData;
      } catch (error) {
        console.error('获取插入数据时发生错误:', error);
        return []; // 或者根据实际情况返回适当的默认值
      }
    }
  }
};
</script>
