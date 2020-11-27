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
      <div
        v-for="(page, index) in mainPage"
        :key="index.name"
        class="parent"
        :class="{ active: page.opened == true }"
      >
        <p
          v-if="page.name"
          class="mainPage"
          @click="page.opened = !page.opened"
        >
          {{ page.name }}
        </p>
        <div v-if="page && page.opened">
          <div
            v-for="(sub, index) in page.subPage"
            :key="index.name"
            class="child"
          >
            <p
              v-if="sub.name"
              @click="sub.opened = !sub.opened"
              class="childPage"
            >
              {{ sub.name }}
            </p>
            <div v-if="sub.opened">
              <div
                v-for="(doc, index) in sub.documents"
                :key="index.name"
                class="grandChild"
              >
                <p @click="(doc.opened = !doc.opened), updateContent(doc.link)">
                  {{ doc.document }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-8">
      <div class="md-position" v-html="html"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
 
<script>
import documentation from "@content/documentation/documentation.yaml";
import marked from "marked";
import Footer from "./Footer";
export default {
  name: "Documentation",
  components: {
    Footer,
  },
  data() {
    return {
      data: {},
      mainPage: [
        {
          subPage: [],
        },
      ],
      logo: "",
      logoText: "",
      getStarted: "",
      html: "",
      link: "",
      content: "",
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
      this.mainPage = documentation.mainPage;
      this.logo = documentation.logo;
      this.logoText = documentation.logoText;
      this.getStarted = documentation.getStarted;

      this.link = documentation.link;
      this.addOpenedProperty();
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
        return false;
      }
    },
    updateContent(link) {
      this.content = link;
      this.html = marked(
        require(`@content/documentation/${this.content}.md`)
          .default
      );
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
    width: 320px;
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
  .md-position {
    text-align: justify;
    margin-left: 70px;
  }
}
</style>