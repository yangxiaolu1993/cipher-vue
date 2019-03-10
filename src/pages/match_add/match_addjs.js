export default {
  data () {
    return {
    };
  },

  components: {},

  mounted(){},

  methods: {
    //   查看两人关系
    viewRelation(){
        let that = this
        that.$router.push({name:'matchReport'})
    }
  }
}