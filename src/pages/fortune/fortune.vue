<!-- 财富指南-小报告 -->
<template>
  <div class="fortune-page" v-title="{title:toName(query)}">
    <!-- 标题 -->
    <div class="fortune-top">
      <div class="fortune-top-box">
        <div class="fortune-top-group">
          <p>{{fortuneDetail.report_copywriting}}</p>
        </div>
      </div>
    </div>
    <!-- 影响财运关键词 -->
    <div class="fortune-keyword">
      <div class="fortune-name">{{fortuneDetail.nickname}}</div>
      <div class="fortune-text">{{fortuneDetail.connect_str}}</div>
      <div class="fortune-keyword-group">
        <div
          class="fortune-keyword-item"
          v-for="item in (fortuneDetail.keyword || ['0','1','2'])"
          :key="item"
        >
          <p>{{item}}</p>
        </div>
      </div>
    </div>
    <!-- 报告内容 -->
    <div class="fortune-container">
      <div class="fortune-code">
        <div class="wrapper">
          <!--第一层-->
          <div class="code-floor floor-first color-inner">
            <p class="code-i">{{birthCode.i}}</p>
            <p class="code-j">{{birthCode.j}}</p>
            <p class="code-k">{{birthCode.k}}</p>
            <p class="code-l">{{birthCode.l}}</p>
          </div>
          <!--第二层-->
          <div class="code-floor floor-second color-inner">
            <p class="code-m">{{birthCode.m}}</p>
            <p class="code-n">{{birthCode.n}}</p>
          </div>

          <!--第三层-->
          <div class="code-floor floor-third color-outer">
            <div class="left-code-group float-l">
              <p class="code-s fontWeight">{{birthCode.s}}</p>=
              <p class="code-x fontWeight">{{birthCode.x}}</p>
              <p class="code-w fontWeight">{{birthCode.w}}</p>
            </div>
            <div class="right-code-group float-r">
              <p class="code-v fontWeight">{{birthCode.v}}</p>
              <p class="code-u fontWeight">{{birthCode.u}}</p>=
              <p class="code-t fontWeight">{{birthCode.t}}</p>
            </div>
          </div>
          <!--第四层-->
          <div class="code-floor floor-fourth">
            <p class="code-o font-w-b">{{birthCode.o}}</p>
          </div>
          <!--第五层-->
          <div class="code-floor floor-fifth">
            <p class="code-q fontWeight">{{birthCode.q}}</p>
            <p class="code-p fontWeight">{{birthCode.p}}</p>
          </div>
          <!--第六层-->
          <div class="code-floor floor-sixth">
            <p class="code-r fontWeight">{{birthCode.r}}</p>
          </div>
        </div>
        <div class="wrapper-desc">个人流年生命密码</div>
      </div>

      <div class="fortune-desc fuzzy" v-if="buyStatus == 1">
        <p>“生命密码”与塔罗、星座并列为西方三大神秘学，它融合了数字学、心理学、哲学和中国易经的概念和理论，能够把一个公历生日，按照一定的规则，转换出专属于每个人的生命密码.密码派将生命密码这一传统智慧，巧妙地与人工智能相结合，通过大数据分析，用一个简单的三角形，对人类的情感、行为模式和潜力进行解析。通过个性化单人报告、关系报告等形式，帮你深入地了解自己、了解他人，找到与人相处的方式、财富积累的方法、职业发展的方向、流年财运的好坏等。</p>
      </div>
      <div class="fortune-desc" v-else>
        <p>{{fortuneDetail.content}}</p>
      </div>
    </div>
    <!-- 提示 -->
    <div
      class="fortune-tip"
      v-if="buyStatus == 1"
    >若已购买本人或π友的报告，生日修改后将无法在本页查看原生日对应报告可在“个人中心-已购报告”中查看。</div>

    <!-- 关于生命密码 -->
    <div class="aboutCode">
      关于生命密码
      <img src="@/assets/img/know_more_write.png" alt>
    </div>

    <!-- 支付 -->
    <div class="fortune-bottom">
      <!-- 支付-解码券+购买 -->
      <div class="fortune-pay" v-if="buyStatus == 1 && toPay == 0">
        <router-link :to="{name:'coupons',query:{id:'12'}}">
          <div class="fortune-pay-item">
            <img src="@/assets/img/report_tk.png">使用解码券
          </div>
        </router-link>
        
        <div class="fortune-pay-item fortune-pay-line"></div>
        <div class="fortune-pay-item" @click="buy">￥
          <p>0.01</p>购买报告
        </div>
      </div>
      <!-- 支付-完成 -->
      <div class="fortune-pay-over" v-if="buyStatus == 0 && toPay == 0">
        <div class="fortune-pay-over-item">
          <img src="@/assets/img/report_tk.png">偷看好友的
        </div>
        <div class="fortune-pay-item fortune-pay-line"></div>
        <div class="fortune-pay-over-item" @click="shareFridens">
          <img src="@/assets/img/report_share.png">分享给好友
        </div>
      </div>

      <!-- 支付-浮框 -->
      <ToPayCom :isShow="toPay==0?false:true" :data="fortuneDetail" @close="closeToPay"></ToPayCom>

      <!-- 我也要测 -->
      <!-- <div class='toPlay' wx:if="{{identity == 1}}" bindtap='toPlay'>我也要测</div> -->
    </div>

    <!-- 分享 -->
    <Share :shareImg="shareImg" :isShow="isShare" @close="closeShareFridens"></Share>
  </div>
</template>

<script>
import fortune from './fortunejs.js';
export default fortune
</script>
<style lang='scss' scoped>
@import "fortune";
</style>