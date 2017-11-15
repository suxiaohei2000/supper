<template>
  <div class="app-container">
    <router-view name="nav"></router-view>
    <div class="app-content">
      <div>
        <transition>
          <router-view></router-view>
        </transition>
      </div>
      
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
    @diff :60px;
    min-height:calc(~"100% - @{diff}");
    overflow: hidden;
    &>div{
      padding-top:62px;
    }
  }
</style>
