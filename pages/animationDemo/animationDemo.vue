<template>
	<view class="container">
		<view class="main">
			<view class="blc"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.container {
		padding: 0;
		margin: 0;
		background-color: #007580;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.main {
		width: 400px;
		height: 400px;
		border: 1px solid white;
		
	}
	.blc {
		width: 100px;
		height: 100px;
		background-color: #fed049;
		animation-name: hd;
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}
	@keyframes hd{
		25%{
			background-color: #e48257;
			transform: translateX(300px);
		}
		50%{
			background-color: #ff7171;
			transform: translate(300px,300px) rotate(45deg);
			border-radius: 0;
		}
		75%{
			background-color: #693c72;
			transform: translateY(300px);
		}
		25%, 75% {
			border-radius: 50%;
		}
	}
</style>
