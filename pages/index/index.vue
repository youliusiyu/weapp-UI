<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area" @click="toPage">
			<text class="title">{{title}}</text>
		</view>
		<view class="navtab">
			<view class="list" @click="change" id='0'>怡宝</view>
			<view class="list" @click="change" id='1'>农夫山泉</view>
			<view class="list" @click="change" id='2'>娃哈哈</view>
			<view class="active_line" :style="{transform: active.transform }"></view>
		</view>
		<view class="box">
			<view class="title" :style="{height: h}" style="transition: height 0.3s;" >
				<view class="head" @click="changeH">HEAD 1</view>
				<view class="shou">
					<view class="feng">TO</view>
					<view class="feng">SAY</view>
					<view class="feng">HELLO</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				active:{
					transform: 'translateX(60px) translateX(-50%)'
				},
				h:'50px'
			}
		},
		onLoad() {

		},
		methods: {
			toPage(){
				uni.navigateTo({
					url:'../newpage/newpage'
				})
			},
			change(e){
				console.log(e)
				let id = e.currentTarget.id
				switch(parseInt(id)){
					case 0 :
						this.active.transform = 'translateX(60px) translateX(-50%)'
						break;
					case 1 :
						this.active.transform = 'translateX(180px) translateX(-50%)'
						break;
					case 2 :
						this.active.transform = 'translateX(300px) translateX(-50%)'
						break;
				}
			},
			changeH(){
				if(this.h == '50px'){
					this.h = '200px'
				}else {
					this.h = '50px'
				}
			}
		}
		
	}
</script>

<style>
	.box {
		width: 690rpx;
		padding: 0 30rpx;
		display: flex;
		flex-direction: column;
	}
	.title {
		overflow:hidden;
		/* transition: height 0.3; */
		height: 200px;
		position: relative;
	}
	.head {
		height: 50px;
		border-top: 0.5rpx solid #1989FA;
	}
	.shou {
		width: 100%;
		display: flex;
		flex-direction: column;
		overflow:auto;
	}
	.feng {
		line-height: 2;
		background-color: #f4f5f6;
	}
	.feng:after {
		position: absolute;
		    right: 0;
		    left: 0;
		    height: 1px;
		    content: '';
		    -webkit-transform: scaleY(.5);
		    transform: scaleY(.5);
		    background-color: #c8c7cc;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.navtab {
		width: 720rpx;
		padding: 0 15rpx;
		display: flex;
		flex-direction: row;
		position: relative;
	}
	
	.list {
		position: relative;
		display: flex;
		flex: 1;
		line-height: 2.5;
		align-items: center;
		justify-content: center;
	}
	
	.active_line {
		position: absolute;
		    bottom: 0;
		    z-index: 1;
		    width: 40px;
		    height: 3px;
		    background-color: #ee0a24;
		    border-radius: 3px;
			transition-duration:.3s;
	}
</style>
