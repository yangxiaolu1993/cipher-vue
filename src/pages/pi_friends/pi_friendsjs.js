import scroll from "@/components/scroll/scroll";
import slide from "@/components/slide/slide";
import {
  Indicator,
  MessageBox,
  Toast
} from 'mint-ui'
export default {
  data() {
    return {
      frompath: '', //从哪个模块进入
      selected: 'add',
      addList: [], //添加列表
      matchList: [], //匹配列表
      addListTotal: 0, //添加列表总条数
      matchListTotal: 0, //匹配列表总条数
      addPlace: 'false',
      matchPlace: 'false',
      addScroll: {
        request: false, //是否正在请求
        height: 0,
        pullup: 'false',
        loading: false
      }, //添加派友的滚动设置
      matchScroll: {
        request: false, //是否正在请求
        height: 0,
        pullup: 'false',
        loading: false
      } //匹配派友的滚动设置
    };
  },
  computed: {
    // 生日格式化
    birthmat() {
      let that = this
      return function (val) {
        let string = ''
        if (val.indexOf('-') == -1) {
          string = val.substring(0, 4) + '-' + val.substring(4, 6) + '-' + val.substring(6, 8)
        } else {
          string = val
        }
        return string
      }
    }
  },
  components: {
    scroll,
    slide
  },
  watch: {
    selected: function (newVal, oldVal) {
      if (newVal == 'add') {
        this.addList = []
        this.getPiFriend(1)
      } else {
        this.matchList = []
        this.getPiFriend(2)
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(from)
    let name = from.name
    next(vm => {
      vm.frompath = name
    })
  },
  mounted() {
    let that = this
    that.init()
    if (that.$route.params.type == 1 || !that.$route.params.type) {
      that.selected = 'add'
      that.getPiFriend(1)
    } else {
      that.selected = 'match'
      that.getPiFriend(2)
    }

  },

  methods: {
    // 初始化
    init() {
      let that = this
      that.addScroll.height = this.$store.state.WinHeight - 45
      that.matchScroll.height = this.$store.state.WinHeight - 45
    },
    /**
     * 获取派友列表
     * @param {*} type 1 添加  2 匹配
     */
    getPiFriend(type, index = 0, pageSize = 10) {
      let that = this
      if (type == 1 && !that.addScroll.request || type == 2 && !that.matchScroll.request) {
        if (type == 1) {
          that.addScroll.request = true
        } else {
          that.matchScroll.request = true
        }
        that.$HTTP.pifriend({
          type: type,
          page_size: pageSize,
          index: index
        }).then((res) => {

          let data = res.data.list
          let total = res.data.total
          for (let item of data) {
            if (!item.avatar) {
              item.avatar = '../static/img/num_' + item.master_code + '.png'
            }

          }
          setTimeout(function () {
            if (type == 1) {
              that.addList.push(...data)
              that.addListTotal = total
              if (that.addScroll.height < that.addList.length * 86) {
                that.addScroll.pullup = 'true'
                that.addScroll.loading = true
              } else {
                that.addScroll.pullup = 'false'
                that.addScroll.loading = false
              }
            } else {
              that.matchList.push(...data)
              that.matchListTotal = total
              if (that.matchScroll.height < that.matchList.length * 86) {
                that.matchScroll.pullup = 'true'
                that.matchScroll.loading = true
              } else {
                that.matchScroll.pullup = 'false'
                that.matchScroll.loading = false
              }
            }
            // Indicator.close()
            that.addScroll.request = false
            that.matchScroll.request = false
          }, 2000)

        })
      }

    },
    /**
     * 选择派友进行跳转
     * @param {*} id 
     */
    chooseFriend(item) {
      console.log(item)
      let that = this
      // 夫妻、恋人报告
      if (that.frompath == 'lover_add') {
        let params = {
          info: item,
          module: 'friend'
        }
        Object.assign(params, that.$route.params)
        that.$router.replace({
          name: 'lover_add',
          params: params
        })
      }
      //密码解读
      if (that.frompath == 'friendInfo') {
        let params = {
          'id': item.id
        }
        that.$router.replace({
          name: 'codeReading',
          params: params
        })
      }
      //密码解读报告
      if (that.frompath == 'codeReading') {
        let params = {
          'id': item.id
        }
        that.$router.replace({
          name: 'codeReading',
          params: params
        })
      }
      // 关系匹配
      if (that.frompath == 'match_add') {
        
        let params = {
          info: item,
        }
        that.$router.push({
          name: 'match_add',
          params: params
        })
      }
    },
    /**
     * 开始移动
     * @param {*} type 
     */
    start(type) {
      if (type == 1) {
        this.addPlace = 'true'
      } else {
        this.matchPlace = 'true'
      }
    },
    /**
     * 移动结束
     * @param {*} type 
     */
    end(type) {
      if (type == 1) {
        this.addPlace = 'false'
      } else {
        this.matchPlace = 'false'
      }
    },
    /**
     * 删除
     * @param {*} id 
     */
    del(id) {
      console.log(id)
      MessageBox({
        title: '',
        message: '是否删除π友' + id,
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(action => {
        if (action == 'confirm') {
          console.log('删除成功')
          Toast('删除成功')

        } else {
          console.log('取消')
        }
      })
    }
  }
}
