import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase/app'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDOCAbC123dEf456GhI789jKl01-MnO',
      authDomain: 'myapp-project-123.firebaseapp.com',
      databaseURL: 'https://myapp-project-123.firebaseio.com',
      projectId: 'myapp-project-123',
      storageBucket: 'myapp-project-123.appspot.com',
      messagingSenderId: '65211879809',
      appId: '1:65211879909:web:3ae38ef1cdcb2e01fe5f0c',
      measurementId: 'G-8GSGZQ44ST',
    }
    fb.initializeApp(firebaseConfig)
  },
}).$mount('#app')
