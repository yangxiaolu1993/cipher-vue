export default {
  name:'lover_add',
  data() {
    return {
      module: 'rml', //rml 恋人 rms 夫妻
      title:'',
      info: [{}, {}], //选择人员的信息
    };
  },

  components: {},
  computed: {
    birthFmt: function () {
      return function (val) {
        return val.substring(0, 4) + '-' + val.substring(4, 6) + '-' + val.substring(6, 8)
      }
    }
  },
  
  created() {},
  mounted() {},
  activated() {
    let options = this.$route.params
    let that = this
    // 展示的模块
    if (options.id == 'rml001') {
      this.module = 'rml'
      this.title = '恋人相处指南'
    } else {
      this.module = 'rms'
      this.title = '夫妻相处指南'
    }
    //从派友列表进入
    if (options.module == 'friend') {
      that.info[options.index] = options.info
      that.$forceUpdate();
    }
  },
  deactivated(){},

  methods: {
    //   添加人员
    addPeople(index) {
      let that = this
      that.$router.replace({
        name: 'pi',
        params: {
          index: index,
          id: that.module + '001'
        }
      })
    }
  }
};
