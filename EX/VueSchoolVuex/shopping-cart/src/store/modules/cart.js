import shop from '@/api/shop'

export default {
	namespaced: true,

	state: {
		// {id, quantity}
		items: [],
		checkoutStatus: null
	},

	getters: {
		cartProducts(state, getters, rootState, rootGetters) {
			return state.items.map(cartItem => {
				const product = rootState.products.items.find(product => product.id === cartItem.id)
				return {
					title: product.title,
					price: product.price,
					quantity: cartItem.quantity
				}
			})
		},
		cartTotalPrice (state, getters, rootState) {
			// let total = 0;
			// getters.cartProducts.forEach(item => {
			// 	total += item.price * item.quantity
			// })
			// return total
			// same result using reduce
			return getters.cartProducts.reduce((total, item) => total + item.price * item.quantity, 0)
		}
	},

	mutations: {
		pushProductToCart(state, productId) {
			state.items.push({
				id: productId,
				quantity: 1
			})
		},
		incrementItemQuantity(state, cartItem) {
			cartItem.quantity++
		},
		emptyCart(state, status) {
			state.items = []
		},
		setCheckoutStatus(state, status) {
			state.checkoutStatus = status
		}
	},
	actions: {
		addProductToCart({state, getters, commit, rootState, rootGetters}, product){
			if (rootGetters['products/productIsInStock'](product)) {
				const cartItem = state.items.find(item => item.id === product.id)
				if (!cartItem) {
					commit('pushProductToCart', product.id)
				} else {
					commit('incrementItemQuantity', cartItem)
				}
				commit('products/decrementProductInventory', product, {root: true})
			}
		},
		cartCheckout ({state, commit}) {
			shop.buyProducts(
				state.items,
				() => {
					commit('emptyCart')
					commit('setCheckoutStatus', 'Success')
				},
				() => {
					commit('setCheckoutStatus', 'Fail')
				}


				)
		}
	}
}