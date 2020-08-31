<template>
  <div class="container partners">
    <div class="row">
      <p class="header">{{text}}</p>
    </div>
    <div class="row">
      <div
        class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 partners-cards"
        v-for="partners in partners"
        :key="partners"
      >
        <img class="logo" :src="partners.image" />
        <p class="title">{{partners.title}}</p>
        <p class="description">{{partners.description}}</p>
        <div class="lines" />
        <div class="contacts">
          <div class="center">
            <p class="name">{{partners.name}}</p>
            <div class="row">
              <img :src="partners['email-image']" />
              <p>{{partners.email}}</p>
            </div>
            <div class="row">
              <img :src="partners['number-image']" />
              <p>{{partners.number}}</p>
            </div>
            <div class="row">
              <img :src="partners['twitter-image']" />
              <p>{{partners.twitter}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import partners from "js-yaml-loader!../../content/EN/partners.yaml";
import partnersDe from "js-yaml-loader!../../content/DE/partners.yaml";
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
@import "../../public/assets/main.scss";
.partners {
  .row {
    // align-items: center;
    align-items: baseline;
    justify-content: center;
    .header {
      font-family: $font__family;
      font-size: 40px;
      color: #1e2f67;
      text-align: center;
      margin-bottom: 180px;
    }
    .partners-cards {
      margin-bottom: 80px;
      .logo {
        width: 135px;
      }
      .title {
        display: none;
        color: #385fe2;
        font-family: $font__family;
        font-size: 20px;
        margin-top: 20px;
        margin-bottom: 5px;
      }
      .description {
        display: none;
        color: #474a67;
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
      padding: 20px 10px 20px;
      box-shadow: 6px 10px 35px #1e2f671a;
      border-radius: 30px;
      .description,
      .title {
        display: flex;
        justify-content: center;
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
  }
}
</style>