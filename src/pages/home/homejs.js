export default {
  data() {
    return {
      swiper: [],
      fortune: [{}, {}, {}, {}, {}, {}, {}, {}],
      depth: [],
      vuex: this.$store.state.HW,
      attrs: { "data-id": "1" }
    };
  },

  mounted() {
    this.init();
    // 授权--只要是从首页进入就会授权
    this.$store.commit("auth");
  },

  methods: {
    init() {
      // 轮播图
      this.$HTTP.swiper().then(res => {
        this.swiper = res.data;
      });
      // 小报告默认列表
      this.$HTTP.mini_report().then(res => {
        this.fortune = res.data;
      });
      // 大报告默认列表
      this.$HTTP.deep_report().then(res => {
        this.depth = res.data;
      });
      //已购买小报告
      this.$HTTP.mini_fortune().then(res => {
        this.fortune = res.data;
      });

      // 测试
      this.$HTTP.exam().then(res => {
        // this.fortune = res.data;
        console.log(res.data)
      });
    },
    /**
     * 跳转深度报告
     * @param {*} id
     */
    deepRouter(id) {
      let that = this;
      that.$router.push({
        name: "lover_add",
        params: {
          id: id
        }
      });
    }
  }
};
