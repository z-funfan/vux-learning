<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/iconfont.css";
a {
  color: #7e8c8d;
  text-decoration: none;
  backface-visibility: hidden;
}

#app {
  background-color: #fbf9fe;
  height: 100vh;
}
</style>
