import shop from '@/api/shop'

export default {
	namespaced: true,
	
	state: {
		items:[]
	},

	getters: {
		availableProduct(state, getters) {
			return state.items.filter(product => product.inventory > 0)
		},
		// 另一种写法
		// availableProduct: function(state, getters) {
		// 	return state.items.filter(function(product) {
		// 		return product.inventory > 0
		// 	}
		// }
		productIsInStock() {
			return (product) => {
				return product.inventory > 0
			}
		}
	},

	mutations: {
		setProducts(state, productsLoad) {
			// update products
			state.items = productsLoad
		},
		decrementProductInventory(state, product) {
			product.inventory--
		}
	},

	actions: {
		fetchProducts({commit}) {
			return new Promise((resolve, reject) => {
				// make the call
				// run setProducts mutation
				shop.getProducts(products => {
					commit('setProducts', products)
					resolve()
				})
			})	
		}
	}


}