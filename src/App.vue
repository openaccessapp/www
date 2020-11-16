<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (!this.$router.history.current.params.lang) {
      this.$router.push("en");
    }
  },
  methods: {
    setFavicon() {
      const favicon = document.getElementById("favicon");
      if (process.env.VUE_APP_SITE === "access") {
        favicon.href = "favicons/access/favicon.svg";
        return favicon;
      } else if (process.env.VUE_APP_SITE === "places") {
        favicon.href = "favicons/places/favicon.svg";
        return favicon;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../public/assets/scss/main.scss";
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
@media only screen and (max-width: 1365px) {
  #app {
    overflow-x: hidden;
  }
}
</style>
