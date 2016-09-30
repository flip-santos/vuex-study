<template>
  <header class="signin-header">
    <div class="inner-container">
      <div class="moip-slogan">
        <h2>Moip</h2>
        <span>
          Feito para<br>
          <strong>eu negócio</strong>
        </span>
      </div>
    </div>
  </header>
</template>

<style lang="less">

@import '../assets/styles/main';

.signin-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: @xs-spacer;
  padding-bottom: @xs-spacer;
  background-color: @blue;
  background: linear-gradient(135deg,  @blue 0%, #29bae8 100%);
  box-shadow: 0 0 10px fade(@black, 70%);
  z-index: 10;
  
  @media @phone {
    position: relative;
  }
}
.moip-slogan {
  @logo-height: 50px;
  &:extend(.clearfix);
  display: inline-block;

  h2 {
    .ir(110px, @logo-height, '../images/moip-white.svg');
    float: left;
    margin: 0;
    margin-right: @xs-spacer;
  }

  span {
    float: left;
    height: @logo-height;
    font-size: @md-font-size;
    line-height: @md-font-size;
    padding-top: @sm-spacer - 9px;
    color: fade(@white, 75%);
  }

  @media @phone {
    @logo-height: 40px;

    h2 {
      .ir(90px, @logo-height, '../images/moip-white.svg');
      margin-right: @xs-spacer;
    }

    span {
      height: @logo-height;
      padding-top: 7px;
    }
  }
}
</style>

<script>
  export default {
    data () {
      return {
        msg: 'Olá'
      }
    }
  }
</script>