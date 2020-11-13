<template>
  <div>
    <Header :lang="lang"></Header>
    <HowItWorks></HowItWorks>
    <CustomerReviews></CustomerReviews>
    <SafeAndHealthy></SafeAndHealthy>
    <Team></Team>
    <Partners></Partners>
    <DownloadApp></DownloadApp>
    <Footer :lang="lang"></Footer>
  </div>
</template>

<script>
import footer from "@content/EN/footer.yaml";
import footerDe from "@content/DE/footer.yaml";
import Header from "./Header";
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
      lang: "",
    };
  },
  mounted() {
    const data =
      this.$router.history.current.params.lang == "en" ? footer : footerDe;
    this.page1 = data["page-1"];
    this.page2 = data["page-2"];
    this.page3 = data["page-3"];
    this.page4 = data["page-4"];
    this.page5 = data["page-5"];
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";

.container-fluid {
  display: flex;
  place-items: center;
  justify-content: center;

  width: 100%;
  padding: 0;
  height: 400px;
}
</style>