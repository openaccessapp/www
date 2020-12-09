<template>
    <li class="node-tree" v-if="node.type === 'directory'">
        <span class="label" @click="openContent(node)">{{ node.name | capitalize }}</span>

        <ul v-if="node.children && node.children.length && hasChildDirectory(node)">
            <node v-for="child in node.children" :key="child.name" :node="child"></node>
        </ul>
    </li>
</template>

<script>
import { EventBus } from '../../event-bus';

export default {
  name: "node",
  props: {
    node: Object
  },
  filters: {
      capitalize(text) {
        if(text && text.length > 0) {
            let parts = text.split('-');
            if(parts.length > 1) {
                let result = '';
                for(let part of parts)
                    result += part.charAt(0).toUpperCase() + part.slice(1) + ' ';
                return result;
            } else
                return text.charAt(0).toUpperCase() + text.slice(1)
        }
      }
  },
  methods: {
      openContent(node) {
          let path = (node.children.find(e => e.type === 'file'))?.path;
          path = ((path?.split('/')).slice(3, path?.length)).join('/');
          EventBus.$emit('open-content', path)
      },
      hasChildDirectory(node) {
        return node.children.some(e => e.type === 'directory');
      }
  }
};
</script>

<style lang="scss" scoped>
.label {
    cursor: pointer;
}
</style>