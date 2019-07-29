var shoppinglist = new Vue({
	el: '#app',
	data: {
		state: true,
		header: 'Shopping list app',
		newItem: '',
		items: [
			{
				label: '10 dogs',
				purchased: false,
				highPriority: false,
			},
			{
				label: '20 cats',
				purchased: true,
				highPriority: false,
			},
			{
				label: '30 fishes',
				purchased: false,
				highPriority: true,
			},
			{
				label: '50 birds',
				purchased: false,
				highPriority: false,
			},
		]
	},
	methods: {
		addNewItem() {
			this.items.push({
				label: this.newItem,
				purchased: false,
				highPriority: false,
			},);
			this.newItem = '';
		},
		toggelAdd() {
			this.state = !this.state;
			this.newItem = '';
		},
		togglePurchasedItem(item) {
			item.purchased = !item.purchased;
		}
	},
	computed: {
		inputCount() {
			return this.newItem.length;
		},
		reverseItems() {
			return this.items.slice(0).reverse();
		}
	}
});