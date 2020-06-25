<template>
  <div class="background-color">
    <div class="container">
      <div class="row nav">
        <div class="col-6 logoPosition">
          <img src="assets/logo.png" />
        </div>
        <div class="col-6 buttonDesign">
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
          <div class="title">{{title}}</div>
          <div class="description">{{description}}</div>
          <div class="googleAndApplePosition">
            <a :href="googlePlayLink">
              <img class="googlePosition" src="assets/google-play-header.png" />
            </a>
            <a :href="appStoreLink">
              <img src="assets/app-store.png" />
            </a>
          </div>
        </div>
        <div class="col-6">
          <div class="images">
            <img class="people-image" src="assets/phone-app.png" />
          </div>
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
.background-color {
  background-color: #ddfff7;
}
.logoPosition {
  margin-top: 30px;
}
.buttonDesign {
  margin-top: 40px;
}
.title {
  margin-top: 200px;
  text-align: left;
  font-family: Josefin Sans;
  font-weight: bold;
  font-size: 60px;
  color: #1e2f67;
}
.description {
  margin-top: 10px;
  margin-bottom: 60px;
  text-align: left;
  font-family: Rubik;
  font-size: 30px;
  color: #474a67;
}
.googleAndApplePosition {
  text-align: left;
  img.googlePosition {
    width: 209px;
    height: 62px;
    margin-right: 30px;
  }
}

button.btn {
  border: 10px;
  background: #385fe2;
  color: white;
  box-shadow: 0px 5px 10px #385fe240;
  margin-left: 30px;
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
  .people-image {
    width: 360px;
    height: 770px;
  }
}

.nav {
  margin: 25px 0 50px;
}
</style>