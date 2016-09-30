<template>
  <section class="checkbox-component">
    {{options}}
    <!-- <div class="checkbox-item" v-for="option in options" :class="{'selected': option.selected}" @click="select(option)">
      <label v-bind:for="option.name">
        <img class="thumbnail" v-bind:src="option.image" alt="" v-if="option.image">
        <div class="label">{{option.label}}</div>
      </label>
    </div> -->
  </section>
</template>

<script>
  export default {
    props: ['options', 'model'],
    methods: {
      select(option, event) {
        for(let item of this.options) { item.selected = false }
        option.selected = !option.selected
        this.model = option.value;
        this.$dispatch('change', option.value);
      }
    }
  }
</script>

<style lang="less">
  @import (reference) '../assets/styles/references';

  .checkbox-component {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    
    .checkbox-item {
      display: flex;
      align-items: center;
      width: 30%;
      text-align: center;
      margin: 0 @sm-spacer;
      padding: @xs-spacer;
      border-radius: @border-radius;
      user-select: none; 
      
      * {
        cursor: pointer;
      }
      
      .thumbnail {
        margin-bottom: @xs-spacer; 
      }
      label {
        width: 100%;
        font-size: @md-font-size;
      }
      .label {}
      &.selected {
        background-color: @light-gray;
        * {
          cursor: default;
        }
      }
    }

    &.list {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
  }  
</style>
