<template>
  <div class="tree">
    <node-tree :node="treeData" :level="0"></node-tree>
  </div>
</template>

<script>
import NodeTree from "./NodeTree";
import { EventBus } from '../../event-bus';

export default {
  props: {
    treeData: Object
  },
  components: {
    NodeTree
  },
  watch: {
    treeData(newProp){
      console.log(newProp)
      this.openContent(newProp)
    }
  },
  methods: {
    openContent(node) {
      let path = (this.findFile(node)).path;
      path = ((path?.split('/'))?.slice(3, path?.length)).join('/');
      EventBus.$emit('open-content', path)
    },
    findFile(node) {
      if(node && node.type === 'file'){
        return node;
      } else if(node.type === 'directory' && node.children?.length > 0) {
        for(let child of node.children) {
          return this.findFile(child);
        }
      }
    }
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
</style>
