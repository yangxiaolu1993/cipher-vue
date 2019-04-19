
export default {
  data() {
    return {
      reportId:'',
      sj:'',
      ratio:'',
      reportLink:[] //关联报告
    };
  },

  // components: {},

  mounted() {
    let that = this,
    id=this.$route.params.id
    that.reportId = id
    that.ratio = 750/this.$store.state.WinWidth
    this.$HTTP.code_reading({
      id: '201904159147911'
    }).then((res) => {
        let data = res.data
        that.reading = data
        that.sj = data.life_number
    })

    this.getReportLink()
  },

  methods: {
    // 获取关联报告
    getReportLink(){
      let that = this,
      regexp = new RegExp('，')

      that.$HTTP.report_link({
        reportId:that.reportId
      }).then((res)=>{
        
        for(let item of res.data){
          item.report_copywriting = item.report_copywriting.replace(regexp,'<br>')
        } 
        that.reportLink = res.data
      })
    },
    // 获取图片路径
    getImgUrl(name){
      return require('../../assets/img/'+name)
    }
  }
};
