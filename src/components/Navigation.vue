<template>
  <div class="row nav justify-content-center">
    <div class="col-xl-6 col-md-6 col-xs-6 col-12 logo-position">
      <div class="row">
        <img :src="image" />
        <router-link :to="getURL('de')">
          <button class="language" :class="{'opacity' : currentPage ==='/en'}">English</button>
          <div v-if="currentPage ==='/en'" class="blue-line"></div>
        </router-link>
        <router-link :to="getURL('en')">
          <button class="language" :class="{'opacity' : currentPage ==='/de'}">Deutsch</button>
          <div v-if="currentPage ==='/de'" class="blue-line"></div>
        </router-link>
      </div>
    </div>
    <div class="col-xl-6 col-md-6 col-xs-6 col-12 nav-text-button">
      <div class="row">
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
    image: String,
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap");
@import "../../public/assets/scss/main.scss";
.nav {
  padding: 0 0 50px;
  .logo-position {
    margin-top: 30px;
    text-align: left;
    .row {
      // align-items: center;
      img {
        width: 264px;
        height: 70px;
        margin-right: 30px;
      }
      .language {
        background: none;
        border: none;
        color: #474a67;
        font: bold 15px $font__descriptions;
        outline: none;
        padding-right: 5px;
        padding-left: 5px;
        margin-top: 35px;
        opacity: 0.6 !important;
      }
      .opacity {
        opacity: 1 !important;
      }
    }
  }
  .nav-text-button {
    margin-top: 40px;
    font-family: $font__descriptions;
    > div {
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
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
    .medium-font {
      color: #1e2f67;
      font-size: 16px;
      font-family: $font__descriptions;
    }
  }
}
.blue-line {
  width: 60px;
  height: 1px;
  border-bottom: 5px solid #385fe2;
  border-radius: 10px;
  margin-left: 4px;
}

@media only screen and (max-width: 769px) {
  .nav {
    .logo-position {
      display: flex;
      justify-content: center;
    }
    .languages {
      position: absolute;
      top: -75px;
      right: 25px;
    }

    .nav-text-button {
      > div {
        flex-direction: column;
        align-items: center;
        button.btn {
          margin-left: 0;
        }
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