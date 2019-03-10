<!-- 优惠券 -->
<template>
  <div class="coupons-page">
    <!-- 邀请 -->
    <div class="coupons-invita">
      <div class="invita-main">
        <div class="invita-desc">
          <p>匹配好友</p>
          <p>领取解码券</p>
        </div>
        <div class="invita-num">已匹配 <a>{{coupons.invite_num}}</a> 位好友
        </div>
        <router-link :to="{name:'identity'}">
          <div class="invita-btn">邀请好友与我匹配</div>
        </router-link>
        
      </div>
    </div>
    <!-- 优惠券详情 -->
    <div class="coupons-group">
        <!-- coupons-item-ora  coupons-item-blue coupons-item-gray-->
        <!-- status 1 未完成  2 点击领取  3 去使用  4 已使用 -->
      <div class="coupons-item" :class="item.status == 2?'coupons-item-ora':(item.status==3?'coupons-item-blue':'coupons-item-gray')" v-for="item in couponsList" :key="item.id">
        <div class="coupons-item-title">
          <p>{{item.title}}</p>
          <p>{{item.content_depict}}</p>
        </div>
        <div class="coupons-item-line">
          <div class="semicircle line-left"></div>
          <div class="line-middle"></div>
          <div class="semicircle line-right"></div>
        </div>
        <div class="coupons-item-use">
          <div class="coupons-item-num">{{item.conditional_depict}}</div>
          <div class="coupons-item-state" v-if="item.status == 1">未完成</div>
          <div class="coupons-item-state" v-if="item.status == 2">点击领取</div>
          <div class="coupons-item-state" v-if="item.status == 3" @click="touse">去使用</div>
          <div class="coupons-item-state" v-if="item.status == 4">已使用</div>
        </div>
      </div>

    </div>

    <!-- 活动规则 -->
    <div class="rules">
      <div class="rules-item">
        <!-- <p>活动规则</p>
        <p>1.用户π友列表中来自匹配的人数达到规定数量，即可领券1张解码券；</p>
        <p>2.一张解码券可解锁密码派小程序任意一个财运指南1次（一个生日对应1次）；</p>
        <p>3.每个用户最多累计领取使用3张券。</p>
        <p>4.活动时间：2018年12月25日-2019年3月25日 请在有效期内领取并使用解码券，逾期将失效。</p> -->
        <p>{{coupons.depict}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import coupons from './couponsjs.js';
export default coupons
</script>
<style lang='scss' scoped>
@import "coupons";
</style>