<template>
  <button v-on={click}>{{count}}</button>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({ count: 0 }),
  methods: {
    click() {
      this.count += 1;
    }
  }
});
</script>
