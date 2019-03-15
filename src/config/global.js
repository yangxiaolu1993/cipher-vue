/**
 * 设置全局的变量和方法
 * 引用 this.$GLOBAL.***
 */
class Global {
    constructor() {
        this.nickname = '设置全局变量和方法'
        /**
         * 浏览器标题
         */
        this.caption = {
            'Home':'密码派',
            'fortune':'财运指南',
            'coupons':'优惠券',
            'identity':'身份卡',
            'friendInfo':'密码解读',
            'crop':'裁剪',
            'match':'关系匹配',
            'match_add':'关系匹配',
            'match_report':'关系匹配',
            'match_pi':'我的π友',
            'piFriends':'我的π友',
            'lover_add':'恋人相处指南',
            'codeReading':'密码解读'
        }
    }
    /**
     * 将canvas生成的图片裁剪生成图片
     * @param {*} url  需要裁剪的图片路径
     * @param {*} width  被裁剪图片的宽度
     * @param {*} height  被裁剪图片的高度
     */
    canvasImgClip(url, width, height) {
        return new Promise((resolve, reject) => {
            var canvas = document.createElement("canvas");
            let W = width;
            let H = height;
            canvas.width = W;
            canvas.height = H;
            var ctx = canvas.getContext("2d");
            var newImg = new Image();
            newImg.setAttribute("crossOrigin", "Anonymous");
            newImg.src = url;
            newImg.onload = function () {
                ctx.drawImage(newImg, 0, 0, W, H, 0, 0, W, H);
                var clipImgUrl = canvas.toDataURL();
                resolve(clipImgUrl);
            };
            newImg.onerror = function () {
                console.log("裁剪canvas失败，返回原始图片");
                reject(url);
            };
        });
    }
    /**
     * 将绘制canvas所需的背景图加载,返回一个对象
     * @param {*} arr 背景图的数组  
     * arr {name:*,url:*}
     * name 返回对象的键
     * url 加载图片的路径
     */
    canvasBgMerge(arr) {
        let mergeobj = {}
        let promisearr = []
        for (let item of arr) {
            promisearr.push(new Promise((resolve, reject) => {
                var img = new Image();
                img.setAttribute("crossOrigin", "Anonymous");
                img.src = item.url;
                img.onload = function () {
                    mergeobj[item.name] = img;
                    resolve('success')
                };
                img.onerror = function () {
                    reject('error')
                }
            }))
        }
        return new Promise((resolve, reject) => {
            Promise.all(promisearr).then((result) => {
                resolve(mergeobj)
            }).catch((err) => {
                reject(err)
            })
        })
    }
    /**
     * 返回字符串的字符数  汉字两个字符  英文、数字、特殊字符1个字符
     * @param {*} str 
     */
    charNumber(str) {
        return str.replace(/[^\x00-\xff]/g, "zf").length
    }
    /**
     * 字符串截取前多少个字符,默认16字符
     * @param {*} str 
     * @param {*} num
     */
    charCut(str, charnum = 16) {
        let that = this
        let newstr = ''
        Array.from(str).map((item, index) => {
            let num = that.charNumber(str.substring(0, index + 1))
            if (num > charnum) {
                if (newstr == '') {
                    newstr = str.substring(0, index)
                }
            }
        })
        return newstr == '' ? str : newstr
    }
    /**
     * 日期格式化
     * @param {*} fmt  yyyy-MM-dd
     * @param {*} date 
     */
    dateFormat(fmt, date) {
        var o = {
            "M+": date.getMonth() + 1,                 //月份   
            "d+": date.getDate(),                    //日   
            "h+": date.getHours(),                   //小时   
            "m+": date.getMinutes(),                 //分   
            "s+": date.getSeconds(),                 //秒   
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度   
            "S": date.getMilliseconds()             //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}

export default new Global()