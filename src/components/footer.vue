<template>
  <footer>
    <div class="footer-nav">
      <div class="footer-nav-box">
        <div class="nav-box-left">
          <div class="nav_log">
            <div class="log">
              <img src="/static/images/log.png" alt="">
            </div>
            <span>51兑换</span>
          </div>
          <p>最新最快最安全的兑换平台</p>
        </div>
        <ul class="nav-box-right">
          <li>
            <span>交易中心</span>
            <span>我的账户</span>
            <span>我的订单</span>
          </li>
          <li>
            <span>帮助中心</span>
            <span>FAQ</span>
            <span>技术支持</span>
          </li>
          <li>
            <span>关于我们</span>
            <span>我们是谁</span>
            <span>联系我们</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>
        <span>Copyright 2017.All rights reserved.</span>
        <span>China: +86 2 33 44 55 66    US: +11 222 333 444    support@shark.com</span>
      </div>
    </div>
  </footer>
 
  
</template>
<style lang="less" scroped>
  footer{
    width: 100%;
    overflow: hidden;
    background: #fff;
    border-top:1px solid #E3E3E3;
    .footer-nav-box{
      width: 1200px;
      margin:auto;
      overflow: hidden;
      .nav-box-left{
        float: left;
        .nav_log{
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
        p{
          font-size:12px;
          color:#777777;
        }
      }
      .nav-box-right{
        float: right;
        width: 610px;
        padding-top:10px;
        li{
          width: 200px;
          font-size:12px;
          cursor: pointer;
          color:#777777;
          display: inline-block;
          span{
            display: block;
            margin-bottom:10px;
            
            &:first-child{
              font-size: 14px;
              color: #333333;
            }
          }
        }
      }
    }
    .footer-bottom{
      background: #171717;
      color:#fff;
      overflow: hidden;
      &>div{
        width: 1200px;
        margin:auto;
        padding:10px 0 20px;
        span{
          float: left;
          &:last-child{
            float: right;
          }
        }
      }
    }
  }
</style>
<script>
  
  export default {
    name: "footer",
    data() {
      return {
      };
    },
    
    created() {
    },
    mounted() {
    }
  };
</script>
