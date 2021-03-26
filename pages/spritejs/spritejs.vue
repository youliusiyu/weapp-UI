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
			const srcParts = [
			  [0, 0, 190, 268],
			  [0, 269, 190, 268],
			  [191, 0, 190, 268],
			  [191, 269, 190, 268],
			];
			for(let i = 0; i < 2; i++) {
			  for(let j = 0; j < 2; j++) {
			    const sourceRect = srcParts[i * 2 + j];
			    const x = 360 + i * 200;
			    const y = j * 278;
				console.log(sourceRect,x,y)
			  }
			}
		},
		async onReady() {
			let winfo = await this.getWindowInfo()
			let i = await this.init()
			let pre = await this.preloadTexture('static/images/loading/cover.png')
			this.drawBtn()
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
			async drawBtn(){
				const robot1 = new Sprite({
					pos:[0,480],
					size:[750,90],
					scale: [0.5,0.5],
					sourceRect:[0,970 ,750,90],
					texture: 'static/images/question/1/1-1.png',
				});
				const robot2 = new Sprite({
					texture: 'static/images/question/1/2-1.png',
					pos:[0,545],
					size:[750,90],
					scale: [0.5,0.5],
					sourceRect:[0,1090 ,750,90],
				});
				
				const robot3 = new Sprite({
					texture: 'static/images/question/1/3-1.png',
					pos:[0,610], 
					size:[750,90],
					scale: [0.5,0.5],
					sourceRect:[0,1220 ,750,90],
				});
				
				// btn平移
				// robot1.transition(0.5).attr({
				//   x: (x) => x + 750
				// }).then(() => {
				// 	robot2.transition(0.5).attr({
				// 	  x: (x) => x + 750
				// 	}).then(() => {
				// 		robot3.transition(0.5).attr({
				// 		  x: (x) => x + 750
				// 		}).then(() => {
				// 			return true
				// 		})
				// 	})
				// })
				
				robot1.addEventListener('mouseenter', async (e) => {
					console.log('mouseenter1',e)
				})
				robot2.addEventListener('mouseenter', async (e) => {
					console.log('mouseenter2',e)
				})
				robot3.addEventListener('mouseenter', async (e) => {
					console.log('mouseenter3',e)
				})
				this.layer.append(robot1,robot2,robot3);
				
				this.question1(robot1,robot2,robot3)
				// this.question2(robot1,robot2,robot3)
			},
			/**
			 * btn平移
			 * */
			question1(robot1,robot2,robot3){
				robot1.animate([
					{translate: [-750, 0]},
					{translate: [0, 0]},
				], {
				  duration: 500,
				  easing: 'ease-in-out',
				  // direction: 'alternate',
				});
			},
			/**
			 * btn图片重复显示
			 * */
			question2(robot1,robot2,robot3){
				robot1.animate([
					{texture: 'static/images/question/1/1-1.png'},
					{texture: 'static/images/question/1/1-2.png'},
					{texture: 'static/images/question/1/1-3.png'},
					{texture: 'static/images/question/1/1-4.png'},
				], {
				  duration: 400,
				  easing: 'step-end',
				  fill: 'forwards',
				  iterations: Infinity,
				});
				robot2.animate([
					{texture: 'static/images/question/1/2-1.png'},
					{texture: 'static/images/question/1/2-2.png'},
					{texture: 'static/images/question/1/2-3.png'},
					{texture: 'static/images/question/1/2-4.png'},
				], {
				  duration: 400,
				  easing: 'step-end',
				  fill: 'forwards',
				  iterations: Infinity,
				});
				robot3.animate([
					{texture: 'static/images/question/1/3-1.png'},
					{texture: 'static/images/question/1/3-2.png'},
					{texture: 'static/images/question/1/3-3.png'},
					{texture: 'static/images/question/1/3-4.png'},
				], {
				  duration: 400,
				  easing: 'step-end',
				  fill: 'forwards',
				  iterations: Infinity,
				});
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
