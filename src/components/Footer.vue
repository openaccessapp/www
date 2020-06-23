<template>
  <div class="container-fluid">
    
    <img src="../assets/logo-text.png"/>
  </div>
</template>

<script>
export default {
  name: "CustomerReviews"
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

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