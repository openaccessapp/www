<template>
  <div class="header">
    <div class="container">
      <figure-circle
        class="left-circle"
        color="white"
        :zIndex="0"
        :left="-360"
        :isFilled="true"
        :top="-80"
      ></figure-circle>

      <figure-circle
        color="white"
        :zIndex="0"
        :right="-200"
        :isFilled="true"
        :top="-100"
      ></figure-circle>
      <figure-circle
        color="#385fe2"
        :zIndex="1"
        :right="-200"
        :isFilled="false"
        :top="200"
      ></figure-circle>
      <navigation
        :navigationText="navigationText"
        :buttonText="buttonText"
        :places="places"
        :image="image"
      ></navigation>
      <div class="row">
        <div class="col-xl-6 col-md-6 col-xs-6 col-12 position-left">
          <p class="description">{{ description }}</p>
          <p class="info-text">{{ infoText }}</p>
          <div class="google-and-apple-position">
            <a :href="googlePlayLink">
              <img
                class="google-position"
                src="assets/google-play-header.png"
              />
            </a>
            <a :href="appStoreLink" >
              <img class="apple-position" src="assets/app-store.png" />
            </a>
          </div>
          <p>{{ information }}</p>
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

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill="#FCFDFF" points="0,100 100,0 100,100" />
    </svg>
  </div>
</template>

<script>
import header from "js-yaml-loader!../../content/EN/header.yaml";
import headerDe from "js-yaml-loader!../../content/DE/header.yaml";
import FigureCircle from "../components/FigureCircle.vue";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Header",
  components: {
    FigureCircle,
    Navigation,
  },
  watch: {
    $route() {
      this.init();
    },
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
      information: "",
      places: "",
      infoText: "",
      // OSI: "",
      // github: "",
      image: "",
      // END: Expected data from .yaml
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const data =
        this.$router.history.current.params.lang == "en" ? header : headerDe;

      this.navigationText = data["navigation-text"];
      this.buttonText = data["button-text"];
      this.title = data["title"];
      this.description = data["description"];
      this.googlePlayLink = data["google-play-link"];
      this.appStoreLink = data["app-store-link"];
      this.information = data["information"];
      this.places = data["places"];
      this.infoText = data["info-text"];
      // this.OSI = data.OSI;
      // this.github = data.github;
      this.image = data["image"];
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");
@import "../../public/assets/scss/main.scss";

.header {
  position: relative;
  background-color: $color__header-background;
  height: 110vh;
  .container {
    margin-top: 0;
    .left-circle {
      width: 777px;
      height: 777px;
    }
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
p {
  font-size: 14px;
  color: #1e2f67;
  font-family: $font__descriptions;
}
.position-left {
  text-align: left;
}
.description {
  margin-top: 150px;
  margin-bottom: 30px;
  font-family: $font__family;
  font-size: 60px;
  color: #1e2f67;
  font-weight: 700;
  width: 564px;
}
.info-text {
  font-family: $font__descriptions;
  font-size: 18px;
  color: #1e2f67;
  margin-bottom: 30px;
  text-align: left;
  width: 678px;
  height: 65px;
}
.google-and-apple-position {
  margin-bottom: 30px;
  margin-top: 60px;
  img.google-position {
    width: 245px;
    height: 72px;
    margin-right: 30px;
  }
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
    margin-left: 300px;
    margin-top: 80px;
  }
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
  .google-and-apple-position {
    img.google-position,
    img.apple-position {
      width: 207px;
      height: 61px;
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