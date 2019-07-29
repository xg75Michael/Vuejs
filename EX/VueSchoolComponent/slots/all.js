Vue.component('todo-item', {
	template: `
		<div>
			<input type="checkbox" v-model="completed">
			<span :class="{done: completed}">
				<slot></slot>
			</span>
			<slot name="description"></slot>
			<button>
				<slot name="button-text">DefaultText</slot>
			</button>
		</div>
	`,
	data() {
		return {
			completed: false
		}
	}
})

Vue.component('page-layout', {
	template: `
		<div>
			<h2>
				<slot name="header-slot">Default Header Text</slot>
			</h2>
			<main>
				<slot></slot>
			</main>
			<footer>
				<slot name="footer-slot">Default Footer Text</slot>
			</footer>
		</div>
	`
})


new Vue({
	el: '#app',
})