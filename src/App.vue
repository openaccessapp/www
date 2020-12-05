<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import contentTree from './_content.json'
export default {
  name: "App",
  mounted() {
    if (!this.$router.history.current.params.lang) {
      this.$router.push("en");
    }
    let lang = 'en';
    let docContent = contentTree.children.find(c => c.name === lang)
    docContent.children.forEach(page => {
      
      import(`@content/en/${page.path}.md`)
        .then(body => {
          console.log('The page object can be used to generate routes, build navigations, and more...')
          console.log(page)
          console.log('The body string can be rendered when needed...')
          console.log(body)
        })
        .catch(error => console.error(error))
    })
  }
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
