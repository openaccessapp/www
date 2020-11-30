<template>
  <div class="background-color">
    <div class="container">
      <navigation
        :navigationText="navigationText"
        :buttonText="buttonText"
        :mobileApp="mobileApp"
        :image="image"
      ></navigation>
      <div class="position">
        <p>Terms and Conditions</p>
      </div>
      <div class="md-position" v-html="html"></div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import header from "@content/en/header.yaml";
import headerDe from "@content/de/header.yaml";
import gdpr from "raw-loader!@content/en/gdpr.md";
import gdprDe from "raw-loader!@content/de/gdpr.md";
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
      image: "",
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
      let dataHeader =
        this.$router.history.current.params.lang == "en" ? header : headerDe;
      this.navigationText = dataHeader["navigation-text"];
      this.buttonText = dataHeader["button-text"];
      this.mobileApp = data["mobile-app"];
      this.image = dataHeader["image"];
      this.html = marked(data);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";
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