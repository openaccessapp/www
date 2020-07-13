<template>
  <div class="background-color">
    <div class="container">
      <navigation :navigationText="navigationText" :buttonText="buttonText" :mobileApp="mobileApp"></navigation>
      <div class="position">
        <p>Privacy Policy</p>
      </div>
      <div class="md-position" v-html="html"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content/header.yaml";
import privacy from "raw-loader!../../privacy.md";
import marked from "marked";

import Navigation from "./Navigation";
import Footer from "./Footer";
export default {
  name: "Terms",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      navigationText: "",
      buttonText: "",
      mobileApp: "",
      html: ""
    };
  },
  mounted() {
    this.navigationText = header["navigation-text"];
    this.buttonText = header["button-text"];
    this.mobileApp = header["mobile-app"];

    this.html = marked(privacy);
  }
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