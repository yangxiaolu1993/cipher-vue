/**
 * 数据请求路径，不同的开头，代表请求不同的服务
 * mimapi 小程序密码派的生产环境
 * mock 自定义mock文件，使用MockJs
 * api  使用express+mongodb搭建的简单的后台服务
 */
class HttpUrl {
  constructor() {
    /**============================ 小程序密码派的生产环境 =============================== */

    // 首页-轮播图
    this.banner = "/mimapi/public/weixin/miniprogram/banner/get";
    //小报告、大报告列表
    this.reportList = "/mimapi/public/report/weixin/index_view";

    /**============================ MockJs =============================== */

    //小报告详情
    this.fortuneDetail = "/mock/fortune_mini/details";
    //优惠券-未授权
    this.couponsinit = "/mock/couponsinit";
    //优惠券-授权
    this.getcoupons = "/mock/coupons/get";
    // π友
    this.pifriend = "/mock/pi_friend";
    // 密码解读
    this.codeReading = "/mock/code_reading";

    /**============================ express+mongodb =============================== */

    this.exam = "/api/exam"; // 测试

    this.swiper = "/api/public/swiper"; // 首页-轮播图

    this.mini_report = "/api/public/mini_report"; //小报告列表

    this.deep_report = "/api/public/deep_report"; //大报告列表

    this.mini_fortune = "/api/mini_fortune/list"; //已经购买的小报告列表

    this.card = "/api/identity/card"; // 身份卡

    this.fortune_report = "/api/report/fortune_report/detail"; // 小报告详情

    this.friend_list = "/api/friends/list"; // 派友列表

    this.add_friend = "/api/friends/add"; //派友添加

    this.delete_friend = "/api/friends/delete"; //删除派友

    this.code_reading = '/api/user/code/reading'//密码解读
  }
}

export default new HttpUrl();
