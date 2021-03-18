<template>
	<view class="box">
		<image src="../../static/images/common/bg.jpg" style="width: 750rpx; height: 1624rpx;"></image>
		<block v-if="isShow1">
			<canvas canvas-id="eason" id="eason" width='375' type='2d' height='812' style="width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0;"
			@touchstart="touchstart"></canvas>
			<canvas canvas-id="note" id="note" width='375' type='2d' height='812' style="width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0;"
			@touchstart="touchstart"></canvas>
		</block>
		<block v-if="isShow2">
			<canvas :animation="animationData" canvas-id="center" id="center" width='375' type='2d' height='812' style="width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0; opacity: 1;"></canvas>
			<input :animation="animationData" class="input" placeholder="在此输入您的名字" placeholder-class="input-pl" v-model="name" />
			<image :animation="animationData" :src="entbtn" class="enterbtn" @click="touchstart1"></image>
		</block>
		<block >
			<canvas canvas-id="first1" id="first1" width='375' type='2d' height='812' style="width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0; opacity: 1;"></canvas>
			<view :animation="animationData" class="sadimg">
				<image :src="mirimg" class="mirror"></image>
			</view>
			<view class="answer">
				
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ctx:null,
				ctx2:null,
				ctx3:null,
				ctx4:null,
				setint:null, // 定时器
				setint2:null, // 定时器
				isShow1:false,
				name:'',
				entbtn:'../../static/images/index/button-1.png',
				isShow2:false,
				animationData:{},
				isenter:false,
				mirimg:'../../static/images/question/1/mirror-1.png',
				intervalmir:null, // 定时器
			}
		},
		onReady() {
			// this.cerateCTX()
			// this.cerateCTX2()
			// this.cerateCTX3()
			this.cerateCTX4()
		},
		methods: {
			cerateCTX(){
				let ctx = uni.createCanvasContext('eason')
				this.ctx = ctx
				// ctx.drawImage('/static/images/common/bg.jpg', 0, 0, 375, 812)
				ctx.drawImage('/static/images/loading/cover.png', 50, 100, 275, 600)
				ctx.drawImage('/static/images/loading/hair-1.png', 50, 103, 275, 600)
				ctx.drawImage('/static/images/common/pill.png', (375-40)/2, 720, 40, 15)
				let img = 1
				let settime = setTimeout(() => {
					this.setint = setInterval(() => {
						ctx.clearRect(0, 0, 375, 812)
						if(img >= 3){
							img = 1
						} else {
							img++
						}
						ctx.drawImage('/static/images/loading/cover.png', 50, 100, 275, 600)
						ctx.drawImage("/static/images/loading/hair-"+ img +".png", 50, 103, 275, 600)
						ctx.drawImage('/static/images/common/pill.png', (375-40)/2, 720, 40, 15)
						ctx.draw()
					},500)
				},500)
				
				// ctx.drawImage('/static/images/loading/hair-1.png', 50, 103, 275, 600)
				// ctx.drawImage('/static/images/loading/hair-2.png', 50, 103, 275, 600)
				// ctx.drawImage('/static/images/loading/hair-3.png', 50, 103, 275, 600)
				ctx.draw()
			},
			cerateCTX2(){
				let ctx2 = uni.createCanvasContext('note')
				this.ctx2 = ctx2
				let deg = 0
				let is = true
				this.setint2 = setInterval( () => {
					if(is) {
						if(deg > 0.19){
							is = !is
						} else {
							deg =parseFloat((deg + 0.01) .toFixed(2)) 
						}
					}else {
						if(deg > 0){
							deg = parseFloat((deg - 0.01) .toFixed(2)) 
						} else {
							is = !is
						}
					}
					ctx2.save()
					ctx2.translate(260 , 370)
					ctx2.rotate(deg)
					ctx2.drawImage('/static/images/loading/note-1.png', 10 , 10, 46/2, 43/2)
					ctx2.restore()
					
					ctx2.save()
					ctx2.translate(80 , 420)
					ctx2.rotate(deg)
					ctx2.drawImage('/static/images/loading/note-2.png', 10, 10, 31/2, 50/2)
					ctx2.restore()
					ctx2.draw()
				},100)
				// ctx.drawImage('/static/images/loading/note-1.png', 270, 380, 46/2, 43/2)
				// ctx.drawImage('/static/images/loading/note-2.png', 90, 430, 31/2, 50/2)
			},
			cerateCTX3(){
				let ctx3 = uni.createCanvasContext('center')
				this.ctx3 = ctx3
				ctx3.drawImage('/static/images/index/center-00001.png', 0 , 0, 375, 750)
				ctx3.save()
				ctx3.scale(0.5,0.5)
				ctx3.drawImage('/static/images/index/eason-head.png', 375-125  , 300, 250, 380)
				ctx3.drawImage('/static/images/index/eye-1.png', 375-125 , 300, 250, 380)
				ctx3.drawImage('/static/images/index/hair-1.png', 375-125 , 300, 250, 380)
				setTimeout(() => {
					ctx3.save()
					ctx3.scale(0.5,0.5)
					ctx3.drawImage('/static/images/index/title-1.png', 375-227 , 720, 454, 332)
					ctx3.restore()
					ctx3.draw(true)
					// setTimeout(() => {
					// 	ctx3.save()
					// 	ctx3.scale(0.5,0.5)
					// 	ctx3.drawImage('/static/images/index/button-1.png', 375-181 , 1400, 362, 71)
					// 	ctx3.restore()
					// 	ctx3.draw(true)
					// },500)
					this.renderctx3()
				},500)
				ctx3.drawImage('/static/images/index/input-bg.png', 375-227 , 790, 454, 68)
				
				ctx3.restore()
				ctx3.draw()
			},
			renderctx3(){
				let chg = 1
				let eye = 1
				let hair = 1
				let timeInterval3 = setInterval( () => {
					if(chg >= 4){
						chg = 1
					} else {
						chg++
					}
					if(hair >= 3){
						hair = 1
					} else {
						hair++
					}
					if(eye >= 2){
						eye = 1
					} else {
						eye++
					}
					this.ctx3.clearRect(0, 0, 375, 812)
					this.entbtn =`../../static/images/index/button-${chg}.png` //'../../static/images/index/button-3.png' 
					this.ctx3.drawImage(`/static/images/index/center-0000${chg}.png`, 0 , 0, 375, 750)
					this.ctx3.save()
					this.ctx3.scale(0.5,0.5)
					this.ctx3.drawImage('/static/images/index/eason-head.png', 375-125  , 300, 250, 380)
					this.ctx3.drawImage(`/static/images/index/eye-${eye}.png`, 375-125 , 300, 250, 380)
					this.ctx3.drawImage(`/static/images/index/hair-${hair}.png`, 375-125 , 300, 250, 380)
					this.ctx3.drawImage('/static/images/index/title-1.png', 375-227 , 720, 454, 332)
					if(this.name && this.isenter){
						this.ctx3.drawImage('/static/images/index/title-2.png', 375-227 , 720, 454, 332)
						this.ctx3.drawImage('/static/images/index/title-3.png', 375-227 , 720, 454, 332)
					}
					this.ctx3.drawImage('/static/images/index/input-bg.png', 375-227 , 790, 454, 68)
					
					this.ctx3.restore()
					this.ctx3.draw()
				},500)
			},
			cerateCTX4(){
				let ctx4 = uni.createCanvasContext('first1')
				this.ctx4 = ctx4
				// ctx4.drawImage('/static/images/index/eason-head.png', 125, 300, 250, 380)
				let img = 1
				let num = null
				let inte = setInterval( () => {
					// ctx4.clearRect(0,0,375,812)
					// ctx4.draw()
					if(img < 22 ){
						img = img + 1
						if(img < 10){
							num = `0${img}` 
						}else {
							num = `${img}`
						}
						if(img == 22){
							clearInterval(inte)
						}
					}
					ctx4.drawImage(`/static/images/question/1/question-000${num}.png`, 220 , 70, 243/2, 561/2)
					ctx4.draw(true)
				},100)
				// 
				// ctx4.drawImage(`/static/images/question/1/mirror-1.png`, 220 , 70, 406/2, 431/2)
				// mirimg
				setTimeout( () => {
					this.renderctx4()
				},2000)
			},
			renderctx4(){
				var animation = uni.createAnimation({
				  transformOrigin: "50% 50%",
				  duration: 500,
				  timingFunction: "ease-in",
				  delay: 0
				})
				animation.translateX(476/2).step()
				this.animationData = animation
				let img = 1
				this.intervalmir = setInterval( () => {
					if(img >=2){
						img = 1
					} else {
						img++
					}
					this.mirimg = `../../static/images/question/1/mirror-${img}.png`
				},500)
			},
			selectquestion1(){
				// intervalmir
			},
			touchstart(e){
				console.log(e)
				clearInterval(this.setint)
				clearInterval(this.setint2)
				this.ctx.clearRect(0,0,375,812)
				this.ctx.draw()
				this.ctx2.clearRect(0,0,375,812)
				this.ctx2.draw()
				this.isShow1 = false
			},
			touchstart1(e){
				console.log(e)
				var animation = uni.createAnimation({
				  transformOrigin: "50% 50%",
				  duration: 1000,
				  timingFunction: "ease-in",
				  delay: 0
				})
				if(this.name) {
					setTimeout(() => {
						this.ctx3.save()
						this.ctx3.scale(0.5,0.5)
						this.ctx3.drawImage('/static/images/index/title-2.png', 375-227 , 720, 454, 332)
						this.ctx3.restore()
						this.ctx3.draw(true)
						this.isenter = true
						setTimeout(() => {
							this.ctx3.save()
							this.ctx3.scale(0.5,0.5)
							this.ctx3.drawImage('/static/images/index/title-3.png', 375-227 , 720, 454, 332)
							this.ctx3.restore()
							this.ctx3.draw(true)
						},800)
					},500)
					setTimeout(() => {
						
						animation.opacity(0).step()
						this.animationData = animation
					},3000)
					setTimeout(() => {
						this.ctx3.clearRect(0,0,375,812)
						this.ctx3.draw()
						this.isShow2 = false
					},4100)
				}
			}
		}
	}
</script>

<style>
	.box {
		margin: 0;
		padding: 0;
		height: 1624rpx;
		width: 750rpx;
	}
	.input {
		position: absolute;
		left: 148rpx;
		top: 790rpx;
		font-size: 36rpx;
		height: 68rpx;
		width: 454rpx;
		text-align: center;
		opacity:1;
	}
	.input-pl {
		/* color: rgb(117, 96, 71); */
		color: #BDAC9E;
	}
	
	.enterbtn{
		/* ctx3.drawImage('/static/images/index/button-1.png', 375-181 , 1400, 362, 71) */
		width: 362rpx;
		height: 71rpx;
		position: absolute;
		left: 194rpx;
		top: 1400rpx;
		opacity: 1;
	}
	
	
	.sadimg {
		position: absolute;
		width: 406rpx;
		height: 431rpx;
		left: -406rpx;
		top: 460rpx;
	}
	.mirror {
		width: 406rpx;
		height: 431rpx;
	}
</style>
