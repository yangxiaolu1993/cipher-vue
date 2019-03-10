class HttpUrl{
    constructor(){
        // 首页-轮播图
        this.banner = '/mimapi/public/weixin/miniprogram/banner/get'
        //小报告、大报告列表
        this.reportList = '/mimapi/public/report/weixin/index_view'
        //小报告详情
        // this.fortuneDetail = '/report/weixin/fortune_mini/details'
        this.fortuneDetail = '/mock/fortune_mini/details'
        //优惠券-未授权
        this.couponsinit = '/mock/couponsinit'
        //优惠券-授权
        this.getcoupons = '/mock/coupons/get'
        // π友
        this.pifriend = '/mock/pi_friend'
    }
}

export default new HttpUrl()