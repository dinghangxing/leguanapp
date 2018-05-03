<template>
	<div class="">
		<mt-tabbar v-model="selected" fixed>
		  <mt-tab-item id="tab1">
		    <img slot="icon" src="../../assets/logo.png">
		   	 个人中心
		  </mt-tab-item>
		  <mt-tab-item id="tab2">
		    <img slot="icon" src="../../assets/logo.png">
		          十万爆文
		  </mt-tab-item>
		  <mt-tab-item id="tab3">
		    <img slot="icon" src="../../assets/logo.png">
		          标题大师
		  </mt-tab-item>
		</mt-tabbar>
		<div class="bottomSeat">
			
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			selected:"tab1"
		}
	}
}
	
</script>

<style>
.bottomSeat{height:55px;}
</style>