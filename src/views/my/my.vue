<template>
	<div class="my-container">
	  <nav class="my-nav">
      <keep-alive>
        <router-view name="nav"></router-view>
      </keep-alive>
      
    </nav>
    <div class="my-content">
      <router-view ></router-view>
    </div>
	</div>
</template>
<style lang="less" scroped>
  .my-container{
    width: 1200px;
    margin:auto;
    position: relative;
    .my-nav{
      width: 250px;
      position: absolute;
      left:0;
      top:20px;
    }
    .my-content{
      width: 100%;
      padding:  20px 0 20px 280px;
      min-height:500px;
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
		  var router=this.$router;
		  if(router.name=='my'){
        router.replace('/#/my/profile');
      }
     
		}
	}
</script>
