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
  mutations: {},
  actions: {},
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
