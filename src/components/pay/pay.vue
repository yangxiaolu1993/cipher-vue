<!-- 去支付模板 -->
<template>
  <div class="toPay-page" v-if="isShow">
    <div class="fortune-pay-float">
      <div class="fortune-pay-float-desc">
        <div class="fortune-pay-float-desc-item">财运指南-{{data.report_name}}</div>
        <div class="fortune-pay-float-desc-people">
          <div class="fortune-pay-float-desc-name">{{data.nickname}}</div>

          <div>
            生日
            <img src="http://img.xuanyiai.com/mini_deep_report_linker_icon.png">
            {{data.birthday}}
          </div>
          <!-- <div wx:else>{{reportDetailData.master_code}}号人</div> -->
        </div>

        <div class="fortune-pay-float-desc-tip">
          <div>· 请理解本商品作为虚拟内容服务，购买成功后，不支持退款和转让。</div>
          <div>· 购买后可在“个人中心-已购报告”中查看。</div>
          <div>· 若支付成功后不能查看报告，请尝试刷新，或在个人中心联系客服处理。</div>
        </div>
      </div>
      <div class="fortune-pay-money">
        <!-- <div class="fortune-pay-money-item">1张解码券</div> -->
        <div class="fortune-pay-money-item pay-money demo-typo-size">
          <div>
            <a>{{data.report_price.description}}</a>
          </div>
          <div>￥{{(data.report_price.price/100).toFixed(2)}}</div>
          <div>
            <del>￥{{(data.report_price.origin_price/100).toFixed(2)}}</del>
          </div>
        </div>
        <div class="fortune-pay-line"></div>
        <div class="fortune-pay-money-item" @click="close(2)">确认支付</div>
      </div>
    </div>

    <!-- 遮罩 -->
    <div class="toPayMask" @click="close(1)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ISSHOW: false
    };
  },
  props: ["data", "isShow"],
  methods: {
    /**
     * desc 关闭支付弹框
     * 1 遮罩  2 确认支付按钮
     */
    close(type) {
      console.log(type)
      this.$emit("close", type);
    }
  }
};
</script>
<style lang='scss' scoped>
@import "pay";
</style>