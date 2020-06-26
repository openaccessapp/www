<template>
  <div class="background-color">
    <div class="container">
      <navigation :navigationText="navigationText" :buttonText="buttonText" :mobileApp="mobileApp"></navigation>
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content-manager/header.yaml";
import gdpr from "raw-loader!../../gdpr.md";
import marked from "marked";

import Navigation from './Navigation';

export default {
  name: "Terms",
  components: {
    Navigation
  },
  data() {
    return {
      navigationText: "",
      buttonText: "",
      mobileApp: ""
    };
  },
  mounted() {
    this.navigationText = header["navigation-text"];
    this.buttonText = header["button-text"];
    this.mobileApp = header["mobile-app"];

    this.html = marked(gdpr);
  }
};
</script>

<style scoped lang="scss">
</style>