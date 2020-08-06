<template>
  <div class="row nav justify-content-center">
    <div class="col-xl-6 col-md-6 col-xs-6 col-12 logo-position">
      <img src="/assets/logo-text.svg" />
    </div>
    <div class="col-xl-6 col-md-6 col-xs-6 col-12 nav-text-button">
      <div class="row">
        <p class="medium-font">{{navigationText}}</p>
        <a :href="mobileApp">
          <button class="btn">{{buttonText}}</button>
        </a>
        <div class="row languages">
          <router-link :to="getURL('de')">
            <button class="language">EN</button>
            <div v-if="currentPage ==='/en'" class="blue-line"></div>
          </router-link>
          <router-link :to="getURL('en')">
            <button class="language">DE</button>
            <div v-if="currentPage ==='/de'" class="blue-line"></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    currentPage() {
      return this.$route.path;
    },
  },
  methods: {
    getURL(prevLanguage) {
      return this.currentPage.replace(
        prevLanguage,
        prevLanguage == "en" ? "de" : "en"
      );
    },
  },
  props: {
    buttonText: String,
    navigationText: String,
    mobileApp: String,
  },
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
    img {
      width: 264px;
      height: 70px;
    }
  }
  .nav-text-button {
    margin-top: 40px;
    font-family: $font__descriptions;
    > div {
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      .language {
        background: none;
        border: none;
        color: #474a67;
        font: bold 15px $font__descriptions;
        outline: none;
        padding-right: 5px;
        padding-left: 5px;
      }
    }
    button.btn {
      border: 10px;
      background: $color__site;
      color: white;
      box-shadow: 0px 5px 10px #385fe240;
      margin-left: 30px;
      margin-right: 24px;
      padding: 10px 35px;
    }
  }
}
.blue-line {
  width: 23px;
  height: 1px;
  border: 2px solid #385fe2;
  border-radius: 10px;
  margin-top: 2.5px;
  margin-left: 4px;
}

@media only screen and (max-width: 769px) {
  .nav {
    .logo-position {
      display: flex;
      justify-content: center;
    }

    .nav-text-button {
      > div {
        flex-direction: column;
        align-items: center;

        button.btn {
          margin-left: 0;
        }
      }
      .languages {
        position: absolute;
        top: -75px;
        right: 25px;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .nav {
    .nav-text-button {
      button.btn {
        margin-left: 30px;
      }
    }
  }
}
</style>