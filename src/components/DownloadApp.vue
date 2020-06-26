<template>
  <div class="container">
    <figure-circle color="#DDFFF7" :zIndex="0" :right="-320" :isFilled="false" :top="-220"></figure-circle>
    <figure-circle color="#DDFFF7" :zIndex="0" :left="-280" :isFilled="true" :top="0"></figure-circle>
    <div class="row">
      <div class="col-12">
        <h2>Download the App Text HERE</h2>
      </div>
      <div class="col-12 links-position">
        <a :href="googlePLay">
          <img class="google-play-design" src="assets/google-play-header.png" />
        </a>
        <a :href="appStore">
          <img src="assets/app-store.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadApp from "js-yaml-loader!../../content-manager/header.yaml";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "DownloadApp",
  components: { FigureCircle },
  data() {
    return {
      googlePLay: "",
      appStore: ""
    };
  },
  mounted() {
    this.googlePLay = DownloadApp["google-play-link"];
    this.appStore = DownloadApp["app-store-link"];
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";
h2 {
  font-family: $font__family;
  font-size: 40px;
  color: #1e2f67;
}
.links-position {
  margin-top: 50px;
}
.google-play-design {
  width: 210px;
  height: 62px;
  margin-right: 30px;
}
</style>