<template>
	<div>
		<el-backtop
			class="back-to-top-shadow"
			:visibility-height="backTopHeigh"
			:right="backTopRight"
			:bottom="backTopBottom">
			<i class="el-icon-caret-top"></i>
		</el-backtop>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				backTopHeigh: 300,
				backTopRight: 60,
				backTopBottom: 60
			}
		},
		methods: {

		}
	}

</script>

<style scoped>
	.back-to-top-shadow {
		background-color: #eee;
		box-shadow: -1px -1px 5px 1px #0000ff, 1px 1px 5px 1px #ff0000;
	}
</style>