<template>
	<div class="profile-container">
	  <div class="title">
      修改密码
    </div>
    <div class="profile-content">
      
      <dl>
        <dt>原密码</dt>
        <dd>
          <input type="text" placeholder="请输入原密码" v-model="origPass" ref="origPass">
        </dd>
      </dl>
      <dl>
        <dt>新密码</dt>
        <dd>
          <input type="text" placeholder="请输入新密码" v-model="newPass" ref="newPass">
        </dd>
      </dl>
      <dl>
        <dt>确认密码</dt>
        <dd>
          <input type="text" placeholder="请再次输入密码" v-model="newConfirmPass" ref="newConfirmPass">
        </dd>
      </dl>
    </div>
    <div class="btn-box">
      <div class="btn" ref="saveBtn" @click="changePass">{{btnTxt}}</div>
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
  import API from "../../api";
	export default {
		name: '',
		data() {
			return {
        origPass:'',
        newPass:'',
        newConfirmPass:'',
        btnTxt:'保存',
      }
		},
		
		created() {
		},
		
		mounted() {
		},
    methods:{
		  changePass:function () {
        var _this=this;
        if(!_this.origPass){
          alert('请输入原密码');
            _this.ref.origPass.focus();
            return;
        }
        if(!_this.newPass){
          alert('请输入新密码');
            _this.ref.newPass.focus();
            return;
        }
        if(!_this.newConfirmPass){
          alert('请再次输入新密码');
            _this.ref.newConfirmPass.focus();
            return;
        }
        if(_this.newConfirmPass!=_this.newPass){
          alert('两次输入的密码不一样');
            _this.ref.newConfirmPass.focus();
            return;
        }
        
        _this.refs.saveBtn.style.pointerEvents='none';
        _this.btnTxt='保存中...'
          API.resetPass({
            origPass:_this.origPass,
            newPass:_this.newPass,
            newConfirmPass:_this.newConfirmPass
          }).then(function (data) {
            _this.refs.saveBtn.style.pointerEvents='';
            _this.btnTxt='保存'
            alert('修改密码成功')
          }).catch(function (err) {
            _this.refs.saveBtn.style.pointerEvents='';
            _this.btnTxt='保存'
            alert(err.msg||'网络异常')
          })
      }
    }
	}
</script>
