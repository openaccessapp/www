<template>
  <div class="how-it-works">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="title title-size">{{title}}</h2>
        </div>
      </div>
      <div class="row content">
        <div class="col-md-4 col-xl-4 col-sm-12 col-12 text-section">
          <div class="section" v-if="sections[0]">
            <h3 class="title title-name">{{sections[0].title}}</h3>
            <p class="text">{{sections[0].text}}</p>
          </div>
        </div>
        <div class="col-md-4 col-xl-4 col-sm-12 col-12">
          <div class="mock-image">
            <!-- <iframe width="370" height="600" :src="videoLink" frameborder="0">{{videoLink}}</iframe> -->
            <img class="how-it-works-image" src="assets/how-it-works.png" />
          </div>
        </div>
        <div class="col-md-4 col-xl-4 col-sm-12 col-12 text-section">
          <div class="section" v-if="sections[1]">
            <h3 class="title title-name">{{sections[1].title}}</h3>
            <p class="text">{{sections[1].text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import howItWorks from "js-yaml-loader!../../content/how-it-works.yaml";
export default {
  name: "HowItWorks",
  data() {
    return {
      sections: "",
      title: "",
      text: "",
      videoLink: ""
    };
  },
  created() {
    this.title = howItWorks.title;
    this.text = howItWorks.text;
    this.sections = howItWorks.sections;
    this.videoLink = howItWorks["video-link"];
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";
.how-it-works {
  margin-top: 50px;
}
.section {
  p,
  h3 {
    text-align: left;
  }
}
h2,
h3.title {
  font-family: $font__family;
}

.title-size {
  font-size: 40px;
  color: #1e2f67;
}

.title-name {
  font-size: 25px;
  color: $color__site;
}

.how-it-works-image {
  width: 350px;
}

.text {
  font-family: $font__descriptions;
  font-size: 18px;
  color: #474a67;
}

.mock-image {
  width: 100%;
  height: 600px;
}

.text-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>