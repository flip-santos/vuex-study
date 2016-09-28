<template>
  <div id="app">
    <h1>Counters</h1>
    <counter v-for="counter in counters" :counter-id="$index" track-by="$index"></counter>
    <div>
      <button @click="addCounter">Add counter</button>
    </div>
  </div>
</template>

<script>
  import counter from './Counter.vue';
  import { addCounter } from './actions';

  export default {
    vuex: {
      state: {
        counters: state => state.counters
      },
      actions: {
        addCounter
      }
    },
    components: { counter }
  }
</script>
