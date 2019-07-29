let PlanPickerItemComponent = {
	template: `
			<div @click="selectPlan" :class="{'active-plan' : isSelected}">
				<p>{{ name }}</p>
			</div>`,
	props: {
		name: {
			type: String,
			require: true
		},
		selectedPlan: {
			type: String
		}
	},
	computed: {
		isSelected() {
			return this.name == this.selectedPlan;
		}
	},
	methods: {
		selectPlan() {
			this.$emit('pickedEmit', this.name);
		}
	}
}


let PlanPickerComponent = {
	template: `<div>
	<plan-picker-item :selectedPlan="selectedPlan" @pickedEmit="selectPlanEmit" v-for="(chioce,index) in chioces" :key="index" :name="chioce">{{ chioce }}</plan-picker-item>
	</div>`,
	components: {
		'plan-picker-item': PlanPickerItemComponent
	},
	data() {
		return {
			chioces: ['Hi', 'Data', 'From', 'Vue-data'],
			selectedPlan: null
		}
	},
	methods: {
		selectPlanEmit(plan) {
			this.selectedPlan = plan;
		}
	}
}



new Vue({
	el: '#app',
	components: {
		'plan-picker': PlanPickerComponent
	}
})