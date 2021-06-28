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
    <dir class="update-deutschland">
      <img class="update-deutschland-image" src="assets/Logo_UpdateDeutschland.svg" />
      <p>Open Access App is participating in the 48-hours Sprint of Update Deutschland on 19-21 March <br> <a href="https://openaccess.app/en/documentation/80-update-deutschland">read more here</a></p>
    </dir>
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
  padding: 0 20px 50px;
  .update-deutschland {
    position: relative;
    display: flex;
    .update-deutschland-image{
      width: 130px;
    }
    p{
      margin-top: 0.6rem;
      margin-left: 20px;
      width: 360px;
      text-align: left;
      font-size: 15px;
      a{
        color: #385fe2;
      }
    }
  }
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
        color: #4561BF;
      }
    }
    .row {
      img {
        height: 70px;
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
          margin-left: 40px;
        }
      }
    }
    .logo{
      span{
        margin-left: 16%;
      }
    }
    .update-deutschland {
      display: flex;
      flex-direction: column;
      margin-top: 5rem;
      img{
        margin: auto;
      }
      p{
        margin-top: 1rem;
        width: auto;
        margin: auto;
        a{
          color: #385fe2;
        }
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
    .logo-position {
      .row {
        img {
          width: 105px;
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
</style>