<template>
  <div class="home-action">   
    <grid :cols="3">
   <grid-item label="优惠券" :link="'/coupon/' + userId"  >
      <span slot="icon" class="mf mf-coupon home-action-icon"/>
    </grid-item>
    <grid-item label="积分详情" :link="'/point/' + userId">
      <span slot="icon" class="mf mf-point home-action-icon"/>
    </grid-item>
    <grid-item label="储值详情" :link="'/account/' + userId">
      <span slot="icon" class="mf mf-prepaid home-action-icon"/>
    </grid-item>
    <grid-item label="消费详情" :link="'/consume/' + userId">
      <span slot="icon" class="mf mf-purchase home-action-icon"/>
    </grid-item>
    <grid-item label="个人信息" :link="'/member/' + userId">
      <span slot="icon" class="mf mf-preson home-action-icon"/> 
    </grid-item>
    <grid-item label="会员权益" :link="'/rights/' + userId">
      <span slot="icon" class="mf mf-member-care home-action-icon"/> 
    </grid-item>
    <grid-item label="投诉建议" :link="'/suggestion/' + userId">
      <span slot="icon" class="mf mf-complain home-action-icon"/> 
    </grid-item>
    <grid-item label="解除绑定" :link="'/unbind/' + userId">
      <span slot="icon" class="mf mf-remove-binding home-action-icon"/> 
    </grid-item>
    <grid-item label="联系我们">
      <span slot="icon" class="mf mf-contact-us home-action-icon"/> 
    </grid-item>
    </grid>
  </div>
</template>

<script>
import Grid from "vux/src/components/grid/grid.vue";
import GridItem from "vux/src/components/grid/grid-item.vue";

export default {
  name: "home-menu",
  components: {
    Grid,
    GridItem
  },
  data() {
    return {
      userId: String
    };
  },
  created() {
    // mock
    this.userId = 'test_user';
  }
};
</script>

<style lang="less">
.weui-grids:before {
  border: none;
}
.weui-grids:after {
  border-bottom: none;
}
.weui-grid:before {
  border-right: none;
}
.weui-grid:after {
  border-bottom: none;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}

.home-action {
  .weui-grid {
    padding: 5px 0px;
    height: 14vh;
    text-align: center;

    .weui-grid__icon {
      width: 10vh;
      height: 10vh;
      vertical-align: top;
      line-height: 10vh;
    }
    .weui-grid__label {
      margin-top: 0px;
    }
  }

  .home-action-icon {
    font-size: 6vh;
    position: relative;
    text-align: center;
    display: block;
  }

  .mf-coupon {
    color: #c44242;
  }
  .mf-point {
    color: #cf9b0c;
  }
  .mf-prepaid {
    color: #07941a;
  }
  .mf-purchase {
    color: #e28787;
  }
  .mf-preson {
    color: #4285c4;
  }
  .mf-member-care {
    color: #cf9b0c;
  }
  .mf-complain {
    color: #2b77eb;
  }
  .mf-remove-binding {
    color: #c44242;
  }
  .mf-contact-us {
    color: #851da5;
  }
}
</style>
