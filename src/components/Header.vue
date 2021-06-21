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
        class="right-circle"
        :zIndex="0"
        :right="-200"
        :isFilled="true"
        :top="-100"
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
          <div class="phone-mobile-only">
            <div class="images">
              <img class="people-image" src="assets/phone-app.png" />
            </div>
          </div>
          <div class="google-and-apple-position">
            <a :href="googlePlayLink">
              <img
                class="google-position"
                src="assets/google-play-header.png"
              />
            </a>
            <a :href="appStoreLink">
              <img class="apple-position" src="assets/app-store.png" />
            </a>
          </div>
          <p class="information">{{ information }}</p>
          <div class="row documentation">
            <router-link to="/en/documentation">
              <p>{{ documentation }}</p></router-link
            >
            <img src="/assets/documentation_link_image.svg" />
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-xs-6 col-12 phone">
          <div class="images">
            <img class="people-image" src="assets/phone-app.png" />
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
  </div>
</template>

<script>
import header from "@content/en/header.yaml";
import headerDe from "@content/de/header.yaml";
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
      documentation: "",
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
      this.documentation = data["documentation"];
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
  background-color: #DDEFFF;
  height: 1030px;
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
.information {
  font-size: 14px;
  color: #1e2f67;
  font-family: $font__descriptions;
  margin-bottom: 0;
}
.position-left {
  text-align: left;
}
.description {
  position: relative;
  z-index: 1;
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: $font__family;
  font-size: 60px;
  color: #1e2f67;
  font-weight: 700;
  width: 564px;
}
.info-text {
  position: relative;
  z-index: 1;
  font-family: $font__descriptions;
  font-size: 18px;
  color: #1e2f67;
  margin-bottom: 30px;
  text-align: left;
  width: 678px;
  height: 65px;
}
.phone-mobile-only {
  display: none;
}
.google-and-apple-position {
  margin-bottom: 30px;
  margin-top: 60px;
  img.google-position,
  img.apple-position {
    width: 207px;
    height: 61px;
    margin-right: 30px;
  }
}
.documentation {
  margin-left: 0;
  margin-top: 20px;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  p {
    margin-right: 10px;
    color: #385fe2;
    font-size: 12px;
    margin-bottom: 0;
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
    z-index: 2;
    margin-left: 300px;
    margin-top: 50px;
    height: auto;
    width: 250px;
  }
}
.scroll {
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
}

.image-design {
  width: 25px;
  height: 15px;
}
@media only screen and (max-width: 415px) {
  .header {
    background-size: calc(100% - 100px);
    .container {
      .left-circle {
        top: -99px !important ;
        left: -183px !important ;
        width: 299px;
        height: 299px;
      }
      .right-circle {
        top: 79px !important;
        left: 209px !important;
        width: 452px;
        height: 452px;
      }
      .blue-circle {
        top: 227px !important;
        left: 222px !important;
        width: 447px;
        height: 447px;
        display: none;
      }
      .documentation {
        margin-right: 0;
      }
    }
  }
  .update-deutschland {
    margin-top: -1rem;
    margin-bottom: 2rem;
    position: relative;
    padding-left: 0;
    .update-deutschland-image{
      width: 200px;
    }
    p{
      margin-top: 1rem;
      padding-left: 8.5%;
      padding-right: 8.5%;
      a{
        color: #385fe2;
      }
    }
  }
}
@media only screen and (max-width: 769px) {
  .header {
    height: auto;
    overflow-x: hidden;
    .container {
      max-width: 768px;
      .left-circle {
        top: -99px !important ;
        left: -183px !important ;
        width: 299px;
        height: 299px;
      }
      .right-circle {
        top: 160px !important;
        right: -209px !important;
        width: 452px;
        height: 452px;
        z-index: -20px;
      }
      .blue-circle {
        top: 330px !important;
        right: -222px !important;
        width: 447px;
        height: 447px;
      }
      .position-left {
        text-align: unset;
        margin: 0 auto;
        height: 1200px;
        .description {
          font-size: 30px;
          width: 280px;
          margin: 65px auto 20px;
        }
        .google-and-apple-position {
          max-width: 210px;
          margin: 35px auto 0;
          img {
            margin-bottom: 25px;
          }
        }
        .info-text {
          font-size: 16px;
          width: 280px;
          height: auto;
          margin: 0 auto;
        }
        .information {
          width: 275px;
          margin: 0 auto;
          text-align: left;
        }
        .documentation {
          justify-content: center;
          p {
            margin-bottom: 0;
          }
        }
      }
      .phone-mobile-only {
        display: block;
        img {
          margin: 25px auto 0px;
        }
      }
      .phone {
        display: none;
      }
    }
  }
  .scroll {
    display: none;
  }
}
</style>