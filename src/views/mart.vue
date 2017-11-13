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
              <span class="ui-step-text">确认信息</span>
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
     <div class="mart-step-1-content" v-if="step==1">
       <div class="mart-step-box">
         <div class="step-box">
           <div class="head-title">
             <span>请选择要兑换的货币</span>
           </div>
           <ul class="item-content-box">
             <li v-for="item in moneyTypeList" @click="selectMoneyType(item)">
               <div class=" li-box-left">
                 <i class="icon-money" :class="item.icon"></i>
               </div>
               <div class="li-item-box " :class="moneyType.type==item.type?'active':''">
                 {{item.name}}
                 <i class="fa fa-check-square-o"></i>
               </div>
             </li>
           </ul>
           <div class="more-li">
             更多币种，尽情期待
           </div>
         </div>
         <div class="center">
           <i class="fa fa-angle-double-right"></i>
         </div>
         <div class="step-box">
           <div class="head-title">
             <span>请选择支付方式</span>
           </div>
           <ul class="item-content-box">
             <li v-for="item in payTypeList" @click="selectPayType(item)">
               <div class=" li-box-left">
                 <i class="icon-money" :class="item.icon"></i>
               </div>
               <div class="li-item-box " :class="payType.type==item.type?'active':''">
                 {{item.name}}
                 <i class="fa fa-check-square-o"></i>
               </div>
             </li>
           </ul>
         </div>
       </div>
       <div class="mart-step-btn-content">
         <div class="btn-box">
           <span class="btn" @click="next">下一步</span>
         </div>
       </div>
     </div>
      <div class="mart-step-2-content" v-if="step==2">
        <ul class="top-content">
          <li>
            <span>{{moneyType.type}}/USD: {{martMoney}}</span>
          </li>
          <li>
            <span class="fa fa-question-circle"></span>
            <span>仅为参考价格，以实际到账结算价为准。</span>
          </li>
          <li>
            <div class="mart-step-btn-content">
              <div class="btn-box">
                <span class="btn" @click="refreshPrice" ref="refreshPrice">刷新</span>
              </div>
            </div>
          </li>
        </ul>
       <div class="mart-step-box">
         <div class="change-content">
           <div class="input-box">
             <i class="fa" :class="item.icon"></i>
             <input type="number" v-model="changeMoney">
           </div>
           <span class="fa fa-angle-double-right"></span>
           <div class="input-box">
             <i class="fa fa-cny" ></i>
             <input type="number" v-model="payMoney" disabled >
           </div>
         </div>
         <div class="package-content">
           <div class="package-box">
             <span>你的钱包地址：</span>
             <input type="text" placeholder="输入您的钱包地址（推荐使用imToken）" v-model="userWalletAddress">
           </div>
           <div class="package-box">
             <span>验证码：</span>
             <input type="text" v-model="validateCode">
             <span>
            </span>
           </div>
         </div>
         <div class="mart-step-btn-content">
           <div class="btn-box">
             <span class="btn" @click="pre">上一步</span>
             <span class="btn" @click="confirm" ref="confirmBtn">{{confirmBtnTxt}}</span>
           </div>
         </div>
       </div>
      </div>
      <div class="mart-step-3-content" v-if="step==3">
        <div class="mart-step-title">
          <p>您的兑换申请已经受理，请尽快往以下地址完成转账操作。</p>
          <p>
            0x2701080fddac1df22ebe71af968bc7048d38ec09
          </p>
          <p>
            <img src="../assets/images/payCode.png" alt="">
          </p>
        </div>
        <ul class="order-content">
          <li>
            <span>订单号：</span>
            <span>{{martData.tradeNo}}
            <i class="fa fa-question-circle-o" title="订单保留55分钟"></i>
            </span>
          </li>
          <li>
            <span>币种：</span>
            <span>{{martData.tradeType}}</span>
          </li>
          <li>
            <span>下单时间：</span>
            <span>{{martData.createTime}}</span>
          </li>
          <li>
            <span>兑换数量：</span>
            <span>{{martData.tradeCnt}}</span>
          </li>
          <li>
            <span>结算方式：</span>
            <span>{{payType.name}}</span>
          </li>
          <li>
            <span>用户钱包地址：</span>
            <span>{{martData.userWalletAddress}}</span>
          </li>
        </ul>
        <div class="mart-step-btn-content">
          <div class="btn-box">
            <span class="btn" @click="reStart">再来一笔</span>
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
    padding-bottom: 10px;
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
            color: #000;
            .iconfont {
              color:#43baff;
              &.ui-step-number{
                color: #fff;
              }
            }
          }
        }
        .ui-step-done{
          .iconfont {
            color: #43baff
          }
          .ui-step-line {
            background: #43baff
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
      /*padding:50px 20px;
      box-shadow: 0 0 5px #c7c5c5;
      background: #fff;*/
      .mart-step-btn-content{
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
            &:hover{
              border-color: transparent;
              background: #43baff;
              color:#fff;
            }
            &+.btn{
              margin-left:40px;
            }
          }
        }
      }
  
      .mart-step-1-content{
        .mart-step-box{
          width: 100%;
          display: flex;
          margin-bottom:20px;
        }
        .step-box{
          flex: 1;
          height: 400px;
          border: 1px solid #e3e3e3;
          border-radius: 5px;
          .head-title{
            font-size:14px;
            padding:10px;
            background:#e3e3e3;
          }
          
          ul{
            padding:20px 10px;
            margin-bottom:20px;
            li{
              position: relative;
              cursor: pointer;
              &+li{
                margin-top:20px;
              }
              .li-box-left{
                width: 42px;
                height: 42px;
                position: absolute;
                left:0;
                z-index: 10;
              }
              .li-item-box{
                border-radius: 5px;
                border:1px solid #e3e3e3;
                line-height:40px;
                margin-left:20px;
                padding:0 20px 0 40px;
                position: relative;
                &:hover{
                  background: #f4f4f4;
                }
                &.active{
                  background: #f4f4f4;
                  i{
                    display: block;
                  }
                }
                i{
                  float: right;
                  width: 20px;
                  height:20px;
                  line-height: 40px;
                  font-size:16px;
                  color:#43baff;
                  text-align: center;
                  display: none;
                }
              }
            }
            .icon-money{
              width: 100%;
              height:100%;
              background-repeat:no-repeat;
              background-position: center;
              background-size: cover;
              background-color:#e3e3e3;
              border-radius: 100%;
            }
            .icon-money-ETH{
              background-image: url('../assets/images/icon-money-ETH.png');
            }
            .icon-money-BTC{
              background-image: url('../assets/images/icon-money-BTC.png');
            }
            .icon-money-LTC{
              background-image: url('../assets/images/icon-money-LTC.png');
            }
            .icon-money-payMoney{
              background-image: url('../assets/images/icon-money-payMoney.png');
            }
            .icon-money-unionMoney{
              background-image: url('../assets/images/icon-money-unionMoney.png');
            }
          }
          .more-li{
            border-radius: 5px;
            border:1px solid #e3e3e3;
            line-height:30px;
            text-align: center;
            margin:0 10px;
          }
        }
        .center{
          width: 150px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          i{
            width: 20px;
            height:20px;
            font-size:20px;
            color:#43baff;
          }
        }
      }
      .mart-step-2-content{
        width: 800px;
        margin:auto;
        border: 1px solid #e3e3e3;
        padding:20px ;
        box-shadow: 0 0 5px #c7c5c5;
        background: #fff;
        .mart-step-box{
          width: 400px;
          margin:auto;
        }
       
        .top-content{
          display: flex;
          position: relative;
          border-bottom: 1px dotted #b3b3b3;
          font-size:16px;
          align-items: center;
          padding-bottom: 10px;
          padding-left:10px;
          padding-right:10px;
          li{
            &:first-child{
              width: 200px;
            }
            &:nth-child(2){
              flex: 1;
              margin:0 20px;
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
            color:#43baff;
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
      }
      .mart-step-3-content{
        width: 500px;
        margin:auto;
        box-shadow: 0 0 5px #c7c5c5;
        background: #fff;
        padding:29px 10px;
        .mart-step-title{
          font-size:16px;
          line-height: 30px;
          text-align: center;
        }
        .order-content{
          width: 350px;
          display: block;
          margin:15px auto ;
          li{
            display: flex;
            font-size:14px;
            padding:10px;
            border-bottom: 1px solid #E3E3E3;
            width: 100%;
            &:last-child{
              border-bottom: none;
            }
            i{
              float: right;
              margin-top:5px;
            }
            span{
              flex:1;
              display: block;
              vertical-align: middle;
              position: relative;
              &:first-child{
                width: 120px;
                flex:none;
              }
            }
          }
        }
      }
      
    }
  }
</style>
<script>
  import API from "../api/index";
  export default {
    name: "",
    data() {
      return {
        confirmBtnTxt:'确定',
        step:1,
        moneyTypeList:[
          {
            icon:'icon-money-ETH',
            name:'ETH以太坊',
            type:'ETH'
          },
          {
            icon:'icon-money-BTC',
            name:'BTC 比特币',
            type:'BTC'
          },
          {
            icon:'icon-money-LTC',
            name:'LTC莱特币',
            type:'LTC'
          }
        ],
        payTypeList:[
          {
            icon:'icon-money-payMoney',
            name:'支付宝',
            type:'pay'
          },
          {
            icon:'icon-money-unionMoney',
            name:'银行卡',
            type:'union'
          }
        ],
        item:{},
        changeMoney:0.1,
        moneyType:'',
        payType:'',
        martMoney:'',
        userWalletAddress:'',
        validateCode:'',
        martData:{}
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
          return (this.martMoney*this.changeMoney).toFixed(2)
        }
        
      }
    },
    created() {
    },
    
    mounted() {
    },
    methods:{
//      获取数据
      getPrice:function () {
        var _this=this;
        API.getPrice({
          coinType:_this.moneyType.type
        }).then(function (data) {
          _this.martMoney=data;
          _this.$refs.refreshPrice.style.pointerEvents='';
        }).catch(function (err) {
          alert(err.msg||'网络异常')
          _this.$refs.refreshPrice.style.pointerEvents='';
        })
      },
      //点击事件操作
      next:function (item) {
        if(!this.moneyType){
          alert('请选择要兑换的币种');
          return;
        }
        if(!this.payType){
          alert('请选择支付方式');
          return;
        }
        this.step++;
        this.item=item;
        if(this.step==2){
          this.getPrice();
        }
      },
      pre:function () {
        this.step--;
        this.item=new Object()
      },
      confirm:function () {
        var _this=this;
        if(!_this.martMoney){
          alert('请重新获取交易价格');
          return
        }
        if(!_this.userWalletAddress){
          alert('请重新输入钱包地址');
          return
        }
        if(!_this.validateCode){
          alert('请重新输入验证码');
          return
        }
        _this.$refs.confirmBtn.style.pointerEvents='none';
        _this.confirmBtnTxt='确定中'
       /* console.log(API.saleBTC({
          count:_this.changeMoney,
          price:_this.martMoney,
          userWalletAddress:_this.userWalletAddress,
          validateCode:_this.validateCode
        }))*/
        API.saleBTC({
          count:_this.changeMoney,
          price:_this.martMoney,
          userWalletAddress:_this.userWalletAddress,
          validateCode:_this.validateCode
        }).then(function (data) {
          _this.confirmBtnTxt='确定'
          _this.$refs.confirmBtn.style.pointerEvents='';
          _this.martData=Object.assign({},data)
          _this.next()
        }).catch(function (err) {
          _this.confirmBtnTxt='确定'
          _this.$refs.confirmBtn.style.pointerEvents='';
          alert('交易失败，请重新确定')
        })
       
      },
      reStart:function () {
        this.step=1;
      },
      selectMoneyType:function (item) {
        this.moneyType=item;
      },
      selectPayType:function (item) {
        this.payType=item
      },
      refreshPrice:function () {
        this.$refs.refreshPrice.style.pointerEvents='none';
        this.getPrice();
      }
    }
  };
</script>
