<template>
  <div class="background-color">
    <div class="container">
      <navigation :navigationText="navigationText" :buttonText="buttonText" :mobileApp="mobileApp"></navigation>
      <div class="position">
        <p>Terms and Conditions</p>
      </div>
      <div class="md-position" v-html="html"></div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content/EN/header.yaml";
import headerDe from "js-yaml-loader!../../content/DE/header.yaml";
import gdpr from "raw-loader!../../content/EN/gdpr.md";
import gdprDe from "raw-loader!../../content/DE/gdpr.md";
import marked from "marked";

import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  name: "Terms",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      navigationText: "",
      buttonText: "",
      mobileApp: "",
      html: "",
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
      let data =
        this.$router.history.current.params.lang == "en" ? gdpr : gdprDe;
      let data2 =
        this.$router.history.current.params.lang == "en" ? header : headerDe;
      this.navigationText = data2["navigation-text"];
      this.buttonText = data2["button-text"];
      this.mobileApp = data["mobile-app"];

      this.html = marked(data);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";
.position {
  font-family: $font__family;
  font-size: 60px;
  color: #1e2f67;
  text-align: left;
  margin-top: 75px;
}
.md-position {
  text-align: justify;
  margin-left: 70px;
}
</style>