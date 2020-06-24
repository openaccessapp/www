<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
          <h2>Team</h2>
      </div>
    </div>
    <!-- V-for for team members TODO (Milen) -->
    <div class="row content">
      <div class="col-4" v-for="(person) of people" :key="person.name">
        <img :src="person['avatar-link']" />
        <h3>{{person.name}}</h3>
        <p>
          {{person.description}}
        </p>
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
      title: '',
      people: []
    }
  },
  mounted() {
    console.log(team)
    this.title = team.title;
    this.people = team.people
  }
};
</script>

<style scoped lang="scss">
@import "../assets/main.scss";

</style>