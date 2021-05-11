import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/common/message.plugin'

import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.config.productionTip = false

Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyB_Q6psJ8-0xfc-pJAisJwnPPpnGznyiBg',
  authDomain: 'vue-crm-48e82.firebaseapp.com',
  projectId: 'vue-crm-48e82',
  storageBucket: 'vue-crm-48e82.appspot.com',
  messagingSenderId: '292110583675',
  appId: '1:292110583675:web:8431978eaa8f824df49fde',
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
})
