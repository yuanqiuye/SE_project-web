<template>
  <div class="ts-box">
    <table class="main-table ts-table is-celled">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>
            <span class="main-table-resetButton ts-icon is-rotate-right-icon" @click="null"></span>
          </td>
        </tr>
        <tr>
          <td>大樓</td>
          <td>教室名稱</td>
          <td></td>
        </tr>
        <tr>
          <td>資工系館 ( INS )</td>
          <td>101 視聽教室 ( 階梯教室 )</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

</script>

<style scoped>
  .main-table td{
    text-align: center;
  }
  .main-table > tbody > tr:nth-child(2) > td{
    background-color: #eee;
    font-weight: bold;
  }
  .main-table-resetButton{
    padding: 6px;
    border-radius: 4px;
  }
  .main-table-resetButton:hover{
    background-color: #ddd;
  }
</style>