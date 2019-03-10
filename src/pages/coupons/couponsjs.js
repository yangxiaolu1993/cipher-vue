export default {
    data() {
        return {
            prevPath: {}, //上一个页面的信息
            coupons: '', //优惠券信息
            couponsList: "" //优惠券详情
        };
    },

    beforeRouteEnter(to, from, next) {
        let prevPath = {}
        if (from.path == '/fortune') {
            prevPath.fullpath = from.fullPath
            prevPath.query = from.query
        }
        next(vm => {
            vm.prevPath = prevPath
        });
    },
    beforeRouteUpdate(to, from, next) {
        next();
    },
    beforeRouteLeave(to, from, next) {
        next();
    },
    mounted() {
        // this.init();
        this.authInit()
    },
    methods: {
        init() {
            let that = this;
            that.$HTTP.couponsinit().then((res) => {
                let data = res.data.data
                that.coupons = data
                that.couponsList = data.activity_option_list
            })
        },
        authInit(){
            let that = this;
            that.$HTTP.getcoupons().then((res) => {
                let data = res.data.data
                that.coupons = data
                that.couponsList = data.activity_option_list
            })
        },
        /**
         * 去使用优惠券
         */
        touse(){
            let that = this
            if(that.prevPath.fullpath){
                that.$router.push(that.prevPath.fullpath);
            }else{
                that.$router.push({name:'home'});
            }
        }
    }
};