<template>
	<div class="home-page-container">
		<div class="img-box">
			<img id="homebanner1" src="../static/HomeBanner.jpg">
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

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
		height: 700px;
		width: 100%;
	}
	.img-box {
		width: 70%;
		margin: 0 auto;
	}
	#homebanner1 {
		object-fit: cover;
		height: 700px;
		width: 100%;
	}
</style>