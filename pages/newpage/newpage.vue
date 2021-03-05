<template>
	<view class="content">
		<view class="head">
			<view class="swiper_first">
				<swiper class="swiper" style="height:100vh" 
				:vertical="vertical" 
				:autoplay="autoplay" 
				:interval="interval" 
				:duration="duration" >
					<swiper-item>
						<view class="item" style="height:100vh">
							<image src="../../images/sb1.jpg" class="item_1_img" mode="aspectFill"></image>
						</view>
						<view class="bot">
							<image src="../../images/bot-arrow.png" class="bot_arrow"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="item" style="height: 100vh;">
							<image src="../../images/p1.jpg" class="item_1_img" mode="aspectFill"></image>
						</view>
						<view class="hov">
							<image src="../../images/jl.png" class="hov_img"></image>
						</view>
						<view class="bot">
							<image src="../../images/bot-arrow.png" class="bot_arrow"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="item" style="height: 100vh;">
							<image src="../../images/sb1.jpg" class="item_1_img" mode="aspectFill"></image>
						</view>
						<view class="hov">
							<image src="../../images/jl.png" class="hov_img"></image>
						</view>
						<view class="bot">
							<image src="../../images/bot-arrow.png" class="bot_arrow"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="item believe" style="height: 100vh;">
							<view class="top-nav"></view>
							<view class="center-ce">
								<view class="center-ce-left">
									<view class="left-up">
										<image src="../../images/channel/1.png" mode="aspectFill"></image>
									</view>
									<view class="left-down">
										<image src="../../images/jl.png"></image>
									</view>
								</view>
								<view class="center-ce-right"></view>
							</view>
							<view class="bottom-arrow"></view>
						</view>
						<view class="bot">
							<image src="../../images/bot-arrow.png" class="bot_arrow"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="item" style="height:100vh; position: relative;">
							<view class="kole">
								<text class="f_1">可口可乐{{textarea}}</text>
							</view>
							<view class="imgbg">
								<image class="bg" src="../../images/w3.png" mode="aspectFill"></image>
								<view class="create">生成海报</view>
							</view>
							<view class="text-area">
								<view class="areabox">
									<view class="intext">可口可乐</view>
									<textarea class="textarea" v-model="textarea"></textarea>
									<!-- <view class="create">生成海报</view> -->
								</view>
							</view>
							<!-- <view class="create">生成海报</view> -->
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vertical: true,
				autoplay: false,
				interval: 2000,
				duration: 300,
				screenHeight:'100vh',
				textarea:''
			}
		},
		onLoad() {
			
		},
		onShow() {
			
		},
		onReady() {
			this.getViewHeight()
		},
		methods: {
			getViewHeight(){
				uni.getSystemInfo({
					success(res) {
						// console.log(res)
						this.screenHeight = res.screenHeight*2 + 'rpx'
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	textarea:focus, input:focus{
	    outline: none;
	}
	.content {
		background: black;
		margin: 0;
		padding: 0;
	}
	.swiper {
		font-size: 18px;
		
	}
	.swiper_first {
		width: 100%;
		background: black;
	}
	.item {
		background-color: #9d1f2a;
	}
	
	.item_1_img {
		width: 100%;
		height: 100vh;
	}
	.hov {
		position: absolute;
		left: 0;
		top: 500rpx;
		width: 70rpx;
		height: 238rpx;
		.hov_img {
			width: 70rpx;
			height: 238rpx;
		}
	}
	
	.bot {
		width: 100%;
		position: absolute;
		bottom: 0;
		display: flex;
		height: 80rpx;
		align-items: center;
		justify-content: center;
		.bot_arrow {
			width: 70rpx;
			height: 40rpx;
		}
	}
	
	.believe {
		display: flex;
		flex-direction: column;
		.top-nav {
			height: 100rpx;
			background-color: black;
		}
		.center-ce {
			flex: 1;
			display: flex;
			flex-direction: row;
			.center-ce-left {
				width: 80rpx;
				background-color: black;
				display: flex;
				flex-direction: column;
				.left-up {
					flex: 1;
					width: 80rpx;
				}
				.left-up image {
					margin-top: 50rpx;
					width: 80rpx;
					height: 400rpx;
				}
				.left-down {
					display: flex;
					flex: 1;
					width: 80rpx;
					align-items: center;
					justify-content: center;
				}
				.left-down image {
					width: 70rpx;
					height: 238rpx;
				}
			}
			.center-ce-right {
				flex: 1;
			}
		}
		.bottom-arrow {
			height: 100rpx;
			background-color: black;
		}
		
	}
	
	.kole {
		width: 690rpx;
		padding: 300rpx 30rpx 30rpx 30rpx;
		.f_1 {
			font-size: 30px;
			font-weight: bold;
			color: white;
		}
	}
	.imgbg {
		position: absolute;
		width: 550rpx;
		height: 720rpx;
		left: 100rpx;
		.bg {
			width: 550rpx;
			height: 720rpx;
		}
	}
	.text-area {
		width: 550rpx;
		padding: 0 100rpx;
		margin-top: 160rpx;
		.areabox{
			position: relative;
			.textarea {
				width: 510rpx;
				background-color: rgba(255,255,255,0.5);
				height: 200rpx;
				text-indent: 80px;
				font-size: 16px;
				line-height: 1.5;
				color: white;
				padding: 20rpx;
			}
			.intext {
				position: absolute;
				left: 20rpx;
				top: 20rpx;
				color: white;
				line-height: 1.5;
				font-size: 16px;
				display: block;
			}
		}
		
	}
	
	.create {
		width: 550rpx;
		// margin: 0 100rpx;
		text-align: center;
		color: #9d1f2a;
		// background-color: white;
		position: absolute;
		bottom: 0;
		line-height: 1.8;
		letter-spacing:20rpx;
		font-weight: bold;
		font: 32px;
	}
</style>
