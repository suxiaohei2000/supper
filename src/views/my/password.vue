<template>
	<div class="profile-container">
	  <div class="title">
      修改密码
    </div>
    <div class="profile-content">
      
      <dl>
        <dt>原密码</dt>
        <dd>
          <input type="text" placeholder="请输入原密码">
        </dd>
      </dl>
      <dl>
        <dt>新密码</dt>
        <dd>
          <input type="text" placeholder="请输入新密码">
        </dd>
      </dl>
      <dl>
        <dt>确认密码</dt>
        <dd>
          <input type="text" placeholder="请再次输入密码">
        </dd>
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
	export default {
		name: '',
		data() {
			return {}
		},
		
		created() {
		},
		
		mounted() {
		}
	}
</script>
