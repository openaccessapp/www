<template>
  <div class="row git-card">
    <div class="col-xl-3 col-lg-6 col-md-12 col-sm-12 col-12">
      <img class="git-icon" :src="firstImage" />
      <img class="git-text" :src="secondImage" />
    </div>
    <div class="col-xl-9 col-lg-6 col-md-12 col-sm-12 col-12">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
import github from "../../content/access/EN/github.yaml";
import githubDe from "../../content/access/DE/github.yaml";
export default {
  name: "Github",
  data() {
    return {
      text: "",
      firstImage: "",
      secondImage: "",
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
      let data =
        this.$router.history.current.params.lang == "en" ? github : githubDe;
      this.text = data.text;
      this.firstImage = data["first-image"];
      this.secondImage = data["second-image"];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";

.git-card {
  margin: 20px auto 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 6px 35px #1e2f671a;
  border-radius: 30px;
  width: 60%;
  padding: 30px;
}
.git-icon {
  max-width: 100px;
  max-height: 100px;
  padding: auto;
}
.git-text {
  width: 170px;
}
p {
  line-height: 30px;
  font-weight: 400;
  text-align: left;
  font-family: $font__descriptions;
  font-size: 18px;
  color: #474a67;
  opacity: 1;
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