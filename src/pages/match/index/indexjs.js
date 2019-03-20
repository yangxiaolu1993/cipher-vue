import add from '../add/add'
import pi from '../../pi_friends/pi_friends'
import report from '../report/report'
export default {
  data() {
    return {
      currentTabComponent:'add'
    };
  },

  components: {add,pi,report},

  watch:{
    $route:function(to){
      if(to.name == 'match_pi'){
        this.currentTabComponent = 'pi'
      }else if(to.name == 'match_add'){
        this.currentTabComponent = 'add'
      }else{
        this.currentTabComponent = 'report'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('进入',from)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('离开',to)
    next()
  },
  mounted() {},

  methods: {}
}
