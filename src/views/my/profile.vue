<template>
	<div class="profile-container">
	  <div class="title">
      基本资料
    </div>
    <div class="profile-content">
      <dl>
        <dt>电子邮件</dt>
        <dd>{{userInfo.userAccount}}</dd>
      </dl>
      <dl>
        <dt>会员ID</dt>
        <dd>{{userInfo.userId}}</dd>
      </dl>
      <dl>
        <dt>昵称</dt>
        <dd>
          <input type="text" placeholder="有钱人">
        </dd>
      </dl>
     <!-- <dl>
        <dt>支付宝账号</dt>
        <dd>
          <input type="text" placeholder="501172013@qq.com">
        </dd>
      </dl>-->
      <dl>
        <dt>注册IP</dt>
        <dd>255.255.255.255</dd>
      </dl>
      <dl>
        <dt>注册时间</dt>
        <dd>{{userInfo.regTime}}</dd>
      </dl>
    </div>
    <div class="btn-box">
      <div class="btn">保存</div>
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
        }
        dd{
          font-size:13px;
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
  import API from '../../api'
	export default {
		name: '',
		data() {
			return {
        userInfo:{}
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
        }).catch(function (err) {
          alert(err.message||'网络错误')
        })
      }
    }
	}
</script>
