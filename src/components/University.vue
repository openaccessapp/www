<template>
  <div class="row">
    <img class="col-xl-6 col-sm-12" src="assets/city-university.png" />
    <p>{{text}}</p>
  </div>
</template>

<script>
import university from "js-yaml-loader!../../content/university.yaml";
export default {
  name: "University",
  data() {
    return {
      text: ""
    };
  },
  created() {
    this.text = university.text;
  }
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.row {
  margin: 90px 0 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  max-width: 250px;
  max-height: 350px;
}
p {
  font-family: $font__descriptions;
  line-height: 30px;
  font-weight: 400;
  font-size: 18px;
  color: #474a67;
  margin-left: 50px;
  max-width: 450px;
  text-align: left;
}

@media only screen and (max-width: 414px) {
  p {
    width: 100% !important;
    padding: 0 15px !important;
    margin-left: 0;
    margin-top: 50px;
  }
}
@media only screen and (max-width: 320px) {
  img {
    margin-top: 200px;
  }
  p {
    width: 100% !important;
    padding: 0 15px !important;
    margin-left: 0;
    margin-top: 50px;
  }
}
</style>