<template>
  <div class="member-home">
    <home-swiper></home-swiper>
    <div class="home-content">
      <member-card></member-card>
      <home-menu></home-menu>
    </div>
  </div>
</template>

<script>
import HomeSwiper from "../components/home-swiper/home-swiper";
import HomeMenu from "../components/home-menu/home-menu";
import MemberCard from "../components/member-card/member-card";

export default {
  name: "home-page",
  components: {
    HomeSwiper,
    HomeMenu,
    MemberCard
  }
};
</script>

<style lang='less'>
a {
  color: #7e8c8d;
  text-decoration: none;
  backface-visibility: hidden;
}
.member-home {
  .home-content {
    background-image: url("../assets/img/homebak.jpg");
    background-repeat: repeat;
    width: 100vw;
    height: 70vh;
  }
}
</style>
