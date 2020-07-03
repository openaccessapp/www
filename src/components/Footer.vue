<template>
  <div class="footer container">
    <figure-circle
      color="#385FE2"
      :zIndex="0"
      :right="-270"
      :isFilled="false"
      :bottom="0"
      customClass="custom-circle"
    ></figure-circle>
    <figure-circle color="#DDFFF7" :zIndex="0" :left="-280" :isFilled="true" :bottom="0"></figure-circle>

    <div class="row container-links">
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <router-link to="/terms">
          <p>Terms and Conditions</p>
        </router-link>
      </div>
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <a :href="page1">
          <p>Page Name</p>
        </a>
      </div>
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <a :href="page1">
          <p>Page Name</p>
        </a>
      </div>
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <a :href="page1">
          <p>Page Name</p>
        </a>
      </div>
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <router-link to="/terms">
          <p>Terms and Conditions</p>
        </router-link>
      </div>
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <a :href="page1">
          <p>Page Name</p>
        </a>
      </div>
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <a :href="page1">
          <p>Page Name</p>
        </a>
      </div>
      <div class="col-xl-3 col-md-3 col-sm-3 col-6">
        <a :href="page1">
          <p>Page Name</p>
        </a>
      </div>
    </div>
    <img src="assets/logo-text.png" />
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content/footer.yaml";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "CustomerReviews",
  components: { FigureCircle },
  data() {
    return {
      page1: "",
      page2: "",
      page3: "",
      page4: "",
      page5: ""
    };
  },
  mounted() {
    this.page1 = footer["page-1"];
    this.page2 = footer["page-2"];
    this.page3 = footer["page-3"];
    this.page4 = footer["page-4"];
    this.page5 = footer["page-5"];
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.footer.container {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  width: 100%;
  padding: 0;
  height: 400px;
  background: none;
  p {
    font-size: 16px;
    color: black;
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
}
</style>