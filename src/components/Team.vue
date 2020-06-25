<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>{{title}}</h2>
      </div>
    </div>
    <div class="row content">
      <div class="col-4" v-for="(person) of people" :key="person.name">
        <img :src="person['avatar-link']" class="person-avatar" />
        <h3 class="person-name">{{person.name}}</h3>
        <p class="person-place">{{person.place}}</p>
        <p class="person-description">{{person.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import team from "js-yaml-loader!../../content-manager/team.yaml";
export default {
  name: "CustomerReviews",
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
  font-family: $descriptions__fonts;
  font-size: 18px;
  color: #474a67;
  width: 75%;
  margin: 0 auto;
}

.container {
  margin-top: 230px;
}
.col-12 {
  font-family: $family__fonts;
  font-size: 40px;
  color: #1e2f67;
}
.person-name {
  font-family: $family__fonts;
  font-size: 25px;
  color: #1e2f67;
  margin-top: 60px;
}
.person-place {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  color: #9597ac;
}
</style>