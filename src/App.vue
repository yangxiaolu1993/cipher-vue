<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  watch: {
  },
  mounted() {
    let that = this;
    let W = document.documentElement.clientWidth
    let H = document.documentElement.clientHeight
    that.$store.commit('clientWidth',W)
    that.$store.commit('clientHeight',H)
    window.onresize = function() {
      that.$store.commit('clientHeight', document.documentElement.clientHeight)
    };
  }
};
</script>

<style>
@import url("./App.css");
/* @import '../src/assets/scss/myMint' */
</style>
