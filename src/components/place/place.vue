<!-- 地点选择 -->
<template>
  <div class="place-page">
    <mt-popup v-model="show" position="bottom" :closeOnClickModal="false">
      <div class="location-title">
        <p class="cancel" @click="locationCancel">取 消</p>
        <p class="confirm" @click="locationConfirm">确 定</p>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange" valueKey="name"></mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import area from "../../config/area";
export default {
  data() {
    return {
      show: false,
      areaValue: "",
      slots: [
        {
          flex: 1,
          values: area,
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "",
          className: "slot2"
        },
        {
          flex: 1,
          values: area[0].children,
          className: "slot3",
          textAlign: "center"
        }
      ]
    };
  },

  props: ["isshow"],
  watch: {
    isshow: function(newVal, oldVal) {
      this.show = newVal
    }
  },
  methods: {
    //   选择地区修改
    onValuesChange(picker, val) {
      if (val[0]) {
        picker.setSlotValues(1, val[0].children);
      } else {
        picker.setSlotValues(0, val);
      }
      this.areaValue = val[0].name + " " + val[1].name;
    },
    // 确定
    locationConfirm() {
        this.show = false
      this.$emit("confirm", this.areaValue);
    },
    // 取消
    locationCancel() {
        this.show = false
      this.$emit("cancel");
    }
  }
};
</script>
<style lang='scss' scoped>
@import "place";
</style>