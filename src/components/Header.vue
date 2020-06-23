<template>
  <div class="container">
    <div class="row nav">
      <div class="col-6">
        <img src="../assets/logo.png" />
      </div>
      <div class="col-6">
        <div>
          If you own or manage a place
          <button class="btn">Go to place App</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="butler">Plan Safe Visits</div>
        <div class>Plan save visits, quickly, queue-free and stay healthy</div>
        <img src="../assets/google-play.png" />
        <img src="../assets/app-store.png" />
      </div>
      <div class="col-6">
        <div class="images">
          <img class="people-image" src="../assets/people.png" />
          <img class="position blurred-image" src="../assets/blur-effect.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.butler {
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
.images {
  position: relative;
}
img.position {
  position: absolute;
  top: 0;
  left: 0;
}

.images {
  .people-image,
  .blurred-image {
    width: 100%;
  }
}

.nav {
  margin: 25px 0 50px;
}
</style>