<template>
	<view style="width: 750rpx;height: 1624rpx; position: relative;">
		<canvas canvas-id="foo" id="foo" width='375' height='812' type='2d' style="width: 750rpx;height: 1624rpx; position: absolute; left: 0; top: 0;"></canvas>
		<canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
		},
		onReady() {
			// this.create()
			// this.create2()
			// this.create3()
			// this.create4()
			this.create5()
		},
		methods: {
			create5(){
				var ctx = uni.createCanvasContext('foo')
				ctx.setFillStyle('red')
				ctx.fillRect(0, 0, 150, 200)
				ctx.setFillStyle('blue')
				ctx.fillRect(150, 0, 150, 200)
				ctx.clearRect(10, 10, 150, 75)
				ctx.draw()
			},
			create4(){
				var ctx = uni.createCanvasContext('foo')
				ctx.setFillStyle('#4CD964')
				ctx.fillRect(50, 50, 100, 100)
				
				let timeout = setTimeout(()=>{
					ctx.save()
					ctx.translate(150, 50, 100, 100)
					ctx.fillRect(50, 50, 100, 100)
					ctx.restore()
					ctx.draw(true)
				},1000)
				ctx.draw()
			},
			
			create(){
				var ctx = uni.createCanvasContext('foo')
					ctx.setFillStyle('rgb(200,0,0)')
					ctx.fillRect (10, 10, 55, 50);

					ctx.setFillStyle('rgba(0, 0, 200, 0.5)')
					ctx.fillRect (30, 30, 55, 50);
					ctx.draw()
			},
			
			create2(){
				var context = uni.createCanvasContext('firstCanvas')
				
				context.setStrokeStyle("#00ff00")
				context.setLineWidth(5)
				context.rect(0, 0, 200, 200)
				context.stroke()
				context.setStrokeStyle("#ff0000")
				context.setLineWidth(2)
				context.moveTo(160, 100)
				context.arc(100, 100, 60, 0, 2 * Math.PI, true)
				context.moveTo(140, 100)
				context.arc(100, 100, 40, 0, Math.PI, false)
				context.moveTo(85, 80)
				context.arc(80, 80, 5, 0, 2 * Math.PI, true)
				context.moveTo(125, 80)
				context.arc(120, 80, 5, 0, 2 * Math.PI, true)
				context.stroke()
				context.draw()
			},
			
			create3(){
				var ctx = uni.createCanvasContext('foo')
					ctx.fillRect(0,0,150,150);   // 使用默认设置绘制一个矩形
					ctx.save();                  // 保存默认状态
						ctx.setFillStyle('#09F')     // 在原有配置基础上对颜色做改变
						ctx.fillRect(15,15,120,120); // 使用新的设置绘制一个矩形
						ctx.save();                  // 保存当前状态
							ctx.setFillStyle('#FFF')    // 再次改变颜色配置
							ctx.globalAlpha = 0.5;
							ctx.fillRect(30,30,90,90);   // 使用新的配置绘制一个矩形
						ctx.restore();               // 重新加载之前的颜色状态
						ctx.fillRect(45,45,60,60);   // 使用上一次的配置绘制一个矩形
					ctx.restore();               // 加载默认颜色配置
					ctx.fillRect(60,60,30,30);   // 使用加载的配置绘制一个矩形
					  
					ctx.draw()
			}
		}
	}
</script>

<style>

</style>
