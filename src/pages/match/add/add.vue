<!-- 添加关系匹配人员 -->
<template>
  <div class="match_add_page">
    <!-- 匹配记录 -->
    <div class="history">
      <img src="../../../assets/img/icon_history.png" alt>匹配记录
    </div>
    <!-- 选择匹配人员 -->
    <div class="add_match">
      <div class="add_match_title">请选择两个人进行关系匹配</div>
      <div class="add_match_main">
          <div class="match_item match_one" v-for="(item,index) in info" :key="item.id" @click="selectedPi(index)">
            <div class="match_item_un" v-if="!item.id">
              <img src="../../../assets/img/add_blue.png" alt>
            </div>
            <div class="match_item_selected" v-else>
              <div class="selected_avater"><img :src="item.avatar" alt=""></div>
              <p>{{item.name}}</p>
              <p class="selected_code">{{item.master_code}}号人</p>
            </div>
          </div>
      </div>
      <div class="add_match_btn" @click="viewRelation">查看两人关系</div>
    </div>

    <!-- 邀请好友 -->
    <router-link :to="{name:'identity'}">
      <div class="invite">
        <img src="../../../assets/img/matchadd_share.png" alt>邀请好友与我测
      </div>
    </router-link>
  </div>
</template>

<script>
import matchAdd from "./addjs.js";
export default matchAdd;
</script>
<style lang='scss' scoped>
@import "add";
</style>