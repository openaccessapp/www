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
        <div class="col-6 positionLeft">
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
          <p class="infoText">{{infoText}}</p>
          <a :href="OSI">
            <img src="assets/open-source-logo.png" />
          </a>
          <a :href="github">
            <img class="github-logo" src="assets/github-logo.png" />
          </a>
        </div>
        <div class="col-6">
          <div class="images">
            <img class="people-image" src="assets/phone-app.png" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="scroll-design">Scroll</p>
          <div class="lines"></div>
          <div class="lines2"></div>
          <img class="image-design" src="assets/angle-down.png" />
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
      mobileApp: "",
      infoText: "",
      OSI: "",
      github: ""
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
    this.infoText = header["info-text"];
    this.OSI = header.OSI;
    this.github = header.github;
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");
@import "../../public/assets/main.scss";

.background-color {
  background-color: #ddfff7;
}
.positionLeft {
  text-align: left;
}
.logoPosition {
  margin-top: 30px;
  text-align: left;
}
.buttonDesign {
  margin-top: 40px;
  font-family: $descriptions__fonts;
}
.title {
  margin-top: 200px;
  font-family: $family__fonts;
  font-size: 60px;
  color: #1e2f67;
}
.description {
  margin-top: 10px;
  margin-bottom: 60px;
  font-family: $descriptions__fonts;
  font-size: 30px;
  color: #474a67;
}
.googleAndApplePosition {
  margin-bottom: 30px;
  img.googlePosition {
    width: 209px;
    height: 62px;
    margin-right: 30px;
  }
}
.infoText {
  font-family: "Rubik";
  font-size: 14px;
  color: #474a67;
  margin-bottom: 60px;
}

button.btn {
  border: 10px;
  background: #385fe2;
  color: white;
  box-shadow: 0px 5px 10px #385fe240;
  margin-left: 30px;
  padding: 10px 35px;
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

img.github-logo {
  width: 73px;
  height: 74px;
  margin-left: 50px;
}

.scroll-design {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  color: #1e2f67;
  margin-bottom: 0px;
}

.lines {
  width: 3px;
  height: 5px;
  border-bottom: 30px solid #1e2f67;
  border-radius: 10px;
  margin: 0 auto;
}

.lines2 {
  width: 3px;
  height: 5px;
  border-bottom: 30px solid #1e2f67;
  border-radius: 10px;
  margin: 5px auto;
}

.image-design {
  width: 25px;
  height: 15px;
}

.nav {
  margin: 25px 0 50px;
}
</style>