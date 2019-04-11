import Axios from "axios";
import { Indicator } from "mint-ui";

class Http {
  constructor() {
    // 自定义请求header
    this.getHeader = method => {
      return {
        "Content-Type":method == "FORM"? "application/x-www-form-urlencoded": "application/json;charset=UTF-8",
        'Token':"2e7df6151fdff44365466e0088fd2876051bf3b1c3fdd69731e22143339edab61808a821c66f4e73c8ec6c177c8016d284ac0683",
        "USERID":'18120500004439567821',
        "XY-Agent": JSON.stringify({
          app_version: "1.1.0",
          os: 2,
          channel: 3
        })
      };
    };
    // 将axios重新定义
    this.axios = (method, url, param) => {
      let property = {
        url: url,
        method: method.toLowerCase(),
        headers: this.getHeader(method)
      };

      // GET和POST方式参数方式不同
      if (method.toUpperCase() == "GET") {
        property.params = param;
      } else if (method.toUpperCase() == "POST") {
        property.data = param;
      }
      // 自定义axios实例-初始化
      let instance = Axios.create({ ...property })

      // 为instance实例添加拦截器 -- 请求
      instance.interceptors.request.use((config)=>{
        Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });
  
        return config
      })

      // 为instance实例添加拦截器 -- 响应
      instance.interceptors.response.use((res)=>{
        Indicator.close()
        return res
      })
      
      return instance();
    };
  }

  request(method, url, param) {

    return new Promise((resolve, reject) => {
      this.axios(method, url, param)
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

class HttpRequest extends Http {
  constructor() {
    super();
  }

  get(url) {
    return param => this.request("GET", url, param);
  }

  post(url) {
    return param => this.request("POST", url, param);
  }
}
export default new HttpRequest();
