<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{title}}</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col-4" v-for="(customer) of reviews" :key="customer">
        <img :src="customer.avatarLink" />
        <p class="bold">{{customer.name}}</p>
        <p>{{customer.place}}</p>
        <h4 class="person-description">{{customer.review}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import customerReviews from "js-yaml-loader!../../content-manager/customer-reviews.yaml";
export default {
  name: "CustomerReviews",
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
@import "../assets/main.scss";
.bold {
  font-weight: bold;
}
.person-description {
  width: 50%;
  margin: auto;
}
</style>