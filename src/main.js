import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAGErU0AGrQ-vmKbgdbJfD-TvLbSuE7QYg',
      authDomain: 'vue-store-85591.firebaseapp.com',
      databaseURL: 'https://vue-store-85591.firebaseio.com',
      projectId: 'vue-store-85591',
      storageBucket: 'vue-store-85591.appspot.com',
      messagingSenderId: '743905533286',
      appId: '1:743905533286:web:ad29b19e4626387e0c7ca7',
    }
    fb.initializeApp(firebaseConfig)
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  },
}).$mount('#app')
