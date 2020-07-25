<template>
  <div class="footer container">
    <figure-circle
      class="circle"
      color="#385FE2"
      :zIndex="0"
      :right="-270"
      :isFilled="false"
      :bottom="0"
      customClass="custom-circle"
    ></figure-circle>
    <figure-circle color="#DDFFF7" :zIndex="0" :left="-280" :isFilled="true" :bottom="0"></figure-circle>

    <div class="row container-links">
      <div class="col-xl-3 col-sm-4 col-6 col-md-4 col-xs-6 info">
        <router-link to="/terms">
          <p class="row terms">Terms and Conditions</p>
        </router-link>
        <router-link to="/privacy">
          <p class="row terms">Privacy Policy</p>
        </router-link>
        <p class="row contacts">Contacts</p>
        <div class="row mail">
          <img src="assets/envelope-footer.png" />
          <p>t.e.shaw@auxnederlandbv.nl</p>
        </div>
      </div>
      <img class="col-xl-4 col-sm-4 col-md-4 col-4" src="assets/access-logo-footer.png" />
      <p class="col-xs-6 col-sm-4 col-md-4 col-6 col-xl-4 paragraph">
        AccessApp is open source and not for profit. A reference implementation is run in an open
        books mode by Aux Nederland B. V. Keizersgracht 241-2, 1016 EA Amsterdam, Niederlande
      </p>
    </div>
  </div>
</template>

<script>
import footer from "js-yaml-loader!../../content/footer.yaml";
import FigureCircle from "../components/FigureCircle.vue";
export default {
  name: "CustomerReviews",
  components: { FigureCircle },
  data() {
    return {
      page1: "",
      page2: "",
      page3: "",
      page4: "",
      page5: "",
    };
  },
  mounted() {
    this.page1 = footer["page-1"];
    this.page2 = footer["page-2"];
    this.page3 = footer["page-3"];
    this.page4 = footer["page-4"];
    this.page5 = footer["page-5"];
  },
};
</script>

<style scoped lang="scss">
@import "../../public/assets/main.scss";

.footer.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  max-width: unset;
  padding: 0;
  height: auto;
  background: none;
  p {
    font-size: 16px;
    color: black;
  }

  .custom-circle {
    border: 6px solid rgb(56, 95, 226);
    z-index: 0;
    top: unset;
    right: -290px;
    bottom: 0 !important;
    left: unset;
    background: unset;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 500px;
    border-top-right-radius: 500px;
    height: 200px;
    border-bottom: 0 !important;
  }
  .container-links {
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    align-items: center;
    padding: 50px 200px;
    img {
      max-width: 125px;
      max-height: 95px;
      padding: 0;
    }
    .paragraph {
      text-align: left;
      font-family: $font__descriptions;
      font-weight: 400;
      font-size: 14px;
      color: #1e2f67;

      line-height: 25px;
    }
    .info {
      img {
        max-width: 20px;
        max-height: 16px;
      }
      .terms {
        margin-bottom: 20px;
        font-size: 16px;
        color: #1e2f67;
        font-family: $font__descriptions;
        font-weight: 500;
      }
      p {
        margin-bottom: 10px;
        font-size: 16px;
        color: #1e2f67;
        font-family: $font__descriptions;
        font-weight: 500;
      }
      .mail {
        align-items: center;
        p {
          margin-left: 10px;
          font-size: 14px;
          font-family: $font__descriptions;
          font-weight: 400;
          color: #1e2f67;
          margin-bottom: 0;
        }
      }
    }
  }
}
@media only screen and (max-width: 414px) {
  img {
    display: none;
  }
  .container-links {
    display: flex !important;
    align-items: flex-start !important;
    padding: 0 !important;
    margin-left: 5px !important;
    .paragraph {
      font-size: 12px !important;
    }
    .mail {
      p {
        margin: 0 !important;
      }
    }
    .info {
      .terms,
      .contacts {
        font-size: 14px !important;
      }
    }
  }
}

@media only screen and (max-width: 320px) {
  .container-links {
    display: flex !important;
    align-items: flex-start !important;
    padding: 0 !important;
    margin-left: 5px !important;
    .paragraph {
      font-size: 10px !important;
    }
    .mail {
      p {
        font-size: 10px !important;
        margin: 0 !important;
      }
    }
  }
}
@media only screen and (min-width: 415px) and (max-width: 1025px) {
  .footer {
    .row.container-links {
      margin-right: 50px;
      padding: 0;
      padding-bottom: 50px;
      .info {
        .terms {
          text-align: left;
        }
      }
    }
  }
}

@media only screen and (max-width: 1365px) {
  .footer {
    width: 100% !important;
    height: auto !important;
    margin-left: 0;
    margin-right: 0;
    .circle {
      display: none;
    }
  }
}
</style>