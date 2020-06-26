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
      left: Number,
      right: Number,
      
  },
  data() {
    return {
      styling: {}
    };
  },
  mounted() {
    this.styling = {
      'border': `10px solid ${this.color}`,
      'z-index': this.zIndex
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  z-index: 10;
  position: absolute;
  left: -100px;
}
</style>