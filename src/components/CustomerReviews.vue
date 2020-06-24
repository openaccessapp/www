<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{title}}</h2>
      </div>
    </div>
    <carousel perPage="1" class="content">
      <slide v-for="(customer) of reviews" :key="customer">
        <img :src="customer['avatar-link']" class="person-avatar" />
        <p class="bold">{{customer.name}}</p>
        <p>{{customer.place}}</p>
        <h4 class="person-description">{{customer.review}}</h4>
      </slide>
    </carousel>
  </div>
</template>

<script>
import customerReviews from "js-yaml-loader!../../content-manager/customer-reviews.yaml";
import { Carousel, Slide } from 'vue-carousel';
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
.bold {
  font-weight: bold;
}
.person-description {
  width: 50%;
  margin: auto;
}
</style>