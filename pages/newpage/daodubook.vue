<template>
	<view class="container">
		<view class="box">
			<!-- <swiper style="width: 750rpx; height: 1624rpx; scale: (0.8, 0.6);" 
			autoplay="autoplay" vertical="vertical" :previous-margin="prenext" :next-margin="prenext"> -->
			<swiper class="swiper" :class="{swiper_active: isActive}" :previous-margin="prenext" :next-margin="prenext" >
				<swiper-item>
					<view style="display: flex; align-items: center; justify-content: center;">
						<!-- <view class="bookbox" :class="{bookbox_active: isActive }" @click="read">你还好吗</view> -->
						<view class="bookbox" :class="{bookbox_active: isActive }" @click="read">
							<view class="content">
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
								你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗你还好吗
							</view>
							<view class="think">
								<view style="display: flex; flex-direction: row; margin-top: 100rpx;">
									<image style="width: 100rpx; height: 100rpx;" mode="aspectFill"></image>
									<view style="flex: 1;">name</view>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="display: flex; align-items: center; justify-content: center;">
						<view class="bookbox" :class="{bookbox_active: isActive }" @click="read">我很好</view>
					</view>
				</swiper-item>
				<swiper-item>
					<view style="display: flex; align-items: center; justify-content: center;">
						<view class="bookbox" :class="{bookbox_active: isActive }" @click="read">支持</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				autoplay: false,
				vertical: false,
				isActive: false,
				prenext: '40rpx',
			}
		},
		methods:{
			read(){
				if(this.isActive){
					this.isActive = !this.isActive
					this.prenext = '40rpx'
				}else {
					this.isActive = !this.isActive
					this.prenext = '0rpx'
				}
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.container {
		width: 100vw;
		height: 100vh;
		/* background-color: #ccf2f4 #a1cae2 #dbf6e9 #9fd8df; */
		// background-image: linear-gradient(to bottom, #c2e9fb 0%, rgb(172, 224, 249) 100%);
		// background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
		background-image: linear-gradient(to bottom, #a8edea 0%, #fed6e3 100%);
	}
	.swiper {
		width: 750rpx; 
		height: 1000rpx;
		transition: all  0.5s;
	}
	.swiper_active{
		width: 100vw;
		height: 100vh;
		transition: all  0.5s;
	}
	.box {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.bookbox {
		width: 650rpx;
		height: 1000rpx;
		background-color: #f8f5f1;
		border-radius: 10rpx;
		transition: all  0.5s;
		overflow: hidden;
		.content{
			padding: 30rpx;
			letter-spacing: 2rpx;
		}
	}
	.bookbox_active {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		background-color: #f8f5f1;
		border-radius:0;
		transition: all  0.5s;
		overflow: auto;
		-ms-overflow-style: none;  //IE 10+ 隐藏滚动条
		overflow: -moz-scrollbars-none;  //Firefox 隐藏滚动条
		.content{
			// flex: 1;
			padding: 30rpx;
			letter-spacing: 2rpx;
			// line-height: 20rpx;
		}
		.think{
			padding: 0 30rpx;
			width: 590rpx;
		}
	}
	.bookbox_active::-webkit-scrollbar {  //chrome 和Safari，电脑端微信浏览器 隐藏滚动条
	    width: 0 !important;
	    height: 0 !important; //这样在电脑端微信浏览器横向滚动会无效。不加!important则可
	}
	
</style>
