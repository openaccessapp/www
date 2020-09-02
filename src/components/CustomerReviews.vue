<template>
  <div class="customer-reviews">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,0 0,100 100,0" />
    </svg>
    <div class="center">
      <div class="row">
        <div class="col-12">
          <h2 class="title">{{title}}</h2>
        </div>
      </div>
      <div class="container">
        <figure-circle color="#F7F7FA" :zIndex="0" :left="-400" :isFilled="false" :top="250"></figure-circle>
        <figure-circle color="#F7F7FA" :zIndex="0" :right="-300" :isFilled="false" :top="500"></figure-circle>
        <carousel :perPage="1">
          <slide v-for="(customer) of reviews" :key="customer.name">
            <img :src="customer['avatar-link']" class="person-avatar" />
            <p class="bold">{{customer.name}}</p>
            <p class="position-style">{{customer.position}}</p>
            <h4 class="person-description-style">{{customer.review}}</h4>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import customerReviews from "js-yaml-loader!../../content/EN/customer-reviews.yaml";
import customerReviewsDe from "js-yaml-loader!../../content/DE/customer-reviews.yaml";
import { Carousel, Slide } from "vue-carousel";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "CustomerReviews",
  components: {
    Carousel,
    Slide,
    FigureCircle,
  },
  data() {
    return {
      title: "",
      reviews: [],
      revies: "",
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const data =
        this.$router.history.current.params.lang == "en"
          ? customerReviews
          : customerReviewsDe;
      this.title = data["title"];
      this.reviews = data["reviews"];
    },
  },
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
    height: 30vw;
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
.center {
  margin-top: 300px;
}
.container {
  z-index: 1;
  background-color: white;
  border-radius: 25px;
  width: 55%;
  padding-top: 40px;
  padding-bottom: 35px;
  margin-top: 0;
}
.title {
  font-family: $font__family;
  font-size: 40px;
  color: #f7f7fa;
  // margin-top: 150px;
}
.position-style {
  font-family: $font__descriptions;
  font-weight: 500;
  font-size: 16px;
  color: #9597ac;
  margin-bottom: 25px;
}
.person-description-style {
  font-family: $font__descriptions;
  font-weight: 500;
  font-size: 20px;
  color: #9597ac;
  width: 50%;
  margin: auto;
}
.bold {
  margin-top: 25px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #385fe2;
  margin-bottom: 8px;
}

@media only screen and (max-width: 768px) {
  .person-description-style {
    width: 90%;
  }
}

@media only screen and (max-width: 1365px) {
  .customer-reviews {
    overflow: hidden;
  }
}
</style>