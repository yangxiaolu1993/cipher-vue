<!-- 添加匹配 -->
<template>
  <div class="match">
    <keep-alive include="match_add">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import indexjs from "./indexjs.js";
export default indexjs;
</script>
<style lang='scss' scoped>
@import "index";
</style>