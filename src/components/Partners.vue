<template>
  <div class="partners container">
    <div class="row title">
      <p class="header">{{ text }}</p>
    </div>
    <div class="row information">
      <div
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 partners-cards"
        v-for="partners in partners"
        :key="partners.title"
      >
        <div class="partners-content">
          <img class="logo" :src="partners.image" />
          <p class="title">{{ partners.title }}</p>
          <p class="description">{{ partners.description }}</p>
          <div class="lines" />
          <div class="contacts">
            <div class="center">
              <p class="name">{{ partners.name }}</p>
              <div class="row">
                <img :src="partners['email-image']" />
                <p>{{ partners.email }}</p>
              </div>
              <div class="row">
                <img :src="partners['number-image']" />
                <p>{{ partners.number }}</p>
              </div>
              <div class="row">
                <img :src="partners['twitter-image']" />
                <p>{{ partners.twitter }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import partners from "@content/en/partners.yaml";
import partnersDe from "@content/de/partners.yaml";
export default {
  name: "Partners",
  data() {
    return {
      text: "",
      partners: [],
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
      const data =
        this.$router.history.current.params.lang == "en"
          ? partners
          : partnersDe;
      this.text = data["text"];
      this.partners = data["partners"];
    },
  },
};
</script>
<style lang="scss">
@import "../../public/assets/scss/main.scss";
.partners {
  width: 1300px;
  margin: 0 auto;
  .header {
    font-family: $font__family;
    font-size: 40px;
    color: #1e2f67;
    text-align: center;
    margin: 280px auto 85px;
    align-items: center;
  }

  .row.information {
    align-items: center;
    // align-items: baseline;
    justify-content: center;
    height: 890px;

    .partners-cards {
      justify-content: center;
      display: flex;
      flex-direction: column;

      .logo {
        width: 135px;
      }
      .title {
        display: none;
        color: #385fe2;
        font-family: $font__family;
        font-size: 20px;
        justify-content: center;
      }
      .description {
        display: none;
        color: #9597ac;
        font-family: $font__descriptions;
        font-weight: 400px;
        font-size: 15px;
        text-align: center;
      }
      .contacts {
        display: none;
      }
    }
    .partners-cards:hover {
      padding: 25px 30px 30px;
      box-shadow: 6px 10px 35px #1e2f671a;
      border-radius: 30px;
      margin-bottom: 0px;
      div.partners-content {
        height: 100%;
      }
      .description,
      .title {
        display: flex;
        max-height: 70px;
        overflow: hidden;
      }
      .lines {
        width: 175px;
        border-bottom: 1px solid #dbddeb;
        margin: 0 auto;
      }
      .logo {
        width: 105px;
        height: 145px;
        padding-top: 0;
      }
      .contacts {
        display: flex;
        flex-direction: column;
        .center {
          margin: 0 auto;
          .name {
            color: #385fe2;
            font-size: 12px;
            font-weight: 700;
            margin-top: 10px;
            margin-bottom: 10px;
            font-family: $font__descriptions;
          }
          .row {
            justify-content: flex-start;
            align-items: flex-start;
            img {
              margin-right: 10px;
            }
            p {
              font-size: 12px;
              color: #1e2f67;
              font-family: $font__descriptions;
            }
          }
        }
      }
    }
    &.title {
      height: auto;
    }
  }
}
@media only screen and (max-width: 415px) {
  .partners.container {
    width: auto;
    margin-top: 0 !important;
  }
}

@media only screen and (max-width: 769px) {
  .partners {
    .title {
      .header {
        margin-top: 85px;
        margin-bottom: 0px;
      }
    }
    .row.information {
      .partners-cards {
        max-width: 320px;
      }
    }
  }
  .container {
    margin-top: 0px;
  }
}
</style>