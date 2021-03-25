<template>
	<view>
		<view id="canvas"></view>
	</view>
</template>

<script>
	import * as PIXI from 'pixi.js'

	export default {
		data() {
			return {
				wid: null,
				winW: null,
				winH: null,
				app:null,
			}
		},
		async onReady() {
			let wInfo = await this.getWindowInfo()
			this.init()
		},
		methods: {
			init() {
				let app = new PIXI.Application({
					width: this.winW,
					height: this.winH,
				});
				document.getElementById('canvas').appendChild(app.view);
				// 0xe9896a === #e9896a
				app.renderer.backgroundColor = 0xe9896a;
				this.app = app
				this.createSprit()
			},
			/**
			  * 
			  * 
			  * 
			  * */
			createSprit(){
				let img = new Image()
				img.src = 'static/images/loading/cover.png'
				// img.onload = () => {
				// 	let cover = PIXI.Sprite.from(img)
				// 	cover.scale.set(0.5,0.5)
				// 	cover.x = (this.winW - img.width*0.5) / 2 
				// 	cover.y = 80
				// 	cover.interactive = true;
				// 	cover.on('click',() => {
				// 		console.log('click')
				// 	})
				// 	this.app.stage.addChild(cover);
				// }
				let cover = PIXI.Sprite.from(img)
				// cover.anchor.set(1,1)
				console.log(cover)
				cover.scale.set(0.5,0.5)
				cover.x = (this.winW - img.width*0.5) / 2 
				cover.y = 80
				cover.zIndex = 120
				cover.interactive = true;
				cover.buttonMode = true
				cover.on('click', () => {
					console.log('click')
					cover.alpha= 0.5
				})
				this.app.stage.addChild(cover);
			},
			getWindowInfo() {
				return new Promise((resolve, reject) => {
					//首先获取屏幕宽度
					let device = uni.getSystemInfo({
						success: (res) => {
							console.log(res)
							let width = res.windowWidth;
							//然后需要确定比例，设计图一般都是750的屏幕，这里是375px
							let wid = width / 375
							this.wid = wid
							this.winW = res.windowWidth
							this.winH = res.windowHeight
							resolve(res)
						}
					});
				})

			},
		}
	}
</script>

<style>

</style>
