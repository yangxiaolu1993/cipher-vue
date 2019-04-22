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
    this.add_friend = HttpRequest.get(HttpUrl.add_friend)
    this.delete_friend = HttpRequest.get(HttpUrl.delete_friend)
    this.code_reading = HttpRequest.get(HttpUrl.code_reading)
    this.report_link = HttpRequest.get(HttpUrl.report_link)
    this.deep_report_detail = HttpRequest.get(HttpUrl.deep_report_detail)
  }
}

export default new InterServer();
