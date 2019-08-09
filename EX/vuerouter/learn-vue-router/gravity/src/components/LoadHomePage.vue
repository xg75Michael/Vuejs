<template>
	<div class="home-page-container">
		<el-carousel :interval="4000" type="card" height="600px">
			<el-carousel-item v-for="item in 6" :key="item">
				<img class="homebanner1" :src="imageUrl[item-1]">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imageUrl: [
					"https://firebasestorage.googleapis.com/v0/b/exgravityinfo.appspot.com/o/homeCarouselImage%2FHomeBanner3.jpg?alt=media&token=032e8ca3-7683-45e4-9fdb-b31fcd98d2b4",
					"https://firebasestorage.googleapis.com/v0/b/exgravityinfo.appspot.com/o/homeCarouselImage%2FHomeBanner4.jpg?alt=media&token=524ba055-f95f-4f42-9656-291d8e143310"
				]
			}
		},
		computed: {

		},
		methods: {

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
</style>