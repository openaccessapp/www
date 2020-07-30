<template>
  <div class="row git-card">
    <div class="col-3">
      <img class="git-icon" :src="firstImage" />
      <img class="git-text" :src="secondImage" />
    </div>
    <div class="col-9">
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
import github from "js-yaml-loader!../../content/github.yaml";
export default {
  name: "Github",
  data() {
    return {
      text: "",
      firstImage: "",
      secondImage: "",
    };
  },
  created() {
    this.text = github.text;
    this.firstImage = github.firstImage;
    this.secondImage = github.secondImage;
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

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