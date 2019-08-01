<template>
	<div>
		<h1>Shopping Cart</h1>
		<ul>
			<li v-for="(product, index) in products" :key="index">
				{{ product.title }} - {{ product.price | currency }} - {{ product.quantity }}
			</li>
		</ul>
		<p>Total: {{ cartTotalPrice | currency }}</p>
		<button @click="cartCheckout" :disabled="!cartTotalPrice">Check Out</button>
		<p v-if="checkoutStatus">{{ checkoutStatus }}</p>
	</div>
</template>

<script>
	import {mapState, mapGetters, mapActions} from 'vuex'

	export default {
		computed: {
			...mapState('cart', {
				checkoutStatus: state => state.checkoutStatus
			}),
			...mapGetters('cart', {
				products: 'cartProducts',
				cartTotalPrice: 'cartTotalPrice'
			})
		},
		methods: {
			...mapActions('cart', {
				cartCheckout: 'cartCheckout'
			})
		}
	}
</script>

<style scoped>
	
</style>