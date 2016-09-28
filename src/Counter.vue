<template>
  <div class="counter">
    {{currentCount}}
    <button @click="decrement(counterId)">Decrement</button>
    <button @click="increment(counterId)">Increment</button>
    <button @click="incrementIfOdd(counterId)">Increment if Odd</button>
  </div>
</template>

<script>
  import { increment, decrement, incrementIfOdd } from './actions'

  export default {
    props: ['counterId'],
    vuex: {
      state: {
        currentCount: function (state) {
          return state.counter[this.counterId]
        }
      },
      actions: {
        increment,
        decrement,
        incrementIfOdd
      }
    }
  }
</script>