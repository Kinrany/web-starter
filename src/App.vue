<template>
  <div id="root">
    <h3>Hello world!</h3>
    <div>
      <button v-on={click}>{{clicks}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      clicks: 0,
    };
  },
  methods: {
    click() {
      this.clicks += 1;
    },
  },
})
</script>

<style lang="postcss" scoped>
#root {
  background-color: lightgreen;
}
</style>
