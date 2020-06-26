<template>
  <div class="container-fluid">
    <div class="row container-links">
      <div class="col-3">
        <router-link to="/TermsAndConditions">Page Name</router-link>
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
    <div class="row container-links">
      <div class="col-3">
        <a :href="page5">Page Name</a>
      </div>
    </div>
    <img src="assets/logo-text.png" />
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content-manager/footer.yaml";
export default {
  name: "CustomerReviews",
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

.container-fluid {
  display: flex;
  place-items: flex-end;
  justify-content: center;

  width: 100%;
  padding: 0;
  height: 400px;
  background-color: $color__main;
}
</style>