<template>
  <div class="row nav justify-content-center">
    <div class="col-xl-6 col-md-6 col-xs-6 col-12 logo-position">
      <div class="row">
        <div class="logo">
          <router-link :to="`/${$router.history.current.params.lang}`">
            <img :src="image" />
          </router-link>
          <span>an Open Social Innovation Project</span>
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
    image: String,
    places: String,
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
    margin-left: 0px;
    margin-right: auto;
    .logo{
    display: flex;
    flex-direction: column;
      span{
        margin-top: 10px;
      }
    }
    .row {
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
        padding-right: 9px;
        padding-left: 9px;
        margin-top: 35px;
        opacity: 0.6 !important;
      }
      .opacity {
        opacity: 1 !important;
      }
    }
  }
}
.blue-line-en {
  width: 60px;
  height: 1px;
  border-bottom: 5px solid #385fe2;
  border-radius: 10px;
  margin-left: 6px;
}
.blue-line-de {
  width: 70px;
  height: 1px;
  border-bottom: 5px solid #385fe2;
  border-radius: 10px;
  margin-left: 5px;
}
@media only screen and (max-width: 415px) {
  .nav {
    .logo-position {
      .row {
        img {
          width: 105px;
          height: 30px;
          margin-right: 40px;
          margin-left: 40px;
        }
      }
    }
    .logo{
      span{
        margin-left: 16%;
      }
    }
  }
}
@media only screen and (max-width: 769px) {
  .nav {
    .languages {
      position: absolute;
      top: -75px;
      right: 25px;
    }

    .nav-text-button {
      display: none;
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