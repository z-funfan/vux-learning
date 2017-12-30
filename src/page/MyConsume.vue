<template>
  <div>
    <div class="my-consume">
      <div class="header_top">
        <div class="header_top_left">消费详情</div>
      </div>

      <button-tab class="my-consume-tabs">
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
  name: "my-consume",
  props: {
    userId: String
  },
  components: {
    ButtonTab,
    ButtonTabItem
  },
  methods: {
    getCurrentconsume: function() {
      // init get current consume
      this.$http.get("/api/consume").then(
        response => {
          this.consumes = response.data.data;
        },
        response => {
          console.error("数据加载失败");
        }
      );
    },
    clickTab: function(index) {
      this.selectedTab = this.selectableTabs[index];
      this.$router.replace({
        name: "consume-details",
        params: { userId: this.userId, conditionType: "" + index }
      });
    }
  },
  data() {
    return {
      selectableTabs: CONDITION_LIST,
      selectedTab: CONDITION_LIST[0],
      consumes: 0
    };
  },
  created() {
    this.getCurrentconsume();
    this.clickTab(0);
  }
};
</script>

<style lang='less' scoped>
.my-consume {
  padding: 5vh 5vh 0 5vh;
  .header_top {
    height: 25px;
    .header_top_left {
      width: 50%;
      float: left;
      color: #000;
    }
  }

  .my-consume-tabs {
    margin: 2vh 0;
  }
}
</style>
