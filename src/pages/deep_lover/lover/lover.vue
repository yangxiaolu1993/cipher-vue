<!-- 夫妻、恋人相处指南 -->
<template>
  <div class="lover-page" v-title="{title:module=='rml'?'恋人相处指南':'夫妻相处指南'}">
    <div class="lover " :class="(module=='rml')?'':'wife'">
      <div class="lover-desc">
        日子过久了，是不是总觉得对方待你不如初见？<br>
        曾经许下的诺言，是不是都在婚后--流产”了？<br>
        随着时间推移，<br>
        激情没了，爱情也变成了亲情。<br>
        爱人不愿交流、不管孩子、不操心家事、<br>
        缺乏耐心、共同语言越来越少，甚至不想回家？<br>
        而你在精神和身体双重压力下，也变得越来越委屈……<br>
        解锁这份报告，<br>
        Ta能打开你和爱人的心结，<br>
        找到缓和彼此关系、增进感情的处方。<br>
      </div>
      <div class="lover-title " :class="{'wife-title':!(module=='rml')}">输入两人的生日，查看报告！</div>

      <div class="add-lover">

        <div class="add-item" :class="{'wife-item':!(module=='rml')}" v-for="(item,index) in info" :key="index" >
          <div class="add-item-not" v-if="Object.keys(item).length == 0" @click="addPeople(index)">
            <div class="add-item-title">点击添加</div><img src="../../../assets/img/lover_add.png" alt="">
          </div>

          <div class="add-item-selected" v-else>
            <div class="selected-info">
              <div class="selected-info-avater"><img :src="'../static/img/num_'+item.master_code+'.png'" alt=""></div>
              <div class="selected-info-desc">
                <div class="selected-info-name">
                  <p>{{item.name}}</p><img src="../../../assets/img/gender_write_1.png" alt="">
                </div>
                <div class="selected-info-code">
                  <div>{{item.master_code}}号人</div><div><img src="../../../assets/img/link_lover.png" alt=""></div><div>{{birthFmt(item.birthday)}}</div>
                </div>
              </div>
            </div>
            <div class="selected-btn">
              <div @click="addPeople(index)">换一个人</div>
              <div>修改Ta的资料</div>
            </div>
          </div>
        </div>

        

      </div>

      <!-- 查看报告 -->
      <div class="viewReport">
        <div>查看感情报告</div>
      </div>
    </div>

  </div>
</template>

<script>
import deepLoverJs from './loverjs.js';
export default deepLoverJs
</script>
<style lang='scss' scoped>
@import "lover";
</style>