<template>
  <div>
    <div class="my-account">
      <div class="header_top">
          <div class="header_top_left">当前储值</div>
          <router-link class="header_top_right" to="/rechargecenter">充值中心</router-link>
        </div>
        <div class="account_summary" >
          <span v-if="accountAmount" class="account_summary_amount">{{accountAmount}}</span>
          <span class="account_summary_unit">元</span>
        </div>

      <button-tab class="my-account-tabs">
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
  name: "my-account",
  props: {
    userId: String
  },
  components: {
    ButtonTab,
    ButtonTabItem
  },
  methods: {
    getCurrentAmount: function() {
      // init get current account
      this.$http.get("/api/account/amount").then(
        response => {
          this.accountAmount = response.data.data;
        },
        response => {
          console.error("数据加载失败");
        }
      );
      this.accountAmount = this.formatCurrency(this.accountAmount);
    },
    clickTab: function(index) {
      this.selectedTab = this.selectableTabs[index];
      this.$router.replace({
        name: "account-details",
        params: { userId: this.userId, conditionType: "" + index }
      });
    },
    formatCurrency: function(value) {
      let val = (value / 1).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  data() {
    return {
      selectableTabs: CONDITION_LIST,
      selectedTab: CONDITION_LIST[0],
      accountAmount: 0
    };
  },
  created() {
    this.getCurrentAmount();
    this.clickTab(0);
  }
};
</script>

<style lang='less' scoped>
.my-account {
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
  .account_summary {
    color: #04be02;
    width: 100%;
    margin: 2vh 0;
    .account_summary_amount {
      display: inline-block;
      font-size: xx-large;
    }
    .account_summary_unit {
      display: inline-block;
      text-align: left;
    }
  }
  .my-account-tabs {
    margin-bottom: 2vh;
  }
}
</style>
