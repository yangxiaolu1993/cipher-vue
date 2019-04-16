<!-- 密码解读 -->
<template>
  <div class="code_reading">
    <div class="code">
      <div class="change" @click="switchFriend">
        <img src="../../assets/img/change_person.png" alt>切换他人
      </div>
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

    <div class="contain">
      <div class="item particular">
        <div class="name_desc">
          <div class="name">{{reading.nickname}}</div>
          <div class="desc">{{reading.label}}</div>
        </div>
        <div class="code_detail">
          <div class="code_detail_item">
            <div class="color1">{{reading.master_code}}</div>
            <div>主性格</div>
          </div>
          <div class="code_detail_item">
            <div class="color2">{{reading.outward}}</div>
            <div>外心密码</div>
          </div>
          <div class="code_detail_item">
            <div class="color3">{{reading.inward}}</div>
            <div>内心密码</div>
          </div>
          <div class="code_detail_item">
            <div><img :src='reading.five_elements' alt=""></div>
            <div>五行属性</div>
          </div>
        </div>

        <div class="code_union">
          <div class="code_union_desc">天赋密码</div>
          <div>
            <img src="../../assets/img/link_write.png" alt>
          </div>
          <div class="code_union_code">
            <div class="code_union_item">{{reading.characteristic_code}}</div>
          </div>
        </div>
        <div class="code_union">
          <div class="code_union_desc">缺失密码</div>
          <div>
            <img src="../../assets/img/link_write.png" alt>
          </div>
          <div class="code_union_code">
            <div class="code_union_item">{{reading.missing_code}}</div>
          </div>
        </div>
        <div class="code_union">
          <div class="code_union_desc">联合码</div>
          <div>
            <img src="../../assets/img/link_write.png" alt>
          </div>
          <div class="code_union_code code_unicode">
            <div class="code_unicode_group">
              <div class="code_union_item">{{sj.ijm}}</div>
              <div class="code_union_item">{{sj.kln}}</div>
              <div class="code_union_item">{{sj.mno}}</div>
              <div class="code_union_item">{{sj.jmw}}</div>
            </div>
            <div class="code_unicode_group">
              <div class="code_union_item">{{sj.imx}}</div>
              <div class="code_union_item">{{sj.xws}}</div>
              <div class="code_union_item">{{sj.noq}}</div>
              <div class="code_union_item">{{sj.mop}}</div>
            </div>
            <div class="code_unicode_group">
              <div class="code_union_item">{{sj.qpr}}</div>
              <div class="code_union_item">{{sj.knv}}</div>
              <div class="code_union_item">{{sj.lnu}}</div>
              <div class="code_union_item">{{sj.vut}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="detail">
        <div class="detail-item-line"></div>

        <div class="detail-item">
          <div class="detail-item-left">
            <img src="../../assets/img/reading_5.png" alt>
          </div>
          <div class="detail-item-content">
            <div class="detail-item-content-title">
              <p class="color1">性格特点</p>
              <p>{{character[0]}}</p>
            </div>
            <div class="detail-item-content-main">
              <p class="detail-item-content-main-desc">{{character[1]}}</p>
              <p class="detail-item-content-main-art" v-html="character[2]"></p>
            </div>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-item-left">
            <img src="../../assets/img/reading_4.png" alt>
          </div>
          <div class="detail-item-content">
            <div class="detail-item-content-title">
              <p class="color6">价值观</p>
              <p>{{worth[0]}}</p>
            </div>
            <div class="detail-item-content-main">
              <p class="detail-item-content-main-desc">{{worth[1]}}</p>
              <p class="detail-item-content-main-art" v-html="worth[2]"></p>
            </div>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-item-left">
            <img src="../../assets/img/reading_3.png" alt>
          </div>
          <div class="detail-item-content">
            <div class="detail-item-content-title">
              <p class="color3">内心世界</p>
              <p>{{inward[0]}}</p>
            </div>
            <div class="detail-item-content-main">
              <p class="detail-item-content-main-desc">{{inward[1]}}</p>
              <p class="detail-item-content-main-art" v-html="inward[2]"></p>
            </div>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-item-left">
            <img src="../../assets/img/reading_2.png" alt>
          </div>
          <div class="detail-item-content">
            <div class="detail-item-content-title">
              <p class="color5">情绪状态</p>
              <p>{{emotion[0]}}</p>
            </div>
            <div class="detail-item-content-main">
              <p class="detail-item-content-main-desc">{{emotion[1]}}</p>
              <p class="detail-item-content-main-art" v-html="emotion[2]"></p>
            </div>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-item-left">
            <img src="../../assets/img/reading_1.png" alt>
          </div>
          <div class="detail-item-content">
            <div class="detail-item-content-title">
              <p class="color4">天赋</p>
              <p>{{characteristic[0]}}</p>
            </div>
            <div class="detail-item-content-main">
              <p class="detail-item-content-main-desc">{{characteristic[1]}}</p>
              <p class="detail-item-content-main-art" v-html="characteristic[2]"></p>
            </div>
          </div>
        </div>

        <div class="detail-item">
          <div class="detail-item-left">
            <img src="../../assets/img/reading_6.png" alt>
          </div>
          <div class="detail-item-content">
            <div class="detail-item-content-title">
              <p class="color7">建议</p>
            </div>
            <div class="detail-item-content-main">
              <p class="detail-item-content-main-art">需要注意的是，你有时容易以自我为中心，听不进他人的意见。</p>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-summary">
        <p>缺失密码及联合码</p>
        <p>在个人性格深度剖析中有解读</p>
      </div>
    </div>
  </div>
</template>

<script>
import codeReadingJs from "./code_readingjs.js";
export default codeReadingJs;
</script>
<style lang='scss' scoped>
@import "code_reading";
@import "triangle";
</style>
<style >
.color1 {
  color: #81D3FF;
}

.color2 {
  color: #FFB09B;
}

.color3 {
  color: #EAC86E;
}
.color4{
  color: #8F6CFC;
}
.color5{
  color: #DD90D5;
}
.color6{
  color: #FAAD99;
}
.color7{
  color: #81D3FF;
}
</style>
