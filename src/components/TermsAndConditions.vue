<template>
  <div class="background-color">
    <div class="container">
      <div class="row nav">
        <div class="col-6 logo-position">
          <img src="assets/logo.png" />
        </div>
        <div class="col-6 button-design">
          <div>
            {{navigationText}}
            <a :href="mobileApp">
              <button class="btn">{{buttonText}}</button>
            </a>
          </div>
        </div>
      </div>
      <div v-html="html"></div>
    </div>
  </div>
</template>

<script>
import terms from "js-yaml-loader!../../content-manager/header.yaml";
import gdpr from "../../gdpr.md";
import marked from "marked";
export default {
  name: "Terms",
  data() {
    return {
      navigationText: "",
      buttonText: ""
    };
  },
  mounted() {
    this.navigationText = terms["navigation-text"];
    this.buttonText = terms["button-text"];
    this.html = marked(gdpr);
  }
};
</script>

<style scoped lang="scss">
</style>