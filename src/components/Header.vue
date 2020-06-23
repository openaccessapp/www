<template>
  <div class="row">
    <div class="col-6">
      <img src="../assets/Layer2.png" />
      <div class="butler">Plan Safe Visits</div>
      <div class>Plan save visits, quickly, queue-free and stay healthy</div>
      <img src="../assets/en_badge_web_generic.png" />
      <img src="../assets/1200px-Download_on_the_App_Store_Badge.svg.png" />
    </div>
    <div class="col-6">
      <div>
        If you own or manage a place
        <button class="btn">Go to place App</button>
      </div>
      <div class="images">
        <img src="../assets/georg-arthur-pflueger-eO_JhqabBY0-unsplash.png" />
        <img class="position" src="../assets/georg-arthur-pflueger-eO_JhqabBY0-unsplash-1.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
div.butler {
  font-family: Butler;
  font-weight: black;
  font-size: 50px;
  color: #000000;
}
button.btn {
  border: 10px;
  background: #00ce9e;
  color: white;
}
div.images {
  width: 726px;
  position: relative;
}
img.position {
  position: absolute;
  top: 0;
  left: 0;
}
</style>