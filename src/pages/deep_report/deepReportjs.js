import Info from './components/info/info'
import LinkReport from './components/linkReport/linkReport'
import Content from './components/content/content'
export default {
  data() {
    return {
      deepData:'',
      info:'', //用户信息
      reportId:'', //报告id
      reportName:'', //报告的英文
      sj:'', //三角形内容
    };
  },
  
  components: {Info,LinkReport,Content},

  mounted() {
    let that = this;
    that.init();
    
  },

  methods: {
    
    init(){
      let that = this,
      id=this.$route.params.id
      that.reportId = id
      that.reportName = that.$GLOBAL.transReport(id,2)
   
      that.getDeepReportDetail()
    },

    // 获取深度报告
    getDeepReportDetail(){
      let that = this
      this.$HTTP.deep_report_detail({
        report_id: that.reportId
      }).then((res) => {
        
        let data = res.data
          that.deepData = data
          that.sj = data.life_number
          // 用户信息
          that.info = {
            nickname:data.nickname,
            birthday:that.sj.birthday,
            masterCode:data.master_code,
            fleetTime:data.fleet_time
          }

          for(let key in data.special_text_map){
            let a = new RegExp(key,'g')
            data.lead_languages = data.lead_languages.replace(a, '<span class="specialText-'+that.reportName+'">'+data.special_text_map[key]+'</span>')
          }
      })
    },
      // 获取图片路径
      getImgUrl(name){
        return require('../../assets/img/'+name)
      }
  }
};
