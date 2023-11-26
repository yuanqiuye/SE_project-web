<template>
  <div class="classroomInfo borderShadow ts-box">
    <table class="ts-table is-definition">
      <tbody>
        <tr>
          <td>教室名稱</td>
          <td class="saveButton-tdFix">
            {{ classroomInfo.name }}
            <save-button :classroomID="classroomInfo.id"/>
          </td>
        </tr>
        <tr>
          <td>人數</td>
          <td>{{ classroomInfo.number }}</td>
        </tr>
        <tr>
          <td>器材</td>
          <td>{{ classroomInfo.equipment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { getClassroomInfo } from "@/assets/import"; // 查詢教室資訊
  import saveButton from "@/components/main/other/SaveButton.vue"; // 收藏按鈕comp

  export default{
    components: {
      "save-button": saveButton
    },
    props: [
      "classroomID" // 教室id
    ],
    data(){
      return {
        classroomInfo: getClassroomInfo(null)
      }
    },
    watch: {
      classroomID(newValue){
        this.classroomInfo = getClassroomInfo(newValue);
      }
    }
  }
</script>

<style scoped>
  .classroomInfo{
    margin-top: 8px;
    border: none;
    font-size: 16px;
  }
  .classroomInfo > table > tbody > tr > td:first-child{
    width: 100px;
    font-weight: bold;
  }
</style>