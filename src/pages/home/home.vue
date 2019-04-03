<!-- 首页 -->
<template>
  <div class="home-page">
    <!-- 轮播图 -->
    <div class="swpier">
      <el-carousel :interval="4000" height="100px">
        <el-carousel-item v-for="item in swiper" :key="item.image_url">
          <img :src="item.image_url" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-content">
      <!-- 基础功能 -->
      <div class="basicPart">
        <!-- 用户信息 -->
        <div class="userInfo POSR">
          <div class="userInfoBasic">
            <div class="userAvater">
              <img src="https://img.xuanyiai.com/FjnSCuIpFUXBXIuyx3JQPJnrKsRO" alt>
            </div>
            <div class="userName">
              <div class="name">
                艾米艾米艾米艾米
                <img src="@/assets/img/gender_1.png" alt>
              </div>
              <div class="desc">
                <p class="descCode">细腻敏感的2号人</p>
                <p class="viewReport">
                  查看我的报告
                  <img src="@/assets/img/double_arrow.png" alt>
                </p>
              </div>
            </div>
          </div>
          <div class="userCenter POSA">个人中心</div>
        </div>
        <div class="baseLine"></div>
        <!-- 查密码、测关系、身份卡 -->
        <div class="baseMenu">
          <router-link class="baseMenuItem" :to="{name:'friendInfo'}">
            <div class="baseMenuItem">
              <img src="@/assets/img/menu_code_icon.png" alt>
              <p>查密码</p>
            </div>
          </router-link>
          <router-link class="baseMenuItem" :to="{name:'match_add'}">
            <div class="baseMenuItem">
              <img src="@/assets/img/menu_relation_icon.png" alt>
              <p>测关系</p>
            </div>
          </router-link>
          <router-link class="baseMenuItem" :to="{name:'identity'}">
            <img src="@/assets/img/menu_identify_icon.png" alt>
            <p>身份卡</p>
          </router-link>
        </div>
      </div>
      <!-- 匹配人员信息 -->
      <div class="match POSR">
        <router-link :to="{name:'piFriends',params:{type:1}}">
          <div class="matchMain">
            <div class="matchTitle">已匹配1个</div>
            <div class="matchAvater">
              <img src="https://img.xuanyiai.com/mini_num_1.png" alt>
              <img src="https://img.xuanyiai.com/mini_num_1.png" alt>
              <img src="https://img.xuanyiai.com/mini_num_1.png" alt>
              <img src="https://img.xuanyiai.com/mini_num_1.png" alt>
              <img src="https://img.xuanyiai.com/mini_num_1.png" alt>
            </div>
          </div>
          <div class="matchArrow">
            <img src="@/assets/img/single_arrow_blue.png" alt>
          </div>
        </router-link>
      </div>
      <!-- 财运指南 -->
      <div class="fortune">
        <div class="fortuneTitle">2019新年财运指南专题</div>
        <div class="fortuneMain">
          <router-link
            :to="{name:'fortune',query:{id:item.id}}"
            class="fortuneItem"
            v-for="(item,index) in fortune"
            :key="item.id"
          >
            <div>
              <div class="fortuneItemIcon" v-if="index>2">
                <img src="@/assets/img/fortune_icon.png" alt>
              </div>
              <div class="fortuneItemMain" v-if="!item.keyword">{{item.report_name}}</div>
              <div class="fortuneItemMain bought" v-if="item.keyword">
                <div class="bought-title">{{item.connect_str}}</div>
                <div class="bought-keyword">{{item.keyword}}</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <!-- 深度报告 -->
      <div class="depth">
        <div class="depthTitle">
          <div class="depthTitleLeft">
            <img src="@/assets/img/home_report_icon.png" alt>深度报告
          </div>
          <div class="depthTitleRight">
            已购报告
            <img src="@/assets/img/single_arrow_icon.png" alt>
          </div>
        </div>
        <div class="depthMain">
          <div
            class="depthMainItem"
            v-for="item in depth"
            :key="item.id"
            @click="deepRouter(item.id)"
          >
            <div class="depthItemIcon">
              <img :src="item.report_small_img_url" alt>
            </div>
            <div class="depthItemContent">
              <div class="depthItemTitle">
                {{item.report_name}}
                <img src="@/assets/img/single_arrow_icon.png" alt>
              </div>
              <div class="depthItemDesc">{{item.report_copywriting}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 关于生命密码 -->
      <div class="about">
        关于生命密码
        <img src="@/assets/img/know_more_home.png" alt>
      </div>
      {{vuex}}
      <!-- <anchored-heading>Hello World!</anchored-heading> -->
    </div>
  </div>
</template>

<script>
import home from "./homejs.js";
export default home;
</script>
<style lang='scss' scoped>
@import "home";
</style>