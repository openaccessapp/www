<template>
  <div>
    <Header></Header>
    <HowItWorks></HowItWorks>
    <CustomerReviews></CustomerReviews>
    <SafeAndHealthy></SafeAndHealthy>
    <Team></Team>
    <DownloadApp></DownloadApp>
    <Footer></Footer>
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content-manager/footer.yaml";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import CustomerReviews from "./CustomerReviews";
import SafeAndHealthy from "./SafeAndHealthy";
import Team from "./Team";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Header,
    HowItWorks,
    CustomerReviews,
    SafeAndHealthy,
    Team,
    DownloadApp,
    Footer
  },
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