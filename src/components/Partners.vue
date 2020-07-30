<template>
  <div class="partners">
    <div class="row">
      <p class="header">{{text}}</p>
    </div>
    <div class="row">
      <div class="col-3">
        <img class="aux" :src="firstImage" />
      </div>
      <div class="col-3">
        <img class="city" :src="secondImage" />
      </div>
      <div class="col-3">
        <img class="aux" :src="firstImage" />
      </div>
      <div class="col-3">
        <img class="city" :src="secondImage" />
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <img class="aux" :src="firstImage" />
      </div>
      <div class="col-3">
        <img class="city" :src="secondImage" />
      </div>
      <div class="col-3">
        <img class="aux" :src="firstImage" />
      </div>
      <div class="col-3">
        <img class="city" :src="secondImage" />
      </div>
    </div>
  </div>
</template>
<script>
import partners from "js-yaml-loader!../../content/partners.yaml";
export default {
  name: "Partners",
  data() {
    return {
      text: "",
      firstImage: "",
      secondImage: "",
    };
  },
  created() {
    this.text = partners.text;
    this.firstImage = partners.firstImage;
    this.secondImage = partners.secondImage;
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
      text-align: left;
      margin-bottom: 180px;
    }
    .col-3 {
      margin-bottom: 400px;
      .aux {
        width: 180px;
        height: 80px;
      }
      .city {
        width: 135px;
        height: 185px;
      }
    }
  }
}
</style>