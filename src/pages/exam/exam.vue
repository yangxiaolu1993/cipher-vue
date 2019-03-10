<!-- 滚动 -->
<template>
  <scroll class="wrapper" :data="data" :pullup="pullup" @scrollToEnd="loadData">
    <div class="content">
      <p class="item" v-for="item in data" :key="item">{{item}}</p>
    </div>
    <div class="loading-wrapper"></div>
  </scroll>
</template>

<script>
import scroll from "@/components/scroll/scroll";
export default {
  data() {
    return {
      data: [],
      pullup: true,
      index:1
    };
  },
  created() {
    // window.addEventListener("scroll", this.onScroll);
    let that = this;
    this.loadData();
  },

  components: { scroll },

  mounted() {},

  methods: {
    loadData() {
      console.log('上拉')
      for (let i = this.index; i < (this.index+20); i++) {
        this.data.push(i);
      }
      this.index+=20
    },
    onScroll() {
      let that = this;
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;

      //可滚动容器的高度
      let innerHeight = document.querySelector("#scroll").clientHeight;
      //屏幕尺寸高度
      let outerHeight = document.documentElement.clientHeight;
      //可滚动容器超出当前窗口显示范围的高度
      let scrollTop = document.body.scrollTop;
      //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
      console.log(innerHeight + " " + outerHeight + " " + scrollTop);
      if (innerHeight < outerHeight + scrollTop) {
        //加载更多操作
        console.log("loadmore");
        that.more = true;
        setTimeout(function() {
          that.items += 10;
          that.more = false;
        }, 3000);
      }
    }
  }
};
</script>
<style lang='' scoped>
.wrapper {
  height: 500px;
  overflow: hidden;
}
p.item {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  border-bottom: 2px solid #eeeeee;
}
.more {
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  background: #eee;
}
</style>