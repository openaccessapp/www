<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="title titleSize">{{title}}</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col-4 text-section">
        <div class="section">
          <h3 class="title titleName">{{sections[0].title}}</h3>
          <p class="text">{{sections[0].text}}</p>
        </div>
        <div class="section mt-5">
          <h3 class="title titleName">{{sections[1].title}}</h3>
          <p class="text">{{sections[1].text}}</p>
        </div>
      </div>
      <div class="col-4">
        <div class="mock-image">
          <!-- <iframe width="370" height="600" :src="videoLink" frameborder="0">{{videoLink}}</iframe> -->
          <img class="howItWorksImage" src="assets/how-it-works.png" />
        </div>
      </div>
      <div class="col-4 text-section">
        <div class="section">
          <h3 class="title titleName">{{sections[2].title}}</h3>
          <p class="text">{{sections[2].text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import howItWorks from "js-yaml-loader!../../content-manager/how-it-works.yaml";
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
  mounted() {
    this.title = howItWorks.title;
    this.text = howItWorks.text;
    this.sections = howItWorks.sections;
    this.videoLink = howItWorks["video-link"];
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";
.section {
  p,
  h3 {
    text-align: left;
  }
}
h2,
h3.title {
  font-family: $family__fonts;
}

.titleSize {
  font-size: 40px;
  color: #1e2f67;
}

.titleName {
  font-size: 25px;
  color: $color__site;
}

.howItWorksImage {
  width: 350px;
}

.text {
  font-family: $descriptions__fonts;
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