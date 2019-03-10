<!-- silde滑动 -->
<template>
  <div class="delete">
    <div class="slider">
      <div
        class="content"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        :style="deleteSlider"
      >
        <!-- 插槽中放具体项目中需要内容         -->
        <slot></slot>
      </div>
      <div class="remove" ref="remove" @click="del">删除</div>
    </div>
  </div>
</template>

<script>
import slidejs from './slidejs.js';
export default slidejs
</script>
<style lang='scss' scoped>
@import 'slide';
</style>