<template>
	<view class="box">
		<image src="../../static/images/common/bg.jpg" style="width: 750rpx; height: 1624rpx;"></image>
		<block v-if="isShow1">
			<canvas canvas-id="eason" id="eason" width='375' type='2d' height='812' style="width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0;"
			@touchstart="touchstart"></canvas>
			<canvas canvas-id="note" id="note" width='375' type='2d' height='812' style="width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0;"
			@touchstart="touchstart"></canvas>
		</block>
		<block>
			<canvas canvas-id="center" id="center" width='375' type='2d' height='812' style="width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0;"
			@touchstart="touchstart1"></canvas>
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
				setint:null, // 定时器
				setint2:null, // 定时器
				isShow1:false
			}
		},
		onReady() {
			// this.cerateCTX()
			// this.cerateCTX2()
			this.cerateCTX3()
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
				ctx3.drawImage('/static/images/index/title-1.png', 375-227 , 720, 454, 332)
				ctx3.restore()
				ctx3.draw()
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
</style>
