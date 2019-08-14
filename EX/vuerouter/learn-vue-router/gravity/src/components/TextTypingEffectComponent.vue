<template>
	<div class="text-typing-container">
		<h1>Jion Us to
			<span class="typed-text">{{ typeValue }}</span>
			<span class="cursor" :class="{'typing': typeStatus}">&nbsp</span> <!-- &nbsp = ' ' .. spance -->
		</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				typeValue: '',
				typeStatus: false,
				typeArray: ['Dance', 'Be Attactive', 'Meet People', 'Challenge Yourself'],
				typingSpeed: 100,
				erasingSpeed: 100,
				newTextDelay: 2000,
				typeArrayIndex: 0,
				charIndex: 0
			}
		},
		computed: {

		},
		methods: {
			typeText() {
				if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
					if (!this.typeStatus) {
						this.typeStatus = true;
					}
					this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
					this.charIndex += 1;
					setTimeout(this.typeText, this.typingSpeed);
				} else {
					this.typeStatus = false;
					setTimeout(this.eraseText, this.newTextDelay);
				}
			},
			eraseText() {
				if (this.charIndex > 0) {
					if (!this.typeStatus) {
						this.typeStatus = true;
					}
					this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
					this.charIndex -= 1;
					setTimeout(this.eraseText, this.erasingSpeed);
				} else {
					this.typeStatus = false;
					this.typeArrayIndex += 1;
					if (this.typeArrayIndex >= this.typeArray.length) {
						this.typeArrayIndex = 0;
					}
					setTimeout(this.typeText, this.typingSpeed + 1000)
				}
			}
		},
		created() {
			setTimeout(this.typeText, this.newTextDelay)
		}
	}
</script>

<style scoped>
	body {
		text-align: center;
	}
	* {
		color: #fff;
	}
	.typed-text {
		color: #2ecc71;
		/*-webkit-text-decoration: #01cccc underline;*/
		/*text-decoration: #01cccc underline;*/
		text-shadow: 0px 0px 10px rgba(255,255,255,0.7);
		/*-webkit-text-stroke: 1px #2c3e50;*/
	}
	span.cursor {
		line-height: 100%;
		display: inline-block;
		margin-left: 3px;
		width: 4px;
		background-color: #fff;
		animation: cursorBlink 1s infinite;
	}
	span.cursor.typing {
		animation: none;
	}
	@keyframes cursorBlink {
		49% { background-color: #fff; }
		50% { background-color: transparent; }
		99% { background-color: transparent; }
	}
</style>