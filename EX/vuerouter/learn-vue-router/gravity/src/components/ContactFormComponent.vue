<template>
	<div class="contact-form-page">
		<div class="contact-banner-container">
			<div class="banner-content-container">
				<h1>Ready to land you on the ground.</h1>
			</div>
		</div>
		<h1 class="header-after-banner">Get in touch with Us</h1>
		<div class="contact-form-container">
			<el-row>
				<el-col :span="10" :offset="2">
					<h1 class="form-header-above">Send Us a Message</h1>
					<el-form
						ref="contactUsForm" 
						:model="contactForm" 
						:rules="contactFormRules"
						label-width="200px">
						<el-form-item label="Full Name" prop="name">
							<el-input v-model="contactForm.name" placeholder="Input Your Name"></el-input>
						</el-form-item>
						<el-form-item label="Email" prop="email">
							<el-input v-model="contactForm.email" placeholder="Your Email Address"></el-input>
						</el-form-item>
						<el-form-item label="Phone Number" prop="phone">
							<el-input v-model.number="contactForm.phone" placeholder="Your Phone Number"></el-input>
						</el-form-item>
						<el-form-item label="Contact Preference" prop="prefer">
							<el-checkbox-group v-model="contactForm.prefer">
								<el-checkbox label="Phone Text" name="type"></el-checkbox>
								<el-checkbox label="Phone Call" name="type"></el-checkbox>
								<el-checkbox label="Send Email" name="type"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="Your Message" prop="message">
							<el-input type="textarea" v-model="contactForm.message" :rows="3"></el-input>
						</el-form-item>
						<div id="explicit-ReCaptcha"></div>
						<el-form-item>
							<el-button type="primary" @click="submitForm('contactUsForm')">Submit</el-button>
							<el-button @click="resetForm('contactUsForm')">Reset</el-button>
						</el-form-item>
					</el-form>
				</el-col>
				<el-col :span="10">
					<h1 class="map-header-above">Find Us From Map</h1>
					<div class="contact-map-container">
						<!-- This Google Map cause some 404 error, can be ignore -->
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2133.8063131479607!2d175.31437602301028!3d-37.78812617459122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d18d9cb13a3d9%3A0x6a967582a12e9730!2sUniRec!5e0!3m2!1szh-CN!2snz!4v1565821997661!5m2!1szh-CN!2snz" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
				</el-col>
			</el-row>
		</div>
		
		<a href="tel:0211693969"><el-button type="primary" round class="bottom-call-button">Give Us a Call</el-button></a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isBot: true,
				widgetId: '',
				loadedRecap: false,
				contactForm: {
					name: '',
					email: '',
					phone: '',
					prefer: [],
					message: ''
				},
				contactFormRules: {
					name: [
						{ required: true, message: 'Please input your Full Name.', trigger: 'blur' },
						{ min: 2, max: 50, message: 'Length should be 2 to 50.', trigger: 'blur' }
					],
					email: [
						{ required: true, message: 'Please input your Email Address.', trigger: 'blur' },
						{ type: 'email', message: 'Please input the right Email Form.', trigger: ['blur', 'change'] }
					],
					phone: [
						{ required: true, message: 'Phone Number Can not be empty.'},
						{ type: 'number', message: 'This has to be a Number'}
					],
					prefer: [
						{ type: 'array', required: true, message: 'Please select at least one method.', trigger: 'change' }
					],
					message: [
						{ required: true, message: 'Please input some message for sending to us.', trigger: 'blur' },
						{ min: 2, max: 1000, message: 'Length should be 2 to 1000', trigger: 'blur' }
					]
				}

			}
		},
		computed: {

		},
		methods: {
			submitForm(formName) {
				if (this.isBot === false) {
					this.$refs[formName].validate((valid) => {
						if (valid) {
							this.$http.post('https://exgravityinfo.firebaseio.com/contactForm.json', {
								userName: this.contactForm.name,
								userEmail: this.contactForm.email,
								phoneNumber: this.contactForm.phone,
								contactPrefer: this.contactForm.prefer,
								messageContent: this.contactForm.message
							}).then(response => {
								// show a success message
								this.$message({
									showClose: true,
									message: 'Congrats, this form has been submited!!',
									type: 'success'
								})
								this.resetForm(formName)
							})
						} else {
							this.$message({
								showClose: true,
								message: 'Oops!! Error -,-',
								type: 'error'
							})
							return false;
						}
					})
				} else {
					this.$message({
						showClose: true,
						message: 'Please do the reCAPTCHA check.',
						type: 'warning'
					})
				}
				
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			renderWait() {
				setTimeout(() => {
					if (typeof grecaptcha !== "undefined" && typeof grecaptcha.render !== "undefined") {
						this.render();
					} else {
						this.renderWait();
					}
				}, 300);
			},
			render() {
				const recaptchaDiv = document.createElement('div');
				recaptchaDiv.className = 'outside-badge';
				document.getElementById('explicit-ReCaptcha').appendChild(recaptchaDiv);

				this.widgetId = grecaptcha.render(recaptchaDiv, {
					sitekey : '6Lfy_LIUAAAAAFXB2h4uDG3YNPShOek1AZlXe-Dw',
					badge: this.badge || "bottomright",
					theme: this.theme || "light",
					callback: token => {
						this.callback(token);
						// grecaptcha.reset(this.widgetId);
					},
				})
				this.loadedRecap = true;
			},
			callback(token) {
				this.isBot = false
			}
		},
		mounted() {
			if (typeof grecaptcha === "undefined") {
				var script = document.createElement("script");
				script.src = "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit",
				script.onload = this.renderWait;
				document.head.appendChild(script);
			} else this.render();
		}

	}
</script>

<style scoped>
	.contact-form-page {
		align-content: center;
		justify-content: center;
		text-align: center;
	}
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
	.header-after-banner {
		color: #fff;
		font-weight: 900;
		padding: 10px;
		background: #b92b27;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	.form-header-above,
	.map-header-above {
		margin: 40px;
	}
	.bottom-call-button {
		margin: 80px;
		font-size: 20px;
		background: #b92b27;  /* fallback for old browsers */
		background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}
	#explicit-ReCaptcha {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		width: 20%;
		margin-bottom: 20px;
	}
</style>