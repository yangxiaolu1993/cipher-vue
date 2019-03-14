<!-- 派友列表 -->
<template>
  <div class="pi_page">
    <mt-navbar class="pi_tab" v-model="selected" :fixed="true">
      <mt-tab-item id="add">来自添加</mt-tab-item>
      <mt-tab-item id="match">来自匹配</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="add">
        <scroll
          class="list_main"
          :data="addList"
          :pullup="addScroll.pullup"
          @scrollToEnd="addScroll.request?'':getPiFriend(1,addList.length)"
          :style="{height:addScroll.height+'px'}"
        >
          <div class="list_contain" ref="addContent">
            <slide v-for="item in addList" :key="item.id" :isplace='addPlace' @start="start(1)" @end="end(1)" @del="del(item.id)">
              <div class="list_item" @click="chooseFriend(item)">
                <div class="list_item_avater">
                  <img :src="item.avater" alt>
                </div>
                <div class="list_item_info">
                  <div class="list_item_name">
                    {{item.name}}
                    <img src="../../assets/img/gender_1.png" alt v-if="item.sex==1">
                    <img src="../../assets/img/gender_2.png" alt v-else>
                  </div>
                  <div class="list_item_desc">
                    <div class="list_item_code">
                      {{item.master_code}}号人
                      <img src="../../assets/img/link.png" alt>
                      {{birthmat(item.birthday)}}
                    </div>
                    <div class="list_item_relation" v-if="item.relationship_type == 1">恋人</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 2">伴侣</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 3">家人</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 4">朋友</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 5">同事</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 6">其他</div>
                  </div>
                </div>
              </div>
            </slide>

            <div class="load-more">
              <a v-if="addScroll.loading && !(addListTotal>addList.length)">
                <img src="../../assets/img/loading.gif">加载更多
              </a>
              <a v-if="addScroll.loading && (addListTotal>addList.length)">没有更多...</a>
            </div>
          </div>
        </scroll>
      </mt-tab-container-item>
      <mt-tab-container-item id="match">
        <scroll
          class="list_main"
          :data="matchList"
          :pullup="matchScroll.pullup"
          @scrollToEnd="matchScroll.request?'':getPiFriend(2,matchList.length)"
          :style="{height:matchScroll.height+'px'}"
        >
          <div class="list_contain" ref="matchContent">
            <slide v-for="item in matchList" :key="item.id" :isplace='matchPlace' @start="start(2)" @end="end(2)" @del="del(item.id)">
              <div class="list_item" @click="chooseFriend(item)">
                <div class="list_item_avater">
                  <img :src="item.avater" alt>
                </div>
                <div class="list_item_info">
                  <div class="list_item_name match_item_info">
                    <div class="match_item_name">
                      {{item.name}}
                      <img src="../../assets/img/gender_1.png" alt v-if="item.sex==1">
                      <img src="../../assets/img/gender_2.png" alt v-else>
                    </div>
                    <div class="match_item_degree">
                      天生合拍度
                      <a>20%</a>
                    </div>
                  </div>
                  <div class="list_item_desc">
                    <div class="list_item_code">{{item.master_code}}号人</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 1">恋人</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 2">伴侣</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 3">家人</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 4">朋友</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 5">同事</div>
                    <div class="list_item_relation" v-if="item.relationship_type == 6">其他</div>
                  </div>
                </div>
              </div>
            </slide>

            <div class="load-more">
              <a v-if="matchScroll.loading && (matchListTotal>matchList.length)">
                <img src="../../assets/img/loading.gif">加载更多
              </a>
              <a v-if="matchScroll.loading && (matchListTotal==matchList.length)">没有更多...</a>
            </div>
          </div>
        </scroll>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import piFriends from "./pi_friendsjs.js";
export default piFriends;
</script>
<style lang='scss' scoped>
@import "piFriends";
</style>