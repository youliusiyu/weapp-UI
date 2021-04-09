<template>
	<view>
		<div id="app">
			<form-create :rule="rule" v-model="fApi" :options="options" @submit="onSubmit" />
		</div>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				fApi:{},
				options:{
					onSubmit:(formData)=>{
						console.log(1)
						alert(JSON.stringify(formData))
						console.log(this.fApi.form)
					}
				},
				rule:[
					{type:'input', field:'field1',title:'field1',value:'432', emit:['change'],},
				]
			}
			
		},
		onLoad() {
			this.fApi = formCreate(this.rule,this.options)
			// vm.$formCreate(rule,option)
			this.fApi.on('prefix1-change',this.change)
			console.log(this.fApi)
		},
		methods: {
			submit() {
				
			},
			change(){
				// alert(`change!![${this.fApi.getValue('inputField')}]`)
				console.log(`change!![${this.fApi.getValue('field1')}]`)
			},
			onSubmit(formData){
				alert(JSON.stringify(formData))
				console.log(this.fApi.form)
			}
		}
	}
</script>

<style>
	#app {
		padding: 32px;
	}
</style>
