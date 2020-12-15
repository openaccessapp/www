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
      <div>
        <tree :tree-data="contentTree"></tree>
      </div>
    </div>

    <div class="center col-8 p-4 text-align-left" v-html="content"></div>
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
import Tree from "./documentation/Tree";
import contentEN from "../en_content.json";
import contentDE from "../de_content.json";
import { EventBus } from "../event-bus";
export default {
  name: "Documentation",
  components: {
    Footer,
    Tree,
  },
  data() {
    return {
      logo: "",
      logoText: "",
      getStarted: "",
      // html: "",
      question: "",
      paragraphs: [],
      document: "",
      path: "",
      contentTree: {},
      content: "",
      prelinkedFile: true,
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  created() {
    let path = this.$router.history.current.path.slice(
      1,
      this.$router.history.current.path.length
    );
    import(`@content/${path}/README.md`)
      .then((data) => {
        this.content = marked(data.default);
      })
      .catch((e) => {
        console.log(e);
        this.openContent(this.contentTree);
      });
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let lang = this.$router.history.current.params.lang;
      if (lang == "en") {
        this.contentTree = contentEN;
      } else if (lang == "de") {
        this.contentTree = contentDE;
      }
      EventBus.$on("open-content", (node) => {
        this.openContent(node);
      });

      this.logo = documentation.logo;
      this.logoText = documentation.logoText;
      this.getStarted = documentation.getStarted;
      this.question = documentation.question;
      this.paragraphs = documentation.paragraphs;
    },
    openContent(node) {
      let lang = this.$router.history.current.params.lang;
      let path = this.findFirstFile(node)?.path;
      if (path) {
        let separated = path.split(this.pickSeparator());
        let link = separated.slice(3, separated.length - 1).join("/"); // without README.md
        path = separated.slice(3, separated.length).join("/");
        import(`@content/${lang}/${path}`).then(
          (data) => (this.content = marked(data.default))
        );
        this.$router.push(`/${lang}/${link}`).catch(() => {});
      }
    },
    pickSeparator() {
      return process.env.VUE_APP_OS == "windows" ? "\\" : "/";
    },
    findFirstFile(node) {
      if (node && node.children.some((e) => e.type === "file"))
        return node.children.find((e) => e.type === "file");
      else if (node && node.type === "directory" && node.children?.length > 0)
        for (let child of node.children) return this.findFirstFile(child);
    },
  },
};
</script> 

<style scoped lang="scss">
@import "../../public/assets/scss/main.scss";
.documentation {
  .text-align-left {
    text-align: center;
    margin-top: 135px;
  }
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