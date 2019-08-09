<template>
	<div class="time-line-post-page">
		<h1>A hidden post page</h1>
		<div class="post-form-container">
			<el-form
				ref="danceEvent" 
				:model="danceEvent" 
				:rules="formRules"
				label-width="200px">
				<el-form-item label="Dance Event Name" prop="name">
					<el-input v-model="danceEvent.name" placeholder="Name of the Event"></el-input>
				</el-form-item>
				<el-form-item label="Event Time" required>
					<el-col :span="11">
						<el-form-item prop="theDate">
							<el-date-picker
								type="date"
								placeholder="Choose a Date" 
								v-model="danceEvent.theDate" 
								style="width: 100%;"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-form-item>
				<el-form-item label="Paid or Not" prop="paidOrNot">
					<el-switch v-model="danceEvent.paidOrNot"></el-switch>
				</el-form-item>
				<el-form-item label="Event Type" prop="type">
					<el-checkbox-group v-model="danceEvent.type">
						<el-checkbox label="Private Commercial" name="type"></el-checkbox>
						<el-checkbox label="Promotion Activities" name="type"></el-checkbox>
						<el-checkbox label="Public Show" name="type"></el-checkbox>
						<el-checkbox label="Public Competition" name="type"></el-checkbox>
						<el-checkbox label="Others" name="type"></el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="Event Description" prop="desc">
					<el-input type="textarea" v-model="danceEvent.desc" :rows="5"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('danceEvent')">Submit</el-button>
					<el-button @click="resetForm('danceEvent')">Reset</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				danceEvent: {
					name: '',
					theDate: '',
					paidOrNot: false,
					type: [],
					desc: ''
				},
				formRules: {
					name: [
						{ required: true, message: 'Please input the Event Name', trigger: 'blur' },
	            		{ min: 2, max: 50, message: 'Length should be 2 to 50', trigger: 'blur' }
					],
					theDate: [
						{ type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
					],
					type: [
						{ type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
					],
					desc: [
						{ required: true, message: 'Please input some Description for the Event', trigger: 'blur' },
            			{ min: 10, max: 1000, message: 'Length should be 10 to 1000', trigger: 'blur' }
					]
				}
			}
		},
		computed: {

		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$http.post('https://exgravityinfo.firebaseio.com/timelines.json', {
							eventName: this.danceEvent.name,
							eventDate: this.danceEvent.theDate,
							purposeType: this.danceEvent.type,
							paidOrNot: this.danceEvent.paidOrNot,
							description: this.danceEvent.desc
						}).then(response => {
							// show a success message
							this.$message({
								showClose: true,
								message: 'Congrats, this form has been submited!!',
								type: 'success'
							})
						})
					} else {
						// show a error message
						this.$message({
							showClose: true,
							message: 'Oops!! Error -,-',
							type: 'error'
						})
						return false;
					}
				})
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped>
	.time-line-page {
		width: 80%;
	}
	.post-form-container {
		width: 80%;
		max-width: 800px;
	}
</style>