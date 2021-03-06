import * as fb from 'firebase'

class Product {
	constructor(
		title,
		vendor,
		description,
		price,
		color,
		material,
		promo = false,
		imageSrc = '',
		ownerId,
		id = null
	) {
		this.title = title
		this.vendor = vendor
		this.description = description
		this.price = price
		this.color = color
		this.material = material
		this.promo = promo
		this.imageSrc = imageSrc
		this.ownerId = ownerId
		this.id = id
	}
}

export default {
	state: {
		products: [],
	},
	mutations: {
		createProduct(state, payload) {
			state.products.push(payload)
		},
		loadProducts(state, payload) {
			state.products = payload
		},
		updateProduct(state, {title, description, id}) {
			const product = state.products.find(product => product.id === id)
			product.title = title
			product.description = description
		},
	},
	actions: {
		async createProduct({commit, getters}, payload) {
			commit('clearError')
			commit('setLoading', true)
			const image = payload.image
			try {
				const newProduct = new Product(
					payload.title,
					payload.vendor,
					payload.description,
					payload.price,
					payload.color,
					payload.material,
					payload.promo,
					'',
					getters.user.id
				)
				const product = await fb.database().ref('products').push(newProduct)
				const imageExt = image.name.slice(image.name.lastIndexOf('.'))
				const fileData = await fb
					.storage()
					.ref(`products/${product.key}.${imageExt}`)
					.put(image)
				const imageSrc = await fb
					.storage()
					.ref()
					.child(fileData.ref.fullPath)
					.getDownloadURL()
				await fb
					.database()
					.ref('products')
					.child(product.key)
					.update({imageSrc})
				commit('setLoading', false)
				commit('createProduct', {
					...newProduct,
					id: product.key,
					imageSrc,
				})
			} catch (error) {
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
		},
		async fetchProducts({commit}) {
			commit('clearError')
			commit('setLoading', true)
			try {
				const productsVal = await fb.database().ref('products').once('value')
				const products = productsVal.val()
				const resultProducts = []
				Object.keys(products).forEach(key => {
					const product = products[key]
					resultProducts.push(
						new Product(
							product.title,
							product.vendor,
							product.description,
							product.price,
							product.color,
							product.material,
							product.promo,
							product.imageSrc,
							product.ownerId,
							key
						)
					)
				})
				commit('loadProducts', resultProducts)
				commit('setLoading', false)
			} catch (error) {
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
		},
		async updateProduct({commit}, {title, description, id}) {
			commit('clearError')
			commit('setLoading', true)
			try {
				await fb
					.database()
					.ref('products')
					.child(id)
					.update({title, description})
				commit('updateProduct', {title, description, id})
				commit('setLoading', false)
			} catch (error) {
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
		},
	},
	getters: {
		products(state) {
			return state.products
		},
		promoProducts(state) {
			return state.products.filter(product => product.promo)
		},
		myProducts(state, getters) {
			return state.products.filter(
				product => product.ownerId === getters.user.id
			)
		},
		productById(state) {
			return productId => {
				return state.products.find(product => product.id === productId)
			}
		},
	},
}
