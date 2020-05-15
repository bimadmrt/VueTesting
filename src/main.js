import Vue from 'vue'
import * as firebase from 'firebase'
import store from './store'
import App from './App.vue'
import router from './router'
import '@/plugins'
import './registerServiceWorker'

Vue.config.productionTip = false

const configOptions = {
  apiKey: 'AIzaSyB7okS0YS5oFk6fZhL0jhUufPefaIShf-c',
  authDomain: 'vuetestingmeal.firebaseapp.com',
  databaseURL: 'https://vuetestingmeal.firebaseio.com',
  projectId: 'vuetestingmeal',
  storageBucket: 'vuetestingmeal.appspot.com',
  messagingSenderId: '141441205250',
  appId: '1:141441205250:web:fc6603802aec99b4e5931b',
  measurementId: 'G-LDCH4M2SW5'
}

firebase.initializeApp(configOptions)

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
