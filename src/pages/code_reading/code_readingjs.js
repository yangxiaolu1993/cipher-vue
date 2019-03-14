export default {
  data() {
    return {
      reading: '',
      sj:'', //三角形密码
      character:'', //性格特点
      emotion:'',//情绪状态 
      inward:'', //内心世界
      suggestion:'',//建议
      worth:'',//价值观 
      characteristic:"",//天赋
    };
  },

  components: {},

  mounted() {
    this.init(this.$route.params.id)
  },

  methods: {
    init: function (id) {
      let that = this
      this.$HTTP.codeReading({
        id: id
      }).then((res) => {
        console.log(res)
        let data = res.data
        that.reading = data
        that.sj = data.life_number

        let regular = data.special_text_map
        that.character = data.summary_description
        that.emotion = data.emotion_description
        that.inward = data.inward_description
        that.suggestion = data.suggestion_description
        that.worth = data.worth_sense_description
        that.characteristic = data.characteristic_description

        for(let key of Object.keys(regular)){
          that.character[2]=that.character[2].replace(new RegExp(key, 'g'),'<span class="color1">'+regular[key]+'</span>')
          that.emotion[2]=that.emotion[2].replace(new RegExp(key, 'g'),'<span class="color5">'+regular[key]+'</span>')
          that.inward[2]=that.inward[2].replace(new RegExp(key, 'g'),'<span class="color3">'+regular[key]+'</span>')
          that.worth[2]=that.worth[2].replace(new RegExp(key, 'g'),'<span class="color6">'+regular[key]+'</span>')
          that.characteristic[2]=that.characteristic[2].replace(new RegExp(key, 'g'),'<span class="color4">'+regular[key]+'</span>')
          that.suggestion=that.suggestion.replace(new RegExp(key, 'g'),'<span class="color7">'+regular[key]+'</span>')
        }
      })
    },
    //切换他人
    switchFriend(){
      console.log('切换')
      this.$router.push({
        name:"piFriends"
      })
    }
  }
}
