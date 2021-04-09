<template>
	<view style="width: 750rpx;height: 1624rpx; position: relative;" id="card-canvas-content">
		<!-- <canvas canvas-id="foo" id="foo" width='375' height='812' type='2d' style="width: 750rpx;height: 1624rpx; position: absolute; left: 0; top: 0;"></canvas> -->
		<!-- <canvas style="width: 300px; height: 200px;" canvas-id="firstCanvas" id="firstCanvas"></canvas> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wid: null,
				winW: null,
				winH: null,
				ctx6: null,
			}
		},
		onLoad() {

		},
		async onReady() {
			// this.create()
			// this.create2()
			// this.create3()
			// this.create4()
			// this.create5()
			let val = await this.getWindowInfo() // 获取窗口 信息
			console.log("widW", this.winW)
			this.create6()
			// this.create7()
		},
		methods: {
			create7() {
				let sty = "width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0; opacity: 1;"
				let element = {
					tagName: 'canvas', //节点标签名
					props: { //dom的属性，用一个对象存储键值对
						id: 'card-canvas',
						'canvas-id': "card-canvas",
						"width": this.winW,
						"height": this.winH
					},
					style: sty
				}
				let ctx = uni.createCanvasContext('card-canvas')
				console.log(ctx)
			},
			create6() {
				var cardContent = document.getElementById('card-canvas-content');
				var cardCanvas = document.createElement('canvas');
				cardCanvas.setAttribute("id", "card-canvas")
				cardCanvas.setAttribute("canvas-id", "card-canvas")
				let sty = "width: 750rpx; height: 1624rpx; position: absolute; left: 0; top: 0; opacity: 1;"
				cardCanvas.setAttribute("style", sty)
				cardCanvas.setAttribute("width", this.winW)
				cardCanvas.setAttribute("height", this.winH)
				cardContent.appendChild(cardCanvas)

				setTimeout(() => {
					console.log(45464)
					// let ctx = uni.createCanvasContext('card-canvas')
					// this.ctx6 = ctx
					this.init()
				}, 1000)
			},
			init() {
				// this.ctx6.setFillStyle('red')
				// this.ctx6.fillRect(0, 0, 150, 200)
				// this.ctx6.draw()
				// var canvas = new fabric.Canvas('card-canvas');
				// var rect = new fabric.Rect({
				// 	top: 50,
				// 	left: 100,
				// 	width: 100,
				// 	height: 70,
				// 	fill: 'red'
				// });
				// canvas.add(rect);

				// /*  */
				// let select = fabric.Image.fromURL('../../static/images/question/1/1-1.png', function(oImg) {
				// 	oImg.scale(0.5); //图片缩小10倍
				// 	oImg.on('selected', function() { //选中监听事件
				// 		console.log('selected a rectangle');
				// 	});
				// 	canvas.add(oImg);
				// });
				// let select1 = fabric.Image.fromURL('../../static/images/question/1/2-1.png', function(oImg1) {
				// 	oImg1.scale(0.5); //图片缩小10倍
				// 	oImg1.on('selected', function() { //选中监听事件
				// 		console.log('selected1 a rectangle');
				// 	});
				// 	canvas.add(oImg1);
				// });
				// let select2 = fabric.Image.fromURL('../../static/images/question/1/3-1.png', function(oImg2) {
				// 	oImg2.scale(0.5); //图片缩小10倍
				// 	oImg2.on('selected', function() { //选中监听事件
				// 		console.log('selected2 a rectangle');
				// 	});
				// 	canvas.add(oImg2);
				// });

				/*  */
				// var imgInstance = new fabric.Image('../../static/images/question/1/1-1.png', { //设置图片位置和样子
				// 	left: 0,
				// 	top: 0,
				// 	width: 200,
				// 	height: 100,
				// 	angle: 30 //设置图形顺时针旋转角度
				// });
				// imgInstance.on('selected', function() { //选中监听事件
				// 	console.log('selected a rectangle');
				// });
				// canvas.add(imgInstance);

			},
			create5() {
				var ctx = uni.createCanvasContext('foo')
				ctx.setFillStyle('red')
				ctx.fillRect(0, 0, 150, 200)
				ctx.setFillStyle('blue')
				ctx.fillRect(150, 0, 150, 200)
				ctx.clearRect(10, 10, 150, 75)
				ctx.draw()
			},
			create4() {
				var ctx = uni.createCanvasContext('foo')
				ctx.setFillStyle('#4CD964')
				ctx.fillRect(50, 50, 100, 100)

				let timeout = setTimeout(() => {
					ctx.save()
					ctx.translate(150, 50, 100, 100)
					ctx.fillRect(50, 50, 100, 100)
					ctx.restore()
					ctx.draw(true)
				}, 1000)
				ctx.draw()
			},

			create() {
				var ctx = uni.createCanvasContext('foo')
				ctx.setFillStyle('rgb(200,0,0)')
				ctx.fillRect(10, 10, 55, 50);

				ctx.setFillStyle('rgba(0, 0, 200, 0.5)')
				ctx.fillRect(30, 30, 55, 50);
				ctx.draw()
			},

			create2() {
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

			create3() {
				var ctx = uni.createCanvasContext('foo')
				ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
				ctx.save(); // 保存默认状态
				ctx.setFillStyle('#09F') // 在原有配置基础上对颜色做改变
				ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
				ctx.save(); // 保存当前状态
				ctx.setFillStyle('#FFF') // 再次改变颜色配置
				ctx.globalAlpha = 0.5;
				ctx.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形
				ctx.restore(); // 重新加载之前的颜色状态
				ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形
				ctx.restore(); // 加载默认颜色配置
				ctx.fillRect(60, 60, 30, 30); // 使用加载的配置绘制一个矩形

				ctx.draw()
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
