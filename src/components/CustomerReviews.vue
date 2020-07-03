<template>
  <div class="customer-reviews">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,0 0,100 100,0" />
    </svg>
    <div class="container">
      <figure-circle color="#F7F7FA" :zIndex="0" :left="-400" :isFilled="false" :top="250"></figure-circle>
      <figure-circle color="#F7F7FA" :zIndex="0" :right="-300" :isFilled="false" :top="500"></figure-circle>
      <div class="row">
        <div class="col-12">
          <h2 class="title">{{title}}</h2>
        </div>
      </div>
      <carousel :perPage="1" class="content">
        <slide v-for="(customer) of reviews" :key="customer.name">
          <img :src="customer['avatar-link']" class="person-avatar" />
          <p class="bold">{{customer.name}}</p>
          <p class="place-style">{{customer.place}}</p>
          <h4 class="person-description-style">{{customer.review}}</h4>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import customerReviews from "js-yaml-loader!../../content/customer-reviews.yaml";
import { Carousel, Slide } from "vue-carousel";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "CustomerReviews",
  components: {
    Carousel,
    Slide,
    FigureCircle
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

.customer-reviews {
  background-color: $color__site;
  position: relative;
  padding: 50px 0;
  height: auto;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vw;
    /* set height to pixels if you want angle to change with screen width */
  }
}
.figures {
  position: absolute;
  .triangle {
    position: absolute;
    border-bottom: 1000px solid $color__site;
    border-left: 100vw solid transparent;
    position: absolute;
    width: 0;
    height: 0;
  }
  .rect {
    position: absolute;
    width: 100vw;
    height: 200px;
    background: $color__site;
  }
}

.container {
  z-index: 1;
}
.title {
  font-family: $font__family;
  font-size: 40px;
  color: #f7f7fa;
}
.place-style {
  font-family: $font__descriptions;
  font-size: 16px;
  color: #f7f7fa;
}
.person-description-style {
  font-family: $font__descriptions;
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

@media only screen and (max-width: 768px) {
  .person-description-style {
    width: 90%;
  }
}
</style>