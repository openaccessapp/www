<template>
  <div class="footer container">
    <figure-circle
      class="circle"
      color="#385FE2"
      :zIndex="0"
      :right="-270"
      :isFilled="false"
      :bottom="0"
      customClass="custom-circle"
    ></figure-circle>
    <figure-circle color="#DDFFF7" :zIndex="0" :left="-320" :isFilled="true" :bottom="0"></figure-circle>
    <div class="row container-links">
      <img class="col-xl-4 col-sm-4 col-md-4 col-4" src="/assets/logo-footer.svg" />
      <div class="col-xl-3 col-sm-4 col-6 col-md-4 col-xs-6 info">
        <router-link :to="`/${$router.history.current.params.lang}/terms`">
          <p class="row terms">{{firstTitle}}</p>
        </router-link>
        <router-link :to="`/${$router.history.current.params.lang}/privacy`">
          <p class="row terms">{{secondTitle}}</p>
        </router-link>
        <p class="row contacts">{{thirdTitle}}</p>
        <div class="row mail">
          <img src="/assets/envelope-footer.png" />
          <p>{{email}}</p>
        </div>
      </div>
      <div class="line" />
      <div class="col-xs-6 col-sm-4 col-md-4 col-6 col-xl-4 sites">
        <div class="row github">
          <img :src="github" />
          <p>{{githubText}}</p>
        </div>
        <div class="row OS">
          <img :src="OS" />
          <p>{{OStext}}</p>
        </div>
      </div>
      <p class="description">{{description}}</p>
    </div>
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content/EN/footer.yaml";
import footerDe from "js-yaml-loader!../../content/DE/footer.yaml";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "CustomerReviews",
  components: { FigureCircle },
  data() {
    return {
      firstTitle: "",
      secondTitle: "",
      thirdTitle: "",
      email: "",
      description: "",
      github: "",
      githubText: "",
      OS: "",
      OStext: "",
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
      const data =
        this.$router.history.current.params.lang == "en" ? footer : footerDe;
      this.firstTitle = data["first-title"];
      this.secondTitle = data["second-title"];
      this.thirdTitle = data["third-title"];
      this.email = data.email;
      this.description = data.description;
      this.github = data["github"];
      this.githubText = data["github-text"];
      this.OS = data["open-source"];
      this.OStext = data["open-source-text"];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.footer.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  max-width: unset;
  // padding: 0;
  // height: auto;
  // background: none;
  p {
    font-size: 16px;
    color: black;
  }
  .line {
    width: 1px;
    height: 163px;
    border-bottom: 186px solid #dbddeb;
  }
  .sites {
    margin-left: 65px;
    p {
      color: #1e2f67;
      font-size: 14px;
      font-family: $font__descriptions;
      text-align: left;
      margin-left: 30px;
    }
    .github {
      flex-wrap: unset;
      img {
        width: 70px;
        height: 70px;
        margin-bottom: 50px;
      }
    }
    .OS {
      flex-wrap: unset;
      img {
        width: 70px;
        height: 90px;
      }
    }
  }
  .custom-circle {
    border: 6px solid rgb(56, 95, 226);
    z-index: 0;
    top: unset;
    right: -290px;
    bottom: 0 !important;
    left: unset;
    background: unset;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
    height: 200px;
    border-bottom: 0 !important;
  }
  .container-links {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 50px 190px;
    img {
      max-width: 205px;
      max-height: 155px;
      padding: 0;
    }
    .description {
      width: 900px;
      text-align: center;
      margin: 40px auto;
      font-family: $font__descriptions;
      color: #1e2f67;
      font-size: 14px;
    }
    .info {
      margin-left: 135px;
      img {
        max-width: 20px;
        max-height: 16px;
      }
      .terms {
        margin-bottom: 20px;
        font-size: 16px;
        color: #1e2f67;
        font-family: $font__descriptions;
        font-weight: 500;
      }
      p {
        margin-bottom: 10px;
        font-size: 16px;
        color: #1e2f67;
        font-family: $font__descriptions;
        font-weight: 500;
      }
      .mail {
        align-items: center;
        p {
          margin-left: 10px;
          font-size: 14px;
          font-family: $font__descriptions;
          font-weight: 400;
          color: #1e2f67;
          margin-bottom: 0;
        }
      }
    }
  }
}
@media only screen and (max-width: 414px) {
  img {
    display: none;
  }
  .container-links {
    display: flex !important;
    align-items: flex-start !important;
    padding: 0 !important;
    margin-left: 5px !important;
    .paragraph {
      font-size: 12px !important;
    }
    .mail {
      p {
        margin: 0 !important;
      }
    }
    .info {
      .terms,
      .contacts {
        font-size: 14px !important;
      }
    }
  }
}

@media only screen and (max-width: 320px) {
  .container-links {
    display: flex !important;
    align-items: flex-start !important;
    padding: 0 !important;
    margin-left: 5px !important;
    .paragraph {
      font-size: 10px !important;
    }
    .mail {
      p {
        font-size: 10px !important;
        margin: 0 !important;
      }
    }
  }
}
@media only screen and (min-width: 415px) and (max-width: 1025px) {
  .footer {
    .row.container-links {
      margin-right: 50px;
      padding: 0;
      padding-bottom: 50px;
      .info {
        .terms {
          text-align: left;
        }
      }
    }
  }
}

@media only screen and (max-width: 1365px) {
  .footer {
    width: 100% !important;
    height: auto !important;
    margin-left: 0;
    margin-right: 0;
    .circle {
      display: none;
    }
  }
}
</style>