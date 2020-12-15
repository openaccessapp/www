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
  watch: {},
  created() {
    EventBus.$on("get-node", (node) => {
      this.openContent(node);
    });
  },
  methods: {
    openContent(node) {
      EventBus.$emit("open-content", node);
    },
  },
};
</script>

<style lang="scss" scoped>
ul.tree-list {
  padding-left: 0;
}
</style>
