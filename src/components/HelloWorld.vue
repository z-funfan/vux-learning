<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import { AjaxPlugin } from 'vux'
import AjaxPlugin from "vux/src/plugins/ajax/index";
import Vue from "vue";
Vue.use(AjaxPlugin);

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "HelloWorld"
    };
  },
  created() {
    this.$http.get("/api/pointdetail/all").then(
      response => {
        console.log(response);
      },
      response => {
        console.log("数据加载失败");
      }
    );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
