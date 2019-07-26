let PlanComponent = {
	template: `<p>{{ name }}</p>`,
	props: {
		name: {
			type: String,
			require: true
		}
	}
}


let PlanComponentPicker = {
	template: `<div>
	<plan v-for="(chioce,index) in chioces" :key="index" :name="chioce">{{ chioce }}</plan>
	</div>`,
	components: {
		plan: PlanComponent
	},
	data() {
		return {
			chioces: ['Hi', 'Data', 'From', 'Vue-data']
		}
	}
}



new Vue({
	el: '#app',
	components: {
		'plan-picker': PlanComponentPicker
	}
})