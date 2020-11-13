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
        <p>Privacy Policy</p>
      </div>
      <div class="md-position" v-html="html"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import header from "@content/EN/header.yaml";
import headerDe from "@content/DE/header.yaml";
import privacy from "raw-loader!@content/EN/privacy.md";
import privacyDe from "raw-loader!@content/DE/privacy.md";
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
      const headerData =
        this.$router.history.current.params.lang == "en" ? header : headerDe;
      this.navigationText = headerData["navigation-text"];
      this.buttonText = headerData["button-text"];
      this.mobileApp = headerData["mobile-app"];
      this.image = headerData["image"];
      const privacyData =
        this.$router.history.current.params.lang == "en" ? privacy : privacyDe;
      this.html = marked(privacyData);
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