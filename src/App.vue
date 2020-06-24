<template>
  <div id="app">
    <Header></Header>
    <HowItWorks></HowItWorks>
    <CustomerReviews></CustomerReviews>
    <HowToUse></HowToUse>
    <Team></Team>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import HowItWorks from "./components/HowItWorks";
import CustomerReviews from "./components/CustomerReviews";
import HowToUse from "./components/HowToUse";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    HowItWorks,
    CustomerReviews,
    HowToUse,
    Team,
    Footer
  }
};
</script>

<style lang="scss">
@import "../public/assets/main.scss";
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.example-var {
  color: $color__button;
}
</style>
