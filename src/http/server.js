import Axios from 'axios'
import HttpUrl from './url'

// Axios.defaults.baseURL = '/mimapi'
Axios.defaults.headers.post['Token'] = 'a1e79e93d5dd687cb0be9d63eb6a35a17be84f03ab6df490bb242108cadaababdbd6538e344740a744549cdb404b9c6d84ac0683e4b86781';
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.post['XY-Agent'] = JSON.stringify({ "app_version": "1.1.2", "os": 2, "channel": 3 });

class InterServer {
    constructor() {
        this.banner = this.$POST(HttpUrl.banner)
        this.reportList = this.$POST(HttpUrl.reportList)
        this.fortuneDetail = this.$POST(HttpUrl.fortuneDetail)
        this.couponsinit = this.$POST(HttpUrl.couponsinit)
        this.getcoupons = this.$POST(HttpUrl.getcoupons)
        this.pifriend = this.$POST(HttpUrl.pifriend)
        this.codeReading = this.$POST(HttpUrl.codeReading)

        this.swiper = this.$GET(HttpUrl.swiper)
        this.mini_report = this.$GET(HttpUrl.mini_report)
        this.deep_report = this.$GET(HttpUrl.deep_report)
        this.mini_fortune = this.$GET(HttpUrl.mini_fortune)
    }
    $POST(url){
        
        return (param)=>{
            if(param){
               return Axios.post(url, {
                    ...param
                })
            }else{
               return Axios.post(url)
            }
            
        }
    }
    $GET(url){
        return (param)=>{
            if(param){
                return Axios.get(url, {
                    ...param
                })
            }else{
                return Axios.get(url)
            }
            
        }
    }
}



export default new InterServer()