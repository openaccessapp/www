<template>
    <li class="node-tree">
        <span class="label" @click="openContent(node.path)">{{ node.name }}</span>

        <ul v-if="node.children && node.children.length">
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
  methods: {
      openContent(path) {
          path = ((path.split('/')).slice(3, path.length)).join('/');
          EventBus.$emit('open-content', path)
      }
  }
};
</script>