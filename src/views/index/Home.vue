<template>
	<div class="page-swipe">
		<mt-swipe :auto="4000" :prevent="true">
		  <mt-swipe-item class="slide1 ">1</mt-swipe-item>
		  <mt-swipe-item class="slide2 ">2</mt-swipe-item>
		  <mt-swipe-item class="slide3 ">3</mt-swipe-item>
		</mt-swipe>
		<div class="">
			我是首页
			<div class="">
				<input type="text" v-model="searchCont" placeholder="请输入搜索内容" />
				<input type="button" value="搜索" @click="searchFunc">
			</div>
		</div>
	</div>
</template>

<script>
import { getSearchCont } from "api/baidu";
export default {
	data(){
		return {
			searchCont:""
		}
	},
	methods:{
		searchFunc(){
			getSearchCont(this.searchCont).then((res)=>{
				console.log(res);
			}).catch((err)=>{
				console.log(err);
			})
		}
	}
}
	
	
</script>

<style>
.page-swipe{margin-top:10px;}
.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
    line-height: 200px;
}
.page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}
</style>