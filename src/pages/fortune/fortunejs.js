import ToPayCom from "@/components/pay/pay";
import Share from "@/components/share/share";

/**
 * 组件方法
 */
function drawText(ctx, str, initHeight) {
    let lineWidth = 0;
    let charHeight = 50; //字符行数的高度
    let lastSubStrIndex = 0; //每次开始截取的字符串的索引
    let canvasWidth = 0; //多宽换行
    let leftWidth = 0; //换行以后，左侧的位置
    str = str.replace(/\r\n/g, "-");
    for (let i = 0; i < str.length; i++) {
        if (charHeight > 320) {
            canvasWidth = 690;
            leftWidth = 30;
        } else {
            canvasWidth = 360;
            leftWidth = 360;
        }
        lineWidth += ctx.measureText(str[i]).width;
        if (
            lineWidth + ctx.measureText(str[i + 1]).width > canvasWidth ||
            str[i].match(/-/g)
        ) {
            ctx.fillText(
                str.substring(lastSubStrIndex, i),
                leftWidth,
                initHeight
            ); //绘制截取部分
            initHeight += 50; //50为字体的高度
            lineWidth = 0;
            charHeight += 50;
            if (str[i].match(/-/g)) {
                lastSubStrIndex = i + 1;
            } else {
                lastSubStrIndex = i;
            }
        }
        if (i == str.length - 1) {
            //绘制剩余部分
            ctx.fillText(
                str.substring(lastSubStrIndex, i + 1),
                leftWidth,
                initHeight
            );
        }
    }
    return charHeight;
}

