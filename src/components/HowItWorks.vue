<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>How it works</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col-4 text-section">
        <div class="section">
          <h3>1. Download</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.H4
          </p>
        </div>
        <div class="section mt-5">
          <h3>2. find</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.H4
          </p>
        </div>
      </div>
      <div class="col-4">
        <div class="mock-image">
          <iframe width="862" height="485" src="https://www.youtube.com/embed/JlJPe5qryDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <iframe width="862" height="485" :src="urlToVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          <!-- TODO (Milen) -->
        </div>
      </div>
      <div class="col-4 text-section">
        <div class="section">
          <h3>3. Plan</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.H4
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowItWorks",
  mounted() {
  }
};
</script>

<style scoped lang="scss">
@import '../assets/main.scss';
.section {
  p, h3 {
    text-align: left;
  }
}

.mock-image {
  width: 100%;
  height: 600px;
  background-color: $color__main;
}

.text-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>