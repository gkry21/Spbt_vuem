<template>
<div>
	<h1>seqsum 페이지</h1>
	<Nav></Nav>
	<ul>
		<input v-model ="first" type="text" />첫번째수
		<input v-model ="second" type="text" />두번째수
	</ul>
	<button @click="sum">+</button>
	<p>합계:{{totalNum}}</p>
</div>
</template>
<script>
import Nav from "@/components/cmm/Nav.vue";
export default {
	name : "seqnum",
	components: {Nav},
	data: function(){
				return{
				totalNum:0,
				first : '',
				second : ''
				}
			}, 
	methods: {
		sum :function(){
			let arr = [Number(this.first),Number(this.second)]
			arr.sort()
			let sum = 0
			let start = Number(arr[0])
			let end = Number(arr[1])+1
			for(let i = start; i<end;i++){
				sum += i
			}
			this.totalNum = sum
		}
	}
}
</script>
<style scoped>
</style>