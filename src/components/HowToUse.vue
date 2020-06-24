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
import howToUse from "js-yaml-loader!../../content-manager/how-to-use.yaml";
export default {
  name: "CustomerReviews",
  data() {
    return {
      title: "",
      imageLink: "",
      description: ""
    };
  },
  mounted() {
    this.title = howToUse.title;
    this.description = howToUse.description;
    this.imageLink = howToUse["image-link"];
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
  background-color: $color__main;
}
.usage-description {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    width: 50%;
  }
}
</style>