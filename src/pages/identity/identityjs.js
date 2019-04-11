export default {
  data() {
    return {
      card:''
    };
  },

  //   components: {},

  mounted() {
    this.init();
  },

  methods: {

    init() {
      this.$HTTP.card().then(res => {
        console.log(res.data)
        this.card = res.data[0];
      });
    }
  }
}
