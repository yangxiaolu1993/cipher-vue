<!-- 主要内容 -->
<template>
  <div class="content" :class="'content-'+$GLOBAL.transReport(reportid,2)">
    <div class="content-main" v-html="content"></div>

    <div class="tip">请下载密码派APP，免费查看更多报告</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["reportid", "content"],
  components: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss' scoped>
.content {
  width: 700px;
  padding: 0 28px;
  margin: 0 auto;
  &.content-character {
    background: rgba(45, 45, 75, 0.72);
    border-radius: 0px 0px 8px 8px;
    color: #d4caff;
  }
  &.content-fleet,
  &.content-fortune,
  &.content-business,
  &.content-job {
    background: #ffffff;
    box-shadow: 0 2px 6px 0 rgba(205, 205, 205, 0.36);
    border-radius: 8px;
    .content-main {
      margin-top: 28px;
      color: #787878;
    }
  }

  .content-main {
    min-height: 700px;
    padding-top: 28px;
    font-size: 30px;
    letter-spacing: 1px;
    text-align: justify;
    line-height: 54px;
    margin-bottom: 24px;
    /deep/ span{
      font-weight: bold;
      &.specialText-fleet{
        color: #cb3727;
      }
      &.specialText-fortune,&.specialText-business,&.specialText-job{
        color: #C98214
      }
    }
     


  }

  .tip {
    margin-top: 40px;
    padding-bottom: 40px;
    font-size: 36px;
    font-weight: bold;
    color: #856dfb;
    letter-spacing: 0px;
    text-align: center;
  }
}
</style>