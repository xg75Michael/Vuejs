<template>
	<el-footer height="280px" class="footer-gravity-container">
		<el-divider><p class="footer-gravity">GRAVITY</p></el-divider>
		<el-row :gutter="20">
			<el-col :span="8">
				<div class="footer-col-layout footer-info-left">
					<p>021 1693969</p>
					<p>xg75@students.waikato.ac.nz</p>
					<p>Gate One Knighton Rd, </p>
					<p>Hillcrest, Hamilton 3216</p>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="footer-col-layout footer-info-center">
					<el-divider direction="vertical"></el-divider>
					<div id="footer-icons">
						<font-awesome-icon :icon="['fab', 'facebook-f']" />
						<font-awesome-icon :icon="['fab', 'instagram']" />
						<font-awesome-icon :icon="['fab', 'youtube']" />
						<font-awesome-icon :icon="['fab', 'linkedin']" />
						<font-awesome-icon :icon="['fab', 'facebook-messenger']" />
						<font-awesome-icon :icon="['fab', 'weixin']" />
						<font-awesome-icon :icon="['fab', 'github']" />
					</div>
				</div>
			</el-col>
			<el-col :span="8">
				<div class="footer-col-layout footer-info-right">
					<p>Home</p>
					<p>Plan Pricing</p>
					<p>Contact Us</p>
					<p>About Us</p>
				</div>
			</el-col>
		</el-row>
		<el-col :span="24"><p class="footer-copyright">&copy 2019 | Gravity Team. All rights reserved. Powered by 
			<el-link href="https://github.com/xg75Michael" target="_blank">MichaelGao</el-link>
		.</p></el-col>
	</el-footer>
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

<style>
	@import url('https://fonts.googleapis.com/css?family=Saira+Stencil+One&display=swap');
	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	.el-footer {
		margin-top: 80px;
		background: linear-gradient(90deg, rgba(105,121,126,1) 0%, rgba(0,183,195,1) 40%, rgba(0,183,195,1) 60%, rgba(105,121,126,1) 100%);
		width: 100%;
	}
	.el-divider .el-divider__text {
		background-color: #555;
		color: #fff;
		font-family: 'Saira Stencil One', cursive;
		letter-spacing: 10px;
		padding: 0 80px;
		border-radius: 5px;
		box-shadow: -1px -1px 5px 1px #0000ff, 1px 1px 5px 1px #ff0000;
	}
	footer .el-divider--horizontal {
		padding: 2px 0;
		height: 1px;
	}
	footer .el-divider {
		background-color: #333;
		width: 80%;
		margin: auto;
	} 
	.footer-gravity {
		font-size: 32px;
	}
	.footer-col-layout {
		text-align: center;
	}
	.footer-col-layout .el-divider--vertical {
		height: 60px;
		width: 2px;
		margin: 60px 0;
		background-color: #111;
	}
	.footer-info-left,
	.footer-info-right {
		margin-top: 50px;
	}
	.footer-col-layout p {
		color: #fff;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
		line-height: 30px;
	}
	#footer-icons {
		font-size: 30px; /*Control icons size*/
	}
	#footer-icons .svg-inline--fa {
		margin: 0 10px;
	}
	.fa-facebook-f {
		color: #3b5999;
	}
	.fa-instagram {
		color: #e4405f;
	}
	.fa-youtube {
		color: #cd201f;
	}
	.fa-linkedin {
		color: #0077B5;
	}
	.fa-facebook-messenger {
		color: #0084ff;
	}
	.fa-weixin {
		color: #09b83e;
	}
	.fa-github {
		color: #211F1F;
	}
	.footer-copyright {
		text-align: center;
		margin: 10px;
		color: #eee;
	}
</style>