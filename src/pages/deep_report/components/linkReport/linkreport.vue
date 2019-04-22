<!-- 关联报告 -->
<template>
  <div class="swipe">
    <el-carousel type="card" :height="292/ratio+'px'" :autoplay="true">
      <el-carousel-item v-for="item in reportLink" :key="item.id">
        <img :src="item.report_img_url" alt>
        <div class="link_item">
          <div class="link_item_name">{{item.report_name}}</div>
          <div class="link_item_desc" v-html="item.report_copywriting"></div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reportLink: {},
      ratio:'',
    };
  },
  props: ["reportid"],
  components: {},

  mounted() {
    let that = this;
    that.ratio = 750/this.$store.state.WinWidth
    that.getReportLink();
  },

  methods: {
    // 获取关联报告
    getReportLink() {
      let that = this;
      let regexp = new RegExp("，");

      that.$HTTP.report_link({
          reportId: that.reportId
      }).then(res => {
        that.reportLink = res.data;
      });
    }
  }
};
</script>
<style lang='scss' scoped>
// 关联报告
.swipe {
  width: 100%;
  height: 280px;
  overflow: hidden;
}
.el-carousel {
  width: 1000px;
  left: -140px;
}
.el-carousel__mask {
  display: none;
}
.el-carousel__item img {
  width: 542px;
  height: 292px;
  border-radius: 20px;
}
.el-carousel__item {
  @include flex(center, center);
  width: 544px;
  height: 280px;
  background: transparent;
}

.link_item {
  width: 100%;
  height: 292px;
  @include flex(center, center, column);
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  .link_item_name {
    font-size: 32px;
    font-weight: bold;
  }
  .link_item_desc {
    margin-top: 32px;
    font-size: 28px;
    text-align: center;
  }
}
</style>