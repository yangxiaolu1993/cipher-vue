<!-- 大报告 -->
<template>
  <div class="deep-report" :class="$GLOBAL.transReport(reportId,2)">
    <!-- 生命密码 -->
    <div class="deep-code">
      <div class="switchOther">
        <img src="../../assets/img/change_person.png" alt>切换他人
      </div>

      <div class="life_code">
        <div class="code_main">
          <div class="code_item code_item_first code_item_i">{{sj.i}}</div>
          <div class="code_item code_item_first code_item_j">{{sj.j}}</div>
          <div class="code_item code_item_first code_item_k">{{sj.k}}</div>
          <div class="code_item code_item_first code_item_l">{{sj.l}}</div>

          <div class="code_item code_item_second code_item_m">{{sj.m}}</div>
          <div class="code_item code_item_second code_item_n">{{sj.n}}</div>

          <div class="code_item code_item_three code_item_o">{{sj.o}}</div>

          <div class="code_item code_item_four code_item_s">{{sj.s}}</div>
          <div class="code_item code_item_four code_item_eql">=</div>
          <div class="code_item code_item_four code_item_x">{{sj.x}}</div>
          <div class="code_item code_item_four code_item_w">{{sj.w}}</div>

          <div class="code_item code_item_four code_item_v">{{sj.v}}</div>
          <div class="code_item code_item_four code_item_u">{{sj.u}}</div>
          <div class="code_item code_item_four code_item_eqr">=</div>
          <div class="code_item code_item_four code_item_t">{{sj.t}}</div>

          <div class="code_item code_item_five code_item_q">{{sj.q}}</div>
          <div class="code_item code_item_five code_item_p">{{sj.p}}</div>

          <div class="code_item code_item_six code_item_r">{{sj.r}}</div>
        </div>
        <div class="code-desc">个人生命密码</div>
      </div>
    </div>

    
    <!-- 个人信息 -->
    <div class="info">
      <div class="info-name">璐璐</div>
      <div class="info-birth">
        <span>1993-03-03</span>
        <img src="../../assets/img/link_write.png" alt="">
        <span>7号人</span>
      </div>
    </div>

    <!-- 主要内容 -->
    <div class="content">
      <div class="content-main">
        <p>你是天生的领导者，有很强的领导能力，在别人的眼中你是一个非常有魅力的人。清晰的思路和开阔的眼界，让你在面对事物的时候，会迅速做出相应的判断选择。你平时很在意别人的眼光，让自己活得有些累。</p>
        <p>这些是你的特点。你想过自己身上为什么会具备这些特质吗？你身边的人，是否又真正了解你的与众不同呢？</p>
        <p>我们每个人都有自己固定的思维模式、行为模式、以及价值观。而一切的矛盾，其实都是因为我们不懂彼此。当你真正了解一个人时，你就会把他的所有行为合理化。这时候也就不会有沟通问题，更不会有误会和冲突产生。</p>
        <p>希望你能从这份报告中找到真实的自己、了解你最爱的人，让生活幸福、再幸福一点儿。因为，没有什么比幸福更值得你拥有……</p>
      </div>

      <div class="tip">请下载密码派APP，免费查看更多报告</div>
    </div>

    <!-- 关于生命密码 -->
    <div class="about">关于生命密码<img src="../../assets/img/know_more_write.png" alt=""></div>

    <!-- 关联报告 -->
    <div class="swipe">
      <el-carousel  type="card" :height="292/ratio+'px'" :autoplay="true">
        <el-carousel-item v-for="item in reportLink" :key="item.id">
          <img :src="item.report_img_url" alt="">
          <div class="link_item">
            <div class="link_item_name">{{item.report_name}}</div>
            <div class="link_item_desc" v-html='item.report_copywriting'></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    
  </div>
</template>

<script>
import deepReport from "./deepReportjs.js";
export default deepReport;
</script>
<style lang='scss' scoped>
@import "deepReport";
</style>