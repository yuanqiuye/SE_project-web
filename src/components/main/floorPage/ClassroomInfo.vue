<template>
  <div class="classroomInfo borderShadow ts-box">
    <table class="ts-table is-definition">
      <tbody>
        <tr>
          <td>教室名稱</td>
          <td class="classroomInfo-name">
            {{ classroom.info.name }}
            <save-button :classroomID="classroom.id" :in-isSave="classroom.isSave"/>
          </td>
        </tr>
        <tr>
          <td>人數</td>
          <td>{{ classroom.info.number }}</td>
        </tr>
        <tr>
          <td>器材</td>
          <td>{{ classroom.info.equipment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import saveButton from "@/components/main/other/SaveButton.vue"; // 收藏按鈕comp

  export default{
    components: {
      "save-button": saveButton
    },
    props: [
      "classroom" // 教室資料
    ],
    data(){}
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
  .classroomInfo-name{
    padding-bottom: 0;
    display: flex;
  }
</style>