<!-- 分享给好友 -->
<template>
  <div class="share-page" v-if="isShow">
    
    <div class="share">
      <div class="shareImg">
          <img class="saveimg" :src="shareImg" alt >
      </div>
      <div class="shareBtn"><img src="../../assets/img/icon_download.png">保存图片</div>
    </div>
    <div class="share-mask" @click="closeShare"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: ""
    };
  },
  props:['shareImg','isShow'],
  mounted() {
    let that = this;
    that.init();
  },

  methods: {
    init() {
      let that = this;
    },
    closeShare(){
      let that = this
      this.$emit('close',false)
    }
  }
};
</script>
<style lang='scss' scoped>
@import "share";
</style>
