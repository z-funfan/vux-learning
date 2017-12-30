<template>
  <div>
    <div class="my-point">
      <div class="header_top">
          <div class="header_top_left">当前积分</div>
          <div class="header_top_right">积分说明</div>
        </div>
        <div class="point_summary" >
          <span v-if="points" class="point_summary_point">{{points}}</span>
          <span class="point_summary_unit">分</span>
        </div>

      <button-tab class="my-point-tabs">
        <button-tab-item :selected="selectedTab === tab" v-for="(tab, index) in selectableTabs" 
          @on-item-click="clickTab(index)" :key="index">{{tab}}</button-tab-item>
        </button-tab>
    </div>
      <router-view/>
    </div>

</template>

<script>
import ButtonTab from "vux/src/components/button-tab/button-tab";
import ButtonTabItem from "vux/src/components/button-tab/button-tab-item";

const CONDITION_LIST = ["最近10笔", "最近一个月", "全部"];

export default {
  name: "my-points",
  props: {
    userId: String
  },
  components: {
    ButtonTab,
    ButtonTabItem
  },
  methods: {
    getCurrentPoint: function() {
      // init get current point
      this.$http.get("/api/point").then(
        response => {
          this.points = response.data.data;
        },
        response => {
          console.error("数据加载失败");
        }
      );
    },
    clickTab: function(index) {
      this.selectedTab = this.selectableTabs[index];
      this.$router.replace({
        name: "amount-details",
        params: { userId: this.userId, conditionType: "" + index }
      });
    }
  },
  data() {
    return {
      selectableTabs: CONDITION_LIST,
      selectedTab: CONDITION_LIST[0],
      points: 0
    };
  },
  created() {
    this.getCurrentPoint();
    this.clickTab(0);
  }
};
</script>

<style lang='less' scoped>
.my-point {
  padding: 5vh 5vh 0 5vh;
  .header_top {
    height: 25px;
    .header_top_left {
      width: 50%;
      float: left;
      color: #000;
    }
    .header_top_right {
      float: left;
      width: 50%;
      color: #04be02;
      text-align: right;
    }
  }
  .point_summary {
    color: #04be02;
    width: 100%;
    margin: 2vh 0;
    .point_summary_point {
      display: inline-block;
      font-size: xx-large;
    }
    .point_summary_unit {
      display: inline-block;
      text-align: left;
    }
  }
  .my-point-tabs {
    margin-bottom: 2vh;
  }
}
</style>
