<!-- 夫妻、恋人报告 -->
<template>
  <div class="lover">
    <keep-alive include="lover_add">
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
import indexjs from "./indexjs.js";
export default indexjs;
</script>