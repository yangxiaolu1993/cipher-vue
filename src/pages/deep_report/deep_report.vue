<!-- 大报告 -->
<template>
  <div class="deep-report" :class="$GLOBAL.transReport(reportId,2)">
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
  </div>
</template>

<script>
import deepReport from "./deepReportjs.js";
export default deepReport;
</script>
<style lang='scss' scoped>
@import "deepReport";
</style>