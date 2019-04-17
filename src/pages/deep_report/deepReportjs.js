
export default {
  data() {
    return {
      reportId:'',
      sj:''
    };
  },

  // components: {},

  mounted() {
    let that = this,
    id=this.$route.params.id
    that.reportId = id

    console.log(that.$GLOBAL.transReport(id,3))

    this.$HTTP.code_reading({
      id: '201904159147911'
    }).then((res) => {
      console.log(res.data)
        let data = res.data
        that.reading = data
        that.sj = data.life_number
    })
  },

  // methods: {}
};
