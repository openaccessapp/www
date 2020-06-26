<template>
  <div class="circle" :style="styling">
  </div>
</template>

<script>
export default {
  name: "figure-circle",
  props: {
      color: String,
      zIndex: Number,
      top: Number,
      right: Number,
      bottom: Number,
      left: Number,
      isFilled: Boolean
  },
  data() {
    return {
      styling: {}
    };
  },
  mounted() {
    this.styling = {
      'border': `6px solid ${this.color}`,
      'z-index': this.zIndex,
      'top': this.top ? `${this.top}px` : 'unset',
      'right': this.right ? `${this.right}px` : 'unset',
      'bottom': this.bottom ? `${this.bottom}px` : 'unset',
      'left': this.left ? `${this.left}px` : 'unset',
      'background': this.isFilled ? this.color : 'unset',
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.circle {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  z-index: 10;
  position: absolute;
  left: -100px;
}
</style>