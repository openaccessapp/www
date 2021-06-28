<template>
  <div class="safe-healthy">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-6 col-md-6 col-xs-6 col-12">
          <div class="mock-image">
            <img class="position" :src="imageLink" />
          </div>
        </div>
        <div class="col-xl-6 col-md-6 col-xs-6 col-12">
          <div class="usage-description">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SafeAndHealthy from "@content/en/safe-and-healthy.yaml";
import SafeAndHealthyDe from "@content/de/safe-and-healthy.yaml";
export default {
  name: "SafeAndHealthy",
  data() {
    return {
      title: "",
      imageLink: "",
      description: "",
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
          ? SafeAndHealthy
          : SafeAndHealthyDe;
      this.title = data.title;
      this.description = data.description;
      this.imageLink = data["image-link"];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";

.safe-healthy {
  margin-bottom: 245px;
  margin-top: 260px;
  .container-fluid {
    display: flex;
    width: 100%;
    padding: 0;
    height: auto;
  }
  .row {
    align-items: center;
  }
  .usage-description {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    h3 {
      font-family: $font__family;
      font-size: 40px;
      color: #1e2f67;
      margin-bottom: 55px;
      max-width: 500px;
    }

    p {
      width: 445px;
      font-family: $font__descriptions;
      font-size: 18px;
      color: #9597ac;
    }
  }
  img.position {
    width: 110%;
  }
}

@media only screen and (max-width: 415px) {
  .usage-description {
    h3 {
      width: 250px;
      margin: auto;
    }
    p{
      width: 250px! important;
      margin: auto;
    }
  }
}
@media only screen and (max-width: 769px) {
  .safe-healthy {
    margin-top: 100px;
    .container-fluid {
      display: block;
      .row{
        display: flex;
        flex-direction: column;
      }
    }
    img.position {
      width: 120%;
      margin-bottom: 50px;
    }
  }
}
</style>