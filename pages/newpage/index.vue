<template>
	<view class="container">
		<view class="box">
			<view class="boximg">
				<image class="img1" src="../../static/img/1.png" @touchstart="touchStart" @touchmove="touchmove"></image>
				<image class="img2" src="../../static/img/1.png"></image>
				<image class="img3" src="../../static/img/1.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				
			}
		},
		methods: {
			touchStart(e){
				var curTouch=e.touches[0];
				this.startLeft=curTouch.clientX-this.left;
				this.startTop=curTouch.clientY-this.top;
			},
			touchmove(e){
				var curTouch=e.touches[0];
				this.left=curTouch.clientX-this.startLeft;
				this.top=curTouch.clientY-this.startTop;
			}

		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	.container {
		width: 100vw;
		height: 100vh;
		background-image: linear-gradient(to bottom, #a8edea 0%, #fed6e3 100%)
	}
	.box {
		width: 750rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.boximg {
		margin-top: 100rpx;
		width: 640rpx;
		height: 700rpx;
		position: relative;
	}
	.img1 {
		width: 640rpx;
		height: 640rpx;
		position: absolute;
		z-index: 100;
	}
	.img2 {
		width: 640rpx;
		height: 640rpx;
		transform: scale(0.9);
		position: absolute;
		bottom: -18rpx;
		z-index: 99;
	}
	.img3 {
		width: 640rpx;
		height: 640rpx;
		transform: scale(0.8);
		position: absolute;
		bottom: -90rpx;
		z-index: 98;
	}
</style>
