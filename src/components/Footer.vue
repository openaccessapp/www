<template>
  <div class="container-fluid">
    <div class="row"></div>
    <img src="assets/logo-text.png" />
  </div>
</template>

<script>
export default {
  name: "CustomerReviews",
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.container-fluid {
  display: flex;
  place-items: flex-end;
  justify-content: center;

  width: 100%;
  padding: 0;
  height: 400px;
  background-color: $color__main;
}
</style>