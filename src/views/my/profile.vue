<template>
	<div class="profile-container">
	  <div class="title">
      基本资料
    </div>
    <div class="profile-content">
      <dl>
        <dt>电子邮件:</dt>
        <dd>{{userInfo.userAccount}}</dd>
      </dl>
      <dl>
        <dt>会员ID:</dt>
        <dd>{{userInfo.userId}}</dd>
      </dl>
      <dl>
        <dt>支付宝姓名:</dt>
        <dd><input type="text" :placeholder=userInfo.alipayName v-model="userInfo.alipayName"></dd>
      </dl>
      <dl>
        <dt>支付宝帐号:</dt>
        <dd><input type="text" :placeholder=userInfo.alipayAddr v-model="userInfo.alipayAddr"></dd>
      </dl>
      <!--<dl>
        <dt>昵称</dt>
        <dd>
          <input type="text" placeholder="有钱人">
        </dd>
      </dl>-->
     <!-- <dl>
        <dt>支付宝账号</dt>
        <dd>
          <input type="text" placeholder="501172013@qq.com">
        </dd>
      </dl>-->
      <dl>
        <dt>注册IP:</dt>
        <dd>{{userInfo.registerIp}}</dd>
      </dl>
      <dl>
        <dt>注册时间:</dt>
        <dd>{{userInfo.regTime | timeFilter}}</dd>
      </dl>
    </div>
    <div class="btn-box">
      <div class="btn" @click="updateAccount" ref="btn">{{btnTxt}}</div>
    </div>
	</div>
</template>
<style lang="less" scroped>
  .profile-container{
    .title{
      font-size: 18px;
      font-weight: normal;
      padding-bottom:8px;
      line-height: 20px;
      border-bottom:1px solid #E3E3E3;
    }
    .profile-content{
      padding-top:10px;
      dl{
        display: block;
        margin-bottom:15px;
        dt{
          font-size:14px;
          padding-bottom:10px;
          display: inline-block;
          width:75px;
          text-align: right;
        }
        dd{
          display: inline-block;
          font-size:13px;
          margin-left:10px;
          input{
            width: 200px;
            background: #fafbfc;
            border-radius: 3px;
            height:30px;
            line-height: 30px;
            border:1px solid #E3E3E3;
            padding:0 10px;
            &:focus{
              background: #fff;
            }
          }
        }
      }
    }
    .btn-box{
      margin-top:20px;
      .btn {
        height: 30px;
        line-height: 30px;
        border: 1px solid #cad2db;
        color: #171717;
        border-radius: 5px;
        padding: 0 20px;
        cursor: pointer;
        display: inline-block;
        &:hover {
          border-color: transparent;
          background: #43baff;
          color: #fff;
        }
      }
    }
  }
</style>
<script>
  import * as $$ from '../../assets/js/common';
  import API from '../../api'
	export default {
		name: '',
		data() {
			return {
        userInfo:{
          alipayAddr:'',
          alipayName:''
        },
        btnTxt:'保存',
      }
		},
		
		created() {
		},
		
		mounted() {
		  this.getUserInfo();
		},
    methods:{
		  getUserInfo(){
		    var _this=this;
		    API.getUserInfo().then(function (data) {
          _this.userInfo=data||{}
          $$.setCookie('userName',data.userName);
        }).catch(function (err) {
          alert(err.msg||'网络错误')
        })
      },
      updateAccount(){
		    var _this=this;
        this.$refs.btn.style.pointerEvents = "auto";
        _this.btnTxt='保存中...'
        API.updateAccount({
          userName:_this.userInfo.userName,
          alipayAddr:_this.userInfo.alipayAddr,
          phone:_this.userInfo.phone,
          id:_this.userInfo.id,
          alipayName:_this.userInfo.alipayName,
          
        }).then(function (data) {
          alert('保存成功');
          _this.btnTxt='保存';
          this.$refs.btn.style.pointerEvents = "none";
        }).catch(function (err) {
          this.$refs.btn.style.pointerEvents = "none";
          _this.btnTxt='保存'
          alert(err.message||'网络错误')
        })
      }
      
    },
    filters: {
      timeFilter: function (val) {
        return $$.formatDate(val, "YYYY-MM-DD hh:mm:ss");
      }
    }
	}
</script>
