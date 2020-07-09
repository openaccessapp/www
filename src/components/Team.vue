<template>
  <div class="team">
    <figure-circle color="#F7F7FA" :zIndex="0" :left="-200" :isFilled="false" :bottom="0"></figure-circle>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>{{title}}</h2>
        </div>
      </div>
      <div class="row content">
        <div
          class="col-xl-4 col-md-4 col-xs-4 col-12"
          v-for="(person) of people"
          :key="person.name"
        >
          <img :src="person['avatar-link']" class="person-avatar" />
          <h3 class="person-name">{{person.name}}</h3>
          <p class="person-place">{{person.place}}</p>
          <p class="person-description">{{person.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import team from "js-yaml-loader!../../content/team.yaml";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "CustomerReviews",
  components: {
    FigureCircle
  },
  data() {
    return {
      title: "",
      people: [],
      place: ""
    };
  },
  mounted() {
    this.title = team.title;
    this.people = team.people;
    this.place = team.place;
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");
@import "../../public/assets/main.scss";
.person-description {
  font-family: $font__descriptions;
  font-size: 18px;
  color: #474a67;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 60px;
}

.team {
  position: relative;
  .container {
    margin-top: 100px;
  }
}
.col-12 {
  font-family: $font__family;
  font-size: 40px;
  color: #1e2f67;
}
.person-name {
  font-family: $font__family;
  font-size: 25px;
  color: #1e2f67;
  margin-top: 60px;
}
.person-place {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  color: #9597ac;
}

@media only screen and (max-width: 768px) {
  .person-avatar {
    margin-top: 50px;
    max-width: 140px;
    max-height: 140px;
  }
  .team .content {
    margin-top: 0;
  }
}
</style>