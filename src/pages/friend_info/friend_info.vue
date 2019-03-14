<!-- 添加派友 -->
<template>
  <div class="friend-page">
    <input type="file" class="chooseImg" ref="inputer" accept="image/*" @change="chooseImg()">
    <div class="friend-title">
      <div>请填写新π友的资料，或点击右侧选择π友</div>
      <div @click="chooseFriend">
        <img src="../../assets/img/pi_friend_icon.png" alt>
      </div>
    </div>
    <div class="add">
      <!-- 选择头像 -->
      <div class="avater" @click="avater"> 
        <div class="avaterImg">
          <img :src="avaterUrl?avaterUrl:'https://img.xuanyiai.com/mini_friend_default_avatar.png'" alt="">
          <img class="icon" src="../../assets/img/camera_icon.png" alt>
        </div>
      </div>

      <!-- 昵称 -->
      <div class="info-item nick">
        <div class="info-icon nick-icon">
          <img src="../../assets/img/remarks_icon.png" alt>
        </div>
        <div class="info-main nick-content">
          <input type="text" v-model="nickname" value="nickname" placeholder="请输入昵称">
        </div>
      </div>
      <!-- 性别 -->
      <div class="info-item sex">
        <div class="info-icon sex-icon">
          <img src="../../assets/img/pai_xingbie_icon.png" alt>
        </div>
        <div class="info-main sex-content">
          <div class="sex-box">
            <div class="sex-value">{{sex == 1?'女':'男'}}</div>
            <el-radio-group v-model="sex" class="sex-options">
              <el-radio :label="1">女</el-radio>
              <el-radio :label="2">男</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
      <!-- 选择生日 -->
      <div class="info-item birth">
        <div class="info-icon birth-icon">
          <img src="../../assets/img/birthday_icon.png" alt>
        </div>
        <div class="info-main birth-content" @click="birth">
          <div class="birth-box">
            <div class="info-font">{{birthValue==''?'出生日期':birthValue}}</div>
            <div class="info-arrow">
              <img src="../../assets/img/single_arrow_icon.png" alt>
            </div>
          </div>
        </div>
        <mt-datetime-picker
          ref="birth"
          type="date"
          :startDate="new Date(startDate)"
          year-format="{value}年"
          month-format="{value}月"
          date-format="{value}日"
          :value="birthValue"
          :visibleItemCount="Number(5)"
          @confirm="birthConfirm"
        ></mt-datetime-picker>
      </div>

      <!-- 出生时间 -->
      <div class="info-item birth">
        <div class="info-icon birth-icon">
          <img src="../../assets/img/time_icon.png" alt>
        </div>
        <div class="info-main birth-content" @click="time">
          <div class="birth-box">
            <div class="info-font">{{timeValue==''?'出生时间':timeValue}}</div>
            <div class="info-arrow">
              <img src="../../assets/img/single_arrow_icon.png" alt>
            </div>
          </div>
        </div>
        <mt-datetime-picker
          ref="time"
          type="time"
          :value="timeValue"
          :visibleItemCount="Number(5)"
          @confirm="timeConfirm"
        ></mt-datetime-picker>
      </div>

      <!-- 出生地点 -->
      <div class="info-item birth">
        <div class="info-icon birth-icon place-icon">
          <img src="../../assets/img/location_icon.png" alt>
        </div>
        <div class="info-main birth-content place-content" @click="location">
          <div class="birth-box place-box">
            <div class="info-font" >{{placeVal == ''?'出生地点':placeVal}}</div>
            <div class="info-arrow">
              <img src="../../assets/img/single_arrow_icon.png" alt>
            </div>
          </div>
        </div>

        <place :isshow="popupVisible" @confirm="placeCon" @cancel="placeCan"></place>
      </div>
      <!-- 查看报告 -->
      <div class="viewreport" @click="viewreport">查看TA的报告</div>
    </div>
  </div>
</template>

<script>
import friendInfo from "./friend_infojs.js";
export default friendInfo;
</script>
<style lang='scss' scoped>
@import "friendInfo";
</style>