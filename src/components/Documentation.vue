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
      <div>{{ document }}</div>
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
import marked from "marked";
import Footer from "./Footer";
import contentTree from "../_content.json";
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
      content: {},
      document: "",
      path: "",
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  mounted() {
    this.init();
    if (!this.$router.history.current.params.lang) {
      this.$router.push("en");
    }
    let lang = "en";
    let docContent = contentTree.children.find((c) => c.name === lang);
    docContent.children.forEach((page) => {
      import(`@content/en/${page.path}.md`)
        .then((body) => {
          console.log(
            "The page object can be used to generate routes, build navigations, and more..."
          );
          console.log(page);
          console.log("The body string can be rendered when needed...");
          console.log(body);
        })
        .catch((error) => console.error(error));
    });
  },
  methods: {
    init() {
      this.logo = documentation.logo;
      this.logoText = documentation.logoText;
      this.getStarted = documentation.getStarted;
      this.question = documentation.question;
      this.paragraphs = documentation.paragraphs;
      this.content = contentTree;
      this.path = contentTree.path;
      this.renderContent();
    },
    renderContent(content, path) {
      if (!this.children) {
        this.document = marked(require(`${path}/README.md`));
        return;
      }
      this.renderContent();
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