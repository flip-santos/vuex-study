<template>
  <section class="header-welcome">
    <span class="logo-moip-white">MOIP</span>
    <h1 class="welcome-title">Crie sua conta no Moip, é grátis!</h1>
  </section>
</template>

<style lang="less" scoped>
  @import (reference) '../assets/styles/references';
  .header-welcome{
    .row();
    margin: 0;
  }
  .logo-moip-white{
    .ir(100%, 100px, "../images/moip-white.svg");
    float: left;
    background-position: center;
    margin-bottom: @md-spacer;
  }

  .welcome-title{
    .reset();
    text-align: center;
    color: @white;
    font-family: @helvetica-light;
    .font_size(1.9rem);
  }
  @media @tablet{
    .logo-moip-white{
      height: 120px;
    }
  }
  @media @phone{
    .logo-moip-white{
      height: 80px;
      margin-bottom: @sm-spacer;
    }

    .welcome-title{
      .font_size(@lg-font-size);
    }
  }
</style>

<script>
  export default {}
</script>
