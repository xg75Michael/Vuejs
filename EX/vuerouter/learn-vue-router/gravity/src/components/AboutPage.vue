<template>
	<div class="about-page">
		<div @click="fadeHeader()" class="iframe-container">
			<div class="iframe-header">
				<el-collapse-transition><h1 v-if="showHeaderH">Welcome</h1></el-collapse-transition>
			</div>
			<iframe id="youtube-video" :src="youtubeURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		<div class="main-content-top">
			<el-button type="warning" id="stop-the-video" @click="stopVideo()" round>Stop Video</el-button>
			<el-row class="top-first-container">
				<el-col :span="14">
					<div class="top-content-left1">
						<h2>Who We Are</h2>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et m massa. Cum sociis natoque penatibus et m massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat masac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugi</p>
					</div>
				</el-col>
				<el-col :span="10">
					<div class="top-content-right1"></div>
				</el-col>
			</el-row>
			<el-row class="top-second-container">
				<el-col :span="10">
					<div class="top-content-left2"></div>
				</el-col>
				<el-col :span="14">
					<div class="top-content-right2">
						<h2>What We Do</h2>
						<p>sa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis via, venenatis via, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputamper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend </p>
					</div>
				</el-col>
			</el-row>
		</div>
		<div class="main-content-mid">
			<div class="main-parallax-img">
				<TextTypingEffectComponent class="parallax-cover-text"></TextTypingEffectComponent>
				<h1 class="mid-bottom-header">Meet Our Team</h1>
				<p class="mid-bottom-content">sa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis via, venenatis via, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputamper nisi. Aenean vulputate eleifend tellus. Aenean leo lig</p>
			</div>
		</div>
	</div>
</template>

<script>
	import TextTypingEffectComponent from './TextTypingEffectComponent.vue'

	export default {
		components: {
			TextTypingEffectComponent
		},
		data() {
			return {
				showHeaderH: true,
				youtubeURL: 'https://www.youtube.com/embed/FQUSOpl2Lqs?controls=0',
				autoString: '&autoplay=1'
			}
		},
		computed: {

		},
		methods: {
			fadeHeader() {
				// check if there is already "autoplay"
				if (this.youtubeURL.match(this.autoString)) {
					// console.log('contain')
				} else {
					this.youtubeURL += this.autoString
					this.showHeaderH = false
				}
			},
			stopVideo() {
				var autoIndexString = this.youtubeURL.match(this.autoString)
				var autoIndex = autoIndexString['index']
				this.youtubeURL = this.youtubeURL.slice(0, autoIndex)
				this.showHeaderH = true
			}

		}
	}
</script>

<style scoped>
	.about-page {
		width: 100vw;
		min-height: 100vh;
		align-content: center;
		background-color: #ddd;
	}
	.iframe-container {
		position: relative;
		width: 100vw;
		height: 100vh;
	}
	.iframe-header {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		text-align: center;
	}
	.iframe-header h1 {
		opacity: 1;
		text-shadow: 
			-4px -4px 0 #f0f,
			4px -4px 0 #0f0,
			-2px 2px 0 #0ff,
			2px 2px 0 #00f;
		-webkit-text-stroke: 4px #333;
		font-size: 170px;
		color: #fff;
		margin-top: 20vh;
	}
	#stop-the-video {
		font-size: 26px;
		margin-top: 30px;
	}
	iframe {
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	.main-content-top {
		text-align: center;
		height: 100vh;
		width: 80vw;
		margin-left: auto;
		margin-right: auto;
	}
	div.el-col {
		height: 100%;
	}
	.top-content-left1,
	.top-content-right2,
	.top-content-right1,
	.top-content-left2 {
		margin: 10px;
		border-radius: 10px;
		height: 100%;
	}

	.top-content-left1,
	.top-content-right2 {
		background-color: #eee;
	}
	.top-content-right1,
	.top-content-left2 {
		background-image: url('../static/HomeBanner1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.top-first-container,
	.top-second-container {
		height: 35%;
		margin-top: 40px;
	}
	.top-content-right2 h2,
	.top-content-left1 h2 {
		padding: 20px;
		color: #000;
	}
	.top-content-right2 p,
	.top-content-left1 p {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
	}

	.main-content-mid {
		background-color: #ddd;
		height: 100vh;
	}
	.main-parallax-img {
		text-align: center;
		height: 40vh;
		background-image: url('../static/HomeBanner3.jpg');
		background-color: #222;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.parallax-cover-text {
		line-height: 40vh;
		font-size: 40px;
	}
	.mid-bottom-header {
		margin: 40px;
	}
</style>