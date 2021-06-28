<template>
  <div class="how-it-works container">
    <div class="row">
      <div class="col-12">
        <h2 class="title title-size">{{ title }}</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12 text-section">
        <div class="section" v-if="sections[0]">
          <div class="find">
            <h3 class="title title-name">{{ sections[0].title }}</h3>
            <p class="text">{{ sections[0].text }}</p>
            <img class="first-step" src="/assets/step1.svg" />
          </div>
        </div>
        <div class="section mt-5" v-if="sections[1]">
          <div class="plan">
            <h3 class="title title-name">{{ sections[1].title }}</h3>
            <p class="text">{{ sections[1].text }}</p>
            <img class="second-step" src="/assets/step2.svg" />
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12">
        <div class="mock-image">
          <img class="how-it-works-image" src="assets/how-it-works.png" />
        </div>
      </div>
      <div
        class="col-md-12 col-lg-4 col-xl-4 col-sm-12 col-12 text-section download-position"
      >
        <div class="section" v-if="sections[2]">
          <div class="download">
            <h3 class="title title-name">{{ sections[2].title }}</h3>
            <p class="text">{{ sections[2].text }}</p>
            <img class="third-step" src="/assets/step2.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import howItWorks from "@content/en/how-it-works.yaml";
import howItWorksDe from "@content/de/how-it-works.yaml";
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
    position: relative;
    width: 100%;
    height: 600px;
    z-index: 1;
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
      margin-right: 70px;
      user-select: none;
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
      margin-right: 70px;
      user-select: none;
      .second-step {
        left: 155px;
        top: 450px;
      }
      &:hover {
        .second-step {
          display: block;
        }
      }
    }
    .download {
      margin-left: 40px;
      user-select: none;
      .third-step {
        top: 258px;
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
@media only screen and (max-width: 415px) {
  .how-it-works {
    .text-section {
      .section {
        .title-name {
          font-size: 20px;
        }
        .text {
          font-size: 16px;
        }
      }
    }
    .title-size {
      font-size: 25px;
      margin-top: 3rem;
    }
  }
}
@media only screen and (max-width: 769px) {
  .how-it-works {
    .mock-image {
      display: none;
    }
    .download-position {
      margin-top: 50px;
    }
    .text-section {
      .text {
        margin: auto;
        width: fit-content;
        max-width: 280px;
      }
      .find {
        margin: auto;
        &:hover {
          .first-step {
            display: none;
          }
        }
      }
      .plan {
        margin: auto;
        &:hover {
          .second-step {
            display: none;
          }
        }
      }
      .download {
        margin: auto;
        margin-bottom: 4rem;
        &:hover {
          .third-step {
            display: none;
          }
        }
      }
    }
  }
}
</style>