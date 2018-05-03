<template>
	<div id="main">
		<main-top></main-top>
		
		<div class="mainBox">
			<router-view></router-view>
		</div>
		
		
		<main-bottom></main-bottom>
	</div>
</template>

<script>
import MainBottom from "./../../components/main/Bottom"
import MainTop from "./../../components/main/MainTop"
export default{
	components:{
		MainBottom,MainTop
	},
	data(){
		return {
			selected:"tab1"
		}
	}
}
</script>

<style>

</style>