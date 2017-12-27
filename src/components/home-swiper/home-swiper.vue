<template>
  <div class="swipe-img">
    <swiper :list="imgList" auto height="30vh" dots-class="custom-bottom" dots-position="center"></swiper>
  </div>
</template>

<script>
import Swiper from "vux/src/components/swiper/swiper.vue";
// import { Swiper } from "vux";

const IMAGES = [
  {
    url: "javascript:",
    img: require("@/assets/img/swiper/sp1.jpg")
  },
  {
    url: "javascript:",
    img: require("@/assets/img/swiper/sp2.jpg")
  },
  {
    url: "javascript:",
    img: require("@/assets/img/swiper/sp3.jpg")
  }
];

export default {
  name: "home-swiper",
  components: {
    Swiper
  },
  data() {
    return {
      imgList: IMAGES
    };
  }
};
</script>

<style lang='less'>
.swipe-img {
  width: 100%;
  margin: 0 auto;
}
</style>
