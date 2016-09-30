<template>
  <main id="app">
    <fixed-header></fixed-header>
    <signin-panel></signin-panel>
  </main>
</template>

<style lang="less">
  @import (reference) './assets/styles/references';
  @import './assets/styles/helpers';
  
  body {
    background-color: @off-white;
  }
  
  #app {
    position: relative;
    z-index: 2;
  }

</style>

<script>
  import FixedHeader from './components/FixedHeader'
  import SigninPanel from './components/SigninPanel'

  export default {
    components: { FixedHeader, SigninPanel }
  }
</script>
