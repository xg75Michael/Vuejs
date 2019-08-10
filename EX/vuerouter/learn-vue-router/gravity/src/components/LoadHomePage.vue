<template>
	<div class="home-page-container">
		<el-carousel :interval="4000" type="card" height="40vw">
			<el-carousel-item v-for="(img, index) in imgList" :key="index">
				<img class="homeBannerImgs" :src="img">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	import HomeBannerList from '../firebaseStorage.js'

	export default {
		data() {
			return {
				imgList: HomeBannerList
			}
		},
		computed: {
			
		},
		methods: {

		},
		created() {

		}
	}
</script>

<style scoped>
	.home-page-container {
		margin-top: 80px;
		width: 100%;
	}
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	.el-carousel__item.is-active.el-carousel__item--card.is-in-stage {
	}
	.el-carousel__item.el-carousel__item--card.is-in-stage {
		transform: scale(0.5);
	}
	.el-carousel__item.el-carousel__item--card.is-in-stage:hover {
		box-shadow: 1px 1px 4px 2px rgba(0, 140, 186, 0.5);	
	}
	.el-carousel__item.el-carousel__item--card.is-in-stage img {
		object-fit: cover;
		height: 100%;
		width: auto;
	}

</style>