<template>
  <div class="how-it-works">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="title title-size">{{title}}</h2>
        </div>
      </div>
      <div class="row content">
        <div class="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12 text-section">
          <div class="section" v-if="sections[0]">
            <h3 class="title title-name">{{sections[0].title}}</h3>
            <div class="find">
              <p class="text">{{sections[0].text}}</p>
              <img class="first-step" src="/assets/step1.svg" />
            </div>
          </div>
          <div class="section mt-5" v-if="sections[1]">
            <h3 class="title title-name">{{sections[1].title}}</h3>
            <div class="plan">
              <p class="text">{{sections[1].text}}</p>
              <img class="second-step" src="/assets/step2.svg" />
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12">
          <div class="mock-image">
            <img class="how-it-works-image" src="assets/how-it-works.png" />
          </div>
        </div>
        <div class="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12 text-section download-position">
          <div class="section" v-if="sections[2]">
            <h3 class="title title-name">{{sections[2].title}}</h3>
            <div class="download">
              <p class="text">{{sections[2].text}}</p>
              <img class="third-step" src="/assets/step2.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import howItWorks from "../../content/access/EN/how-it-works.yaml";
import howItWorksDe from "../../content/access/DE/how-it-works.yaml";
export default {
  name: "HowItWorks",
  data() {
    return {
      sections: "",
      title: "",
      text: "",
      videoLink: "",
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
        this.$router.history.current.params.lang == "en"
          ? howItWorks
          : howItWorksDe;
      this.title = data["title"];
      this.text = data["text"];
      this.sections = data["sections"];
      this.videoLink = data["video-link"];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";
.how-it-works {
  margin-top: 50px;
  .mock-image {
    width: 100%;
    height: 600px;
    .how-it-works-image {
      width: 350px;
      margin-top: 30px;
    }
  }
  .title-size {
    font-size: 60px;
    color: #1e2f67;
    font-weight: 700;
  }
  .download-position {
    margin-top: 175px;
  }
  .text-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .section {
      .title-name {
        font-size: 25px;
        color: $color__site;
      }

      .text {
        font-family: $font__descriptions;
        font-size: 18px;
        color: #9597ac;
      }
      p,
      h3 {
        text-align: center;
      }
    }
    h2,
    h3.title {
      font-family: $font__family;
    }
    img {
      display: none;
      position: absolute;
    }
    .find {
      margin-bottom: 100px;

      .first-step {
        top: 270px;
        left: 145px;
      }
      &:hover {
        .first-step {
          display: block;
        }
      }
    }
    .plan {
      .second-step {
        left: 155px;
        top: 603px;
      }
      &:hover {
        .second-step {
          display: block;
        }
      }
    }
    .download {
      .third-step {
        top: 358px;
        right: 154px;
      }
      &:hover {
        .third-step {
          display: block;
        }
      }
    }
  }
}
</style>