<template>
	<div id="header">
		<div class="moreGuide">
			<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
			  <mt-button icon="more" slot="right" @click="toggleHeaderMenu"></mt-button>
			</mt-header>
			<div class="headerGuideList" v-show="showMenuTrue">
		    	<ul>
		    		<li>首页</li>
		    		<router-link tag="li" :to="{name:'Media'}">个人中心</router-link>
		    		<li>十万爆文</li>
		    		<li>标题大师</li>
		    		<li>关于我们</li>
		    		<li>联系我们</li>
		    		<router-link tag="li" :to="{name:'Login'}">登录、注册</router-link>
		    	</ul>
		    </div>
		</div>
		<div class="header-mask" v-show="showMenuTrue" @click="toggleHeaderMenu"></div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			showMenuTrue:false
		}
	},
	methods:{
		toggleHeaderMenu(){
			this.showMenuTrue=!this.showMenuTrue;
		},
	}
}
</script>

<style>
.moreGuide{
	position:relative;
}	
.headerGuideList{
	position: absolute;
    top: 53px;
    right: 10px;
    display: block;
    z-index: 1000;
    border-radius: 4px;
    width: 125px;
    background: rgba(0,0,0,.9);
    color:#fff;
    padding:5px 0;
}
.headerGuideList li{
	line-height: 30px;
	padding:0 10px;
	border-bottom: 1px solid #ccc;
}
.headerGuideList li:last-child{
	border:0;
}	
.headerGuideList:before{
	content:"";
	position: absolute;
    top: -12px;
    right:17px;
    border-left: 12px solid transparent;
    border-bottom: 12px solid #000;
    border-right: 6px solid transparent;
}	

.header-mask{
	position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
}	
</style>