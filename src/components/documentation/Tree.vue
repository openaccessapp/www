<template>
  <div class="tree">
    <node-tree :node="treeData" :level="0"></node-tree>
  </div>
</template>

<script>
import NodeTree from "./NodeTree";
import { EventBus } from "../../event-bus";

export default {
  props: {
    treeData: Object,
  },
  components: {
    NodeTree,
  },
  watch: {
    treeData(newProp) {
      this.openContent(newProp);
    },
  },
  created() {
    EventBus.$on("get-node", (node) => {
      this.openContent(node);
    });
  },
  methods: {
    openContent(node) {
      let path = this.findFirstFile(node)?.path;
      if (path) {
        let separator = process.env.VUE_APP_OS == "windows" ? "\\" : "/";
        path = path.split(separator).slice(3, path.length).join("/");
        EventBus.$emit("open-content", path);
      }
    },
    findFirstFile(node) {
      if (node && node.type === "file") return node;
      else if (node && node.type === "directory" && node.children?.length > 0)
        for (let child of node.children) return this.findFirstFile(child);
    },
  },
};
</script>

<style lang="scss" scoped>
ul.tree-list {
  padding-left: 0;
}
</style>
