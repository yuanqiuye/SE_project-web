<template>
  <div class="ts-box borderShadow">
    <table class="main-table ts-table is-celled">
      <tbody>
        <tr>
          <td class="main-table-fliter-account">
            <div class="ts-input is-start-icon is-solid">
              <span class="ts-icon is-magnifying-glass-icon"></span>
              <input type="text" placeholder="學號" v-model="fliter.account">
            </div>
          </td>
          <td>
            <div class="ts-select is-solid">
              <select v-model="fliter.role">
                <option value="0">學生</option>
                <option value="1">教師</option>
                <option value="2">管理員</option>
              </select>
            </div>
          </td>
          <td></td>
          <td>
            <div class="ts-select is-solid">
              <select v-model="fliter.banned">
                <option value="0">正常</option>
                <option value="1">被封鎖</option>
              </select>
            </div>
          </td>
          <td>
            <span class="ts-icon is-caret-left-icon main-table-resetButton iconButton" title="重置篩選器" @click="resetFliter">
              <span class="ts-icon is-rotate-right-icon"></span>
            </span>
          </td>
        </tr>
        <tr>
          <td>使用者</td>
          <td>身分</td>
          <td>違規點數</td>
          <td>狀態</td>
          <td><span class="ts-icon is-gears-icon"></span></td>
        </tr>
        <tr v-for="rowData in insertData" :key="rowData.account" v-show="isShow(rowData)">
          <td>{{ rowData.account }}</td>
          <td>{{ getRoleText[rowData.role] }}</td>
          <td>
            <span
              class="ts-icon is-minus-icon iconButton"
              v-show="editingPoint.account == rowData.account"
              @click="minusPointButton"
            ></span>
            <span class="rowData-point">
              {{ (editingPoint.account == rowData.account) ? editingPoint.point : rowData.point }}
            </span>
            <span
              class="ts-icon is-plus-icon iconButton"
              v-show="editingPoint.account == rowData.account"
              @click="plusPointButton"
            ></span>
            <span
              class="ts-icon is-check-icon iconButton"
              title="確定修改"
              v-show="editingPoint.account == rowData.account"
              @click="confirmPointButton"
            ></span>
            <span
              class="ts-icon is-pen-icon iconButton"
              title="修改違規點數"
              v-show="!(editingPoint.account == rowData.account)"
              @click="editPointButton(rowData)"
            ></span>
          </td>
          <td>{{ getStateText[rowData.banned] }}</td>
          <td>
            <span
              class="ts-icon is-ban-icon iconButton-danger"
              title="封鎖"
              v-if="rowData.banned == 0"
              @click="banButton(rowData.account)"
            ></span>
            <span
              class="ts-icon is-unlock-icon iconButton"
              title="解除封鎖"
              v-if="rowData.banned == 1"
              @click="unbanButton(rowData.account)"
            ></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { setUserPoint, setUserBanState } from "@/api/app";

  export default{
    props: {
      insertData: { default: [] } // 要插入表格的數筆資料
    },
    data(){
      return {
        getRoleText: [ "學生", "教師", "管理員"],
        getStateText: [ "正常", "被封鎖" ],
        fliter: null, // resetFliter() will init
        editingPoint: { account: null, point: null }
      }
    },
    created(){
      this.resetFliter();
    },
    methods: {
      resetFliter(){ // 重置篩選列
        this.fliter = { account: "", role: null, banned: null };
      },
      isShow(rowData){ // 篩選器判斷哪一列要顯示
        let show = true;
        if (!rowData.account.includes(this.fliter.account)) show = false; // 學號篩選
        if (this.fliter.role != null && rowData.role != this.fliter.role) show = false; // 身分組篩選
        if (this.fliter.banned != null && rowData.banned != this.fliter.banned) show = false; // 權限篩選
        return show;
      },
      
      editPointButton(rowData){ // 點擊編輯點數按鈕
        this.editingPoint.account = rowData.account;
        this.editingPoint.point = rowData.point;
      },
      minusPointButton(){ // 減少點數
        if (this.editingPoint.point > 0) this.editingPoint.point--;
      },
      plusPointButton(){ // 增加點數
        if (this.editingPoint.point < 10) this.editingPoint.point++;
      },
      confirmPointButton(){ // 確認修改按鈕
        const result = window.confirm(`是否要修改違規點數 ?`); // 彈出式確認框
        if (result){
          const returnCode = setUserPoint(this.editingPoint.account, this.editingPoint.point); // 執行指定的 api function
          switch (returnCode){
            case 200: // api操作執行成功
              alert(`修改成功 !`);
              break;
            case 400: // api操作執行失敗
              alert(`修改失敗 !`);
              break;
            default: // 未知錯誤
              alert("修改成功 !");
              break;
          }
        }
        this.editingPoint.account = null; // 重置
      },
      
      runConfirmDialog(questionText, resultText, f_ban, account, state){ // 自定義彈出式確認框
        const result = window.confirm(`${questionText} ?`); // 彈出式確認框
        if (!result) return; // 按下取消就不執行 api
        
        const returnCode = f_ban(account, state); // 執行指定的 api function
        switch (returnCode){
          case 200: // api操作執行成功
            alert(`${resultText}成功 !`);
            break;
          case 400: // api操作執行失敗
            alert(`${resultText}失敗 !`);
            break;
          default: // 未知錯誤
            alert(`${resultText}成功 !`);
            break;
        }
      },
      banButton(account){ // 封鎖按鈕
        this.runConfirmDialog("是否要封鎖此人", "封鎖", setUserBanState, account, 1);
      },
      unbanButton(account){ // 解除封鎖按鈕
        this.runConfirmDialog("是否要解除封鎖", "解除封鎖", setUserBanState, account, 0);
      }
    }
  }
</script>

<style scoped>
  .iconButton{
    padding: 8px;
    border-radius: 4px;
    color: #000;
  }
  .iconButton:hover{
    background-color: #cff;
  }
  .iconButton-danger{
    padding: 8px;
    border-radius: 4px;
    color: #f00;
  }
  .iconButton-danger:hover{
    background-color: #fdd;
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
    font-weight: bold; user-select: none;
  }
  .main-table-resetButton > span.ts-icon{
    margin-left: 4px;
  }
  .main-table-fliter-account > div{
    width: 130px;
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
  .rowData-point{
    margin: 0 4px;
    user-select: none;
  }
</style>