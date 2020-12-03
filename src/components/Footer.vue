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
    <figure-circle
      color="#DDFFF7"
      :zIndex="0"
      :left="-320"
      :isFilled="true"
      :bottom="0"
    ></figure-circle>
    <div class="row container-links">
      <img
        class="col-xl-4 col-sm-4 col-md-4 col-4 logo"
        src="/assets/logo-footer.svg"
      />
      <div class="col-xl-3 col-sm-4 col-6 col-md-4 col-xs-6 info">
        <router-link :to="`/${$router.history.current.params.lang}/terms`">
          <p class="row terms">{{ firstTitle }}</p>
        </router-link>
        <router-link :to="`/${$router.history.current.params.lang}/privacy`">
          <p class="row terms">{{ secondTitle }}</p>
        </router-link>
        <p class="row contacts">{{ thirdTitle }}</p>
        <div class="row mail">
          <img src="/assets/envelope-footer.png" />
          <p>{{ email }}</p>
        </div>
      </div>
      <div class="line" />
      <div class="col-xs-6 col-sm-4 col-md-4 col-6 col-xl-4 sites">
        <div class="row github">
          <a :href="linkGithub" target="_blank"> <img :src="github" /></a>
          <p>{{ githubText }}</p>
        </div>
        <div class="row OS">
          <a :href="linkOSI" target="_blank"> <img :src="OS" /></a>
          <p>{{ OStext }}</p>
        </div>
      </div>
      <div class="text">
        <p class="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import footer from "@content/en/footer.yaml";
import footerDe from "@content/de/footer.yaml";
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
      linkGithub: "",
      github: "",
      githubText: "",
      OS: "",
      OStext: "",
      linkOSI: "",
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
      this.linkOSI = data["linkOSI"];
      this.linkGithub = data["linkGithub"];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";

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
    .logo {
      max-width: 205px;
      max-height: 155px;
      padding: 0;
    }
    .text {
      width: 900px;
      margin: 0 auto;
      .description {
        text-align: center;
        margin: 40px auto;
        font-family: $font__descriptions;
        color: #1e2f67;
        font-size: 14px;
      }
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
@media only screen and (max-width: 769px) {
  .footer.container {
    overflow-x: hidden;
    justify-content: center;
    padding: 0;
    width: unset;
    .sites {
      -webkit-order: 2;
      margin: 0 auto;
      .github {
        flex-direction: column;
        p {
          margin: 0 auto 60px;
          text-align: left;
        }
        img {
          margin-bottom: 20px;
        }
      }
      .OS {
        flex-direction: column;
        p {
          text-align: left;
          margin: 0 auto;
        }
        img {
          margin-bottom: 20px;
        }
      }
    }
    .container-links {
      flex-direction: column;
      .info {
        -webkit-order: 1;
        margin: 0 auto 60px !important;
      }
      .text {
        -webkit-order: 4;
        .description {
          margin: 0 auto;
          font-size: 12px;
          width: 320px;
        }
      }
      .logo {
        -webkit-order: 3;
        margin-bottom: 30px;
        margin-top: 90px;
        width: 150px;
        height: 110px;
      }
      .line {
        display: none;
      }
    }
  }
}
</style>