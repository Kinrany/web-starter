<template>
  <div id="root">
    <h3>Hello world!</h3>
    <div>
      <counter/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import counter from './Counter.vue';
export default Vue.extend({
  components: {
    counter,
  },
})
</script>

<style lang="postcss" scoped>
#root {
  background-color: lightgreen;
}
</style>