export default {
    data() {
        return {
            buyStatus: 1, //是否购买 0 购买 1 未购买
            toPay: 0, //去支付 0 否  1 去支付
            birthCode: {}, //三角形
            price: {}, //价格
            fortuneDetail: {},

            downloadimg: {}, //绘制图片需要用到的图片
            shareImg: "", //生成的图片路径
            isShare: false //是否去分享
        };
    },
    components: { ToPayCom, Share },
    mounted() {
        let that = this;
        that.init();
        // 绘制canvas需要的背景图
        let drawimgarr = [
            { 'name': 'bg', 'url': 'https://img.xuanyiai.com/mini_fortune_canvas_bg1.jpg' },
            { 'name': 'sj', 'url': 'https://img.xuanyiai.com/mini_report_sj.png' },
            { 'name': 'font', 'url': 'https://img.xuanyiai.com/mini_report_font.png' },
            { 'name': 'logo', 'url': 'https://img.xuanyiai.com/mini_canvas_logo.png' },
        ]
        that.$GLOBAL.canvasBgMerge(drawimgarr).then((obj) => {
            that.downloadimg = obj
        })

        console.log(that.$store.state.login)
    },

    methods: {
        // 初始化
        init() {
            let that = this;
            this.query = this.$route.query.id;
            console.log("请求");
            this.$HTTP
                .fortuneDetail({
                    report_id: that.$route.query.id,
                    user_report_record_id: "",
                    friend_id: "",
                    activity_id: "18112200148383141325"
                })
                .then(data => {
                    let res = data.data.data;
                    console.log(res);
                    that.birthCode = res.life_number;
                    that.price = res.report_price;
                    that.fortuneDetail = res;
                    that.buyStatus = res.is_locked;
                });
        },
        // 购买
        buy() {
            let that = this;
            this.toPay = 1;
        },
        /**
         * desc 关闭购买
         * type  1 模态框关闭   2 点击支付
         */
        closeToPay(type) {
            if (type == 1) {
                this.toPay = 0;
            } else {
                this.$message({
                    message: "确认支付",
                    type: "success"
                });
                this.toPay = 0;
            }
        },
        // 分享好友生成图片
        shareFridens() {
            let that = this;
            that.isShare = true;
            that.createCanvas();
        },
        // 关闭分享好友
        closeShareFridens(data) {
            this.isShare = data;
        },

        // canvas生成图片
        createCanvas() {
            let that = this;
            let code = that.fortuneDetail.life_number;
            let data = that.fortuneDetail;
            var canvas = document.createElement("canvas");
            canvas.width = "750";
            canvas.height = "1400";
            var ctx = canvas.getContext("2d");
            ctx.drawImage(that.downloadimg.bg, 0, 0, 750, 1332);

            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.textBaseline = "hanging";

            ctx.font = "normal bold 68px sans-serif";
            let reportName = "";
            let a = data.report_name;
            for (let i = 0; i < a.length; i++) {
                reportName += a[i];
                if (i != a.length - 1) {
                    reportName += " ";
                }
            }
            ctx.fillText(reportName, 750 * 0.5, 78);

            ctx.font = "normal bold 30px sans-serif";
            ctx.fillText(data.report_copywriting, 750 * 0.5, 171);

            ctx.fillStyle = "#A53B00";
            ctx.fillText(data.nickname, 750 * 0.5, 270);
            ctx.fillStyle = "#DA8A68";
            ctx.font = "normal normal 24px sans-serif";
            ctx.fillText(data.connect_str, 750 * 0.5, 340);

            ctx.font = "normal normal 95px sans-serif";
            ctx.textAlign = "left";
            ctx.fillStyle = "#7E471A";
            let char = data.keyword;
            let len = data.keyword.length;
            let space = Math.floor((459 - 120 * len) / (len + 1));
            for (let i = 0; i < len; i++) {
                let leftSpace = 145 + (i + 1) * space + i * 120;
                ctx.drawImage(that.downloadimg.font, leftSpace, 384, 120, 119);
                ctx.fillText(
                    char[i],
                    leftSpace + (120 - ctx.measureText(char[i]).width) / 2,
                    399
                );
            }

            // 三角形
            ctx.drawImage(that.downloadimg.sj, 74, 613, 214, 183);
            ctx.font = "normal normal 25px sans-serif";
            ctx.fillStyle = "#DDE1FF";
            // 三角形-第一层
            ctx.fillText(code.i, 74 + 214 / 5 - Math.ceil(ctx.measureText("7").width / 2), 758);
            ctx.fillText(code.j, 74 + (214 / 5) * 2 - Math.ceil(ctx.measureText("5").width / 2), 758);
            ctx.fillText(code.k, 74 + (214 / 5) * 3 - Math.ceil(ctx.measureText("1").width / 2), 758);
            ctx.fillText(code.l, 74 + (214 / 5) * 4 - Math.ceil(ctx.measureText("1").width / 2), 758);
            // 三角形-第二层
            ctx.fillText(code.m, 144, 703);
            ctx.fillText(code.n, 203, 703);
            // 三角形-外-左
            ctx.fillText(code.s, 30, 655);
            ctx.fillText("=", 53, 655);
            ctx.fillText(code.x, 78, 655);
            ctx.fillText(code.w, 104, 655);
            // 三角形-外-右
            ctx.fillText(code.v, 241, 655);
            ctx.fillText(code.u, 267, 655);
            ctx.fillText("=", 293, 655);
            ctx.fillText(code.t, 319, 655);
            // 三角形-外-上
            ctx.fillText(code.q, 146, 598);
            ctx.fillText(code.r, 174, 579);
            ctx.fillText(code.p, 203, 598);
            //三角形-主码
            ctx.font = "normal bold 38px sans-serif";
            ctx.fillStyle = "#99DBFF";
            ctx.fillText(code.o, 170, 640);
            //三角形-描述
            ctx.font = "normal normal 26px sans-serif";
            ctx.fillStyle = "#AADAFF";
            ctx.fillText("个人流年生命密码", 70, 825);

            ctx.font = "normal bold 28px sans-serif";
            ctx.fillStyle = "#fff";
            // 主要内容
            let content = data.content;
            let CHARH = drawText(ctx, content, 590);
            // 底部图片
            ctx.beginPath();
            ctx.rect(0, 630 + 15 + CHARH, 750, 132);
            ctx.fillStyle = "#513CC6";
            ctx.fill();
            ctx.drawImage(that.downloadimg.logo, 33, 630 + 35 + CHARH, 182, 47);
            ctx.fillStyle = "#ffffff";
            ctx.font = "normal bold 26px sans-serif";
            ctx.textAlign = "left";
            ctx.fillText("用生日解析人际关系", 33, 590 + 145 + CHARH);
            ctx.fillText(
                "打开密码派小程序",
                720 - ctx.measureText("打开密码派小程序").width,
                590 + 90 + CHARH
            );
            ctx.fillText(
                "或APP查看更多",
                720 - ctx.measureText("或APP查看更多").width,
                590 + 145 + CHARH
            );
            var srccc = canvas.toDataURL();
            let w = '750'
            let h = 630 + 132 + 15 + CHARH
            that.$GLOBAL.canvasImgClip(srccc, w, h).then((url) => {
                that.shareImg = url;
            })
        },


    }
};