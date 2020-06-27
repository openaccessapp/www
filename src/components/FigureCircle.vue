<template>
  <div class="circle" :style="styling" :class="customClass">
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
      isFilled: Boolean,
      customClass: String
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
      'top': this.isExisting(this.top) ? `${this.top}px` : 'unset',
      'right': this.isExisting(this.right) ? `${this.right}px` : 'unset',
      'bottom': this.isExisting(this.bottom) ? `${this.bottom}px` : 'unset',
      'left': this.isExisting(this.left) ? `${this.left}px` : 'unset',
      'background': this.isFilled ? this.color : 'unset',
    }
  },
  methods: {
    isExisting(field) {
      return field >= 0 || field < 0 ? true : false;
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