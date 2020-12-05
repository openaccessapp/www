<template>
  <div class="documentation row">
    <div class="node col-3">
      <div class="row logo">
        <img :src="`/assets/${logo}`" />
        <h1>{{ logoText }}</h1>
      </div>
      <hr />
      <p class="start">
        {{ getStarted }}
      </p>
    
    </div>

    <div class="center col-8">
      <!-- <div class="md-position" v-html="html"></div> -->
    </div>
    <div class="help">
      <hr class="line" />
      <p class="question">{{ question }}</p>
      <div class="row paragraphs">
        <div v-for="(row, index) in paragraphs" :key="index.paragraph">
          <p :class="{ first: index == 0 }">{{ row }}</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
 
<script>
import documentation from "@content/en/documentation.yaml";
// import marked from "marked";
import Footer from "./Footer";
export default {
  name: "Documentation",
  components: {
    Footer,
  },
  data() {
    return {
      logo: "",
      logoText: "",
      getStarted: "",
      // html: "",
      question: "",
      paragraphs: [],
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
      this.logo = documentation.logo;
      this.logoText = documentation.logoText;
      this.getStarted = documentation.getStarted;
      this.question = documentation.question;
      this.paragraphs = documentation.paragraphs;

      // this.addOpenedProperty();
      // this.isDocumentActive();
    },
    addOpenedProperty() {
      this.mainPage = this.mainPage.map((page) => ({
        ...page,
        opened: false,
        subPage: (page.subPage || []).map((sub) => ({
          ...sub,
          opened: false,
          documents: (sub.documents || []).map((doc) => ({
            ...doc,
            opened: false,
          })),
        })),
      }));
    },
    isDocumentActive() {
      if (this.page.opened == false || this.sub.opened == false) {
        this.doc.opened = false;
      }
    },
    updateContent(link) {
      this.content = link;
      // this.html = marked(
      //   require(`@content/en/${this.content}.md`).default
      // );
    },
  },
};
</script> 

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";
.documentation {
  p {
    font-size: 15px;
    font-weight: 500;
    font-family: $font_documentation;
    color: #9597ac;
    margin-bottom: 0;
  }
  .node {
    text-align: left;
    max-width: 320px;
    height: 1062px;
    box-shadow: 0px 6px 30px 0 #1d226f0d;

    justify-content: center;
    .logo {
      align-items: flex-end;
      margin: 30px auto 30px;
      justify-content: center;
      img {
        width: 55px;
        height: 40px;
        margin-right: 15px;
      }
      h1 {
        font-size: 15px;
        font-family: $font__descriptions;
        font-weight: 700;
      }
    }
    .start {
      margin-top: 30px;
      margin-bottom: 5px;
      margin-left: 15px;
      font-size: 12px;
      font-weight: 700;
    }
    hr {
      color: #dbddeb;
      width: 265px;
      margin: 0 auto;
    }
    .parent {
      .mainPage {
        padding: 10px 0 10px 15px;
      }
      .child {
        .childPage {
          color: #474a67;
        }
        margin-left: 35px;
        margin-bottom: 25px;
        .grandChild {
          margin-left: 10px;
          margin-top: 20px;
        }
      }
      &.active {
        .mainPage {
          color: #385fe2;
          background-color: #385fe20d;
        }
      }
    }
  }
  .center {
    .md-position {
      text-align: justify;
      margin-left: 70px;
      max-width: 560px;
      margin-left: 330px;
      margin-top: 135px;
    }
  }
  .help {
    margin-top: 100px;
    margin-left: 200px;
    .line {
      width: 1035px;
      color: #dbddeb;
    }
    .question {
      color: #474a67;
      font-size: 25px;
      font-weight: 700;
      text-align: left;
      margin-top: 45px;
      margin-bottom: 20px;
    }
    .paragraphs {
      margin-left: 0;
    }
    .first {
      color: #385fe2;
      margin-right: 10px;
    }
  }
}
</style>