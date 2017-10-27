<template>
  <div class="app-container">
    <router-view name="nav"></router-view>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  
  </div>
</template>

<script>
  import * as $$ from "./assets/js/common";
  export default {
    name: "app",
    data() {
      return {
      
      };
    },
    mounted() {
    },
    methods: {
    
    },
    components: {
    
    },
  };
</script>

<style lang="less">
  @import "./assets/css/main.less";
</style>
