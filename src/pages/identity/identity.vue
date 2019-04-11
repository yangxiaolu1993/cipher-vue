<!-- 身份卡 -->
<template>
  <div class="id-page">
      <div class="id-main">
          <div class="contain">
              <div class="contain-title">快来看看和我的合拍度吧</div>
              <div class="contain-name">
                  <p>{{card.nickname}}</p><p>是{{card.title}}</p>
              </div>
              <div class="code">
                  <!-- 主码 -->
                  <div class="pos-a code-master">
                      <div class="code-master-desc white font-14">{{card.master_code_tag}}</div>
                      <div class="code-master-num white font-24">{{card.master_code}}</div>    
                      <div class="code-master-name blue font-12">主码</div>
                  </div>
                  <!-- 左-上 -->
                  <div class="pos-a code-left-top">
                      <div class="code-left-top-num orange font-16">{{card.left_union_code}}</div>
                      <div class="code-left-top-name orange font-12">联合码</div>
                      <div class="code-left-top-desc white font-14">{{card.left_union_code_tag}}</div>
                  </div>
                  <!-- 右-上 -->
                  <div class="pos-a code-right-top">
                      <div class="code-right-top-num orange font-16">{{card.right_union_code}}</div>
                      <div class="code-right-top-name orange font-12">联合码</div>
                      <div class="code-right-top-desc white font-14">{{card.right_union_code_tag}}</div>
                  </div>
                  <!-- 左-下 -->
                  <div class="pos-a code-left-bottom">
                      <div class="code-left-bottom-num white font-24">{{card.inner_code}}</div>
                      <div class="code-left-bottom-name white font-12">内心码</div>
                      <div class="code-left-bottom-desc white font-14">{{card.inner_code_tag}}</div>
                  </div>
                  <!-- 右-下 -->
                  <div class="pos-a code-right-bottom">
                      <div class="code-right-bottom-num white font-24">{{card.outer_code}}</div>
                      <div class="code-right-bottom-name white font-12">外心码</div>
                      <div class="code-right-bottom-desc white font-14">{{card.outer_code_tag}}</div>
                  </div>
                  <!-- 坐镇码 -->
                  <div class="pos-a code-bottom">
                      <div class="code-bottom-num orange font-16">{{card.bottom_union_code}}</div>
                      <div class="code-bottom-name orange font-12">坐镇码</div>
                      <div class="code-bottom-desc white font-14">{{card.bottom_union_code_tag}}</div>
                  </div>

                  <!-- 头像 -->
                  <div class="pos-a avater"><img src="../../assets/img/avater.png" alt=""></div>
              </div>

              <div class="invite">邀请好友合拍</div>
          </div>
      </div>
  </div>
</template>

<script>
import identity from "./identityjs.js";
export default identity

</script>
<style lang='scss' scoped>
@import 'identity';
</style>