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
		products: [
			{
				id: '1',
				title: 'Lenovo Legion Y520',
				vendor: 'lenovo',
				color: 'black',
				material: 'metal/plastic',
				description:
					'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
				price: 760,
				promo: false,
				imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg',
			},
			{
				id: '2',
				title: 'Asus FX503VD',
				vendor: 'Asus',
				color: 'white',
				material: 'plastic',
				description:
					'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
				price: 984,
				promo: true,
				imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg',
			},
		],
	},
	mutations: {
		createProduct(state, payload) {
			state.products.push(payload)
		},
	},
	actions: {
		async createProduct({commit, getters}, payload) {
			commit('clearError')
			commit('setLoading', true)
			try {
				const newProduct = new Product(
					payload.title,
					payload.vendor,
					payload.description,
					payload.price,
					payload.color,
					payload.material,
					payload.promo,
					payload.imageSrc,
					getters.user.id
				)
				const product = await fb.database().ref('products').push(newProduct)
				commit('setLoading', false)
				commit('createProduct', {
					...newProduct,
					id: product.key,
				})
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
		myProducts(state) {
			return state.products
		},
		productById(state) {
			return productId => {
				return state.products.find(product => product.id === productId)
			}
		},
	},
}
