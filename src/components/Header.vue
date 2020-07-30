<template>
  <div class="header">
    <div class="container">
      <figure-circle color="white" :zIndex="0" :left="-200" :isFilled="true" :top="-100"></figure-circle>
      <figure-circle color="white" :zIndex="0" :right="-200" :isFilled="true" :top="-100"></figure-circle>
      <figure-circle color="#385fe2" :zIndex="1" :right="-200" :isFilled="false" :top="200"></figure-circle>
      <navigation :navigationText="navigationText" :buttonText="buttonText" :mobileApp="mobileApp"></navigation>
      <div class="row">
        <div class="col-xl-6 col-md-6 col-xs-6 col-12 position-left">
          <div class="title">{{title}}</div>
          <div class="description">{{description}}</div>
          <div class="google-and-apple-position">
            <a :href="googlePlayLink">
              <img class="google-position" src="assets/google-play-header.png" />
            </a>
            <a style="opacity: 0.3; cursor: default">
              <img class="apple-position" src="assets/app-store.png" />
            </a>
          </div>
          <p class="infoText">{{infoText}}</p>
          <div>
            <a :href="OSI">
              <img src="assets/open-source-logo.png" />
            </a>
            <!-- <a :href="github">
              <img class="github-logo" src="assets/github-logo.png" />
            </a>-->
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-xs-6 col-12 phone">
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

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="#FCFDFF" points="0,100 100,0 100,100" />
    </svg>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content/header.yaml";
import FigureCircle from "../components/FigureCircle.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Header",
  components: {
    FigureCircle,
    Navigation,
  },
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
      github: "",
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
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");
@import "../../public/assets/main.scss";

.header {
  position: relative;
  background-color: $color__header-background;
  height: 110vh;
  .container {
    margin-top: 0;
  }
  svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10vw;
    left: 0;
    /* set height to pixels if you want angle to change with screen width */
  }
}
.position-left {
  text-align: left;
}

.title {
  font-family: $font__family;
  font-size: 60px;
  color: #1e2f67;
}
.description {
  margin-top: 10px;
  margin-bottom: 60px;
  font-family: $font__descriptions;
  font-size: 30px;
  color: #474a67;
}
.google-and-apple-position {
  margin-bottom: 30px;
  img.google-position {
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
    position: relative;
    width: 360px;
    height: 770px;
    z-index: 2;
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

@media only screen and (max-width: 1536px) {
  .header {
    height: 1000px;
    overflow-x: hidden;
  }
  .title {
    font-size: 40px;
  }
  .description {
    font-size: 25px;
  }
  .google-and-apple-position {
    img.google-position,
    img.apple-position {
      width: 165px;
      height: auto;
    }
  }
  .images {
    .people-image {
      height: auto;
      width: 250px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .phone {
    display: none;
  }
}
</style>