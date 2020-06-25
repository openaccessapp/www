<template>
  <div class="container-fluid">
    <div class="mock-image">
      <img :src="imageLink" />
    </div>
    <div class="usage-description">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
import SafeAndHealthy from "js-yaml-loader!../../content-manager/safe-and-healthy.yaml";
export default {
  name: "SafeAndHealthy",
  data() {
    return {
      title: "",
      imageLink: "",
      description: ""
    };
  },
  mounted() {
    this.title = SafeAndHealthy.title;
    this.description = SafeAndHealthy.description;
    this.imageLink = SafeAndHealthy["image-link"];
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.container-fluid {
  display: flex;
  width: 100%;
  padding: 0;
}

.mock-image {
  width: 50%;
  height: 600px;
}
.usage-description {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-family: $family__fonts;
    font-size: 40px;
    color: #1e2f67;
    margin-bottom: 55px;
  }

  p {
    width: 50%;
    font-family: $descriptions__fonts;
    font-size: 18px;
    color: #474a67;
  }
}
</style>