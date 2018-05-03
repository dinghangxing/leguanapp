<template>
	<div id="index">
		<index-header></index-header>
		<router-view></router-view>
	</div>
</template>

<script>
import IndexHeader from "../../components/index/Header"
export default{
	name:"index",
	methods: {
	  handleChange(index) {
	   
	  }
	},
	components:{
		IndexHeader
	}
}
	
</script>

<style>	

</style>