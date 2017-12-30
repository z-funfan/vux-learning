<template>
  <div class="home-member">
    <grid :cols="2">
      <grid-item label="使用时点击出示二维码" class="card-grid" @on-item-click="dialogShow = true">
        <img slot="icon" class="card-img" src="./card.png"/>
      </grid-item>
      <grid-item v-if="member" :label="member.memberName" class="member-grid">
        <img slot="icon" class="member-img" :src="member.avatar"/>
        <p class="weui-grid__label">
          <span class="member-level">会员等级: {{member.memberLevel}}</span>
        </p>
      </grid-item>
      </grid>

      <div v-transfer-dom>
        <x-dialog v-model="dialogShow" class="card-dialog" hide-on-blur>
            <div @click="dialogShow = false">
                <div class="qr-code">
                    <qrcode :value="member.memberCard" type="img"></qrcode>
                </div>
                <div class="card-no">
                    <span>会员卡号: {{member.memberCard}}</span>
                </div>
                <div class="card-tip">
                    <span>点击屏幕关闭</span>
                </div>
            </div>
        </x-dialog>
    </div>
  </div>
</template>

<script>
import Grid from "vux/src/components/grid/grid.vue";
import GridItem from "vux/src/components/grid/grid-item.vue";
import XDialog from "vux/src/components/x-dialog/index.vue";
import Qrcode from "vux/src/components/qrcode/index.vue";
import TransferDom from "vux/src/directives/transfer-dom/index";

export default {
  name: "member-card",
  components: {
    Grid,
    GridItem,
    XDialog,
    Qrcode,
    TransferDom
  },
  data() {
    return {
      member: Object,
      dialogShow: false
    };
  },
  created() {
    this.$http.get("/api/member").then(
      response => {
        this.member = response.data.data;
      },
      response => {
        console.error("数据加载失败");
      }
    );
  },
  directives: {
    TransferDom
  }
};
</script>

<style lang='less'>
@import "member-card.less";
</style>
