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
            <h3>{{title}}</h3>
            <p>{{description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SafeAndHealthy from "@content/EN/safe-and-healthy.yaml";
import SafeAndHealthyDe from "@content/DE/safe-and-healthy.yaml";
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
    justify-content: center;
    align-items: center;
    h3 {
      font-family: $font__family;
      font-size: 40px;
      color: #1e2f67;
      margin-bottom: 55px;
    }

    p {
      width: 445px;
      font-family: $font__descriptions;
      font-size: 18px;
      color: #9597ac;
    }
  }
  img.position {
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .usage-description {
    margin-top: 50px;
  }
  .safe-healthy {
    .container-fluid {
      display: block;
      width: auto;
      padding: 0 15px 0 0;
      height: auto;
    }
  }
}
</style>