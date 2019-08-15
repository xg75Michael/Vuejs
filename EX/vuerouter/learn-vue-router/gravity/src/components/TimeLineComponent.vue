<template>
	<div class="time-line-page">
		<el-row :gutter="20" class="header-text1-container">
			<el-col :span="6" :offset="1"><h2 class="time-line-header-text1">自2016年舞团创建以来，</h2></el-col>
		</el-row>
		<el-row :gutter="20" class="header-text2-container">
			<el-col :span="6" :offset="7"><h2 class="time-line-header-text2">我们携手至今，</h2></el-col>
		</el-row>
		<el-row :gutter="20" class="header-text3-container">
			<el-col :span="8" :offset="11"><h2 class="time-line-header-text3">满满的都是热情且坚定的足迹。</h2></el-col>
		</el-row>
		<div id="nodeExplianation">
			<div id="nodeColorExplian">
				<div class="nodeExplian-green"></div>
				<span> Paid</span>
				<el-divider direction="vertical"></el-divider>
				<div class="nodeExplian-grey"></div>
				<span> No Paid</span>
			</div>
			<el-divider></el-divider>
			<div id="nodeIconExplian">
				<span><i class="el-icon-minus"></i> One Type</span>
				<el-divider direction="vertical"></el-divider>
				<span><i class="el-icon-plus"></i> Multiple Type</span>
			</div>
		</div>
		<div class="timeline-container">
			<el-timeline :reverse="true">
				<el-timeline-item
					v-for="(event, index) in timeLineEventArrs"
					:key="index"
					:timestamp="event.eventDate"
					placement="top"
					:color="checkNodeColorType(event)"
					:icon="checkNodeIconType(event)"
					size="large"
					>
					<el-card>
						<h2 style="color: #222; margin-bottom: 10px;">{{ event.eventName }}</h2>
						<p>
							<!-- TODO - Add Img here -->
							{{ event.description }}
						</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				timeLineEventArrs: []
			}
		},
		computed: {
			
		},
		methods: {
			checkNodeColorType(event) {
				if (event.paidOrNot === false) {
					return '#aaa';
				} else {
					return  '#27ae60';
				}
			},
			checkNodeIconType(event) {
				if (event.purposeType.length === 1) {
					return 'el-icon-minus'
				} else {
					return 'el-icon-plus'
				}
			}
		},
		created() {
			this.$http.get('https://exgravityinfo.firebaseio.com/timelines.json')
				.then(response => {
					return response.json();
				}).then(data => {
					var tempArr = [];
					for (let key in data) {
						data[key].id = key;
						// 把时间格式化一下，去掉 - 只提取年月日
						data[key].eventDate = data[key].eventDate.slice(0,10).replace(/-/g, "")
						tempArr.push(data[key])
					}
					// 根据 eventDate 来重新排序的函数
					function eventDateCompare(property) {
						return function(obj1, obj2) {
							var value1 = obj1[property];
							var value2 = obj2[property];
							return value1 - value2;
						}
					}
					// 应用到 tempArr 上
					var sortTempArr = tempArr.sort(eventDateCompare("eventDate"));
					this.timeLineEventArrs = sortTempArr
				})
		}
	}
</script>

<style scoped>
	.time-line-page {
		min-height: 100vh;
		width: 80%;
		margin: auto;
	}
	#nodeColorExplian,
	#nodeIconExplian {
		text-align: right;
	}
	#nodeColorExplian .nodeExplian-green {
		height: 15px;
		width: 15px;
		background-color: #27ae60;
		border-radius: 50%;
		display: inline-block;
	}
	#nodeColorExplian .nodeExplian-grey {
		height: 15px;
		width: 15px;
		background-color: #aaa;
		border-radius: 50%;
		display: inline-block;
	}
	.el-divider--horizontal {
		margin: 5px;
		width: 50%;
		height: 2px;
		left: 50%;
	}
	.header-text1-container {
		margin-top: 40px;
	}
	.nodeExplianation {
		margin: 40px;
	}
</style>