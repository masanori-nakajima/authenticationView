import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

const config = {
  apiKey: "AIzaSyAtYjdbsiH3Lul00_dNgq9aQA7OQQn-IaY",
  authDomain: "sampleproject-48387.firebaseapp.com",
  projectId: "sampleproject-48387",
  storageBucket: "sampleproject-48387.appspot.com",
  messagingSenderId: "772778113844",
  appId: "1:772778113844:web:71d7e495bc7d0ba2668361",
  measurementId: "G-38ED9W36HC"
}

firebase.initializeApp(config);