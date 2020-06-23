<template>
  <div class="container">
      <div class="row">
          <div class="col-12">
              <h2>Customer Reviews</h2>
          </div>
      </div>
      <div class="row content">
          <div class="col-12">
              <img src="../assets/logo.png" />
              <p class="bold">Jack Collins</p>
              <p>Amsterdam</p>
              <h4 class="person-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                  sed diam voluptua. At vero eos et.H4</h4>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "CustomerReviews"
};
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
.bold {
    font-weight: bold;
}
.person-description {
    width: 50%;
    margin: auto;
}
</style>