<template>
  <div class="container download-links">
    <figure-circle
      class="circle"
      color="#DDFFF7"
      :zIndex="0"
      :right="-320"
      :isFilled="false"
    ></figure-circle>
    <div class="row">
      <div class="col-12">
        <h2>{{ appsText }}</h2>
      </div>
      <div class="col-12 links-position">
        <div class="row justify-content-center">
          <div class="col-xl-6 col-md-6 col-xs-6 col-12 column-inner-first">
            <a :href="googlePLay">
              <img
                class="google-play-design"
                src="assets/google-play-header.png"
              />
            </a>
          </div>
          <div class="col-xl-6 col-md-6 col-xs-6 col-12 column-inner-last">
            <a :href="appStore">
              <img class="app-store-design" src="assets/app-store.png" />
            </a>
          </div>
        </div>
        <div class="row documentation">
          <router-link to="/en/documentation">
            <p>{{ documentation }}</p></router-link
          >
          <img src="/assets/documentation_link_image.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadApp from "@content/en/header.yaml";
import DownloadAppDe from "@content/de/header.yaml";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "DownloadApp",
  components: { FigureCircle },
  data() {
    return {
      googlePLay: "",
      appStore: "",
      appsText: "",
      documentation: "",
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const data =
        this.$router.history.current.params.lang == "en"
          ? DownloadApp
          : DownloadAppDe;
      this.googlePLay = data["google-play-link"];
      this.appStore = data["app-store-link"];
      this.appsText = data["apps-text"];
      this.documentation = data["documentation"];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";
h2 {
  font-family: $font__family;
  font-size: 40px;
  color: #1e2f67;
}
.links-position {
  margin-top: 50px;
}
.google-play-design,
.app-store-design {
  width: 210px;
  height: 62px;
}
.documentation {
  margin: 50px 0 0 0;
  justify-content: center;
  align-items: flex-end;
  p {
    margin-right: 10px;
    color: #385fe2;
    margin-bottom: 0;
    font-size: 12px;
    font-weight: 400;
  }
  img {
    z-index: 1;
  }
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