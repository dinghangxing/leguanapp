<template>
	<div id="userCenter">
		<div class="userInfoBox">
			<div class="userInfoList">
				<div class="fl">我的账号：13110795526</div>
			</div>
			<div class="userInfoList">
				<div class="fl">我的订单：1 个</div>
				<div class="fr"><router-link tag="div" :to="{name:'MediaOrder'}" class="userCenterBtn">查看</router-link></div>
			</div>
			<div class="userInfoList">
				<div class="fl">我的余额：0 元</div>
				<div class="fr"><div class="userCenterBtn">提现</div></div>
			</div>
			<div class="userInfoList">
				<div class="fl">我的乐币：1314 乐币</div>
				<div class="fr"><div class="userCenterBtn">明细</div></div>
			</div>
		</div>
		<div class="userInfoBox">
			<div class="userInfoList">
				<div class="fl">账号密码</div>
				<div class="fr"><div class="userCenterBtn">修改</div></div>
			</div>
			<div class="userInfoList">
				<div class="fl">绑定手机</div>
				<div class="fr"><div class="userCenterBtn">修改</div></div>
			</div>
			<div class="userInfoList">
				<div class="fl">认证状态</div>
				<div class="fr"><div class="userCenterBtn">认证</div></div>
			</div>
		</div>
		<div class="userInfoBox">
			<div class="userInfoList">
				<div class="fl">每日签到</div>
				<div class="fr"><div class="userCenterBtn">签到</div></div>
			</div>
			<div class="userInfoList">
				<div class="fl">订单广场</div>
				<div class="fr"><div class="userCenterBtn">前往</div></div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
#userCenter{
	font-size:14px;
}
.userInfoBox{
	padding:10px 20px;
	background:#fff;
	margin-bottom:15px;
}
.userInfoList{
	overflow: hidden;
	line-height: 30px;
	margin-bottom: 10px;;
}
.userInfoList:last-child{
	margin:0;
}
.userCenterBtn{
	width:50px;
	height:25px;
	line-height:25px;
	border:1px solid #dedede;
	text-align: center;
}


</style>