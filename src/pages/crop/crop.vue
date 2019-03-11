<!-- crop图片裁剪 -->
<template>
  <div class="crop-page">
    <input type="file" class="inputer" ref="inputer" accept="image/*" @change="addImg">
    <div class="cropper-content">
      <div class="cropper" :style="{height:height+'px'}">
        <VueCropper
          ref="cropper"
          :img="option.img"
          :outputSize="option.size"
          :outputType="option.outputType"
          :info="false"
          :full="option.full"
          :canMove="option.canMove"
          :canMoveBox="option.canMoveBox"
          :original="option.original"
          :autoCrop="option.autoCrop"
          :autoCropWidth="option.autoCropWidth"
          :autoCropHeight="option.autoCropHeight"
          :fixedBox="option.fixedBox"
        ></VueCropper>
      </div>
    </div>
    <div class="cropBtn">
      <div class="reselect cropBtnItem" @click="reselect">重新选择</div>
      <div class="confirm cropBtnItem" @click="confirm(1)">确实</div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  data() {
    return {
      height: 0,
      option: {
        img: "",
        outputSize: 1, //剪切后的图片质量（0.1-1）
        outputType: "png",
        autoCrop: true, //是否默认生成截图框
        autoCropWidth: 250,
        autoCropHeight: 250,
        fixedBox: true, //固定截图框大小 不允许改变
        canMove: true, //上传图片是否可以移动
        canMoveBox: false, //截图框能否拖动
        centerBox: true, //截图框是否被限制在图片里面

        full: false, //输出原图比例截图 props名full
        original: false
      }
    };
  },
  components: { VueCropper },
  mounted() {
    // 获取可视高度
    this.height = document.documentElement.clientHeight - 35;
    this.addImg(this.$route.params.file);
  },
  methods: {
    //   选择图片
    addImg(file) {
      let that = this;
      let num = 1;
      let files = "";
      if (!file.name) {
        files = this.$refs.inputer.files[0];
      } else {
        files = file;
      }
      var reader = new FileReader();
      reader.onload = e => {
        // alert(e)
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          that.option.img = data;
        } else if (num === 2) {
          that.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(files);
    },
    // 重新选择
    reselect() {
      this.$refs.inputer.click();
    },
    // 确定
    confirm(type) {
      let that = this;
      if (type == 1) {
        // 获取截图的base64 数据
        that.$refs.cropper.getCropData(data => {
          that.$router.push({
            name: "friendInfo",
            params: { avater: data }
          });
        });
      } else {
        // 获取截图的blob数据
        that.$refs.cropper.getCropBlob(data => {
          that.$router.push({
            name: "friendInfo",
            params: { avater: data }
          });
        });
      }
    }
  }
};
</script>
<style lang='scss' scoped>
@import "crop";
</style>
