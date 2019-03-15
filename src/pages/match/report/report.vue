<!-- 关系匹配报告 -->
<template>
  <div class="matchreport">
      <div class="waterCircle">
          <!-- 水球 -->
      <div class='wave-box' :style="{left:(clientWidth-258)/2+'px'}">
        <div class='wave-circle wave-circle-l'>
          <div class='wave-circle-box' style="height:129px">
            <div class='wave-circle-image'>
              <img class='wave-img-one' src='https://img.xuanyiai.com/mini_wave_7.gif'>
              <img class='wave-img-three' src='https://img.xuanyiai.com/mini_wave_6.gif'>
            </div>
            <div class='wave-circle-mask' style='height:121px'>
              <div class='wave-circle-h wave-mask-one' ></div>
              <div class='wave-circle-h wave-mask-three'></div>
            </div>
            
          </div>
        </div>
        <div class='wave-circle wave-circle-r'>
          <div class='wave-circle-box' style="height:129px">
            <div class='wave-circle-image'>
              <img class='wave-img-one' src='https://img.xuanyiai.com/mini_wave_7.gif'>
              <img class='wave-img-three' src='https://img.xuanyiai.com/mini_wave_6.gif'>
            </div>
            <div class='wave-circle-mask' style='height:121px'>
              <div class='wave-circle-h wave-mask-one'></div>
              <div class='wave-circle-h wave-mask-three'></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 水球上的文字 -->
      <div class='wave-content' :style="{left:(clientWidth-258)/2+'px'}">
        <div class='circle-item people-one'>
          <img src='../../../assets/img/avater.png'>
          <div class='circle-item-name'>杨小璐</div>
          <div class='circle-item-code'>5号人</div>
        </div>
        <div class='circle-item people-two'>
          <img src='../../../assets/img/avater.png'>
          <div class='circle-item-name'>佟</div>
          <div class='circle-item-code'>5号人</div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import matchReportJS from './reportjs.js'
export default matchReportJS
</script>
<style lang='scss' scoped>
@import 'report';
</style>