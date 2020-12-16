<template>
  <ul
    v-if="
      node &&
      level === 0 &&
      node.children &&
      node.children.length &&
      hasChildDirectory(node)
    "
    class="tree-list"
  >
    <node
      v-for="child in node.children"
      :key="child.name"
      :node="child"
      :level="level + 1"
    ></node>
  </ul>
  <li
    class="node-tree"
    v-else-if="level >= 1 && node.type === 'directory'"
    :class="{
      'scroll-line': expanded == true && level == 2,
      'top-space': expanded == false && level == 2,
    }"
  >
    <div class="row">
      <div
        :class="{
          'big-blue-line': active && level == 1,
          'small-blue-line': active && level == 3,
        }"
      ></div>
      <span
        class="label"
        :class="{
          ' active': active && level == 1,
          'span-indicator': level == 3,
          'third-level-color': active == false && level == 3,
        }"
        @click="openContent(node), (expanded = !expanded)"
        >{{ node.name | capitalize }}</span
      >
    </div>

    <ul
      v-if="
        node &&
        node.children &&
        node.children.length &&
        hasChildDirectory(node) &&
        expanded
      "
    >
      <node
        v-for="child in node.children"
        :key="child.name"
        :node="child"
        :level="level + 1"
      ></node>
    </ul>
  </li>
</template>

<script>
import { EventBus } from "../../event-bus";

export default {
  name: "node",
  props: {
    node: Object,
    level: Number,
  },
  filters: {
    capitalize(text) {
      if (text && text.length > 0) {
        let parts = text.split("-");
        if (parts.length > 1) {
          let result = "";
          if (!isNaN(parts[0])) parts[0] = "";

          for (let part of parts)
            result += part.charAt(0).toUpperCase() + part.slice(1) + " ";
          return result;
        } else return text.charAt(0).toUpperCase() + text.slice(1);
      }
    },
  },
  watch: {
    $route() {
      this.expanded = this.isUnderCurrentPage();
      this.active = this.isCurrentPage();
    },
  },
  data() {
    return {
      expanded: false,
      active: false,
    };
  },
  mounted() {
    this.expanded = this.isUnderCurrentPage();
    this.active = this.isCurrentPage();
  },
  methods: {
    openContent(node) {
      EventBus.$emit("get-node", node, this.level);
    },
    hasChildDirectory(node) {
      return node.children.some((e) => e.type === "directory");
    },
    isUnderCurrentPage() {
      return (
        (this.node.path &&
          this.node.path.endsWith(
            this.preparePath(this.$router.history.current.path)
          )) ||
        this.recursiveCheckPage(this.node)
      );
    },
    recursiveCheckPage(node) {
      if (
        node.children &&
        node.children.some((e) =>
          e.path.endsWith(this.preparePath(this.$router.history.current.path))
        )
      )
        return true;
      else if (node && node.type === "directory" && node.children?.length > 0)
        for (let child of node.children) return this.recursiveCheckPage(child);
      else return false;
    },
    isCurrentPage() {
      return (
        this.node.path &&
        this.node.path.endsWith(
          this.preparePath(this.$router.history.current.path)
        )
      );
    },
    preparePath(path) {
      return process.env.VUE_APP_OS == "windows"
        ? path.replaceAll("/", "\\")
        : path.replaceAll("\\", "/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../public/assets/scss/main.scss";
.label {
  width: 100%;
  cursor: pointer;
  // padding-left: 15px;
  // padding-top: 10px;
  // padding-bottom: 10px;
}
ul {
  list-style-type: none;
  padding-left: 0;
  span {
    font-family: $font_documentation;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 100px 10px 15px;
  }
  li {
    margin: 10px 0 0px 15px;
  }
}
.active {
  background-color: #385fe20d;
  color: #385fe2;
  border-radius: 5px;
}
.small-blue-line {
  width: 4px;
  border-bottom: 20px solid #385fe2;
  border-radius: 2px;
  position: absolute;
  left: 44px;
}
.big-blue-line {
  width: 4px;
  border-bottom: 40px solid #385fe2;
  border-radius: 2px;
  position: absolute;
  left: 28px;
}
.span-indicator {
  padding-top: 0;
}
.third-level-color {
  color: #9597ac;
}
.top-space {
  margin-top: 0;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.scroll-line {
  border-left: solid 1px #dbddeb;
}
</style>