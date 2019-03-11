import place from '../../components/place/place'
export default {
    data () {
      return {
          nickname:'',
          sex:1,  //1 女生 2 男生
          birthValue:'1990-01-01',
          startDate:'1900-01-01',

          timeValue:'', //出生时间
          popupVisible:false,

          placeVal:'',
          avaterUrl:'' //头像
      };
    },
    components:{place},
    beforeRouteEnter(to, from, next) {
        console.log(from.path)
        let avaterUrl = ''
        if (from.path == '/crop') {
            avaterUrl = to.params.avater
        }
        next(vm => {
            vm.avaterUrl = avaterUrl
        });
    },
    beforeRouteUpdate(to, from, next) {
        next();
    },
    beforeRouteLeave(to, from, next) {
        next();
    },
    mounted(){
        let that = this
    },
    computed:{},
    watch:{
        nickname(val){
            let that = this
            if(that.$GLOBAL.charNumber(val) > 16 ){
                that.nickname =  that.$GLOBAL.charCut(val)
            }else{
                that.nickname=  val
            }
        }
    },
    methods: {
        // 选择生日
        birth(){
            this.$refs.birth.open();
        },
        // 生日确定
        birthConfirm(val){
            let date = new Date(val)
            this.birthValue = this.$GLOBAL.dateFormat('yyyy-MM-dd',date)
        },
        // 出生时间
        time(){
            this.$refs.time.open();
        },
        timeConfirm(val){
            this.timeValue = val
        },

        // 出生地点
        location(){
            this.popupVisible = true
        },
        // 出生地点确定
        placeCon(val){
            this.popupVisible = false
            this.placeVal = val
        },
        // 出生地点关闭
        placeCan(){
            this.popupVisible = false
        },
        // 选择头像
        avater(){
            this.$refs.inputer.click()
        },
        chooseImg(e){
            this.$router.push({name:'crop',params:{file:this.$refs.inputer.files[0]}})
        },
        // 查看报告
        viewreport(){
            console.log(this.nickname)
            console.log(this.sex)
        }
    }
  }