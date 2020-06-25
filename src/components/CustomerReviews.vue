<template>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="title">{{title}}</h2>
        </div>
      </div>
      <carousel perPage="1" class="content">
        <slide v-for="(customer) of reviews" :key="customer">
          <img :src="customer['avatar-link']" class="person-avatar" />
          <p class="bold">{{customer.name}}</p>
          <p class="placeStyle">{{customer.place}}</p>
          <h4 class="person-description-style">{{customer.review}}</h4>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import customerReviews from "js-yaml-loader!../../content-manager/customer-reviews.yaml";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "CustomerReviews",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      title: "",
      reviews: [],
      revies: ""
    };
  },
  mounted() {
    this.title = customerReviews.title;
    this.reviews = customerReviews.reviews;
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap");
.background {
  background-color: #385fe2;
}
.title {
  font-family: $family__fonts;
  font-size: 40px;
  margin-top: 360px;
  color: #f7f7fa;
}
.placeStyle {
  font-family: $descriptions__fonts;
  font-size: 16px;
  color: #f7f7fa;
}
.person-description-style {
  font-family: $descriptions__fonts;
  font-size: 20px;
  color: #f7f7fa;
  width: 50%;
  margin: auto;
}
.bold {
  font-family: "Rubik", sans-serif;
  font-size: 18px;
  color: #f7f7fa;
}
</style>