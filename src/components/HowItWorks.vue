<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{title}}</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col-4 text-section">
        <div class="section">
          <h3>{{sections[0].title}}</h3>
          <p>
            {{sections[0].text}}
          </p>
        </div>
        <div class="section mt-5">
          <h3>{{sections[1].title}}</h3>
          <p>
            {{sections[1].text}}
          </p>
        </div>
      </div>
      <div class="col-4">
        <div class="mock-image">
          <!-- <iframe
            width="862"
            height="485"
            src="https://www.youtube.com/embed/JlJPe5qryDQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> -->
          <!-- <iframe width="862" height="485" :src="urlToVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          <!-- TODO (Milen) -->
        </div>
      </div>
      <div class="col-4 text-section">
        <div class="section">
          <h3>{{sections[2].title}}</h3>
          <p>
            {{sections[2].text}}
          </p>
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
    this.sections = howItWorks.sections;
    // TODO (Milen)
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";
.section {
  p,
  h3 {
    text-align: left;
  }
}

.mock-image {
  width: 100%;
  height: 600px;
  background-color: $color__main;
}

.text-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>