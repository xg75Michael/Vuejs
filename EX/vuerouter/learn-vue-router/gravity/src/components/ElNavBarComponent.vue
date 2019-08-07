<template>
	<div>
		<el-menu
			:default-active="activeIndex1"
			class="el-menu-demo"
			mode="horizontal"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b">
			<div id="logo-container" @click="clearActiveIndex">
				<router-link to="/">
					<img src="../static/LogoTrans1.png">
				</router-link>
			</div>
			<el-menu-item index="5">
				<router-link to="/contact"><i class="el-icon-s-comment"></i>Contact</router-link>
			</el-menu-item>
			<el-menu-item index="4">
				<router-link to="/about"><i class="el-icon-info"></i>About</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link to="/pricing"><i class="el-icon-s-goods"></i>Pricing</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link to="/gallery"><i class="el-icon-picture"></i>Gallery</router-link>
			</el-menu-item>
			<el-menu-item index="1">
				<router-link to="/timeline"><i class="el-icon-time"></i>TimeLine</router-link>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex1: '1'
			}
		},
		computed: {

		},
		methods: {
			clearActiveIndex() {
				this.activeIndex1 = '0';
			}
		}
	}
</script>

<style scoped>
	#logo-container {
		float: left;
		margin-left: 40px;
		margin-right: auto;
		height: 80px;
		background: #fff;
		border-radius: 50%;
	}
	img {
		height: 80px;
	}
	#logo-container:hover img {
		background: #ffd04b;
		border-radius: 50%;
	}
	a {
		text-decoration: none;
		display: block;
	}
	a:hover {
		text-decoration: underline;
	}
	.el-menu--horizontal>.el-menu-item {
		float: right;
		font-size: 20px;
		font-weight: 500;
		line-height: 80px;
	}
	.el-menu--horizontal>.el-menu-item {
		height: 80px;
		border-bottom: 4px solid transparent;
	}
	.el-menu--horizontal>.el-menu-item.is-active {
		border-bottom: 5px solid #409EFF;
	}
	li:hover {
		box-shadow: 0 2px 12px 0 rgba(51,0,204,0.2);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 2px;
		border-bottom-right-radius: 2px;
	}
	.el-menu {
		border-bottom: none !important;
	}


</style>