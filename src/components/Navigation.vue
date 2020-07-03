<template>
  <div class="row nav justify-content-center">
    <div class="col-xl-6 col-md-6 col-xs-6 col-12 logo-position">
      <img src="assets/logo.png" />
    </div>
    <div class="col-xl-6 col-md-6 col-xs-6 col-12 nav-text-button">
      <div>
        <p class="medium-font">{{navigationText}}</p>
        <a :href="mobileApp">
          <button class="btn">{{buttonText}}</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    buttonText: String,
    navigationText: String,
    mobileApp: String
  }
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");
@import "../../public/assets/main.scss";
.nav {
  padding: 25px 0 50px;

  .logo-position {
    margin-top: 30px;
    text-align: left;
  }
  .nav-text-button {
    margin-top: 40px;
    font-family: $font__descriptions;
    > div {
      display: flex;
      justify-content: space-evenly;
      align-items: baseline;
    }
    button.btn {
      border: 10px;
      background: $color__site;
      color: white;
      box-shadow: 0px 5px 10px #385fe240;
      margin-left: 30px;
      padding: 10px 35px;
    }
  }
}

@media only screen and (max-width: 768px) {
  .nav {
    .logo-position {
      display: flex;
      justify-content: center;
    }

    .nav-text-button {
      >div {
        flex-direction: column;
        align-items: center;

        button.btn {
          margin-left: 0;
        }
      }
    }
  } 
}
</style>