import HttpUrl from "./url";
import HttpRequest from "./HttpRequest";

class InterServer {
  constructor() {
    this.banner = HttpRequest.post(HttpUrl.banner);
    this.reportList = HttpRequest.post(HttpUrl.reportList);
    this.fortuneDetail = HttpRequest.post(HttpUrl.fortuneDetail);
    this.couponsinit = HttpRequest.post(HttpUrl.couponsinit);
    this.getcoupons = HttpRequest.post(HttpUrl.getcoupons);
    this.pifriend = HttpRequest.post(HttpUrl.pifriend);
    this.codeReading = HttpRequest.post(HttpUrl.codeReading);

    /**
     * 数据请求使用express+mongodb
     */
    this.exam = HttpRequest.get(HttpUrl.exam);
    this.swiper = HttpRequest.get(HttpUrl.swiper);
    this.mini_report = HttpRequest.get(HttpUrl.mini_report);
    this.deep_report = HttpRequest.get(HttpUrl.deep_report);
    this.mini_fortune = HttpRequest.get(HttpUrl.mini_fortune);  
    this.card = HttpRequest.get(HttpUrl.card)
    this.fortune_report = HttpRequest.get(HttpUrl.fortune_report)
    this.friend_list = HttpRequest.get(HttpUrl.friend_list)
  }
}

export default new InterServer();
