<template>
  <ul
    v-if="
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
      scroll: expanded == true && level > 1 && level < 3,
      indicator: expanded == true && level == 3,
    }"
  >
    <span
      class="label"
      :class="{
        active: expanded == true && level <= 1,
      }"
      @click="openContent(node), (expanded = !expanded)"
      >{{ node.name | capitalize }}</span
    >

    <ul
      v-if="
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
          for (let part of parts)
            result += part.charAt(0).toUpperCase() + part.slice(1) + " ";
          return result;
        } else return text.charAt(0).toUpperCase() + text.slice(1);
      }
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
    openContent(node) {
      EventBus.$emit("get-node", node);
    },
    hasChildDirectory(node) {
      return node.children.some((e) => e.type === "directory");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../public/assets/scss/main.scss";
.label {
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
    margin: 15px 0 25px 15px;
  }
}
.active {
  background-color: #385fe20d;
  color: #385fe2;
  border-left-style: solid;
  border-radius: 2px;
  border-width: 4px;
}
.scroll {
  border-left-style: solid;
  border-width: 1px;
  border-color: #dbddeb;
}
.indicator {
  border-color: #385fe2;
  border-left-style: solid;
  border-width: 4px;
  margin-left: -2px;
  padding-left: 13px;
}
</style>