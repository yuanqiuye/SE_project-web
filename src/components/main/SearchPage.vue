<template>
  <div class="ts-box borderShadow">
    <table class="main-table ts-table is-celled">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <span class="ts-icon is-caret-left-icon main-table-resetButton iconButton">
              <span class="ts-icon is-rotate-right-icon" @click="null"></span>
            </span>
          </td>
        </tr>
        <tr>
          <td>#</td>
          <td>大樓</td>
          <td>教室名稱</td>
          <td>時段</td>
          <td>
            <span class="ts-icon is-gears-icon"></span>
          </td>
        </tr>
        <tr>
          <td>INS101</td>
          <td>資工系館 ( INS )</td>
          <td>101 視聽教室 ( 階梯教室 )</td>
          <td>-</td>
          <td>
            <span class="ts-icon is-info-icon iconButton" @click="null"></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

</script>

<style>
  .iconButton{
    padding: 8px;
    border-radius: 4px;
  }
  .iconButton:hover{
    background-color: #ddd;
  }
  .main-table td{
    text-align: center;
  }
  .main-table > tbody > tr:nth-child(2) > td{
    background-color: #eee;
    font-weight: bold;
  }
  .main-table-resetButton > span.ts-icon{
    margin-left: 4px;
  }
</style>