<template>
  <div class="amount-details">
    <group>
      <div v-for="(record,index) in amountRecords" :key="index">
        <cell :title="record.title" primary="content" :inline-desc="record.time" 
          class="cell_border">
          <div>
              <span style="text-align:right;" 
                :class="record.value > 0 ? 'amount-color':''">
                {{ formatCurrency(record.value) }}
              </span>
            </div>
        </cell>
      </div>
      <infinite-loading @infinite="infiniteHandler" spinner="circles">
      </infinite-loading>
    </group>
  </div>
</template>

<script>
import AjaxPlugin from "vux/src/plugins/ajax/index";
import Group from "vux/src/components/group/index";
import Cell from "vux/src/components/cell/index";
import InfiniteLoading from "vue-infinite-loading";
import Vue from "vue";
Vue.use(AjaxPlugin);

const CONDITION_TOP10 = "0";
const CONDITION_MONTH = "1";
const CONDITION_ALL = "2";

export default {
  name: "consume-details",
  props: {
    userId: String,
    conditionType: String
  },
  components: {
    Group,
    Cell,
    InfiniteLoading
  },
  watch: {
    $route(to, from) {
      this.userId = to.params.userId;
      this.conditionType = to.params.conditionType;
      this.updateAmountDetails();
    }
  },
  methods: {
    updateAmountDetails: function() {
      var requestUrl;
      switch (this.conditionType) {
        case CONDITION_TOP10:
          requestUrl = "/api/consumedetail/top10";
          break;
        case CONDITION_MONTH:
          requestUrl = "/api/consumedetail/month";

          break;
        case CONDITION_ALL:
          requestUrl = "/api/consumedetail/all";
          break;
        default:
          requestUrl = "/api/consumedetail/top10";
          console.error("Undefined condition Type: " + this.conditionType);
          break;
      }

      this.$http.get(requestUrl).then(
        response => {
          this.amountRecords = response.data.data.point_records;
        },
        response => {
          console.error("数据加载失败");
        }
      );
    },
    infiniteHandler($state) {
      setTimeout(() => {
        const temp = [];
        for (
          let i = this.amountRecords.length + 1;
          i <= this.amountRecords.length + 20;
          i++
        ) {
          temp.push({
            title: "xxxx",
            time: "2017-xx-xx 09:48:56",
            value: i
          });
        }
        this.amountRecords = this.amountRecords.concat(temp);
        $state.loaded();
      }, 1000);
    },
    formatCurrency: function(value) {
      let val = (value / 1).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  data() {
    return {
      amountRecords: []
    };
  },
  created() {
    this.updateAmountDetails();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.amount-details {
  .cell_border {
    border: 0.5px solid #ccc;
    border-left: none;
    border-right: none;
    border-top: none;
    text-align: left;
    .amount-color {
      color: rgb(106, 194, 11);
    }
  }
}
</style>
