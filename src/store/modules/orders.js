import * as fb from 'firebase'

class Order {
	constructor(name, phone, productId, done = false, id = null) {
		this.name = name
		this.phone = phone
		this.productId = productId
		this.done = done
		this.id = id
	}
}

export default {
	state: {
		orders: [],
	},
	mutations: {
		loadOrders(state, payload) {
			state.orders = payload
		},
	},
	actions: {
		async createOrder({commit}, {name, phone, productId, ownerId}) {
			commit('clearError')
			const order = new Order(name, phone, productId)
			try {
				await fb.database().ref(`users/${ownerId}/orders`).push(order)
			} catch (error) {
				commit('setError', error.message)
				throw error
			}
		},

		async fetchOrders({commit, getters}) {
			commit('clearError')
			commit('setLoading', true)
			try {
				const fbVal = await fb
					.database()
					.ref(`users/${getters.user.id}/orders`)
					.once('value')
				const orders = fbVal.val()
				const resultOrders = []

				Object.keys(orders).forEach(key => {
					const order = orders[key]
					resultOrders.push(
						new Order(order.name, order.phone, order.productId, order.done, key)
					)
				})
				commit('loadOrders', resultOrders)
				commit('setLoading', false)
			} catch (error) {
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
		},

		async markOrderDone({commit, getters}, payload) {
			commit('clearError')
			try {
				await fb
					.database()
					.ref(`users/${getters.user.id}/orders`)
					.child(payload)
					.update({done: true})
			} catch (error) {
				commit('setError', error.message)
				throw error
			}
		},
	},
	getters: {
		doneOrders(state) {
			return state.orders.filter(order => order.done)
		},
		undoneOrders(state) {
			return state.orders.filter(order => !order.done)
		},
		orders(state, getters) {
			return getters.undoneOrders.concat(getters.doneOrders)
		},
	},
}
