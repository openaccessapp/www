<template>
  <div class="footer container-fluid">
    <figure-circle color="#385FE2" :zIndex="0" :right="-380" :isFilled="false" :bottom="-250"></figure-circle>
    <div class="row container-links">
      <div class="col-3">
        <router-link to="/terms">Terms and Conditions</router-link>
      </div>
      <div class="col-3">
        <a :href="page1">Page Name</a>
      </div>
      <div class="col-3">
        <a :href="page1">Page Name</a>
      </div>
      <div class="col-3">
        <a :href="page1">Page Name</a>
      </div>
    </div>
    <img src="assets/logo-text.png" />
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content-manager/footer.yaml";
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

.footer.container-fluid {
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  padding: 0;
  height: 400px;
  background: none;
}
</style>