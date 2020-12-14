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
      'scroll-line': expanded == true && level > 1 && level < 3,
      'top-space': expanded == false && level == 2,
    }"
  >
    <div class="row">
      <div
        :class="{
          'small-blue-line': expanded == true && level == 3,
          'big-blue-line': expanded == true && level == 1,
        }"
      ></div>

      <span
        class="label"
        :class="{
          active: expanded == true && level <= 1,
          'span-indicator': level == 3,
          'third-level-color': expanded == false && level == 3,
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
    margin: 10px 0 0px 15px;
  }
}
.active {
  background-color: #385fe20d;
  color: #385fe2;
  border-radius: 5px;
}
.scroll-line {
  border-left-style: solid;
  border-width: 1px;
  border-color: #dbddeb;
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
</style>