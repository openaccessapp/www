<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{description}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import DownloadApp from "js-yaml-loader!../../content-manager/download-app.yaml";
export default {
  name: "DownloadApp",
  data() {
    return {
      description: ""
    };
  },
  mounted() {
    this.description = DownloadApp.description;
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";
</style>