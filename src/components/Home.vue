<template>
  <div>
    <Header></Header>
    <Github></Github>
    <HowItWorks></HowItWorks>
    <CustomerReviews></CustomerReviews>
    <SafeAndHealthy></SafeAndHealthy>
    <Team></Team>
    <Partners></Partners>
    <DownloadApp></DownloadApp>
    <Footer></Footer>
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content/footer.yaml";
import Header from "./Header";
import Github from "./Github";
import HowItWorks from "./HowItWorks";
import CustomerReviews from "./CustomerReviews";
import SafeAndHealthy from "./SafeAndHealthy";
import Team from "./Team";
import Partners from "./Partners";
import DownloadApp from "./DownloadApp";
import Footer from "./Footer";
export default {
  name: "Home",
  components: {
    Header,
    Github,
    HowItWorks,
    CustomerReviews,
    SafeAndHealthy,
    Team,
    Partners,
    DownloadApp,
    Footer,
  },
  data() {
    return {
      page1: "",
      page2: "",
      page3: "",
      page4: "",
      page5: "",
    };
  },
  mounted() {
    this.page1 = footer["page-1"];
    this.page2 = footer["page-2"];
    this.page3 = footer["page-3"];
    this.page4 = footer["page-4"];
    this.page5 = footer["page-5"];
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.container-fluid {
  display: flex;
  place-items: center;
  justify-content: center;

  width: 100%;
  padding: 0;
  height: 400px;
}
</style>