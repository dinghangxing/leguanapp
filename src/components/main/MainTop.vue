<template>
	<div class="mainTop">
		<mt-header title="个人中心" fixed>
		  <router-link to="/" slot="left">
		    <mt-button icon="back">首页</mt-button>
		  </router-link>
		  <router-link to="/" slot="right">
		    <mt-button>退出登录</mt-button>
		  </router-link>
		</mt-header>
		<div class="mainTopSeat"></div>
	</div>
</template>

<script>
</script>

<style>
.mainTopSeat{
	height:40px;
}
</style>