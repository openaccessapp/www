<template>
  <div class="customer-reviews">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill="white" points="0,0 0,100 100,0" />
    </svg>
    <div class="center">
      <div class="container">
        <figure-circle
          color="#F7F7FA"
          :zIndex="0"
          :left="-600"
          :isFilled="false"
          :top="150"
        ></figure-circle>
        <figure-circle
          color="#F7F7FA"
          :zIndex="0"
          :right="-650"
          :isFilled="false"
          :top="100"
        ></figure-circle>
        <carousel :perPage="1">
          <slide v-for="customer of reviews" :key="customer.name">
            <div class="col-12">
          <h2 class="title">{{ title }}</h2>
        </div>
            <img :src="customer['avatar-link']" class="person-avatar" />
            <p class="bold">{{ customer.name }}</p>
            <p class="position-style">{{ customer.position }}</p>
            <h4 class="person-description-style">"{{ customer.review }}"</h4>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import customerReviews from "@content/en/customer-reviews.yaml";
import customerReviewsDe from "@content/de/customer-reviews.yaml";
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
@import "../../public/assets/scss/main.scss";

.customer-reviews {
  background-color: #6C8CF6;
  position: relative;
  height: 35rem;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 12vw;
    /* set height to pixels if you want angle to change with screen width */
  }
}
.center {
  margin-top: 300px;
}
.container {
  position: relative;
  z-index: 10;
  border-radius: 25px;
  width: 55%;
  padding-top: 40px;
  padding-bottom: 35px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 2px );
  border-radius: 40px;
}
.title {
  font-family: $font__family;
  font-size: 40px;
  color: #1E2F67;
}
.position-style {
  font-family: $font__descriptions;
  font-weight: 500;
  font-size: 16px;
  color: #1E2F67;
  margin-bottom: 25px;
}
.person-description-style {
  font-family: $font__descriptions;
  font-weight: 500;
  font-size: 20px;
  color: #1E2F67;
  width: 50%;
  margin: auto;
}
.bold {
  margin-top: 25px;
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: #1E2F67;
  margin-bottom: 8px;
}
@media only screen and (max-width: 415px) {
  .customer-reviews {
    margin-top: 20px;
    .container {
      padding-top: 0;
      height: 315px;
    }
    svg {
      height: 50vw;
    }
    .center {
      margin-top: 115px;
      .title {
        font-size: 25px;
      }
    }
    .person-avatar {
      width: 60px;
      height: 60px;
      margin-top: 30px;
    }
    .position-style {
      font-size: 10px;
    }
    .person-description-style {
      font-size: 14px;
    }
  }
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