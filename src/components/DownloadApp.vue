<template>
  <div class="container download-links">
    <figure-circle class="circle" color="#DDFFF7" :zIndex="0" :right="-320" :isFilled="false"></figure-circle>
    <div class="row">
      <div class="col-12">
        <h2>{{appsText}}</h2>
      </div>
      <div class="col-12 links-position">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-md-6 col-xs-6 col-12 column-inner-first">
            <a :href="googlePLay">
              <img class="google-play-design" src="assets/google-play-header.png" />
            </a>
          </div>
          <div class="col-xl-6 col-md-6 col-xs-6 col-12 column-inner-last">
            <a style="opacity: 0.3; cursor: default">
              <img src="assets/app-store.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadApp from "js-yaml-loader!../../content/header.yaml";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "DownloadApp",
  components: { FigureCircle },
  data() {
    return {
      googlePLay: "",
      appStore: "",
      appsText: "",
    };
  },
  mounted() {
    this.googlePLay = DownloadApp["google-play-link"];
    this.appStore = DownloadApp["app-store-link"];
    this.appsText = DownloadApp["apps-text"];
  },
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
}
@media only screen and (min-width: 768px) {
  .row {
    .column-inner-first,
    .column-inner-last {
      display: flex;
    }
    .column-inner-first {
      place-content: flex-end;
    }
    .column-inner-lest {
      place-content: flex-start;
    }
  }
}

@media only screen and (max-width: 768px) {
  .row {
    .column-inner-first {
      margin-bottom: 10px;
    }
  }
}

@media only screen and (max-width: 1365px) {
  .download-links {
    .circle {
      display: none;
    }
  }
}
</style>