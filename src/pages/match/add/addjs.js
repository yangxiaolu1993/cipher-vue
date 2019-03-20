export default {
  name: 'match_add',
  data() {
    return {
      fromPath: '', //从哪个组件中进入
      info: [{}, {}],
      active: 0 //点击添加的是第几个
    };
  },

  components: {},
  activated() {
    let param = this.$route.params.info
    if(param){
      if (param.avatar.indexOf('http') == -1) {
        param.avatar = '../static/img/num_' + param.master_code + '.png'
      }
      this.info[this.active] = param || {}
      this.$forceUpdate();
    }
  },
  mounted() {},

  methods: {
    // 选择派友
    selectedPi(index) {
      this.active = index
      this.$router.push({
        name: 'match_pi'
      })
    },
    //   查看两人关系
    viewRelation() {
      let that = this
      that.$router.push({
        name: 'match_report'
      })
    }
  }
}
