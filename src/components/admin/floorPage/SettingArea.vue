<template>
  <div class="applyArea">
    <div class="schedule ts-box borderShadow">
      <table class="ts-table is-definition is-celled">
        <thead>
          <tr>
            <th></th>
            <th>星期一</th>
            <th>星期二</th>
            <th>星期三</th>
            <th>星期四</th>
            <th>星期五</th>
          </tr>
        </thead>
        <tbody ref="scheduleTable">
          <tr v-for="(period, rowIndex) in getPeriodTime()" :key="rowIndex">
            <td>
              <div>第&nbsp;&nbsp;{{ period.nth }}&nbsp;&nbsp;節</div>
              {{ period.startTime }}&nbsp;~&nbsp;{{ period.endTime }}
            </td>
            <td v-for="columnIndex in 5" :key="columnIndex"
              :style="{ backgroundColor: getBlockBgColor(columnIndex, rowIndex + 1) }"
              @click="clickBlock(columnIndex, rowIndex + 1)"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <div class="confirm box">
        <span class="confirm-emptyText" v-show="!confirm.enable">
          <span class="ts-icon is-plus-icon is-huge"></span>
          目前沒有修改任何時段，請直接點選左側的課表。
        </span>
        <span class="confirm-text" v-show="confirm.enable">
          <span class="confirm-title">確定要修改可借時段嗎 ?</span>
        </span>
        <div class="confirm-buttons" v-show="confirm.enable">
          <button class="borderShadow ts-button is-accent" @click="clickUpdateButton">確定修改</button>
          <button class="borderShadow ts-button is-accent is-secondary" @click="resetScheduleTable">取消並重置</button>
        </div>
      </div>
      <div class="periodLegend box">
        <div class="ts-box is-collapsed">
          <table class="ts-table is-collapsed is-celled">
            <tbody>
              <tr v-for="legend in legendData" :key="legend.color">
                <td :style="{ width: '50px', backgroundColor: legend.color }"></td>
                <td>{{ legend.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/assets/schedule-config.json"; // 課表時段的設定檔
import { getClassroomInfo } from "@/assets/import"; // 查詢教室資訊
import { getEnablePeriodData, setEnablePeriod } from '@/api/app';

export default {
  props: [
    "classroomID"
  ],
  data() {
    return {
      classroomInfo: getClassroomInfo(null),
      periodState: null,
      confirm: { enable: false },
      legendData: [
        { name: "可借用", color: "#fff" },
        { name: "無法借用", color: "#bbb" },
      ]
    }
  },
  async created() {
      this.classroomInfo = getClassroomInfo(this.classroomID||'ins101');
      await this.resetScheduleTable();
    },
  methods: {
    getPeriodTime() { // 獲取縱軸時段資料
      return config.periodTime;
    },
    getBlockBgColor(day, period) {
      // 確認 this.periodState 不為 null 且 day 是有效的索引
      if (this.periodState && this.periodState[day]) {
        return this.periodState[day][period] ? "#fff" : "#bbb";
      }
      // 如果不符合條件，返回默認的顏色或者你希望的其他處理方式
      return "#bbb";
    },

    async resetScheduleTable() {
      var tmp = Array.from(Array(1 + 5), () => Array(config.periodTime.length + 1).fill(false));

      const enablePeriod = await getEnablePeriodData(this.classroomInfo.id);
      console.log('enablePeriod:', enablePeriod);
      if (enablePeriod) {
        for (const p of enablePeriod) {
          for (let i = p.startPeriod; i <= p.endPeriod; i++) tmp[p.day][i] = true;
        }
      }
      this.periodState = tmp;
      this.confirm.enable = false;
    },

    clickBlock(day, period) { // 點選時段
      this.confirm.enable = true;
      this.periodState[day][period] = !this.periodState[day][period];
    },
    async clickUpdateButton() { // 確認修改時段
      let enablePeriod = [];

      for (let day = 1; day <= 5; day++) {
        let p = null;
        for (let period = 1; period <= config.periodTime.length; period++) {
          if (this.periodState[day][period]) {
            if (p == null) p = { day: day, startPeriod: period, endPeriod: period };
            else p.endPeriod = period;
          } else {
            if (p != null) {
              enablePeriod.push(p);
              p = null;
            }
          }
        }
        if (p != null) { // 連續可借節次持續到最末堂的例外處理
          enablePeriod.push(p);
          p = null;
        }
        // 求連續可借節次
      }
      console.log("classroomInfo:",this.classroomInfo.id);
      console.log("enablePeriodtest:",enablePeriod);
      await setEnablePeriod(this.classroomInfo.id, enablePeriod); // 修改後端某間教室的可借時段
      window.location.reload(); // force reload
    }
  },
  watch: {
    async classroomID(newValue) {
      this.classroomInfo = getClassroomInfo(newValue || "ins101");
      await this.resetScheduleTable();
    },
  },
}
</script>

<style scoped>
.applyArea {
  margin-top: 8px;
  display: flex;
}

.schedule {
  white-space: nowrap;
}

.schedule table td,
th {
  text-align: center;
  vertical-align: middle;
}

.schedule table td:first-child {
  padding: 6px;
  font-size: 11px;
}

.schedule table td:first-child>div {
  font-size: 14px;
}

.confirm {
  width: 300px;
  height: fit-content;
  margin-left: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.confirm-emptyText {
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.confirm-emptyText>span.ts-icon {
  margin-bottom: -10px;
}

.confirm-title {
  font-size: 18px;
  font-weight: bold;
}

.confirm-text {
  margin: 12px 0;
  font-size: 16px;
  text-align: center;
}

.confirm-buttons {
  margin: 12px 0;
  display: flex;
  justify-content: space-around;
}

.confirm-buttons>button {
  border: none;
}

.confirm-buttons>button:nth-child(1):hover {
  background-color: #46c;
}

.confirm-buttons>button:nth-child(2) {
  margin-left: 16px;
}

.confirm-buttons>button:nth-child(2):hover {
  background-color: #ddd;
}

.periodLegend {
  width: 300px;
  height: fit-content;
  margin: 8px 0 0 8px;
  padding: 8px;
}
</style>