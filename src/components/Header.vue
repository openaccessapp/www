<template>
  <div class="container">
    <div class="row nav">
      <div class="col-6">
        <img src="assets/logo.png" />
      </div>
      <div class="col-6">
        <div>
          {{navigationText}}
          <a :href="mobileApp">
            <button class="btn">{{buttonText}}</button>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="butler">{{title}}</div>
        <div class>{{description}}</div>
        <a :href="googlePlayLink">
          <img src="assets/google-play.png" />
        </a>
        <a :href="appStoreLink">
          <img src="assets/app-store.png" />
        </a>
      </div>
      <div class="col-6">
        <div class="images">
          <img class="people-image" src="assets/people.png" />
          <img class="position blurred-image" src="assets/blur-effect.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content-manager/header.yaml";
export default {
  name: "Header",
  data() {
    return {
      // START: Expected data from .yaml
      navigationText: "",
      buttonText: "",
      title: "",
      description: "",
      googlePlayLink: "",
      appStoreLink: "",
      mobileApp: ""
      // END: Expected data from .yaml
    };
  },
  mounted() {
    this.navigationText = header["navigation-text"];
    this.buttonText = header["button-text"];
    this.title = header["title"];
    this.description = header["description"];
    this.googlePlayLink = header["google-play-link"];
    this.appStoreLink = header["app-store-link"];
    this.mobileApp = header["mobile-app"];
  }
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