<template>
	<view class="container">
		<image src="../../static/images/common/bg.jpg" style="width: 100vw; height: 100vh; position: absolute; left: 0; top: 0;" mode="aspectFill"></image>
		<view class="sp" id="stage"></view>
	</view>
</template>

<script>
	import {Scene, Sprite} from 'spritejs'
	export default {
		data() {
			return {
				winW:null,
				winH: null,
				swidth:null,
				sheight: null,
				hair: null,
				scene:null,
				layer:null,
				displayRatio:1, //像素比
				scale:0.5
			}
		},
		onLoad() {
			
		},
		async onReady() {
			let winfo = await this.getWindowInfo()
			let i = await this.init()
			let pre = await this.preloadTexture('static/images/loading/cover.png')
			this.drawInit()
		},
		async onShow() {
			
		},
		methods: {
			init(){
				// const {Scene, Sprite} = Spritejs;
				return new Promise((resolve, reject) => {
					const container = document.getElementById('stage');
					const scene = new Scene({container, width: 375, height: 812, mode:'stickyHeight' });
					console.log(scene)
					this.displayRatio = scene.displayRatio
					this.swidth = scene.width
					this.sheight = scene.height
					this.scene = scene
					const layer = scene.layer()
					this.layer = layer ;
					resolve(scene)
				})
			},
			drawInit(){
				const robot = new Sprite('static/images/loading/cover.png');
				console.log(robot.contentSize)
				let oldwidth = robot.contentSize[0]
				let oldheight = robot.contentSize[1]
				console.log(this.winW)
				robot.attr({
					anchor: [0, 0],
					scale: [this.scale],
					pos: [(this.winW - 540 * this.scale) / 2,90],
				});
				this.layer.append(robot);
				
				const hair = new Sprite('static/images/loading/hair-1.png')
				this.hair = hair
				hair.attr({
					size: [540,1128],
					anchor: [0, 0],
					scale: [0.5,0.5],
					pos: [(this.winW - 540 * 0.5) / 2, 94],
				})
				this.layer.append(hair);
				this.robotMotion()
			},
			robotMotion() {
			    this.hair.animate([
					{texture: 'static/images/loading/hair-1.png'},
					{texture: 'static/images/loading/hair-2.png'},
					{texture: 'static/images/loading/hair-3.png'},
					{texture: 'static/images/loading/hair-1.png'},
			    ], {
			      duration: 2000,
			      easing: 'step-end',
			      fill: 'forwards',
				  iterations: Infinity,
			    });
				// let img = 0
				// this.setInter = setInterval(() => {
				// 	this.hair.attr({
				// 		texture: `static/images/loading/hair-${(img++) % 3 + 1}.png`
				// 	})
				// },500)
				// this.hair.transition(2.0).attr({
				// 	texture: 'static/images/loading/hair-1.png',
				// });
				// this.layer.append(this.hair);
			},
			/** 
			 * 异步预加载图片资源
			 * */
			preloadTexture(src) {
					let scene = this.scene
					let id = src // id直接使用src进行命名，多个scene之间可以共用图片缓存
					return scene.preload({
						id,
						src,
					}).then(() => {
						return id
					})
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
							if(res.windowWidth > this.winW) {
								this.init()
							}
							resolve(res)
						}
					});
				})
			
			},
		}
	}
</script>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.sp {
		width: 750rpx;
		height: 100vh;
		
	}
</style>
