<template>
  <div class="mart-container">
    <div class="steps-content">
      <div class="navi-container">
        <ol class="ui-step    ui-step-3 ">
          <li class="ui-step-start ui-step-active" :class="step>1?'ui-step-done':''">
            <div class="ui-step-line">-</div>
            <div class="ui-step-icon">
              <i class="iconfont">y</i>
              <i class="ui-step-number">1</i>
              <span class="ui-step-text">选择币种</span>
              <span class="ui-step-text-2">挑选你需要兑换的货币</span>
            </div>
          </li>
          
          <li :class="step_class" >
            <div class="ui-step-line " >-</div>
            <div class="ui-step-icon">
              <i class="iconfont">y</i>
              <i class="ui-step-number">2</i>
              <span class="ui-step-text">设置身份信息</span>
              <span class="ui-step-text-2">确认金额和地址</span>
            </div>
          </li>
          
          <li class="ui-step-end" :class="step==3?'ui-step-active':''">
            <div class="ui-step-line">-</div>
            <div class="ui-step-icon">
              <i class="iconfont">y</i>
              <i class="iconfont ui-step-number"></i>
              <span class="ui-step-text">成功</span>
              <span class="ui-step-text-2">交易完成，等待结款</span>
            </div>
          </li>
        </ol>
      </div>
    </div>
    <div class="mart-content">
      <ul class="money-list" v-if="step==1">
        <li v-for="item in list" @click="next(item)">
          <span class='fa':class="item.icon"></span>
          <span>{{item.name}}</span>
          <span>￥{{item.money}}</span>
          <span class="fa fa-angle-double-right"></span>
        </li>
      </ul>
      <div class="mart-step-2-content" v-if="step==2">
        <div class="top-content">
          <span class="fa" :class="item.icon"></span>
          <span>{{item.name}}</span>
          <span>￥{{item.money}}</span>
          <span>15分钟</span>
          <span class="fa fa-question-circle" title="此价仅为参考价格，以实际到账结算价为准。"></span>
        </div>
        <div class="change-content">
          <div class="input-box">
            <i class="fa" :class="item.icon"></i>
            <input type="number" v-model="changeMoney">
          </div>
          <span class="fa fa-angle-double-right"></span>
          <div class="input-box">
            <i class="fa" :class="item.icon"></i>
            <input type="number" v-model="payMoney" disabled >
          </div>
        </div>
        <div class="package-content">
          <div class="package-box">
            <span>你的钱包地址：</span>
            <input type="text">
          </div>
          <div class="package-box">
            <span>验证码：</span>
            <input type="text">
            <span>
            </span>
          </div>
        </div>
        <div class="mart-step-2-btn-content">
          <div class="btn-box">
            <span class="btn" @click="pre">上一步</span>
            <span class="btn" @click="confirm">确认</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style lang="less" scroped>
  body{
    background: #F9F9F9;
  }
  .mart-container {
    position: relative;
    .steps-content {
      width: 780px;
      text-align: center;
      display: block;
      margin: auto;
      padding: 50px 0 ;
      .navi-container {
        padding: 0 40px;
      }
      .ui-step {
        padding: 0 40px;
        margin: 0 auto;
        font-size: 14px;
        list-style: none;
        zoom: 1;
        position: relative;
        color: #b7b7b7;
        height:80px;
        li {
          float: left;
          height: 80px;
          margin: 0;
          width: 50%;
          position: relative;
          .ui-step-line {
            height: 3px;
            background: #b9b9b9;
            display: block;
            margin-top: 14px;
            line-height: 1;
            overflow: hidden;
          }
          .ui-step-icon {
            height: 50px;
            position: absolute;
            top: 0;
            width: 150px;
            text-align: center;
            left: -25px;
            font-family: tahoma;
            .iconfont {
              font-size: 30px;
              margin: 0;
              color: #b7b7b7;
              color: rgba(0, 0, 0, .25);
              line-height: 30px;
              padding: 0 10px;
              position: absolute;
              top: 0;
              left: 0;
              text-shadow: 1px 1px 2px #fff, 0 0 0 #ccc, 1px 1px 2px #fff;
            }
            .ui-step-number {
              line-height: 14px;
              font-style: normal;
              position: absolute;
              top: 7px;
              left: 0;
              padding: 0 20px;
              font-weight: 700;
              color: #fff;
              
            }
            .ui-step-text {
              height: 20px;
              line-height: 20px;
              position: relative;
              text-shadow: 0 1px 0 #fff;
              top: 34px;
              left: -50px;
              display: block;
            }
            .ui-step-text-2{
              font-size:12px;
              color: rgb(183, 183, 183);
              position: relative;
              top: 34px;
              left: -50px;
              display: block;
            }
          }
          &.ui-step-end {
            position: absolute;
            top: 0;
            right: -110px;
            width: 150px;
            zoom: 1;
            _clear: both;
            .ui-step-line {
              display: none
            }
            .ui-step-number {
              background: transparent;
              font-size: 12px;
              font-style: normal;
              left: 17px;
              line-height: 12px;
              padding: 0;
              text-shadow: none;
              top: 9px;
            }
          }
          &.ui-step-active {
            color: #f16f20;
            .iconfont {
              color: #ff7001;
              &.ui-step-number{
                color: #fff;
              }
            }
          }
        }
        .ui-step-done{
          .iconfont {
            color: #ff9a00
          }
          .ui-step-line {
            background: #fc9c27
          }
        }
      }
      .ui-step-3 {
        li {
          width: 50%;
        }
      }
    }
    .mart-content{
      width: 800px;
      margin:auto;
      position: relative;
      padding:20px;
      box-shadow: 0 0 5px #c7c5c5;
      background: #fff;
      .money-list{
        width: 382px;
        margin:auto;
        
        li{
          display: block;
          height:40px;
          line-height:40px;
          border-bottom:1px solid #b3b3b3;
          font-size: 14px;
          padding:0 15px;
          cursor: pointer;
          &:hover{
            background: #0078ff;
            border-color:transparent;
            color:#fff;
          }
          span{
            display: inline-block;
            &:nth-child(1){
            width: 50px;
          }
            &:nth-child(2){
              width: 150px;
            }
            &:nth-child(3){
              width: 120px;
            }
            &:nth-child(4){
              text-align: right;
              font-size:16px;
              width: 20px;
            }
          }
        }
      }
      .mart-step-2-content{
        width: 400px;
        margin:auto;
        .top-content{
          display: flex;
          position: relative;
          
          border-bottom: 1px dotted #b3b3b3;
          font-size:16px;
          span{
            flex:1;
            display: block;
            line-height: 40px;
            &:first-child,&:last-child{
              padding:0 10px;
              width: 50px;
              flex:none;
              
            }
            &:last-child{
              text-align: right;
            }
          }
        }
        .change-content{
          width: 400px;
          margin-top:15px;
          font-size:0;
          .input-box{
            display: inline-block;
            width: 150px;
            vertical-align: middle;
            position: relative;
            font-size:14px;
            input{
              width: 100%;
              height: 36px;
              background: #fff;
              border: 1px solid #cad2db;
              border-radius: 4px;
              padding-left: 30px;
              &:disabled{
                background: #eeeeee;
              }
            }
            i{
              position: absolute;
              line-height: 36px;
              top:0;
              left:10px;
            }
          }
          span{
            display: inline-block;
            vertical-align: middle;
            width: 100px;
            font-size:16px;
            color:#f16f20;
            text-align: center;
          }
        }
        .package-content{
          margin-top:15px;
          .package-box{
            display: flex;
            margin-bottom: 15px;
            span,input{
              flex: 1;
            }
            span:first-child{
              flex:none;
              line-height:36px;
              margin-right:10px;
              width: 85px;
            }
            span:last-child{
              flex:none;
              width: 100px;
              margin-left:10px;
              background-image: url(../assets/images/sms.png);
              background-repeat: no-repeat;
              background-size:contain;
              background-position: center;
            }
            input{
              height: 36px;
              background: #fff;
              border: 1px solid #cad2db;
              border-radius: 4px;
              padding:0 10px;
            }
          }
        }
        .mart-step-2-btn-content{
          text-align: center;
          .btn-box{
            display: inline-block;
            .btn{
              height:36px;
              line-height: 36px;
              border: 1px solid #cad2db;
              color:#171717;
              border-radius: 5px;
              padding:0 20px;
              cursor: pointer;
              &+.btn{
                margin-left:40px;
              }
              &:hover{
                border-color: transparent;
                background: #f16f20;
                color:#fff;
              }
            }
          }
        }
      }
      
      
    }
  }
</style>
<script>
  export default {
    name: "",
    data() {
      return {
        step:1,
        list:[
          {
            icon:'fa-btc',
            name:'比特币',
            money:'10000'
          },
          {
            icon:'fa-inr',
            name:'以太坊',
            money:'10000'
          },
          {
            icon:'fa-try',
            name:'以太经典',
            money:'10000'
          },
          {
            icon:'fa-btc',
            name:'莱特币',
            money:'10000'
          }
        ],
        item:{},
        changeMoney:0.1
      };
    },
    computed:{
      step_class:function() {
        var step_class='';
       if(this.step>1){
         step_class= 'ui-step-active'
       }
       if(this.step>2){
         step_class ='ui-step-active ui-step-done'
       }
       return step_class;
      },
      payMoney:function () {
        if(!isNaN(this.changeMoney+0)){
          return (this.item.money*this.changeMoney).toFixed(2)
        }
        
      }
    },
    created() {
    },
    
    mounted() {
    },
    methods:{
      next:function (item) {
        this.step++;
        this.item=item;
      },
      pre:function () {
        this.step--;
        this.item=new Object()
      },
      confirm:function () {
        this.next()
      }
    }
  };
</script>
