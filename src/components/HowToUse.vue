<template>
  <div class="container-fluid">
    <div class="mock-image"></div>
    <div class="usage-description">
      <h3>How to use</h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et.H4
      </p>
    </div>
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
    width: 100%;
    padding: 0;
}

.mock-image {
  width: 50%;
  height: 600px;
  background-color: $color__main;
}
.usage-description {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        width: 50%;
    }
}
</style>