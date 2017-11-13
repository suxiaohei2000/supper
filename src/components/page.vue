<template>
  <ul class="pagination" >
    <li v-if="currentPage != 1" @click="currentPage-- && goto(currentPage)" ><a href="#"><i class="fa fa-angle-left"></i></a></li>
    <li v-else class="page_disabled" ><a href="javascript:void 0"><i class="fa fa-angle-left"></i></a></li>
    <li v-for="index in pages" @click="goto(index)" :class="{'active':currentPage == index}" :key="index">
      <a href="#" >{{index}}</a>
    </li>
    <li v-if="totalPage != currentPage && totalPage != 0 " @click="currentPage++ && goto(currentPage++)"><a href="#" ><i class="fa fa-angle-right"></i></a></li>
    <li v-else class="page_disabled"><a href="javascript:void 0" ><i class="fa fa-angle-right"></i></a></li>
  </ul>
</template>
<style lang="less" scroped>
  a{
    text-decoration:none;
  }
  .pagination {
    position: relative;
    display: inline-block;
    li{
      display: inline-block;
      margin:0 5px;
      border-radius: 4px;
      a{
        min-width:32px;
        height:32px;
        line-height: 30px;
        display:inline-block;
        border:1px solid #ddd;
        background:#fff;
        color:#2d8cf0;
        border-radius: 4px;
        transition: border .2s ease-in-out,color .2s ease-in-out;
        text-align: center;
        
        
      }
      &:not(.page_disabled) a:hover{
        border:1px solid #2d8cf0;
      }
      &.page_disabled{
        a{
          cursor: not-allowed;
          
        }
    
      }
      &.active a{
        background:#2d8cf0;
        color:#fff !important;
        border:1px solid #2d8cf0;
      }
      &.page_disabled{
        background:#e3e3e3;
        
        a{
          color:#ddd !important;
        }
      }
    }
    
  }
</style>
<script>
	export default {
		name: '',
		data() {
			return {
        currentPage:1,
      }
		},
		props:{
      totalPage:{
        type:Number,
        default:1
      },
      prePageNumber:{
        type:Number,
        default:10
      },
      getList:{
        type:Function,
        default:function () {
        }
      }
    },
		created() {
		},
		
		mounted() {
		},
    computed:{
      pages:function(){
        var pag = [];
        if( this.currentPage < this.prePageNumber ){ //如果当前的激活的项 小于要显示的条数
          //总页数和要显示的条数那个大就显示多少条
          var i = Math.min(this.prePageNumber,this.totalPage);
          while(i){
            pag.unshift(i--);
          }
        }else{ //当前页数大于显示页数了
          var middle = this.currentPage - Math.floor(this.prePageNumber / 2 ),//从哪里开始
            i = this.prePageNumber;
          if( middle >  (this.totalPage - this.prePageNumber)  ){
            middle = (this.totalPage - this.prePageNumber) + 1
          }
          while(i--){
            pag.push( middle++ );
          }
        }
        return pag
      }
    },
    methods:{
      goto:function(index){
        if(index == this.currentPage) return;
        this.currentPage = index;
        this.getList(index,this.prePageNumber)
      }
    }
	}
</script>
