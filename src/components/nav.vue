<template>
  <header>
    <nav class="nav_bar">
      <a class="nav_log" href="index.html">
        <div class="log"><img src="/static/images/log.png" alt=""></div>
        <span>超级鸡</span>
      </a>
      <ul class="nav_menu">
        <li><a href="/login">登录</a></li>
        <li><a href="/">首页</a></li>
        <li><a href="/mart">交易中心</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">技术支持</a></li>
      </ul>
    </nav>
  </header>
  
</template>
<style lang="less" scroped>
  header{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e3e3e3;
    box-shadow: 0 0 2px #E3E3E3;
  }
  .nav_bar {
    width: 1200px;
    margin:auto;
    height: 60px;
    overflow: hidden;
    .nav_log{
      float:left;
      padding:10px 0;
      span{
        display: inline-block;
        vertical-align: middle;
        font-size:20px;
      }
      .log{
        width: 40px;
        height:40px;
        display: inline-block;
        vertical-align: middle;
        margin-right:15px;
        img {
          width: 100%;
          height:100%;
        }
      }
     
    }
    .nav_menu{
      float: right;
      height:100%;
      color:#666;
      li{
        float: left;
        padding:20px 15px;
        line-height:20px;
        font-size:14px;
        cursor: pointer;
        a{
          color:inherit;
        }
        &.active{
          color:#00a0dc;
        }
        &:hover{
          color:#00a0dc;
        }
      }
    }
  }
</style>
<script>
  export default {
    name: "nav",
    data() {
      return {};
    },
    
    created() {
    },
    
    mounted() {
    }
  };
</script>
