export default {
    data() {
        return {
            swiper: [],
            fortune: [],
            depth: [],
            vuex: this.$store.state.HW,
            attrs:{'data-id':'1'}
        };
    },

    mounted() {
        this.init();
        // 授权--只要是从首页进入就会授权
        this.$store.commit('auth')

    },

    methods: {
        init() {
            // 轮播图
            this.$HTTP.banner().then(res => {
                let res1 = res.data;
                if (res1.code == 200) {
                    console.log(res.data);
                    this.swiper = res1.data;
                }
            });
            // 小报告、大报告列表
            this.$HTTP.reportList().then(res => {
                let data = res.data;
                if (data.code == 200) {
                    this.fortune = data.data.goods_mini_report_info_set;
                    this.depth = data.data.goods_report_info_set;
                }
            });

        },
        /**
         * 跳转深度报告
         * @param {*} id 
         */
        deepRouter(id){
            let that =this 
            console.log(id)
            that.$router.push({
                name:'lover',
                params:{
                    id:id
                }
            })
        }
    }
};