<template>
  <div class="app-container">
    <keep-alive>
      <router-view name="nav"></router-view>
    </keep-alive>
    <div class="app-content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    
    
     <router-view name="footer"></router-view>
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
  .app-content{
    @diff :125px;
    min-height:calc(~"100% - @{diff}");
    overflow: hidden;
    &>div{
      margin-top:62px;
    }
  }
</style>
