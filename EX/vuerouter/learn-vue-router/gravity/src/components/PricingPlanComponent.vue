<template>
	<div class="pricing-plan-page">
		<div class="pricing-header-container">
			<h1 class="pricing-header-content">Choose a Plan and Jion us</h1>
		</div>
		<el-row class="pricing-details-container">
			<el-col :sm="24" :md="8" class=pricing-choices v-for="plan in planChoices">
				<div class="pricing-choices-top"">
					<h1>{{ plan.selections }}</h1>
					<p class="p-pricing"><b>{{ plan.cost }}</b></p>
					<p class="p-discont"><b>{{ plan.discont }}</b></p>
				</div>
				<i>{{ plan.shortDesc }}</i>
				<hr id="benefits-hr">
				<ul>
					<li v-for="benefit in plan.benefits">{{ benefit }}</li>
				</ul>
			</el-col>
		</el-row>

		<hr>
		<h2 class="bottom-container-header">If you Like Us or Like our Leader. <i class="el-icon-bottom"></i></h2>
		<div class="pricing-bottom-container">
			<router-link to="/contact"><el-button type="success" plain round>Contact US</el-button></router-link>
			<span>Or Buy a <i class="el-icon-coffee"></i> for Us</span>
			<div id="paypal-donation-container">
				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="9PWAV8JKLSEFQ" />
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
					<img alt="" border="0" src="https://www.paypal.com/en_NZ/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</div>
		</div>

		<!-- TODO - Coding in mounted() first -->
		<!-- <div id="paypal-button-container"></div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				planChoices: [
					{
						selections: 'One Time',
						shortDesc: 'Buy this card for each time when you are planning to come, flexible to use.',
						cost: '$15 for each time',
						discont: 'None',
						benefits: ['Benefit 111+111', 'Benefit 222+2222', 'Benefit 333+33333', 'Contact by Offical Member', 'Re Shen', 'Pick Up if Needed'],
					},
					{
						selections: 'Multiple Times',
						shortDesc: 'This choice is design for customers who are able to come to dance in fllowing weeks and get discont from it.',
						cost: '$15 for each time',
						discont: '10% Off!',
						benefits: ['Benefit 111+111', 'Benefit 222+2222', 'Benefit 333+33333', 'Contact by Offical Member', 'Re Shen', 'Pick Up if Needed', 'Free shopping bag'],
					},
					{
						selections: '10 Times',
						shortDesc: 'Unlimited chatting with our leader Jun, he will personally help you to get fitness.',
						cost: '$15 for each time',
						discont: '15% Off!',
						benefits: ['Benefit 111+111', 'Benefit 222+2222', 'Benefit 333+33333', 'Contact by Offical Member', 'Re Shen', 'Pick Up if Needed', 'Free shopping bag', 'Leader Wechat ID'],
					}
				]
			}
		},
		computed: {
			numberOfChoices() {
				var smNumber = Math.round(24 / this.planChoices.length);
				return smNumber;
			}
		},
		methods: {

		},
		created() {
			// Append meta and script for Paypal
			var scriptPaypal = document.createElement("script");
			scriptPaypal.src = "https://www.paypal.com/sdk/js?client-id=AaUoUzY6Q7WbNVBo3xYjqmW4isuUHW290aKqKwDbgUMPmORea-3JBKs98C0QuNb8b8q1tFXNSSRT5vyv&currency=NZD";
			scriptPaypal.setAttribute('id', 'paypalJS')
			scriptPaypal.setAttribute('async', '');
			// var scriptPaypalCheckout = document.createElement("script");
			// scriptPaypalCheckout.src = "https://www.paypalobjects.com/api/checkout.js";
			// scriptPaypalCheckout.setAttribute('async', '');
			var metaTag1Initial = document.createElement("meta");
			metaTag1Initial.setAttribute('name', 'viewport');
			metaTag1Initial.setAttribute('content', 'width=device-width, initial-scale=1');
			var metaTag2Http = document.createElement("meta");
			metaTag2Http.setAttribute('http-equiv', 'X-UA-Compatible');
			metaTag2Http.setAttribute('content', 'IE=edge');
			document.head.appendChild(metaTag1Initial);
			document.head.appendChild(metaTag2Http);
			document.body.appendChild(scriptPaypal);
			// document.body.appendChild(scriptPaypalCheckout);
		},
		mounted() {
			// Make a payment by REST API and Server side coding
			// setTimeout(function() {
			// 	paypal.Buttons().render('#paypal-button-container');
			// }, 1000)
		}
	}
</script>

<style scoped>
	.pricing-plan-page {
		position: relative;
		width: 100%;
		min-height: 100vh;
		justify-content: center;
		align-content: center;
		text-align: center;
	}
	.pricing-header-container {
		height: 60vh;
		background-image: url('https://cdn.pixabay.com/photo/2018/02/16/10/52/beverage-3157395_1280.jpg');
		background-color: #222+2222;
		background-position: bottom;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.pricing-header-content {
		line-height: 60vh;
		color: #fff;
		font-size: 60px;
		background-color: rgba(100, 80, 30, 0.5);
	}
	div.pricing-choices {
		padding: 20px;
	}
	.pricing-choices-top {
		background: linear-gradient(180deg, #5e4c30 0%, rgba(29,154,86,1) 100%);
		color: #fff;
		border-radius: 20px;
	}
	div.pricing-choices h1 {
		padding-top: 40px;
		color: #ff0;
		margin-top: -65px;
		font-size: 35px;
	}
	div.pricing-choices p.p-discont {
		font-size: 20px;
		padding-bottom: 40px
	}
	div.pricing-choices p.p-pricing {
		font-size: 35px;
	}
	div.pricing-choices i {
		color: #880;
		font-weight: 800;
		display: inline-block;
		margin: 40px 0;
		font-size: 18px;
	}
	.benefits-hr {
		color: #fff;
	}
	div.pricing-choices ul {
		margin-top: 20px;
		text-decoration: none;
	}
	div.pricing-choices ul li {
		display: block;
		text-decoration: underline;
		padding: 5px;
		font-size: 16px;
	}
	.bottom-container-header {
		margin-top: 40px;
	}
	.el-icon-bottom {
		font-weight: 900;
	}
	.pricing-bottom-container {
		margin: 40px 0;
		display: flex;
		position: relative;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.pricing-bottom-container span{
		margin: 0 20px;
	}
	#paypal-donation-container {
		display: inline-block;
	}
</style>

EJ0L6hZ1sMH736s08OFQ6vYOYrTxoh-qPRTSB-_GJpbSAMn_cPz3XZbF__ezKDPYzgTv6ru6gbRDx2Eq