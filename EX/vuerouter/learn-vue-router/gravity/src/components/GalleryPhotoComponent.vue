<template>
	<div 
		v-loading="loading"
		class="gallery-photo-page" 
		:style="{'minHeight': `${pageMiniHeight+100}px`}"> <!-- 100:give the button space -->
		<h1 class="gallery-page-header">{{ pageHeader }}</h1>
		
		<img 
			v-for="(url, index) in imageList" 
			:src="url" 
			:key="index" 
			class="item"
			@click="displayThisImage(url)">
		<router-link to="/contact" v-if="!loading">
			<el-button 
				:style="{'top': `${pageMiniHeight+100}px`}"
				class="contact-button" 
				type="primary" 
				round>
				Contact Us Now
			</el-button>
		</router-link>
	</div>
</template>

<script>
	import { GalleryImagesList } from '../firebaseStorage.js'

	export default {
		data() {
			return {
				loading: true,
				pageMiniHeight: null,
				imageList: GalleryImagesList,
				pageHeader: 'Have a peak of our valuable memeries'
			}
		},
		computed: {
			
		},
		methods: {
			changeLoading() {
				this.loading = false
			},
			displayThisImage(url) {
				window.open(url, "_blank")
			},
			getClient() {
				return {
					width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
					height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
				}
			},
			getScrollTop() {
				return window.pageYOffset || document.documentElement.scrollTop;
			},
			imgWaterFall() {
				// get all images with item class
				var items = document.getElementsByClassName('item');
				var gap = 10;
				var pageWidth = this.getClient().width;
				var itemWidth = items[0].offsetWidth;
				var colums = parseInt(pageWidth / (itemWidth + gap));
				// for storing item height
				var arr = [];
				for (let i=0; i<items.length; i++) {
					if (i < colums) {
						// 在第一行
						// preset top gap and left gap
						items[i].style.top = 200 + 'px';
						items[i].style.left = (itemWidth + gap) * i + gap + 'px';
						arr.push(items[i].offsetHeight + 200);
					} else {
						var minHeight = arr[0];
						var index = 0;
						for (let j=0; j<arr.length; j++) {
							// find minHeight
							if (minHeight > arr[j]) {
								minHeight = arr[j];
								index = j;
							}
						}
						items[i].style.top = arr[index] + gap + 'px';
						items[i].style.left = items[index].offsetLeft + 'px';

						arr[index] = arr[index] + items[i].offsetHeight + gap;
					}
				}
				var bottomTopHeigh = items[items.length - 1].offsetTop;
				// give some space at the bottom
				this.pageMiniHeight = bottomTopHeigh + 400
				// console.log(document.readyState)
				for (let i=0; i<items.length; i++) {
					items[i].style.visibility = 'visible'
				}
			}
		},
		created() {
			setTimeout(this.changeLoading, 2200)
		},
		mounted() {
			// TOTO
			// Fix the bug when refresh on gallery page, layout error
			setTimeout(this.imgWaterFall, 2000)
		},
		upadated() {
			// TODO
			// Does not work when resize the window
			// window.onresize = function () {
			// 	waterFall();
			// }
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.gallery-page-header {
		text-align: center;
		padding-top: 20px;

	}
	.gallery-photo-page {
		min-height: 100vh;
		background-color: #ddd;
		text-align: center;
	}
	.item {
		visibility: hidden;
		float: left;
		display: flex;
		width: 305px;
		position: absolute;
		border-radius: 2%;
	}
	.item:hover {
		box-shadow: 0 2px 6px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.8);
		transform: translateY(-2px);
	}
	.contact-button {
		font-size: 30px;
		position: absolute;
		transform: translate(-50%, -50%);
	}
</style>