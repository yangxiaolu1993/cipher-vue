<!-- info -->
<template>
  <div class="info" :class="'info-'+$GLOBAL.transReport(reportid,2)">
    <div class="info-name">{{info.nickname}}</div>
    <div class="info-birth">
      <span>{{transBirth(info.birthday)}}</span>
      <img :src="reportid==10?getImgUrl('link_write.png'):getImgUrl('report_lianjie_icon.png')" alt>
      <span>{{info.masterCode}}号人</span>

      <template v-if="reportid != 10">
        <img :src="reportid==10?getImgUrl('link_write.png'):getImgUrl('report_lianjie_icon.png')" alt>
        <span>流年{{info.fleetTime}}</span>
      </template>
      
    </div>
  </div>
</template>

<script>
import { constants } from "fs";
export default {
  data() {
    return {};
  },
  props: ["reportid", "info"],
  components: {},
  mounted() {
    let that = this;
  },

  methods: {
    // 获取图片路径
    getImgUrl(name) {
      return require("../../../../assets/img/" + name);
    },
    transBirth(date) {
      if (date) {
        return (
          date.substring(0, 4) +
          "-" +
          date.substring(4, 6) +
          "-" +
          date.substring(6, 8)
        );
      }

      return "---";
    }
  }
};
</script>
<style lang='scss' scoped>
.info {
  @include flex(center, center, column);
  width: 100%;
  height: 224px;
  margin-top: -100px;

  &.info-character {
    background: url("#{$staticUrl}/deep_info_character.png") no-repeat center
      center;
    background-size: 700px 224px;
    color: #b4f2ff;
  }
  &.info-fleet {
    background: url("#{$staticUrl}/deep_info_bg.png") no-repeat center center;
    background-size: 700px 224px;
    color: #c9301f;
  }
  &.info-fortune,
  &.info-business,
  &.info-job {
    background: url("#{$staticUrl}/deep_info_bg.png") no-repeat center center;
    background-size: 700px 224px;
    color: #bc8e46;
  }

  .info-name {
    font-size: 32px;
  }

  .info-birth {
    @include flex($align: center);
    margin-top: 30px;
    font-size: 30px;

    img {
      margin: 0 10px;
      width: 43px;
      height: 29px;
    }
  }
}
</style>