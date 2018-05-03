<template>
	<div id="login">
		<div class="logoBox">
			<img src="../../assets/images/LGLogo.png"/>
		</div>
		
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<div class="lodinBtn">
			<mt-button type="primary" size="large">登录</mt-button>
		</div>
		<div class="lodinBtn">
			<mt-button type="default" size="large">注册</mt-button>
		</div>
		
	</div>
</template>

<script>
export default {
	data(){
		return {
			msg:"登录页面",
			phone:"",
			password:""
		}
	}
	
}
</script>

<style scope="scope">
.logoBox{
	text-align:center;
	margin:50px auto;
}
.logoBox img{
	width:50%;
}
.lodinBtn{
	margin-top:15px;
	padding:0 10px;
}
.mint-cell-wrapper{
	background:#fff;
	border-bottom:0.5px solid #d9d9d9;
}
</style>