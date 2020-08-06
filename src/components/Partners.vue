<template>
  <div class="container partners">
    <div class="row">
      <p class="header">{{text}}</p>
    </div>
    <div class="row">
      <div
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 partners-cards"
        v-for="partners in partners"
        :key="partners"
      >
        <img :src="partners.image" />
        <p class="title">{{partners.title}}</p>
        <p class="description">{{partners.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import partners from "js-yaml-loader!../../content/EN/partners.yaml";
import partnersDe from "js-yaml-loader!../../content/DE/partners.yaml";
export default {
  name: "Partners",
  data() {
    return {
      text: "",
      partners: [],
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
          ? partners
          : partnersDe;
      this.text = data["text"];
      this.partners = data["partners"];
    },
  },
};
</script>
<style lang="scss">
@import "../../public/assets/main.scss";
.partners {
  .row {
    align-items: center;
    justify-content: center;
    .header {
      font-family: $font__family;
      font-size: 40px;
      color: #1e2f67;
      text-align: center;
      margin-bottom: 180px;
    }
    .partners-cards {
      margin-bottom: 80px;
      img {
        width: 135px;
      }
      .title {
        display: none;
        color: #385fe2;
        font-family: $font__family;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 5px;
      }
      .description {
        display: none;
        color: #474a67;
        font-family: $font__descriptions;
        font-weight: 400px;
        font-size: 15px;
        text-align: center;
      }
    }
    .partners-cards:hover {
      padding: 20px 10px 80px;
      box-shadow: 6px 10px 35px #1e2f671a;
      border-radius: 30px;
      .description,
      .title {
        display: flex;
        justify-content: center;
        max-height: 70px;
        overflow: hidden;
      }
    }
  }
}
</style>