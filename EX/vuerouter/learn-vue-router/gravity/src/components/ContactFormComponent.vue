<template>
	<div class="contact-form-page">
		<div class="contact-banner-container">
			<div class="banner-content-container">
				<h1>Ready to land you on the ground.</h1>
			</div>
		</div>
		<h1 class="header-after-banner">Get in touch with Us</h1>
		<div class="contact-form-container">
			
		</div>
		<h1 class="map-header-above"></h1>
		<div class="contact-map-info">
			<p>Map Map</p>
			<p>Map Map</p>
			<p>Map Map</p>
		</div>
		<el-button type="primary" round class="bottom-call-button">Give Us a Call</el-button>
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
	.contact-banner-container {
		text-align: center;
		height: 40vh;
		background-image: url('../static/HomeBanner1.jpg');
		background-color: #222;
		background-attachment: fixed;
		background-position: bottom;
		background-size: cover;
	}
	.banner-content-container {
		padding-bottom: 15vh;
		font-size: 30px;
	}
	.banner-content-container h1 {
		line-height: 40vh;
		background-color: rgba(142, 68, 173, 0.3);
		color: #fff;
	}
</style>