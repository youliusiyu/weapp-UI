<template>
	<view>
		<canvas id="idd11" width="500" height="400"/>
	</view>
</template>

<script>
	import 'script-loader!createjs/builds/1.0.0/createjs.min.js';
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			console.log(createjs)
			this.init()
			
		},
		methods: {
			init(){
			        var canvas = document.getElementById('idd11')
			        var stage = new createjs.Stage(canvas)
			        var text = new createjs.Text("Hello World!", "36px Arial", "#777")
			        text.textAlign = "center"
			        text.x = 100
			        text.y = 0
			        stage.addChild(text)
			        stage.update()
			      },
		}
	}
</script>

<style>

</style>
