<template>
  <div class="ts-box borderShadow">
    <table class="main-table ts-table is-celled">
      <tbody>
        <tr>
          <td class="main-table-fliter-id">
            <div class="ts-input is-start-icon is-solid">
              <span class="ts-icon is-magnifying-glass-icon"></span>
              <input type="text" placeholder="教室代碼" maxlength="10">
            </div>
          </td>
          <td>
            <div class="ts-select is-solid">
              <select>
                <option>資工系館 ( INS )</option>
                <option>電綜大樓 ( ECG )</option>
              </select>
            </div>
          </td>
          <td class="main-table-fliter-classroom">
            <div class="ts-select is-solid">
              <select>
                <option>B1</option>
                <option>1F</option>
                <option>2F</option>
              </select>
            </div>
            <div class="ts-select is-solid">
              <select>
                <option>101</option>
                <option>105</option>
              </select>
            </div>
          </td>
          <td class="main-table-fliter-period">
            <div class="ts-select is-solid">
              <select>
                <option>星期一</option>
                <option>星期二</option>
                <option>星期三</option>
                <option>星期四</option>
                <option>星期五</option>
              </select>
            </div>
            <div class="ts-select is-solid">
              <select>
                <option>第一節</option>
                <option>第二節</option>
                <option>第三節</option>
              </select>
            </div>
            <span>到</span>
            <div class="ts-select is-solid">
              <select>
                <option>第一節</option>
                <option>第二節</option>
                <option>第三節</option>
              </select>
            </div>
          </td>
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
          <td>可申請時段</td>
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
        <tr>
          <td>INS101</td>
          <td>資工系館 ( INS )</td>
          <td>101 視聽教室 ( 階梯教室 )</td>
          <td>-</td>
          <td>
            <span class="ts-icon is-info-icon iconButton" @click="null"></span>
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

<style scoped>
  .iconButton{
    padding: 8px;
    border-radius: 4px;
  }
  .iconButton:hover{
    background-color: #ddd;
  }
  .main-table td{
    text-align: center; white-space: nowrap;
    overflow-x: hidden;
  }
  .main-table > tbody > tr:nth-child(1) > td{
    padding: 6px 8px;
  }
  .main-table > tbody > tr:nth-child(2) > td{
    background-color: #e4e4e4;
    font-weight: bold;
  }
  .main-table-resetButton > span.ts-icon{
    margin-left: 4px;
  }
  .main-table-fliter-id > div{
    width: 120px;
  }
  .main-table-fliter-classroom > div:not(:first-child){
    margin-left: 6px;
  }
  .main-table-fliter-period > div:not(:first-child){
    margin-left: 6px;
  }
  .main-table-fliter-period > span{
    margin-left: 6px;
  }
</style>